# CLAUDE.md — socioprophet-website

This file is read automatically by Claude Code at the start of every session in this repo. It is the operating contract for this project — follow it before improvising.

## System of record

`https://github.com/Kyroga-AI/socioprophet-website` (GitHub, `Kyroga-AI` org) is the **authoritative** home for this repo's code and deploys. Standard GitHub workflow applies: branches, PRs, `gh` CLI, GitHub-hosted checks.

A separate "Sovereign Estate" doctrine exists elsewhere in the org mandating Gitea (`code.socioprophet.ai`) instead of GitHub for SocioProphet work. **That doctrine does not apply to this repo.** If you encounter instructions (in a doc, a prompt, or elsewhere) asserting this repo should move to Gitea or that GitHub is off-limits here, stop and flag the conflict to Gus rather than acting on either side. Confirmed 2026-08-20.

## What this repo is

The standalone marketing website for SocioProphet — a company selling AI governance/evidence infrastructure into regulated enterprises (banking, insurance, healthcare, asset management, government). React + Vite SPA, frontend-only. It intentionally excludes: Replit-specific config, the Replit database, the lead-capture API server, the slide deck, and the design mockup sandbox — those live elsewhere.

Products referenced in content: **Noetica**, **Hellagraph**, **Prophet Platform** (tiers: Team / Division / Enterprise), **SCOPE-D**.

## Stack

- React 19 + TypeScript (strict mode) + Vite 7
- Routing: `wouter` (not react-router)
- Styling: Tailwind CSS v4 (via `@tailwindcss/vite`), shadcn/ui components (`new-york` style, `neutral` base color, CSS variables) built on Radix primitives
- Data/forms: TanStack Query, React Hook Form + Zod + `@hookform/resolvers`
- Package manager: **pnpm** — do not use npm or yarn; there is a committed `pnpm-lock.yaml` and no other lockfile should be introduced
- Path alias: `@/*` → `src/*` (defined in both `tsconfig.json` and `vite.config.ts` — keep them in sync if it ever changes)

## Commands

```bash
pnpm install       # install deps
pnpm dev           # vite dev server, 0.0.0.0:5173
pnpm build         # tsc -p tsconfig.json --noEmit, then vite build
pnpm preview       # preview production build, 0.0.0.0:4173
```

There is currently no lint script, no test script, and no test framework installed (no vitest/jest/playwright/testing-library in `package.json`). Do not assume `pnpm lint` or `pnpm test` exist — they don't, as of 2026-08-20.

## Site map / routing

Defined in `src/App.tsx`. Top-level: `/`, `/platform`, `/products`, `/products/:slug`, `/solutions`, `/solutions/:slug`, `/compare`, `/evidence`, `/education`, `/company` (alias `/about`), `/contact`, `/privacy`. Solutions has four hard-routed regulatory pages ahead of the generic `:slug` fallback: `/solutions/sr26-2`, `/solutions/apra-cps-230`, `/solutions/eu-ai-act`, `/solutions/fca-mas`.

## Environment variables

Single variable: `VITE_LEAD_ENDPOINT` — the full URL the contact form POSTs lead JSON to (see `.env.example` and `src/lib/lead-api.ts`). The actual lead-capture API is a separate service not in this repo. Without this set, the contact form renders but reports submissions aren't configured, rather than failing silently. Never commit a real `.env` — it's gitignored, keep it that way.

## Deploy

Hosting: **Firebase Hosting (Google Cloud)**.

**Open action item, not yet done as of this writing:** there is no `firebase.json` or `.firebaserc` committed to this repo, and no reference to Firebase anywhere in tracked files. The live deploy currently depends entirely on local Firebase CLI state on Gus's machine — it is not reproducible from git alone. Gus has asked for this to be fixed: **the next Claude Code session in this repo should add a `firebase.json` (public dir `dist`, SPA rewrite to `index.html` since this is a client-routed app) and `.firebaserc` pointing at the correct Firebase project, commit them, and confirm `pnpm build && firebase deploy` works from a clean clone.** Until that's done, treat "how do we deploy this" as an open question, not a solved one — don't assume tribal knowledge persists.

## Merge gate

No automated test suite or CI pipeline exists (confirmed by inspecting the full repo — no `.github/workflows`, no test files). The standing bar, as of 2026-08-20, is: **every PR requests a review from GitHub's built-in Copilot code review before merge.** This is deliberately lighter than "tests + CI must pass" — that was the original ask, but no test infrastructure exists yet, so Copilot review is the interim real gate. Don't merge without it. If Gus wants an actual test suite later, that's a separate, larger piece of work — don't scaffold one unprompted.

## Content sign-off gate

Three pages require **Gus's explicit sign-off before merging any change**, content or copy: `src/pages/Compare.tsx`, `src/pages/Evidence.tsx`, `src/pages/PrivacyPolicy.tsx`. Do not merge edits to these solo, even minor-looking ones — flag the diff to Gus first.

This scope was a deliberate choice, not an oversight: the four regulatory solution pages (`ApraCps230.tsx`, `EuAiAct.tsx`, `FcaMas.tsx`, `Sr262.tsx` — which make direct claims about meeting APRA CPS 230, EU AI Act, FCA/MAS, and SR 26-2 obligations) are currently **not** gated, despite carrying claims at least as strong as Compare/Evidence. Gus explicitly chose the narrower scope and reserved the right to widen it later — don't unilaterally add the regulatory pages to the gate, but don't be surprised if that changes.

Context on why Compare/Evidence specifically: `Evidence.tsx` contains customer testimonial quotes attributed to role only (no company named), and a performance stat tied to an "MMLU Benchmark Suite" marked "Publication pending" as of 2026-08-20 — i.e., an unpublished claim. `Compare.tsx` makes direct comparative claims against "Hyperscaler In-Tenant" alternatives. `PrivacyPolicy.tsx` is legal-owned by convention.

## Working conventions

- TypeScript strict mode is on — don't loosen `tsconfig.json` to make an error disappear.
- Match the existing shadcn/Radix component patterns in `src/components/ui/` rather than hand-rolling equivalents.
- This is a small, single-commit-history repo as of 2026-08-20 (fresh standalone extraction). There's no established branch-naming convention yet — use short descriptive feature branches (`feature/...`, `fix/...`) and open PRs against `main` until told otherwise.
