# Team Structure

## My Team — Adventurer Experience Squad

The workbook's PM persona is a PM on the Adventurer Experience squad. This squad owns the demand side of the marketplace: how adventurers discover, evaluate, book, and return to Terrain.

**Squad composition:**
- PM: (you)
- Engineering Manager: Chris Okafor
- Engineers: 6 total — 2 iOS, 1 Android, 2 backend, 1 QA
- Designer: Mia Santos (also supports Guide Experience squad at ~30% of her time)

**What this squad owns:** Search and discovery, listing pages, booking flow, post-experience reviews, adventurer notifications, repeat engagement, Instant Book (adventurer-side).

**Sprint capacity:** 18–22 story points per 2-week sprint. Overhead is ~20% (standups, code review, bug triage, on-call rotation). One engineer per sprint is on reduced capacity (~50%) due to on-call rotation.

**Current constraints:**
- Android coverage is one engineer (Jordan T.). Android work serializes — avoid parallel Android tracks. Size Android stories conservatively.
- Mia (design) splits her time. Confirm design availability before committing design-dependent stories to a sprint. High-complexity Guide Experience sprints can pull her.
- Backend engineers (Sam W., Priya L.) support both squads for shared infrastructure (payments, search indexing). Coordinate with Guide Experience PM (Jordan Lee) when work touches shared services.

---

## Adjacent Teams

**Guide Experience Squad**
- PM: Jordan Lee
- EM: Aisha Nkomo
- Owns: Guide onboarding, listing creation, availability management, payout processing, Guide Pro subscription
- Interface: Weekly cross-squad sync (Thursdays); shared Slack channel #terrain-product; coordinate on anything touching the listing object, Instant Book (guide-side), or Guide Pro features

**Platform / Infrastructure**
- Lead engineer: Devon Park
- Owns: Payments infrastructure, search indexing, API reliability, data pipeline
- Interface: Async via Slack (#terrain-dev); flag any work that touches payment flows or search indexing to Devon before sprint planning; expect 3-day turnaround on infrastructure requests

**Trust & Safety**
- PM: Riley Chen (0.5 PM, shared with other responsibilities)
- Owns: Guide ID verification, insurance coordination, cancellation policy enforcement, incident reporting
- Interface: Async; loop in Riley for any feature that changes cancellation behavior or surfaces guide identity/credentials to adventurers

---

## Key Stakeholders

| Stakeholder | Role | What they care about | How to communicate |
|-------------|------|---------------------|-------------------|
| Dana Park | VP of Product | OKR progress, booking conversion, guide retention, GMV growth | Biweekly written status post; Slack DM for quick flags; dedicated brief for anything affecting OKRs or requiring cross-squad resources |
| Sam Rivera | Head of Engineering | Technical risk, system reliability, engineering velocity | Loop in via Chris (EM) for most things; direct ping for P0 production issues or decisions affecting platform architecture |
| Priya Anand | Head of Marketing | Launch timing, app store positioning, external messaging | 2-week heads-up before any GA launch; coordinate on changelog copy and app store release notes |
| Marcus Webb | Legal | Regulatory exposure, cancellation policy, guide liability | Consult before any feature that changes cancellation terms, surfaces guide credentials, or introduces new data collection |
| Marcus Chen | Data Lead | Metric definitions, data integrity, analysis requests | Slack for ad hoc questions; 3-business-day lead time for structured analysis requests |

---

## Ownership Map

| Area | iOS | Android | Backend | Design |
|------|-----|---------|---------|--------|
| Search & discovery | Priya L. | Jordan T. | Sam W. | Mia S. |
| Listing pages | Priya L. | Jordan T. | Sam W. | Mia S. |
| Booking flow + payments | Priya L. | Jordan T. | Sam W. (primary) | Mia S. |
| Instant Book | Priya L. | Jordan T. | Sam W. | — |
| Post-experience reviews | Priya L. | Jordan T. | Priya L. (backend) | Mia S. |
| Notifications | Priya L. | Jordan T. | Sam W. | — |
| Adventurer NPS / feedback | — | — | Sam W. | — |

---

## Decision-Making

**PM owns:** Product scope, priority within the squad, acceptance criteria, feature flag enable/disable for Adventurer Experience features.

**Engineering lead (Chris) owns:** Technical approach, architecture decisions within the squad, story point estimates.

**Dana Park (VP Product) signs off:** Anything affecting H1 OKRs, cross-squad resource requests, features with legal implications, public product commitments (changelog, marketing).

**Legal review (Marcus Webb):** Required for any feature touching cancellation policy, guide liability, new data collection, or copy that could be read as a guarantee or advice.

**Design system changes:** Mia owns. Changes affecting both squads require a sync with the Guide Experience designer before implementation.
