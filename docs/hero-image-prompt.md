# Hero image — generation prompt

The file at `public/hero/ostfriesland.svg` is a **placeholder**. It holds the
composition so the layout reads correctly; replace it with the generated image.

## How to swap it in

1. Generate the image (prompt below), landscape, at least **2400 × 1350** px.
2. Save it as `public/hero/ostfriesland.jpg` (or `.webp`).
3. Point `heroImage.src` in `src/lib/site.ts` at the new file. Nothing else
   changes — `next/image` handles the rest.

## Composition constraints

The hero type sits **bottom-left** over the image, with a dark scrim across the
lower third. So the generated image must:

- keep the **horizon low** (roughly the lower third of the frame),
- keep the **bottom-left quadrant quiet** — sky, water or flat marsh, no busy
  detail there, or the headline will fight it,
- place the **modern building right of centre**,
- stay **dark enough at the bottom** that white text holds up.

## Prompt

> A wide cinematic landscape photograph of the East Frisian coast at blue hour,
> shortly after sunset. A long, low grass dike runs horizontally across the
> lower third of the frame, its line calm and almost graphic. Behind it, a flat
> expanse of tidal marsh and a thin channel of water catching the last warm
> light. On the horizon to the left, three or four modern white wind turbines
> stand slender and far away, softened by haze, their blades still — quiet, not
> industrial. Right of centre, a single low contemporary building sits on the
> dike: a horizontal concrete-and-glass volume with a cantilevered upper floor
> and a warm, softly lit interior glowing through a continuous window band. The
> architecture is restrained and minimal — no signage, no logos, no antennas or
> visible technology. The sky is a smooth gradient from deep teal-blue at the
> top to warm amber and soft ochre near the horizon, with a few thin horizontal
> cloud bands. Muted, natural, desaturated colour palette: sand, dune grass
> green, slate blue, burnt ochre. Wide-angle lens, deep focus, natural light
> only, subtle atmospheric haze, fine film grain. No people, no cars, no birds,
> no text. Serene, spacious, understated — an image about calm engineering, not
> about machines. 16:9.

### Negative prompt (if the tool supports one)

> people, cars, boats, birds, text, watermark, logo, signage, HDR, oversaturated
> colours, neon, lens flare, tilt-shift, fisheye, heavy vignette, dramatic
> storm clouds, industrial clutter, power lines, cranes, futuristic sci-fi
> architecture, glass skyscraper, city skyline

## Variations worth trying

- **Time of day** — "blue hour" gives the calmest result; "golden hour, low sun
  raking across the dike" gives more warmth and longer shadows.
- **Season** — "late autumn, dune grass gone pale gold" reads warmer than
  summer green.
- **Weather** — "thin ground mist over the marsh" adds depth behind the
  turbines and pushes the building forward.
- **Building** — if it reads too corporate, try "a small modern research
  pavilion, timber and glass, single storey".

## Fallback

If the generated image is too busy in the lower-left, either flip it
horizontally (building moves left, type moves right — the hero layout would
need mirroring) or increase the scrim in `src/components/hero.tsx`, where the
gradient stops are defined inline.
