# Ryo Aonetsuki’s Modern Developer Portfolio

A responsive React and Vite portfolio for Ryo Aonetsuki, built with Tailwind CSS and Lucide icons. The production build is emitted as a self-contained static `dist/index.html`, which makes the site suitable for Cloudflare Pages, GitHub Pages, or any static hosting provider.

## Local development

```bash
npm ci
npm run dev
```

Create a production build and preview it locally with:

```bash
npm run build
npm run preview
```

The project has been validated with `npm run build` and `npx tsc --noEmit`.

## Cloudflare Pages

For a Git-connected Cloudflare Pages project, use these settings:

| Setting | Value |
| --- | --- |
| Framework preset | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | `22` |
|

The included `wrangler.toml` also declares `dist` as the Pages build output directory for Wrangler-based deployments. To deploy from a local checkout with Wrangler, run `npx wrangler pages deploy dist` after authenticating with Cloudflare.

## Personal configuration

Update `src/config.ts` to replace the placeholder store, social, and email values. The site safely renders placeholder links as non-navigating anchors until those values are configured. The profile image and social preview image currently use the remote URL defined in that file and in `index.html`.

## Repository scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create the production bundle in `dist` |
| `npm run preview` | Preview the production bundle locally |
