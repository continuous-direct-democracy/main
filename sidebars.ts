import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    "intro",
    "motivation",
    {
      type: "category",
      label: "Direct Voting",
      items: [
        "direct-voting/overview",
        "direct-voting/source-reference",
        "direct-voting/comparison-liquid-democracy",
      ],
    },
    {
      type: "category",
      label: "Voting Process",
      items: [
        "voting-process/continuous-voting",
        "voting-process/inertia",
        "voting-process/delegation",
        "voting-process/blockchain",
      ],
    },
    {
      type: "category",
      label: "Competency Weights",
      items: [
        "competency-weights/overview",
        "competency-weights/assignment",
        "competency-weights/calculation",
      ],
    },
    {
      type: "category",
      label: "Governance & Transparency",
      items: [
        "governance/law-lifecycle",
        "governance/transparency",
        "governance/conflict-resolution",
      ],
    },
    "conclusion",
  ],
};

export default sidebars;
