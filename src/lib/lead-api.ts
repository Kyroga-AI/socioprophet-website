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
  const endpoint = import.meta.env.VITE_LEAD_ENDPOINT?.trim() || "/api/lead";

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: data.email,
      surface: "website_contact",
      audience: "organization",
      first_name: data.firstName,
      last_name: data.lastName,
      organisation: data.organisation,
      role: data.role,
      product_interest: data.productInterest,
      notes: data.message ?? "",
      page: "/contact",
    }),
  });

  if (!response.ok) {
    throw new Error(`Lead submission failed with status ${response.status}.`);
  }
}
