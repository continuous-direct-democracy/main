---
sidebar_position: 1
title: Competency Weights System
---

# Competency Weights System

## The Problem of Equal Vote Weight

In traditional democracy, all votes carry equal weight: the vote of a genetics professor and the vote of a homemaker on a GMO law are considered equivalent. This leads to situations where **decisions on specialized issues are determined by the opinion of a majority that lacks the necessary knowledge**.

This does not mean that the opinion of non-specialists is unimportant — it is taken into account. But professionals with deep knowledge of the subject being voted on should have **greater weight** in decisions within their field.

## The Principle of Weight Coefficients

Each law or issue put to a vote can be **tagged with a set of competencies** needed for a professional assessment of its merit.

### Competency Distribution

All competencies declared for a law make up **100%**. Each competency is assigned a percentage reflecting its significance for the given issue.

**Example: Law on banning GMOs**

| Competency             | Share    |
| ---------------------- | -------- |
| Genetics               | 70%      |
| Ecology                | 15%      |
| Agricultural economics | 10%      |
| Public health          | 5%       |
| **Total**              | **100%** |

### Weight Modifier

Citizens who possess a **professional level of the required competencies** receive a vote weight modifier according to the competency distribution.

The modifier is calculated as:

```
Modifier = Competency_share × Amplification_factor
```

Where `Amplification_factor` is determined by the ratio between the number of professionals and the total number of voters (details in the [Weight Calculation](./calculation.md) section).

## Why This Is Needed

### Improving Decision Quality

When professionals carry greater weight in voting on issues within their competency, decisions become more informed and balanced.

### Preserving Democracy

At the same time, **all citizens' votes are counted**. Non-professionals are not deprived of their right to vote — their votes simply have the base weight (1.0). This is not elitism, but a **mechanism for increasing the competence** of decisions.

### Protection from Populism

Populist decisions that contradict scientific consensus have less chance of being adopted, because professionals can compensate with their increased weight for the votes of those who have been manipulated.

### Motivation for Education

The system creates a natural motivation for citizens to obtain education and develop competencies, as this increases their influence when voting.

## Expert Recommendations

In addition to weighted voting, experts can publish **public recommendations** on issues within their competency. This provides an information layer that helps all citizens make informed decisions without replacing their vote.

### How Recommendations Work

1. **Publishing a recommendation:** an expert can publish their position (For / Against / Abstain) with a brief rationale, cryptographically signed
2. **Aggregation:** recommendations are aggregated by competency group — e.g., «Geneticists: 87% of 500 recommend AGAINST. Average reputation of respondents: 0.82»
3. **Display:** recommendations are shown alongside the voting question, visible to citizens before they cast their vote
4. **Optional:** experts are not required to publish a recommendation. Absence of a signal is itself informative — the expert community may lack consensus or the question may lie outside their field

### Purpose

- Experts **inform**, not rule — each citizen's vote retains its base weight
- Recommendations provide a reference point, especially for complex specialized issues
- Transparency: every expert's position and rationale is publicly auditable

## Defining Competencies

Who determines which competencies are needed for voting on a specific issue?

The competency distribution is determined **automatically** through a crowdsourced mechanism:

1. **Relevance claims:** when an issue is opened for voting, registered professionals can claim that the issue falls within their competency area
2. **Automatic calculation:** the competency distribution is computed proportionally to the number of experts who claimed relevance in each area
   - Example: if 40 geneticists and 60 ecologists claim relevance, the distribution is 40% genetics, 60% ecology
3. **Spam protection:** experts who claim relevance to clearly unrelated issues lose reputation. The community can challenge relevance claims through voting
4. **Fallback:** if no expert claims relevance to an issue, the weight system does not apply — all votes carry equal weight

Read more about how professional status is determined in the [Competency Assignment](./assignment.md) section.

---

**Next:** [Competency Assignment →](./assignment.md)
