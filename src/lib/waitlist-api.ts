const WAITLIST_ENDPOINT = "https://hrraiacqhxztndranmtf.supabase.co/functions/v1/join-waitlist";
const RETRY_DELAYS_MS = [1_000, 3_000];

export const COMPANY_SIZES = [
  { value: "1-5", label: "1–5 people" },
  { value: "6-25", label: "6–25 people" },
  { value: "26-100", label: "26–100 people" },
  { value: "101-500", label: "101–500 people" },
  { value: "500+", label: "More than 500 people" },
] as const;

export const INDUSTRIES = [
  { value: "banking-finance", label: "Banking & financial services" },
  { value: "cleaning-facilities", label: "Cleaning & facility services" },
  { value: "construction-trades", label: "Construction & trades" },
  { value: "education-training", label: "Education & training" },
  { value: "government", label: "Government & public sector" },
  { value: "health-care", label: "Health & care" },
  { value: "hospitality-food", label: "Hospitality & food" },
  { value: "insurance", label: "Insurance" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "professional-services", label: "Professional services (accounting, legal, consulting)" },
  { value: "real-estate", label: "Real estate & property" },
  { value: "retail", label: "Retail" },
  { value: "technology", label: "Technology & IT" },
  { value: "transport-logistics", label: "Transport & logistics" },
  { value: "wholesale-distribution", label: "Wholesale & distribution" },
  { value: "other", label: "Other" },
] as const;

export type JoinWaitlistRequest = {
  email: string;
  companySize: string;
  industry: string;
  industryOther?: string;
  fullName?: string;
  companyName?: string;
  heardAbout?: string;
  reason?: string;
  sp_field_7?: string;
};

export async function joinWaitlist(data: JoinWaitlistRequest, source: string, elapsedMs: number): Promise<void> {
  const body = JSON.stringify({
    email: data.email,
    company_size: data.companySize,
    industry: data.industry,
    industry_other: data.industry === "other" ? data.industryOther ?? "" : "",
    full_name: data.fullName ?? "",
    company_name: data.companyName ?? "",
    heard_about: data.heardAbout ?? "",
    reason: data.reason ?? "",
    source,
    sp_field_7: data.sp_field_7 ?? "",
    elapsed_ms: elapsedMs,
    page: window.location.href,
    referrer: document.referrer,
  });

  // Venue Wi-Fi drops requests; retrying is safe because the server ignores duplicate sign-ups.
  let lastError: unknown;
  for (let attempt = 0; attempt <= RETRY_DELAYS_MS.length; attempt++) {
    if (attempt > 0) await new Promise((resolve) => setTimeout(resolve, RETRY_DELAYS_MS[attempt - 1]));

    let response: Response;
    try {
      response = await fetch(WAITLIST_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        signal: AbortSignal.timeout(15_000),
      });
    } catch (error) {
      lastError = error;
      continue;
    }

    if (response.ok) return;
    lastError = new Error(`Waitlist sign-up failed with status ${response.status}.`);
    if (response.status < 500) break;
  }
  throw lastError;
}
