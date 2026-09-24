import { createClient } from "npm:@supabase/supabase-js@2";

const ALLOWED_ORIGINS = new Set([
  "https://socioprophet.com",
  "https://www.socioprophet.com",
  "https://socioprophet-marketing.web.app",
  "https://socioprophet-marketing.firebaseapp.com",
]);
const PREVIEW_ORIGIN = /^https:\/\/socioprophet-marketing--[a-z0-9-]+\.web\.app$/;
const LOCAL_ORIGIN = /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/;

const PRODUCT_LABELS: Record<string, string> = {
  noetica: "Noetica",
  "prophet-platform": "Prophet Platform",
  "scope-d": "SCOPE-D",
  general: "General Enquiry",
};
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REQUIRED = ["first_name", "last_name", "email", "organisation", "role", "product_interest"] as const;

const MIN_FILL_MS = 3_000;
const MAX_PER_VISITOR_PER_HOUR = 5;
const HOUR_MS = 60 * 60 * 1000;

type Lead = {
  first_name: string;
  last_name: string;
  email: string;
  organisation: string;
  role: string;
  product_interest: string;
  message: string | null;
  page: string | null;
  referrer: string | null;
  user_agent: string | null;
  ip_hash: string | null;
};

function corsHeaders(origin: string): Record<string, string> {
  const allowed = ALLOWED_ORIGINS.has(origin) || PREVIEW_ORIGIN.test(origin) || LOCAL_ORIGIN.test(origin);
  if (!allowed) return { Vary: "Origin" };
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "content-type",
    Vary: "Origin",
  };
}

function serverKey(): string {
  const keys = Deno.env.get("SUPABASE_SECRET_KEYS");
  if (keys) {
    const parsed = JSON.parse(keys) as Record<string, string>;
    const key = parsed.default ?? Object.values(parsed)[0];
    if (key) return key;
  }
  return Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
}

async function hashIp(ip: string, key: string): Promise<string> {
  const enc = new TextEncoder();
  const cryptoKey = await crypto.subtle.importKey("raw", enc.encode(key), { name: "HMAC", hash: "SHA-256" }, false, [
    "sign",
  ]);
  const sig = await crypto.subtle.sign("HMAC", cryptoKey, enc.encode(ip));
  return Array.from(new Uint8Array(sig), (b) => b.toString(16).padStart(2, "0")).join("");
}

function dailyNotifyCap(): number {
  const cap = Number(Deno.env.get("LEAD_NOTIFY_DAILY_CAP"));
  return Number.isFinite(cap) && cap > 0 ? cap : 50;
}

function text(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function singleLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ");
}

async function sendNotification(lead: Lead): Promise<{ ok: boolean; error?: string }> {
  const apiKey = Deno.env.get("RESEND_API_KEY");
  if (!apiKey) return { ok: false, error: "RESEND_API_KEY is not set" };

  const to = (Deno.env.get("LEAD_NOTIFY_TO") ?? "marketing@socioprophet.ai")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const from = Deno.env.get("LEAD_NOTIFY_FROM") ?? "SocioProphet Website <leads@socioprophet.ai>";
  const subject = singleLine(
    `New website lead: ${lead.first_name} ${lead.last_name} (${lead.organisation})`,
  ).slice(0, 200);
  const body = [
    `Name: ${lead.first_name} ${lead.last_name}`,
    `Email: ${lead.email}`,
    `Organisation: ${lead.organisation}`,
    `Role: ${lead.role}`,
    `Area of interest: ${PRODUCT_LABELS[lead.product_interest] ?? lead.product_interest}`,
    "",
    "Message:",
    lead.message || "(none)",
    "",
    `Page: ${lead.page ?? ""}`,
    `Came from: ${lead.referrer ?? "direct visit or unknown"}`,
    "",
    "Reply to this email to respond to the lead directly.",
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to, reply_to: lead.email, subject, text: body }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) return { ok: false, error: `Resend ${res.status}: ${(await res.text()).slice(0, 500)}` };
    return { ok: true };
  } catch (err) {
    return { ok: false, error: String(err).slice(0, 500) };
  }
}

Deno.serve(async (req) => {
  const cors = corsHeaders(req.headers.get("origin") ?? "");
  const json = (status: number, payload: unknown) =>
    new Response(JSON.stringify(payload), {
      status,
      headers: { ...cors, "Content-Type": "application/json", "Cache-Control": "no-store" },
    });

  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
  if (req.method !== "POST") return json(405, { ok: false, error: "method-not-allowed" });

  let body: Record<string, unknown>;
  try {
    const parsed = await req.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("not an object");
    body = parsed;
  } catch {
    return json(400, { ok: false, error: "invalid-json" });
  }

  // Honeypot: real visitors never see or fill this field.
  if (text(body.sp_field_7, 200)) return json(200, { ok: true });

  // Bots submit instantly; a person retrying after a few seconds gets through.
  const elapsed = typeof body.elapsed_ms === "number" ? body.elapsed_ms : -1;
  if (elapsed < MIN_FILL_MS) return json(400, { ok: false, error: "too-fast" });

  const lead: Lead = {
    first_name: text(body.first_name, 100),
    last_name: text(body.last_name, 100),
    email: text(body.email, 320).toLowerCase(),
    organisation: text(body.organisation, 200),
    role: text(body.role, 200),
    product_interest: text(body.product_interest, 32),
    message: text(body.message, 4000) || null,
    page: text(body.page, 256) || null,
    // Sent by the page (document.referrer); the request's own Referer header is only ever our site.
    referrer: text(body.referrer, 2048) || null,
    user_agent: text(req.headers.get("user-agent"), 512) || null,
    ip_hash: null,
  };

  const missing = REQUIRED.filter((key) => !lead[key]);
  if (missing.length) return json(400, { ok: false, error: "missing-required-fields", fields: missing });
  if (!EMAIL_RE.test(lead.email)) return json(400, { ok: false, error: "invalid-email" });
  if (!Object.hasOwn(PRODUCT_LABELS, lead.product_interest)) {
    return json(400, { ok: false, error: "invalid-product-interest" });
  }

  const key = serverKey();
  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, key, {
    auth: { persistSession: false },
  });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim();
  if (ip) {
    lead.ip_hash = await hashIp(ip, key);
    const { count, error: countError } = await supabase
      .from("leads")
      .select("id", { count: "exact", head: true })
      .eq("ip_hash", lead.ip_hash)
      .gte("created_at", new Date(Date.now() - HOUR_MS).toISOString());
    if (countError) console.error("rate limit check failed", countError);
    else if ((count ?? 0) >= MAX_PER_VISITOR_PER_HOUR) return json(429, { ok: false, error: "rate-limited" });
  }

  const { data, error } = await supabase.from("leads").insert(lead).select("id").single();
  if (error) {
    console.error("lead insert failed", error);
    return json(500, { ok: false, error: "storage-failed" });
  }

  // The lead is already stored, so a failed or skipped email is recorded on the row rather than failing the request.
  const { count: sentToday } = await supabase
    .from("leads")
    .select("id", { count: "exact", head: true })
    .eq("email_sent", true)
    .gte("created_at", new Date(Date.now() - 24 * HOUR_MS).toISOString());
  const email = (sentToday ?? 0) >= dailyNotifyCap()
    ? { ok: false, error: "daily notification cap reached" }
    : await sendNotification(lead);
  if (!email.ok) console.error("lead notification failed", email.error);
  await supabase.from("leads").update({ email_sent: email.ok, email_error: email.error ?? null }).eq("id", data.id);

  return json(200, { ok: true, id: data.id, emailSent: email.ok });
});
