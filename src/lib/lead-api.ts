export type CreateLeadRequest = {
  firstName: string;
  lastName: string;
  email: string;
  organisation: string;
  role: string;
  productInterest: "noetica" | "prophet-platform" | "scope-d" | "general";
  message?: string;
  sp_field_7?: string;
};

const DEFAULT_LEAD_ENDPOINT = "https://hrraiacqhxztndranmtf.supabase.co/functions/v1/submit-lead";

export async function submitLead(data: CreateLeadRequest, elapsedMs: number): Promise<void> {
  const endpoint = import.meta.env.VITE_LEAD_ENDPOINT?.trim() || DEFAULT_LEAD_ENDPOINT;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      organisation: data.organisation,
      role: data.role,
      product_interest: data.productInterest,
      message: data.message ?? "",
      page: window.location.href,
      referrer: document.referrer,
      sp_field_7: data.sp_field_7 ?? "",
      elapsed_ms: elapsedMs,
    }),
  });

  if (!response.ok) {
    throw new Error(`Lead submission failed with status ${response.status}.`);
  }
}
