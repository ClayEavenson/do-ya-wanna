# Do Ya Wanna? — Claude Brand Asset Guide

Use the files in `public/brand/` exactly as supplied. They were extracted from the approved artwork and retain transparent backgrounds.

## Primary usage

- **Website header:** `/brand/app-icon-192.png`
- **Mobile hero:** `/brand/logo-stacked-dark.png`
- **Tablet/desktop hero:** `/brand/logo-horizontal-dark.png`
- **Standalone accent mark:** `/brand/question-mark-lime.png`
- **Open Graph or large app treatment:** `/brand/app-icon-512.png`
- **Apple touch icon:** `/apple-touch-icon.png`
- **Browser favicon:** `/favicon-32.png`

## Brand colors

- Neon lime: `#B8FF3D`
- Gunmetal: `#171B1E`
- Near black: `#0B0D0E`
- Soft white: `#F7F8F4`
- Steel gray: `#697278`
- Light border gray: `#D9DDD5`

## Rules

1. Do not redraw, retype, stretch, skew, recolor, or add effects to the supplied logos.
2. Do not place the dark wordmarks over dark backgrounds.
3. Use the app icon in the header; use the full wordmark in the hero.
4. Preserve each image's aspect ratio and transparent padding.
5. Keep clear space around each logo equal to at least half the height of the question-mark dot.
6. Keep the brand name spelled exactly as **Do Ya Wanna?**
7. Do not render the complete name entirely in lowercase.
8. Do not add gradients, glow, bevels, or heavy shadows to these assets.

## Suggested Next.js usage

```tsx
import Image from "next/image";

<Image
  src="/brand/app-icon-192.png"
  alt="Do Ya Wanna?"
  width={44}
  height={44}
  priority
/>

<Image
  src="/brand/logo-stacked-dark.png"
  alt="Do Ya Wanna?"
  width={823}
  height={291}
  priority
  className="h-auto w-full max-w-[520px]"
/>
```

Use `logo-horizontal-dark.png` instead of the stacked version when the available layout is wide enough.
