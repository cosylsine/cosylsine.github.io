---
name: Jiaxin Xu Academic Homepage
description: A concise personal academic page with a profile image, biography, publications, and education.
colors:
  paper: "#ffffff"
  ink: "#292929"
  secondary: "#626262"
  link: "#185d9c"
  link-hover: "#0c3d6b"
typography:
  name:
    fontFamily: "Source Sans 3 Variable, Helvetica Neue, sans-serif"
    fontSize: "36px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-.025em"
  section:
    fontFamily: "Source Sans 3 Variable, Helvetica Neue, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.3
  publication-title:
    fontFamily: "Source Sans 3 Variable, Helvetica Neue, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Source Sans 3 Variable, Helvetica Neue, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  metadata:
    fontFamily: "Source Sans 3 Variable, Helvetica Neue, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
spacing:
  paragraph: "16px"
  publication: "32px"
  section: "42px"
  page-inline: "24px"
---

# Design System: Jiaxin Xu

## Direction

A compact personal academic homepage. The user rejected the earlier design because large display type, contrasting section bands, repeated research copy, and promotional actions made it feel like a product website. This design therefore prioritizes a short introduction and a clear publication list.

The references are [Jon Barron's homepage](https://jonbarron.info/), [Andrej Karpathy's homepage](https://karpathy.ai/), and [Xin Zhang's homepage](https://izhx.github.io/). Their useful principles are a recognizable personal introduction, ordinary reading typography, direct links, and complete scholarly records. The owner-selected profile image and fuller paper details enrich the existing document without adding unsupported biographical material.

## Information architecture

1. Jiaxin Xu / 许佳鑫 with the owner-selected profile image.
2. Two biography paragraphs: current master's subject and institution, advisor, then research interests.
3. Direct contact links: primary email address, secondary email labeled “Email (163),” and GitHub.
4. Publications: AOEB, KaLM-Reranker-V1, and LMEB with equal visual weight, complete authors, and a brief research description.
5. Education: one Harbin Institute of Technology, Shenzhen heading with master's and undergraduate rows.
6. A small copyright line.

There is no navigation bar, hero slogan, call-to-action button, news feed, separate research band, project list, or contact panel. Those sections previously repeated facts already present in the biography and papers. The compact Education section follows Publications, and its undergraduate details replace the former biography sentence. Paper and code/model resources remain alongside the corresponding publication.

## Color and type

A white page (#ffffff), dark gray text (#292929), secondary text (#626262), and blue links (#185d9c, #0c3d6b on hover). Color comes from the supplied profile image and original research figures. No colored section backgrounds, shadows, cards, or gradients.

Source Sans 3 is the sole web font, served locally as one Latin variable WOFF2 with `font-display: swap`; Chinese names use platform fallback. Body text is 17px with 1.6 line height. The desktop name is 36px, section headings 24px, paper titles 17px, author and venue metadata 15px, and the footer 13px. Titles use weight 600. Jiaxin Xu is emphasized within each full author list. On mobile the name is 32px, the Chinese name 18px, and section headings 22px.

## Layout

The page is centered at a maximum width of 800px, with 24px side margins on narrow screens. Desktop content begins 70px from the top; mobile content begins at 34px. The profile ends 42px before Publications on desktop and 30px on mobile.

The profile image sits to the right of the biography on desktop at 160px wide, separated by 36px, and beside the name on mobile at 96px wide. Preserve its original aspect ratio and use the locally served 480 × 584 WebP (30,298 bytes). It is a personal avatar selected by the owner, not a verified portrait; alternative text must remain neutral.

Each desktop publication is a row: a 176px thumbnail, a 30px gap, then paper information. Source figures are contained within a 128px image height without cropping. All three papers use the same title size and layout. Publication rows are separated by 32px of whitespace, with no borders or card surfaces.

At 600px and below, the publication list becomes text-first: thumbnails are hidden and each paper gains a “Figure” link to its full-size local image. Rows are separated by 25px. Contact and resource links wrap naturally. The mobile layout maintains the same content order as desktop.

## Components and behavior

- **Profile:** a single name heading, the supplied avatar, two short paragraphs, and a wrapping contact list.
- **Education:** one shared school heading and two compact degree rows: master's in Computer Technology, Sep 2025 – Present; undergraduate studies in Computer Science and Technology, Started 2021. Keep the same quiet typography and unboxed layout as the rest of the page.
- **Publication:** linked title, full authors in their original order, venue/year, a one-sentence description, and all three existing resource links. AOEB uses Paper, Code, and Conference; KaLM-Reranker-V1 uses Paper, Models, and Nano model; LMEB uses Paper, Code, and Project. Keep resource choices in the data file.
- **Figure:** an uncropped, source-derived desktop thumbnail linked to the original local asset; a plain Figure link on mobile. Alternative text describes the actual figure. Source records remain in `docs/image-sources.md`.
- **Links:** blue text with an underline on hover and a 2px visible focus outline offset by 4px. Contact and resource links have 44px minimum target height.
- **Accessibility:** semantic document structure, a keyboard skip link, responsive reflow, and no reliance on JavaScript. There are no menus, copy controls, disclosures, animation, or loading states.
- **Print:** full-width page content with publication rows kept together where possible.

## Content safeguards

Preserve real paper titles, author ordering, venues, and resource URLs. The advisor is Prof. Meishan Zhang. Both degrees are at HIT Shenzhen: master's in Computer Technology, Sep 2025 – Present, and undergraduate studies in Computer Science and Technology, Started 2021. Do not infer an undergraduate graduation year or a specific degree abbreviation. Keep the source-figure provenance record. The user supplied the profile image but has no additional experience or award material; do not invent it or add empty sections. Add a CV, Scholar profile, or honors only when authentic information is available.

Do not reintroduce repeated research descriptions, decorative slogans, featured-paper marketing layouts, full-width color bands, or product-style calls to action. New information should earn its place by helping a reader understand the person or their work.
