# Terrain Company Context Onboarding

These files make the PM Agent Kit behave as if it understands Terrain. Copy them into a local `pm-agent-kit/company/` directory during Day 0 of the workbook.

If you already use the kit with real company context, back up that directory before copying Terrain over it.

---

## What to Read First

Start with the files that affect the most skills:

1. `facts/product.md` — what Terrain builds, how the marketplace works, key metrics, product rules, current priorities, and recent decisions
2. `facts/customers.md` — guide and adventurer segments, personas, pain points, feedback channels, and churn signals
3. `facts/team.md` — the workbook PM persona, squad structure, stakeholders, decision ownership, and support coverage
4. `norms/team-process.md` — sprint cadence, ticket lifecycle, definition of ready, definition of done, feature flags, and releases
5. `norms/communication.md` — status-update expectations, meeting norms, Slack channels, and stakeholder communication preferences

These five files are the core context that turns generic PM output into Terrain-specific output.

---

## File Map

| File | Role in the workbook |
|------|----------------------|
| `facts/product.md` | Product landscape, business model, current work, product policies, metrics, and OKRs |
| `facts/customers.md` | Guide/adventurer segments, personas, pain points, buying triggers, and retention signals |
| `facts/team.md` | Squad composition, PM scope, stakeholder map, ownership, and on-call/support expectations |
| `facts/competitors.md` | Competitive baseline for Airbnb Experiences, Viator, GetYourGuide, and REI Adventures |
| `facts/glossary.md` | Terrain terminology used across prompts and skill outputs |
| `norms/team-process.md` | How work moves from idea to shipped feature |
| `norms/communication.md` | How Terrain communicates updates, risks, meetings, and stakeholder asks |
| `norms/decisions.md` | Decision rights, escalation paths, and where decisions live |
| `norms/launch-process.md` | Launch tiers, approvals, support enablement, rollback, and post-launch review |
| `interfaces/data-sources.md` | Analytics tools, dashboards, event taxonomy, data request process, and feedback sources |
| `interfaces/branding.md` | Terrain colors, typography, slide defaults, and logo fallback behavior |
| `interfaces/templates.md` | Terrain-standard document and communication formats |
| `interfaces/tools.md` | Terrain's working tools: Linear, Notion, Slack, analytics, Figma, GitHub, and Unleash |

---

## How to Use Terrain in the Workbook

You do not need to memorize Terrain before Day 1. Each advanced prompt includes the Terrain details needed for that day's exercise. The value of these files is that the agent can load durable company context and produce output that reflects a real operating environment: named stakeholders, actual metrics, product constraints, team capacity, launch rules, and communication norms.

When you finish the workbook and want to use the PM Agent Kit at your real company, replace Terrain with your own context. Keep the same file structure. Replace fictional details with concrete product, customer, team, process, and tooling information from your company.

---

## Context Maintenance Pattern

For a real company, refresh the equivalent files when any of these change:

- Product strategy, OKRs, pricing, major product areas, or key metrics
- Customer segments, ICP, pain points, feedback channels, or churn signals
- Team ownership, stakeholders, decision rights, or support coverage
- Sprint process, launch process, feature flag policy, or communication norms
- Analytics tools, event taxonomy, dashboards, or data request process

Stale company context is worse than missing context. It makes the agent sound confident while reasoning from old facts.
