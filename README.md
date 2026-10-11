# Jiaxin Xu — academic homepage

A small English personal academic homepage: two biography paragraphs, contact links, three publications, and a compact Education section. It follows the readable personal-page structure of [Jon Barron](https://jonbarron.info/) and [Andrej Karpathy](https://karpathy.ai/), using a white background, dark text, blue links, and equal-weight paper entries. Real paper figures appear as small desktop thumbnails and remain accessible through Figure links on mobile.

Astro generates static HTML and CSS with no runtime JavaScript, backend, or client framework. One font and all research figures are served locally. The live site is https://cosylsine.github.io/.

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

- `src/pages/index.astro`: two-paragraph biography, contact list, Education section, and page structure.
- `src/data/profile.ts`: identity, emails, advisor, and education facts.
- `src/data/publications.ts`: paper metadata, complete ordered author lists, primary resource links, figure paths, alternative text, and source attribution. The page displays the first three authors and first two resource links per paper.
- `src/components/Publication.astro`: the shared compact publication row and mobile Figure link.
- `src/styles/global.css`: typography, colors, the 800px page width, and responsive styles.
- `public/images/research/`: optimized WebP figures from papers and authors' repositories; provenance and processing details are recorded in `docs/image-sources.md`.

The confirmed profile includes master's studies in Computer Technology, Sep 2025 – Present, with Prof. Meishan Zhang as advisor, and undergraduate studies in Computer Science and Technology, Started 2021. Both degrees appear under one Harbin Institute of Technology, Shenzhen heading in Education after Publications. The undergraduate graduation year and a specific degree abbreviation are not supplied. No portrait, CV, Scholar link, or unconfirmed honors are published; add these only with authentic assets and confirmed information. Publication records and source links are traceable to the supplied design document and public PMLR/arXiv records.

The user requested a simpler personal page after finding the previous editorial design repetitive and product-like. Keep current master's studies, the advisor, and research interests in the biography; undergraduate details belong in Education. Keep paper resources in the publication list. Avoid restoring separate news, research, projects, and contact panels that repeat the same information. `DESIGN.md` documents the current visual contract.

## GitHub Pages

Repository: https://github.com/cosylsine/cosylsine.github.io.

The repository is configured to publish with **GitHub Actions**. The included `.github/workflows/deploy.yml` checks and builds the site on pushes to `main`, then deploys `dist/` to GitHub Pages. Subsequent content edits deploy automatically after `git push origin main`.

The public artifact is only `dist/`; development documents, QA screenshots, and dependencies are not included in the deployment. The original personal design brief is kept local and excluded from Git because it contains non-public context. The site configuration assumes a user site at the domain root. For a project repository, set Astro's `base` and adjust absolute public asset URLs before deploying.

## Browser verification

With a preview server running, run `npm run qa`. It uses installed Google Chrome, checks desktop (1440px) and mobile (390px), captures screenshots to ignored `artifacts/`, and checks the rendered content, links, responsive layout, and accessibility. Set `QA_URL` to use another preview URL and `CHROME_PATH` to use another Chrome executable.

See `docs/visual-review.md` for the design critique and verification evidence. Reference screenshots are kept locally in `artifacts/references/`.
