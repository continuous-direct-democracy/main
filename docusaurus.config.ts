import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Continuous Direct Democracy",
  tagline:
    "A continuous voting system with cryptographic verification and competency-based weights",
  favicon: "img/favicon.ico",

  future: {
    faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      lightningCssMinimizer: true,
      rspackBundler: true,
      mdxCrossCompilerCache: true,
    },
  },

  url: "https://your-github-username.github.io",
  baseUrl: "/direct-democracy/",

  organizationName: "your-github-username",
  projectName: "direct-democracy",

  trailingSlash: true,
  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru"],
    localeConfigs: {
      en: {
        label: "English",
        htmlLang: "en-US",
      },
      ru: {
        label: "Русский",
        htmlLang: "ru",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "docs",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Continuous Direct Democracy",
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/your-github-username/direct-democracy",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Introduction",
              to: "/docs/intro",
            },
            {
              label: "Motivation",
              to: "/docs/motivation",
            },
          ],
        },
        {
          title: "Sections",
          items: [
            {
              label: "Direct Voting",
              to: "/docs/direct-voting/overview",
            },
            {
              label: "Voting Process",
              to: "/docs/voting-process/continuous-voting",
            },
            {
              label: "Competency Weights",
              to: "/docs/competency-weights/overview",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/your-github-username/direct-democracy",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Continuous Direct Democracy. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
