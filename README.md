# taylorvicente.github.io

React + Vite portfolio app with hash-based routing for GitHub Pages compatibility.

## Run locally

- `npm install`
- `npm run dev`

## Build

- `npm run build`
- `npm run preview`

## GitHub Pages Notes

- Deploy the `dist/` output directory.
- `public/CNAME` ensures your custom domain is preserved in deployments.
- `HashRouter` is used, so route URLs are `/#/...` and do not require server rewrites.
- `public/404.html` provides a safety fallback redirect for direct route hits.

## GitHub Actions Deploy

- Workflow file: `.github/workflows/deploy-pages.yml`
- Trigger: push to `main` (or manual run from Actions tab).
- One-time repo setting: in GitHub -> Settings -> Pages -> Build and deployment, set **Source** to **GitHub Actions**.
