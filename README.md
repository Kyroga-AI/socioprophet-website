# SocioProphet Website

The standalone marketing website for SocioProphet.

## Includes

- React + Vite source for the public website
- Archive / Copper visual system and SocioProphet brand assets
- All page content, regulatory brief pages, and static public assets
- A contact form that posts to a configurable lead endpoint

## Does not include

This repository intentionally excludes Replit-specific configuration, the Replit database, the lead-capture API server, the slide deck, and the design mockup sandbox.

## Run locally

```bash
pnpm install
pnpm dev
```

Then open the local URL Vite prints in the terminal.

## Build for production

```bash
pnpm build
pnpm preview
```

## Configure lead submissions

The contact form is frontend-only in this repository. Before deploying it, create a `.env` file from `.env.example` and set `VITE_LEAD_ENDPOINT` to a public HTTPS endpoint that accepts a JSON `POST` request containing:

```json
{
  "firstName": "…",
  "lastName": "…",
  "email": "…",
  "organisation": "…",
  "role": "…",
  "productInterest": "general",
  "message": "…"
}
```

Without this setting, the form remains visible but clearly reports that submissions have not been configured.
