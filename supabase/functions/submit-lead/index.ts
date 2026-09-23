import { createClient } from "npm:@supabase/supabase-js@2";

const ALLOWED_ORIGINS = new Set([
  "https://socioprophet.com",
  "https://www.socioprophet.com",
  "https://socioprophet-marketing.web.app",
  "https://socioprophet-marketing.firebaseapp.com",
]);
const PREVIEW_ORIGIN = /^https:\/\/socioprophet-marketing--[a-z0-9-]+\.web\.app$/;
const LOCAL_ORIGIN = /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/;

const PRODUCT_INTERESTS = new Set(["noetica", "prophet-platform", "scope-d", "general"]);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REQUIRED = ["first_name", "last_name", "email", "organisation", "role", "product_interest"] as const;

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
    `Area of interest: ${lead.product_interest}`,
    "",
    "Message:",
    lead.message || "(none)",
    "",
    `Page: ${lead.page ?? ""}`,
    `Referrer: ${lead.referrer ?? ""}`,
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
  if (text(body.website, 200)) return json(200, { ok: true });

  const lead: Lead = {
    first_name: text(body.first_name, 100),
    last_name: text(body.last_name, 100),
    email: text(body.email, 320).toLowerCase(),
    organisation: text(body.organisation, 200),
    role: text(body.role, 200),
    product_interest: text(body.product_interest, 32),
    message: text(body.message, 4000) || null,
    page: text(body.page, 256) || null,
    referrer: text(req.headers.get("referer"), 2048) || null,
    user_agent: text(req.headers.get("user-agent"), 512) || null,
  };

  const missing = REQUIRED.filter((key) => !lead[key]);
  if (missing.length) return json(400, { ok: false, error: "missing-required-fields", fields: missing });
  if (!EMAIL_RE.test(lead.email)) return json(400, { ok: false, error: "invalid-email" });
  if (!PRODUCT_INTERESTS.has(lead.product_interest)) {
    return json(400, { ok: false, error: "invalid-product-interest" });
  }

  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, serverKey(), {
    auth: { persistSession: false },
  });

  const { data, error } = await supabase.from("leads").insert(lead).select("id").single();
  if (error) {
    console.error("lead insert failed", error);
    return json(500, { ok: false, error: "storage-failed" });
  }

  // The lead is already stored, so a failed email is recorded on the row rather than failing the request.
  const email = await sendNotification(lead);
  if (!email.ok) console.error("lead notification failed", email.error);
  await supabase.from("leads").update({ email_sent: email.ok, email_error: email.error ?? null }).eq("id", data.id);

  return json(200, { ok: true, id: data.id, emailSent: email.ok });
});
