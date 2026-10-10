# enriqueagv.com

Portfolio of Enrique García, product designer. Built with Next.js (App Router), React and plain CSS. Every page is statically generated.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build + type check
```

Deploys to Vercel (or any Next.js host) with no extra config.

## Where things live

| What | File |
| --- | --- |
| Name, hero, about, experience, contact, social links | `src/content/site.ts` |
| Case studies (all copy, metrics, screenshots) | `src/content/projects.ts` |
| Styles and design tokens (light + dark) | `src/app/globals.css` |
| Case study layout | `src/app/projects/[slug]/page.tsx` |

Case studies are lists of typed blocks (`text`, `insights`, `modules`, `gallery`, …). To add a section, add a block; no layout code needed. To add a project, append to `projects`.

Search the code for `TODO(Enrique)` to find copy that needs your input.

## Assets to copy from the old site

The old site's files weren't in this repo. Copy these from the old project's `public/` folder into `public/` here (same names, so nothing else changes). Until then, the site shows a labeled "Image coming soon" placeholder.

```
public/Resume_Enrique_Garcia.pdf
public/projects/one/X - 1.png … X - 15.png
public/projects/ruta-sv/home-screen.png, route-detail.png, route-results.png, home-alert.png,
                        ticket-purchase.png, my-tickets.png, ticket-qr.png, route-map.png
public/projects/dermacare/01-welcome.png … 09-product-detail.png
```

Also worth adding: `public/og.png` (1200×630 social preview) and `src/app/icon.png` (favicon).

## URLs

`/projects/one` permanently redirects to `/projects/credit-card-onboarding`, so links already sent to recruiters keep working.
