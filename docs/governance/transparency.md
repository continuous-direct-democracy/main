---
sidebar_position: 2
title: Openness & Verification
---

# Openness & Verification

## The Principle of Absolute Transparency

The proposed system is based on a fundamental principle: **the voting and validation process must be absolutely open**. Every citizen, every organization, every observer can at any time check any aspect of the system's operation.

This is not merely a declaration — transparency is ensured **technically** through the use of blockchain and cryptography.

## What Is Open

### Voting Data

- All votes are published in the open blockchain network
- Each vote contains a cryptographic signature
- Tally results are available in real time
- The complete history of vote changes is preserved

### Legislative Process

- The text of each proposed law
- Results of technical reviews
- Level of support for initiatives
- All amendments with authorship attribution
- Voting results for each law

### Competency System

- Who gave competency points to whom
- Each professional's competency level
- Participants' educational status
- Weight coefficients in voting

### Delegation

- The fact of vote delegation (in open mode)
- All override operations
- History of delegations and revocations

## Vote Verification

### Personal Verification

Every citizen can verify their own vote:

1. **Find their record** — locate all their votes in the blockchain by public key
2. **Verify the signature** — confirm the signature is valid and corresponds to their key
3. **Verify the content** — confirm the vote is recorded as they cast it
4. **Verify the accounting** — confirm the vote is included in the final tally with the correct weight

### Delegating Verification

A citizen can delegate verification rights to **third parties** without sharing their private key:

**Delegation methods:**

1. **Disclosing the public key** — the citizen shares their public key with a trusted person, who can then find and verify votes in the blockchain
2. **Signed permission** — the citizen issues a signed document confirming the right to audit their records
3. **Indicating the expected vote** — the citizen states which option they voted for, and the trusted person verifies the match

**Important:** the private key is **never shared**. Delegating verification is a right to view and verify, not a right to vote.

## Public Audit

### Independent Counting

Since all data is open, **anyone** can conduct an independent tally:

```
1. Download all voting records from the blockchain
2. Verify the validity of each cryptographic signature
3. Confirm the absence of duplicates (one key — one vote)
4. Apply weight coefficients
5. Calculate the final result
```

The result must match the official one. If it doesn't — that's a signal of a problem.

### Automated Audit

The creation of **open-source software** for automatic verification is envisioned:

- Scripts for downloading and verifying data
- Tools for visualizing results
- Anomaly monitoring systems
- APIs for integration with public watchdog organizations

The code for these tools must also be **open source**, so anyone can verify their correctness.

## Protection Against Manipulation

### Data Immutability

The blockchain ensures **immutability** of records:

- Records cannot be deleted
- Records cannot be changed retroactively
- Any attempt at modification will be detected
- Chain integrity is mathematically guaranteed

### Distribution

There is **no single point of control**:

- Data is stored across many independent nodes
- No single operator can control the entire network
- Falsification requires compromising a majority of nodes simultaneously

### Cryptographic Protection

- Each vote is signed with a private key
- Forging a signature is impossible without the private key
- Anyone can verify signature validity

## Levels of Trust

The system is built so that **trust is not required** — **verification** is used instead:

| Traditional System             | Proposed System            |
| ------------------------------ | -------------------------- |
| Trust in electoral commissions | Cryptographic verification |
| Trust in observers             | Open data for everyone     |
| Trust in the count             | Independent recount        |
| Trust in ballot storage        | Immutable blockchain       |
| "We believe"                   | "We verify"                |

## The "Don't Trust — Verify" Principle

At the core of the system lies the cryptographic principle **"don't trust — verify"**:

- No need to **believe** the vote was counted — you can **verify**
- No need to **believe** the tally is correct — you can **recount**
- No need to **believe** data hasn't been altered — you can **verify** blockchain integrity
- No need to **believe** officials — you can **audit** the system

This fundamentally changes the relationship between society and government: from a trust model to a transparency and verifiability model.

---

**Back:** [Law Lifecycle ←](./law-lifecycle.md) | **Next:** [Conflict Resolution →](./conflict-resolution.md)
