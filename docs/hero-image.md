# Hero image

The hero motif is `public/hero/wadden-channels.webp` — an aerial view of tidal
creeks branching through the Wadden Sea mudflats at low tide.

## Why this motif

The branching priel network is a structure the tide draws by itself: many
independent channels, one shared system, no wasted path. That is the same
argument the Insider Story section makes in words ("a hive is the most
efficient structure in nature — thousands of independent workers, one shared
architecture, zero wasted space"), so the hero states the thesis visually
before the copy states it.

It is also unmistakably North Sea coast without being a postcard, and it reads
as infrastructure without a single machine in the frame.

## Composition the layout depends on

The headline sits **bottom-left** over the image, with scrims darkening the top
(for the nav), the bottom and the left edge. A replacement should therefore:

- carry an **even texture** rather than one dominant subject, so the crop can
  move with the viewport,
- stay **calm in the lower-left third** — no high-contrast detail there,
- tolerate being **darkened by roughly 60–88%** at the bottom without turning
  to mud.

The scrim stops are inline in `src/components/hero.tsx`; retune them if the
replacement is materially darker or lighter.

## How to swap it

1. Put the new file in `public/hero/`.
2. Point `heroImage.src` in `src/lib/site.ts` at it. Nothing else changes.

Ship a **WebP or AVIF around 2400 px wide**, not a full-resolution PNG —
`next/image` will still generate responsive variants, but the source is what
sits in the repo and in every deploy.

## Provenance of the current file

Generated with Google Gemini from the prompt below, then processed for the web:
cropped 13% off the right edge (which carried the generator's watermark) and
re-encoded from an 8.6 MB PNG to a 592 KB WebP at 2394 × 1536. The unmodified
original is not in the working tree; it is recoverable from commit `09db3e0`.

Gemini output also carries invisible SynthID provenance data, which survives
the re-encode. Worth knowing if the image is ever used somewhere that requires
declaring AI origin.

## Prompt used

> Aerial photograph looking straight down at the Wadden Sea mudflats at low
> tide, golden hour. Branching tidal creeks cut dendritic channels through wet
> silt, forming a natural network of veins. Muted natural palette — warm silt
> brown, ochre sand, slate-grey water catching low sun. Minimal, abstract, no
> horizon, no buildings, no people, no boats. High altitude, soft natural
> light, fine grain. Serene and structural. 16:9.

### Negative prompt

> people, boats, buildings, text, watermark, logo, HDR, oversaturated colours,
> neon, lens flare, tilt-shift, heavy vignette, industrial clutter

### Variations worth trying

- **Cooler** — "blue hour, silver water, cool slate silt" if the page ever
  moves away from the ochre accent.
- **Sparser** — "fewer, larger channels, more open flat" gives the type more
  quiet room.
- **Higher** — "from very high altitude, the channels fine as capillaries"
  reads more like a circuit and less like terrain.

## Alternative motif considered

A dike landscape at blue hour with distant wind turbines. Rejected for the
hero: three competing subjects, and an invented modern building on a dike is
where generated images tend to betray themselves. If a built subject is wanted
later, it belongs further down the page — in the Ecosystem section — where it
reads as "how we work" rather than as scenery.
