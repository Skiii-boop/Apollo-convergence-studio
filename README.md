# Apollo Convergence Studio (interview prototype)

A **wealth advisor decision studio** prototype: diagnose a client portfolio gap, visualize a public/private fixed-income construction, drill into product mechanics (**Product X-Ray**), rehearse objections (**Objection Simulator**), and export a **one-page RM brief**.

This project is an **interview / portfolio artifact** only. It is **not affiliated with Apollo Global Management**, not investment advice, and not a commercial product. It aligns with a private product framework note (`2026-05-02-apollo-convergence-studio-framework`).

## Stack

- [Vite](https://vitejs.dev/) + [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) for layout and the ivory / ink / copper visual direction

## What to upload to GitHub (format / layout)

GitHub Pages for this project uses **GitHub Actions** to run `npm ci` and `npm run build`. You must push a **normal source-code repository**, not a hand-made “website folder” of only HTML.

**Repository root** = the `apollo-convergence-studio` folder (on GitHub’s **Code** tab you should see **`package.json` at the top level**, not nested under another folder like `AI Projects/...`).

**Include (tracked by git):**

| Path | Why |
|------|-----|
| `package.json` + `package-lock.json` | CI installs dependencies |
| `index.html` | Vite entry |
| `vite.config.ts` | Build + correct `base` for Pages |
| `tailwind.config.js`, `postcss.config.js` | Styles |
| `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` | TypeScript |
| `eslint.config.js` | `npm run lint` in CI |
| **`src/`** (entire tree) | Application code |
| **`public/`** (e.g. `favicon.svg`, `icons.svg`, `.nojekyll`) | Static assets copied to `dist` |
| **`.github/workflows/pages.yml`** (+ `ci.yml` if you use it) | **Dot-folder** — easy to miss when zipping manually |

**Do not upload** (ignored on purpose; GitHub will install/build them):

- `node_modules/`
- `dist/`

**Wrong approaches that often cause 404:**

- Only uploading `dist/` or a few HTML files — Actions has nothing to build, or wrong layout.
- Pushing the parent folder so GitHub shows `apollo-convergence-studio/package.json` — workflows in `.github/` at repo root won’t see your app unless you adapt paths.
- Missing **`.github/workflows/`** so Pages never deploys.

**Recommended:** from your machine, in **this** folder:

```bash
cd "/path/to/apollo-convergence-studio"
git status   # should list src/, package.json, .github/..., and NOT node_modules
git push origin main
```

## If the site shows 404

1. **Use the Pages URL**, not the repo file browser. Live app looks like:  
   `https://<username>.github.io/<repository>/`  
   Opening `https://github.com/<username>/<repository>` is **not** the running demo.
2. **Include the repo name in the path** (project Pages), e.g. `...github.io/my-repo/` — not only `...github.io/`.
3. **Settings → Pages → Source** = **GitHub Actions**, and **Actions** tab shows a green **Deploy to GitHub Pages** run.
4. On GitHub, confirm the file exists:  
   `.github/workflows/pages.yml`  
   If it’s missing, your push omitted the hidden `.github` directory — add it and push again.

## Run locally

```bash
cd apollo-convergence-studio
npm install
npm run dev
```

Then open the URL Vite prints (typically `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview   # serve production build (default base: /)
```

### Build like GitHub Pages (subpath)

Project Pages live at `https://<user>.github.io/<repo>/`. Vite needs that base when building:

```bash
VITE_BASE_PATH=/<your-repo-name>/ npm run build
npm run preview
# Open http://localhost:4173/<your-repo-name>/
```

Replace `<your-repo-name>` with your GitHub repository name (the deploy workflow sets this automatically).

## GitHub Pages

1. Push this repository (with this folder as the **repo root**) to GitHub on `main` or `master`.
2. In the repo: **Settings → Pages → Build and deployment → Source**: choose **GitHub Actions**.
3. The workflow [.github/workflows/pages.yml](./.github/workflows/pages.yml) builds with the correct `VITE_BASE_PATH` and deploys `dist` to Pages.
4. After the first successful run, your site URL appears under **Pages** and in the workflow summary — typically `https://<username>.github.io/<repository>/`.

If your repository is a **user or organization site** named `<username>.github.io`, the workflow uses base `/` automatically.

**One-time:** ensure **Settings → Actions → General → Workflow permissions** allows the `pages` deployment (read/write for **Pages** is set in the workflow file).

## What to click in the demo

1. **Convergence Board** — Move the **illiquidity budget** slider; the **Proposed** stack rebalance animates. Read **Why now** cards and **Next best action**.
2. **Product X-Ray** — Switch sleeves (ABF, private IG, direct lending, secondaries, liquid structured). Review “what breaks first” and vs. public credit.
3. **Objection Simulator** — Pick an objection and toggle **Client / RM / CIO** language.
4. **RM Brief** — **Copy to clipboard** for a one-page internal prep note (reflects the current slider value).

## CI

- [.github/workflows/ci.yml](./.github/workflows/ci.yml) — on push/PR to `main`/`master`, runs `lint` and `build` (default base `/`).
- [.github/workflows/pages.yml](./.github/workflows/pages.yml) — on push to `main`/`master`, lints, builds with Pages base path, and deploys to **GitHub Pages**.

If this project lives inside a **monorepo**, copy or adapt these workflows to the monorepo root and set `defaults.run.working-directory` to this package path; adjust `VITE_BASE_PATH` if your Pages URL is not `/<repo>/`.

## License

MIT — see [LICENSE](./LICENSE).