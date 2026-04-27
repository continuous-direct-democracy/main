---
sidebar_position: 4
title: Blockchain & Cryptography
---

# Blockchain & Cryptography

## Why Cryptography Is Needed

A continuous voting system requires absolute transparency and trust. Traditional voting systems rely on trust in electoral commissions and observers. The proposed system uses **cryptographic methods** that allow every citizen to **mathematically** verify the correct accounting of their vote.

## GPG Keys

### Key Generation

Each citizen generates a pair of GPG cryptographic keys:

- **Private (secret) key** — stored only by the citizen, never shared with anyone
- **Public (open) key** — submitted to the electoral body and published in the open network

### Registration

The process of registering in the voting system:

1. The citizen **generates** a GPG key pair on their device
2. The citizen **personally** appears at the electoral body for identification
3. The electoral body **verifies** the citizen's identity (passport, biometrics)
4. The citizen's public key is **registered** in the system and linked to their electoral record
5. The citizen receives **confirmation** of registration

### Key Reissuance

A citizen has the right to **reissue their keys at any time for free**:

- If there is suspicion that the private key has been compromised
- If access to the private key is lost
- For any other reason
- The procedure is similar to initial registration: personal appearance and identification
- The old key is **revoked**; all previous votes signed with it remain valid until the citizen decides otherwise
- The citizen can at any time **change their previous votes** using the new key — the system links old and new keys through the reissuance procedure, ensuring continuity
- New votes are signed with the new key

## Voting Process

### Forming a Vote

When a citizen votes, the following happens:

1. A **structured message** is formed with the vote data:
   - Voting identifier (issue / election)
   - Selected answer option
   - Timestamp
   - Voter's public key
2. The message is **signed** with the citizen's private key
3. The signed message is **published** to the open voting network

### Publishing to the Open Network

The vote is published to a **blockchain** — a distributed network in which:

- Records are **immutable** — a published vote cannot be deleted or retroactively modified
- The network is **distributed** — there is no single point of failure or control
- Data is **open** — anyone can read and verify any record
- All transactions are **ordered** by time

### Changing a Vote

When a citizen changes their vote:

1. A new message is formed with the updated choice
2. The new message is signed with the private key
3. The new record is published to the blockchain
4. The system considers the **latest** record from the given public key for the given vote

## Verification

### Checking Your Own Vote

Every citizen has the right to **verify** that their vote:

- Is **recorded** in the blockchain
- Is **recorded correctly** — matches their choice
- Is **counted** in the final tally

To verify, the citizen:

1. Finds in the blockchain the record signed with their public key
2. Verifies the signature using their key
3. Confirms that the record's content matches their choice

### Delegating Verification Rights

A citizen can **delegate verification rights** to third parties:

- Public observers
- Independent auditors
- Trusted persons

**Important:** delegating verification rights **does not require sharing the private key**. The citizen can:

- Provide their public key and indicate what vote is expected
- Issue a signed permission for auditing their records
- Provide a zero-knowledge proof if necessary

### Public Audit

Since all votes are published in the open network:

- Anyone can calculate the **overall results** of a vote
- Anyone can verify that **all signatures are valid**
- Anyone can confirm the **absence of duplicates** (one key — one vote)
- The entire process is **reproducible** — any observer arrives at the same totals

## Security

### Protection Against Attacks

| Threat             | Defense                                                      |
| ------------------ | ------------------------------------------------------------ |
| Vote forgery       | Cryptographic signature — impossible without the private key |
| Vote deletion      | Blockchain — records are immutable                           |
| Double voting      | One key — one vote; the latest record is counted             |
| Mass falsification | Distributed network — no single point of control             |
| Key compromise     | Free reissuance at any time                                  |

### Protection Against 51% Attack

Unlike financial blockchains (Bitcoin, Ethereum), where a 51% attack allows rewriting transaction history, the voting system has **unique protective properties**:

1. **Self-detection of attacks** — every citizen can check their own vote. If an attacker modifies records, this will be detected massively and quickly — millions of people serve as independent auditors of their own votes.

2. **Permissioned/hybrid network** — network nodes are operated by government bodies, universities, NGOs, and citizens. Unlike fully open networks like Bitcoin, node operators must meet requirements, making it significantly harder to capture 51% of computational power.

3. **Multiple anchoring** — block hashes are regularly published to several independent public blockchains (Bitcoin, Ethereum, etc.), creating immutable checkpoints. Even if the main network is compromised, history cannot be falsified without simultaneously compromising all anchor chains.

4. **Geographic distribution** — nodes are distributed across different regions and jurisdictions, making a coordinated attack logistically extremely difficult.

5. **Inertia as additional protection** — even if an attacker briefly controls the network, the cumulative electoral point (EP) system means that momentary data distortion cannot instantly affect the final result. During the time needed for EP accumulation, the attack will be detected and neutralized.

:::tip Key Difference from Financial Blockchains
In Bitcoin, a victim of a 51% attack may not know that their transaction was reversed. In the voting system, every citizen **personally verifies** their vote — the attack becomes **self-detecting** by nature.
:::

### Confidentiality

The system provides a balance between transparency and confidentiality:

- **Public**: the fact of voting, tallied results, signature validity
- **Can be confidential**: the connection between a public key and the citizen's identity (depends on the chosen model)
- **Always confidential**: the citizen's private key

## Technical Architecture

```
┌──────────────┐      ┌──────────────┐     ┌─────────────────┐
│   Citizen    │────▶ │    Vote      │────▶│   Open Network  │
│  (private    │      │   Signing    │     │   (blockchain)  │
│   key)       │      │   GPG        │     │                 │
└──────────────┘      └──────────────┘     └─────────┬───────┘
                                                     │
                    ┌──────────────┐                 │
                    │ Verification │◀────────────────┘
                    │  (public     │
                    │   key)       │
                    └──────────────┘
```

---

**Next:** [Competency Weights System →](../competency-weights/overview.md)
