---
sidebar_position: 3
title: Comparison with Liquid Democracy
---

# Comparison with Liquid Democracy

## What Is Liquid Democracy

**Liquid Democracy** is a decision-making model that combines elements of direct and representative democracy. A citizen can either vote personally or delegate their vote to another person. The most well-known implementations are [LiquidFeedback](https://liquidfeedback.org/) and [Decidim](https://decidim.org/).

At first glance, the system we propose resembles Liquid Democracy. However, there are **fundamental differences** between them.

## What They Have in Common

Both systems share several basic principles:

- **Vote delegation** — a citizen can transfer their vote to a trusted person
- **Override** — a citizen can vote personally on any issue, even if they have delegated their vote
- **Direct participation** — every citizen has the right to vote on any issue directly

## Key Differences

### 1. Delegation Chains

| Aspect                 | Liquid Democracy | Our System   |
| ---------------------- | ---------------- | ------------ |
| Transitive delegation  | ✅ Yes           | ❌ No        |
| Delegation levels      | Unlimited        | Only 1 level |
| Risk of "super-voters" | High             | Eliminated   |

**Liquid Democracy** supports **transitive delegation**: if Anna delegates to Boris, and Boris delegates to Victor, then Victor votes for all three. This creates chains and potentially — "super-voters" with enormous weight, leading to power concentration.

**Our system** limits delegation to **one level**. Boris cannot pass Anna's vote further. This is a fundamental restriction that prevents uncontrolled accumulation of influence.

### 2. Competency Weights

| Aspect                 | Liquid Democracy          | Our System                             |
| ---------------------- | ------------------------- | -------------------------------------- |
| Vote weight            | Equal (1 person = 1 vote) | Competency-based                       |
| Professional expertise | Not considered            | Considered through weight coefficients |
| Peer-based evaluation  | No                        | Yes (2 points/year)                    |

In Liquid Democracy, all votes are equal — the only difference is the number of delegated votes. Our system introduces a **[weight system based on professional competencies](../competency-weights/overview.md)**: the vote of a geneticist on a GMO law carries more weight than that of a non-specialist. Competencies are determined through a **[peer-based system](../competency-weights/assignment.md)** where professionals evaluate each other.

This mechanism **does not exist at all** in Liquid Democracy.

### 3. Inertia (Cumulative System)

| Aspect                              | Liquid Democracy | Our System    |
| ----------------------------------- | ---------------- | ------------- |
| Protection from impulsive decisions | No built-in      | Cumulative EP |
| Decision speed                      | Instantaneous    | Gradual       |
| Noise filtering                     | No               | Yes           |

**Liquid Democracy** makes decisions based on vote counts at a given moment. There is no built-in mechanism to protect against impulsive or emotional decisions.

**Our system** uses **[cumulative electoral points (EP)](../voting-process/inertia.md)**. To change leadership or pass a law, a sustained advantage is required over an extended period (weeks, months). This works as a **low-pass filter** — it lets through sustained trends and filters out short-term spikes.

### 4. Blockchain and Cryptography

| Aspect         | Liquid Democracy          | Our System        |
| -------------- | ------------------------- | ----------------- |
| Technology     | Not prescribed            | Blockchain + GPG  |
| Verification   | Depends on implementation | Cryptographic     |
| Data openness  | Depends on implementation | Absolute          |
| Key reissuance | Not applicable            | Free, at any time |

Liquid Democracy is a conceptual model that does not prescribe a specific technology. Existing implementations (LiquidFeedback, Decidim) run on regular servers with centralized databases.

In our system, **[blockchain and GPG keys](../voting-process/blockchain.md)** are a mandatory part of the architecture. Each citizen generates cryptographic keys, votes are published in an open distributed network, and verification is mathematical. The "don't trust — verify" principle is built into the foundation.

### 5. Voting Continuity

| Aspect             | Liquid Democracy        | Our System  |
| ------------------ | ----------------------- | ----------- |
| When you can vote  | When an issue is raised | At any time |
| Changing your vote | Usually before deadline | At any time |
| Rating publication | Upon completion         | Daily       |
| Feedback           | Periodic                | Constant    |

In Liquid Democracy, voting usually occurs **on specific issues** when they arise, with a defined deadline.

Our system provides **[continuous voting](../voting-process/continuous-voting.md)** — a citizen can change their vote at any time, and ratings are published daily. This creates **constant feedback** between society and government, eliminating the asymmetry of influence.

### 6. Competency Assignment

| Aspect                  | Liquid Democracy | Our System                     |
| ----------------------- | ---------------- | ------------------------------ |
| Concept of competencies | No               | Yes                            |
| Level determination     | Not applicable   | Peer-based + diplomas          |
| Transparency            | Not applicable   | Full (who gave points to whom) |

Liquid Democracy has no concept of professional competencies. Our system includes a unique mechanism of **[peer-based competency assignment](../competency-weights/assignment.md)**: professionals annually distribute 2 points among colleagues, forming a competency map. Entry into the system is through a diploma; further development is through community evaluation.

## Summary Table

| Characteristic          | Liquid Democracy    | Continuous Direct Democracy |
| ----------------------- | ------------------- | --------------------------- |
| Delegation              | Transitive (chains) | Only 1 level                |
| Vote weight             | Equal               | Competency-based            |
| Inertia                 | No                  | Cumulative EP               |
| Technology              | Not defined         | Blockchain + GPG            |
| Continuity              | Issue-based         | Permanent                   |
| Competencies            | No                  | Peer-based system           |
| Manipulation protection | Minimal             | Built-in (inertia + crypto) |
| "Super-voters"          | Possible            | Eliminated                  |

## Conclusion

**Liquid Democracy** is a model of **vote delegation**, elegant in its simplicity.

**Continuous Direct Democracy** is a **comprehensive political system** that includes delegation as one component but significantly expands upon it with:

- **Inertia** — protection from manipulation and impulsive decisions
- **Competency weights** — accounting for professional expertise
- **Cryptographic transparency** — mathematical verification of every vote
- **Continuity** — constant feedback between society and government
- **Chain limitation** — preventing concentration of influence

---

**Back:** [Source Reference ←](./source-reference.md) | **Next:** [Continuous Voting →](../voting-process/continuous-voting.md)
