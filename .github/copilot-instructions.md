This repository is a personal website built with SvelteKit + Vite, authored in TypeScript and using mdsvex for markdown articles. The site is deployed to Cloudflare Workers (see `wrangler.toml`) and uses the `$lib` alias for local imports.

Quick orientation

- Framework: SvelteKit (see `svelte.config.js`) + Vite. Dev server: `npm run dev` (Vite on :5173).
- Build: `npm run build`. Preview: `npm run preview`.
- Type checking: `npm run check` (runs `svelte-check`). Formatting/linting: `npm run format` and `npm run lint` (Prettier).
- Deployment: Cloudflare Worker via `@sveltejs/adapter-cloudflare`. `wrangler.toml` points to the built worker at `.svelte-kit/cloudflare/_worker.js`.

Key locations & responsibilities

- src/routes/
  - Page +server.ts/+page.ts/+page.svelte are SvelteKit routes. Follow SvelteKit "file-based routing" conventions.
  - `src/routes/writing/+server.ts` collects markdown articles (see below) and exposes them as JSON at `/writing`.
  - `src/routes/writing/[slug]/+page.ts` imports a single article with `import('$lib/articles/${slug}.md')` and returns `content` + `meta`.
  - `src/routes/feed.xml/+server.ts` builds an RSS feed by fetching `/writing` and compiling markdown with `mdsvex.compile`.

- src/lib/
  - `src/lib/articles/` — markdown article files (\*.md). Each must export frontmatter metadata (title, date, update, description, categories). See `src/lib/types.ts` for the expected shape (Article type).
  - `src/lib/assets/` — small Svelte components used as inline logos/icons (e.g., `xerox.svelte`, `map.svelte`). Treat them as presentational components.
  - `src/lib/styles/` — global CSS tokens, component styles, themes and utilities. The codebase relies on CSS variable theming (look for `--*` variables).
  - `src/lib/config.ts` — site globals (title, description, url). Used by feed generation and components.

Content / markdown pipeline conventions

- Article discovery: `import.meta.glob('$lib/articles/*.md', { eager: true })` in `src/routes/writing/+server.ts`. The code expects each `.md` to export `metadata` and uses the filename (without `.md`) as the slug.
- Article loader: per-article pages import the compiled mdsvex module dynamically in `src/routes/writing/[slug]/+page.ts` and return `default` (Svelte component) and `metadata`.
- RSS: `src/routes/feed.xml/+server.ts` fetches the rendered markdown page and compiles content with `mdsvex.compile` to extract HTML snippets for feed items. Keep feed-related changes minimal and preserve the existing substring/trim logic.

Patterns & guardrails for agent edits

- Do not change public URLs or route filenames; slugs are mapped 1:1 to filenames in `src/lib/articles/`.
- When adding/removing articles, update only `src/lib/articles/*.md`. The listing endpoint (`/writing`) and individual pages will pick them up automatically via `import.meta.glob`.
- Keep `metadata` frontmatter consistent with `src/lib/types.ts` — fields: title, slug (derived), description, date, update, categories.
- Use the `$lib` alias for internal imports (components, utils, styles). Avoid introducing new absolute paths.
- Styling follows a token/theme approach under `src/lib/styles/`. If you add tokens, ensure they are referenced by CSS variables and test both default and high-contrast styles (files under `themes/` and `utilities/`).
- Accessibility: the site includes a11y helpers (e.g., `visually-hidden`, `accessibility.css`); preserve semantic markup and focus-visible styles when editing components.

Developer workflows (commands you can run locally)

- Install: `npm install`.
- Run dev: `npm run dev` (Vite/SvelteKit). Use port 5173 (config derived from default Vite behavior).
- Typecheck: `npm run check` (svelte-check + tsconfig). Useful before producing a PR.
- Format: `npm run format`. Lint/verify formatting: `npm run lint`.
- Build for production: `npm run build`. After building for Cloudflare, the worker entry is `.svelte-kit/cloudflare/_worker.js` and `wrangler.toml` can be used to publish.

Notes for automation / PRs created by agents

- Keep changes scoped and easy to review: prefer non-breaking edits to routes, components, and styles.
- If adding server endpoints, follow the existing pattern: use `+server.ts` for route-level endpoints that return JSON or XML.
- If you add CI or GitHub Actions, ensure it runs `npm ci`, `npm run check`, and `npm run build` (and do not leak secrets). Deployment should remain manual unless a secure CI workflow is added by the owner.

If anything here is unclear or you need a deeper example (e.g., a sample article frontmatter or a minimal component pattern), ask and I will add a short example pulled from the codebase.

Relevant files to inspect when making changes:

- `src/routes/writing/+server.ts` (article listing via glob)
- `src/routes/writing/[slug]/+page.ts` (per-article import)
- `src/routes/feed.xml/+server.ts` (RSS generator)
- `src/lib/types.ts` (Article metadata shape)
- `src/lib/config.ts` (site globals)
- `src/lib/articles/*.md` (content)
- `wrangler.toml` and `package.json` (deploy/build scripts)

End of instructions.
