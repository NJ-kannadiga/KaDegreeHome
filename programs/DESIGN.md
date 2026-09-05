---
name: Academic Editorial
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#584141'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#8c7071'
  outline-variant: '#e0bfbf'
  surface-tint: '#af2b3e'
  primary: '#570013'
  on-primary: '#ffffff'
  primary-container: '#800020'
  on-primary-container: '#ff828a'
  inverse-primary: '#ffb3b5'
  secondary: '#306a43'
  on-secondary: '#ffffff'
  secondary-container: '#b2f1bf'
  on-secondary-container: '#367048'
  tertiary: '#272824'
  on-tertiary: '#ffffff'
  tertiary-container: '#3d3e39'
  on-tertiary-container: '#a9a9a3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb3b5'
  on-primary-fixed: '#40000b'
  on-primary-fixed-variant: '#8e0f28'
  secondary-fixed: '#b2f1bf'
  secondary-fixed-dim: '#97d5a5'
  on-secondary-fixed: '#00210d'
  on-secondary-fixed-variant: '#14512d'
  tertiary-fixed: '#e3e3dc'
  tertiary-fixed-dim: '#c7c7c0'
  on-tertiary-fixed: '#1b1c18'
  on-tertiary-fixed-variant: '#464742'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '400'
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
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

This design system is built for a high-prestige academic environment, blending the authoritative weight of traditional publishing with the clarity of modern digital interfaces. The brand personality is scholarly, disciplined, and premium. It avoids the coldness of typical SaaS platforms in favor of a "human-designed" feel—evoking the quality of a well-typeset journal or a physical campus experience.

The visual style is a fusion of **Minimalism** and **Modern Editorial**. It relies on high-contrast serif typography, thin hairline borders, and a sophisticated, warm color palette to establish hierarchy. Elements are grounded and purposeful; there are no decorative flourishes that do not serve the content. The emotional response should be one of quiet confidence, intellectual rigor, and institutional permanence.

## Colors

The palette is rooted in a heritage academic aesthetic. 

- **Primary Background (Warm Ivory):** Used for all main page surfaces to reduce eye strain and provide a "paper" feel.
- **Primary Accent (Burgundy):** Reserved for high-priority actions, primary buttons, and institutional branding elements.
- **Secondary Accent (Forest Green):** Used for success states, seat availability indicators, and specific academic categories.
- **Typography (Deep Charcoal):** Provides high legibility without the harshness of pure black, maintaining the premium editorial feel.
- **Borders & Dividers (Muted Sand):** Essential for the thin, structural lines that define the grid without creating visual clutter.

## Typography

The typographic system utilizes a classic serif/sans-serif pairing to distinguish between narrative content and functional UI.

- **Headlines:** Use **Libre Caslon Text**. This font brings historical authority and editorial grace. Use it for page titles, section headers, and pulled quotes. For large display sizes, a slight negative letter-spacing is recommended to tighten the professional appearance.
- **Body & Functional UI:** Use **Hanken Grotesk**. This contemporary sans-serif offers exceptional legibility at smaller sizes. Its geometry is clean but has enough character to feel modern and precise.
- **Labels:** Small labels and metadata should use Hanken Grotesk in uppercase with increased tracking to create a sense of organized, cataloged information.

## Layout & Spacing

This design system employs a **Fixed Grid** philosophy on desktop to maintain a composed, editorial look, transitioning to a fluid model for mobile.

- **The Grid:** A 12-column layout with generous 32px gutters. Content should often be offset (e.g., a 10-column centered container) to emphasize the ivory background and provide "breathing room."
- **Whitespace:** Spacing is used as a deliberate design element. Large vertical gaps (120px+) should separate major thematic sections to signify a transition in the academic narrative.
- **Rhythm:** All spacing must be multiples of the 8px base unit. Internal card padding should be generous (min 32px) to prevent information density from feeling overwhelming.

## Elevation & Depth

To maintain the editorial aesthetic, depth is conveyed through **Tonal Layers** and **Low-contrast Outlines** rather than traditional shadows.

1.  **Surfaces:** Elements should feel like they are lying flat on the Warm Ivory page.
2.  **Borders:** Use 1px "Muted Sand" borders to define containers. In active or hovered states, the border may transition to "Deep Charcoal" or "Burgundy."
3.  **Subtle Depth:** Where separation is critical (e.g., a modal or floating menu), use a very large, soft, low-opacity (2-4%) neutral shadow that mimics ambient light rather than a direct light source. 
4.  **Transitions:** Implement staggered reveals for list items and smooth opacity fades for page entries. This "cinematic" movement reinforces the premium feel.

## Shapes

The shape language is structured and formal. Most containers and buttons use a "Soft" (0.25rem) radius to take the edge off the brutalism without becoming overly playful or casual.

- **Primary Buttons:** Soft corners (4px) convey stability and precision.
- **Avatars & Image Containers:** Use sharp or soft-cornered rectangles; avoid circles to keep the "published document" feel.
- **Progress Bars:** These should be thin lines with sharp terminals to reflect a technical, accurate measurement of seat availability.

## Components

- **Buttons:** Primary buttons are solid Burgundy with Ivory text. Secondary buttons are Ivory with a 1px Muted Sand border and Charcoal text. On hover, the border darkens.
- **Input Fields:** Fields are transparent with a bottom-only 1px border. Upon focus, the border transitions to a full 1px Burgundy frame with a subtle fade-in.
- **Seat Availability Indicators:** Represented as a sophisticated, thin horizontal progress bar. Use Forest Green for available, Muted Sand for empty segments, and a subtle text label ("12 Seats Remaining") in Hanken Grotesk Caps.
- **Cards:** Cards should not have shadows. Use a 1px Muted Sand border and ample internal padding (40px). Use the Libre Caslon font for the title within the card to give each academic program the feel of a book cover.
- **Lists:** Course lists should be separated by a simple horizontal 1px line. Each list item should have a hover state that slightly shifts the text to the right (4px) with a smooth transition, evoking a premium table-of-contents interaction.