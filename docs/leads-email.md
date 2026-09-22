# First-party lead email (Resend)

Lead forms POST to **`/api/leads`** (TanStack Start server route). The server
sends mail through [Resend](https://resend.com). No Resend key is exposed to the
browser.

**Ops (domain / DNS / env / Preview Protection):** see
[`docs/vercel-runbook.md`](./vercel-runbook.md).

**FormSubmit / `VITE_FORMSUBMIT_EMAIL` is no longer the primary path.** Mailto /
hotline / Zalo remain client **fallback only** when `/api/leads` fails or env is
missing. Prefer `LEADS_FROM_EMAIL` on the **verified** Resend domain
(`leads@thecamellia-sontra.com`).

## Vercel environment variables (server only)

Set in **Project → Settings → Environment Variables** (Production + Preview):

| Variable | Example | Notes |
|---|---|---|
| `RESEND_API_KEY` | `re_…` | From Resend dashboard → API Keys (**Sensitive**) |
| `LEADS_TO_EMAIL` | `you@inbox.com` | Where leads arrive |
| `LEADS_FROM_EMAIL` | `leads@thecamellia-sontra.com` | Must be a **verified** domain/sender in Resend. For smoke tests you can use `onboarding@resend.dev` (Resend test sender; delivery limits apply). |

Do **not** prefix these with `VITE_` — they must stay server-only.

Also set client `VITE_SITE_URL=https://thecamellia-sontra.com` (apex) — see runbook.

If any of the three server vars is missing, `/api/leads` returns **503** JSON with a Vietnamese
message; the form shows mailto / hotline / Zalo fallback.

## Verify Resend domain

1. Resend → Domains → Add `thecamellia-sontra.com`
2. Add the DNS records Resend shows (SPF / DKIM — e.g. `resend._domainkey` TXT, `rsend`/`send` CNAMEs; values **theo Resend / Mat Bao hiện tại**, không invent)
3. Wait until status is **Verified**
4. Set `LEADS_FROM_EMAIL` to e.g. `leads@thecamellia-sontra.com`

## Anti-bot (lightweight, no captcha)

Server (`src/lib/leads.server.ts`):

- Honeypot (`honey` / `website` / `company`) → silent `200 { ok: true }`, no email
- Dwell: `openedAt` required; reject if < 2.5s
- Soft IP rate limit: 5 POSTs / 10 min (in-memory Map — **not** distributed across Vercel instances)
- Zod validation (VN phone, optional email, strip HTML)
- Origin allowlist (site + vercel + local/preview)
- Handler never throws — always JSON 2xx/4xx/503

Client keeps honeypot, dwell, session rate-limit, `saveLead`, and mailto fallback on error.

## Failures — where to look

1. Vercel runtime logs for `/api/leads`
2. Resend → Emails (and Domains verification)

## robots.txt

`Disallow: /api` is already set — keep it.
