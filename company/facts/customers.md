# Customer Context

## Buyer vs. User

Terrain is a B2C two-sided marketplace. Both sides are "users," but they have different relationships with the platform:

**Guides** earn through Terrain — they are the supply side. They don't pay to list; they pay Terrain's 18% commission only when a booking completes. Their economic relationship with Terrain is as a revenue-sharing partner, not a customer paying for a product. They care about income reliability, platform fairness, and tools that help them run their outdoor instruction business.

**Adventurers** pay to book experiences — they are the demand side and the economic buyers. They pay the listed price plus a 3% platform fee at checkout. Their decision to return (or not) drives lifetime value. The adventurer who books once and churns is an acquisition cost with no payback.

There is no procurement layer, no B2B buyer dynamic, and no admin-versus-end-user split. The person who discovers Terrain is the person who decides to book and pay.

---

## Customer Segments

### Guides

**Independent Instructor** — The core guide supply. Outdoor professionals (surf instructors, mountaineering guides, fishing guides, foraging educators) who teach independently, not through a tour company. They may have other income sources (private clients, retail work, seasonal employment) but use Terrain to find new customers and fill their schedule. Approximately 2,400 active on Terrain today.

> **Representative persona — Marco:** Age 34, freelance surf instructor, San Diego CA. On Terrain for 18 months; runs 3–5 sessions per week through the platform. Primary income source is Terrain bookings plus a small number of regulars he retains off-platform. Pain points: juggling availability across Terrain and two other booking platforms manually; no-show adventurers when cancellation windows are loose; getting buried in search results as supply grows; payouts arriving T+3 (cash flow tight week-to-week); no visibility into listing views vs. bookings. Goals: consistent, predictable income; ability to raise prices as reputation grows; repeat customers who refer friends.

- What they care about: Consistent, predictable booking volume. Low administrative overhead (availability management, payments). Tools that help them look credible to new adventurers. Repeat customers.
- What frustrates them: No-show adventurers they can't recover income from. Slow payouts (current: T+3 days after experience). Getting buried in search results as supply grows. No visibility into who viewed their listing vs. booked.
- Buying trigger: Word of mouth from another guide, or frustration with an existing booking platform (Airbnb Experiences, direct booking via Instagram).

**Hobbyist Guide** — A smaller segment (~15% of supply). People who guide occasionally — a weekend kayaking enthusiast who leads tours a few times a year, a forager who teaches seasonal walks. Lower booking volume expectations; more tolerant of platform friction. Less likely to subscribe to Guide Pro.

### Adventurers

**Experience Seeker** — Active adults, 25–40, who book 3–8 guided outdoor experiences per year. Mix of local day trips and travel-anchored experiences. Comfortable spending $100–$300 for a half-day experience with a credible guide. The highest-LTV adventurer segment and the primary audience for retention work. Approximately 47,000 MAUs on Terrain.

> **Representative persona — Jamie:** Age 29, product designer, Seattle WA. Books 4–6 guided outdoor experiences per year; mix of local day trips and travel-anchored experiences. Comfortable spending $150–$300 for a half-day experience with a credible guide. Pain points: booking wait (current median 18 hours for guide confirmation); cancellation anxiety (unclear what happens if weather turns); difficulty assessing guide skill-level fit from reviews; no way to share trips or see what friends have done. Goals: authentic, local experiences that feel curated rather than touristy; confidence in the guide's credibility before committing.

- What they care about: Finding authentic, local experiences that feel curated rather than touristy. Confidence in the guide's credibility before committing. A booking process that doesn't make them wait 2 days for confirmation.
- What frustrates them: Waiting for guide approval (current median: 18 hours). Unclear what happens if weather turns bad (cancellation policy is inconsistent across guides). No social layer to share trips or see what friends have done.
- Buying trigger: Travel planning for a destination with outdoor options, a friend recommending a specific guide, or a "I want to try something new locally" impulse.

**Gifter** — A smaller but distinct segment who book Terrain experiences as gifts (birthdays, anniversaries, corporate gifting). They care about presentation (gift receipts, the ability to give a voucher for a future date) and reliability above all else. Currently underserved — no gift flow exists on Terrain.

---

## Pain Points and Buying Triggers

**Guide pain points, ranked by frequency in support tickets and interviews:**
1. No-show adventurers with loose cancellation windows — guides lose the slot and earn nothing
2. Payout timing (T+3) — cash flow is tight, especially for full-time instructors
3. Difficulty standing out in search as supply grows — no clear path to visibility except reviews
4. Manual availability management — juggling Terrain alongside direct bookings or other platforms
5. No insight into listing performance — views, conversion, where adventurers drop off

**Adventurer pain points, ranked:**
1. Booking wait — Instant Book beta is addressing this; 22% of eligible guides have opted in
2. Cancellation anxiety — what happens if weather is bad? Policy varies by guide; unclear at browse time
3. Guide credibility assessment — reviews help but don't always surface skill-level suitability
4. No repeat engagement loop — no notifications, no recommendations, no social sharing after a completed experience

---

## Voice-of-Customer Channels

| Channel | Signal type | Volume | Bias | Owner |
|---------|-------------|--------|------|-------|
| In-app post-experience rating (1–5 + optional comment) | Satisfaction, guide quality, logistics | ~200/week | Skews positive; adventurers who had a bad experience often just don't rate | Adventurer Experience PM |
| Zendesk support tickets | Problems, not praise | ~60/week | Skews guide-side; dominated by payout questions, availability issues, cancellation disputes | Support lead |
| Quarterly adventurer NPS | Satisfaction + open-ended verbatim | ~150 responses/quarter | Surveying active users misses churned adventurers entirely | Growth PM |
| App store reviews (iOS + Android) | Feature frustration, comparison to alternatives, praise | ~15/week | Biased toward extremes; neutral users rarely review | PM team monitors weekly |
| Guide user interviews | Qualitative insight on workflow, income reliability, platform fairness | 4–6/quarter | Recruited from active guides; churned guides rarely participate | Guide Experience PM |
| Adventurer user interviews | Qualitative insight on discovery, booking decision, repeat motivation | 4–6/quarter | Same sampling problem as NPS; churned adventurers not represented | Adventurer Experience PM |

---

## Churn and Retention Signals

**Guide churn signals:**
- No completed booking in 60 days (strongest predictor)
- Listing view rate drops significantly week-over-week (search visibility issue)
- Guide Pro cancellation (high-intent churn signal — Pro guides are most engaged)
- Support ticket about payout dispute followed by reduced activity

**Adventurer churn signals:**
- No second booking within 90 days of first booking (passive churn — no cancellation, just no return)
- Cancellation without rebooking (active signal)
- Push notification opt-out within first 30 days
- NPS detractor score (6 or below) without support ticket (unresolved frustration)

**Adventurer CAC and payback:** Current blended CAC is ~$38 per adventurer. A 10-point improvement in repeat rate (38% → 48%) would add approximately $1.1M GMV at current scale without incremental acquisition spend — making retention the highest-leverage lever available to the team.

**What re-engages lapsed adventurers:**
- Not yet systematically tested with a retention campaign
- User interview feedback suggests personalized suggestions based on past category (e.g., "New surf lessons near you from guides you haven't tried") would resonate
- Repeat booking rate (38%) is entirely organic — adventurers who return do so on their own initiative, not because Terrain prompted them
