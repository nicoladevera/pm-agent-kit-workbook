# Data Sources

## Analytics Platform

**Tool:** Amplitude
**Access:** Self-serve for PMs — dashboard creation, funnel analysis, user paths, retention charts. No SQL required for standard analysis.
**What it tracks:** All user events across iOS, Android, and web. Product usage, feature adoption, funnel steps, session data, user properties (guide vs. adventurer, Guide Pro status, account age).
**Key limitation:** 90-day event retention window on the standard plan; events older than 90 days require a Snowflake query. Sampling is on for charts with >1M events — flag to data team if precision matters.
**Event taxonomy:** `object_action` convention — e.g., `listing_viewed`, `booking_completed`, `guide_activated`, `instant_book_toggled`. Full taxonomy in Notion (Terrain workspace → Engineering → Event Taxonomy). New events require PM sign-off before instrumentation.

---

## Data Warehouse / BI

**Tools:** Snowflake (raw data) + Looker (BI layer)
**Access:** Looker is self-serve for PMs — pre-built dashboards and Explores. Snowflake SQL access is available for senior PMs; request credentials from Fernando Lopez (data lead).
**For complex queries:** File a request with Fernando Lopez via Slack (#terrain-data). Typical turnaround: 2–3 business days for structured analysis, 5 days for new dashboard builds. Ad hoc questions in Slack are usually answered same day.
**Key tables:** `bookings`, `guides`, `adventurers`, `experiences`, `reviews`, `cancellations`, `guide_pro_subscriptions`. Schema docs in Notion.

---

## Key Dashboards

| Dashboard | Tool | What it answers | Owner |
|-----------|------|-----------------|-------|
| Booking Funnel | Looker | Search → detail → booking conversion by category, date, and guide type | Adventurer Experience PM |
| Guide Health | Amplitude | Guide activation rate, listing views, booking rate per guide cohort | Guide Experience PM |
| Adventurer Retention | Looker | Repeat booking rate, cohort retention curves, churn signals | Adventurer Experience PM |
| Instant Book Rollout | Amplitude (custom) | Instant Book adoption rate, conversion lift, guide opt-in rate | Adventurer Experience PM |
| GMV & Revenue | Looker | Weekly GMV, take rate, Guide Pro revenue, annualized run rate | VP Product / Data team |
| Cancellation Analysis | Looker | Cancellation rate by initiating party, timing, category, and guide tier | Trust & Safety PM |

---

## Event Taxonomy

**Convention:** `object_action` — object is the entity being acted on, action is what happened.

**Key events for core flows:**

| Event | Triggered when | Key properties |
|-------|---------------|---------------|
| `search_performed` | User submits a search query | query, category, location, result_count |
| `listing_viewed` | User opens an experience listing page | listing_id, guide_id, source (search / recommendation / direct) |
| `booking_initiated` | User taps "Book" or "Request to Book" on a listing | listing_id, guide_id, booking_mode (instant / request) |
| `booking_completed` | Payment confirmed and booking created | booking_id, listing_id, booking_value, booking_mode |
| `booking_cancelled` | Booking cancelled by either party | booking_id, cancelled_by (guide / adventurer), reason, days_until_experience |
| `guide_activated` | Guide publishes their first experience | guide_id, days_since_registration, experience_category |
| `instant_book_toggled` | Guide enables or disables Instant Book on a listing | listing_id, guide_id, new_state (on / off) |
| `review_submitted` | Adventurer submits a post-experience review | booking_id, rating (1–5), has_text_review |

**Where to check instrumentation:** Amplitude's event list. New events are instrumented by engineering and validated by PM before the feature ships.

---

## Feedback Channels

| Channel | Signal type | Volume | Bias | Access |
|---------|-------------|--------|------|--------|
| In-app post-experience rating (1–5 + optional comment) | Satisfaction, guide quality, logistics feedback | ~200 ratings/week | Skews positive; adventurers who had a bad experience often just don't rate | Amplitude event + Looker review dashboard |
| Zendesk support tickets | Problems, not praise; guide-heavy | ~60 tickets/week | Skews guide-side (payout questions, availability issues, cancellation disputes); under-represents silent adventurer churn | Support lead; PM gets weekly summary |
| Quarterly adventurer NPS (in-app survey) | NPS score + open-ended verbatim | ~150 responses/quarter | Surveys active users only — misses churned adventurers entirely | Growth PM; verbatims exported from Delighted |
| App store reviews (iOS + Android) | Feature frustration, comparison to alternatives, praise | ~15 reviews/week across both stores | Biased toward extremes; neutral users don't review; cancellation issues over-represented | PM monitors weekly via AppFollow |
| User interviews (adventurer) | Qualitative insight on discovery, booking decision, repeat behavior | 4–6 interviews/quarter | Recruited from active adventurers; churned users rarely participate | Adventurer Experience PM; notes in Notion |
| User interviews (guide) | Qualitative insight on income reliability, platform friction, payout experience | 4–6 interviews/quarter | Same sampling problem — active guides, not churned | Guide Experience PM; notes in Notion |

---

## Data Request Process

1. **Ad hoc question** (quick metric check, single-event count): Slack Fernando Lopez in #terrain-data. Same-day response for simple queries.
2. **Structured analysis** (cohort analysis, funnel breakdown, multi-table join): File a Linear ticket tagged to the Data team. Use the "Analysis Request" template. 2–3 business day turnaround.
3. **New dashboard** (ongoing metric tracking, new Looker Explore): Linear ticket + sync with Fernando to scope. 5–7 business day turnaround.
4. **New event instrumentation** (adding a new analytics event to the product): PM writes the event spec (name, properties, trigger condition, expected volume) → engineering instruments in the relevant PR → PM validates in staging before merge.
