---
sidebar_position: 3
title: Weight Calculation
---

# Weight Calculation

## Main Formula

The weight of a citizen's vote when voting on a specific issue is determined as:

```
Vote_weight = 1 + Σ (Competency_share_i × Multiplier_i)
```

Where:

- `1` — the base vote weight (every citizen has this)
- `Competency_share_i` — the percentage of the i-th competency in the distribution for the given issue
- `Multiplier_i` — the amplification for having the i-th competency

For citizens **without professional competencies**, the vote weight equals **1** (base).

## Detailed Example

### Conditions

Consider a vote on a **law banning GMOs**.

**Competency distribution:**

| Competency             | Share |
| ---------------------- | ----- |
| Genetics               | 70%   |
| Ecology                | 15%   |
| Agricultural economics | 10%   |
| Public health          | 5%    |

**Voting participants:**

- Total number of voters: **100,000** people
- Of these, professional geneticists: **500** people
- Other competencies are omitted for simplicity

### Calculation

**Step 1: Determining the multiplier for geneticists**

The multiplier for a competency is determined through its share:

```
Multiplier_genetics = Share_genetics × 10 = 0.70 × 10 = 7
```

The coefficient 10 is the base amplification factor, which can be adjusted depending on the voting level.

**Step 2: Calculating vote weights**

| Cohort           | Count       | Vote Weight | Total Weight    |
| ---------------- | ----------- | ----------- | --------------- |
| Regular citizens | 99,500      | 1           | 99,500          |
| Geneticists      | 500         | 1 + 7 = 8   | 500 × 8 = 4,000 |
| **Total**        | **100,000** |             | **103,500**     |

**Step 3: Analysis**

- Weight contribution of 500 geneticists: `4,000 / 103,500 ≈ 3.86%` of the final result
- Weight contribution of 99,500 others: `99,500 / 103,500 ≈ 96.14%` of the final result

Thus, **0.5% of participants** (geneticists) contribute **3.86%** of the final result. Experts carry additional weight, but do not dominate the outcome: their influence is decisive only when the general vote is close.

## Example with Multiple Competencies

Consider a citizen who has competencies in both genetics **and** ecology.

```
Vote_weight = 1 + (0.70 × 10) + (0.15 × 10) = 1 + 7 + 1.5 = 9.5
```

Their vote weighs 9.5 — more than a specialist in only one field.

## Threshold Values

### Minimum Competency Threshold

Not every diploma holder automatically receives the full multiplier. The multiplier can scale depending on the **competency level** (determined by the peer-based system):

| Competency Level                         | Percentage of Full Multiplier |
| ---------------------------------------- | ----------------------------- |
| Entry (diploma only)                     | 25%                           |
| Intermediate (diploma + peer evaluation) | 50%                           |
| High (significant peer evaluation)       | 75%                           |
| Expert (maximum peer evaluation)         | 100%                          |

**Example for a geneticist:**

- Entry level: `1 + 7 × 0.25 = 2.75`
- Expert level: `1 + 7 × 1.0 = 8`

### Maximum Weight

To prevent excessive influence by a single person, a **ceiling** on maximum vote weight may be established:

```
Vote_weight = min(Calculated_weight, Max_weight)
```

Recommended ceiling: **10** (a vote cannot weigh more than 10 times the base weight).

## Edge Cases

### Issue Without Competencies

If an issue is not tagged with any competencies (e.g., a question of public morality), **all votes have equal weight of 1**. The weight system does not apply.

### Very Few Professionals

If very few professionals are registered in the system for a given competency (e.g., 5 people), their combined weight may be disproportionately large. In such cases, a **corrective coefficient** may be applied.

### Conflict of Interest

Professionals who have a direct financial or other interest in the outcome of a vote may be **flagged** in the system (based on public declarations). This does not deprive them of their right to vote, but information about a potential conflict of interest is available to everyone.

## Formula Summary Table

| Parameter             | Formula                                        |
| --------------------- | ---------------------------------------------- |
| Base weight           | `1`                                            |
| Competency multiplier | `Competency_share × Base_amplification_factor` |
| Weight with level     | `Multiplier × Competency_level_percentage`     |
| Final vote weight     | `1 + Σ(Weight_with_level_i)`                   |
| Capped weight         | `min(Final_weight, Max_weight)`                |
| Cohort total weight   | `Number_of_people × Vote_weight`               |

---

**Next:** [Law Lifecycle →](../governance/law-lifecycle.md)
