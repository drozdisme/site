# Ivan Drozdov — personal site

A single-page personal site built with **React + Vite**. Strict, refined academic
look; soft paper-white and sky-blue palette. The hero holds an interactive
phase-transition curve: it sits as a clean line by default and, on click,
expands into a full plot with axes and a short explanatory panel.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs to ./dist
npm run preview  # preview the production build locally
```

## Adding the papers (PDFs)

Drop the five PDFs into **`public/papers/`** using exactly these names — the
links already point to them, no code changes needed:

| Code | File name                                    |
| ---- | -------------------------------------------- |
| TR   | `boundaries-stationary-feature-learning.pdf` |
| AB   | `composable-abstractions.pdf`                |
| BM   | `spectral-scaling-benchmark.pdf`             |
| PT   | `phase-transition-theorem.pdf`               |
| ACD  | `absorption-constraint-duality.pdf`          |

Anything in `public/` is copied to the site root on build, so a file at
`public/papers/phase-transition-theorem.pdf` is served at `papers/phase-transition-theorem.pdf`.

## Deploy

The build is a static site (no server needed). `base: './'` in `vite.config.js`
keeps every path relative, so the same `dist/` works on any host.

- **Netlify** — connect the repo; `netlify.toml` is already set (build `npm run build`, publish `dist`). Or drag-and-drop the `dist/` folder.
- **Vercel** — import the repo; framework preset **Vite**, no extra config.
- **Cloudflare Pages** — build command `npm run build`, output dir `dist`.
- **GitHub Pages** — push `dist/` (e.g. via `gh-pages`). Relative `base` already handles the sub-path.

## Where things live

```
src/
  main.jsx              app entry
  App.jsx               page composition
  styles/
    tokens.css          colour + type design tokens
    global.css          base styles, layout helpers
  data/
    papers.js           the five papers (edit text/links here)
  hooks/
    useInView.js        scroll-reveal helper
  components/
    NavBar / Hero / PhaseCurve / About / Research / Experience / Contact / Footer
    (each component has its own .module.css)
```

## Editing content

- **Hero line / name / contacts** → `src/components/Hero.jsx`
- **About text** → `src/components/About.jsx`
- **Papers** → `src/data/papers.js`
- **Experience** → `src/components/Experience.jsx`
- **Colours & fonts** → `src/styles/tokens.css`
# site
# site
