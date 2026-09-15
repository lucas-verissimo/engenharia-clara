# Engenharia Clara

A responsive institutional landing page for a **fictional** engineering consultancy. It demonstrates scope discovery, visual direction, frontend implementation, accessibility, testing, and documentation without claiming nonexistent clients, credentials, or results.

> Engenharia Clara is not a real company. Services, scenarios, and copy are demonstrative. The form neither transmits nor stores data.

## Highlights

- single-page presentation with services, process, fictional scenarios, FAQ, and contact;
- original technical-drawing-inspired visual identity built with CSS and SVG;
- a browser-only request simulator with validation and a copyable summary;
- responsive, keyboard-operable navigation;
- social metadata, sitemap, and conditional indexing rules;
- unit, component, accessibility, and end-to-end tests;
- static export ready for Cloudflare Pages, with no server or database.

## Local development

Requires Node.js 24 or later and npm.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```

Browser tests start the development server automatically. On a new machine, first install Playwright Chromium with `npx playwright install chromium`.

## Deployment

Build with `npm run build` and publish the generated `out` directory to Cloudflare Pages. The exported `public/_headers` file defines security headers, while `trailingSlash: true` produces refresh-safe static routes. Configure the public variables documented in `.env.example`, validate a preview, and enable indexing only for the reviewed production URL.

Architecture details are in [docs/architecture.md](docs/architecture.md), the honest project narrative is in [docs/case-study.md](docs/case-study.md), and local measurements are in [docs/evidence/quality-report.md](docs/evidence/quality-report.md).

## License

The code is available under the MIT License. The fictional brand and demonstrative copy may be replaced in derivative works.
