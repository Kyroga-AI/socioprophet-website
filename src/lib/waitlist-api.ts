const WAITLIST_ENDPOINT = "https://hrraiacqhxztndranmtf.supabase.co/functions/v1/join-waitlist";
const RETRY_DELAYS_MS = [1_000, 3_000];

export type JoinWaitlistRequest = {
  email: string;
  source: string;
  sp_field_7?: string;
};

export async function joinWaitlist(data: JoinWaitlistRequest, elapsedMs: number): Promise<void> {
  const body = JSON.stringify({
    email: data.email,
    source: data.source,
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
