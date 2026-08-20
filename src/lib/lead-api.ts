export type CreateLeadRequest = {
  firstName: string;
  lastName: string;
  email: string;
  organisation: string;
  role: string;
  productInterest: "noetica" | "prophet-platform" | "scope-d" | "general";
  message?: string;
};

export async function submitLead(data: CreateLeadRequest): Promise<void> {
  const endpoint = import.meta.env.VITE_LEAD_ENDPOINT?.trim();

  if (!endpoint) {
    throw new Error("Lead submission is not configured. Set VITE_LEAD_ENDPOINT before deploying.");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Lead submission failed with status ${response.status}.`);
  }
}
