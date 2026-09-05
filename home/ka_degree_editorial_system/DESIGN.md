---
name: KA DEGREE Editorial System
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
  on-surface-variant: '#504346'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#837376'
  outline-variant: '#d5c2c5'
  surface-tint: '#81505c'
  primary: '#3b1520'
  on-primary: '#ffffff'
  primary-container: '#542a35'
  on-primary-container: '#ca909d'
  inverse-primary: '#f4b6c3'
  secondary: '#615e57'
  on-secondary: '#ffffff'
  secondary-container: '#e7e2d9'
  on-secondary-container: '#67645d'
  tertiary: '#06280f'
  on-tertiary: '#ffffff'
  tertiary-container: '#1d3e23'
  on-tertiary-container: '#85a986'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9e0'
  primary-fixed-dim: '#f4b6c3'
  on-primary-fixed: '#330f1a'
  on-primary-fixed-variant: '#663945'
  secondary-fixed: '#e7e2d9'
  secondary-fixed-dim: '#cac6be'
  on-secondary-fixed: '#1d1c16'
  on-secondary-fixed-variant: '#494740'
  tertiary-fixed: '#c5edc6'
  tertiary-fixed-dim: '#aad0ab'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#2d4e32'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Bodoni Moda
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 128px
---

## Brand & Style

The design system is rooted in the "New Editorial" aesthetic—a fusion of classical prestige and digital precision. It is designed for a high-end consulting audience that values intellectual depth, strategic rigor, and understated luxury.

The visual language rejects the over-saturated trends of contemporary SaaS in favor of a **Minimalist-Literary** approach. It prioritizes intentional whitespace (breathing room), a restricted and meaningful color palette, and a rigid adherence to a typographic grid. The emotional response is one of "Quiet Confidence"—the UI should feel like a high-end physical monograph or a bespoke strategy dossier rather than a generic digital tool.

## Colors

The palette is anchored by a deep, academic **Burgundy** (#542A35) which serves as the primary brand touchpoint for calls to action and key accents. The background is a **Warm Ivory** (#F4EFE6), providing a more sophisticated and less clinical feel than pure white, reminiscent of high-grade paper stock.

- **Primary:** Burgundy (#542A35) - Used for primary buttons, active states, and brand-heavy accents.
- **Secondary (Surface):** Warm Ivory (#F4EFE6) - The foundational background color.
- **Surface Muted:** A slightly darker tint of ivory (#EDE7DB) for grouping elements.
- **Text Primary:** Deep Charcoal (#1A1A1A) - Ensuring maximum legibility with a softer edge than true black.
- **Text Secondary:** Muted Slate (#555555) - For metadata and captions.
- **Accent/Border:** Taupe (#A48B78) - Used for subtle dividers and thin borders to maintain structure without visual noise.

## Typography

This design system utilizes a high-contrast typographic pairing to establish an editorial hierarchy.

**Bodoni Moda** is used for headlines. Its extreme contrast between thick and thin strokes evokes a sense of heritage and high-fashion editorial. Use it for large-scale storytelling and key section headers.

**Hanken Grotesk** serves as the functional counterpart. It is a modern, sharp sans-serif that remains legible at small sizes. Its clean geometry balances the decorative nature of the serif headings.

**Key Rule:** Never use the serif font for UI labels or long-form body text below 20px; these should always be handled by the sans-serif for clarity and professional tone. Use `label-caps` for all sub-headers and eyebrows to create a "structured" feel.

## Layout & Spacing

The layout philosophy follows a **Fixed-Width Editorial Grid**. Large amounts of margin are encouraged to focus the eye on central content.

- **Grid:** A 12-column grid for desktop with wide 32px gutters. On mobile, transition to a 4-column grid.
- **Rhythm:** Use an 8px base unit for all spacing. Elements should be spaced generously; favor "over-spacing" rather than crowding. 
- **Sectioning:** Vertical gaps between major content sections should be significant (128px+) to simulate the turning of a page in a magazine.
- **Alignment:** Use asymmetrical layouts where appropriate (e.g., text columns spanning columns 3-10) to create a premium, non-templated look.

## Elevation & Depth

This design system avoids traditional shadows to maintain its editorial, flat-print aesthetic. Depth is communicated through **Tonal Layering** and **Thin Borders**.

- **Layers:** Use subtle shifts in background color (e.g., Ivory to Surface Muted) to distinguish between content areas.
- **Borders:** Use 1px solid borders in Taupe (#A48B78) or light Ivory tints. Borders are the primary way to define cards and containers.
- **Interactions:** Do not use lift or shadow on hover. Instead, use color transitions (e.g., filling a bordered button with Burgundy) or subtle opacity shifts.

## Shapes

The shape language is strictly **Sharp (0px)**. 

Curvature is avoided to maintain a rigorous, architectural, and "printed" feel. All buttons, input fields, cards, and image containers must have 90-degree corners. This reinforces the consulting vibe—precise, structured, and uncompromising. 

Images should be treated like gallery pieces, always contained within sharp-edged frames, occasionally using thin 1px borders to separate them from the Warm Ivory background.

## Components

### Buttons
Primary buttons are solid Burgundy (#542A35) with white text. Secondary buttons use a 1px Burgundy border with transparent backgrounds. All buttons must be rectangular (0px radius) and use `label-caps` typography.

### Input Fields
Inputs are defined by a 1px bottom-border only (minimalist style) or a full 1px Taupe border. Use Hanken Grotesk for placeholder text. The focus state should be a subtle color shift of the border to Burgundy.

### Cards
Cards are flat containers. They should not have shadows. Instead, use a 1px border or a slightly darker background fill (Surface Muted) to separate them from the main background. 

### Lists
Lists in this system are "Rule-Heavy." Use a horizontal divider (1px Taupe) between every list item. This creates a structured, index-like appearance typical of strategy reports.

### Accents
Include a "Signature Line"—a very thin horizontal rule used above section headings—to anchor the typography and provide a high-end, bespoke feel.