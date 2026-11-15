# Albert Shamaev — Portfolio

A single-page static portfolio: AI films, the Keyzar case study, October 7, photography series and an about section.

## Put it on GitHub Pages

1. Create a new public repository on GitHub, e.g. `albert-portfolio` (or `<username>.github.io` for a root URL).
2. Upload everything in this folder (keep the `assets/` folder structure) — drag and drop on the repo page works.
3. Go to **Settings → Pages**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, then **Save**.
4. After a minute the site is live at `https://<username>.github.io/albert-portfolio/`.

## Files

- `index.html` — page structure and copy
- `style.css` — design (grays + one accent: `--accent` at the top of the file)
- `script.js` — gallery data (films, Keyzar, October 7, photo series) and interactions
- `assets/video/` — the four AI commercials + a silent hero loop
- `assets/img/` — portrait and film posters

## Editing

- Change the accent colour: edit `--accent` in `style.css`.
- Add or remove photos: edit the arrays at the top of `script.js`.
- Photography images load from Albert's existing image CDN (static.wixstatic.com). If the Wix site is ever taken down, download the images into `assets/img/` and point the arrays at those files.
