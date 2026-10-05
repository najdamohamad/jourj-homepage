# Handoff: Jour J — Marketing Homepage

**Production rebuild (Next.js):** a working site lives in **`web/`**. Run `cd web && npm install && npm run dev` — see [`web/README.md`](../web/README.md).

---

A handoff package for a developer (using Cursor / Claude Code / any AI-assisted IDE) to take the design in `source/` and rebuild it as a production-grade marketing website.

---

## 1. About the design files

The files in `source/` are **design references created in HTML + inline JSX**. They are prototypes meant to communicate the **intended look and behavior** of the Jour J homepage — they are **not production code to copy directly**.

The current setup loads `components/*.jsx` and `app.jsx` at runtime via `fetch()` and transpiles them in the browser with `@babel/standalone`. That is fine for design review but unacceptable for production:

- Slow first paint (Babel runtime is ~3MB)
- No bundling / minification / cache hashing
- No SEO-friendly server rendering
- No build-time type checking

**Your task is to recreate these designs in a real framework** of your choice, using the codebase's existing patterns where relevant. If there is no existing codebase yet (this is a greenfield marketing site), **Next.js (App Router) is the recommended default** — server-rendered React, built-in image optimization, easy deploy to Vercel/Netlify. Astro is also a strong fit for a mostly-static marketing site.

---

## 2. Fidelity

**High-fidelity (hifi).** The mocks are pixel-precise: final colors, typography, spacing, animations, copy, and imagery are all intentional. Recreate them as closely as possible.

Where the HTML uses helper hacks (e.g. `aspect-ratio` for stable card heights, dashed-border placeholders), those choices are part of the design — keep the visual result, not necessarily the CSS technique.

---

## 3. Product context

Jour J is a **service of employee-celebration operations** for **Paris-based scaleups (100–300 employees)**, starting with **birthdays and work anniversaries**. It is **not** a SaaS subscription, **not** a bakery marketplace, and **not** a generic gifting platform.

- **Buyers / users**: Office Managers, People Ops Managers, Employee Experience teams.
- **Promise**: "Aucune célébration oubliée. Zéro charge opérationnelle."
- **Primary CTA everywhere**: "Tester un pilote" (3-month pilot).
- **Secondary CTA**: "Voir comment ça marche" (top of page) and "Échanger sur mon besoin" (final CTA).
- **Launch scope**: employee birthdays + work anniversaries. All other moments (onboarding, promotions, departures, team wins, company milestones) are clearly labeled as **future extensions**.
- **Onboarding approach**: CSV import at launch. HRIS integrations (Workday, Lucca, PayFit, HiBob, Personio, BambooHR) are **future extensions / on request**, never a launch promise.
- **Brand identity**: warm + premium, French copy, never "luxury bakery marketplace".

> Important — branded mockups (Doctolib / Mistral / Qonto): these are **conceptual mockups only**. The logos are illustrative; **none of these companies are clients or partners of Jour J**. The section copy and `alt` text must keep that disclaimer.

---

## 4. Tech & deployment recommendation

A reasonable target stack:

- **Framework**: Next.js 14+ (App Router) or Astro
- **Styling**: CSS Modules or Tailwind (whichever the team prefers). Current code uses inline `<style>{`…`}</style>` blocks scoped to each component — port these to your styling system, do **not** keep them as `<style>` tags in production
- **Fonts**: Plus Jakarta Sans (300–800), JetBrains Mono (400–500), Caveat (500–600). Use `next/font` (Next) or equivalent to self-host
- **Images**: All `/assets/*.png` are real product photography or design illustrations. Use `next/image` (Next) or `<Image>` (Astro) for responsive sizing & lazy loading. The original code uses `loading="lazy"` and `aspect-ratio` to lock card heights
- **Hosting**: Vercel, Netlify, or Cloudflare Pages — all three deploy a Next or Astro build in under a minute
- **Forms**: There is **no working form yet** — CTAs currently link to `#contact` or `#`. Wire them to a real form (Formspree, Resend, Plausible Forms, or an internal endpoint) before launch

---

## 5. Page structure

The homepage is a single long scroll. Sections appear in this exact order — keep them in this order unless the team explicitly asks otherwise. Each section is its own React component in `source/components/sections.jsx` (Hero is in `hero.jsx`, the dashboard mock is in `dashboard.jsx`, the footer is in `footer.jsx`).

| # | Section | Component | Anchor ID | Purpose |
|---|---|---|---|---|
| 1 | **Hero** | `Hero` (in `hero.jsx`) | `#top` | Promise + audience + primary CTA + animated calendar/step visual |
| 2 | **Social proof** | `SocialProof` | — | "Pensé pour les scaleups parisiennes" + marquee of audience tags |
| 3 | **Problem** | `ProblemSection` | `#probleme` | 5 cards describing the operational pain |
| 4 | **How it works** | `HowItWorks` | `#fonctionnement` | 4-step interactive list with live preview pane |
| 5 | **Solution / scope** | `SolutionSection` | `#perimetre` | 12-item checklist of what Jour J operates |
| 6 | **Formats** | `Formats` | `#formats` | 3 pilot formats (individual / team cake / monthly box) with photography + included items + indicative budget |
| 7 | **Branded mockups** | `BrandedFormats` | `#personnalisation` | "Des attentions à vos couleurs" — **conceptual mockups only**, future event extension |
| 8 | **Dashboard mock** | `DashboardMockup` | — | Browser-chromed mock of the internal "cockpit" view |
| 9 | **Celebrations** | `Celebrations` | `#celebrations` | Two launch moments (birthdays / work anniversaries) + future extensions chips |
| 10 | **Supplier reliability** | `ParisOps` | `#fiabilite` | Packaging proof image + 5 supplier criteria (B2B, repeatable quality, allergens, backup plan, responsibilities) |
| 11 | **Onboarding / CSV** | `Integrations` | — | "Commencez par un simple CSV" — CSV launch + HRIS as future extension |
| 12 | **Trust / RGPD** | `Trust` | — | 6 trust pillars + GDPR/DPA line |
| 13 | **Pricing** | `Pricing` | `#tarifs` | Pilote 3 mois card. **No fixed price** — "Tarif sur mesure" + future plans teaser |
| 14 | **Gatherings** | `Gatherings` | — | Short emotional proof with 3 polaroid-style images |
| 15 | **Final CTA** | `FinalCTA` | `#contact` | Forest-green panel + primary/secondary CTA + reassurance list + supporting cookies image |
| 16 | **Footer** | `SiteFooter` (in `footer.jsx`) | — | Three columns + tagline |

The site header (`<header class="site-header">`) lives directly in the root HTML, not in React. Port it to a `<Header>` component in your framework. Nav links: Problème, Fonctionnement, Périmètre, Fiabilité, Pilote, Contact.

---

## 6. Design tokens

All tokens are declared as CSS custom properties on `:root` in `source/Jour J Homepage.html` (lines ~17–45). Copy them verbatim into your stylesheet / Tailwind config / theme file.

### Colors

| Token | Hex | Usage |
|---|---|---|
| `--forest` | `#2D5A3D` | Primary brand color, primary button, headings emphasis, dark CTAs |
| `--forest-deep` | `#1F4530` | Primary button hover |
| `--cream` | `#FAF7F2` | Page background |
| `--cream-deep` | `#F2EDE3` | Section backgrounds (alternating), card backgrounds |
| `--coral` | `#E8735A` | Accent / "Tester un pilote" CTA / "oubliée" emphasis |
| `--coral-soft` | `#F4A793` | (Reserved) |
| `--gold` | `#D4A843` | Secondary accent, badges, sparks |
| `--sage` | `#6B9E7E` | Tertiary accent |
| `--sage-pale` | `#DCE8DF` | Eyebrow / chip background |
| `--mint` | `#EAF1EA` | "Soon" panel background |
| `--charcoal` | `#1C1C1C` | Body text |
| `--muted` | `#6B6F6A` | Secondary text |
| `--line` | `rgba(28, 28, 28, 0.08)` | Default border |
| `--line-strong` | `rgba(28, 28, 28, 0.14)` | Stronger border / divider |

### Radii

| Token | px | Usage |
|---|---|---|
| `--radius-sm` | 12 | Small chips |
| `--radius` | 18 | Cards |
| `--radius-lg` | 28 | Large cards, panels |
| `--radius-xl` | 40 | Hero CTA panel, final CTA panel |

### Shadows

```css
--shadow-soft: 0 1px 0 rgba(28,28,28,0.04), 0 8px 24px -10px rgba(28,28,28,0.08);
--shadow-card: 0 1px 0 rgba(28,28,28,0.04), 0 14px 40px -16px rgba(28,28,28,0.12);
```

### Typography

| Token | Font stack | Source |
|---|---|---|
| `--font-sans` | `'Plus Jakarta Sans', system-ui, -apple-system, sans-serif` | Google Fonts |
| `--font-mono` | `'JetBrains Mono', ui-monospace, monospace` | Google Fonts |
| (Polaroid captions) | `'Caveat', 'Brush Script MT', cursive` | Google Fonts |

**Type scale (from `<style>` in root HTML):**

| Element | Size | Weight | Letter-spacing | Line-height |
|---|---|---|---|---|
| `h1` | `clamp(44px, 5.6vw, 78px)` | 700 | -0.035em | 1.0 |
| `h2` | `clamp(32px, 3.6vw, 52px)` | 700 | -0.025em | 1.05 |
| `h3` | `clamp(20px, 1.6vw, 24px)` | 700 | -0.015em | 1.08 |
| body | 16px | 400 | — | 1.55 |
| `.lead` | `clamp(17px, 1.25vw, 19px)` | 400 | — | 1.6 |
| `.eyebrow` | 11.5px mono | 500 | 0.14em uppercase | — |

### Spacing

Section padding is `clamp(72px, 9vw, 128px) 0`. Container is `width: min(1240px, 92vw); margin: 0 auto`.

---

## 7. Buttons

Three variants, all `border-radius: 999px`, `padding: 14px 22px`, `font-weight: 600`, `font-size: 15px`.

| Variant | Class | BG | Text | Border | Notes |
|---|---|---|---|---|---|
| Primary | `.btn-primary` | `--forest` | `--cream` | none | Used for "Tester un pilote" in hero & sticky header. Subtle green glow shadow. Translates -1px on hover |
| Coral | `.btn-coral` | `--coral` | white | none | Used for primary CTA in Pricing & Final CTA |
| Ghost | `.btn-ghost` | transparent | `--charcoal` | `--line-strong` | Secondary CTA. Light hover background |
| Ghost-light | `.btn-ghost-light` | `rgba(255,255,255,0.08)` | `--cream` | `rgba(255,255,255,0.18)` | Used only on dark (forest) backgrounds |

All buttons include a `<span class="arrow">→</span>` that translates +3px on hover.

---

## 8. Interactions & behaviors

**Reveal-on-scroll.** Every element tagged `data-reveal` starts at `opacity: 0; transform: translateY(18px)` and transitions to `opacity: 1; transform: none` when an `IntersectionObserver` adds the `.in` class (threshold 0.12). This is implemented at the bottom of `Jour J Homepage.html`. **Port this to your framework** — Framer Motion's `whileInView`, or a small custom `useInView` hook, both work.

**Sticky header.** Header gets `.scrolled` (translucent + blur + bottom border) when `scrollY > 6`. Same script block in the root HTML.

**Hero visual.** Auto-cycling step list (4 steps + a final card) every 1700ms. Pure React `useState` + `setInterval`. The calendar grid + step list + tilted polaroid moment-card are all positioned absolutely inside a square showcase.

**How it works.** Click a step → `active` state changes → preview pane on the right swaps content. Pure `useState`.

**Polaroid hover.** `.gather-card` items have individual `rotate(±1.6° to ±2.6°)` and straighten on hover with a slight lift.

**Format cards / branded cards / dashboard.** Hover lifts cards by 3px, slightly scales inner images via `transform: scale(1.03)` on a 0.6s ease.

**Marquee.** SocialProof tags scroll horizontally with a 38s linear `@keyframes marquee` animation, masked left/right.

**Final CTA glow.** Two large blurred radial gradients (`.cta-glow.g1` coral top-right, `.cta-glow.g2` gold bottom-left) behind the dark green panel.

There is **no working form** — wire CTAs to whichever form/booking provider the team uses.

---

## 9. Imagery

All images are in `source/assets/`. The site uses a mix of:

- **Product photography**: `cake-in-box-jourj.png`, `cookies-jourj.png`, `cupcacke-jourj.png`, `fraisier-jourj.png`, `JourJ-sweets.png` — real or photoreal product shots, used as packaging proofs and format illustrations
- **Lifestyle / gathering shots**: `gathering-sweets.jourj.png`, `gatherings-cookies-jourj.png`, `gathering-jourJ.png`, `gathering-cake-jourj.png` — used in the Gatherings polaroid grid + Hero moment-card
- **Conceptual brand mockups**: `Doctolib-cupcakes-jourj.png`, `mistral-jourj-cake.png`, `qonto-jourj-donuts.png` — used **only** in the BrandedFormats section with explicit disclaimer copy and alt text. Do not reuse elsewhere
- **Brand mark**: `JourJ-logo.png`, `jour_j_calendar_icon.svg`

Keep file names exactly as-is so the team can swap individual images without code changes.

---

## 10. Source files

```
source/
├── Jour J Homepage.html            # Root HTML, header, design tokens, fonts, scripts
├── app.jsx                         # React entry — composes all sections
├── components/
│   ├── icons.jsx                   # Inline SVG icon set used everywhere (I.cake, I.check, …)
│   ├── hero.jsx                    # Hero + HeroVisual
│   ├── sections.jsx                # Most sections (SocialProof, ProblemSection, …, FinalCTA)
│   ├── dashboard.jsx               # DashboardMockup
│   └── footer.jsx                  # SiteFooter
└── assets/                         # All images + brand mark + SVG icon
```

Two other files exist at the project root and are **not part of the handoff**:

- `Jour J Homepage (standalone).html` / `Jour J Homepage.standalone-src.html` — single-file bundled snapshot for offline preview, ignore for the rebuild
- `tweaks-panel.jsx` — design-time tweak panel, not used in the public homepage

---

## 11. Checklist for the rebuild

- [ ] Choose framework (Next.js App Router recommended)
- [ ] Port design tokens to your styling system (Tailwind config / CSS variables / theme file)
- [ ] Self-host the three Google Font families
- [ ] Recreate each section in order, matching layout, type, color, and copy exactly
- [ ] Port `data-reveal` IntersectionObserver behavior to `useInView` (or equivalent)
- [ ] Port sticky-header scroll listener
- [ ] Replace `fetch + Babel-in-browser` loader with a real build
- [ ] Replace `loading="lazy"` raw `<img>` with framework-native responsive images
- [ ] Wire CTAs to a real form / booking provider
- [ ] Verify mobile breakpoints (`920px`, `820px`, `540px` are most common)
- [ ] Verify the conceptual-mockup disclaimer is preserved
- [ ] Add analytics, sitemap, robots.txt, OG image, favicon (current favicon is `assets/jour_j_calendar_icon.svg`)
- [ ] Deploy

Good luck. Ping the design team if anything is ambiguous — the copy is intentional and small changes can shift positioning.
