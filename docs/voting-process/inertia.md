---
sidebar_position: 2
title: System Inertia
---

# System Inertia

## The Problem

Continuous voting gives citizens a powerful tool to influence government. However, this power carries a risk: voters may react not only to real events but also to **gossip, rumors, deliberate lies, provocations, and slander**.

If voting results were to be implemented instantly, then:

- Officials would change too frequently
- The political system would become unstable
- Manipulators could exploit short-term mood swings

## The Solution: Inertia

The system must possess **inertia** — a property whereby moving it out of a given state requires either a **sufficiently strong** or a **sufficiently prolonged** influence.

Inertia is achieved by turning the system into an **integral (summing, cumulative) device**. The results of small influences gradually accumulate, and changes occur only as significant influence builds up.

## The Accumulation Mechanism

### Electoral Points (EP)

Each day during an electoral race, the difference between vote percentages is calculated:

```
EP(day) = P(candidate) − P(incumbent)
```

This difference is **added daily** to the accumulated result:

```
EP(accumulated, day N) = EP(accumulated, day N-1) + EP(day N)
```

### Race Completion Conditions

- **Candidate wins**: `EP(accumulated) ≥ threshold` (e.g., 3,700)
- **Candidate loses**: `EP(accumulated) ≤ 0` (all accumulated points lost)

### What This Means in Practice

A candidate **cannot win instantly**, even if their popularity surges dramatically. A **sustained advantage** over an extended period is required.

## Thresholds for Different Levels of Government

Thresholds may differ depending on the level of office:

| Level                    | Proposed Threshold | Minimum Duration at 10% Margin |
| ------------------------ | ------------------ | ------------------------------ |
| President                | 3,700 EP           | ~1 year                        |
| Governor / regional head | 2,500 EP           | ~250 days                      |
| Mayor / city head        | 1,500 EP           | ~150 days                      |
| Decisive voting (law)    | 1,850 EP           | ~185 days                      |

Higher offices require a longer and more sustained advantage for replacement, ensuring stability at the highest levels of government.

## Empirical Verification

Using political approval ratings of U.S. presidents, we can estimate how quickly a power transition would occur under continuous voting:

| Year | Candidate 1   | Candidate 2 | Max. Margin | Min. Duration (days) |
| ---- | ------------- | ----------- | ----------- | -------------------- |
| 1936 | Roosevelt (D) | Landon (R)  | 66%         | 56                   |
| 1944 | Roosevelt (D) | Dewey (R)   | 14%         | 264                  |
| 2008 | Obama (D)     | McCain (R)  | 6%          | 616                  |
| 2016 | Trump (R)     | Clinton (D) | 5%          | 740                  |
| 2020 | Biden (D)     | Trump (R)   | 6%          | 616                  |

:::note How to Read the Table
The minimum duration is calculated as `3700 / max. margin`. For example, for 1936: `3700 / 66 ≈ 56 days`. However, this is a **theoretical minimum** that assumes the maximum margin is maintained **every day** throughout the entire period.
:::

The 1936 case (66% margin) is a **historical anomaly** — Roosevelt won an overwhelming victory over Landon, and such a margin in ratings is extremely unlikely under normal conditions. Excluding this extreme case, the fastest power transition would require **at least 264 days** (at a 14% margin in 1944).

It is important to note that all the durations listed are **significantly underestimated**. The maximum margin typically holds for only a short time — for example, in 1944, the 14% margin was observed in only one month out of nine, and the average margin over 9 months was only 4.8%. Thus, **actual power transition timelines would be significantly longer** than the theoretical minimums shown.

## Protective Properties

Inertia provides:

1. **Predictability** — all trends are visible in advance; there are no sudden changes
2. **Protection from manipulation** — short-term information attacks cannot quickly change power
3. **Time for reflection** — both citizens and officials have time to react to changes
4. **Smooth transitions** — power changes occur gradually, without shocks to the system
5. **Stability** — the system is resistant to random fluctuations in public opinion

## Analogy

The inertia of continuous voting can be compared to a **low-pass filter** in electronics: the system passes sustained long-term trends and filters out short-term noise and fluctuations.

---

**Next:** [Vote Delegation →](./delegation.md)
