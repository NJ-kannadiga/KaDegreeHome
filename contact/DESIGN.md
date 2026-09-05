---
name: Academic Humanism
colors:
  surface: '#fbfaee'
  surface-dim: '#dbdbcf'
  surface-bright: '#fbfaee'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4e8'
  surface-container: '#efeee3'
  surface-container-high: '#e9e9dd'
  surface-container-highest: '#e4e3d7'
  on-surface: '#1b1c15'
  on-surface-variant: '#584141'
  inverse-surface: '#303129'
  inverse-on-surface: '#f2f1e5'
  outline: '#8c7071'
  outline-variant: '#e0bfbf'
  surface-tint: '#af2b3e'
  primary: '#570013'
  on-primary: '#ffffff'
  primary-container: '#800020'
  on-primary-container: '#ff828a'
  inverse-primary: '#ffb3b5'
  secondary: '#3b6751'
  on-secondary: '#ffffff'
  secondary-container: '#bbeacf'
  on-secondary-container: '#406b56'
  tertiary: '#002c36'
  on-tertiary: '#ffffff'
  tertiary-container: '#004451'
  on-tertiary-container: '#7cb0c0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb3b5'
  on-primary-fixed: '#40000b'
  on-primary-fixed-variant: '#8e0f28'
  secondary-fixed: '#bdedd2'
  secondary-fixed-dim: '#a2d1b7'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#234f3b'
  tertiary-fixed: '#b6ebfb'
  tertiary-fixed-dim: '#9acfde'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#114d5b'
  background: '#fbfaee'
  on-background: '#1b1c15'
  surface-variant: '#e4e3d7'
  ink: '#1A1A1A'
  paper-shadow: '#E6E5D8'
  accent-gold: '#54462D'
typography:
  display-xl:
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
    lineHeight: 38px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 34px
  body-lg:
    fontFamily: Source Sans 3
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Source Sans 3
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Source Sans 3
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  unit: 4px
  gutter: 24px
  margin-edge: 40px
  section-gap: 120px
---

## Brand & Style

The design system is rooted in the "Academic Humanism" aesthetic—a rejection of sterile, high-tech templates in favor of an editorial, tactile experience. It targets a sophisticated audience seeking deep education, evoking the feeling of a high-end printed journal or a private library. 

The style is defined by **New Editorialism**:
- **Thin Borders & Hairlines:** Structural integrity is maintained through 1px hairlines rather than shadows or depth.
- **Asymmetrical Compositions:** Layouts intentionally break the center-axis to create a dynamic, human-directed flow.
- **Intentional Whitespace:** Space is used as a formal element to provide breathing room for complex ideas.
- **Anti-SaaS Aesthetic:** Explicit avoidance of oversized border-radii, vibrant gradients, and "bubbly" UI components.

## Colors

The palette is anchored in heritage and scholarship.
- **Warm Ivory (#FDFCF0):** Acts as the primary surface color ("The Paper"), reducing eye strain and providing a sophisticated alternative to pure white.
- **Burgundy (#800020):** Used for primary actions, critical highlights, and key brand moments. It carries the weight of traditional academic excellence.
- **Forest Green (#013220):** Used for secondary signals, deep backgrounds, and success states, grounding the palette in nature and stability.
- **Ink (#1A1A1A):** All body text and borders should use this softened black to maintain contrast without the harshness of pure hex #000.

## Typography

The typography pairing reflects a balance between tradition and utility. 
- **Libre Caslon Text** is used for all headlines. Its high-contrast strokes and elegant serifs provide the necessary editorial "voice." For large display titles, use slight negative letter-spacing.
- **Source Sans 3** is the workhorse for body copy and UI labels. It was chosen for its exceptional legibility and neutral character, allowing the serif headings to take center stage.
- **Hierarchy Tip:** Use the `label-caps` style for section overlines or small metadata to create a "captioned" look similar to architectural drawings.

## Layout & Spacing

This design system utilizes a **12-column fixed grid** for desktop, but emphasizes **asymmetrical placement**. 
- **Composition:** Avoid centering content. Pull imagery to one side of the grid while text occupies the opposite 7-8 columns.
- **Slanted Dividers:** Transitions between major content sections should use a subtle 3-5 degree diagonal divider rather than a straight horizontal line. This breaks the "boxed" feel of modern web design.
- **Breakpoints:** 
  - Desktop: 1280px+ (Center-aligned container).
  - Tablet: 768px - 1279px (Fluid margins, 10% side padding).
  - Mobile: Under 768px (Single column, 20px margins, remove slants if they compromise readability).

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Hairline Strokes** rather than shadows.
- **Flat Surface Logic:** Elements do not "float" above the page; they are printed "on" the page.
- **Borders:** Use 1px solid borders in the `Ink` or `Paper-shadow` colors to define containers.
- **Layering:** To suggest focus, use a slightly different background shade (e.g., a Forest Green block behind an Ivory text card) rather than an elevation shadow.
- **No Blurs:** Avoid all glassmorphism or background blurs; the design must remain crisp and legible at all times.

## Shapes

The design system employs a **Sharp (0px)** corner radius across all elements. 
- Rectangularity emphasizes the "printed matter" and "architectural" inspiration. 
- Buttons, input fields, and images should all maintain strictly square corners.
- Decorative elements, such as pull-quotes, can use vertical hairlines on the left side to create visual distinction without needing a containing box.

## Components

- **Buttons:** Sharp corners, 1px border. Primary buttons use a solid Burgundy fill with Ivory text. Secondary buttons use an Ivory fill with an Ink border. On hover, invert the colors or shift the background slightly to `Paper-shadow`.
- **Inputs:** Simple bottom-border only (1px Ink) or a full sharp-edged box. Place the label in `label-caps` directly above the field. No rounded corners or heavy glows on focus.
- **Cards:** Cards are defined by 1px hairlines. To create an "editorial" look, allow images within cards to bleed to the edges or be slightly offset (asymmetrical) from the text.
- **Chips/Labels:** Small, sharp-edged rectangles with `label-caps` text. Use Forest Green for positive status indicators.
- **Lists:** Use custom icons (like a small Burgundy square or an arrow) instead of standard bullet points to reinforce the bespoke nature of the brand.
- **Section Dividers:** Use the "Slanted Divider" component to transition between light (Ivory) and dark (Forest Green) sections of the page.