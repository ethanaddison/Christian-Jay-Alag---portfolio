# Christian Jay Alag, Portfolio (Next.js)

Next.js (App Router) + TypeScript + Tailwind CSS v4. Converted from a Figma Make export.

## Run it
```bash
npm install
npm run dev        # http://localhost:3000
```
Production check: `npm run build && npm start`

## Where things are
| Path | What it is |
|---|---|
| `app/layout.tsx` | Fonts (next/font), page title and description |
| `app/page.tsx` | Arranges the sections |
| `app/globals.css` | All styles and the color/font variables |
| `sections/` | Nav, Hero, About, Services, Skills, Experience, Projects, Education, Contact, Footer |
| `components/` | Small reusable pieces (Button, Card, Chip, Icon, SectionTitle) |
| `data/content.ts` | **All your text**: services, skills, jobs, projects, languages, contact info |

Only `Nav` and `Contact` use `"use client"` (they need state). Everything else is a Server Component.

## TODO list
1. **Photo**: put your photo in `/public/photo.jpg` and replace the placeholders in `sections/Hero.tsx` and `sections/About.tsx` using `next/image`.
2. **Projects**: replace placeholders in `data/content.ts` with real projects and links.
3. **Social links**: set `linkedin` and `github` in `data/content.ts`.
4. **Contact form**: it validates but does not send yet. Connect Resend or Formspree in `sections/Contact.tsx`.
5. **React Bits**: add interactive components from reactbits.dev.

## Deploy
Push to GitHub, then import the repo on vercel.com and click Deploy.
