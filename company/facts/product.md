# Product Context

## What We Build

**Terrain** is a two-sided marketplace for bookable outdoor experiences. Independent guides list surf lessons, alpine climbs, foraging walks, sea kayaking tours, fly fishing instruction, and similar experiences. Adventurers discover and book them. Terrain earns an 18% take rate on every booking plus a 3% platform fee charged to adventurers at checkout.

**Primary platforms:** iOS (GA), Android (public beta, GA targeting next quarter), web (discovery only — no booking on web).

**Business model:** Marketplace commission. Terrain charges guides 18% of the listed price per booking. Adventurers pay the listed price plus a 3% platform fee. Guides can also subscribe to Guide Pro ($29/month) for premium features. No listing fees; guides pay only when they earn.

---

## Product Areas

| Area | What it covers | Squad |
|------|---------------|-------|
| Marketplace Core | Search, listing pages, availability calendar, booking flow, payment processing | Adventurer Experience |
| Adventurer Experience | Discovery, booking, post-experience reviews, notifications, repeat engagement | Adventurer Experience |
| Guide Experience | Guide onboarding, listing creation, availability management, payout processing | Guide Experience |
| Monetization | Guide Pro subscription, analytics dashboard, priority placement | Guide Experience |
| Trust & Safety | Guide verification, insurance coordination, cancellation policy, incident reporting | Trust & Safety (shared) |

---

## Key Metrics

**Business health:**

| Metric | Current value | Trend |
|--------|--------------|-------|
| GMV (annualized) | $18M | Growing |
| Take-rate revenue (annualized, excluding platform fee and Guide Pro) | ~$3.2M | Growing |
| Average booking value | $185 | Stable |
| Active guides | 2,400 (38 US states) | Growing |
| Monthly active adventurers | 47,000 | Growing |
| Guide Pro subscribers | 340 (~14% of active guides) | Growing |

**Funnel metrics:**

| Metric | Current value | Benchmark |
|--------|--------------|-----------|
| Search-to-detail rate | 34% | — |
| Detail-to-booking rate | 8.2% | — |
| Overall booking conversion | 2.8% | — |
| Guide listing activation rate | 62% | Target: 75% |
| Guide 12-month retention | 71% | Target: 80% |
| Adventurer repeat rate (2+ bookings / 12 months) | 38% | Target: 50% |
| Cancellation rate | 14% | Industry: 7-9% |

---

## Current H1 Priorities

These are the priorities the PM team uses when evaluating trade-offs. They should shape PRDs, prioritization, business cases, launch plans, and status updates.

| Priority | Current state | Target / desired outcome | Primary owner |
|----------|---------------|--------------------------|---------------|
| Improve guide activation | 62% of registered guides publish a listing within 30 days | Reach 75% without lowering guide quality standards | Guide Experience, with Adventurer Experience input on listing quality |
| Expand Instant Book safely | Beta is live with 15% of guides; 22% of eligible guides have opted in | Increase eligible-guide opt-in to 45% while maintaining cancellation rate guardrails | Shared: Guide Experience owns opt-in, Adventurer Experience owns booking flow |
| Ship Android GA | Public beta is live; payment edge cases and push reliability remain open | GA in 6 weeks with no open P0/P1 payment or notification blockers | Adventurer Experience + Platform |
| Improve adventurer repeat behavior | 38% of adventurers complete 2+ bookings in 12 months | Reach 45% through better re-engagement and post-experience loops | Adventurer Experience |
| Reduce avoidable cancellations | 14% booking cancellation rate; industry benchmark is 7-9% | Reduce to 10% without creating unfair policy outcomes for guides or adventurers | Trust & Safety + both product squads |

---

## Product Relationships

**Guide-side and adventurer-side products share core infrastructure:** the listing object (created by guides, consumed by adventurers), the booking engine (transactions between both sides), and the review system (adventurers write reviews, guides receive them). Changes to any shared layer require cross-squad coordination.

**Instant Book** is a feature that spans both sides: guides opt in (Guide Experience), adventurers see the "Book instantly" badge and skip the approval wait (Adventurer Experience). It is currently in beta with 15% of guides.

**Guide Pro** feeds into marketplace quality: Pro guides get priority search placement, which affects what adventurers see. Decisions about Pro features have downstream effects on the adventurer-side discovery experience.

---

## Current Focus

**In production (live):**
- Core marketplace: search, listing, booking, payment, reviews
- Guide Pro subscription with analytics dashboard and priority search placement
- iOS app (GA); Android app (public beta)
- Instant Book beta: live with 15% of guides; only 22% of eligible guides have opted in

**In-flight (current quarter):**
- Instant Book expansion: moving from 15% beta to all eligible guides; guide adoption is the primary risk
- Android GA: targeting launch in 6 weeks; main blockers are payment edge cases and push notification reliability
- Guide analytics dashboard: expanded version behind Guide Pro paywall; in final QA

**Under consideration (not yet in development):**
- Group booking: splitting a single experience payment across multiple adventurers
- Seasonal / multi-day experiences: 3-7 day guided trips with a different inventory and pricing model
- Trust & safety improvements: guide ID verification, insurance partnership
- Social layer: trip sharing post-experience, friend following, public wishlists

---

## Key Policy Rules

These rules govern current product behavior. They should appear in advanced prompts where relevant — they're what makes Terrain scenarios specific rather than generic marketplace scenarios.

- **Cancellation policy:** Adventurers can cancel up to 72 hours before the experience for a full refund. Inside 72 hours, there is no automatic refund — support handles exceptions manually on a case-by-case basis.
- **Guide payout timing:** Guides receive payouts T+3 after the experience completes. This is a known pain point; full-time guides cite cash flow as a top complaint.
- **Instant Book eligibility:** To be eligible for Instant Book, a guide must have a rating above 4.7, at least 10 completed bookings, and no safety incidents in the past 12 months.
- **Guide Pro features:** Guide Pro ($29/month) includes analytics dashboard, priority search placement, and bulk availability management. Guides on the free tier get none of these.
- **Geography:** Terrain operates only in the US today, with guide supply across 38 states.
- **Web platform:** The web experience is discovery only — adventurers can browse listings on web but must book via the iOS or Android app.

---

## Recent Decisions

- **2026-04:** Launched Instant Book beta with 15% of guides. Primary hypothesis: removing the approval wait will improve booking conversion. Early data shows 31% higher conversion on Instant Book-eligible listings. Guide adoption is the open problem.
- **2026-03:** Moved Android to public beta. GA committed for Q2. Engineering owns the timeline; PM owns the go-to-market readiness checklist.
- **2026-02:** Deprioritized group booking for H1. Complexity (split payments, liability, cancellation policy edge cases) is high; demand signal is present but not urgent. Revisiting in H2 planning.
- **2026-01:** Launched Guide Pro analytics dashboard to Pro subscribers. Adoption is early; monitoring engagement before expanding the feature set.
