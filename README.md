# Jiaxin Xu — academic homepage

A lightweight English academic portfolio for information retrieval and LLM agents. A large name-and-biography opening leads into a featured AOEB publication, two supporting papers with authentic research figures, a forest-green research section, and open engineering rows. Astro generates ordinary static HTML; no backend or client framework is required. Fonts and research images are served locally.

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

- `src/data/profile.ts`: identity, emails, advisor, education, research interests, news.
- `src/data/publications.ts`: paper metadata, complete ordered author lists, summaries, resource links, figure paths, alternative text, and source attribution.
- `src/data/projects.ts`: engineering contributions and team resources.
- `src/styles/global.css`: shared design tokens and responsive styles.
- `src/components/Publication.astro`: featured and supporting publication layouts, figures, and author disclosures.
- `public/images/research/`: optimized WebP figures from the papers and authors' repositories; provenance and processing details are recorded in `docs/image-sources.md`.

The confirmed profile includes Prof. Meishan Zhang as advisor and undergraduate studies in Computer Science and Technology at Harbin Institute of Technology, Shenzhen. Undergraduate dates and a specific degree abbreviation are not supplied. No portrait, CV, Scholar link, or unconfirmed honors are published; add these only with authentic assets and confirmed information. Publication summaries and source links are traceable to the supplied design document and public PMLR/arXiv records.

## GitHub Pages

Live site: https://cosylsine.github.io/. Repository: https://github.com/cosylsine/cosylsine.github.io.

The repository is configured to publish with **GitHub Actions**. The included `.github/workflows/deploy.yml` checks and builds the site on pushes to `main`, then deploys `dist/` to GitHub Pages. Subsequent content edits deploy automatically after `git push origin main`.

The public artifact is only `dist/`; development documents, QA screenshots, and dependencies are not included in the deployment. The original personal design brief is kept local and excluded from Git because it contains non-public context. The site configuration assumes a user site at the domain root. For a project repository, set Astro's `base` and adjust absolute public asset URLs before deploying.

## Browser verification

With a preview server running, run `npm run qa`. It uses installed Google Chrome, checks desktop (1440px) and mobile (390px), captures screenshots to ignored `artifacts/`, exercises navigation and author disclosures, and runs axe accessibility checks. Set `QA_URL` to use another preview URL and `CHROME_PATH` to use another Chrome executable.

See `docs/visual-review.md` for the design critique and final verification evidence.
