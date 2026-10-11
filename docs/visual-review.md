# Visual review — 2026-10-11

⚠️ DEGRADED: single-context (Impeccable critique synthesis and browser evidence were run in the main context; an independent finishing reviewer assessed the screenshots separately.)

## Scope and method

Target: `src/pages/index.astro`, served as production static output at http://127.0.0.1:4321/.

The user requested two distinct frontend-design directions followed by an autonomous choice, implementation, and critique/typeset/layout/polish. The editorial reading direction was chosen over a compact research index. Both skills were installed from their upstream repositories and their references read. The Impeccable context launcher initially lacked executable permission; this was repaired. Its deterministic detector was attempted but refused to run because its downloaded binary could not be verified against the checksum sidecar. No successful Impeccable CLI scan or browser overlay is claimed.

The review used Chrome screenshots at 1440 × 1000 and 390 × 844, full-page captures, and targeted publication/project captures. Playwright exercised controls and axe checked WCAG A/AA rules. A separate visual reviewer inspected the captures and then scored the final corrections. No prior critique ignore list existed. The local preview remains available because the user explicitly requested it. Temporary screenshots and reports remain in ignored `artifacts/`; no detector overlay/live server was started.

## Critique

The page supports a coherent academic identity through a prominent research statement, readable paper titles, and direct scholarly resource links. Its scientific diagrams are explicitly labeled as original schematics. The strongest area is publication hierarchy: titles, authentic author order, venue, short summaries, and resources are kept together. Engineering resources clearly identify team collaborations.

The primary reading path is linear and low in cognitive load. One publication action leads the hero, with contact secondary. Each publication has three resource choices and a native disclosure for full authors. Desktop navigation has five familiar section links, avoiding an additional CV entry without an authentic file. Research terminology is appropriate to the intended academic audience.

The review considered a prospective collaborator scanning research evidence, a keyboard user following native navigation, and a mobile visitor seeking a paper or contact address. The missing portrait is represented by a monogram; missing credentials, awards, CV, and Scholar profile are omitted rather than fabricated.

## Typeset, layout, and polish

| Initial finding | Correction | Final verdict |
| --- | --- | --- |
| Mobile institution and location concatenated | Use the canonical institution string, including comma and space | Resolved |
| Desktop project links allowed a 36px target | Set all project title links to a 44px minimum | Resolved |
| Venue labels preceded paper titles | Move venue/year beneath the title and author list | Resolved |
| Monogram tracking compressed at -.06em | Relax tracking to -.04em | Resolved |

The final reviewer's `ship` disposition covers these four corrections. No regression introduced by their fix batch was visible. The overall design retained its restrained typography, fine separators, and research-first reading order.

The original section screenshots were polluted by sticky navigation. Final section crops temporarily hide only the navigation/skip link during capture, preserving content geometry; the full-page and hero screenshots show the actual navigation. No temporary capture styling is shipped.

## Verification

- `npm run check`: zero errors, warnings, or hints.
- `npm run build`: static output completes.
- `npm run qa`: both requested viewports pass; no console errors; two local font files load.
- axe: zero reported WCAG A/AA violations on desktop and mobile, including the open mobile menu. Automated checks do not replace screen-reader user testing.
- No horizontal overflow at 320, 390, 480, 768, 1024, and 1440px.
- Native mobile menu opens, closes on Escape, and closes after navigation; anchor headings clear the sticky header.
- Author disclosure, clipboard success, clipboard denial recovery, and keyboard skip link work.
- With JavaScript disabled, publications, contact links, and the native mobile menu remain usable.
- All nine publication resource links have 44px minimum target height. Project title targets are also 44px.
- Production dependency audit: zero reported vulnerabilities.
- Mobile Lighthouse lab scores: performance 100, accessibility 100, best practices 100, SEO 100. Final report has no failed binary audits. LCP is approximately 1.5 seconds, CLS 0, and total blocking time 0 ms on the local production preview; deployed network performance may differ.
- Lighthouse additionally identified a redundant wordmark accessibility label that omitted the visible Chinese name. Removing the override lets its complete visible text supply the accessible name. The final Lighthouse run confirmed the correction; visual layout is unchanged.
- Public code, model, conference, advisor, and profile resources returned HTTP 200 during link verification.
- Runtime has no client framework or external script requests. HTML is approximately 20 KB and the complete static artifact approximately 196 KB, including two self-hosted fonts and a social preview image.

## Deployment state

Published at https://cosylsine.github.io/ from the public repository https://github.com/cosylsine/cosylsine.github.io.

After the user completed local GitHub authentication, the repository was created and `main` pushed. GitHub initially enabled legacy branch-based Pages automatically; the publishing source was switched to GitHub Actions so the site serves Astro's `dist/` output. The custom build and deployment workflow completed successfully: https://github.com/cosylsine/cosylsine.github.io/actions/runs/38147036293. Pages reports `build_type: workflow`, `status: built`, and HTTPS enforced.

The deployed page and its stylesheet, local fonts, favicon, and social image are checked directly over HTTPS. Future site changes pushed to `main` deploy through the included workflow.

The original design document is intentionally excluded from Git and the static deployment because it contains non-public context.
