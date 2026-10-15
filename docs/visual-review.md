# Academic homepage review

## Refined pixel typography — 2026-10-15

The owner rejected the initial pixel font and asked for Jiaxin Xu to use a better-looking pixel treatment as well. The revision uses Pixelify Sans at 40px/500 for the desktop English name and 36px/500 on mobile, with quieter 26px/400 English section headings. A renamed ZhengGeDianHei 16 subset supplies the Chinese name and 24px section headings with .04em tracking. Both fonts are local, totaling 9,860 bytes. The former blue heading dots and avatar brackets are removed. Reading text, academic content, and navigation retain the original typography.

The font specimen and rendered desktop/mobile pages were inspected. The English name has a clear display role, while the finer Chinese grid leaves more room inside complex characters. Browser font inspection confirms the intended custom font renders the name and headings in both languages. Astro check has zero errors, warnings, or hints; build and the existing bilingual browser QA pass, with zero axe violations in all four language/viewport combinations. A further narrow-screen check found long titles and the email address overflowing at 320px with 200% root text; wrapping rules now address that case. The confirmation passes in both languages at 320px and 390px with 200% text, without name/avatar overlap. Print uses the reading fonts. Evidence is in ignored `artifacts/`, including `pixel-check.json` and `pixel-refined-320-*.png`.

## Pixel accents — superseded first pass, 2026-10-15

The owner requested a few pixel decorations and pixel typography for selected headings. Publications, Education, and Honors now use a locally bundled pixel font in both languages, with three small blue squares beside each title. Two blue corner marks frame the avatar. The name, reading text, scholarly records, navigation, and language controls keep their existing typography. The homepage imports its own accent stylesheet; the shared styles are unchanged.

The font is a renamed Fusion Pixel 12px Proportional subset containing printable ASCII and all twelve Chinese heading characters, totaling 3,192 bytes. Its source, license, and reproduction instructions are retained. Chrome's rendered-font inspection confirms that the English and Chinese heading glyphs use Homepage Pixel, at 24px and regular weight. Print restores the ordinary heading font and hides the decoration.

Astro check reports zero errors, warnings, or hints, and the static build passes. Desktop and mobile captures in both languages were inspected in one batch: the pixel headings remain legible and the small marks preserve the quiet academic layout. The existing browser QA passes navigation, language persistence, keyboard use, blocked storage, invalid preferences, and no-JavaScript behavior. There is no horizontal overflow at checked widths from 320 to 1440px or with 200% root text; all four desktop/mobile language combinations have zero axe WCAG A/AA violations. Captures, the QA report, and the additional rendered-font/print checks are in ignored `artifacts/`.

## English/Chinese language switch — 2026-10-14

The owner requested bilingual section headings and general profile information while retaining English paper details. Compact EN / 中文 buttons now sit beside the name on desktop and below it on mobile. They translate the section headings, biography, education, honors, secondary email label, and skip link. Paper titles, authors, venues, descriptions, and all resource links stay English. The chosen language persists locally and is restored before rendering. When storage is unavailable, switching still works; without JavaScript, the complete English page remains readable and the controls are hidden.

Astro check reports zero errors, warnings, or hints, and the static build passes. Chrome screenshots were reviewed at 1440 × 1000 and 390 × 844 in both languages. The compact header retains the original page spacing: the first paper starts at y=423 on desktop in either language and y=517 / 462 on mobile in English / Chinese. Full-page heights are 1463px on desktop and 1871px / 1791px on mobile. The new control fits the existing plain academic layout, and the Chinese text and education dates wrap without overlap.

Browser QA reports zero axe WCAG A/AA violations in all four desktop/mobile language combinations, no horizontal overflow across checked widths from 320 to 1440px or at 200% root text size, and 44px minimum targets for contact links, paper resources, and language buttons. Keyboard activation, English/Chinese persistence after reload, blocked storage, invalid preferences, and the no-JavaScript fallback pass. Paper markup and all link destinations are unchanged across language switches. Current screenshots and the QA report remain in ignored `artifacts/`.

The Impeccable context launcher again could not verify its engine download; the existing project context and skill references were read directly. No CLI detector run is claimed. The following sections record earlier revisions.

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
