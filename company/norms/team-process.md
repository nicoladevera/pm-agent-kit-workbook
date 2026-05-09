# Team Process

## Sprint Cadence

- **Sprint length:** 2 weeks
- **Sprint cycle:** Wednesday to Tuesday
- **Planning:** Tuesday afternoon, first day of new sprint (sprint N-1 closes in the morning, sprint N plans in the afternoon)
- **Standup:** Daily, async in Slack (#terrain-product) by 10am PT; synchronous optional on Tuesdays and Fridays
- **Retro:** Tuesday morning, end of sprint, before planning — 45 minutes; PM facilitates, EM co-facilitates
- **Demo / Sprint review:** Monday, last day of sprint — 30 minutes; cross-functional attendees (marketing, support, design leads); PM presents what shipped, what's next
- **Backlog refinement:** Thursdays, weekly — 45 minutes; PM + EM + 1-2 engineers; stories for sprint N+1 get refined and pointed

---

## Ticket Lifecycle

```
Backlog → Refined → Sprint Ready → In Progress → In Review → Staging → Done
```

- **Backlog:** Story exists, not yet refined. May be vague, unpointed, or missing AC.
- **Refined:** AC written, design attached (if applicable), analytics events named, dependencies identified. Awaiting point estimate.
- **Sprint Ready:** Pointed and accepted into the upcoming sprint plan. All blockers resolved.
- **In Progress:** Engineer has started work. Assigned to one engineer.
- **In Review:** PR open. Code review in progress. May still be on feature branch.
- **Staging:** Merged to main, deployed to staging. PM performs product review. QA performs regression check for affected flows.
- **Done:** PM sign-off complete. Deployed to production (or behind feature flag). Analytics events verified in staging.

---

## Definition of Ready

A story is ready for sprint when all of the following are true:
- Acceptance criteria are written in Given/When/Then format
- Design is attached (Figma link) for any user-facing changes
- Analytics events are named (event name, properties, when triggered)
- No unresolved external dependencies (cross-squad work, platform team changes)
- Story is pointed by the engineering team (Planning Poker or async estimate)

---

## Definition of Done

A story is done when all of the following are true:
- Code merged to main
- Deployed to production or behind a feature flag (Unleash)
- Analytics events firing correctly — verified in staging before deploy
- PM product review complete (test on device or staging environment)
- No P1 or P2 bugs introduced (discovered in staging; P3+ go to backlog)
- If user-facing copy changed: Marketing notified; Legal reviewed if cancellation policy or guide liability is involved

---

## Feature Flags

All new features ship behind Unleash feature flags. The flag lifecycle:
1. **Development:** Flag created in Unleash; feature built behind flag; off by default in production
2. **Staging:** Flag enabled in staging for PM and QA review
3. **Alpha/Beta:** Flag enabled for a specific user segment or percentage
4. **GA:** PM signs off to enable for 100% of users; flag remains in codebase for 2 weeks as kill switch, then deprecated
5. **Deprecation:** Flag removed from code in the following sprint after GA confirmation

---

## Release Process

- **Staging deploys:** Continuous — every merged PR deploys to staging automatically
- **Production releases:** Every Tuesday after sprint close; PM reviews staging before the release cut
- **Hot patches:** For P0 production incidents only; EM authorizes; PM notified immediately; post-mortem within 48 hours
- **iOS / Android releases:** App store submissions happen Tuesday with the sprint close; App Store review typically takes 24–48 hours; Google Play is faster (same-day)

---

## Planning Process

1. **Thursday refinement:** PM reviews upcoming backlog; engineers point stories async or in refinement session
2. **Monday pre-planning:** PM drafts sprint goal and candidate story list; shares with EM by end of day
3. **Tuesday planning:** Squad reviews sprint goal, confirms capacity (accounting for on-call, PTO, ramp-up), selects stories, identifies sprint risks
4. **Sprint goal:** One sentence. Owned by PM. Published in Linear and in #terrain-product Slack at sprint start.
5. **Capacity rule:** Never commit more than 85% of available points. Buffer absorbs bug triage and unplanned requests.
