# Decision-Making Norms

## Decision Authority

**PM owns (no additional sign-off required):**
- Product scope and acceptance criteria within the squad
- Priority of stories within a sprint
- Feature flag enable/disable for Adventurer Experience features
- Trade-off decisions during development (e.g., scope reduction to hit a sprint goal)
- Which user interviews or research sessions to run

**Engineering lead (Chris Okafor) owns:**
- Technical approach and architecture decisions within the squad
- Library and tooling choices
- Story point estimates
- Build vs. reuse decisions for internal components

**VP Product (Dana Park) signs off:**
- Anything that changes H1 OKRs or requires reallocation of squad capacity
- Cross-squad resource requests (borrowing engineers, shared design time)
- Features with legal or regulatory implications before they enter development
- Public product commitments (changelog entries, marketing campaigns, press)
- Pricing or take rate changes
- Any decision that affects guide payout timing or cancellation policy

**Legal (Marcus Webb) reviews:**
- Features that change cancellation terms, refund policy, or liability exposure
- New data collection (user data, location data, biometric data)
- Any copy that could be read as a guarantee, advice, or legally binding commitment
- Guide verification or identity-related features

**Head of Engineering (Sam Rivera) reviews:**
- Technical decisions that affect platform-level infrastructure or multiple squads
- Decisions involving new external dependencies or vendor contracts
- Significant architectural changes (new data stores, service splits, API changes visible to third parties)

---

## Decision Process

**Low-stakes, fast decisions** (scope within sprint, reversible, no cross-functional impact):
- Make the call. Document it in a Slack thread or Linear ticket comment. Move on.

**Medium-stakes decisions** (affects the sprint goal, involves trade-offs between squads, or requires EM input):
- Share a brief written summary in Slack (what we're deciding, the options, the recommendation, the rationale). Async comment period of 24 hours. PM makes the final call.

**High-stakes decisions** (affects OKRs, requires VP sign-off, involves legal, or is hard to reverse):
- Write a short decision doc in Notion. Structure: context, options considered, trade-offs, recommendation. Share with relevant stakeholders. 48-hour async comment window before the decision closes. PM calls it; Dana Park (VP) signs off.

**Technical architecture decisions:**
- ADR (Architecture Decision Record) in GitHub. Engineering lead authors; PM reviews for product implications. No formal approval timeline — engineering owns the call with PM input.

---

## Where Decisions Live

- **Day-to-day:** Slack thread or Linear ticket comment
- **Medium-stakes:** Notion doc in the "Product Decisions" database (Terrain workspace)
- **High-stakes / permanent record:** Notion decision doc + entry in `knowledge/decisions/` in the pm-agent-kit repo (if using the kit)
- **Technical:** ADR in GitHub under `/docs/decisions/`

---

## Escalation Paths

**Product decisions:** PM → EM (Chris) → VP Product (Dana)
**Technical decisions:** PM → EM (Chris) → Head of Engineering (Sam)
**Legal/compliance:** PM → Legal directly (Marcus Webb, Slack or email)
**Cross-squad conflicts:** Both squad PMs → both EMs → VP Product if unresolved within 48 hours
**P0 production incidents:** EM → Head of Engineering → VP Product; PM informed immediately and owns stakeholder communication

---

## Decision Hygiene

- **Date every decision.** Decisions without dates become impossible to sequence later.
- **Record what was rejected, not just what was chosen.** The rationale for rejecting an option is often the most useful future reference.
- **A decision to wait is a decision.** If the team agrees to defer, document that explicitly — don't let it live in someone's memory.
- **Revisit when conditions change.** A decision made with last quarter's data may not hold this quarter. Flag decisions for revisiting when the underlying assumptions shift.
