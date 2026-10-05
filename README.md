<p align="center">
  <img src="web/public/assets/jour_j_wordmark.svg" alt="Jour J" height="56" />
</p>

# Jour J — Employee celebrations, operated for you

**Aucune célébration oubliée. Zéro charge opérationnelle.**
Jour J is a celebration-operations service for Paris-based scaleups: it runs employee birthdays and work anniversaries end to end, so Office Managers and People Ops teams no longer juggle spreadsheets, reminders and last-minute bakery orders.

This repository contains the marketing homepage for the venture: the original high-fidelity design prototype and its production rebuild in Next.js.

## The problem

In a 100–300 person company, celebrating every birthday and work anniversary is a recurring operational chore: tracking dates, checking dietary preferences, getting manager sign-off, ordering from suppliers, and making sure delivery happens on the right morning. It usually falls on one Office Manager, and moments get missed.

## The product idea

Jour J is positioned as a **done-for-you service**, not a SaaS subscription or a bakery marketplace:

1. **Configure rules** — moments covered, budgets, teams, addresses, required approvals.
2. **Send an employee list** — CSV import at launch; no HRIS integration needed to start.
3. **Jour J operates** — plans dates, confirms needs, coordinates partner bakeries, tracks delivery.
4. **Measure value** — a monthly recap of moments handled, incidents, budget used and time saved.

Launch scope is birthdays and work anniversaries in Paris, sold as a 3-month pilot. Other moments (onboarding, departures, promotions) and HRIS integrations are presented as future extensions.

## What the homepage implements

- **Animated hero** with a celebration calendar and an auto-cycling workflow (date detected, preferences checked, manager notified, delivery scheduled).
- **Interactive "How it works"** — clicking a step swaps the preview pane.
- **Dashboard mockup** showing the client-side "cockpit" concept.
- **Content sections**: problem, scope checklist, formats (individual treat / team cake / monthly box), conceptual branded mockups, celebration types, Paris operations, integrations roadmap, supplier reliability, pilot offer, photo gallery, final CTA.
- **Sticky header** that turns translucent on scroll, plus a mobile burger drawer.
- **Reveal-on-scroll** animations via `IntersectionObserver`.
- **SEO basics**: French metadata, `lang="fr"`, `robots.txt`, SVG favicon, self-hosted Google Fonts via `next/font`.

> The Doctolib / Mistral / Qonto visuals are **conceptual mockups only**. None of these companies are clients or partners of Jour J, and the page copy says so.

CTAs currently point to the `#contact` anchor; no form or booking backend is wired yet.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript |
| Styling | Plain CSS per component (`*.css`) + global design tokens in `globals.css` |
| Fonts | Plus Jakarta Sans, JetBrains Mono, Caveat via `next/font/google` |
| Images | `next/image` |
| Tooling | ESLint (`eslint-config-next`) |

## Repository structure

```
jourj-homepage/
├── web/                         # Production site (Next.js)
│   ├── src/app/                 # layout.tsx (metadata, fonts), page.tsx (section order)
│   ├── src/components/marketing/
│   │   ├── Hero.tsx             # Hero + animated calendar / workflow visual
│   │   ├── MarketingSections.tsx# Problem, How it works, Formats, Pricing, ...
│   │   ├── DashboardMockup.tsx  # Client cockpit mockup
│   │   ├── SiteHeader.tsx       # Sticky header + mobile drawer
│   │   ├── SiteFooter.tsx
│   │   └── RevealEffects.tsx    # Scroll-reveal observer
│   └── public/assets/           # Product photography and brand marks
├── source/                      # Original HTML + in-browser JSX design prototype
└── docs/DESIGN_HANDOFF.md       # Design spec: tokens, typography, sections, interactions
```

The `source/` prototype loads JSX at runtime through Babel standalone, which is fine for design review but not for production. `web/` is the rebuild with server rendering, bundling and type checking. The full design specification (colour tokens, type scale, button system, section order, imagery rules) is kept in [docs/DESIGN_HANDOFF.md](docs/DESIGN_HANDOFF.md).

## Visuals

Imagery used on the page (from `web/public/assets/`):

<p>
  <img src="web/public/assets/gathering-cake-jourj.png" alt="Colleagues gathered around a Jour J cake" width="32%" />
  <img src="web/public/assets/cake-in-box-jourj.png" alt="Jour J cake in its delivery box" width="32%" />
  <img src="web/public/assets/JourJ-sweets.png" alt="Jour J assortment of sweets" width="32%" />
</p>

## Getting started

Requires Node.js 20+ and npm.

```bash
cd web
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint
```

To view the original prototype, serve the `source/` folder with any static server (it fetches its JSX files, so opening the HTML via `file://` will not work):

```bash
npx serve source   # then open "Jour J Homepage.html"
```

## Status

Marketing site for an early-stage venture. Next steps listed in the handoff: wire the contact CTA to a form or booking provider, add analytics, sitemap and OG image, and deploy.
