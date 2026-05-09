# Launch Process

## Launch Types

Terrain uses four standard launch tiers. Every feature ships through at least two tiers; high-risk features ship through all four.

**Internal**
- Who sees it: Terrain employees only; accessed via Unleash flag enabled for internal user IDs
- Approval: PM sign-off only
- Communication: Slack post in #terrain-product announcing the flag is live for internal testing
- Documentation required: None beyond the Linear ticket
- Monitoring: Basic error rate monitoring in Datadog; no formal dashboard required

**Alpha**
- Who sees it: Hand-selected guides or adventurers, typically 10–50 users. Explicit opt-in. Often a design partner cohort or active community members.
- Approval: PM + EM (Chris Okafor) sign-off
- Communication: Direct outreach to participants (Slack group or email thread); no public announcement
- Documentation required: Participant brief explaining what they're testing and how to give feedback; known limitations documented
- Monitoring: Feature-specific metrics dashboard set up before alpha starts; PM reviews daily

**Beta**
- Who sees it: A percentage rollout (typically 5–15%) via Unleash, or a self-selected cohort via opt-in (e.g., guides who toggle Instant Book on)
- Approval: PM + EM + VP Product (Dana Park) sign-off
- Communication: Changelog entry (internal changelog in Notion); support team briefed with FAQ doc and known limitations; no external press or marketing
- Documentation required: Changelog entry, support FAQ (3–5 Q&As minimum), known limitations list
- Monitoring: Full metrics dashboard live before beta starts; weekly PM review of adoption, error rate, and key outcome metrics; explicit exit criteria defined before beta begins

**GA (General Availability)**
- Who sees it: All users (or all users in the eligible segment — e.g., all guides)
- Approval: PM + VP Product (Dana Park) sign-off; Head of Marketing (Priya Anand) notified for potential promotion
- Communication: Changelog entry (public-facing if marketing decides to promote); help center article live; in-app notification if the feature is high-impact; app store release notes updated for mobile features
- Documentation required: Help center article, release notes, support team fully briefed, rollback plan documented
- Monitoring: Monitoring alerts configured in Datadog before GA; on-call engineer aware; PM reviews metrics at T+1 day, T+7 days

---

## Required Approvals by Tier

| Tier | PM | EM | VP Product | Legal | Marketing |
|------|----|----|------------|-------|-----------|
| Internal | ✓ | — | — | — | — |
| Alpha | ✓ | ✓ | — | If applicable | — |
| Beta | ✓ | ✓ | ✓ | If applicable | Informed |
| GA | ✓ | ✓ | ✓ | If applicable | ✓ (informed + coordinated) |

**Legal review is required** for any tier that involves: changes to cancellation policy, guide liability exposure, new user data collection, or copy that reads as a guarantee or advice. Get legal review before the feature enters beta.

---

## Standard Communication Channels

| Channel | Internal | Alpha | Beta | GA |
|---------|---------|-------|------|-----|
| #terrain-product Slack | ✓ | ✓ | ✓ | ✓ |
| #product-updates Slack | — | — | ✓ | ✓ |
| Internal changelog (Notion) | — | — | ✓ | ✓ |
| Public changelog / release notes | — | — | — | Optional (Marketing decides) |
| Help center article | — | — | — | ✓ |
| In-app notification | — | — | — | High-impact features only |
| App store release notes | — | — | — | ✓ for mobile features |

---

## Support Enablement

- **Timing:** Support team must be briefed before any beta or GA launch — minimum 3 business days notice
- **Who briefs them:** PM authors the support FAQ; support lead reviews and fills gaps
- **Artifacts required for beta:** FAQ doc (3–5 Qs), known limitations list, escalation path for issues outside FAQ scope
- **Artifacts required for GA:** Help center article (owned by PM, edited by support), release notes, brief walkthrough with support lead before launch day
- **Guide vs. Adventurer launches:** Guide-side features often generate guide support tickets faster than adventurer-side (guides are more engaged and vocal). Size the support brief accordingly.

---

## Rollback Standards

**What triggers a rollback:**
- Error rate >2x the 7-day baseline for the affected flow
- Session-level crash rate >5% on iOS or Android
- Explicit signal from VP Product or Head of Engineering
- Payment processing errors of any rate (zero tolerance)

**Who authorizes rollback:** PM authorizes the call; EM executes via Unleash flag toggle or hotfix deploy; Head of Engineering informed immediately.

**How rollback is communicated:**
- Internal: Slack post in #incidents and #terrain-product within 15 minutes of decision
- Guide/adventurer-facing: Support team sends proactive comms to affected users within 1 hour if the rollback causes visible disruption (e.g., Instant Book suddenly unavailable)
- Changelog: Update with a brief note that the feature was temporarily rolled back

**Post-rollback:**
- Post-mortem within 48 hours; PM authors; EM and relevant engineers attend
- Root cause documented in Notion under "Incident Reports"
- Decision on path forward (fix and re-launch vs. redesign) within 1 week

---

## Post-Launch Review

- **Timing:** Structured review at T+2 weeks for beta; T+4 weeks for GA
- **Who attends:** PM, EM, designer, data analyst (Fernando Lopez)
- **What's reviewed:** Adoption metrics vs. exit criteria, outcome metrics vs. hypothesis, qualitative signal (support tickets, user interviews scheduled), and any incidents or rollbacks
- **Output:** Written summary in Notion with "ship it, iterate, or revisit" recommendation; shared with Dana Park (VP Product)
