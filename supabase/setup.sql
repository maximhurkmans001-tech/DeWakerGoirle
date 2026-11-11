-- Uitvoeren in de Supabase SQL Editor. Alleen de server beheert dit register.
create table if not exists public.residents (
 user_id uuid primary key references auth.users(id) on delete cascade,
 email text unique not null check(email=lower(email)),
 active boolean not null default true,
 created_at timestamptz not null default now()
);
alter table public.residents enable row level security;
revoke all on public.residents from anon, authenticated;
grant select,insert,update,delete on public.residents to service_role;
-- Geen publieke RLS-policies toevoegen. De service role blijft uitsluitend op de server.
