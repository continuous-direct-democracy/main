---
sidebar_position: 2
title: Motivation
---

# Motivation: Why a New System Is Needed

## The Asymmetry of Power

Modern democratic systems suffer from a fundamental asymmetry: the impact of government on the people is nearly 100%, because officials exercise power every day, while the reverse influence of the people is only about **0.1%**.

This estimate is based on a simple calculation: on average worldwide, elections for head of state are held every 4.8 years. Citizens vote roughly twice during this period (head of state and legislature). The average frequency of electoral participation:

```
(2 × 100) / (4.8 × 365) ≈ 0.1%
```

In other words, **99.9% of the time** citizens have no direct instrument to influence the government.

## Problems of Modern Democracy

### The Gap Between People and Power

Numerous researchers — from 19th-century political scientists to modern scholars — have pointed to the fundamental **contradiction between the people and the government** as a source of political instability. Robert Dahl noted the internal contradictions of democracy: on one hand, individual freedom is required; on the other, the will of the majority — and these requirements often conflict[^1]. Friedrich Hayek warned about the danger of concentrating power in the hands of the few[^2]. When the interests of the people are virtually ignored, discontent accumulates, eventually leading to a crisis — whether a revolution, coup d'état, or prolonged political instability.

### Infrequent Voting

Elections take place once every 4–7 years. During that time:

- The situation in the country can change dramatically
- Candidates' promises may go unfulfilled
- New problems require immediate solutions, but citizens have no tools to address them

As Martin Shubik noted as early as 1970, technology already allowed for "instant referendums," but society was not ready for it[^3].

### Lack of Transparency

Traditional voting systems:

- Are vulnerable to falsification
- Do not allow citizens to personally verify that their vote was counted correctly
- Require trust in intermediaries (electoral commissions, observers)

### Incompetent Decisions

When voting on complex specialized issues (for example, in genetics, economics, or ecology), the votes of professionals and people without relevant knowledge carry equal weight, which can lead to incompetent decisions. As James Surowiecki aptly noted: "The idea that the correct answer to complex problems is simply to 'ask the experts' assumes that experts agree with each other. But they don't"[^4].

## Historical Attempts at Solutions

The idea of improving democracy through delegation and more frequent voting has a long history. Researchers from different countries and eras independently arrived at similar conclusions.

### Early Ideas (19th–20th Century)

- **Charles Dodgson (Lewis Carroll), 1884** — in his pamphlet "The Principles of Parliamentary Representation," he first described a system of transitive voting where a voter could transfer their vote to another person. This is considered the first step toward the concept of "liquid democracy"[^5].

- **William U'Ren, 1912** — an Oregon reformer who lobbied for a system of "interactive representation" (Proxy Plan of Representation), where the influence of elected politicians was weighted proportionally to the number of votes received[^6].

- **Gordon Tullock, ~1967** — proposed that voters could either choose representatives or vote themselves "over the wires" while debates were broadcast on television[^3].

- **James Miller** — advocated for every citizen to be able to vote on any issue personally or appoint a representative to convey their position[^3].

- **Martin Shubik, 1970** — called this process an "instant referendum" but expressed concern about the speed of decision-making and the time available for public debate[^3].

### Liquid Democracy in the 21st Century

The technological breakthrough of the early 21st century made delegative democracy ideas practically achievable:

- **Pirate Parties (from 2006)** — parties in Germany, Italy, Austria, Norway, France, and the Netherlands use the [LiquidFeedback](https://liquidfeedback.org/) platform for intra-party decision-making[^7].

- **Demoex, Sweden (2002–2014)** — the first example of using liquid democracy software in real politics. The party held a seat in the Vallentuna municipal parliament, where members decided how their representative should vote through an internet platform[^8].

- **Google Votes (2015)** — Google experimented with liquid democracy through an internal corporate social network for choosing cafeteria menus, studying delegation mechanisms in practice[^9].

- **Democracy OS, Argentina** — a platform that allows citizens to propose, discuss, and vote on various topics, bringing democratic processes into the digital age[^10].

- **Civicracy, Vienna (2012)** — an experimental form of liquid democracy with a "dampening algorithm" to ensure representational stability — an interesting parallel to the inertia concept in our system[^11].

### Stefanov's Work (2024)

In parallel, in Russia, Ya.N. Stefanov, in his article "Non-Revolutionary Development and Continuous Democracy," proposed a mechanism of continuous voting with a cumulative point system. His approach to system inertia became one of the sources of inspiration for this project. More details in the [Source Reference](./direct-voting/source-reference.md) section.

## Why Existing Solutions Are Insufficient

Despite progress, existing implementations of delegative democracy have serious limitations:

### Oligarchic Tendencies

As Hélène Landemore (Yale University) noted, Liquid Democracy can concentrate power in the hands of socially prominent, politically strategic, and wealthy individuals — the "star-voting" phenomenon. Transitive delegation creates "super-voters" who accumulate thousands of votes[^12].

### No Protection Against Impulsive Decisions

None of the existing platforms offer an inertia mechanism — protection against decisions made under the influence of short-term emotions, rumors, or information attacks.

### Scaling Problems

The LiquidFriesland experiment in Germany showed that out of all registered users, only 20% logged into the system and only 10% were active. The process was "dominated by a bureaucratic style of communication"[^13].

### No Competency Accounting

None of the existing systems account for professional competencies when voting on specialized issues. The vote of an ecologist and the vote of a programmer carry equal weight when voting on a climate law.

## What We Propose

The **Continuous Direct Democracy** system takes into account the lessons of its predecessors and addresses the identified problems:

1. **Continuous Voting** — citizens can vote at any time, eliminating the gap between 0.1% and 100%
2. **Cryptographic Transparency** — blockchain and GPG keys ensure full verifiability
3. **Delegation with Retained Control** — transferring your vote to experts with the right to revoke at any time, **without transitive chains**
4. **Competency Weight System** — professionals carry greater weight when voting on specialized issues
5. **Inertia** — protection from impulsive decisions through a cumulative mechanism absent in Liquid Democracy

## Goal

To create a **non-revolutionary** political system capable of self-transformation during normal operation. A system in which necessary changes occur smoothly and peacefully, without violent upheavals, yet inevitably — because the will of the people is expressed continuously and directly.

> _"The true significance of democratic forms of government... is to avoid violent upheavals"_
> — Ludwig von Mises

---

## References

[^1]: Dahl R. On Democracy. Yale University Press, 2000.

[^2]: Hayek F.A. The Road to Serfdom. London: Routledge, 2006.

[^3]: Paulin A. Through Liquid Democracy to Sustainable Non-Bureaucratic Government. JeDEM, Vol. 6, Iss. 2, 2014.

[^4]: Surowiecki J. The Wisdom of Crowds. Anchor Books, 2005.

[^5]: Dodgson C. The Principles of Parliamentary Representation. 1884. (Reprint: Nabu Press, 2012. ISBN 978-1277395686)

[^6]: "Government by proxy now." New York Times, 30 June 1912.

[^7]: LiquidFeedback — The democracy software. https://liquidfeedback.org/

[^8]: Demoex (Sweden). newDemocracy Foundation. https://www.newdemocracy.com/library/case-studies/europe/145-demoex-sweden

[^9]: Hardt S., Lopes L.C.R. Google Votes: A Liquid Democracy Experiment on a Corporate Social Network. Technical Disclosure Commons, 2015.

[^10]: Democracia en Red. https://democraciaenred.org/

[^11]: Hainisch R., Paulin A. Civicracy: Establishing a Competent and Responsible Council of Representatives Based on Liquid Democracy. CeDEM 2016. doi:10.1109/CeDEM.2016.27

[^12]: Landemore H. Open Democracy: Reinventing Popular Rule for the Twenty-First Century. Princeton University Press, 2020. ISBN 978-0-691-20872-5.

[^13]: Blum C., Zuber C.I. Liquid Democracy: Potentials, Problems, and Perspectives. Journal of Political Philosophy, 24(2), 2016. doi:10.1111/jopp.12065

---

**Next:** [Direct Voting Overview →](./direct-voting/overview.md)
