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
Multiplier_genetics = Share_genetics × 100 = 0.70 × 100 = 70
```

The coefficient 100 is the base amplification factor, which can be adjusted depending on the voting level.

**Step 2: Calculating vote weights**

| Cohort           | Count       | Vote Weight | Total Weight      |
| ---------------- | ----------- | ----------- | ----------------- |
| Regular citizens | 99,500      | 1           | 99,500            |
| Geneticists      | 500         | 1 + 70 = 71 | 500 × 71 = 35,500 |
| **Total**        | **100,000** |             | **135,000**       |

**Step 3: Analysis**

- Weight contribution of 500 geneticists: `35,500 / 135,000 ≈ 26.3%` of the final result
- Weight contribution of 99,500 others: `99,500 / 135,000 ≈ 73.7%` of the final result

Thus, **0.5% of participants** (geneticists) determine **26.3%** of the final result, reflecting their professional significance for the given issue.

## Example with Multiple Competencies

Consider a citizen who has competencies in both genetics **and** ecology.

```
Vote_weight = 1 + (0.70 × 100) + (0.15 × 100) = 1 + 70 + 15 = 86
```

Their vote weighs 86 — significantly more than a specialist in only one field.

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

- Entry level: `1 + 70 × 0.25 = 18.5`
- Expert level: `1 + 70 × 1.0 = 71`

### Maximum Weight

To prevent excessive influence by a single person, a **ceiling** on maximum vote weight may be established:

```
Vote_weight = min(Calculated_weight, Max_weight)
```

Recommended ceiling: **100** (a vote cannot weigh more than 100 times the base weight).

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
