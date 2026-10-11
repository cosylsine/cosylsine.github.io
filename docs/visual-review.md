# Minimal academic homepage review

## User feedback and direction

The user rejected the previous revision as too busy, too artificial, and closer to a product landing page than a personal homepage. More visual variety was not the right response to the earlier layout complaint. This revision prioritizes a short, recognizable academic profile and removes duplicated information.

Actual personal homepages were opened and inspected:

- [Jon Barron](https://jonbarron.info/): compact personal introduction, ordinary resource links, and small research thumbnails beside publication records. This is the main structural reference.
- [Andrej Karpathy](https://karpathy.ai/): direct first-person biographical writing and ordinary links to work. The personal tone is relevant; his long career timeline and decorative details were not copied.

Browser captures of these references are in ignored `artifacts/references/`. Their text, images, and code were not copied into the site. Other attempted reference pages were unavailable and were not used as design evidence.

The installed `frontend-design` guidance and Impeccable's distill, quieter, and craft-floor references informed the work. The Impeccable context launcher had failed earlier in this session because the download checksum could not be verified; project context was read directly. No successful CLI detector run is claimed.

## What was removed and preserved

The document has an opening profile, Publications, and a compact Education section requested in a later update:

- Name and two short paragraphs cover current master's studies, the confirmed advisor, and research interests.
- A compact Education section follows Publications: one shared HIT Shenzhen institution heading, master's studies from Sep 2025 to present, and undergraduate studies marked Started 2021. The undergraduate graduation year is not inferred. The duplicate undergraduate sentence was removed from the biography.
- Two mailto links and GitHub sit directly beneath the introduction.
- Three equally weighted publication rows contain the authentic title, first three authors with Jiaxin Xu emphasized, venue/year, and Paper plus Code/Models links.
- Desktop source figures are small, complete thumbnails. On mobile, Figure links open the original-sized assets without squeezing unreadable charts next to titles.

Removed the top navigation, mobile menu, hero slogans, promotional buttons, News strip, research color band, repeated project section, oversized Education and Contact panels, oversized serif titles, author-disclosure controls, clipboard widgets, and arrow icons. Research topics now appear once in the biography. Code and model resources remain attached to their papers. Confirmed factual metadata and complete author lists remain in the content data, and original figure attribution remains in `image-sources.md` and linked papers.

The page uses a single self-hosted font, white background, dark text, and ordinary blue links. It has no client JavaScript. The unused font dependency and obsolete components were removed.

## Rendered critique and polish

Chrome screenshots cover desktop 1440 × 1000 and mobile 390 × 844. Both full-page and publication captures are stored in ignored `artifacts/`.

- Desktop content height: 1168px, previously 4210px. All three publication records fit in the first desktop viewport.
- Mobile content height: 1289px, previously 5665px. The first publication title starts at approximately y=438 rather than appearing after a long landing-page introduction.
- Desktop publication titles begin at approximately y=423. The name, biography, contact links, and research evidence have a short reading path.
- An accessibility scan identified an inline advisor link distinguished only by color. A persistent underline was added before final captures.
- An independent reviewer inspected the finished desktop/mobile captures and source. They found the result consistent with the revised personal-homepage brief, with clean wrapping and no concrete visual blockers or omissions.

The later user-requested Education addition uses plain text rows and the existing type scale. Desktop and mobile captures were checked again after this addition; layout and accessibility checks passed.

## Verification

- Astro type/content check and static build pass.
- Lighthouse from the preceding simplification pass (before the Education addition): performance, accessibility, best practices, and SEO each score 100. FCP approximately 0.6s, LCP 0.9s, CLS 0, total blocking time 0ms; deployed network performance may differ.
- Browser checks pass at 1440px and 390px; all desktop source figures decode and mobile figure URLs return WebP images.
- First publication is visible in both requested first viewports.
- No horizontal overflow at 320, 390, 480, 600, 768, 1024, and 1440px, including 200% root text size at 390px.
- axe reports zero WCAG A/AA violations. This automated result is not a substitute for screen-reader user testing.
- Contact and resource links retain 44px target height; keyboard skip link and focus order work.
- Both email addresses, the corrected advisor, undergraduate major/institution, and all three papers are checked in the rendered document.
- With JavaScript disabled, the full reading and navigation experience still works. The emitted document has no runtime script; structured Person metadata remains.

## Publishing and maintenance

GitHub Actions publishes the static `dist/` build from `main` to https://cosylsine.github.io/. Content data remains in `src/data/profile.ts` and `src/data/publications.ts`; page structure and styling are small Astro/CSS files. The private original brief, screenshots, and downloaded source PDFs remain excluded from the public repository and deployed output.
