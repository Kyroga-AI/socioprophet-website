create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null,
  source text not null,
  page text,
  referrer text,
  user_agent text,
  ip_hash text,
  welcome_sent boolean not null default false,
  welcome_error text,
  -- Set by hand when someone replies "unsubscribe"; exclude these rows from any future send.
  unsubscribed_at timestamptz,
  unique (email, source)
);

-- RLS on with no policies: only the join-waitlist Edge Function (secret key) can read or write.
alter table public.waitlist enable row level security;

create index if not exists waitlist_ip_hash_created_at_idx on public.waitlist (ip_hash, created_at desc);
create index if not exists waitlist_created_at_idx on public.waitlist (created_at desc);

comment on table public.waitlist is 'Early-access waitlist sign-ups (e.g. Noetica beta), written by the join-waitlist Edge Function.';
