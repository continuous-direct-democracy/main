# Continuous Direct Democracy

A documentation site for the **Continuous Direct Democracy** concept — a political system where citizens participate in decision-making continuously through cryptographically verified voting with competency-based weights.

🌐 **Live site:** [https://continuous-direct-democracy.github.io/main/](https://continuous-direct-democracy.github.io/main/)

## Tech Stack

- [Docusaurus 3](https://docusaurus.io/) — static site generator
- [TypeScript](https://www.typescriptlang.org/) — type-safe configuration and components
- [React 19](https://react.dev/) — UI components
- [GitHub Pages](https://pages.github.com/) — hosting
- [GitHub Actions](https://github.com/features/actions) — CI/CD

## Prerequisites

- **Node.js** ≥ 18.0 (recommended: 22.x)
- **npm** (comes with Node.js)

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally (development server)

```bash
npm start
```

This starts a local development server at `http://localhost:3000/main/` and opens it in your browser. Most changes are reflected live without restarting the server.

### Build for production

```bash
npm run build
```

This generates static content into the `build/` directory. Both English (default) and Russian locales are built automatically.

### Preview the production build

```bash
npm run serve
```

Serves the production build locally for testing before deployment.

## Internationalization (i18n)

The site supports two languages:

| Language | Path        | Status  |
| -------- | ----------- | ------- |
| English  | `/main/`    | Default |
| Russian  | `/main/ru/` | Full    |

- **Default locale (English):** content lives in `docs/`
- **Russian translation:** content lives in `i18n/ru/docusaurus-plugin-content-docs/current/`
- **Theme translations:** `i18n/ru/docusaurus-theme-classic/` (navbar, footer)
- **Custom strings:** `i18n/ru/code.json` (homepage)

### Working with translations

To generate translation files skeleton:

```bash
npm run write-translations -- --locale ru
```

## Deployment

### Automatic (GitHub Actions)

Every push to the `main` branch automatically triggers a build and deploy to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.

### GitHub Pages Setup

In the repository **Settings → Pages**:

1. Set **Source** to **"GitHub Actions"**
2. The site will be available at `https://continuous-direct-democracy.github.io/main/`

## Project Structure

```
├── docs/                    # English documentation (default locale)
│   ├── intro.md
│   ├── motivation.md
│   ├── conclusion.md
│   ├── direct-voting/       # Direct voting section
│   ├── voting-process/      # Voting process section
│   ├── competency-weights/  # Competency weights section
│   └── governance/          # Governance section
├── i18n/ru/                 # Russian translations
│   ├── code.json            # Homepage strings
│   ├── docusaurus-plugin-content-docs/
│   │   ├── current/         # Translated docs
│   │   └── current.json     # Sidebar labels
│   └── docusaurus-theme-classic/
│       ├── navbar.json      # Navbar labels
│       └── footer.json      # Footer labels
├── src/
│   ├── css/custom.css       # Custom styles
│   └── pages/index.tsx      # Homepage component
├── static/                  # Static assets (favicon, images)
├── docusaurus.config.ts     # Docusaurus configuration
├── sidebars.ts              # Sidebar structure
└── package.json             # Dependencies and scripts
```

## Available Scripts

| Command                      | Description                         |
| ---------------------------- | ----------------------------------- |
| `npm start`                  | Start development server            |
| `npm run build`              | Build for production (all locales)  |
| `npm run serve`              | Preview production build            |
| `npm run clear`              | Clear Docusaurus cache              |
| `npm run typecheck`          | Run TypeScript type checking        |
| `npm run write-translations` | Generate translation file skeletons |

## License

This project is open for discussion and collaboration. See the [Conclusion](https://continuous-direct-democracy.github.io/main/docs/conclusion/) page for more details on contributing.
