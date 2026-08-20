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

No automated test suite or CI pipeline exists (confirmed by inspecting the full repo — no `.github/workflows`, no test files). The standing bar, as of 2026-08-20, was originally **GitHub's built-in Copilot code review before merge**, but the `Kyroga-AI` org has no Copilot Pro/Pro+/Business/Enterprise license — confirmed via the repo's Settings → Copilot → Cloud agent page, which shows the same license gate blocks both Copilot cloud agent and Copilot as a requestable PR reviewer. Requesting a Copilot review via `gh pr edit --add-reviewer` or the REST API silently no-ops instead of erroring, so don't trust a clean exit code as proof it worked — check `gh pr view <n> --json reviewRequests` actually lists it.

Until that license exists, the interim gate is: **every PR gets reviewed with Claude Code's `/code-review` skill before merge**, and the findings get addressed or explicitly waved off before merging. This is weaker than Copilot review — it's the same family of model that may have written the change reviewing it, not an independent reviewer, and it doesn't show up as a GitHub-native PR check, so nothing blocks a merge if the step gets skipped; it relies on whoever's merging actually running it. If Gus provisions a Copilot seat later, switch back to requesting Copilot review (verify it actually attached, per above) and revert this section. If Gus wants an actual test suite, that's a separate, larger piece of work — don't scaffold one unprompted.

## Content sign-off gate

Three pages require **Gus's explicit sign-off before merging any change**, content or copy: `src/pages/Compare.tsx`, `src/pages/Evidence.tsx`, `src/pages/PrivacyPolicy.tsx`. Do not merge edits to these solo, even minor-looking ones — flag the diff to Gus first.

This scope was a deliberate choice, not an oversight: the four regulatory solution pages (`ApraCps230.tsx`, `EuAiAct.tsx`, `FcaMas.tsx`, `Sr262.tsx` — which make direct claims about meeting APRA CPS 230, EU AI Act, FCA/MAS, and SR 26-2 obligations) are currently **not** gated, despite carrying claims at least as strong as Compare/Evidence. Gus explicitly chose the narrower scope and reserved the right to widen it later — don't unilaterally add the regulatory pages to the gate, but don't be surprised if that changes.

Context on why Compare/Evidence specifically: `Evidence.tsx` contains customer testimonial quotes attributed to role only (no company named), and a performance stat tied to an "MMLU Benchmark Suite" marked "Publication pending" as of 2026-08-20 — i.e., an unpublished claim. `Compare.tsx` makes direct comparative claims against "Hyperscaler In-Tenant" alternatives. `PrivacyPolicy.tsx` is legal-owned by convention.

## Content & Fix Register

Work on this site is tracked in the GitHub Project "Website Ops" (Kyroga-AI org) — every content change, bug fix, or feature gets an issue before work starts (use the "Website Item" template).

Pipeline: Backlog → Ready → In Progress → In Review → Awaiting Sign-off (gated items only) → Done.

When picking up an item:
1. Move its Status to "In Progress" when starting.
2. Open a PR referencing it (`Closes #<n>`).
3. If the PR touches `src/pages/Compare.tsx`, `src/pages/Evidence.tsx`, or `src/pages/PrivacyPolicy.tsx`, apply the `gate:sign-off` label to both issue and PR, and move the item to "Awaiting Sign-off" instead of letting it advance to "In Review." Do not merge until Gus explicitly approves, regardless of automated review outcome.
4. Otherwise, built-in Project automation advances the item through In Review to Done as the PR opens and merges.
5. Priority is set by Gus, not by Claude Code — don't reprioritize items on your own.

Labels: `type:content` / `type:fix` / `type:feature` describe the work; `gate:sign-off` marks a gated page per above; `gate:regulatory` flags the four regulatory solution pages (APRA CPS 230, EU AI Act, FCA/MAS, SR 26-2) for visibility only — not currently blocking.

## Working conventions

- TypeScript strict mode is on — don't loosen `tsconfig.json` to make an error disappear.
- Match the existing shadcn/Radix component patterns in `src/components/ui/` rather than hand-rolling equivalents.
- This is a small, single-commit-history repo as of 2026-08-20 (fresh standalone extraction). There's no established branch-naming convention yet — use short descriptive feature branches (`feature/...`, `fix/...`) and open PRs against `main` until told otherwise.
