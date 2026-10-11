---
name: Jiaxin Xu Academic Editorial Portfolio
description: A restrained research portfolio for information retrieval and LLM agents.
colors:
  paper: "#f8f9f5"
  surface: "#ffffff"
  ink: "#233b32"
  secondary: "#59675e"
  accent: "#35624c"
  rule: "#d7ded4"
  figure: "#ffffff"
  sage: "#e9eee4"
  forest: "#223e34"
typography:
  display:
    fontFamily: "Source Serif 4 Variable, Georgia, serif"
    fontSize: "clamp(4rem, 6.65vw, 6rem)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Source Serif 4 Variable, Georgia, serif"
    fontSize: "40px"
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: "-.035em"
  publication-title:
    fontFamily: "Source Serif 4 Variable, Georgia, serif"
    fontSize: "26px"
    fontWeight: 450
    lineHeight: 1.3
    letterSpacing: "-.022em"
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
  section: "88px"
components:
  button-primary:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.paper}"
    rounded: "{rounded.small}"
    padding: "11px 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
---

# Design System: Jiaxin Xu

## Overview

**Creative North Star: "Academic Editorial Portfolio"**

An open editorial layout with a clear personal identity and visible research evidence. Large serif name typography introduces Jiaxin Xu; authentic paper figures, varied section proportions, and a forest-green research band give the page its rhythm. Source Sans 3 keeps biographies, author lists, and resource links easy to scan.

The initial editorial direction is retained and reshaped following the user's request for a less rigid layout. The current implementation replaces the identity rail and monogram with a large name-and-biography opening, gives AOEB a lead-publication treatment, and uses figures sourced from the papers and authors' repositories.

**Key Characteristics:**

- A prominent researcher identity, followed by research evidence.
- A lead paper, paired supporting papers, and open engineering rows.
- Authentic figures with source attribution and full-size links.

## Colors

Off-white paper, green-black ink, forest green, and a pale sage contact field. Research figures retain the original authors' colors; the surrounding interface provides a quiet frame.

- **Paper** (#f8f9f5): page and sticky navigation.
- **Ink** (#233b32): headings and primary copy.
- **Secondary** (#59675e): descriptions, metadata, and captions.
- **Accent** (#35624c): interactive text and conference metadata.
- **Rule** (#d7ded4): fine content separators.
- **Figure / Surface** (#ffffff): uncropped paper-figure frames.
- **Forest** (#223e34): research band and primary action.
- **Sage** (#e9eee4): contact background.

## Typography

Source Serif 4 is the display voice; Source Sans 3 handles reading, metadata, and navigation. Two Latin variable WOFF2 files are served locally and preloaded with `font-display: swap`; Chinese names use platform fallback.

- Name: `clamp(4rem, 6.65vw, 6rem)` on desktop and `clamp(3.3rem, 14.4vw, 5rem)` on mobile; 400 weight, 1.06 line height.
- Hero research statement: 36px desktop and 30px mobile. The biography opener is 28px desktop and 24px mobile.
- Section: 40px desktop, 32px mobile; 400 weight, 1.18 line height.
- Publication: 32px for the lead paper and 26px for supporting papers on desktop; 24px on mobile; 450 weight.
- Body: 18px base; descriptions 17px desktop and 16px mobile, with 1.6–1.65 line height.
- Metadata and captions: 13–16px, with compact mobile figure captions at 12px. Jiaxin Xu's name uses 650 weight within author lists.
- Reading measures: biography 48ch, project introduction 70ch, and project descriptions 65ch.

## Layout

Content is left aligned inside a 1160px maximum container. The opening pairs a large name and research statement with a short biography across two columns and an 88px gutter. A narrow news strip leads into the publications. AOEB spans the publication grid, with its figure beside the text; KaLM and LMEB follow as two supporting columns with figures above their text.

The full-width forest research band separates publication evidence from open engineering rows. Education groups the master's and undergraduate entries beside their shared institution. Contact finishes the page on a pale sage field.

At 1100px columns and gaps narrow. At 760px navigation becomes native disclosure and major sections reflow into one reading path. The mobile container has 24px side margins; figures precede publication text and retain their natural aspect ratios. Section separation is 88px desktop and 56px mobile, with tighter spacing inside related groups.

## Elevation & Depth

Flat content surfaces. Fine rules, white figure frames, and contrasting section backgrounds establish the groups. Only the open mobile navigation has a subtle `0 8px 12px #233b320a` shadow to clarify its overlay state.

## Shapes

Rectangular editorial geometry. The primary action has a 3px radius and figure-expand controls have a 2px radius. The research illustrations are source-derived WebP assets, displayed with `object-fit: contain` and linked to their full-size files. A portrait is not required by the composition.

## Components

- **Primary action:** a minimum 48px filled button, forest green at rest and accent on hover.
- **Navigation:** opaque sticky header, text links on desktop, a native menu on mobile; Escape, outside click, and selection close the menu when JavaScript is available.
- **Publication:** an attributed source figure, linked title, ordered author preview, venue/year, native full-author disclosure, summary, and text resource links. AOEB receives the lead position; supporting papers share a row on desktop.
- **Research band:** a question-led introduction beside three research interests, with pale text and fine dividers on forest green.
- **Project row:** a project name and resource type beside the engineering contribution; linked titles have minimum 44px targets.
- **Education:** master's studies in Computer Technology, advised by Prof. Meishan Zhang, and undergraduate studies in Computer Science and Technology at HIT Shenzhen. Undergraduate dates and specific degree abbreviations remain unspecified.
- **Contact:** two working mailto addresses, progressively enhanced copy controls, and an announced success or recovery message.
- **Focus:** a 2px current-color outline offset by 5px, with the primary action using the accent; links use underline offset .22em. Selection uses #d9e8cc. Reduced motion disables smooth scrolling.

## Do's and Don'ts

- **Do** preserve authentic publication titles, author order, and attribution.
- **Do** preserve complete source figures and maintain the provenance record in `docs/image-sources.md`.
- **Do** use space and fine rules to establish content groups.
- **Do** maintain visible focus and 44px resource targets.
- **Don't** turn the page into rounded SaaS cards or introduce purple gradients.
- **Don't** add decorative motion, fabricated portraits, or unsupported research claims.
