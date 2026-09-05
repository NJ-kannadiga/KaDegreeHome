---
name: Architectural Archive
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#474740'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#787770'
  outline-variant: '#c8c7be'
  surface-tint: '#5f5e59'
  primary: '#5f5e59'
  on-primary: '#ffffff'
  primary-container: '#f4f1ea'
  on-primary-container: '#6f6d68'
  inverse-primary: '#c9c6c0'
  secondary: '#954742'
  on-secondary: '#ffffff'
  secondary-container: '#fe9b94'
  on-secondary-container: '#78302d'
  tertiary: '#556253'
  on-tertiary: '#ffffff'
  tertiary-container: '#e8f5e2'
  on-tertiary-container: '#647161'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2db'
  primary-fixed-dim: '#c9c6c0'
  on-primary-fixed: '#1c1c18'
  on-primary-fixed-variant: '#474742'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#ffb3ad'
  on-secondary-fixed: '#3d0506'
  on-secondary-fixed-variant: '#77302d'
  tertiary-fixed: '#d9e6d4'
  tertiary-fixed-dim: '#bdcab8'
  on-tertiary-fixed: '#131e13'
  on-tertiary-fixed-variant: '#3e4a3c'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
  warm-ivory: '#F4F1EA'
  dark-charcoal: '#1A1A1A'
  deep-wine: '#4A0E0E'
  deep-forest: '#1B261A'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.03em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.12em
spacing:
  section-gap: 160px
  content-max-width: 1200px
  gutter: 32px
  margin-mobile: 24px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The brand personality is intellectual, grounded, and profoundly sophisticated. It evokes the feeling of a prestige academic journal or a high-end architectural monograph. The target audience is discerning scholars and professionals who appreciate the weight of history combined with the clarity of modern thought.

This design system follows a **Minimalist Architectural** style. It focuses on the physical metaphor of paper layering and "ink on sand." 
- **Architectural Forms:** UI elements are treated as structural blocks, emphasizing verticality and precise alignment.
- **Paper-like Layering:** Instead of digital depth (shadows), hierarchy is established through a stacked "sheet" metaphor using warm, tactile surface colors.
- **Muted Sophistication:** It avoids the artificiality of SaaS design (gradients, transparency) in favor of a solid, "printed" aesthetic that values permanence over trends.

## Colors

The palette is built on a "Three-Layer Architecture" that moves from light to dark to define content priority and narrative flow.

- **Top Layer (Surface):** Warm Ivory (`#F4F1EA`) acts as the primary canvas, providing a soft, non-clinical background that feels like premium heavy-stock paper. Text on this layer is always Dark Charcoal (`#1A1A1A`) for maximum legibility.
- **Middle Layer (Secondary):** Deep Burgundy (`#4A0E0E`) is used for focus areas, specialized academic sections, or call-to-actions. It signals prestige and historical depth.
- **Bottom Layer (Tertiary):** Deep Forest (`#1B261A`) provides a grounded, stable base for footers, immersive sidebars, or transitional chapters.

Avoid all neon accents or digital-blue highlights. Contrast is achieved through these rich, organic hues rather than vibrance.

## Typography

Typography functions as the primary visual decoration. **Hanken Grotesk** is used for display and headlines to provide a sharp, contemporary "Swiss-editorial" look. **Inter** is utilized for body text and labels to ensure modern, utilitarian clarity.

- **Editorial Spacing:** Display types use aggressive negative tracking (`-0.04em`) to create a dense, authoritative impact. 
- **Body Rhythm:** Body text is given a generous `1.6x` line height to prevent the "grey wall" effect and encourage deep reading.
- **Structural Labels:** Use `label-caps` for section navigation and metadata. These should always be set in uppercase with wide letter spacing to contrast against the tight headlines.

## Layout & Spacing

The layout is a **Fixed Grid** system that prioritizes a "center-well" for reading comfort while allowing for "marginalia" (asymmetrical callouts).

- **Grid Model:** A 12-column desktop grid with 32px gutters. Long-form body text should be restricted to an 8-column central span to keep line lengths ideal for academic reading.
- **Section Transitions:** Use the `section-gap` (160px) to create distinct visual pauses between thematic chapters. This whitespace is essential to the "Premium" feel.
- **Asymmetry:** Support text (citations, captions, pull-quotes) should be placed in the 2-column outer margins to break the grid's rigidity, mimicking the layout of a classic textbook.

## Elevation & Depth

This system avoids the concept of "z-index" shadows. Instead, it uses **Bold Borders** and **Tonal Tiers** to establish hierarchy.

- **Stacking:** Elements are "placed" on top of surfaces rather than "floating" over them. Use a 1px solid border (`#1A1A1A` at 10% opacity) on the Ivory surface to define container edges.
- **Contrast as Depth:** When a card or container needs to stand out, switch the background color entirely to a different layer (e.g., an Ivory card on a Deep Wine background).
- **Zero-Shadow Rule:** No drop shadows are permitted. If separation is required between identical colors, use a hairline border or a 4px inset "groove" effect.

## Shapes

The shape language is strictly **Sharp**. To maintain an architectural and editorial feel, use 0px roundedness for almost all structural elements. 

- **Subtle Softening:** Only for very specific interactive elements (like a small tag or secondary button), a "subtle" radius of 2px may be used to indicate touchability without breaking the overall geometric rigor.
- **Images:** Photography should always be sharp-edged, framed with thin borders to look like a mounted print.

## Components

- **Buttons:** Primary buttons are sharp-edged rectangles with a solid `Deep Wine` or `Dark Charcoal` fill and `Warm Ivory` text. Hover states should involve a color swap (Inverse) or a 2px offset "ghost" border to simulate paper stacking.
- **Cards:** Cards should not have shadows. Use a subtle background fill shift (e.g., a slightly darker Sand) or a 1px frame.
- **Input Fields:** Use a simple bottom-border only (underline) for a minimalist academic look, or a fully enclosed box with 0px radius.
- **Editorial Pull-Quotes:** Set in `body-lg`, italicized, with a `Deep Wine` vertical rule on the left side to highlight key academic insights.
- **Lists:** Use custom markers (e.g., "01.", "02.") in `label-caps` rather than standard bullets to emphasize the structured, archival nature of the content.
- **Dividers:** Use thin, 1px horizontal rules that do not span the full width of the container, creating a "notated" feel.