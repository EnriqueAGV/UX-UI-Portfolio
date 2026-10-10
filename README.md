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
| Case studies (copy, metrics, screens, design decisions) | `src/content/projects.ts` |
| Limitless Design System page | `src/content/system.ts` |
| Styles and design tokens (light + dark) | `src/app/globals.css` |
| Case study layout | `src/app/projects/[slug]/page.tsx` |

Each case study has an interactive screen viewer (arrows, swipe, keyboard, thumbnails) and design-decision cards that jump to the screen they describe, followed by optional narrative blocks (`insights`, `principles`, `personas`, …). To add a project, append to `projects`.

Search the code for `TODO(Enrique)` to find copy that needs your input.

## Images

All screenshots live in `public/img/` (carried over from the anon-port prototype). The resume PDF still needs to be added at `public/Resume_Enrique_Garcia.pdf`.

Also worth adding: `public/og.png` (1200×630 social preview) and `src/app/icon.png` (favicon).

## URLs

`/projects/one` permanently redirects to `/projects/credit-card-onboarding`, so links already sent to recruiters keep working.
