import { createClient } from "npm:@supabase/supabase-js@2";

const ALLOWED_ORIGINS = new Set([
  "https://socioprophet.com",
  "https://www.socioprophet.com",
  "https://socioprophet-marketing.web.app",
  "https://socioprophet-marketing.firebaseapp.com",
]);
const PREVIEW_ORIGIN = /^https:\/\/socioprophet-marketing--[a-z0-9-]+\.web\.app$/;
const LOCAL_ORIGIN = /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SOURCE_RE = /^[a-z0-9-]{1,40}$/;
const DEFAULT_SOURCE = "noetica-beta";
const COMPANY_SIZES = new Set(["1-5", "6-25", "26-100", "101-500", "500+"]);
const INDUSTRIES = new Set([
  "construction-trades",
  "cleaning-facilities",
  "retail",
  "wholesale-distribution",
  "hospitality-food",
  "professional-services",
  "health-care",
  "transport-logistics",
  "technology",
  "education-training",
  "banking-finance",
  "insurance",
  "manufacturing",
  "real-estate",
  "government",
  "other",
]);

// One-field form with phone autofill can be submitted fast by a real person.
const MIN_FILL_MS = 1_000;
// Event attendees on shared venue Wi-Fi or mobile networks can share one IP, so this only stops floods.
const MAX_PER_IP_PER_HOUR = 150;
const HOUR_MS = 60 * 60 * 1000;

type Signup = {
  email: string;
  source: string;
  company_size: string;
  industry: string;
  industry_other: string | null;
  company_name: string | null;
  full_name: string | null;
  heard_about: string | null;
  reason: string | null;
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

function welcomeDailyCap(): number {
  const cap = Number(Deno.env.get("WAITLIST_WELCOME_DAILY_CAP"));
  return Number.isFinite(cap) && cap > 0 ? cap : 150;
}

function text(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

async function sendWelcome(email: string, fullName: string | null): Promise<{ ok: boolean; error?: string }> {
  const apiKey = Deno.env.get("RESEND_API_KEY");
  if (!apiKey) return { ok: false, error: "RESEND_API_KEY is not set" };

  const from = Deno.env.get("WAITLIST_FROM") ?? "SocioProphet <hello@socioprophet.ai>";
  const replyTo = Deno.env.get("WAITLIST_REPLY_TO") ?? "marketing@socioprophet.ai";
  const firstName = fullName?.split(/\s+/)[0];
  const body = [
    firstName ? `Hi ${firstName},` : "Hi,",
    "",
    "Thanks for your interest in Noetica.",
    "",
    "Noetica today is built for larger organisations. We're working on a version for businesses your size, and you're now on the list to hear about it first. We don't have a date yet. We'll email you when there's something you can try.",
    "",
    "What Noetica is about: AI where the knowledge stays yours. It runs on your own device, nothing you type trains anyone else's model, and you can bring your existing ChatGPT or Claude history with you.",
    "",
    "Read more in the meantime: https://socioprophet.com/products/noetica",
    "",
    "The SocioProphet team",
    "socioprophet.com",
    "",
    "You're receiving this because you joined the Noetica early-access list at socioprophet.com. To unsubscribe, reply with \"unsubscribe\" and we'll remove you.",
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [email],
        reply_to: replyTo,
        subject: "You're on the Noetica early-access list",
        text: body,
      }),
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

  const elapsed = typeof body.elapsed_ms === "number" ? body.elapsed_ms : -1;
  if (elapsed < MIN_FILL_MS) return json(400, { ok: false, error: "too-fast" });

  const email = text(body.email, 320).toLowerCase();
  if (!EMAIL_RE.test(email)) return json(400, { ok: false, error: "invalid-email" });

  const companySize = text(body.company_size, 20);
  if (!COMPANY_SIZES.has(companySize)) return json(400, { ok: false, error: "invalid-company-size" });
  const industry = text(body.industry, 40);
  if (!INDUSTRIES.has(industry)) return json(400, { ok: false, error: "invalid-industry" });
  const industryOther = industry === "other" ? text(body.industry_other, 100) : "";
  if (industry === "other" && !industryOther) return json(400, { ok: false, error: "missing-industry-other" });

  const source = text(body.source, 40).toLowerCase();
  const signup: Signup = {
    email,
    source: SOURCE_RE.test(source) ? source : DEFAULT_SOURCE,
    company_size: companySize,
    industry,
    industry_other: industryOther || null,
    company_name: text(body.company_name, 200) || null,
    full_name: text(body.full_name, 200) || null,
    heard_about: text(body.heard_about, 300) || null,
    reason: text(body.reason, 2000) || null,
    page: text(body.page, 256) || null,
    referrer: text(body.referrer, 2048) || null,
    user_agent: text(req.headers.get("user-agent"), 512) || null,
    ip_hash: null,
  };

  const key = serverKey();
  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, key, {
    auth: { persistSession: false },
  });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim();
  if (ip) {
    signup.ip_hash = await hashIp(ip, key);
    const { count, error: countError } = await supabase
      .from("waitlist")
      .select("id", { count: "exact", head: true })
      .eq("ip_hash", signup.ip_hash)
      .gte("created_at", new Date(Date.now() - HOUR_MS).toISOString());
    if (countError) console.error("rate limit check failed", countError);
    else if ((count ?? 0) >= MAX_PER_IP_PER_HOUR) return json(429, { ok: false, error: "rate-limited" });
  }

  // Duplicate sign-ups (same email + source) succeed silently, so retries are safe and nothing is revealed.
  const { data, error } = await supabase
    .from("waitlist")
    .upsert(signup, { onConflict: "email,source", ignoreDuplicates: true })
    .select("id");
  if (error) {
    console.error("waitlist insert failed", error);
    return json(500, { ok: false, error: "storage-failed" });
  }
  const id = data?.[0]?.id;
  if (!id) return json(200, { ok: true });

  const { count: sentToday } = await supabase
    .from("waitlist")
    .select("id", { count: "exact", head: true })
    .eq("welcome_sent", true)
    .gte("created_at", new Date(Date.now() - 24 * HOUR_MS).toISOString());
  const welcome = (sentToday ?? 0) >= welcomeDailyCap()
    ? { ok: false, error: "daily welcome cap reached" }
    : await sendWelcome(email, signup.full_name);
  if (!welcome.ok) console.error("waitlist welcome failed", welcome.error);
  await supabase.from("waitlist").update({ welcome_sent: welcome.ok, welcome_error: welcome.error ?? null }).eq("id", id);

  return json(200, { ok: true });
});
