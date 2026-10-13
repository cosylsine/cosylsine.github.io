# Jiaxin Xu — academic homepage

A small English/Chinese personal academic homepage: an owner-selected profile image, two biography paragraphs, contact links, three publications, and compact Education and Honors sections. It follows the readable personal-page structure of [Jon Barron](https://jonbarron.info/) and [Andrej Karpathy](https://karpathy.ai/), with fuller scholarly records informed by [Xin Zhang's homepage](https://izhx.github.io/). The page uses a white background, dark text, blue links, and equally weighted, text-only paper entries.

Astro generates static HTML and CSS with a small language-switching script and no backend or client framework. English is the default; the EN / 中文 buttons translate the section headings, biography, education, honors, secondary email label, and skip link. Paper titles, author lists, venues, descriptions, and resource links remain English. The choice is saved in local storage and restored before rendering; switching still works when storage is blocked. With JavaScript disabled, the complete English page remains readable and the switch is hidden. One font and the profile image are served locally. The live site is https://cosylsine.github.io/.

## Local development

Requires Node.js 22.19+. Run `nvm use` if using nvm.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:4321/. For the production version:

```sh
npm run check
npm run build
npm run preview
```

## Maintain content

- `src/pages/index.astro`: biography, contact list, Education, Honors, and page structure.
- `src/data/profile.ts`: identity, emails, advisor, education dates, and honors.
- `src/data/publications.ts`: paper metadata, complete ordered author lists, descriptions, and resource links. The page shows full authors, one-sentence descriptions, and all existing resource links, including LMEB's Project link.
- `src/components/Publication.astro`: the shared text-only publication entry.
- `src/components/LocalizedText.astro`: paired English/Chinese text, selected through the document language. Maintain both translations when changing localized copy in the page or layout.
- `src/components/LanguageSwitcher.astro`: accessible language buttons and preference saving; `src/layouts/BaseLayout.astro` restores the saved preference before rendering.
- `src/styles/global.css`: typography, colors, the 800px page width, and responsive styles.
- `public/images/profile.webp`: the owner-selected avatar, optimized at 480px wide while preserving its original aspect ratio.
- `docs/image-sources.md`: profile-image provenance and historical research-figure sources. Research figures were removed from the homepage on 2026-10-13 at the owner's request; local copies remain in ignored `artifacts/source-assets/retired-research-figures/`.

The confirmed profile includes master's studies in Computer Technology, Sep 2025 – Present, with Prof. Meishan Zhang as advisor, and undergraduate studies in Computer Science and Technology, Sep 2021 – Jul 2025. Both degrees appear under one Harbin Institute of Technology, Shenzhen heading in Education after Publications. Honors follows Education and lists the owner-confirmed 2026 National Scholarship. A specific degree abbreviation is not supplied. The profile image is an owner-selected avatar; do not claim it is an actual portrait. No CV, Scholar link, or unconfirmed honors are published. Publication records and source links are traceable to the supplied design document and public PMLR/arXiv records.

The user requested a simpler personal page after finding the previous editorial design repetitive and product-like, then asked for more substantive detail. Keep current master's studies, the advisor, and research interests in the biography; undergraduate details belong in Education. Keep paper resources in the publication list. Avoid separate news, research, projects, and contact panels that repeat the same information. `DESIGN.md` documents the current visual contract.

## GitHub Pages

Repository: https://github.com/cosylsine/cosylsine.github.io.

The repository is configured to publish with **GitHub Actions**. The included `.github/workflows/deploy.yml` checks and builds the site on pushes to `main`, then deploys `dist/` to GitHub Pages. Subsequent content edits deploy automatically after `git push origin main`.

The public artifact is only `dist/`; development documents, QA screenshots, and dependencies are not included in the deployment. The original personal design brief is kept local and excluded from Git because it contains non-public context. The site configuration assumes a user site at the domain root. For a project repository, set Astro's `base` and adjust absolute public asset URLs before deploying.

## Browser verification

With a preview server running, run `npm run qa`. It uses installed Google Chrome, checks desktop (1440px) and mobile (390px) in both languages, captures screenshots to ignored `artifacts/`, and checks the rendered content, links, responsive layout, and accessibility. It also verifies keyboard switching, preference persistence, unchanged English paper records, blocked storage, invalid preferences, and the no-JavaScript fallback. Set `QA_URL` to use another preview URL and `CHROME_PATH` to use another Chrome executable.

See `docs/visual-review.md` for the design critique and verification evidence. Reference screenshots are kept locally in `artifacts/references/`.
