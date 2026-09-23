create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  email text not null,
  organisation text not null,
  role text not null,
  product_interest text not null,
  message text,
  page text,
  referrer text,
  user_agent text,
  email_sent boolean not null default false,
  email_error text
);

-- RLS on with no policies: only the submit-lead Edge Function (secret key) can read or write.
alter table public.leads enable row level security;

comment on table public.leads is 'Website contact-form leads, written by the submit-lead Edge Function.';
