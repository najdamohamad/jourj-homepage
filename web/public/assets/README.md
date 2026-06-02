# Assets in `web/public/assets/`

## Used by the homepage (referenced in code)

| File | Section |
|------|---------|
| `jour_j_calendar_icon.svg` | Header, footer, favicon |
| `jour_j_wordmark.svg` | _(optional branding — not wired yet)_ |
| `gathering-cake-jourj.png` | Hero moment card |
| `cupcacke-jourj.png` | Formats — attention individuelle |
| `fraisier-jourj.png` | Formats — gâteau d'équipe |
| `JourJ-sweets.png` | Formats — box mensuelle |
| `Doctolib-cupcakes-jourj.png` | Mockups conceptuels (disclaimer §) |
| `mistral-jourj-cake.png` | Mockups conceptuels |
| `qonto-jourj-donuts.png` | Mockups conceptuels |
| `cake-in-box-jourj.png` | Fiabilité fournisseur |
| `gathering-sweets.jourj.png` | Gatherings polaroid |
| `gatherings-cookies-jourj.png` | Gatherings polaroid (`gatherings`, plural) |
| `gathering-jourJ.png` | Gatherings polaroid (**capital J**) |
| `cookies-jourj.png` | Final CTA |

## Provided but **not** linked in components (keep for swaps / future sections)

Uploads were normalized from Cursor’s hashed filenames (`name-uuid.png` → `name.png`). These files live here but nothing in TSX loads them yet:

- `gathering-cookies-jourj.png` — close to **`gatherings-cookies-jourj.png`** which *is* used; use if you prefer this shot instead.
- `chocolatecake-jourj.png` — extra product shot (e.g. swap into Formats hero card).
- `french-patisserie-jourj.png` — extra lifestyle / assortment shot.
- `JourJ-deserts.png` — extra assortment (NB. filename spelling “deserts”; not `JourJ-sweets`).
- `jourj-sweetks.png` — extra (likely typo of “sweets”).
- `pennylane-jourj-treats.png` — extra branded mock; add a disclaimer + placement if used on the marketing page.

To wire one in, reuse the existing `<Image>`/`img src="/assets/…"` patterns in `MarketingSections.tsx` or `Hero.tsx`.

## Optional: README `JourJ-logo.png`

The root handoff mentions `JourJ-logo.png` — it wasn’t in this upload. Drop it here if you receive it.
