-- Required fields (company_size, industry) are enforced by the join-waitlist function, so earlier rows stay valid.
alter table public.waitlist
  add column if not exists company_size text,
  add column if not exists industry text,
  add column if not exists industry_other text,
  add column if not exists company_name text,
  add column if not exists full_name text,
  add column if not exists heard_about text,
  add column if not exists reason text;
