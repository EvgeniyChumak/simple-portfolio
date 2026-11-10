# Simple Portfolio — agent notes

Personal portfolio of Yevhen Chumak (Webflow developer / creative technologist).
A lightweight 2D Astro experiment: the visitor zooms into a circular layout of sections and travels around it with scroll.

## Stack
- Astro 7 (static, no integrations; `astro.config.mjs` is empty)
- GSAP 3 for all motion (camera transforms, preloader timeline, ticker loop)
- Plain CSS in `src/styles/global.css`, component-scoped styles in `.astro` files
- npm (`package-lock.json`)

## Layout
- `src/pages/index.astro` — the only page; head/meta, Google Fonts (DM Sans, Inter) + `<RingExperience />`
- `src/components/RingExperience.astro` — markup, styles and the GSAP/WebGL script. Screens: hero, the case studies (`src/data/cases.ts`), a closing contact screen. The grid is generated from the count (right, down, right, down...). Keep the screen count EVEN, otherwise the scroll stops alternating horizontal/vertical at the lap seam (the lap offset is count/2 columns and rows)
- `src/data/cases.ts` — the 5 cases with full content (overview, blocks, tags, metrics), generated from the full portfolio's `src/data/projects.ts`; images are optimized copies in `public/cases/<id>/` (`main-N.webp` 1100px, `thumb-N.webp` 320px)
- Layout sizes use container units (`cqw`/`cqh`) taken from the Figma frames (hero 1600px, cases 700x443), so screens scale with the window. Case screens: image slider (arrows + previews) on the left, glass card with scrollable content on the right
- "More info" on a case: the camera pulls back, the detail sections (from the `<template data-detail>` per case: blocks shortened to rows, grouped by length in `chunkRows`) slide out from under the case while every screen that comes after it in route order slides down (`y` transforms; only nearby screens are animated, moving ones get `will-change`), then the camera zooms into them. Any number of cases can be open at once (`runs`, sorted by route value). While one is open the scroll path is an endless sequence of steps (`stopAt`: route screens + inserted detail sections); the laps are still re-laid out as usual and `syncPush` re-applies the shifts to whatever screens are loaded. Close button closes its own case, Esc the nearest one. The sections live in `.camera` (world coordinates), not in the lap elements
- Backgrounds: the hero is a small WebGL cloud shader (`skyShader.ts`, 4 octaves, 448x252, painted only while a hero is on screen: every frame while the mouse/scroll moves, otherwise ~15 fps; the static `public/hero-sky.webp` is its CSS fallback). Cases use plain CSS gradients. One shared GL context copies into the hero canvases. The page background is CSS only (darker blue with soft glows and a dot grid)

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
- Contact screen (last one): copy/links from the old portfolio; interactive background = CSS variables (`--mx/--my/--ox/--oy`) set on the visible contact screen by one ticker (rings drift, glow, dot-grid mask). Keep it free of canvas/WebGL
