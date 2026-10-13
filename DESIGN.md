---
name: Jiaxin Xu Academic Homepage
description: A concise personal academic page with a profile image, biography, publications, education, and honors.
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
6. Honors: the owner-confirmed 2026 National Scholarship.
7. A small copyright line.

There is no navigation bar, hero slogan, call-to-action button, news feed, separate research band, project list, or contact panel. Those sections previously repeated facts already present in the biography and papers. The compact Education section follows Publications, and its undergraduate details replace the former biography sentence. Paper and code/model resources remain alongside the corresponding publication.

## Color and type

A white page (#ffffff), dark gray text (#292929), secondary text (#626262), and blue links (#185d9c, #0c3d6b on hover). Color comes from the supplied profile image. No colored section backgrounds, shadows, cards, or gradients.

Source Sans 3 is the sole web font, served locally as one Latin variable WOFF2 with `font-display: swap`; Chinese text uses PingFang SC, Microsoft YaHei, or the platform sans-serif fallback. Body text is 17px with 1.6 line height. The desktop name is 36px, section headings 24px, paper titles 17px, author and venue metadata 15px, and the footer 13px. Titles use weight 600. Jiaxin Xu is emphasized within each full author list. On mobile the name is 32px, the Chinese name 18px, and section headings 22px.

## Layout

The page is centered at a maximum width of 800px, with 24px side margins on narrow screens. Desktop content begins 70px from the top; mobile content begins at 34px. The profile ends 42px before Publications on desktop and 30px on mobile.

The profile image sits to the right of the biography on desktop at 160px wide, separated by 36px, and beside the name on mobile at 96px wide. Preserve its original aspect ratio and use the locally served 480 × 584 WebP (30,298 bytes). It is a personal avatar selected by the owner, not a verified portrait; alternative text must remain neutral.

Each publication is a text-only entry spanning the reading column. Titles, authors, venues, descriptions, and resource links align with the section heading's left edge. All three papers use the same title size and layout. Entries are separated by 32px of whitespace, with no borders or card surfaces. Research thumbnails and Figure links were removed at the owner's request on 2026-10-13 because the differing image proportions, especially the very wide KaLM architecture, disrupted the layout.

At 600px and below, publication entries are separated by 25px. Contact and resource links wrap naturally. The mobile layout maintains the same text-only structure and content order as desktop.

## Components and behavior

- **Profile:** a single name heading, the supplied avatar, two short paragraphs, and a wrapping contact list.
- **Language:** quiet EN / 中文 text buttons beside the name, wrapping below it on narrow screens. Each button has a 44px minimum target and visible keyboard focus. Underline, weight, and `aria-pressed` identify the current language. English is the initial default; the preference is saved locally and restored before rendering. Headings, biography, education, honors, secondary email label, and the skip link switch languages. Paper titles, authors, venues, descriptions, and resource labels remain English. The name remains bilingual. Language switching works even when browser storage is blocked.
- **Education:** one shared school heading and two compact degree rows: master's in Computer Technology, Sep 2025 – Present; undergraduate studies in Computer Science and Technology, Sep 2021 – Jul 2025. Keep the same quiet typography and unboxed layout as the rest of the page.
- **Honors:** follows Education and lists National Scholarship with the year 2026. Match Education's plain typography, section spacing, and responsive row layout.
- **Publication:** a text-only entry with linked title, full authors in their original order, venue/year, a one-sentence description, and all three existing resource links. AOEB uses Paper, Code, and Conference; KaLM-Reranker-V1 uses Paper, Models, and Nano model; LMEB uses Paper, Code, and Project. Keep resource choices in the data file. Readers can find figures in the linked papers.
- **Links:** blue text with an underline on hover and a 2px visible focus outline offset by 4px. Contact and resource links have 44px minimum target height.
- **Accessibility:** semantic document structure, a keyboard skip link, and responsive reflow. Document language tracks the selection; English publication content and translated spans carry explicit language tags. All English content remains available without JavaScript, with the language buttons hidden. There are no menus, copy controls, disclosures, animation, or loading states.
- **Print:** full-width page content in the selected language with publication rows kept together where possible; language controls are hidden.

## Content safeguards

Preserve real paper titles, author ordering, venues, and resource URLs. The advisor is Prof. Meishan Zhang. Both degrees are at HIT Shenzhen: master's in Computer Technology, Sep 2025 – Present, and undergraduate studies in Computer Science and Technology, Sep 2021 – Jul 2025. The user confirmed the education dates and 2026 National Scholarship. Do not infer a specific degree abbreviation or additional awards. Keep the source-figure provenance record. The user supplied the profile image; do not invent additional experience or add empty sections. Add a CV, Scholar profile, or further honors only when authentic information is available.

Do not reintroduce repeated research descriptions, decorative slogans, featured-paper marketing layouts, full-width color bands, or product-style calls to action. New information should earn its place by helping a reader understand the person or their work.
