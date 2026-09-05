---
name: Editorial Intelligence
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
  on-surface-variant: '#464742'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#767871'
  outline-variant: '#c7c7bf'
  surface-tint: '#5e5f5a'
  primary: '#5e5f5a'
  on-primary: '#ffffff'
  primary-container: '#fdfcf5'
  on-primary-container: '#74746f'
  inverse-primary: '#c7c7c0'
  secondary: '#af2b3e'
  on-secondary: '#ffffff'
  secondary-container: '#fd6673'
  on-secondary-container: '#680018'
  tertiary: '#306a43'
  on-tertiary: '#ffffff'
  tertiary-container: '#f4fff2'
  on-tertiary-container: '#468057'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e3e3dc'
  primary-fixed-dim: '#c7c7c0'
  on-primary-fixed: '#1b1c18'
  on-primary-fixed-variant: '#464742'
  secondary-fixed: '#ffdada'
  secondary-fixed-dim: '#ffb3b5'
  on-secondary-fixed: '#40000b'
  on-secondary-fixed-variant: '#8e0f28'
  tertiary-fixed: '#b2f1bf'
  tertiary-fixed-dim: '#97d5a5'
  on-tertiary-fixed: '#00210d'
  on-tertiary-fixed-variant: '#14512d'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
  body-lg:
    fontFamily: Source Sans 3
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Source Sans 3
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Source Sans 3
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  metadata:
    fontFamily: Source Sans 3
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The design system is anchored in the tradition of high-end investigative journalism, adapted for the modern tech professional. It rejects the hyper-glossy, "liquified" aesthetics of contemporary SaaS in favor of a **Sophisticated Editorial** style. 

The personality is authoritative, intellectual, and human-centric. It prioritizes content hierarchy and long-form readability through:
- **Intentional Asymmetry:** Breaking the standard grid to create visual interest and highlight featured investigative pieces.
- **Micro-Minimalism:** Using thin, disciplined borders and generous whitespace to create a sense of "physical" paper and high-quality printing.
- **Tactile Professionalism:** Avoiding shadows and blurs, relying instead on tonal contrast and structural alignment to define depth.
- **The "Human" Touch:** Emphasizing curation over automation, reflected in layout choices that feel hand-composed rather than procedurally generated.

## Colors

This design system utilizes a high-contrast, organic palette that mimics premium stationery and ink.

- **Warm Ivory (#FDFCF5):** The foundation. It reduces eye strain for long-form reading and provides a more sophisticated, "off-white" backdrop than pure digital white.
- **Burgundy (#800020):** Used for primary actions, category tags (e.g., "Analysis"), and critical brand highlights. It evokes traditional mastheads.
- **Forest Green (#014421):** Used for secondary accents, success states, or specific editorial tracks (e.g., "Career Growth").
- **Ink Black (#1A1A1A):** Used for all body text and structural borders to ensure maximum legibility and a crisp, printed feel.
- **Muted Slate (#666666):** Used for metadata, captions, and secondary labels.

## Typography

Typography is the core of this design system. It uses a classical serif for authority and a highly legible sans-serif for utility.

- **Headlines:** `Libre Caslon Text` is used for all editorial titles. It should be set with tight letter-spacing for large display sizes to maintain a "locked-in" magazine feel.
- **Body:** `Source Sans 3` provides a neutral, highly readable experience for deep-dive articles. The line height is intentionally generous (1.5x - 1.6x) to facilitate reading.
- **Labels:** Use uppercase `Source Sans 3` with increased tracking for category headers and navigation to distinguish them from narrative text.
- **Italics:** Use italics for pull-quotes and metadata (byline, date) to add texture to the page.

## Layout & Spacing

The layout philosophy is based on a **modified 12-column grid** that encourages asymmetrical compositions.

- **Asymmetry:** Feature stories should often occupy 8 columns, leaving 4 columns for "margin-note" style metadata, pull quotes, or related links.
- **Whitespace:** Use aggressive vertical spacing (`section-gap`) between different content clusters to give the reader "breathing room."
- **Grid Alignment:** Elements should be aligned to the grid, but decorative elements (like thin vertical lines or image captions) can sit in the gutters to break the rigidity.
- **Mobile Reflow:** On mobile, the 12-column grid collapses to a single column, but the "Warm Ivory" background and 20px margins are maintained to preserve the aesthetic.

## Elevation & Depth

This design system avoids physical depth markers like shadows or blurs. Depth is achieved through layering and borders:

- **Flat Layering:** Different content sections are separated by color blocks (e.g., a Forest Green footer) rather than elevation.
- **Thin Borders:** Use 0.5pt or 1pt solid lines in Ink Black (#1A1A1A) to define sections, wrap cards, or separate navigation items.
- **Overlays:** Simple, non-blurred overlays may be used for navigation menus, using a solid Warm Ivory background with a heavy border to indicate focus.
- **No Gradients:** Colors must remain flat and purposeful.

## Shapes

The shape language is **strictly geometric and sharp**. 

- **Sharp Corners:** All buttons, cards, and input fields must have 0px corner radius. This reinforces the "printed paper" and architectural feel of the brand.
- **Line Work:** Use vertical and horizontal lines to create "frames" for content. Images should be strictly rectangular.
- **Dividers:** Use thin horizontal rules (HR) to separate articles in a list, rather than card containers.

## Components

- **Buttons:** Sharp-edged, solid Burgundy or Forest Green backgrounds with Warm Ivory text. Secondary buttons are transparent with a 1px Black border.
- **Cards:** Defined by a 1px border or simply by their alignment on the grid. Avoid box-shadows. Use a "Hover State" that slightly shifts the background color to a darker ivory.
- **Editorial Chips:** Small, rectangular tags with no rounding. Use `label-caps` typography. 
- **Input Fields:** Bottom-border only or 1px full border. Focused states use a thicker 2px bottom border in Burgundy.
- **Lists:** Article lists should use "Master-Detail" styling—large serif headline, followed by a small metadata row, separated by a thin 0.5px line.
- **Pull Quotes:** Set in large `Libre Caslon Text` italics, indented from the main body, with a Forest Green vertical accent line on the left.
- **Navigation:** Simple, text-based links in `label-caps`. The active state is indicated by a simple underline.