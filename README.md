# HYSN website (hysn.de)

German landing page for HYSN digital menuboards, imported from the Claude Design project
(`ui_kits/hysn-website`). React + in-browser Babel, design-system bundle (`_ds_bundle.js`),
token CSS in `tokens/`, page sections in `ui_kits/hysn-website/*.jsx`.

Entry point: `ui_kits/hysn-website/index.html` (root `index.html` redirects to it).

## Deploy (Cloudflare Pages)
- Connect this repo. Framework preset: **None**. Build command: **empty**. Output dir: **/** (root).
- Static site, no build step.

## ⚠️ Imagery pending
The Claude Design export tool truncates files over 256KB, so most flyer images could not be
pulled through it. Drop the project's `assets/` folder (from the claude.ai/design **Download/Export**)
into this repo root to complete the imagery. Present so far: a subset only.
