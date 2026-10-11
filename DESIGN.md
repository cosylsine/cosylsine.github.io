---
name: Jiaxin Xu Academic Editorial Portfolio
description: A restrained research portfolio for information retrieval and LLM agents.
colors:
  paper: "#fafaf7"
  surface: "#ffffff"
  ink: "#24394b"
  secondary: "#526371"
  accent: "#275e7c"
  rule: "#d9dfe0"
  figure: "#edf2f4"
typography:
  display:
    fontFamily: "Source Serif 4 Variable, Georgia, serif"
    fontSize: "clamp(40px, 3.62vw, 52px)"
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: "-.025em"
  headline:
    fontFamily: "Source Serif 4 Variable, Georgia, serif"
    fontSize: "30px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-.02em"
  publication-title:
    fontFamily: "Source Serif 4 Variable, Georgia, serif"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: 1.32
    letterSpacing: "-.012em"
  body:
    fontFamily: "Source Sans 3 Variable, Helvetica Neue, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Source Sans 3 Variable, Helvetica Neue, sans-serif"
    fontSize: "16px"
    fontWeight: 600
rounded:
  small: "3px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.small}"
    padding: "10px 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
---

# Design System: Jiaxin Xu

## Overview

**Creative North Star: "Academic Editorial Portfolio"**

Modern, restrained, and refined. The reading experience supports scholarly evidence rather than a commercial product pitch. Serif headings carry the editorial voice; clear body typography and compact resource links support scanning.

Two directions were presented: an academic editorial reading experience and a compact sans-serif research index. The editorial direction was selected under the user's instruction to implement the version best suited to an academic researcher. This record merges the provisional direction with the verified implementation.

**Key Characteristics:**

- Research before decoration.
- Generous reading space and compact metadata.
- Authentic scholarly resources and explicitly labeled schematics.

## Colors

Paper white, deep blue ink, and a restrained blue accent. Secondary copy remains readable against the paper field.

- **Paper** (#fafaf7): page and sticky navigation.
- **Ink** (#24394b): headings, primary copy, and the primary action.
- **Secondary** (#526371): descriptions, metadata, and captions.
- **Accent** (#275e7c): interactive text and conference metadata.
- **Rule** (#d9dfe0): fine content separators.
- **Figure** (#edf2f4): schematic grounds; KaLM uses #f0f1ed and LMEB uses #eef0f4.

## Typography

Source Serif 4 is the display voice; Source Sans 3 handles reading, metadata, and navigation. Two Latin variable WOFF2 files are served locally and preloaded with `font-display: swap`; Chinese names use platform fallback.

- Hero: 52px at 1440px, approximately 36px at 390px; 400 weight, 1.18 line height.
- Section: 30px desktop, 28px mobile; 400 weight, 1.25 line height.
- Publication: 24px desktop, 23px mobile; 500 weight, 1.32–1.34 line height.
- Body: 18px base; descriptions 17px desktop and 16px mobile, with 1.55–1.6 line height.
- Metadata: 15–16px. Author names use 650 weight for Jiaxin Xu.
- Reading measures: hero 66ch, paper descriptions 72ch, project prose 60ch.

## Layout

Content is left aligned inside a 1120px maximum container. At 1440px, a 220px identity rail and 80px gutter frame the research statement. Research and news share columns; publications use a 280px figure column and 40px gutter. Projects use compact three-column rows. Education and contact preserve aligned reading groups.

At 1100px columns and gaps narrow. At 760px navigation becomes native disclosure and all major sections reflow into a single reading path. The mobile container has 24px side margins; publication figures precede text. Section separation is 80px desktop and 56px mobile, with tighter spacing inside related groups.

## Elevation & Depth

Flat content surfaces. Fine rules and diagram grounds provide structure without card shadows. Only the open mobile navigation has a subtle `0 8px 12px #24394b0a` shadow to clarify its overlay state.

## Shapes

Rectangular editorial geometry. Primary actions and schematic grounds use a 3px radius. Crisp native SVG diagrams carry research information rather than decorative scenes. The Jx monogram substitutes for the absent portrait, with tracking limited to -.04em.

## Components

- **Primary action:** a 48px filled button, dark ink at rest and accent on hover.
- **Navigation:** opaque sticky header, text links on desktop, a native menu on mobile; Escape, outside click, and selection close the menu when JavaScript is available.
- **Publication row:** linked title, ordered author preview, venue/year, native full-author disclosure, summary, and text resource links. Venue metadata follows the title and author list.
- **Project row:** team project name, engineering contribution, and resource type; linked title has a minimum 44px target.
- **Contact:** two working mailto addresses, progressively enhanced copy controls, and an announced success or recovery message.
- **Focus:** a 2px accent outline offset by 5px; links use underline offset .22em. Selection uses #d5e5eb. Reduced motion disables smooth scrolling.

## Do's and Don'ts

- **Do** preserve authentic publication titles, author order, and attribution.
- **Do** use space and fine rules to establish content groups.
- **Do** maintain visible focus and 44px resource targets.
- **Don't** turn the page into rounded SaaS cards or introduce purple gradients.
- **Don't** add decorative motion, fabricated portraits, or unsupported research claims.
