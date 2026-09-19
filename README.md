# Abdulrahim Obaid — HR Technology Portfolio

A single-page portfolio site presenting HR technology work: live products, an interactive experience timeline, and open, downloadable data systems.

**Live:** https://ab1ob.github.io/portfolio/

## About the site

Three sections — About, Experience, and Projects — reached from a fixed top navigation bar. The experience timeline is sortable (newest/oldest) and each card expands to a description and top skills. The projects showcase splits into products running in production (barezz.com, barez.sa) and open data systems available for download, each rendered inside a browser-frame mockup with a real screenshot.

## Technical highlights

Plain HTML5, CSS3, and vanilla JavaScript — no framework, no build step.

- Content-driven rendering: the timeline and showcase are generated from data arrays (`EXPERIENCE`, `PROJECTS`, `SKILLS` in `js/main.js`), so content updates never touch the markup.
- Full English/Arabic localization with RTL support through a centralized dictionary (`js/i18n.js`); English data stays the single source of truth with Arabic overrides looked up by stable keys.
- Dark/light theme decided pre-paint by a tiny inline script (saved preference → device `prefers-color-scheme` → dark), persisted in `localStorage`.
- `IntersectionObserver` scroll reveals and a typed hero code window, both disabled under `prefers-reduced-motion`.
- CSS custom properties for a two-theme token system; Tajawal appended as a per-character Arabic font fallback so no font switching happens in JS.

## Run locally

```bash
git clone https://github.com/ab1ob/portfolio.git
cd portfolio
```

Open `index.html` directly, or serve the folder with any static file server.

## Author

Abdulrahim Obaid — [LinkedIn](https://www.linkedin.com/in/abdulrahim-obaid-273055298) · [barezz.com](https://barezz.com)
