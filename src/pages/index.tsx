import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";

interface FeatureItem {
  title: string;
  description: string;
  link: string;
}

const features: FeatureItem[] = [
  {
    title: translate({
      id: "homepage.feature.continuous-voting.title",
      message: "🗳️ Continuous Voting",
    }),
    description: translate({
      id: "homepage.feature.continuous-voting.description",
      message:
        "Vote at any time. The cumulative point system provides inertia and protection from impulsive decisions.",
    }),
    link: "/docs/voting-process/continuous-voting",
  },
  {
    title: translate({
      id: "homepage.feature.blockchain.title",
      message: "🔗 Blockchain & Cryptography",
    }),
    description: translate({
      id: "homepage.feature.blockchain.description",
      message:
        "GPG keys, an open voting network, full verification. Every citizen can confirm their vote was counted correctly.",
    }),
    link: "/docs/voting-process/blockchain",
  },
  {
    title: translate({
      id: "homepage.feature.delegation.title",
      message: "🤝 Vote Delegation",
    }),
    description: translate({
      id: "homepage.feature.delegation.description",
      message:
        "Delegate your vote to a trusted person, but retain the right to vote personally at any time without notice.",
    }),
    link: "/docs/voting-process/delegation",
  },
  {
    title: translate({
      id: "homepage.feature.weights.title",
      message: "⚖️ Competency Weights",
    }),
    description: translate({
      id: "homepage.feature.weights.description",
      message:
        "Votes of professionals in relevant fields carry greater weight. Competencies are determined through a peer-based system.",
    }),
    link: "/docs/competency-weights/overview",
  },
];

function HomepageHeader(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="hero-section">
      <div className="container">
        <h1>{siteConfig.title}</h1>
        <p>{siteConfig.tagline}</p>
        <div>
          <Link className="button button--primary button--lg" to="/docs/intro">
            <Translate id="homepage.hero.button">
              Read the Documentation →
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({ title, description, link }: FeatureItem): React.JSX.Element {
  return (
    <div className="feature-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link}>
        <Translate id="homepage.feature.link.readMore">Read more →</Translate>
      </Link>
    </div>
  );
}

function HomepageFeatures(): React.JSX.Element {
  return (
    <section className="container">
      <div className={clsx("features-section")}>
        {features.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
