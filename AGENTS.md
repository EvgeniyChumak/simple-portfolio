# Simple Portfolio — agent notes

Personal portfolio of Yevhen Chumak (Webflow developer / creative technologist).
A lightweight 2D Astro experiment: the visitor zooms into a circular layout of sections and travels around it with scroll.

## Stack
- Astro 7 (static, no integrations; `astro.config.mjs` is empty)
- GSAP 3 for all motion (camera transforms, preloader timeline, ticker loop)
- Plain CSS in `src/styles/global.css`, component-scoped styles in `.astro` files
- npm (`package-lock.json`)

## Layout
- `src/pages/index.astro` — the only page; head/meta + `<RingExperience />`
- `src/components/RingExperience.astro` — everything else: the `sections` data array (intro + selected projects, each with `x`/`y` grid position, color, link), markup, styles and the GSAP script
- Sections sit on a 1280×720 grid that repeats in 3×3 cycles; the "camera" element is moved/scaled with `gsap.set`

## Commands
- `npm run dev` — starts the Astro dev server **in the background** on http://localhost:4321
- `npm run status` / `npm run logs` / `npm run stop` — manage that background server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the build

## Deploy
- GitHub: https://github.com/EvgeniyChumak/simple-portfolio
- Vercel project `simple-portfolio` (linked via `.vercel/`); pushes to the default branch deploy automatically

## Conventions
- Keep it lightweight: no new frameworks or heavy dependencies without asking
- Edit project content in the `sections` array rather than hard-coding markup
- Files are UTF-8; preserve typographic characters (—, ·, ↓, →)
- Check the result in the browser at http://localhost:4321 after visual changes, and run `npm run build` before committing
