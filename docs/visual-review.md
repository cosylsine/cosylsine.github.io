# Visual review — 2026-10-11 redesign

## Scope and method

The user rejected the first composition as rigid and requested a stronger layout, authentic research figures, undergraduate education at HIT Shenzhen in Computer Science and Technology, and Prof. Meishan Zhang as advisor. This review supersedes the first visual pass.

The installed `frontend-design` and `impeccable` skills guided the design and critique/typeset/layout/polish work. The Impeccable context launcher was attempted once for this pass, but its engine checksum sidecar was unavailable, so the unverified binary was not run. Project context and skill references were read directly. No successful CLI detector scan or overlay is claimed.

The production static build was inspected in Chrome at 1440 × 1000 and 390 × 844. An independent reviewer inspected the rendered hero, publications, projects, and full-page captures, and checked the LMEB figure in the live local preview. Playwright and axe supplied functional and accessibility evidence. Temporary captures and reports stay in ignored `artifacts/`. Local preview: http://127.0.0.1:4321/.

## Critique and direction

The first composition repeated an identity rail, uniform publication rows, and similarly sized text groups. Synthetic diagrams supplied little direct evidence. The replacement keeps the academic editorial direction while giving each content group a distinct role:

- A large personal name, research statement, and adjacent biography establish a more personal opening.
- A compact news strip leads into research evidence.
- AOEB has a larger, featured layout; KaLM and LMEB sit side by side below it on desktop.
- Real source figures are preserved completely, credited, and linked to their full-size local versions.
- A forest-green research section creates a clear pause between publications and engineering contributions.
- Open contribution rows separate project identity from the work performed.
- Education distinguishes current master's studies from confirmed undergraduate studies without inventing undergraduate dates or a degree abbreviation.

The independent reviewer found no release-blocking visual defect. Their optional observation was that mobile research evidence follows a relatively generous introduction and news section; the first publication figure starts around y=1163 at 390px width. A prominent research anchor remains available in the first viewport. Fine labels within dense source figures require enlargement, which the full-size image links support.

## Typeset, layout, and polish

| Finding | Correction | Final evidence |
| --- | --- | --- |
| Repetitive hierarchy and rigid rows | Name-led hero, featured publication, two supporting papers, contrasting research band | Desktop and mobile captures show distinct section rhythms |
| Diagrams were illustrative substitutes | Extract AOEB Figure 1, KaLM Figure 1(a), and LMEB Figure 1 from original public sources | Three decoded WebP assets with original proportions; provenance in `image-sources.md` |
| Mobile advisor link split after “Prof.” | Keep the linked name in an inline block | Final mobile hero keeps the advisor name together |
| Full-page screenshots could capture a lazy image before loading | Scroll each figure into view and await decoding before capture | Final captures contain all three figures; image dimensions asserted |
| Sharing assets retained the first palette | Regenerate social preview and update favicon colors | Local preview image inspected |

Section-only screenshots hide sticky navigation during capture to avoid an overlay across the content. Hero and full-page screenshots retain actual navigation. Capture-only styles are not shipped.

## Verification

- `npm run check`: zero errors, warnings, or hints.
- `npm run build`: static output completes successfully.
- `npm run qa`: desktop and mobile pass; local fonts and all three research figures load; no page errors.
- axe: zero reported WCAG A/AA violations, including the open mobile menu. Automated scanning does not replace screen-reader user testing.
- No horizontal overflow at 320, 390, 480, 768, 1024, and 1440px, or with root text enlarged to 200% at 390px.
- Menu opens and closes, Escape and selection dismiss it, and anchor targets clear the sticky header.
- Full-author disclosure, clipboard success and denial recovery, and the keyboard skip link work.
- Publications, mailto links, and native mobile navigation remain usable with JavaScript disabled.
- All nine publication resource links have a minimum 44px target height.
- The corrected advisor URL and undergraduate major/institution are checked in the rendered DOM.
- Local mobile Lighthouse lab scores: performance 100, accessibility 100, best practices 100, SEO 100. FCP approximately 0.8s, LCP 1.7s, CLS 0, total blocking time 0ms. Deployed network conditions may differ.
- Three displayed WebP figures total approximately 264 KiB. Fonts are self-hosted; no client framework or external script is required.

## Deployment

The existing GitHub Pages workflow builds and publishes `dist/` on pushes to `main` in https://github.com/cosylsine/cosylsine.github.io. Public URL: https://cosylsine.github.io/.

The original personal design document remains excluded from Git and the deployment. Downloaded source PDFs and unused image alternatives also remain local. Only the optimized display figures and the required LMEB license are included in the public assets.
