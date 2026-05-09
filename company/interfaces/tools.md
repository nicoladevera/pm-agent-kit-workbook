# Tool Configuration

## Project Management

**Tool:** Linear
**Workspace:** Terrain-PM
**Squad boards:**
- Adventurer Experience: `linear.app/terrain/team/adventurer-exp`
- Guide Experience: `linear.app/terrain/team/guide-exp`
**Ticket ID format:** TRN-XXXX (e.g., TRN-4821)
**Workflow states:** Backlog → Refined → Sprint Ready → In Progress → In Review → Staging → Done
**Labels in use:** `bug`, `feature`, `tech-debt`, `data`, `infra`, `design-needed`, `legal-review`, `p0`, `p1`, `p2`
**Cycle (sprint) naming convention:** "Sprint NN — [Week of MM/DD]"
**Linking to tickets:** `linear.app/terrain/issue/TRN-XXXX`

---

## Documentation

**Primary tool:** Notion (Terrain workspace)
**Key spaces:**
- Product: PRDs, decision docs, roadmap, meeting notes
- Engineering: ADRs, architecture docs, event taxonomy, API references
- Support: FAQ library, known issues, training materials
- Data: Analysis requests, dashboard index, metric definitions

**Where things live:**
- PRDs: Notion → Product → PRDs → [Squad] → [Feature name]
- Decision docs: Notion → Product → Decisions (also logged in `knowledge/decisions/` if using pm-agent-kit)
- Retro notes: Notion → Product → Retros → [Sprint NN]
- OKRs: Notion → Product → OKRs → [Quarter]

**Secondary tool:** Google Docs — used for stakeholder-facing documents (briefs for Dana Park, legal review docs, external partner agreements). Not for internal working docs.

---

## Communication

**Tool:** Slack (Terrain workspace)

**Key channels:**

| Channel | Purpose | Who posts |
|---------|---------|-----------|
| `#product-updates` | Biweekly sprint status posts; major launch announcements | PMs |
| `#terrain-product` | Day-to-day PM/engineering coordination; async standups | Squad members |
| `#terrain-dev` | Engineering channel; infra and technical discussion | Engineering |
| `#product-design` | Design syncs; Figma links; design review requests | Design + PM |
| `#incidents` | Production alerts; P0/P1 issue coordination | On-call; automated alerts |
| `#terrain-data` | Data requests; metric questions; analysis sharing | PM + Data team |
| `#launches` | Launch coordination; go/no-go decisions; post-launch monitoring | PM + EM + Marketing |

**Bot integrations:** Linear bot (ticket updates in `#terrain-product`), Datadog alerts (in `#incidents`), GitHub PR bot (in `#terrain-dev`).

---

## Data & Analytics

| Tool | Purpose | Access |
|------|---------|--------|
| Amplitude | Product event tracking, funnel analysis, user paths, retention | Self-serve for PMs; login via SSO |
| Looker | BI dashboards, cohort analysis, revenue reporting | Self-serve for pre-built dashboards; SQL via Snowflake for custom |
| Snowflake | Raw data warehouse; source of truth for all metrics | SQL access; request credentials from Fernando Lopez (data lead) |
| AppFollow | App store review monitoring (iOS + Android) | PM team; login via AppFollow account |
| Delighted | NPS surveys; verbatim response export | Growth PM owns; others can request data export |

---

## Design

**Tool:** Figma (Terrain organization)
**Design system:** Terrain Design System — in Figma under "Terrain / Design System". All new UI work should use Design System components. Deviations require design lead (Mia Santos) sign-off.
**File structure:** Figma → Terrain → [Squad] → [Feature] → [Version]
**Handoff process:** Designer shares Figma link in Linear ticket; PM reviews in Figma; engineering reads specs from Figma Inspect; no separate design handoff doc needed.

---

## Source Control

**Tool:** GitHub (github.com/terrain-app)
**Primary repos:**
- `terrain-app/terrain-ios` — iOS app
- `terrain-app/terrain-android` — Android app
- `terrain-app/terrain-api` — Backend API
- `terrain-app/terrain-web` — Web (discovery only; no booking)
- `terrain-app/terrain-data` — dbt models, data pipeline config

**PR conventions:** PRs require 2 engineer approvals; PM reviews are optional but encouraged for user-facing changes. All PRs must pass CI (tests + linting) before merge. Feature PRs tagged with Linear ticket ID.
**Branch naming:** `feature/TRN-XXXX-short-description` or `fix/TRN-XXXX-short-description`.
**ADRs:** Stored in `terrain-api/docs/decisions/` — architectural decision records authored by engineering.

---

## Feature Flags

**Tool:** Unleash (self-hosted)
**Access:** PM can view and toggle flags in the Unleash UI (request access from DevOps). Engineering creates new flags.
**Flag naming convention:** `[squad].[feature].[variant]` — e.g., `adventurer.instant-book.enabled`, `guide.pro-analytics.v2`
**Environments:** development, staging, production (separate flag states per environment)
**Kill switch protocol:** All GA features retain their flag for 2 weeks post-launch as a kill switch. PM is responsible for filing a deprecation ticket after the 2-week window.
