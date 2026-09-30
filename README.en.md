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

## Deploying to Vercel

1. Import `lucas-verissimo/engenharia-clara` into Vercel.
2. Keep the detected Next.js framework and the default `npm run build` command.
3. Configure these public variables:
   - `NEXT_PUBLIC_SITE_URL`: final production URL without a trailing slash;
   - `NEXT_PUBLIC_ALLOW_INDEXING`: `true` only after validating production;
   - `NEXT_PUBLIC_PORTFOLIO_URL`: `https://lucas-verissimo.github.io/Portifolio/`;
   - `NEXT_PUBLIC_SOURCE_URL`: `https://github.com/lucas-verissimo/engenharia-clara`.
4. Validate content, links, the local-only form, and responsive behavior in a preview deployment.
5. Promote the reviewed version to production. If its URL changes, update `NEXT_PUBLIC_SITE_URL` and redeploy.

The project exports a static site and needs no API, database, or secrets. `public/_headers` is intended for hosting providers that support that file; configure additional Vercel headers separately if needed.

### Cloudflare Pages alternative

Run `npm run build` and publish the generated `out` directory. The exported `public/_headers` file defines security headers, while `trailingSlash: true` produces refresh-safe static routes.

Architecture details are in [docs/architecture.md](docs/architecture.md), the honest project narrative is in [docs/case-study.md](docs/case-study.md), and local measurements are in [docs/evidence/quality-report.md](docs/evidence/quality-report.md).

## License

The code is available under the MIT License. The fictional brand and demonstrative copy may be replaced in derivative works.
