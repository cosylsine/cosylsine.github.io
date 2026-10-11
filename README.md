# Jiaxin Xu — academic homepage

A lightweight English academic portfolio for information retrieval and LLM agents. Astro generates ordinary static HTML; no backend or client framework is required. Fonts are served locally.

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
- `src/data/publications.ts`: paper metadata, complete ordered author lists, summaries, resource links.
- `src/data/projects.ts`: engineering contributions and team resources.
- `src/styles/global.css`: shared design tokens and responsive styles.
- `src/components/ResearchFigure.astro`: original conceptual diagrams, not reproduced paper figures.

No portrait, CV, Scholar link, undergraduate details, or unconfirmed honors are published. Add these only with authentic assets and confirmed information. Publication summaries and source links are traceable to the supplied design document and public PMLR/arXiv records.

## GitHub Pages

Live site: https://cosylsine.github.io/. Repository: https://github.com/cosylsine/cosylsine.github.io.

The repository is configured to publish with **GitHub Actions**. The included `.github/workflows/deploy.yml` checks and builds the site on pushes to `main`, then deploys `dist/` to GitHub Pages. Subsequent content edits deploy automatically after `git push origin main`.

The public artifact is only `dist/`; development documents, QA screenshots, and dependencies are not included in the deployment. The original personal design brief is kept local and excluded from Git because it contains non-public context. The site configuration assumes a user site at the domain root. For a project repository, set Astro's `base` and adjust absolute public asset URLs before deploying.

## Browser verification

With a preview server running, run `npm run qa`. It uses installed Google Chrome, checks desktop (1440px) and mobile (390px), captures screenshots to ignored `artifacts/`, exercises navigation and author disclosures, and runs axe accessibility checks. Set `QA_URL` to use another preview URL and `CHROME_PATH` to use another Chrome executable.

See `docs/visual-review.md` for the design critique and final verification evidence.
