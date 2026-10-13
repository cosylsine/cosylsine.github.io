# Academic homepage review

On 2026-10-13, the owner requested removal of the research illustrations after finding their proportions unbalanced, particularly the wide KaLM architecture. Publications now share a full-width text layout on desktop and mobile, with aligned titles, authors, venues, descriptions, and the nine existing resource links. The profile image remains. Research assets and their license record are archived locally outside the deployed output.

This revision passes Astro check/build and browser QA: desktop and mobile screenshots were inspected, axe reports zero violations, and there is no horizontal overflow at the checked widths from 320 to 1440px. The nine publication resource links remain visible with JavaScript disabled. Current full-page heights are 1463px on desktop and 1871px on mobile.

The review below records the enrichment revision. The Open source section was subsequently removed at the owner's request on 2026-10-12; its dedicated CSS was also removed. The profile, Publications, Education, and existing paper resource links remain. The earlier full-page heights below include the now-removed section.

## Direction and evidence

The user requested a fuller personal homepage after the earlier simplification, while retaining its quiet academic character. [Xin Zhang's homepage](https://izhx.github.io/) informed the fuller publication records and concise description of actual open-source work. Earlier references remain [Jon Barron](https://jonbarron.info/) for research thumbnails and [Andrej Karpathy](https://karpathy.ai/) for direct personal writing. No reference author's biography, achievements, images, or code were copied.

The owner supplied the profile image and confirmed that there are no additional materials for internships, awards, teaching, or personal interests. The image is used as their chosen avatar, without identifying the person depicted as Jiaxin Xu. Its full aspect ratio is retained, and the optimized asset is approximately 30 KB.

The installed frontend-design and Impeccable guidance informed critique, typesetting, layout, and polish. The Impeccable context launcher previously failed because its download checksum could not be verified; local context and skill references were read directly. No successful CLI detector run is claimed.

## Content and layout

- A small profile image accompanies the name and two-paragraph introduction. On desktop it sits beside the biography; on mobile it sits beside the name, followed by full-width text.
- Three equally weighted publication entries show full ordered author lists, Jiaxin Xu emphasized, venue/year, a one-sentence explanation, and the existing paper/code/model/project resources.
- Actual paper figures remain uncropped desktop thumbnails. Mobile readers can open the same figures through ordinary text links.
- Education retains both HIT Shenzhen degrees: master's studies in Computer Technology, Sep 2025–Present; undergraduate studies in Computer Science and Technology, Started 2021. No graduation date is inferred.
- Open source adds one short paragraph about personal AOEB contributions, with a link to the author's commit history. Model adapters and task integration are evidenced by [47b275b](https://github.com/vec-ai/aoeb/commit/47b275b6603715ede80193eaef8601507bd34952); evaluation tooling is evidenced by [4190ca0](https://github.com/vec-ai/aoeb/commit/4190ca09b1be69198747d534173661fed6937457). No contribution to an upstream project is claimed merely from a submitted pull request.

The 800px white reading page, single local font, dark type, blue links, and plain headings remain. The page contains no navigation menu, promotional CTA, cards, gradients, decorative motion, duplicated news feed, or runtime JavaScript.

## Rendered critique and polish

Chrome screenshots were inspected at 1440 × 1000 and 390 × 844, including full-page and publication captures. Screenshots and the machine-readable report remain in ignored `artifacts/`.

The added avatar gives the introduction a recognizable personal element. It uses a 160px desktop width and 96px mobile width, so the name and biography remain primary. Paper titles carry the strongest color and weight within each record; authors use quieter 15px text, followed by the venue and 16px explanation. Figure proportions, typography, and inter-paper spacing stay consistent.

The first paper starts at y=423 on desktop and y=517 on mobile, within both requested first viewports. Full content height is 1538px on desktop and 1901px on mobile. The additional length comes from useful scholarly detail and verified contribution information. Photos and text have no overlap, stretched images, or clipped content in the inspected captures.

An independent reviewer inspected all four desktop/mobile full-page and first-viewport captures. They found no visual blockers and confirmed that the profile, publications, Education, and short Open source section maintain a clear academic reading order.

## Verification

- Astro check: zero errors, warnings, or hints; static build passes.
- Browser checks pass at 1440px and 390px; the profile image and desktop research figures decode successfully, and mobile figure links return WebP images.
- No horizontal overflow at 320, 390, 480, 600, 768, 1024, or 1440px, including 200% root text size at 390px.
- axe reports zero WCAG A/AA violations in both requested viewports. Contact and resource links retain 44px target heights, and keyboard focus starts with the skip link.
- Both emails, the corrected advisor, the education institution/major, and all three publications remain available. The page works with JavaScript disabled and emits no runtime scripts.
- Earlier Lighthouse scores of 100 predate the Education and avatar/content additions; they are not reported as a measurement of this revision.

## Publishing and maintenance

GitHub Actions publishes the static build from `main` to https://cosylsine.github.io/. Profile and publication data are in `src/data/`; layout and styles use small Astro/CSS files. Image provenance is recorded in `docs/image-sources.md`. The private original brief, screenshots, and downloaded paper sources stay outside the public repository and deployed output.
