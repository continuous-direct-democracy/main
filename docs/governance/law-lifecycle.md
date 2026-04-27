---
sidebar_position: 1
title: Law Lifecycle
---

# Law Lifecycle

## Principle

In the proposed system, **no government body can block a law** proposed by citizens. The process from idea to adoption is fully open, and filtering occurs through **public interest** (support threshold) rather than through officials' decisions. The entire process is recorded in the blockchain.

## Lifecycle Stages

### 1. Initiation (Free Publication)

Any citizen can publish a **law idea** in free form.

**What is required:**

- Proposal title
- Brief description of the essence
- Proposal text (can be in free form — from an abstract idea to a detailed formulation)
- Author's cryptographic signature (GPG)

**What is NOT required:**

- Approval from any body
- A legally refined formulation
- Compliance with any templates

**Automatic checks** upon publication:

- ✅ Presence of required fields (title, description, text, signature) — **blocking**
- ✅ Duplicate check (uniqueness index) — **advisory** (see below)
- ✅ Formatting and legal correctness hints — **advisory**
- ✅ Conflict check — **advisory**
- ❌ Content review — **not performed**

:::note Proposal Status
Until the support threshold is reached, the publication is a **proposal**, not a law. Proposals can be freely ignored — they do not distract from the main voting process.
:::

The submission is recorded as a blockchain transaction with a timestamp.

### 2. Collaborative Work and Amendments

After publication, the proposal enters the **open development phase**.

**Mechanics:**

- Any citizen can propose amendments to the text (similar to pull requests in Git)
- The author and community discuss and accept amendments
- **Full version history** — the current text and all previous versions are always available
- Each amendment is recorded in the blockchain with the author's name and timestamp

**Automatic hints (advisory):**

- Legal formatting — the system suggests better formulations
- Style — uniformity of language
- Potential contradictions with existing laws

**Important:** automatic hints **cannot block** the development of a proposal. They are exclusively advisory in nature.

### 3. Gathering Support

To proceed to voting, the proposal must gather **support from a certain number of citizens**.

**Parameters:**

- Support threshold: e.g., **5–10%** of the total number of voters
- Each voter can simultaneously support a limited number of proposals (e.g., **3**)
- Support is gathered **continuously** — a citizen can support a proposal at any time
- If support significantly exceeds the threshold, the waiting period may be shortened

**Key rule:** the support threshold is a filter of **relevance**, not censorship. The system asks: "Are enough people interested in this topic?" The electoral body **has no right to block** a proposal that has reached the support threshold.

All information about the current level of support is published daily.

### 4. Continuous Voting

After gathering support, the proposal becomes a **question for decisive voting**.

**Mechanics:**

1. Each citizen can vote "for" or "against" at any time
2. Voting occurs continuously
3. Votes are weighted according to [competency weights](../competency-weights/overview.md)
4. When a sufficient share of the electorate has voted (e.g., **60%** accounting for weights), cumulative counting begins
5. The difference between weighted "for" and "against" votes is calculated daily
6. The difference accumulates until reaching the threshold (e.g., **1,850 EP**)

### 5. Adoption or Rejection

- **Adoption:** accumulated EP "for" reaches the threshold → law is adopted
- **Rejection:** accumulated EP "for" drops to 0 → law is rejected

**There is no time limit.** Voting continues continuously until one of two outcomes is reached. If society has not decided — this is a normal state; the law remains under vote, and citizens continue changing their votes. The inertia mechanism ensures that a decision will only be made when society has formed a sustained position.

:::tip Conflicts with Existing Laws
If an adopted law conflicts with existing laws, the conflict must be resolved before it takes effect. Details in the [Conflict Resolution](./conflict-resolution.md) section.
:::

### 6. Amendments After Adoption

After a law is adopted, citizens can initiate **amendments** to it through the same procedure:

1. An amendment is submitted as a separate proposal referencing the existing law
2. It goes through the same stages: publication → collaborative work → gathering support → voting
3. Upon adoption of the amendment, the law is updated
4. The complete history of changes is preserved in the blockchain

## Uniqueness Index and Handling Duplicates

When a new proposal is published, an automated system calculates a **uniqueness index** — the degree of similarity with existing and previously rejected proposals.

### Scenarios

| Uniqueness Index | Action                                                          |
| ---------------- | --------------------------------------------------------------- |
| High (over 80%)  | Publication without remarks                                     |
| Medium (40–80%)  | Recommendation: "Similar proposals already exist" with links    |
| Low (under 40%)  | Recommendation to submit as an amendment to an existing law     |
| Full duplicate   | Automatic rejection with suggestion to support the existing one |

### If the Proposal Resembles a Previously Rejected One

If a new proposal contains elements of a previously rejected law but with changes:

- The system **recommends** submitting it as an amendment to an existing law
- The author can **publish it as a new proposal**, providing links to duplicates and describing the differences
- The uniqueness index is published alongside the proposal so citizens can consider the context when deciding on support

## Blockchain Recording

At each stage of the lifecycle, the blockchain records:

| Stage                    | Recorded Data                                         |
| ------------------------ | ----------------------------------------------------- |
| Initiation               | Proposal text, author, timestamp, signature           |
| Amendments               | Each amendment with authorship and timestamp          |
| Support                  | Each support vote with signature                      |
| Voting                   | Each "for" / "against" vote with signature and weight |
| Result                   | Final status (adopted / rejected)                     |
| Post-adoption amendments | All subsequent changes                                |

## Process Visualization

```
Idea → Publication → Collaborative Work → Gathering Support → Voting → Adoption
  │         │              │                   │               │            │
  ▼         ▼              ▼                   ▼               ▼            ▼
[blockchain] [blockchain]  [blockchain]     [blockchain]   [blockchain] [blockchain]
```

Each step is transparent and verifiable. No stage can be skipped or falsified. **No government body can block a proposal** at any stage — filtering occurs exclusively through the will of the citizens.

---

**Back:** [Weight Calculation ←](../competency-weights/calculation.md) | **Next:** [Openness & Verification →](./transparency.md)
