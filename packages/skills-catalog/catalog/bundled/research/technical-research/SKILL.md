---
name: technical-research
description: Research authoritative technical approaches, competitor/app patterns, and industry-standard implementation choices, using traceable primary or high-quality sources and producing concise recommendations with citations.
key: paperclipai/bundled/research/technical-research
recommendedForRoles:
  - researcher
  - product
  - engineering-manager
  - engineer
tags:
  - research
  - technical-strategy
  - competitor-analysis
  - architecture
  - citations
---

# Technical Research

Research how credible teams and products solve a technical or product problem, then turn that into a practical recommendation for the company.

## Source Standard

Prefer sources in this order:

1. Official documentation and standards.
2. Primary engineering blogs from the product/vendor/team.
3. Research papers, RFCs, benchmarks, or public postmortems.
4. Widely trusted open-source project docs and issue discussions.
5. Secondary articles only when they add synthesis and cite their own sources.

Do not rely on vague search snippets, anonymous claims, or uncited summaries when the decision affects architecture, money, security, compliance, or substantial engineering time.

## When to Use

- The company needs to know how other products solve a similar problem.
- A technical decision has multiple plausible approaches.
- Product planning needs competitor/app pattern context.
- Engineering asks for the industry-standard way to implement a capability.
- A plan should be checked against current vendor docs or recent ecosystem changes.

## Workflow

1. Define the research question in one sentence.
2. Identify decision criteria: correctness, cost, security, maintainability, time to ship, portability, and user experience.
3. Gather sources. Use the web when the topic may have changed recently.
4. Separate facts from interpretation. Mark inferences clearly.
5. Compare two or three viable approaches, not every imaginable option.
6. Recommend one path and name when it should be revisited.

## Output

Use this structure:

```md
## Question
<one sentence>

## Findings
- <fact with source>
- <fact with source>

## Options
- Option A: tradeoff.
- Option B: tradeoff.

## Recommendation
<one practical recommendation and why>

## Sources
- <title> — <url>
```

For competitor/application research, add:

```md
## Product Patterns
- Product/app: observed pattern and relevance.
```

## Collaboration

- Ask ProductLead for product constraints when the question affects scope or UX.
- Ask CTO for implementation constraints before final recommendation.
- Hand implementable follow-ups to CTO or InfraEngineer rather than doing engineering setup yourself.

## Safety

- Cite sources for any claim that could materially change the plan.
- Do not paste paid, private, or confidential source material into comments.
- Do not recommend vendor lock-in without naming the exit cost.
