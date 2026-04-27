---
sidebar_position: 3
title: Vote Delegation
---

# Vote Delegation

## Concept

Not every citizen can or wants to research every issue put to a vote. **Vote delegation** allows transferring your voting right to another person — a trusted representative who will vote on the citizen's behalf.

Delegation in the proposed system fundamentally differs from representative democracy: the citizen **retains full control** over their vote.

## Basic Rules

### 1. Transferring Your Vote

A citizen can **transfer their vote to any other person** for temporary use. The trusted person will vote instead of the citizen on all issues.

- You can transfer your vote to **one specific person**
- The transfer is formalized through the cryptographic system (signed with a private key)
- The fact of delegation is **public** — it is visible that a vote has been delegated (though not necessarily to whom, if the citizen chooses anonymous mode)

### 2. Override

The key difference from representative democracy: a citizen can **vote personally at any time** on any specific issue without revoking the delegation.

**Override rules:**

- Performed **without notice** to the trusted person
- Requires **no approval** from anyone
- Takes effect **immediately**
- For that specific issue, the citizen's vote counts as personal
- For all other issues, delegation **continues to apply**

### 3. Automatic Restoration

After the issue on which the citizen voted personally (override) is concluded:

- Delegation is **automatically restored** for future votes
- No need to re-establish the delegation
- The trusted person continues voting on the citizen's behalf on other issues

### 4. Full Revocation

A citizen can at any time **fully revoke** the delegation:

- Revocation takes effect immediately
- All current votes cast by the trusted person are recalculated
- The citizen regains full control over their vote

## Usage Scenarios

### Scenario 1: Trusting an Expert

Citizen Anna doesn't understand economic policy but trusts economist Boris. Anna delegates her vote to Boris. Boris votes on economic issues on Anna's behalf and his own.

But when a vote comes up about building a park in Anna's neighborhood — she votes personally (override) because she knows the local situation better than Boris. On all other issues, Boris continues voting for her.

### Scenario 2: Temporary Delegation

Citizen Victor is going on a long business trip and won't be able to follow votes. He delegates his vote to his friend Gregory for the duration of his trip. Upon returning, Victor revokes the delegation.

### Scenario 3: Delegation Chain

Boris, to whom Anna delegated her vote, **cannot** pass Anna's vote further. Delegation works only one level deep — this prevents the creation of uncontrolled chains of influence.

## Limitations

1. **One level of delegation** — delegated votes cannot be passed further
2. **One delegate** — a vote can only be delegated to one person (not multiple)
3. **Transparency** — the fact of delegation is recorded in the blockchain
4. **Vote weight** — the competency weight multiplier is **not transferred** during delegation. The trusted person votes with the delegated vote at the base weight (1.0), even if the delegating citizen has an elevated competency level. The weight coefficient reflects the expertise of a specific person, not their vote. If a specialist wants their competency to count — they must vote personally (override)

## Technical Aspects

Delegation is implemented through the cryptographic system:

1. The citizen signs a **delegation transaction** with their private key
2. The transaction is published to the blockchain
3. The trusted person receives **the right to vote** on behalf of the citizen (without receiving the private key)
4. Override is also formalized as a signed transaction that takes priority
5. The entire history of delegations and overrides is available for audit

---

**Next:** [Blockchain & Cryptography →](./blockchain.md)
