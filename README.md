# Anybee Labs — Landing Page

Marketing site for **Anybee Labs**, a digital venture studio and technology
holding. Built as a premium, single-page corporate landing experience.

## Stack

| Concern    | Choice                                              |
| ---------- | --------------------------------------------------- |
| Framework  | Next.js 16 (App Router, TypeScript, Turbopack)       |
| Styling    | Tailwind CSS v4 (CSS-first config in `globals.css`)  |
| Animation  | Framer Motion 12                                     |
| Icons      | Lucide React + hand-rolled brand glyphs              |
| Typography | Geist Sans / Geist Mono via `next/font`              |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## Structure

```
src/
  app/
    layout.tsx        Root layout, metadata, no-flash theme script
    page.tsx          Section composition
    globals.css       Design tokens, dark mode, custom utilities
    icon.svg          Favicon (brand mark)
  components/
    site-nav.tsx      Floating blurred nav + mobile sheet
    hero.tsx          Image-led hero, headline, CTAs, stats line
    portfolio.tsx     Bento grid of ventures
    ecosystem.tsx     Architect / Scale / Host capabilities
    insider-story.tsx The N-E-B -> Anybee derivation
    careers.tsx       Open roles
    contact-cta.tsx   Closing call to action
    site-footer.tsx   Multi-column corporate footer
    spotlight-card.tsx, reveal.tsx, section-heading.tsx, ui/button.tsx
  lib/
    site.ts           All copy, nav, portfolio and footer data
```

**Edit `src/lib/site.ts` first** — navigation, ventures, capabilities, stats
and footer columns all read from it, so most copy changes need no JSX edits.

## Design system

Tokens live at the top of `src/app/globals.css` as CSS custom properties and
are exposed to Tailwind through `@theme inline`:

- **Surfaces** — `bg-bg`, `bg-elevated`, `bg-surface`, `border-hairline`
- **Text** — `text-fg`, `text-muted`, `text-subtle`
- **Accent** — `honey-50` … `honey-700`, where `honey-400` is `#FFB800`
- **Utilities** — `.text-display`, `.gradient-text`, `.honey-text`, `.bg-grid`,
  `.bg-noise`, `.spotlight`, `.shadow-card`

### Dark / light mode

Dark is the default. The theme is a `dark` class on `<html>`, set before first
paint by an inline script in `layout.tsx` (no flash, no hydration mismatch) and
persisted to `localStorage` under `anybee-theme`. Visitors whose OS prefers
light get light mode automatically. `ThemeToggle` reads the class through
`useSyncExternalStore`, so every toggle instance stays in sync.

### Motion

All animation respects `prefers-reduced-motion`, both in CSS and via Framer
Motion's `useReducedMotion`. `Reveal` / `RevealGroup` in `components/reveal.tsx`
are the shared scroll-reveal primitives.

## Asset placeholders

These are placeholders and should be swapped for final artwork:

- `public/hero/ostfriesland.svg` — the hero motif. It is a flat illustration
  standing in for a photograph; see **`docs/hero-image-prompt.md`** for the
  generation prompt and the composition constraints the replacement must
  respect (low horizon, quiet lower-left, building right of centre).

- `public/brands/amp-marketplace.svg`
- `public/brands/web-suite.svg`
- `public/brands/micro-saas.svg`
- `src/components/logo.tsx` — the `LogoMark` hexagon
- `src/app/icon.svg` — favicon

Venture logos are referenced by path from `ventures[].logo` in
`src/lib/site.ts`; drop a replacement at the same path and nothing else needs
to change. They render through `next/image` with `unoptimized`, since SVG needs
no optimization pass.

Other content to replace before launch: the contact address (`site.email`), the
`#` placeholder hrefs in the footer and social links, and the illustrative
metrics on the portfolio cards.
