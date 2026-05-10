# PM Agent Kit Workbook — Curriculum Content

This document is the source of truth for all 20 days of curriculum content. It feeds the HTML day pages and `site/workbook.json`. If content changes, update here first, then sync HTML and JSON. Implementing agents: match tone, depth, and structure to the Day 2 quality anchor (the doc-review day, carried from the project brief appendix).

**Day sequence note:** Days 1 and 2 are `prd-draft` then `doc-review`. Day 1 produces a PRD; Day 2 reviews it.

---

## Day 1 — Turn a Rough Idea Into a Spec
**Week 1: Writing & Thinking | Skill: `prd-draft` | Invocation: `/prd-draft`**

### Skill Overview + Why It Matters

`prd-draft` takes rough input — a problem statement, notes from a stakeholder conversation, a handful of data points, bullet fragments — and drafts a complete PRD. It imposes structure without requiring structured input. You show up with whatever you have; the skill produces a full spec with context, problem statement, objectives, proposed solution, happy and sad paths, acceptance criteria, data requirements, open questions, and assumptions. The output is a working draft, not a final document — but it's a draft you can actually walk into a room with.

PMs reach for this skill when they have a feature direction but not the discipline to structure it, when a stakeholder conversation produced a clear ask but no artifact, or when a deadline is forcing a spec to exist before the PM has had time to think it through properly. It's also useful as a pressure-test for rough ideas — if the skill can't produce a coherent PRD from your notes, the idea probably isn't ready to take to engineering.

Day 1 is `prd-draft` rather than `doc-review` because creating comes before evaluating. On Day 2, you'll review the PRD you produce today — that sequence is more instructive than reviewing a pre-built artifact cold. Starting with production also makes the kit's value immediately tangible: you arrive with notes and leave with a draft spec.

### Sample Prompts

**Basic**
```
/prd-draft

I want to add a feature that lets users filter search results by difficulty level. Here's what I know: users are complaining they can't find activities that match their skill level. Some use "beginner" and some use "intermediate" and the terms mean different things. We want to make search results more relevant.
```

**Advanced**
```
/prd-draft

Here's everything I have on the guide listing setup problem. Please draft a full PRD from this.

---

Slack from Jordan Lee (Guide Experience PM), Tuesday:
"Hey — we've been getting a lot of support tickets from guides who sign up and then go quiet. I've been tagging them in Zendesk and it's mostly two things: they don't know how to write a good listing description (what photos, what price, how to describe skill level), and they don't know if anyone will ever book them. We've never built any in-product guidance. Worth a PRD?"

Exit survey verbatims (guides who registered but never published):
1. "I signed up but the setup form felt overwhelming. I didn't know what to put for price — I didn't want to be too expensive or undersell myself. I just gave up."
2. "I looked at other listings after signing up and mine felt bad by comparison. Didn't know how to make it look professional. Left it as a draft."
3. "I started filling out the listing and got stuck on the cancellation policy section. I didn't understand what the options meant for me financially."

Data point from our last quarterly analysis: 38% of guides who register never publish an experience within 30 days. The team's working hypothesis is setup friction and uncertainty about time-to-first-booking, but we haven't done structured discovery.

Ask from Dana Park (VP Product) in OKR review last week: "I want to know what it would take to get guide listing activation from 62% to 75% by end of Q3. That's the number I care about."

Prior investigation (no formal output):
- There's no in-product guidance on pricing — guides set prices without any reference point for comparable listings in their category.
- There's no listing preview that shows what a "strong" listing looks like vs. a draft.

Constraint: Jordan's squad owns the listing object and the guide onboarding flow. Any changes to the listing setup form need their buy-in and coordination on the shared listing object schema.

My ask: draft a PRD targeting the listing setup guidance problem. The audience for this PRD is Jordan Lee (Guide Experience PM), Aisha Nkomo (Guide Experience EM), Chris Okafor (Adventurer Experience EM), and the cross-squad engineering group. I need something I can walk them through next week.
```

### Reflection Prompts
1. Which sections of the PRD did the skill fill in that you hadn't thought about when you started — and do you agree with how it framed them?
2. Where did the skill make assumptions you'd want to revisit before walking engineering through this?
3. What would the PRD have looked like if you had written it yourself from scratch, without the skill? What's different?

### Day Metadata
```json
{
  "day": 1,
  "week": 1,
  "type": "skill",
  "skill": "prd-draft",
  "invocation": "/prd-draft",
  "mode": null,
  "title": "Turn a Rough Idea Into a Spec",
  "theme": "Writing & Thinking",
  "estimated_minutes": 20,
  "required_inputs": "Any rough description of a product problem or feature direction — notes, bullets, stakeholder messages, data points. The messier the input, the more the skill demonstrates its value.",
  "prompts": {
    "basic": "/prd-draft\n\nI want to add a feature that lets users filter search results by difficulty level. Here's what I know: users are complaining they can't find activities that match their skill level. Some use \"beginner\" and some use \"intermediate\" and the terms mean different things. We want to make search results more relevant.",
    "advanced": "/prd-draft\n\nHere's everything I have on the guide listing setup problem. Please draft a full PRD from this.\n\n---\n\nSlack from Jordan Lee (Guide Experience PM), Tuesday:\n\"Hey — we've been getting a lot of support tickets from guides who sign up and then go quiet. I've been tagging them in Zendesk and it's mostly two things: they don't know how to write a good listing description (what photos, what price, how to describe skill level), and they don't know if anyone will ever book them. We've never built any in-product guidance. Worth a PRD?\"\n\nExit survey verbatims (guides who registered but never published):\n1. \"I signed up but the setup form felt overwhelming. I didn't know what to put for price — I didn't want to be too expensive or undersell myself. I just gave up.\"\n2. \"I looked at other listings after signing up and mine felt bad by comparison. Didn't know how to make it look professional. Left it as a draft.\"\n3. \"I started filling out the listing and got stuck on the cancellation policy section. I didn't understand what the options meant for me financially.\"\n\nData point from our last quarterly analysis: 38% of guides who register never publish an experience within 30 days. The team's working hypothesis is setup friction and uncertainty about time-to-first-booking, but we haven't done structured discovery.\n\nAsk from Dana Park (VP Product) in OKR review last week: \"I want to know what it would take to get guide listing activation from 62% to 75% by end of Q3. That's the number I care about.\"\n\nPrior investigation (no formal output):\n- There's no in-product guidance on pricing — guides set prices without any reference point for comparable listings in their category.\n- There's no listing preview that shows what a \"strong\" listing looks like vs. a draft.\n\nConstraint: Jordan's squad owns the listing object and the guide onboarding flow. Any changes to the listing setup form need their buy-in and coordination on the shared listing object schema.\n\nMy ask: draft a PRD targeting the listing setup guidance problem. The audience for this PRD is Jordan Lee (Guide Experience PM), Aisha Nkomo (Guide Experience EM), Chris Okafor (Adventurer Experience EM), and the cross-squad engineering group. I need something I can walk them through next week."
  },
  "reflection_questions": [
    "Which sections of the PRD did the skill fill in that you hadn't thought about when you started — and do you agree with how it framed them?",
    "Where did the skill make assumptions you'd want to revisit before walking engineering through this?",
    "What would the PRD have looked like if you had written it yourself from scratch, without the skill? What's different?"
  ],
  "expected_output_type": "complete PRD with all standard sections including context, problem, objectives, proposed solution, happy/sad paths, acceptance criteria, data requirements, open questions, and assumptions",
  "saves_to_knowledge": "knowledge/prds/",
  "prerequisites": []
}
```

---

## Day 2 — Evaluate Like a Senior PM
**Week 1: Writing & Thinking | Skill: `doc-review` | Invocation: `/doc-review`**

### Skill Overview + Why It Matters

`doc-review` evaluates any PM document — a PRD, a ticket, a project brief, a tech spec — and returns structured feedback with severity-rated issues and a smell test. You paste in the document (or point to a file), and the skill identifies what's missing, what's vague, and what would cause problems downstream if left unaddressed. It auto-detects the document type, so you don't need to specify format before running it.

PMs produce and review documents constantly, but the review rarely happens with the same rigor as the writing. Teams approve PRDs with undefined success metrics, ship tickets with no edge cases, and brief engineers against specs that leave out the most important constraints. `doc-review` applies a consistent quality bar — the one a strong senior PM would apply — to every artifact you run it against, without fatigue or politeness.

Day 2 uses the PRD you produced on Day 1 as input. That sequence is intentional — you see your own work evaluated by the same standard you'll hold all future documents to. After today, you'll know what questions to ask before you draft, not after.

### Sample Prompts

**Basic**
```
/doc-review

Review this PRD and tell me what's missing:

[paste any existing PRD or spec here]
```

**Advanced**
```
/doc-review

Review this PRD. I'm the Adventurer Experience PM at Terrain, a two-sided marketplace for bookable outdoor experiences — guides list surf lessons, alpine climbs, foraging walks; adventurers discover and book them. The PRD is for a guide listing setup guidance feature intended to raise guide activation from 62% to 75% by Q3. I need this reviewed before I walk Jordan Lee, Aisha Nkomo, Chris Okafor, and the cross-squad engineering group through it on Thursday — flag anything that would cause confusion or require a follow-up meeting to resolve.

[paste the PRD you produced on Day 1 here]
```

*Don't have a Day 1 PRD? Paste any existing spec, ticket, or project brief. The skill auto-detects document type.*

### Reflection Prompts
1. What did the skill flag that you would have missed or let slide in a peer review?
2. Which severity-high issues surprised you — and why do you think they weren't caught when the document was first written?
3. Where in your current work do you have documents that would benefit from this level of review before they go to engineering or leadership?

### Day Metadata
```json
{
  "day": 2,
  "week": 1,
  "type": "skill",
  "skill": "doc-review",
  "invocation": "/doc-review",
  "mode": null,
  "title": "Evaluate Like a Senior PM",
  "theme": "Writing & Thinking",
  "estimated_minutes": 20,
  "required_inputs": "Any PM document — a PRD, a ticket, a project brief, a tech spec. The Day 1 PRD is the natural input, but any artifact works.",
  "prompts": {
    "basic": "/doc-review\n\nReview this PRD and tell me what's missing:\n\n[paste any existing PRD or spec here]",
    "advanced": "/doc-review\n\nReview this PRD. I'm the Adventurer Experience PM at Terrain, a two-sided marketplace for bookable outdoor experiences — guides list surf lessons, alpine climbs, foraging walks; adventurers discover and book them. The PRD is for a guide listing setup guidance feature intended to raise guide activation from 62% to 75% by Q3. I need this reviewed before I walk Jordan Lee, Aisha Nkomo, Chris Okafor, and the cross-squad engineering group through it on Thursday — flag anything that would cause confusion or require a follow-up meeting to resolve.\n\n[paste the PRD you produced on Day 1 here]"
  },
  "reflection_questions": [
    "What did the skill flag that you would have missed or let slide in a peer review?",
    "Which severity-high issues surprised you — and why do you think they weren't caught when the document was first written?",
    "Where in your current work do you have documents that would benefit from this level of review before they go to engineering or leadership?"
  ],
  "expected_output_type": "structured document review with severity-rated feedback, a smell test, and open questions",
  "saves_to_knowledge": null,
  "prerequisites": [
    1
  ]
}
```

---

## Day 3 — Break a Spec Into Shippable Stories
**Week 1: Writing & Thinking | Skill: `generate-tasks` | Invocation: `/generate-tasks`**

### Skill Overview + Why It Matters

`generate-tasks` decomposes a PRD or spec into shippable stories, each scoped to a single deployable unit with Given/When/Then acceptance criteria. It produces an ordered story set, a dependency graph, and an implementation sequence — plus a list of items flagged for PM input: edge cases the spec didn't resolve, data requirements that need explicit instrumentation, and product decisions embedded in acceptance criteria that only the PM can make.

The transition from spec to backlog is where scope and quality erode. Stories get written without acceptance criteria, data requirements get forgotten until after launch, and engineers make product decisions because the spec didn't make them. `generate-tasks` closes that gap systematically — and is explicit about what remains unresolved. Every flag it raises is a conversation you'd otherwise have mid-sprint.

Day 3 follows Day 2 because the PRD you wrote and reviewed is the natural input. You'll see how a document you authored translates into implementation units — and where the spec's gaps become story-level ambiguities. The stories you generate today are what a sprint plan would draw from on Day 4.

### Sample Prompts

**Basic**
```
/generate-tasks

Break this feature description into shippable stories:

We want to add a difficulty rating system so adventurers can filter search results by skill level. Guides set the difficulty level on their listing (beginner, intermediate, advanced). Adventurers can filter by difficulty on search. The filter should persist across sessions.
```

**Advanced**
```
/generate-tasks

Use the guide listing setup guidance PRD from Day 1 as input. Decompose it into sprint-ready stories.

Team context:
- 6 engineers: 2 iOS, 1 Android, 2 backend, 1 QA
- 18–22 story points per sprint
- Single Android engineer — Android work must be sequenced serially, it cannot run in parallel with other Android tickets
- Listing object is owned by Jordan Lee's Guide Experience squad; any changes to listing schema require cross-squad coordination and a separate backend ticket owned by that squad
- Definition of ready requires: AC in Given/When/Then, Figma link for user-facing changes, named analytics events, no unresolved dependencies, estimated

Flag:
- Any story that requires a data tracking counterpart that isn't explicit in the PRD
- Any story where the AC requires a PM decision not yet resolved in the spec
- Any story that touches the shared listing object (needs Jordan's squad coordination)
- Any Android-specific story (serialized, plan accordingly)

[paste the Day 1 PRD here, or describe the guide listing setup guidance feature in detail]
```

### Reflection Prompts
1. Which stories were split differently than you would have split them — and do you agree with the dependency ordering the skill produced?
2. What data stories did the skill add that weren't explicit in the PRD — and would you have remembered them before launch?
3. Where did the skill flag PM input needed, and were those the right calls to escalate?

### Day Metadata
```json
{
  "day": 3,
  "week": 1,
  "type": "skill",
  "skill": "generate-tasks",
  "invocation": "/generate-tasks",
  "mode": null,
  "title": "Break a Spec Into Shippable Stories",
  "theme": "Writing & Thinking",
  "estimated_minutes": 20,
  "required_inputs": "A PRD, spec, or feature description. The Day 1 PRD is the natural input. The skill also works from meeting notes or rough feature descriptions.",
  "prompts": {
    "basic": "/generate-tasks\n\nBreak this feature description into shippable stories:\n\nWe want to add a difficulty rating system so adventurers can filter search results by skill level. Guides set the difficulty level on their listing (beginner, intermediate, advanced). Adventurers can filter by difficulty on search. The filter should persist across sessions.",
    "advanced": "/generate-tasks\n\nUse the guide listing setup guidance PRD from Day 1 as input. Decompose it into sprint-ready stories.\n\nTeam context:\n- 6 engineers: 2 iOS, 1 Android, 2 backend, 1 QA\n- 18–22 story points per sprint\n- Single Android engineer — Android work must be sequenced serially, it cannot run in parallel with other Android tickets\n- Listing object is owned by Jordan Lee's Guide Experience squad; any changes to listing schema require cross-squad coordination and a separate backend ticket owned by that squad\n- Definition of ready requires: AC in Given/When/Then, Figma link for user-facing changes, named analytics events, no unresolved dependencies, estimated\n\nFlag:\n- Any story that requires a data tracking counterpart that isn't explicit in the PRD\n- Any story where the AC requires a PM decision not yet resolved in the spec\n- Any story that touches the shared listing object (needs Jordan's squad coordination)\n- Any Android-specific story (serialized, plan accordingly)\n\n[paste the Day 1 PRD here, or describe the guide listing setup guidance feature in detail]"
  },
  "reflection_questions": [
    "Which stories were split differently than you would have split them — and do you agree with the dependency ordering the skill produced?",
    "What data stories did the skill add that weren't explicit in the PRD — and would you have remembered them before launch?",
    "Where did the skill flag PM input needed, and were those the right calls to escalate?"
  ],
  "expected_output_type": "ordered story set in Given/When/Then format, dependency graph, implementation sequence, and flagged items requiring PM input",
  "saves_to_knowledge": "knowledge/tasks/",
  "prerequisites": [
    1,
    2
  ]
}
```

---

## Day 4 — Allocate Capacity and Set Goals
**Week 1: Writing & Thinking | Skill: `sprint-plan` | Invocation: `/sprint-plan`**

### Skill Overview + Why It Matters

`sprint-plan` has two modes. Analyze mode assesses backlog health — flagging stories that need splitting, stale tickets, missing data stories, dependency conflicts, and oversized items that have been miscategorized as single stories. Draft mode builds a sprint plan: it does the capacity math, selects stories against priorities and constraints, sequences them by dependency, and writes sprint goals as outcomes rather than task lists.

Sprint planning fails in predictable ways — too much scope relative to capacity, carryover items that crowd out new work, goals that describe activity instead of outcomes, and backlog items that never get the scrutiny they'd need to be sprint-ready. `sprint-plan` catches these before the sprint starts. The Analyze mode is especially useful before a planning meeting: it surfaces the backlog problems a team would otherwise spend 40 minutes discovering in the room.

Day 4 is the planning skill in Week 1 because by now you've produced artifacts (Day 1), reviewed them (Day 2), and broken them into stories (Day 3). Sprint planning is where you decide what actually gets built next — it's the moment when all the prior work either becomes committed scope or gets deferred. After this week you'll have run the full writing-to-planning cycle.

### Sample Prompts

**Basic**
```
/sprint-plan

Draft a sprint plan for my team:

Team: 4 engineers, 2-week sprint, ~16 story points capacity.
Goal: finish the user onboarding redesign and start work on search filters.
Backlog: onboarding-01 (8 pts), onboarding-02 (5 pts), search-01 (5 pts), search-02 (3 pts), search-03 (3 pts), tech-debt-01 (2 pts).
Carryover from last sprint: onboarding-01, 60% done.
```

**Advanced**
```
/sprint-plan

Run Analyze mode on this backlog first, then Draft mode for the sprint plan.

Sprint context:
- Sprint length: 2 weeks (Wed–Tue)
- Team capacity: 6 engineers, but Omar L. is on PTO days 3–6 and Elena T. is on on-call rotation at 50% capacity. Effective capacity: approximately 18 points.
- Priority goal: reduce risk for Android GA and instrument Instant Book adoption before rollout expansion.
- Planning capacity rule: never commit above 85% of available points.

Carryover from last sprint:
- AND-142: Payment failure retry state — 80% complete, blocked on QA reproduction (owner: Nina W.). Required for Android GA.
- IB-087: Guide opt-in analytics events — not started, was deprioritized last sprint, required for rollout decision (owner: Nina W.; Fernando Lopez to validate definitions). No estimate yet.

Candidate backlog:
- AND-151: Fix push notification reliability for booking reminders (5 pts) — Android, blocks Android GA
- AND-152: Add payment edge-case regression tests (3 pts) — QA, unblocks AND-142 if QA can repro
- IB-088: Add calendar conflict warning before guide opts into Instant Book (5 pts) — backend + iOS, depends on IB-087 being instrumented first [DEPENDENCY CONFLICT — IB-087 not started but IB-088 is scheduled this sprint]
- IB-089: Add opt-in funnel dashboard events (3 pts) — backend, no Figma needed, this is IB-087's replacement ticket with a cleaner scope
- IB-090: Guide-facing Instant Book education modal (2 pts) — iOS + Android [ANDROID WORK — serialized]
- OPS-044: Support macro update for cancellation policy questions (1 pt) — no engineering, PM + support
- DATA-027: Cancellation reason taxonomy cleanup (3 pts) — backend data, last touched 4 sprints ago [STALE — verify if still relevant]
- DISC-019: Guide listing setup — pricing guidance UI (8 pts) — iOS + backend, no Figma attached yet [NOT READY — missing Figma, missing AC]
- DISC-020: Guide listing setup — example listing preview (13 pts) — iOS + backend + Android [OVERSIZED — likely a multi-sprint epic, needs splitting]
- DISC-021: Guide listing setup — milestone email trigger events (2 pts) — backend data story for DISC-019 [dependency: DISC-019 must ship first]
- DISC-022: Guide listing setup — onboarding checklist UI (5 pts) — iOS only
- AND-153: Datadog alert configuration for Android push reliability (2 pts) — infra, no product AC needed
- RETRO-011: Add retro action item tracking to sprint retrospective template (1 pt) — process, no engineering
- IB-091: Flexible Instant Book advance-notice window — backend schema design (3 pts) — exploratory, no acceptance criteria [NO AC — this is a discovery spike, not a story]
- ARCH-007: Migrate booking service to updated payment SDK (5 pts) — tech debt, 3 sprints old, blocks future payment work [STALE-BUT-LOAD-BEARING — needs prioritization call]
- PM-REQUEST-004: Add "save for later" wishlist feature — requested by Priya Anand (Marketing) mid-sprint, no estimate, no AC, no Figma [NOT READY — new request, not groomed]
```

### Reflection Prompts
1. What did the backlog health analysis surface that you would have discovered — or not discovered — in a planning meeting?
2. How did the sprint goals the skill wrote differ from how you would have framed them — and which framing would be more useful to an engineer reading it on Day 1 of the sprint?
3. Which backlog item did the skill defer that you would have tried to fit in — and was its reasoning right?

### Day Metadata
```json
{
  "day": 4,
  "week": 1,
  "type": "skill",
  "skill": "sprint-plan",
  "invocation": "/sprint-plan",
  "mode": null,
  "title": "Allocate Capacity and Set Goals",
  "theme": "Writing & Thinking",
  "estimated_minutes": 20,
  "required_inputs": "Backlog items with story points, team capacity (with any constraints noted), sprint length, priority goal, and carryover items. The skill stops if capacity or priority input is too thin to plan against.",
  "prompts": {
    "basic": "/sprint-plan\n\nDraft a sprint plan for my team:\n\nTeam: 4 engineers, 2-week sprint, ~16 story points capacity.\nGoal: finish the user onboarding redesign and start work on search filters.\nBacklog: onboarding-01 (8 pts), onboarding-02 (5 pts), search-01 (5 pts), search-02 (3 pts), search-03 (3 pts), tech-debt-01 (2 pts).\nCarryover from last sprint: onboarding-01, 60% done.",
    "advanced": "/sprint-plan\n\nRun Analyze mode on this backlog first, then Draft mode for the sprint plan.\n\nSprint context:\n- Sprint length: 2 weeks (Wed–Tue)\n- Team capacity: 6 engineers, but Omar L. is on PTO days 3–6 and Elena T. is on on-call rotation at 50% capacity. Effective capacity: approximately 18 points.\n- Priority goal: reduce risk for Android GA and instrument Instant Book adoption before rollout expansion.\n- Planning capacity rule: never commit above 85% of available points.\n\nCarryover from last sprint:\n- AND-142: Payment failure retry state — 80% complete, blocked on QA reproduction (owner: Nina W.). Required for Android GA.\n- IB-087: Guide opt-in analytics events — not started, was deprioritized last sprint, required for rollout decision (owner: Nina W.; Fernando Lopez to validate definitions). No estimate yet.\n\nCandidate backlog:\n- AND-151: Fix push notification reliability for booking reminders (5 pts) — Android, blocks Android GA\n- AND-152: Add payment edge-case regression tests (3 pts) — QA, unblocks AND-142 if QA can repro\n- IB-088: Add calendar conflict warning before guide opts into Instant Book (5 pts) — backend + iOS, depends on IB-087 being instrumented first [DEPENDENCY CONFLICT — IB-087 not started but IB-088 is scheduled this sprint]\n- IB-089: Add opt-in funnel dashboard events (3 pts) — backend, no Figma needed, this is IB-087's replacement ticket with a cleaner scope\n- IB-090: Guide-facing Instant Book education modal (2 pts) — iOS + Android [ANDROID WORK — serialized]\n- OPS-044: Support macro update for cancellation policy questions (1 pt) — no engineering, PM + support\n- DATA-027: Cancellation reason taxonomy cleanup (3 pts) — backend data, last touched 4 sprints ago [STALE — verify if still relevant]\n- DISC-019: Guide listing setup — pricing guidance UI (8 pts) — iOS + backend, no Figma attached yet [NOT READY — missing Figma, missing AC]\n- DISC-020: Guide listing setup — example listing preview (13 pts) — iOS + backend + Android [OVERSIZED — likely a multi-sprint epic, needs splitting]\n- DISC-021: Guide listing setup — milestone email trigger events (2 pts) — backend data story for DISC-019 [dependency: DISC-019 must ship first]\n- DISC-022: Guide listing setup — onboarding checklist UI (5 pts) — iOS only\n- AND-153: Datadog alert configuration for Android push reliability (2 pts) — infra, no product AC needed\n- RETRO-011: Add retro action item tracking to sprint retrospective template (1 pt) — process, no engineering\n- IB-091: Flexible Instant Book advance-notice window — backend schema design (3 pts) — exploratory, no acceptance criteria [NO AC — this is a discovery spike, not a story]\n- ARCH-007: Migrate booking service to updated payment SDK (5 pts) — tech debt, 3 sprints old, blocks future payment work [STALE-BUT-LOAD-BEARING — needs prioritization call]\n- PM-REQUEST-004: Add \"save for later\" wishlist feature — requested by Priya Anand (Marketing) mid-sprint, no estimate, no AC, no Figma [NOT READY — new request, not groomed]"
  },
  "reflection_questions": [
    "What did the backlog health analysis surface that you would have discovered — or not discovered — in a planning meeting?",
    "How did the sprint goals the skill wrote differ from how you would have framed them — and which framing would be more useful to an engineer reading it on Day 1 of the sprint?",
    "Which backlog item did the skill defer that you would have tried to fit in — and was its reasoning right?"
  ],
  "expected_output_type": "backlog health report (Analyze mode) followed by sprint goals, capacity math, selected story set, and implementation sequence (Draft mode)",
  "saves_to_knowledge": "knowledge/sprint-plans/",
  "prerequisites": [
    3
  ]
}
```

---

## Day 5 — Assess and Communicate Delivery Health
**Week 1: Writing & Thinking | Skill: `status-update` | Invocation: `/status-update`**

### Skill Overview + Why It Matters

`status-update` has two modes. Analyze mode produces an internal delivery assessment — workstream status, risks, blockers, dependencies, and recommended actions. Draft mode produces audience-calibrated communication leading with the assessment, not a summary of activity. The output format adapts by audience: a VP gets a concise assessment with clear risks and decisions needed; a cross-functional team gets workstream-level detail with dependencies called out.

The failure mode for status updates is describing output rather than making an assessment. "We shipped X, started Y, and will finish Z next sprint" is activity. "We are on track for Android GA with one open risk: the payment edge-case bug. If it doesn't close by end of this sprint, GA slips two weeks" is an assessment. `status-update` enforces that distinction — it leads with delivery health and only describes activity in service of that assessment.

Day 5 closes Week 1 because communication is the output of all the prior work. You drafted, reviewed, decomposed, and planned. Now you communicate the state of that work to someone who wasn't in the room. After this week, you've run the full writing cycle: produce → evaluate → decompose → plan → communicate.

### Sample Prompts

**Basic**
```
/status-update

Draft a status update for my VP.

We're two weeks into a sprint. The main goal was to finish the search filter feature. Search filter backend is done. Frontend is 80% complete but we hit a bug with filter persistence on iOS. We probably won't ship on time. We also finished a small bug fix for the payment flow that wasn't in the sprint goals.
```

**Advanced**
```
/status-update

Draft mode. Audience: Dana Park (VP Product), Jordan Lee (PM, Guide Experience), Priya Anand (Head of Marketing).

Terrain context: I'm the Adventurer Experience PM. We're at sprint close.

Current state:
- Instant Book rollout: eligible guide opt-in remains at 22% despite the education push two weeks ago. Detail-to-booking conversion lift on opted-in listings is still strong at about +32%. Guide concern is calendar risk — they're worried about double-booking private clients. No change in opt-in rate this sprint.
- Android GA: still targeting launch in 6 weeks. Payment edge-case bug (AND-142) remains open — Nina W. is 80% through a fix but QA hasn't been able to reproduce the failure condition consistently. Push notification reliability improved from 91% to 97% in the latest beta build. Remaining blockers: AND-142 closed, AND-151 push notification fix shipped.
- Expanded Guide Pro analytics dashboard: in final QA. No launch blocker identified yet. Targeting beta release next sprint.
- Decision needed: the team needs to decide before next sprint whether to keep pushing opt-in education for Instant Book, build flexible Instant Book (advance-notice window), or mandate Instant Book for eligible guides above the quality threshold. Jordan and I have different views. Dana needs to weigh in.

Risks: if AND-142 isn't resolved by end of next sprint, Android GA slips to 8 weeks. If we don't make the Instant Book decision soon, the rollout expansion planning stalls.

Lead with delivery health assessment, not activity. This is going to Dana Park — she wants to know if we're on track, what's at risk, and what she needs to decide.
```

### Reflection Prompts
1. What did the skill lead with that you wouldn't have led with — and did the framing land correctly for the stated audience?
2. Where did the draft make an assessment call you'd push back on — and what information would change it?
3. What decision did the skill surface that you hadn't explicitly named as a decision in your input?

### Day Metadata
```json
{
  "day": 5,
  "week": 1,
  "type": "skill",
  "skill": "status-update",
  "invocation": "/status-update",
  "mode": null,
  "title": "Assess and Communicate Delivery Health",
  "theme": "Writing & Thinking",
  "estimated_minutes": 20,
  "required_inputs": "Sprint state, workstream status, blockers, risks, and the target audience. The skill requires enough context to make an assessment — thin input produces a caveat-heavy draft.",
  "prompts": {
    "basic": "/status-update\n\nDraft a status update for my VP.\n\nWe're two weeks into a sprint. The main goal was to finish the search filter feature. Search filter backend is done. Frontend is 80% complete but we hit a bug with filter persistence on iOS. We probably won't ship on time. We also finished a small bug fix for the payment flow that wasn't in the sprint goals.",
    "advanced": "/status-update\n\nDraft mode. Audience: Dana Park (VP Product), Jordan Lee (PM, Guide Experience), Priya Anand (Head of Marketing).\n\nTerrain context: I'm the Adventurer Experience PM. We're at sprint close.\n\nCurrent state:\n- Instant Book rollout: eligible guide opt-in remains at 22% despite the education push two weeks ago. Detail-to-booking conversion lift on opted-in listings is still strong at about +32%. Guide concern is calendar risk — they're worried about double-booking private clients. No change in opt-in rate this sprint.\n- Android GA: still targeting launch in 6 weeks. Payment edge-case bug (AND-142) remains open — Nina W. is 80% through a fix but QA hasn't been able to reproduce the failure condition consistently. Push notification reliability improved from 91% to 97% in the latest beta build. Remaining blockers: AND-142 closed, AND-151 push notification fix shipped.\n- Expanded Guide Pro analytics dashboard: in final QA. No launch blocker identified yet. Targeting beta release next sprint.\n- Decision needed: the team needs to decide before next sprint whether to keep pushing opt-in education for Instant Book, build flexible Instant Book (advance-notice window), or mandate Instant Book for eligible guides above the quality threshold. Jordan and I have different views. Dana needs to weigh in.\n\nRisks: if AND-142 isn't resolved by end of next sprint, Android GA slips to 8 weeks. If we don't make the Instant Book decision soon, the rollout expansion planning stalls.\n\nLead with delivery health assessment, not activity. This is going to Dana Park — she wants to know if we're on track, what's at risk, and what she needs to decide."
  },
  "reflection_questions": [
    "What did the skill lead with that you wouldn't have led with — and did the framing land correctly for the stated audience?",
    "Where did the draft make an assessment call you'd push back on — and what information would change it?",
    "What decision did the skill surface that you hadn't explicitly named as a decision in your input?"
  ],
  "expected_output_type": "audience-calibrated status communication leading with delivery health assessment, with workstream status, risks, blockers, and decisions needed",
  "saves_to_knowledge": "knowledge/status-updates/",
  "prerequisites": []
}
```

---

## Day 6 — Map Assumptions Before Committing
**Week 2: Evidence & Discovery | Skill: `discovery-plan` | Invocation: `/discovery-plan`**

### Skill Overview + Why It Matters

`discovery-plan` maps the assumptions behind a problem, ranks them by cost-of-being-wrong, selects the right research method for each assumption, defines evidence thresholds before any research begins (what "validated" and "invalidated" look like in practice), and sequences the work with explicit dependencies. The output is not a solution — it's a map of what you need to learn before you're ready to commit to one.

PMs skip discovery when they feel they already know the answer, or when the schedule doesn't leave room for it. `discovery-plan` is designed for exactly that situation: it makes the assumptions explicit, surfaces which ones are load-bearing, and sizes the research investment against the cost of being wrong. The pre-defined evidence threshold is the most important output — you decide what "good enough to proceed" means before you run the study, not after the data comes back and you're tempted to rationalize.

Day 6 opens Week 2 because evidence comes before analysis. Before synthesizing feedback (Day 7), interpreting data (Day 8), or mapping the competitive landscape (Day 9), you need a framework for what you're trying to learn. The discovery plan defines the question; the rest of the week builds the answer.

### Sample Prompts

**Basic**
```
/discovery-plan

I want to understand why users abandon our checkout flow. We have data showing drop-off at the payment step but we don't know if it's a trust issue, a price-sensitivity issue, or a UX problem. Help me plan what to learn before we start building solutions.
```

**Advanced**
```
/discovery-plan

Problem: guide activation drop-off. 38% of guides who register never publish an experience within 30 days of signup. We don't know if the root cause is setup friction (listing form is too complex), uncertainty about time-to-first-booking (guides don't know if anyone will book them), pricing anxiety (guides don't know what to charge), or something we haven't identified yet.

Decision to inform: whether and how to invest in listing setup guidance, pricing transparency tooling, or a milestone email sequence. These are the three candidate solutions the team is considering. I need to know which problem is actually load-bearing before committing engineering resources.

What's known:
- Exit survey verbatims point to listing setup friction and pricing uncertainty (anecdotal, n≈40 over 6 months)
- Zendesk tickets from guides who never published show "didn't know what to put" as a common theme
- No activation funnel data exists — we don't know where in the listing setup process guides abandon
- Jordan Lee's squad owns the listing object; discovery findings will need to be shared with them before any build decision

What's unknown but assumed:
- The relative weight of friction vs. uncertainty vs. pricing anxiety
- Whether guides who abandon early are qualitatively different from those who complete setup
- Whether the problem is worse in specific experience categories (e.g., guides listing high-risk activities like alpine climbing vs. surf lessons)

Timeline: decision needed before Q3 planning in 6 weeks. Research budget: 4 interviews/week, no paid research panels. Quantitative data requests through Fernando Lopez (Data Lead) take 2–3 days.

Please produce a discovery plan: map assumptions, rank by cost-of-being-wrong, select research methods with pre-defined evidence thresholds, and sequence the work.
```

### Reflection Prompts
1. Which assumption did the skill rank as highest risk — and do you agree that being wrong about that one would be the most expensive mistake?
2. What evidence threshold did it set for "validated" — is that bar high enough to justify a build decision, or is it too easy to clear?
3. What research method did the skill recommend that you wouldn't have reached for — and what would it tell you that your default method wouldn't?

### Day Metadata
```json
{
  "day": 6,
  "week": 2,
  "type": "skill",
  "skill": "discovery-plan",
  "invocation": "/discovery-plan",
  "mode": null,
  "title": "Map Assumptions Before Committing",
  "theme": "Evidence & Discovery",
  "estimated_minutes": 20,
  "required_inputs": "A problem area, what is known vs. assumed, the decision the discovery work is meant to inform, and any timeline or resource constraints. The skill works from narrative input — no structured data required.",
  "prompts": {
    "basic": "/discovery-plan\n\nI want to understand why users abandon our checkout flow. We have data showing drop-off at the payment step but we don't know if it's a trust issue, a price-sensitivity issue, or a UX problem. Help me plan what to learn before we start building solutions.",
    "advanced": "/discovery-plan\n\nProblem: guide activation drop-off. 38% of guides who register never publish an experience within 30 days of signup. We don't know if the root cause is setup friction (listing form is too complex), uncertainty about time-to-first-booking (guides don't know if anyone will book them), pricing anxiety (guides don't know what to charge), or something we haven't identified yet.\n\nDecision to inform: whether and how to invest in listing setup guidance, pricing transparency tooling, or a milestone email sequence. These are the three candidate solutions the team is considering. I need to know which problem is actually load-bearing before committing engineering resources.\n\nWhat's known:\n- Exit survey verbatims point to listing setup friction and pricing uncertainty (anecdotal, n≈40 over 6 months)\n- Zendesk tickets from guides who never published show \"didn't know what to put\" as a common theme\n- No activation funnel data exists — we don't know where in the listing setup process guides abandon\n- Jordan Lee's squad owns the listing object; discovery findings will need to be shared with them before any build decision\n\nWhat's unknown but assumed:\n- The relative weight of friction vs. uncertainty vs. pricing anxiety\n- Whether guides who abandon early are qualitatively different from those who complete setup\n- Whether the problem is worse in specific experience categories (e.g., guides listing high-risk activities like alpine climbing vs. surf lessons)\n\nTimeline: decision needed before Q3 planning in 6 weeks. Research budget: 4 interviews/week, no paid research panels. Quantitative data requests through Fernando Lopez (Data Lead) take 2–3 days.\n\nPlease produce a discovery plan: map assumptions, rank by cost-of-being-wrong, select research methods with pre-defined evidence thresholds, and sequence the work."
  },
  "reflection_questions": [
    "Which assumption did the skill rank as highest risk — and do you agree that being wrong about that one would be the most expensive mistake?",
    "What evidence threshold did it set for 'validated' — is that bar high enough to justify a build decision, or is it too easy to clear?",
    "What research method did the skill recommend that you wouldn't have reached for — and what would it tell you that your default method wouldn't?"
  ],
  "expected_output_type": "assumption map ranked by risk, research plan with pre-defined evidence thresholds per study, sequenced work plan with dependencies and resource requirements",
  "saves_to_knowledge": "knowledge/discovery-plans/",
  "prerequisites": []
}
```

---

## Day 7 — Extract Signal from Customer Voices
**Week 2: Evidence & Discovery | Skill: `user-feedback` | Invocation: `/user-feedback`**

### Skill Overview + Why It Matters

`user-feedback` clusters a pile of customer feedback into themes — each with a frequency count, severity rating, trend direction, source distribution, and 2–3 representative quotes. It separates signal (actionable, recurring, cross-source) from noise (one-time complaints, vague frustrations, off-topic requests), and produces a prioritized list of recommended actions ranked by frequency × severity × trend.

The problem isn't collecting feedback — most product teams have more than they can read. The problem is that unstructured feedback doesn't tell you what to do next. A pile of Zendesk tickets, NPS verbatims, and app reviews looks like chaos until it's clustered. Running this skill on a real feedback corpus once shows you how much signal was sitting in plain sight. The noise call is equally instructive: the skill will tell you what not to act on, and why.

Day 7 follows the discovery plan because the PM now has a framework for what they're looking for. Running user-feedback without that frame produces themes; running it with that frame tests assumptions. Today's exercise does both — and the synthesis you produce here will feed the business case on Day 10.

### Sample Prompts

**Basic**
```
/user-feedback

Here are recent support tickets and reviews. Find the themes and tell me what to do about them:

[paste any batch of customer feedback here]
```

**Advanced**
```
/user-feedback

Synthesize this batch of recent Terrain customer feedback. I'm investigating two areas: guide activation drop-off and adventurer repeat behavior. Find themes prioritized by frequency and severity. For each theme, show source distribution (what % came from each channel) and trend direction if the data supports it. Flag anything you classify as noise and explain why.

---

ZENDESK SUPPORT TICKETS (last 45 days):

[ZD-4821 | Guide | 18 days ago] "I've been trying to set up my listing for two weeks. Every time I get to the pricing section I don't know what to put. There's no reference for what other surf instructors charge. I just guessed and I'm worried I'm way off."

[ZD-4834 | Guide | 17 days ago] "My listing went live 3 weeks ago and I haven't had a single booking. I don't know if my photos are bad or if nobody is finding me. There's no way to see how many people viewed my listing."

[ZD-4852 | Adventurer | 16 days ago] "I requested a booking 3 days ago and the guide still hasn't responded. I already booked something else. Please cancel."

[ZD-4901 | Guide | 14 days ago] "I opted into Instant Book and now I'm getting bookings I didn't plan for. A client texted me a private lesson for the same day and I had to cancel a Terrain booking. There should be a way to set a minimum notice period."

[ZD-4923 | Adventurer | 13 days ago] "I booked a foraging walk and the guide cancelled two days before because of weather. I got a refund but I had already made travel plans. Why can't the guide tell earlier if weather is going to be a problem?"

[ZD-4956 | Guide | 12 days ago] "I want to cancel my Guide Pro subscription. The analytics showed me my listing views went up but I still don't know what to do differently to get more bookings. The data is there but it doesn't tell me anything actionable."

[ZD-4978 | Adventurer | 11 days ago] "The difficulty rating on this kayaking tour said intermediate. I'm an intermediate paddler but the description assumed I knew how to read river currents. I didn't. It was a bad experience."

[ZD-5001 | Guide | 9 days ago] "Getting payouts 3 days after the experience is hard when I'm counting on that income week to week. Other platforms pay faster. Is there any way to speed this up?"

[ZD-5034 | Adventurer | 7 days ago] "I did a really amazing alpine climb last month and I want to go back but I can't find the guide again. I didn't save the listing. Is there a way to see my booking history?"

[ZD-5067 | Guide | 5 days ago] "I got a cancellation from an adventurer 4 hours before our session. I was already at the beach. I got nothing. The 72-hour window feels unfair when I've already committed to the day."

[ZD-5089 | Adventurer | 3 days ago] "I had a great experience last week with a surf lesson. I want to book another one but I'm not sure who to try next. There's no way to see guides similar to the one I used."

[ZD-5102 | Guide | 2 days ago] "My listing has been live for a month. I've had 3 views. I don't know if that's normal or terrible. No benchmarks anywhere."

---

NPS VERBATIMS (last quarterly survey, detractors and passives only):

[NPS 4 | Adventurer] "The experience itself was great but the booking process is stressful. I waited almost 2 days for confirmation. I was comparing options and the guide who confirmed first got my booking — that wasn't even my first choice."

[NPS 3 | Guide] "I like the platform concept but I'm not getting enough bookings to make it worth the 18% fee. I'm starting to use other platforms more."

[NPS 5 | Adventurer] "Good selection of activities but I wish it was easier to tell whether a guide is right for my level. The reviews mention how good the guide is, but not whether a beginner would struggle."

[NPS 4 | Adventurer] "I used Terrain once last year. Good experience. I just forget it exists between trips. I wish it pushed me recommendations based on what I've done."

[NPS 2 | Guide] "The analytics dashboard in Guide Pro is not useful. It shows me views and bookings but doesn't tell me what I should change. I'm canceling after this month."

[NPS 6 | Adventurer] "It's fine. I'd use it again if I remembered it."

[NPS 3 | Guide] "Setup was confusing. I still don't know if my listing looks good compared to others. There's no way to preview how it appears in search."

[NPS 5 | Adventurer] "Would be better if I could see what my friends have booked. I found out a colleague did the same alpine climb I'm considering — that would have been useful to know."

---

APP STORE REVIEWS (iOS + Android, last 30 days, 3 stars and below):

[iOS, 2 stars, 22 days ago] "Great concept but I requested a booking and waited 36 hours. The guide eventually declined. I'd already moved on. Instant Book is the right direction but most guides aren't on it."

[Android, 3 stars, 20 days ago] "App crashes when I try to view my booking history on Android. This is a known issue apparently. Frustrating."

[iOS, 2 stars, 18 days ago] "Why is there no wishlist? I find listings I like and then can't find them again. Basic feature."

[iOS, 3 stars, 15 days ago] "The guide was amazing. The app is a little clunky on the booking confirmation screen. Minor but it feels unfinished."

[Android, 2 stars, 12 days ago] "Push notifications are not reliable on Android. I missed a booking confirmation because the notification never came. Found out when I logged in manually."

[iOS, 1 star, 8 days ago] "I cancelled a booking 60 hours before the experience and didn't get a refund. The policy says 72 hours. This should be clearer — it says '72 hours before' but doesn't specify what timezone."

[iOS, 3 stars, 4 days ago] "Selection is good. Prices are reasonable. App needs some polish but works."

---

POST-BOOKING SURVEYS (last 30 days, adventurers):

[Survey, 3 days post-experience] "The surf lesson was perfect for a beginner. The guide was patient. I'd book again. One thing: I had no idea what to expect before showing up — like what to wear, what to bring. That info wasn't on the listing."

[Survey, 3 days post-experience] "I almost didn't book because I wasn't sure the difficulty level matched me. I emailed the guide through the app to ask and he was helpful, but that felt like extra work."

[Survey, 3 days post-experience] "Really enjoyed it. Shared it on Instagram. Would be cool if Terrain had a way to share directly from the app or tag the guide."

[Survey, 3 days post-experience] "Good experience. I want to come back and do a harder route. Is there a way to see progression options from the same guide?"

[Survey, 3 days post-experience] "Guide cancelled day-of because of weather. Understood, but I had already driven 45 minutes. Some advance warning would help. The guide knew the forecast was uncertain two days before."

[Survey, 3 days post-experience] "Great time. Already recommended Terrain to two friends. Nothing to add."

---

INTERVIEW NOTES AND SUPPORT OBSERVATIONS:

[Guide interview, 3 weeks ago] "I've been on the platform for 8 months. The first two months were really slow. I almost quit. Once I got my first five reviews, bookings picked up a lot. I wish someone had told me that when I signed up."

[Support macro observation, ongoing] "Cancellation contacts spike on Thursday and Friday afternoons before weekend trips, specifically asking about weather and whether the experience will still happen. Guides and adventurers both initiate these contacts."

[Guide interview, 5 weeks ago] "I don't list on Guide Pro because I can't tell if the analytics would actually help me get more bookings. The feature is unclear. What does 'priority search placement' actually mean in practice?"

[Adventurer interview, 2 weeks ago] "I book about 5–6 experiences a year. Terrain is one of three apps I use. I'd use it more if it remembered my preferences and suggested things. Right now I only come back when I'm actively planning a trip."

[Support observation, last 60 days] "Guides who signed up in the last 90 days and haven't published are the source of roughly 30% of 'how do I set up my listing' contacts. Most questions are about pricing and photos."
```

### Reflection Prompts
1. Which theme did the skill surface that you would have classified as noise — and was the skill's read right?
2. What did the source distribution per theme reveal about where signal comes from at Terrain — and how would that change which feedback channels you prioritize?
3. How would you use this synthesis to update the discovery plan from Day 6 — does it confirm the hypotheses, contradict them, or surface a new one?

### Day Metadata
```json
{
  "day": 7,
  "week": 2,
  "type": "skill",
  "skill": "user-feedback",
  "invocation": "/user-feedback",
  "mode": null,
  "title": "Extract Signal from Customer Voices",
  "theme": "Evidence & Discovery",
  "estimated_minutes": 20,
  "required_inputs": "Any batch of customer feedback — support tickets, NPS verbatims, app store reviews, interview notes, survey responses. Volume matters: 30+ items produces meaningfully better clustering than 10.",
  "prompts": {
    "basic": "/user-feedback\n\nHere are recent support tickets and reviews. Find the themes and tell me what to do about them:\n\n[paste any batch of customer feedback here]",
    "advanced": "/user-feedback\n\nSynthesize this batch of recent Terrain customer feedback. I'm investigating two areas: guide activation drop-off and adventurer repeat behavior. Find themes prioritized by frequency and severity. For each theme, show source distribution (what % came from each channel) and trend direction if the data supports it. Flag anything you classify as noise and explain why.\n\n---\n\nZENDESK SUPPORT TICKETS (last 45 days):\n\n[ZD-4821 | Guide | 18 days ago] \"I've been trying to set up my listing for two weeks. Every time I get to the pricing section I don't know what to put. There's no reference for what other surf instructors charge. I just guessed and I'm worried I'm way off.\"\n\n[ZD-4834 | Guide | 17 days ago] \"My listing went live 3 weeks ago and I haven't had a single booking. I don't know if my photos are bad or if nobody is finding me. There's no way to see how many people viewed my listing.\"\n\n[ZD-4852 | Adventurer | 16 days ago] \"I requested a booking 3 days ago and the guide still hasn't responded. I already booked something else. Please cancel.\"\n\n[ZD-4901 | Guide | 14 days ago] \"I opted into Instant Book and now I'm getting bookings I didn't plan for. A client texted me a private lesson for the same day and I had to cancel a Terrain booking. There should be a way to set a minimum notice period.\"\n\n[ZD-4923 | Adventurer | 13 days ago] \"I booked a foraging walk and the guide cancelled two days before because of weather. I got a refund but I had already made travel plans. Why can't the guide tell earlier if weather is going to be a problem?\"\n\n[ZD-4956 | Guide | 12 days ago] \"I want to cancel my Guide Pro subscription. The analytics showed me my listing views went up but I still don't know what to do differently to get more bookings. The data is there but it doesn't tell me anything actionable.\"\n\n[ZD-4978 | Adventurer | 11 days ago] \"The difficulty rating on this kayaking tour said intermediate. I'm an intermediate paddler but the description assumed I knew how to read river currents. I didn't. It was a bad experience.\"\n\n[ZD-5001 | Guide | 9 days ago] \"Getting payouts 3 days after the experience is hard when I'm counting on that income week to week. Other platforms pay faster. Is there any way to speed this up?\"\n\n[ZD-5034 | Adventurer | 7 days ago] \"I did a really amazing alpine climb last month and I want to go back but I can't find the guide again. I didn't save the listing. Is there a way to see my booking history?\"\n\n[ZD-5067 | Guide | 5 days ago] \"I got a cancellation from an adventurer 4 hours before our session. I was already at the beach. I got nothing. The 72-hour window feels unfair when I've already committed to the day.\"\n\n[ZD-5089 | Adventurer | 3 days ago] \"I had a great experience last week with a surf lesson. I want to book another one but I'm not sure who to try next. There's no way to see guides similar to the one I used.\"\n\n[ZD-5102 | Guide | 2 days ago] \"My listing has been live for a month. I've had 3 views. I don't know if that's normal or terrible. No benchmarks anywhere.\"\n\n---\n\nNPS VERBATIMS (last quarterly survey, detractors and passives only):\n\n[NPS 4 | Adventurer] \"The experience itself was great but the booking process is stressful. I waited almost 2 days for confirmation. I was comparing options and the guide who confirmed first got my booking — that wasn't even my first choice.\"\n\n[NPS 3 | Guide] \"I like the platform concept but I'm not getting enough bookings to make it worth the 18% fee. I'm starting to use other platforms more.\"\n\n[NPS 5 | Adventurer] \"Good selection of activities but I wish it was easier to tell whether a guide is right for my level. The reviews mention how good the guide is, but not whether a beginner would struggle.\"\n\n[NPS 4 | Adventurer] \"I used Terrain once last year. Good experience. I just forget it exists between trips. I wish it pushed me recommendations based on what I've done.\"\n\n[NPS 2 | Guide] \"The analytics dashboard in Guide Pro is not useful. It shows me views and bookings but doesn't tell me what I should change. I'm canceling after this month.\"\n\n[NPS 6 | Adventurer] \"It's fine. I'd use it again if I remembered it.\"\n\n[NPS 3 | Guide] \"Setup was confusing. I still don't know if my listing looks good compared to others. There's no way to preview how it appears in search.\"\n\n[NPS 5 | Adventurer] \"Would be better if I could see what my friends have booked. I found out a colleague did the same alpine climb I'm considering — that would have been useful to know.\"\n\n---\n\nAPP STORE REVIEWS (iOS + Android, last 30 days, 3 stars and below):\n\n[iOS, 2 stars, 22 days ago] \"Great concept but I requested a booking and waited 36 hours. The guide eventually declined. I'd already moved on. Instant Book is the right direction but most guides aren't on it.\"\n\n[Android, 3 stars, 20 days ago] \"App crashes when I try to view my booking history on Android. This is a known issue apparently. Frustrating.\"\n\n[iOS, 2 stars, 18 days ago] \"Why is there no wishlist? I find listings I like and then can't find them again. Basic feature.\"\n\n[iOS, 3 stars, 15 days ago] \"The guide was amazing. The app is a little clunky on the booking confirmation screen. Minor but it feels unfinished.\"\n\n[Android, 2 stars, 12 days ago] \"Push notifications are not reliable on Android. I missed a booking confirmation because the notification never came. Found out when I logged in manually.\"\n\n[iOS, 1 star, 8 days ago] \"I cancelled a booking 60 hours before the experience and didn't get a refund. The policy says 72 hours. This should be clearer — it says '72 hours before' but doesn't specify what timezone.\"\n\n[iOS, 3 stars, 4 days ago] \"Selection is good. Prices are reasonable. App needs some polish but works.\"\n\n---\n\nPOST-BOOKING SURVEYS (last 30 days, adventurers):\n\n[Survey, 3 days post-experience] \"The surf lesson was perfect for a beginner. The guide was patient. I'd book again. One thing: I had no idea what to expect before showing up — like what to wear, what to bring. That info wasn't on the listing.\"\n\n[Survey, 3 days post-experience] \"I almost didn't book because I wasn't sure the difficulty level matched me. I emailed the guide through the app to ask and he was helpful, but that felt like extra work.\"\n\n[Survey, 3 days post-experience] \"Really enjoyed it. Shared it on Instagram. Would be cool if Terrain had a way to share directly from the app or tag the guide.\"\n\n[Survey, 3 days post-experience] \"Good experience. I want to come back and do a harder route. Is there a way to see progression options from the same guide?\"\n\n[Survey, 3 days post-experience] \"Guide cancelled day-of because of weather. Understood, but I had already driven 45 minutes. Some advance warning would help. The guide knew the forecast was uncertain two days before.\"\n\n[Survey, 3 days post-experience] \"Great time. Already recommended Terrain to two friends. Nothing to add.\"\n\n---\n\nINTERVIEW NOTES AND SUPPORT OBSERVATIONS:\n\n[Guide interview, 3 weeks ago] \"I've been on the platform for 8 months. The first two months were really slow. I almost quit. Once I got my first five reviews, bookings picked up a lot. I wish someone had told me that when I signed up.\"\n\n[Support macro observation, ongoing] \"Cancellation contacts spike on Thursday and Friday afternoons before weekend trips, specifically asking about weather and whether the experience will still happen. Guides and adventurers both initiate these contacts.\"\n\n[Guide interview, 5 weeks ago] \"I don't list on Guide Pro because I can't tell if the analytics would actually help me get more bookings. The feature is unclear. What does 'priority search placement' actually mean in practice?\"\n\n[Adventurer interview, 2 weeks ago] \"I book about 5–6 experiences a year. Terrain is one of three apps I use. I'd use it more if it remembered my preferences and suggested things. Right now I only come back when I'm actively planning a trip.\"\n\n[Support observation, last 60 days] \"Guides who signed up in the last 90 days and haven't published are the source of roughly 30% of 'how do I set up my listing' contacts. Most questions are about pricing and photos.\""
  },
  "reflection_questions": [
    "Which theme did the skill surface that you would have classified as noise — and was the skill's read right?",
    "What did the source distribution per theme reveal about where signal comes from at Terrain — and how would that change which feedback channels you prioritize?",
    "How would you use this synthesis to update the discovery plan from Day 6 — does it confirm the hypotheses, contradict them, or surface a new one?"
  ],
  "expected_output_type": "clustered feedback themes with frequency, severity, trend, source distribution, and representative quotes; signal vs. noise classification; prioritized recommended actions",
  "saves_to_knowledge": "knowledge/user-feedback/",
  "prerequisites": [
    6
  ]
}
```

---

## Day 8 — Interpret Metrics in Context
**Week 2: Evidence & Discovery | Skill: `data-analysis` | Invocation: `/data-analysis`**

### Skill Overview + Why It Matters

`data-analysis` classifies the analysis type (metric interpretation, funnel analysis, cohort analysis, or anomaly investigation), produces verified insights with cited calculations, and generates 1–3 programmatic visualizations. Every numeric claim references a calculation ID that traces back to a reproducibility bundle — a replayable Python script, raw inputs, derived outputs, and a verification log. The math is checked before the output is delivered, not assumed.

The problem with product data isn't access — most teams have dashboards. The problem is interpretation: a number without context is noise, and context without a number is speculation. `data-analysis` connects them. It also surfaces what the data can't tell you — limitations, confidence intervals, and the hypotheses the data supports without proving. That distinction matters more than the findings themselves.

Day 8 adds the quantitative layer to the evidence week. Day 7 told you what users said; Day 8 tells you what the numbers show. Together they make a defensible claim. The analysis you produce today will become the evidence base for the business case on Day 10.

**Setup note:** This skill requires `matplotlib`. Run `python3 -m pip install matplotlib` before this day if you haven't already (see the setup page).

### Sample Prompts

**Basic**
```
/data-analysis

Here's a simple data table. Tell me what's happening in the booking funnel:

listing_type,search_sessions,detail_views,booking_starts,completed_bookings,cancellations
request_to_book,1200,408,53,46,7
instant_book,300,111,19,17,2

What is the Instant Book conversion lift compared to request-to-book? Show both search-to-booking and detail-to-booking rates, and label the denominator for each.
```

**Advanced**
```
/data-analysis

I have two tables from Fernando Lopez (Data Lead). He exported these from Amplitude + Looker last Tuesday. Please analyze both.

Questions I need answered:
1. What is the Instant Book conversion lift relative to request-to-book on both search-to-booking and detail-to-booking? Label the denominator for each, and note whether the lift is consistent across the 16-week period or changing over time.
2. There appears to be a cancellation anomaly somewhere in the weekly data. Identify which weeks it occurs, estimate the magnitude, and surface any hypotheses about cause.
3. Which experience category has the highest cancellation rate — and does Instant Book reduce cancellations consistently across all categories or only some?
4. Are there any data quality issues I should flag before taking this to a leadership deck?

Please generate visualizations where they add clarity. Cite all calculations.

---

TABLE 1: Weekly Booking Funnel by Listing Type (16 weeks)

week,listing_type,search_sessions,detail_views,booking_starts,completed_bookings,cancellations
1,request_to_book,5200,1768,229,198,27
1,guide_pro_request_to_book,1600,624,90,79,11
2,request_to_book,5350,1819,236,204,28
2,guide_pro_request_to_book,1650,644,93,82,11
3,request_to_book,5500,1870,243,210,29
3,guide_pro_request_to_book,1680,655,95,84,11
4,request_to_book,5600,1904,247,214,30
4,guide_pro_request_to_book,1720,671,97,85,12
5,request_to_book,5750,1955,254,220,30
5,guide_pro_request_to_book,1750,683,99,87,12
6,request_to_book,5900,2006,261,226,31
6,guide_pro_request_to_book,1800,702,102,90,12
7,request_to_book,6050,2057,267,231,32
7,guide_pro_request_to_book,1850,722,105,92,13
8,request_to_book,6200,2108,274,238,33
8,guide_pro_request_to_book,1900,741,107,94,13
9,request_to_book,6000,2040,265,230,32
9,guide_pro_request_to_book,1900,741,107,94,13
9,instant_book,750,278,47,42,4
9,guide_pro_instant_book,270,111,20,18,2
10,request_to_book,5900,2006,261,226,31
10,guide_pro_request_to_book,1880,733,106,93,13
10,instant_book,1100,407,69,62,6
10,guide_pro_instant_book,390,160,29,26,3
11,request_to_book,5800,1972,256,211,37
11,guide_pro_request_to_book,1870,729,106,87,14
11,instant_book,1350,500,85,70,14
11,guide_pro_instant_book,480,197,35,29,6
12,request_to_book,5700,1938,252,208,37
12,guide_pro_request_to_book,1860,725,105,86,15
12,instant_book,1500,555,94,78,14
12,guide_pro_instant_book,530,217,39,32,6
13,request_to_book,5600,1904,247,215,29
13,guide_pro_request_to_book,1850,722,104,92,12
13,instant_book,1800,666,113,102,10
13,guide_pro_instant_book,620,254,46,41,4
14,request_to_book,5400,1836,238,207,28
14,guide_pro_request_to_book,1830,714,103,91,12
14,instant_book,2100,777,132,119,12
14,guide_pro_instant_book,730,299,54,49,5
15,request_to_book,5200,1768,230,200,27
15,guide_pro_request_to_book,1800,702,102,90,12
15,instant_book,2500,925,157,141,15
15,guide_pro_instant_book,880,361,65,58,6
16,request_to_book,5000,1700,221,192,26
16,guide_pro_request_to_book,1780,694,100,88,12
16,instant_book,2900,1073,182,163,18
16,guide_pro_instant_book,1040,426,77,69,7

---

TABLE 2: Booking Funnel by Experience Category (weeks 9–16, beta period only)

category,listing_type,detail_views,booking_starts,completed_bookings,cancellations,avg_booking_value
surf_lessons,request_to_book,4800,682,559,123,95
surf_lessons,instant_book,1800,306,266,35,95
alpine_climbing,request_to_book,2400,312,287,26,420
alpine_climbing,instant_book,900,135,127,8,420
kayaking_tours,request_to_book,3800,494,432,60,140
kayaking_tours,instant_book,1400,238,214,22,140
foraging_walks,request_to_book,1600,192,175,17,75
foraging_walks,instant_book,600,90,84,6,75
fly_fishing,request_to_book,2200,286,243,43,220
fly_fishing,instant_book,750,120,107,13,220
```

### Reflection Prompts
1. Which finding did the skill surface that you would have missed scrolling through a dashboard — and how would that finding change a decision you're currently facing?
2. Where did the skill note a data quality limitation — and would that limitation matter enough to delay a leadership presentation?
3. How would you use this analysis as evidence in the business case you'll build on Day 10 — what claim does it support, and what would make that claim stronger?

### Day Metadata
```json
{
  "day": 8,
  "week": 2,
  "type": "skill",
  "skill": "data-analysis",
  "invocation": "/data-analysis",
  "mode": null,
  "title": "Interpret Metrics in Context",
  "theme": "Evidence & Discovery",
  "estimated_minutes": 25,
  "required_inputs": "A data question plus tabular data (CSV, table, or dashboard export). Requires matplotlib installed: python3 -m pip install matplotlib. See setup page.",
  "prompts": {
    "basic": "/data-analysis\n\nHere's a simple data table. Tell me what's happening in the booking funnel:\n\nlisting_type,search_sessions,detail_views,booking_starts,completed_bookings,cancellations\nrequest_to_book,1200,408,53,46,7\ninstant_book,300,111,19,17,2\n\nWhat is the Instant Book conversion lift compared to request-to-book? Show both search-to-booking and detail-to-booking rates, and label the denominator for each.",
    "advanced": "/data-analysis\n\nI have two tables from Fernando Lopez (Data Lead). He exported these from Amplitude + Looker last Tuesday. Please analyze both.\n\nQuestions I need answered:\n1. What is the Instant Book conversion lift relative to request-to-book on both search-to-booking and detail-to-booking? Label the denominator for each, and note whether the lift is consistent across the 16-week period or changing over time.\n2. There appears to be a cancellation anomaly somewhere in the weekly data. Identify which weeks it occurs, estimate the magnitude, and surface any hypotheses about cause.\n3. Which experience category has the highest cancellation rate — and does Instant Book reduce cancellations consistently across all categories or only some?\n4. Are there any data quality issues I should flag before taking this to a leadership deck?\n\nPlease generate visualizations where they add clarity. Cite all calculations.\n\n---\n\nTABLE 1: Weekly Booking Funnel by Listing Type (16 weeks)\n\nweek,listing_type,search_sessions,detail_views,booking_starts,completed_bookings,cancellations\n1,request_to_book,5200,1768,229,198,27\n1,guide_pro_request_to_book,1600,624,90,79,11\n2,request_to_book,5350,1819,236,204,28\n2,guide_pro_request_to_book,1650,644,93,82,11\n3,request_to_book,5500,1870,243,210,29\n3,guide_pro_request_to_book,1680,655,95,84,11\n4,request_to_book,5600,1904,247,214,30\n4,guide_pro_request_to_book,1720,671,97,85,12\n5,request_to_book,5750,1955,254,220,30\n5,guide_pro_request_to_book,1750,683,99,87,12\n6,request_to_book,5900,2006,261,226,31\n6,guide_pro_request_to_book,1800,702,102,90,12\n7,request_to_book,6050,2057,267,231,32\n7,guide_pro_request_to_book,1850,722,105,92,13\n8,request_to_book,6200,2108,274,238,33\n8,guide_pro_request_to_book,1900,741,107,94,13\n9,request_to_book,6000,2040,265,230,32\n9,guide_pro_request_to_book,1900,741,107,94,13\n9,instant_book,750,278,47,42,4\n9,guide_pro_instant_book,270,111,20,18,2\n10,request_to_book,5900,2006,261,226,31\n10,guide_pro_request_to_book,1880,733,106,93,13\n10,instant_book,1100,407,69,62,6\n10,guide_pro_instant_book,390,160,29,26,3\n11,request_to_book,5800,1972,256,211,37\n11,guide_pro_request_to_book,1870,729,106,87,14\n11,instant_book,1350,500,85,70,14\n11,guide_pro_instant_book,480,197,35,29,6\n12,request_to_book,5700,1938,252,208,37\n12,guide_pro_request_to_book,1860,725,105,86,15\n12,instant_book,1500,555,94,78,14\n12,guide_pro_instant_book,530,217,39,32,6\n13,request_to_book,5600,1904,247,215,29\n13,guide_pro_request_to_book,1850,722,104,92,12\n13,instant_book,1800,666,113,102,10\n13,guide_pro_instant_book,620,254,46,41,4\n14,request_to_book,5400,1836,238,207,28\n14,guide_pro_request_to_book,1830,714,103,91,12\n14,instant_book,2100,777,132,119,12\n14,guide_pro_instant_book,730,299,54,49,5\n15,request_to_book,5200,1768,230,200,27\n15,guide_pro_request_to_book,1800,702,102,90,12\n15,instant_book,2500,925,157,141,15\n15,guide_pro_instant_book,880,361,65,58,6\n16,request_to_book,5000,1700,221,192,26\n16,guide_pro_request_to_book,1780,694,100,88,12\n16,instant_book,2900,1073,182,163,18\n16,guide_pro_instant_book,1040,426,77,69,7\n\n---\n\nTABLE 2: Booking Funnel by Experience Category (weeks 9–16, beta period only)\n\ncategory,listing_type,detail_views,booking_starts,completed_bookings,cancellations,avg_booking_value\nsurf_lessons,request_to_book,4800,682,559,123,95\nsurf_lessons,instant_book,1800,306,266,35,95\nalpine_climbing,request_to_book,2400,312,287,26,420\nalpine_climbing,instant_book,900,135,127,8,420\nkayaking_tours,request_to_book,3800,494,432,60,140\nkayaking_tours,instant_book,1400,238,214,22,140\nforaging_walks,request_to_book,1600,192,175,17,75\nforaging_walks,instant_book,600,90,84,6,75\nfly_fishing,request_to_book,2200,286,243,43,220\nfly_fishing,instant_book,750,120,107,13,220"
  },
  "reflection_questions": [
    "Which finding did the skill surface that you would have missed scrolling through a dashboard — and how would that finding change a decision you're currently facing?",
    "Where did the skill note a data quality limitation — and would that limitation matter enough to delay a leadership presentation?",
    "How would you use this analysis as evidence in the business case you'll build on Day 10 — what claim does it support, and what would make that claim stronger?"
  ],
  "expected_output_type": "classified analysis with cited findings, 1–3 programmatic visualizations, hypotheses ranked by likelihood, limitations, reproducibility bundle",
  "saves_to_knowledge": "knowledge/data-analyses/",
  "prerequisites": []
}
```

---

## Day 9 — Read the Competitive Landscape
**Week 2: Evidence & Discovery | Skill: `competitive-intel` | Invocation: `/competitive-intel`**

### Skill Overview + Why It Matters

`competitive-intel` has three modes. Monitor takes a batch of competitive signals and classifies each as noise, signal, or shift — with threat severity and urgency ratings — then surfaces what changed since the last cycle and recommends actions. Deep Dive takes a specific competitor and area and produces a structured comparison with strategic implications. Research mode does the same as Monitor but sources the signals from the web rather than from PM-provided input.

Most competitive intelligence work is reactive: a sales rep mentions a competitor feature, leadership asks "what are they doing," and the PM scrambles. `competitive-intel` makes it proactive. Monitor mode is designed to be run on a regular cadence — weekly, bi-weekly — turning a pile of newsletters, alerts, and Slack shares into a structured threat assessment that takes 20 minutes instead of an afternoon.

Day 9 sits after the data work because competitive context is most useful when interpreted against your own numbers. Knowing that a competitor offers Instant Book only matters if you know your own Instant Book adoption rate and conversion lift. Today you have both.

### Sample Prompts

**Basic**
```
/competitive-intel

Deep Dive mode. Compare Airbnb Experiences against Terrain on their approach to guide/host onboarding. What can Terrain learn from how Airbnb handles new host acquisition and activation?
```

**Advanced — Part 1 (Monitor)**
```
/competitive-intel

Monitor mode. Here are competitive signals from the last 30 days. Classify each as noise, signal, or shift. Assess threat severity and urgency. Recommend 1–2 actions.

Context: I'm the Adventurer Experience PM at Terrain, a two-sided marketplace for outdoor experiences. Terrain takes an 18% guide commission. Currently debating whether to mandate Instant Book for high-quality guides or introduce a flexible Instant Book option with configurable advance-notice windows.

---

[Signal 1 — Airbnb Experiences | April 14]
Airbnb announced "Experiences Pass" in a product blog post — a bundled credit system where guests can purchase a $150 or $300 pass and apply it toward any Airbnb Experience. Available in US and UK. Hosts receive full payout per booking regardless of pass type. Airbnb absorbs the discount.

[Signal 2 — Airbnb Experiences | April 8]
Airbnb quietly updated its Host quality tiers. Hosts with 4.9+ ratings and 50+ reviews are now labeled "Expert Host" with a badge in search results and priority placement. No announcement — spotted in a host community forum.

[Signal 3 — Viator | April 11]
Viator launched "Viator Independent" — a new onboarding track specifically for independent guides (not companies). Reduced documentation requirements, faster approval (48 hours vs. 5–7 days), and a 15% introductory commission rate for the first 6 months. Press release: "We're opening Viator to the solo guide economy."

[Signal 4 — Viator | April 3]
Viator updated its commission structure for its top 10% of operators (by GMV): reduced from 28% to 22%. No change for independent guides. Announcement made in a partner email.

[Signal 5 — GetYourGuide | April 17]
GetYourGuide announced a US Pacific Northwest expansion — 40 new outdoor and adventure guides onboarded in Washington and Oregon. Press release included a stat: "outdoor adventure is our fastest-growing category in North America." Headcount for their US supply team grew from 3 to 8.

[Signal 6 — GetYourGuide | April 6]
GetYourGuide launched "Booking Protection" — a cancellation insurance product for operators. If an adventurer cancels within 24 hours, the operator receives 50% of the booking value from GetYourGuide's insurance pool. Optional for operators at 2% of listing price per booking.

[Signal 7 — REI Adventures | April 19]
REI Adventures announced a "Local Guides" pilot in 3 cities (Seattle, Denver, Boulder) — independent guides can apply to offer day experiences under the REI brand. REI handles all booking, payment, and customer communication. Guides receive 70% of the booking value. Currently invitation-only, with public applications opening in Q3.

[Signal 8 — Viator | April 1]
Viator added a dark mode to its mobile app. No other changes noted.
```

**Advanced — Part 2 (Deep Dive)**
```
/competitive-intel

Deep Dive mode. Competitor: Viator's new "Viator Independent" track. Area: independent guide onboarding and activation.

Decision context: Terrain is considering whether to lower barriers to guide onboarding to accelerate supply growth. Our current guide activation rate is 62% (guides who register and publish within 30 days). We're targeting 75%. Viator is now directly competing for the independent guide supply we depend on.

What is Viator's approach to the independent guide activation problem? What are their strengths and weaknesses relative to Terrain? What should Terrain learn from this — and what should we not copy?
```

### Reflection Prompts
1. Which competitive signal would you have dismissed as noise before running Monitor mode — and did the skill's classification change how you'd respond to it?
2. What did the Deep Dive on Viator Independent reveal about Terrain's guide onboarding approach that you'd want to act on in the next quarter?
3. Where is Terrain's competitive advantage weakest based on today's analysis — and is that a gap you'd close or accept?

### Day Metadata
```json
{
  "day": 9,
  "week": 2,
  "type": "skill",
  "skill": "competitive-intel",
  "invocation": "/competitive-intel",
  "mode": null,
  "title": "Read the Competitive Landscape",
  "theme": "Evidence & Discovery",
  "estimated_minutes": 20,
  "required_inputs": "For Monitor mode: a batch of competitive signals with source and date. For Deep Dive: competitor name and the specific area to compare. For Research mode: competitor names and optional timeframe.",
  "prompts": {
    "basic": "/competitive-intel\n\nDeep Dive mode. Compare Airbnb Experiences against Terrain on their approach to guide/host onboarding. What can Terrain learn from how Airbnb handles new host acquisition and activation?",
    "advanced": "/competitive-intel\n\nMonitor mode. Here are competitive signals from the last 30 days. Classify each as noise, signal, or shift. Assess threat severity and urgency. Recommend 1–2 actions.\n\nContext: I'm the Adventurer Experience PM at Terrain, a two-sided marketplace for outdoor experiences. Terrain takes an 18% guide commission. Currently debating whether to mandate Instant Book for high-quality guides or introduce a flexible Instant Book option with configurable advance-notice windows.\n\n---\n\n[Signal 1 — Airbnb Experiences | April 14]\nAirbnb announced \"Experiences Pass\" in a product blog post — a bundled credit system where guests can purchase a $150 or $300 pass and apply it toward any Airbnb Experience. Available in US and UK. Hosts receive full payout per booking regardless of pass type. Airbnb absorbs the discount.\n\n[Signal 2 — Airbnb Experiences | April 8]\nAirbnb quietly updated its Host quality tiers. Hosts with 4.9+ ratings and 50+ reviews are now labeled \"Expert Host\" with a badge in search results and priority placement. No announcement — spotted in a host community forum.\n\n[Signal 3 — Viator | April 11]\nViator launched \"Viator Independent\" — a new onboarding track specifically for independent guides (not companies). Reduced documentation requirements, faster approval (48 hours vs. 5–7 days), and a 15% introductory commission rate for the first 6 months. Press release: \"We're opening Viator to the solo guide economy.\"\n\n[Signal 4 — Viator | April 3]\nViator updated its commission structure for its top 10% of operators (by GMV): reduced from 28% to 22%. No change for independent guides. Announcement made in a partner email.\n\n[Signal 5 — GetYourGuide | April 17]\nGetYourGuide announced a US Pacific Northwest expansion — 40 new outdoor and adventure guides onboarded in Washington and Oregon. Press release included a stat: \"outdoor adventure is our fastest-growing category in North America.\" Headcount for their US supply team grew from 3 to 8.\n\n[Signal 6 — GetYourGuide | April 6]\nGetYourGuide launched \"Booking Protection\" — a cancellation insurance product for operators. If an adventurer cancels within 24 hours, the operator receives 50% of the booking value from GetYourGuide's insurance pool. Optional for operators at 2% of listing price per booking.\n\n[Signal 7 — REI Adventures | April 19]\nREI Adventures announced a \"Local Guides\" pilot in 3 cities (Seattle, Denver, Boulder) — independent guides can apply to offer day experiences under the REI brand. REI handles all booking, payment, and customer communication. Guides receive 70% of the booking value. Currently invitation-only, with public applications opening in Q3.\n\n[Signal 8 — Viator | April 1]\nViator added a dark mode to its mobile app. No other changes noted.\n\n---\n\n/competitive-intel\n\nDeep Dive mode. Competitor: Viator's new \"Viator Independent\" track. Area: independent guide onboarding and activation.\n\nDecision context: Terrain is considering whether to lower barriers to guide onboarding to accelerate supply growth. Our current guide activation rate is 62% (guides who register and publish within 30 days). We're targeting 75%. Viator is now directly competing for the independent guide supply we depend on.\n\nWhat is Viator's approach to the independent guide activation problem? What are their strengths and weaknesses relative to Terrain? What should Terrain learn from this — and what should we not copy?"
  },
  "reflection_questions": [
    "Which competitive signal would you have dismissed as noise before running Monitor mode — and did the skill's classification change how you'd respond to it?",
    "What did the Deep Dive on Viator Independent reveal about Terrain's guide onboarding approach that you'd want to act on in the next quarter?",
    "Where is Terrain's competitive advantage weakest based on today's analysis — and is that a gap you'd close or accept?"
  ],
  "expected_output_type": "Monitor: signal classification table with threat severity and urgency, recommended actions. Deep Dive: structured competitor comparison with strategic implications and bottom-line recommendation.",
  "saves_to_knowledge": "knowledge/competition/",
  "prerequisites": []
}
```

---

## Day 10 — Build the Investment Argument
**Week 2: Evidence & Discovery | Skill: `business-case` | Invocation: `/business-case`**

### Skill Overview + Why It Matters

`business-case` builds the argument for or against an initiative: problem-first framing, quantified opportunity, impact sizing with explicit assumptions, a cost model (engineering, opportunity, infrastructure, and ongoing costs), a risk assessment, alternatives considered including Do Nothing, and a recommendation with stated confidence. Then it stress-tests the entire argument with a premortem, a blindspot check, and a conviction assessment.

The stress test is what separates `business-case` from a pitch. A premortem asks: "It's 6 months from now and this initiative failed — what happened?" A blindspot check asks: "What am I assuming that I haven't examined?" A conviction assessment asks: "On a scale of 1–10, how confident are you — and what would change that score?" These three questions force intellectual honesty before the argument goes to leadership. You'll get a stronger business case by surviving the stress test than by avoiding it.

Day 10 is the Week 2 capstone because it pulls together everything built this week. The discovery plan mapped the problem, the feedback synthesis provided user signal, the data analysis provided quantitative grounding, and the competitive work provided market context. The business case is what happens when all of that becomes an investment argument.

### Sample Prompts

**Basic**
```
/business-case

Build a business case for adding a wishlist feature to our app. Users frequently ask for it in reviews. It would let them save listings they're interested in and come back to them later. We're a small team — 4 engineers — and this would take about 3 weeks to build.
```

**Advanced**
```
/business-case

Build the case for investing in the adventurer repeat engagement loop at Terrain.

Problem: once an adventurer completes their first booking, Terrain has no structured re-engagement mechanism. No post-experience push notifications, no personalized suggestions based on past activity, no mechanism to share a completed trip. The 38% adventurer repeat rate (adventurers who complete 2+ bookings in a 12-month window) is entirely organic — adventurers who come back do so because they remember Terrain, not because Terrain brought them back.

Evidence:
- Day 7 feedback synthesis: "I forget to come back unless I'm planning a vacation" was a distinct recurring theme across NPS verbatims and adventurer interviews. Source distribution: adventurer NPS (3 instances), interview notes (2 instances), post-booking survey (1 instance).
- Day 8 data analysis: adventurer repeat rate signal — 38% current (target 45%). No current cohort analysis on time-to-second-booking, but the data analysis flagged this as a data gap worth closing.
- CAC is approximately $38 per adventurer at current scale. A 7-point improvement in repeat rate (38% → 45%) would add approximately $609k GMV annually at current MAU without incremental acquisition spend (calculation: 47,000 MAU × 7% more repeating × $185 average booking value).

Alternatives to consider: Do Nothing (organic repeat remains at 38%); purely promotional re-engagement (email/push campaigns with no product changes — low build cost, likely low lift); full social layer (trip sharing, friend graph, wishlists — high build cost, long timeline, not committed to).

Ask: build the case and run the full stress test. I need to be able to defend this recommendation to Dana Park (VP Product) next quarter.
```

### Reflection Prompts
1. What did the premortem surface as a failure mode you hadn't considered — and how would you mitigate it?
2. Where did the skill's conviction rating land — and do you agree? What would move it up or down by 2 points?
3. What does the Do Nothing alternative tell you that the build case doesn't — and is it actually a viable option?

### Day Metadata
```json
{
  "day": 10,
  "week": 2,
  "type": "skill",
  "skill": "business-case",
  "invocation": "/business-case",
  "mode": null,
  "title": "Build the Investment Argument",
  "theme": "Evidence & Discovery",
  "estimated_minutes": 25,
  "required_inputs": "Problem/opportunity description, available data or sizing signal, alternatives awareness, and a recommendation stance (or openness to the skill generating one). Richer context produces a more defensible stress test.",
  "prompts": {
    "basic": "/business-case\n\nBuild a business case for adding a wishlist feature to our app. Users frequently ask for it in reviews. It would let them save listings they're interested in and come back to them later. We're a small team — 4 engineers — and this would take about 3 weeks to build.",
    "advanced": "/business-case\n\nBuild the case for investing in the adventurer repeat engagement loop at Terrain.\n\nProblem: once an adventurer completes their first booking, Terrain has no structured re-engagement mechanism. No post-experience push notifications, no personalized suggestions based on past activity, no mechanism to share a completed trip. The 38% adventurer repeat rate (adventurers who complete 2+ bookings in a 12-month window) is entirely organic — adventurers who come back do so because they remember Terrain, not because Terrain brought them back.\n\nEvidence:\n- Day 7 feedback synthesis: \"I forget to come back unless I'm planning a vacation\" was a distinct recurring theme across NPS verbatims and adventurer interviews. Source distribution: adventurer NPS (3 instances), interview notes (2 instances), post-booking survey (1 instance).\n- Day 8 data analysis: adventurer repeat rate signal — 38% current (target 45%). No current cohort analysis on time-to-second-booking, but the data analysis flagged this as a data gap worth closing.\n- CAC is approximately $38 per adventurer at current scale. A 7-point improvement in repeat rate (38% → 45%) would add approximately $609k GMV annually at current MAU without incremental acquisition spend (calculation: 47,000 MAU × 7% more repeating × $185 average booking value).\n\nAlternatives to consider: Do Nothing (organic repeat remains at 38%); purely promotional re-engagement (email/push campaigns with no product changes — low build cost, likely low lift); full social layer (trip sharing, friend graph, wishlists — high build cost, long timeline, not committed to).\n\nAsk: build the case and run the full stress test. I need to be able to defend this recommendation to Dana Park (VP Product) next quarter."
  },
  "reflection_questions": [
    "What did the premortem surface as a failure mode you hadn't considered — and how would you mitigate it?",
    "Where did the skill's conviction rating land — and do you agree? What would move it up or down by 2 points?",
    "What does the Do Nothing alternative tell you that the build case doesn't — and is it actually a viable option?"
  ],
  "expected_output_type": "full business case with problem framing, impact sizing, cost model, risk assessment, alternatives, recommendation, and stress test (premortem + blindspot check + conviction assessment)",
  "saves_to_knowledge": "knowledge/business-cases/",
  "prerequisites": [
    6,
    7,
    8
  ]
}
```

---

## Day 11 — Sequence Work and Name Trade-offs
**Week 3: Strategy & Alignment | Skill: `roadmap-prioritization` | Invocation: `/roadmap-prioritization`**

### Skill Overview + Why It Matters

`roadmap-prioritization` compares candidate initiatives on consistent dimensions — problem clarity, evidence quality, impact, cost, dependencies, reversibility, time sensitivity, and cost of waiting — then recommends a sequence with explicit reasoning for each position. It also produces a "What We're Not Doing" section for every deferred initiative: why not now, what would change the decision, and how to frame the deferral so it doesn't re-open every planning cycle.

Prioritization fails when it's implicit. When a PM can't explain in one sentence why Initiative A beats Initiative B, the rationale gets lost — and the next planning cycle starts from scratch. `roadmap-prioritization` forces the comparison to happen on the record, with the reasoning preserved and the trade-offs named. The deferred-initiative section is as important as the sequence: it converts "we decided not to do X" into "we decided not to do X yet, because Y, and Z would change that."

Day 11 opens the strategy week because it sequences the investments built across Weeks 1 and 2. The business cases, feedback syntheses, and data analyses from the past ten days are the inputs. This skill decides what gets executed in what order — and names what's being left behind and why.

### Sample Prompts

**Basic**
```
/roadmap-prioritization

Prioritize these four initiatives for my team next quarter. We have capacity for about two of them:

1. Add difficulty-level filtering to search
2. Build a guide response-time SLA (guides must respond within 24 hours or the booking is auto-declined)
3. Add post-experience share functionality (adventurers can share completed trips)
4. Redesign the onboarding checklist for new guides

We care most about booking conversion and guide retention. Limited data on all four.
```

**Advanced**
```
/roadmap-prioritization

Compare Terrain's four known product problems and recommend a sequence for the quarter after Android GA ships (Android GA target: 6 weeks from now).

Candidate initiatives:
1. Guide activation — listing setup guidance and pricing transparency (from Day 1 PRD). Evidence: Day 7 feedback synthesis confirmed setup friction and pricing uncertainty as recurring themes. Day 6 discovery plan mapped assumptions; structured research not yet complete.
2. Adventurer repeat loop — personalized re-engagement (from Day 10 business case). Evidence: strong; Day 7 and Day 8 analysis support the claim. Sizing: ~$609k GMV uplift for a 7-point improvement.
3. Cancellation rate reduction — policy and tooling (problem: 14% cancellation rate, industry benchmark 7–9%). Evidence: Day 7 synthesis showed weather-related cancellation anxiety as a major theme. No discovery plan yet.
4. Instant Book flexible mode — configurable advance-notice window for guides (from the pending Instant Book rollout decision context). Evidence: 22% opt-in among eligible guides despite about 32% detail-to-booking conversion lift. Guide concern is calendar risk.

Constraints:
- Android GA is non-negotiable and consumes the single Android engineer and significant backend bandwidth for the next 6 weeks
- Instant Book rollout is already in-flight — any Instant Book work must coordinate with Jordan Lee's squad
- Team capacity post-Android GA: approximately 18–22 story points per sprint
- Dana Park's H1 OKRs: GMV growth, guide retention (71% → 80% 12-month retention), adventurer repeat rate (38% → 45%)

Include the full stress test.
```

### Reflection Prompts
1. Did the skill sequence the initiatives the way you would have — and if not, where does your reasoning differ from its reasoning?
2. What did the "What We're Not Doing" framing reveal about the opportunity cost you're accepting with this sequence?
3. What single piece of new information would flip the top priority to second place?

### Day Metadata
```json
{
  "day": 11,
  "week": 3,
  "type": "skill",
  "skill": "roadmap-prioritization",
  "invocation": "/roadmap-prioritization",
  "mode": null,
  "title": "Sequence Work and Name Trade-offs",
  "theme": "Strategy & Alignment",
  "estimated_minutes": 25,
  "required_inputs": "Candidate initiatives with at least a brief description of problem, evidence, and approximate cost/size. Goals or OKRs and capacity constraints improve output quality significantly.",
  "prompts": {
    "basic": "/roadmap-prioritization\n\nPrioritize these four initiatives for my team next quarter. We have capacity for about two of them:\n\n1. Add difficulty-level filtering to search\n2. Build a guide response-time SLA (guides must respond within 24 hours or the booking is auto-declined)\n3. Add post-experience share functionality (adventurers can share completed trips)\n4. Redesign the onboarding checklist for new guides\n\nWe care most about booking conversion and guide retention. Limited data on all four.",
    "advanced": "/roadmap-prioritization\n\nCompare Terrain's four known product problems and recommend a sequence for the quarter after Android GA ships (Android GA target: 6 weeks from now).\n\nCandidate initiatives:\n1. Guide activation — listing setup guidance and pricing transparency (from Day 1 PRD). Evidence: Day 7 feedback synthesis confirmed setup friction and pricing uncertainty as recurring themes. Day 6 discovery plan mapped assumptions; structured research not yet complete.\n2. Adventurer repeat loop — personalized re-engagement (from Day 10 business case). Evidence: strong; Day 7 and Day 8 analysis support the claim. Sizing: ~$609k GMV uplift for a 7-point improvement.\n3. Cancellation rate reduction — policy and tooling (problem: 14% cancellation rate, industry benchmark 7–9%). Evidence: Day 7 synthesis showed weather-related cancellation anxiety as a major theme. No discovery plan yet.\n4. Instant Book flexible mode — configurable advance-notice window for guides (from the pending Instant Book rollout decision context). Evidence: 22% opt-in among eligible guides despite about 32% detail-to-booking conversion lift. Guide concern is calendar risk.\n\nConstraints:\n- Android GA is non-negotiable and consumes the single Android engineer and significant backend bandwidth for the next 6 weeks\n- Instant Book rollout is already in-flight — any Instant Book work must coordinate with Jordan Lee's squad\n- Team capacity post-Android GA: approximately 18–22 story points per sprint\n- Dana Park's H1 OKRs: GMV growth, guide retention (71% → 80% 12-month retention), adventurer repeat rate (38% → 45%)\n\nInclude the full stress test."
  },
  "reflection_questions": [
    "Did the skill sequence the initiatives the way you would have — and if not, where does your reasoning differ from its reasoning?",
    "What did the 'What We're Not Doing' framing reveal about the opportunity cost you're accepting with this sequence?",
    "What single piece of new information would flip the top priority to second place?"
  ],
  "expected_output_type": "candidate comparison table, recommended sequence with per-position reasoning, What We're Not Doing section per deferred initiative, stress test",
  "saves_to_knowledge": "knowledge/roadmaps/",
  "prerequisites": [
    10
  ]
}
```

---

## Day 12 — Capture Decisions That Stay Found
**Week 3: Strategy & Alignment | Skill: `decision-log` | Invocation: `/decision-log`**

### Skill Overview + Why It Matters

`decision-log` has two modes. Capture extracts a decision from past context — a meeting summary, a Slack thread, a brief — and produces a structured decision record: decision statement, who decided, context, options considered, rationale, implications, and reversibility. Structure frames a pending decision: it defines the question precisely, maps the options and trade-offs, assesses reversibility, makes a recommendation if evidence permits, and names the decider and timeline.

Decisions are re-litigated because no one wrote them down, and when someone did write them down, the doc is unfindable six months later. `decision-log` solves both: it structures the record so it's useful when retrieved — not just what was decided but why, what was considered, and what would change the call. Every captured decision appends to a master DECISION-LOG.md in `knowledge/decisions/`, which means the full decision history is in one place.

Day 12 follows roadmap prioritization because the PM just made sequencing calls that should be captured while the reasoning is fresh. The skills in this week build on each other — the prioritization rationale (Day 11) informs the decision log (Day 12), which feeds the alignment memo (Day 13).

### Sample Prompts

**Basic**
```
/decision-log

Capture this decision: our team decided last week to not build a native Android app this year and focus on making our mobile web experience better instead. The main reason was cost — native Android would take 6 months of eng time. Our lead engineer also argued that most of our users are on iOS anyway.
```

**Advanced**
```
/decision-log

Structure mode. This decision is pending and needs to be made before we brief the rollout expansion team next week.

Decision question: Should Terrain mandate Instant Book for all guides who meet the quality threshold (rating >4.7, 10+ completed bookings, no safety incidents in the past 12 months), or introduce a flexible Instant Book mode that lets eligible guides set a configurable minimum advance-notice window (e.g., 2 hours, 4 hours, 24 hours)?

Context: Instant Book is currently in beta with 15% of guides. Only 22% of beta-eligible guides have opted in — far below the 45% target. Detail-to-booking conversion on Instant Book listings is about 32% higher than request-to-book. The Day 8 data analysis confirmed this lift is directionally consistent across all experience categories. The primary guide objection (from Day 7 feedback synthesis and recent guide feedback) is calendar risk: guides worry about double-booking private clients and getting no-shows when they can't vet adventurers before confirming.

Options considered so far:
Option A — Mandate Instant Book for eligible guides: Would maximize conversion lift. Jordan Lee (Guide Experience PM) believes this is the right call. Risk: guides may churn or deactivate listings rather than comply.
Option B — Flexible Instant Book with advance-notice window: Addresses guide calendar concern directly. Reduces churn risk. Slower conversion lift (some guides may set long windows). Requires additional backend work to implement the window logic.
Option C — Continue voluntary opt-in with better education: Lowest build cost. Current trajectory suggests 22% opt-in is a ceiling, not a floor. Conversion impact deferred indefinitely.

Stakeholder positions: Jordan Lee (Option A), Marcus Webb / Legal (concerned about Option A liability exposure if mandatory adoption creates disputes), Priya Anand (wants faster conversion lift, prefers Option A or B). Riley Chen / Trust & Safety (flagged that forced opt-in could increase cancellation disputes if guides feel coerced).

Decider: Dana Park (VP Product).
Decision needed by: end of this week.
Reversibility: Option B is more reversible than Option A (can adjust the window logic; harder to un-mandate).
```

### Reflection Prompts
1. What did structuring the decision reveal about which option actually has stronger evidence behind it?
2. Who does the skill identify as the actual decider — and are the right people involved before that decision gets made?
3. What would you add to this decision record to make it genuinely useful to someone reading it 6 months from now?

### Day Metadata
```json
{
  "day": 12,
  "week": 3,
  "type": "skill",
  "skill": "decision-log",
  "invocation": "/decision-log",
  "mode": null,
  "title": "Capture Decisions That Stay Found",
  "theme": "Strategy & Alignment",
  "estimated_minutes": 20,
  "required_inputs": "For Capture mode: any source containing a past decision (meeting notes, Slack thread, brief). For Structure mode: the decision question, options, stakeholder positions, decider, and deadline.",
  "prompts": {
    "basic": "/decision-log\n\nCapture this decision: our team decided last week to not build a native Android app this year and focus on making our mobile web experience better instead. The main reason was cost — native Android would take 6 months of eng time. Our lead engineer also argued that most of our users are on iOS anyway.",
    "advanced": "/decision-log\n\nStructure mode. This decision is pending and needs to be made before we brief the rollout expansion team next week.\n\nDecision question: Should Terrain mandate Instant Book for all guides who meet the quality threshold (rating >4.7, 10+ completed bookings, no safety incidents in the past 12 months), or introduce a flexible Instant Book mode that lets eligible guides set a configurable minimum advance-notice window (e.g., 2 hours, 4 hours, 24 hours)?\n\nContext: Instant Book is currently in beta with 15% of guides. Only 22% of beta-eligible guides have opted in — far below the 45% target. Detail-to-booking conversion on Instant Book listings is about 32% higher than request-to-book. The Day 8 data analysis confirmed this lift is directionally consistent across all experience categories. The primary guide objection (from Day 7 feedback synthesis and recent guide feedback) is calendar risk: guides worry about double-booking private clients and getting no-shows when they can't vet adventurers before confirming.\n\nOptions considered so far:\nOption A — Mandate Instant Book for eligible guides: Would maximize conversion lift. Jordan Lee (Guide Experience PM) believes this is the right call. Risk: guides may churn or deactivate listings rather than comply.\nOption B — Flexible Instant Book with advance-notice window: Addresses guide calendar concern directly. Reduces churn risk. Slower conversion lift (some guides may set long windows). Requires additional backend work to implement the window logic.\nOption C — Continue voluntary opt-in with better education: Lowest build cost. Current trajectory suggests 22% opt-in is a ceiling, not a floor. Conversion impact deferred indefinitely.\n\nStakeholder positions: Jordan Lee (Option A), Marcus Webb / Legal (concerned about Option A liability exposure if mandatory adoption creates disputes), Priya Anand (wants faster conversion lift, prefers Option A or B). Riley Chen / Trust & Safety (flagged that forced opt-in could increase cancellation disputes if guides feel coerced).\n\nDecider: Dana Park (VP Product).\nDecision needed by: end of this week.\nReversibility: Option B is more reversible than Option A (can adjust the window logic; harder to un-mandate)."
  },
  "reflection_questions": [
    "What did structuring the decision reveal about which option actually has stronger evidence behind it?",
    "Who does the skill identify as the actual decider — and are the right people involved before that decision gets made?",
    "What would you add to this decision record to make it genuinely useful to someone reading it 6 months from now?"
  ],
  "expected_output_type": "structured decision record with decision statement, decider, context, options with trade-offs, reversibility assessment, recommendation (if evidence permits), and implications; appended to master DECISION-LOG.md",
  "saves_to_knowledge": "knowledge/decisions/",
  "prerequisites": [
    11
  ]
}
```

---

## Day 13 — Codify How the Team Operates
**Week 3: Strategy & Alignment | Skill: `alignment-memo` | Invocation: `/alignment-memo`**

### Skill Overview + Why It Matters

`alignment-memo` drafts internal alignment artifacts: operating memos, standards, frameworks, and program proposals. It structures rough notes or a description of a recurring tension into a memo with an executive summary, problem-first context, principles grounded in specific behaviors rather than abstract values, core content adapted to the artifact subtype, application guidance (who does what differently because of this memo), and a calibrated ask (approval, adoption, alignment, or awareness — not all memos ask for the same thing).

The artifacts `alignment-memo` produces are the ones that make a team opinionated about how it operates, not just what it builds. Without them, the same trade-off gets re-debated every sprint. With them, the PM can point to an existing record of the principle and move on. The distinction between ask types matters: asking for adoption means asking people to change their behavior — that's different from asking for awareness, and the memo has to be written accordingly.

Day 13 follows the decision log because once the Instant Book decision is structured, the operating principle behind it needs to be codified before the leadership meeting. The pending decision isn't just about one feature — it's about how Terrain navigates features that benefit one side of the marketplace at a cost to the other. That's the pattern worth preserving in writing.

### Sample Prompts

**Basic**
```
/alignment-memo

We keep having the same debate every sprint about whether to prioritize platform stability work or new feature work. It's slowing us down. Help me write an operating memo that settles how we make this call so we don't have to relitigate it every planning meeting.
```

**Advanced**
```
/alignment-memo

Draft an operating memo for how the Adventurer Experience and Guide Experience squads evaluate features that create a trade-off between one side of the Terrain marketplace and the other.

Context: This tension comes up repeatedly. The most recent example is Instant Book: it improves adventurer detail-to-booking conversion by about 32% but creates guide calendar risk and potential no-shows. The final mandate-vs-flexible-mode decision is still pending, and the debate has already taken three weeks and escalated to Dana Park. We need a working agreement so future trade-offs can be evaluated faster and more consistently.

The memo should establish:
- How we frame guide/adventurer trade-offs when evaluating a feature (not a formula — a shared vocabulary and set of questions)
- What evidence threshold is required before a trade-off decision can be made at the PM level vs. escalated to Dana
- How the two squads (Adventurer Experience and Guide Experience) coordinate on features that touch both sides
- What "good enough" looks like for a decision that helps one side at a cost to the other

Audience: Jordan Lee (Guide Experience PM) and me (Adventurer Experience PM), plus Dana Park as the approving authority on the escalation threshold.
Ask: adoption — this is a working agreement between the two PM squads, not a company policy. Dana needs to agree on the escalation threshold section only.
Include 2–3 concrete application examples from current work (Instant Book, guide activation, cancellation policy).
```

### Reflection Prompts
1. Which principle did the skill articulate that you hadn't explicitly named before — and would your team actually adopt it, or is it aspirational?
2. What's the scenario where this memo fails — the specific situation where the principles don't resolve the tension?
3. What did the skill get wrong about the "ask" — and why does that matter for whether this memo actually changes behavior?

### Day Metadata
```json
{
  "day": 13,
  "week": 3,
  "type": "skill",
  "skill": "alignment-memo",
  "invocation": "/alignment-memo",
  "mode": null,
  "title": "Codify How the Team Operates",
  "theme": "Strategy & Alignment",
  "estimated_minutes": 20,
  "required_inputs": "A recurring tension, process gap, or decision pattern to codify. Rough notes, a Slack thread summary, or a description of the problem. The skill adapts to subtype: operating memo, standard, framework, or proposal.",
  "prompts": {
    "basic": "/alignment-memo\n\nWe keep having the same debate every sprint about whether to prioritize platform stability work or new feature work. It's slowing us down. Help me write an operating memo that settles how we make this call so we don't have to relitigate it every planning meeting.",
    "advanced": "/alignment-memo\n\nDraft an operating memo for how the Adventurer Experience and Guide Experience squads evaluate features that create a trade-off between one side of the Terrain marketplace and the other.\n\nContext: This tension comes up repeatedly. The most recent example is Instant Book: it improves adventurer detail-to-booking conversion by about 32% but creates guide calendar risk and potential no-shows. The final mandate-vs-flexible-mode decision is still pending, and the debate has already taken three weeks and escalated to Dana Park. We need a working agreement so future trade-offs can be evaluated faster and more consistently.\n\nThe memo should establish:\n- How we frame guide/adventurer trade-offs when evaluating a feature (not a formula — a shared vocabulary and set of questions)\n- What evidence threshold is required before a trade-off decision can be made at the PM level vs. escalated to Dana\n- How the two squads (Adventurer Experience and Guide Experience) coordinate on features that touch both sides\n- What \"good enough\" looks like for a decision that helps one side at a cost to the other\n\nAudience: Jordan Lee (Guide Experience PM) and me (Adventurer Experience PM), plus Dana Park as the approving authority on the escalation threshold.\nAsk: adoption — this is a working agreement between the two PM squads, not a company policy. Dana needs to agree on the escalation threshold section only.\nInclude 2–3 concrete application examples from current work (Instant Book, guide activation, cancellation policy)."
  },
  "reflection_questions": [
    "Which principle did the skill articulate that you hadn't explicitly named before — and would your team actually adopt it, or is it aspirational?",
    "What's the scenario where this memo fails — the specific situation where the principles don't resolve the tension?",
    "What did the skill get wrong about the 'ask' — and why does that matter for whether this memo actually changes behavior?"
  ],
  "expected_output_type": "structured alignment memo with executive summary, problem context, principles, core content adapted to subtype, application guidance with specific examples, and calibrated ask",
  "saves_to_knowledge": "knowledge/memos/",
  "prerequisites": [
    12
  ]
}
```

---

## Day 14 — Arrive Ready to Decide
**Week 3: Strategy & Alignment | Skill: `meeting-brief` | Invocation: `/meeting-brief`**

### Skill Overview + Why It Matters

`meeting-brief` prepares a pre-meeting document by first confirming the objective (what should be true after this meeting that isn't true before it), then mapping each attendee's stake in the outcome, structuring the agenda with current status and open questions per item, and making decisions explicit: the question being decided, the options, and the named decider. Pre-reads are linked or named, not summarized in the brief itself.

Meetings fail when attendees arrive with different mental models of what the meeting is for. A brief that names the decision, states who makes it, and surfaces the context needed to make it converts a discussion into a decision. The attendee stakes table is the part PMs most often skip — it forces the PM to think about what each person needs from the meeting before the meeting starts, which changes both how the brief is written and who should actually be in the room.

Day 14 follows the alignment memo because the PM has now written the operating principle (Day 13) and structured the pending decision (Day 12). Today they prepare for the leadership meeting where the decision gets made. The brief is the pre-read.

### Sample Prompts

**Basic**
```
/meeting-brief

Prepare a brief for this meeting:

Meeting: Product team weekly sync, 45 minutes
Attendees: VP Product (Dana), 2 PMs (me + Jordan), Head of Engineering (Sam), Head of Design (Mia)
Goal: decide whether to pause the current sprint to address a critical bug in the payment flow, or keep the sprint going and address it next sprint
Context: the bug causes some users to see a duplicate charge. It's rare (0.1% of transactions) but affects real users. The fix is about 3 days of engineering work.
```

**Advanced**
```
/meeting-brief

Prepare a pre-meeting brief for this leadership decision meeting.

Meeting name: Instant Book Rollout Strategy — Decision Meeting
Date: This Thursday, 45 minutes
Objective: Leave with a decision on whether to mandate Instant Book for eligible guides, introduce flexible Instant Book, or continue voluntary opt-in. Dana Park makes the call.

Attendees and stakes:
- Dana Park (VP Product) — decision-maker; cares about GMV growth and guide retention; has seen the opt-in data but not the Day 8 funnel analysis
- Sam Rivera (Head of Engineering) — technical risk; needs to understand build complexity for flexible Instant Book vs. mandate enforcement logic
- Jordan Lee (PM, Guide Experience) — guide-side advocate; strongly favors the mandate; has direct relationships with the guides raising concerns
- Priya Anand (Head of Marketing) — launch timing; needs 2 weeks lead time for any GA announcement; faster decision = more runway

Current state (as of this morning):
- 22% of eligible guides opted into Instant Book despite targeting 45%
- About 32% detail-to-booking conversion lift on Instant Book listings (confirmed in Day 8 analysis)
- Guide concerns: calendar risk, double-booking private clients, no advance-notice minimum
- Day 12 decision log has the full options comparison and stakeholder positions

Pre-reads available: Day 12 decision log (Notion), Day 8 data analysis summary, Day 13 alignment memo draft

Decision question: Mandate vs. Flexible Instant Book vs. Continue voluntary opt-in
Decider: Dana Park
Not a decision in this meeting: the rollout timeline, which is downstream of the option chosen
```

### Reflection Prompts
1. What did the stakeholder stakes section surface about the meeting that you hadn't explicitly considered when you scheduled it?
2. Is the decision framing the skill produced the right one — or is there a prior decision that hasn't been made that's actually blocking this one?
3. Would the brief as written make each attendee actually read the pre-reads? What would make it more compelling to do so?

### Day Metadata
```json
{
  "day": 14,
  "week": 3,
  "type": "skill",
  "skill": "meeting-brief",
  "invocation": "/meeting-brief",
  "mode": null,
  "title": "Arrive Ready to Decide",
  "theme": "Strategy & Alignment",
  "estimated_minutes": 20,
  "required_inputs": "Meeting name and objective, attendee list, decision to be made, current state of the topic, and any pre-reads or prior artifacts. The skill requires a clear decision question — if the meeting doesn't have one, it will surface that first.",
  "prompts": {
    "basic": "/meeting-brief\n\nPrepare a brief for this meeting:\n\nMeeting: Product team weekly sync, 45 minutes\nAttendees: VP Product (Dana), 2 PMs (me + Jordan), Head of Engineering (Sam), Head of Design (Mia)\nGoal: decide whether to pause the current sprint to address a critical bug in the payment flow, or keep the sprint going and address it next sprint\nContext: the bug causes some users to see a duplicate charge. It's rare (0.1% of transactions) but affects real users. The fix is about 3 days of engineering work.",
    "advanced": "/meeting-brief\n\nPrepare a pre-meeting brief for this leadership decision meeting.\n\nMeeting name: Instant Book Rollout Strategy — Decision Meeting\nDate: This Thursday, 45 minutes\nObjective: Leave with a decision on whether to mandate Instant Book for eligible guides, introduce flexible Instant Book, or continue voluntary opt-in. Dana Park makes the call.\n\nAttendees and stakes:\n- Dana Park (VP Product) — decision-maker; cares about GMV growth and guide retention; has seen the opt-in data but not the Day 8 funnel analysis\n- Sam Rivera (Head of Engineering) — technical risk; needs to understand build complexity for flexible Instant Book vs. mandate enforcement logic\n- Jordan Lee (PM, Guide Experience) — guide-side advocate; strongly favors the mandate; has direct relationships with the guides raising concerns\n- Priya Anand (Head of Marketing) — launch timing; needs 2 weeks lead time for any GA announcement; faster decision = more runway\n\nCurrent state (as of this morning):\n- 22% of eligible guides opted into Instant Book despite targeting 45%\n- About 32% detail-to-booking conversion lift on Instant Book listings (confirmed in Day 8 analysis)\n- Guide concerns: calendar risk, double-booking private clients, no advance-notice minimum\n- Day 12 decision log has the full options comparison and stakeholder positions\n\nPre-reads available: Day 12 decision log (Notion), Day 8 data analysis summary, Day 13 alignment memo draft\n\nDecision question: Mandate vs. Flexible Instant Book vs. Continue voluntary opt-in\nDecider: Dana Park\nNot a decision in this meeting: the rollout timeline, which is downstream of the option chosen"
  },
  "reflection_questions": [
    "What did the stakeholder stakes section surface about the meeting that you hadn't explicitly considered when you scheduled it?",
    "Is the decision framing the skill produced the right one — or is there a prior decision that hasn't been made that's actually blocking this one?",
    "Would the brief as written make each attendee actually read the pre-reads? What would make it more compelling to do so?"
  ],
  "expected_output_type": "pre-meeting brief with objective, attendee stakes table, structured agenda with current status and open questions, decisions section with named decider and options, and pre-reads list",
  "saves_to_knowledge": "knowledge/meeting-briefs/",
  "prerequisites": [
    12,
    13
  ]
}
```

---

## Day 15 — Find Patterns Before They Become Permanent
**Week 3: Strategy & Alignment | Skill: `retro-synthesis` | Invocation: `/retro-synthesis`**

### Skill Overview + Why It Matters

`retro-synthesis` processes retrospective notes — one or many — and produces a pattern analysis rather than a summary. Each recurring pattern is named, mapped to the sprints where it appeared, and classified as improving, stable, or getting worse. Action items are tracked across retros: resolved items are acknowledged; items that appear in multiple sprints without resolution are flagged with a count. With a single retro, the skill surfaces themes. With four or more, it surfaces systemic problems.

Individual retros produce action items that get written down and forgotten. `retro-synthesis` with multiple retros produces patterns — which are different in kind. A problem that appeared in three sprints isn't something to action-item; it's something to understand as a structural failure. The skill forces that distinction, and the follow-through tracker makes it impossible to pretend that repeated inaction is just an oversight.

Day 15 closes the strategy week because strategy is only as good as the process that executes it. The PM spent a week prioritizing, deciding, and aligning. Today they look back at what their team's process is actually producing and what it keeps failing to fix.

### Sample Prompts

**Basic**
```
/retro-synthesis

Here are notes from two recent retrospectives. Find patterns and track action item follow-through:

Retro 1 — Sprint 4: Went well: deployment pipeline is much faster. Didn't go well: we merged a PR without a review and it caused a production incident. Action: enforce required reviewers in GitHub. Owner: Dev Lead.

Retro 2 — Sprint 5: Went well: no production incidents. Didn't go well: the required reviewers rule was set up but people are bypassing it for "small" changes. Action: team agreement on what counts as "small." Owner: Dev Lead. Status: not started (same action as last sprint).
```

**Advanced**
```
/retro-synthesis

Synthesize these five retrospectives. Find recurring patterns with trend classification (improving / stable / getting worse). Track action item follow-through across all five. Identify the 1–2 focus areas that most need attention next quarter.

---

RETRO: Instant Book Beta — Sprint 14
Went well: conversion lift was clear in early data; guide interviews surfaced concrete adoption blockers.
Didn't go well: analytics events were added after launch, so early funnel data is incomplete and we can't measure the first two weeks of the beta properly. Support team learned about the Instant Book rollout from customer tickets — not from us.
Action items:
- Define instrumentation requirements before beta launch, not after. Owner: Fernando Lopez (Data). Status: not started.
- Create internal comms checklist for rollout coordination with support. Owner: PM (me). Status: in progress.

---

RETRO: Android GA — Sprint 15
Went well: crash rate improved significantly; QA caught payment issues before public launch.
Didn't go well: scope changed mid-sprint when leadership asked for push notification parity with iOS. We had to drop a planned story to accommodate. Payment edge cases were more complex than estimated — the team underestimated by roughly 4 points.
Action items:
- Create launch-readiness checklist for mobile releases. Owner: Chris Okafor (EM). Status: in progress.
- Establish scope freeze protocol: no new scope in sprint after Day 3. Owner: Chris Okafor (EM). Status: not started.

---

RETRO: Expanded Guide Pro Analytics Dashboard — Sprint 16
Went well: Guide Pro beta users liked the listing view data; no significant bugs in QA.
Didn't go well: dashboard shipped with metrics but no recommendations, so guides don't know what action to take. PM and design disagreed late in the sprint on whether the analytics should be prescriptive — we should have resolved this in the PRD. Analytics events on the dashboard itself weren't instrumented at launch.
Action items:
- Define "actionable analytics" standard before adding new dashboard modules. Owner: Product. Status: not started.
- Analytics instrumentation checklist: add dashboard event requirements to Definition of Done. Owner: Fernando Lopez (Data). Status: not started (Fernando now has two open instrumentation action items).

---

RETRO: Instant Book Rollout Expansion — Sprint 17
Went well: guide education modal shipped on schedule; guide opt-in improved from 22% to 27% after modal launch. Data from the modal funnel was clean.
Didn't go well: IB-089 (opt-in funnel analytics events) fired inconsistently on Android — the Android implementation had a timing bug that caused some events to drop. We didn't catch this in QA because Android test coverage for analytics events is thin. Pattern: analytics gaps appearing in every launch.
Action items:
- IB-087 (Guide opt-in analytics) — reopened; still unresolved from Sprint 14. Owner: Nina W. Status: reopened.
- Add analytics event testing to Android QA checklist. Owner: Elena T. Status: not started.
- AND-142 (Payment failure retry state) — closed. Resolved by Nina W. in Sprint 17.

---

RETRO: Android GA Prep — Sprint 18
Went well: payment edge-case regression suite is green; push notification reliability at 98%; Android GA looks solid.
Didn't go well: scope of Android GA grew mid-sprint when Priya Anand (Marketing) requested a push notification campaign flow not in the original GA spec. We accommodated it but dropped a monitoring improvement ticket. The launch-readiness checklist (action item from Sprint 15, owner Chris) was created but wasn't actually used during GA planning — the team didn't know it existed.
Action items:
- Launch checklist adoption: the artifact exists but isn't operationalized. Third sprint this pattern appears in some form. Owner: Product. Status: not started.
- Scope intake process: mid-sprint additions from stakeholders need a triage step before acceptance. Owner: Chris Okafor. Status: not started (same as Sprint 15 scope freeze protocol — different framing, same underlying problem).
- Priya Anand comms process: establish a pre-sprint window for marketing to surface launch requirements. Owner: PM + Priya. Status: not started.
```

### Reflection Prompts
1. Which pattern did the skill classify as "getting worse" — and do you agree with that read based on the evidence across all five sprints?
2. What unaddressed action item has the highest compounding cost if it goes unfixed another quarter — and why hasn't it been fixed?
3. Where in your real team's retro process would this synthesis change what gets prioritized — and what's getting in the way of doing it this way now?

### Day Metadata
```json
{
  "day": 15,
  "week": 3,
  "type": "skill",
  "skill": "retro-synthesis",
  "invocation": "/retro-synthesis",
  "mode": null,
  "title": "Find Patterns Before They Become Permanent",
  "theme": "Strategy & Alignment",
  "estimated_minutes": 20,
  "required_inputs": "One or more retrospective notes. Volume matters: 1 retro produces themes; 4+ retros produce patterns and follow-through data. Include action item owner and status per sprint if available.",
  "prompts": {
    "basic": "/retro-synthesis\n\nHere are notes from two recent retrospectives. Find patterns and track action item follow-through:\n\nRetro 1 — Sprint 4: Went well: deployment pipeline is much faster. Didn't go well: we merged a PR without a review and it caused a production incident. Action: enforce required reviewers in GitHub. Owner: Dev Lead.\n\nRetro 2 — Sprint 5: Went well: no production incidents. Didn't go well: the required reviewers rule was set up but people are bypassing it for \"small\" changes. Action: team agreement on what counts as \"small.\" Owner: Dev Lead. Status: not started (same action as last sprint).",
    "advanced": "/retro-synthesis\n\nSynthesize these five retrospectives. Find recurring patterns with trend classification (improving / stable / getting worse). Track action item follow-through across all five. Identify the 1–2 focus areas that most need attention next quarter.\n\n---\n\nRETRO: Instant Book Beta — Sprint 14\nWent well: conversion lift was clear in early data; guide interviews surfaced concrete adoption blockers.\nDidn't go well: analytics events were added after launch, so early funnel data is incomplete and we can't measure the first two weeks of the beta properly. Support team learned about the Instant Book rollout from customer tickets — not from us.\nAction items:\n- Define instrumentation requirements before beta launch, not after. Owner: Fernando Lopez (Data). Status: not started.\n- Create internal comms checklist for rollout coordination with support. Owner: PM (me). Status: in progress.\n\n---\n\nRETRO: Android GA — Sprint 15\nWent well: crash rate improved significantly; QA caught payment issues before public launch.\nDidn't go well: scope changed mid-sprint when leadership asked for push notification parity with iOS. We had to drop a planned story to accommodate. Payment edge cases were more complex than estimated — the team underestimated by roughly 4 points.\nAction items:\n- Create launch-readiness checklist for mobile releases. Owner: Chris Okafor (EM). Status: in progress.\n- Establish scope freeze protocol: no new scope in sprint after Day 3. Owner: Chris Okafor (EM). Status: not started.\n\n---\n\nRETRO: Expanded Guide Pro Analytics Dashboard — Sprint 16\nWent well: Guide Pro beta users liked the listing view data; no significant bugs in QA.\nDidn't go well: dashboard shipped with metrics but no recommendations, so guides don't know what action to take. PM and design disagreed late in the sprint on whether the analytics should be prescriptive — we should have resolved this in the PRD. Analytics events on the dashboard itself weren't instrumented at launch.\nAction items:\n- Define \"actionable analytics\" standard before adding new dashboard modules. Owner: Product. Status: not started.\n- Analytics instrumentation checklist: add dashboard event requirements to Definition of Done. Owner: Fernando Lopez (Data). Status: not started (Fernando now has two open instrumentation action items).\n\n---\n\nRETRO: Instant Book Rollout Expansion — Sprint 17\nWent well: guide education modal shipped on schedule; guide opt-in improved from 22% to 27% after modal launch. Data from the modal funnel was clean.\nDidn't go well: IB-089 (opt-in funnel analytics events) fired inconsistently on Android — the Android implementation had a timing bug that caused some events to drop. We didn't catch this in QA because Android test coverage for analytics events is thin. Pattern: analytics gaps appearing in every launch.\nAction items:\n- IB-087 (Guide opt-in analytics) — reopened; still unresolved from Sprint 14. Owner: Nina W. Status: reopened.\n- Add analytics event testing to Android QA checklist. Owner: Elena T. Status: not started.\n- AND-142 (Payment failure retry state) — closed. Resolved by Nina W. in Sprint 17.\n\n---\n\nRETRO: Android GA Prep — Sprint 18\nWent well: payment edge-case regression suite is green; push notification reliability at 98%; Android GA looks solid.\nDidn't go well: scope of Android GA grew mid-sprint when Priya Anand (Marketing) requested a push notification campaign flow not in the original GA spec. We accommodated it but dropped a monitoring improvement ticket. The launch-readiness checklist (action item from Sprint 15, owner Chris) was created but wasn't actually used during GA planning — the team didn't know it existed.\nAction items:\n- Launch checklist adoption: the artifact exists but isn't operationalized. Third sprint this pattern appears in some form. Owner: Product. Status: not started.\n- Scope intake process: mid-sprint additions from stakeholders need a triage step before acceptance. Owner: Chris Okafor. Status: not started (same as Sprint 15 scope freeze protocol — different framing, same underlying problem).\n- Priya Anand comms process: establish a pre-sprint window for marketing to surface launch requirements. Owner: PM + Priya. Status: not started."
  },
  "reflection_questions": [
    "Which pattern did the skill classify as 'getting worse' — and do you agree with that read based on the evidence across all five sprints?",
    "What unaddressed action item has the highest compounding cost if it goes unfixed another quarter — and why hasn't it been fixed?",
    "Where in your real team's retro process would this synthesis change what gets prioritized — and what's getting in the way of doing it this way now?"
  ],
  "expected_output_type": "recurring pattern table with trend classification, pattern timeline, What's Improving / What's Getting Worse, action item follow-through tracker, unaddressed items flagged with sprint count, and recommended focus areas",
  "saves_to_knowledge": "knowledge/retros/",
  "prerequisites": []
}
```

---

## Day 16 — Coordinate a Multi-Stage Rollout
**Week 4: Communication & Integration | Skill: `launch-checklist` | Invocation: `/launch-checklist`**

### Skill Overview + Why It Matters

`launch-checklist` has two modes. Overview mode maps the full Internal → Alpha → Beta → GA journey for a feature with stage-by-stage requirements, exit criteria, participant selection guidance, and red flags per stage. Checklist mode produces an operational checklist for a specific launch stage: pre-launch sections (documentation, internal comms, external comms, support enablement, monitoring, data requirements, dependencies, legal/compliance), a rollback plan with trigger criteria and authorization level, success criteria at 1-day, 1-week, and 1-month marks, and a post-launch review schedule.

Launch failures are almost always process failures, not technical failures. The feature works; the support team wasn't briefed; the analytics events fired but weren't mapped to the dashboard; the rollback plan existed but no one knew the trigger criteria. `launch-checklist` surfaces these gaps before the launch — specifically the gaps teams consistently miss: support enablement timing, analytics readiness, and rollback authority.

Day 16 opens the final week because it's the first day where the work being shipped is the focus, not the PM's thinking. The prior week was strategy and alignment. This week is coordination and execution. The launch checklist is the artifact that makes shipping a team activity.

### Sample Prompts

**Basic**
```
/launch-checklist

Checklist mode. Feature: a new difficulty-level filter for search results. Launch type: Beta. Team: 5 engineers, 1 designer. The filter has been live in internal testing for 2 weeks with no major issues. We're ready to open it to 10% of adventurers.
```

**Advanced**
```
/launch-checklist

Checklist mode. Feature: Instant Book GA — expanding from beta (15% of guides) to all eligible guides (rating >4.7, 10+ completed bookings, no safety incidents in past 12 months).

Launch context:
- Current state: Instant Book has been in beta since Sprint 9. Opt-in rate reached 27% after the education modal shipped in Sprint 17. Target: 45% opt-in among eligible guides post-GA.
- Required sign-offs per Terrain's launch process: PM (me) + Chris Okafor (EM) + Dana Park (VP Product); Priya Anand (Head of Marketing) informed and coordinated for release messaging
- Rollback mechanism: Unleash feature flag. PM can toggle to reduce rollout percentage or kill the feature entirely.
- Known rollback triggers (from launch-process.md): error rate >2x baseline, crash rate >5%, payment processing errors (zero tolerance)
- Support enablement: minimum 3 business days notice required before beta/GA. FAQ (3–5 Q&As) and known limitations required. Riley Chen (Trust & Safety) needs to be briefed on eligibility criteria changes.
- Marketing lead time: Priya Anand needs 2 weeks for App Store and external comms. This is a hard constraint.
- Success criteria targets: eligible guide opt-in to 45% within 30 days of GA; overall booking conversion rate no regression; cancellation rate no regression (current: 14%)
- Legal flag: Marcus Webb reviewed eligibility criteria in Sprint 14 and approved. No new legal exposure identified.
- Open risk: IB-087 (guide opt-in analytics events) was reopened in Sprint 17 due to Android timing bug. Analytics completeness is not fully confirmed on Android.

Please generate the full GA checklist. Flag the IB-087 analytics gap as an open item with severity.
```

### Reflection Prompts
1. Which pre-launch item did the skill add that you would have forgotten — and what would have happened if you shipped without it?
2. Is the rollback trigger criteria specific enough that an on-call engineer could act on it without calling a meeting — and who should hold rollback authority?
3. What would you add to the post-launch review template that the checklist didn't include?

### Day Metadata
```json
{
  "day": 16,
  "week": 4,
  "type": "skill",
  "skill": "launch-checklist",
  "invocation": "/launch-checklist",
  "mode": null,
  "title": "Coordinate a Multi-Stage Rollout",
  "theme": "Communication & Integration",
  "estimated_minutes": 20,
  "required_inputs": "Feature description, launch type (Internal/Alpha/Beta/GA), rollback mechanism, and any known constraints (sign-off requirements, support lead times, legal flags). Overview mode needs less; Checklist mode benefits from more context.",
  "prompts": {
    "basic": "/launch-checklist\n\nChecklist mode. Feature: a new difficulty-level filter for search results. Launch type: Beta. Team: 5 engineers, 1 designer. The filter has been live in internal testing for 2 weeks with no major issues. We're ready to open it to 10% of adventurers.",
    "advanced": "/launch-checklist\n\nChecklist mode. Feature: Instant Book GA — expanding from beta (15% of guides) to all eligible guides (rating >4.7, 10+ completed bookings, no safety incidents in past 12 months).\n\nLaunch context:\n- Current state: Instant Book has been in beta since Sprint 9. Opt-in rate reached 27% after the education modal shipped in Sprint 17. Target: 45% opt-in among eligible guides post-GA.\n- Required sign-offs per Terrain's launch process: PM (me) + Chris Okafor (EM) + Dana Park (VP Product); Priya Anand (Head of Marketing) informed and coordinated for release messaging\n- Rollback mechanism: Unleash feature flag. PM can toggle to reduce rollout percentage or kill the feature entirely.\n- Known rollback triggers (from launch-process.md): error rate >2x baseline, crash rate >5%, payment processing errors (zero tolerance)\n- Support enablement: minimum 3 business days notice required before beta/GA. FAQ (3–5 Q&As) and known limitations required. Riley Chen (Trust & Safety) needs to be briefed on eligibility criteria changes.\n- Marketing lead time: Priya Anand needs 2 weeks for App Store and external comms. This is a hard constraint.\n- Success criteria targets: eligible guide opt-in to 45% within 30 days of GA; overall booking conversion rate no regression; cancellation rate no regression (current: 14%)\n- Legal flag: Marcus Webb reviewed eligibility criteria in Sprint 14 and approved. No new legal exposure identified.\n- Open risk: IB-087 (guide opt-in analytics events) was reopened in Sprint 17 due to Android timing bug. Analytics completeness is not fully confirmed on Android.\n\nPlease generate the full GA checklist. Flag the IB-087 analytics gap as an open item with severity."
  },
  "reflection_questions": [
    "Which pre-launch item did the skill add that you would have forgotten — and what would have happened if you shipped without it?",
    "Is the rollback trigger criteria specific enough that an on-call engineer could act on it without calling a meeting — and who should hold rollback authority?",
    "What would you add to the post-launch review template that the checklist didn't include?"
  ],
  "expected_output_type": "launch checklist with feature readiness assessment, pre-launch sections by dimension, rollback plan with trigger criteria and authorization, success criteria at 1-day/1-week/1-month, exit criteria, and post-launch review checklist",
  "saves_to_knowledge": "knowledge/launch-checklists/",
  "prerequisites": []
}
```

---

## Day 17 — Compress a Complex Argument
**Week 4: Communication & Integration | Skill: `one-pager` | Invocation: `/one-pager`**

### Skill Overview + Why It Matters

`one-pager` compresses any argument into a single page calibrated for a specific audience and ask type. Ask type is required: approve, fund, prioritize, feedback, or awareness. The output (400–600 words) leads with the ask, states the problem, proposes an approach, explains why now, sizes the impact, names the cost, lists key risks, and closes with next steps. The audience and ask determine what's included and what's cut — a "prioritize" one-pager for a VP Product is structured differently than a "fund" one-pager for a CPO.

A one-pager's job is not to explain everything — it's to make the reader capable of making one specific decision. Everything that doesn't serve that decision is cut. `one-pager` enforces that discipline by requiring the PM to name the ask before the argument is built. If you can't name what you're asking the reader to do, the skill will surface that before proceeding.

Day 17 follows the launch checklist because by now the PM has a fully formed initiative — a business case, a prioritization rationale, and a launch plan. The one-pager is what you hand a stakeholder when you need a decision in 3 minutes, not 30. It also forces a question that the business case doesn't: if you had to cut every word that doesn't serve the decision, what would you keep?

### Sample Prompts

**Basic**
```
/one-pager

Audience: our VP of Product.
Ask: Prioritize — add this to our next quarter roadmap.
Initiative: build a notification system that reminds adventurers about upcoming experiences 48 hours before the event, with weather information attached. We've had requests for this from users and it could reduce no-shows.
```

**Advanced**
```
/one-pager

Audience: Dana Park (VP Product).
Ask: Prioritize — add the adventurer repeat engagement loop to the post-Android-GA Q3 roadmap alongside guide activation and Instant Book flexible mode.

Context: I need Dana to decide to add this to the Q3 roadmap at our quarterly planning meeting next week. She has 3 minutes for this doc, not 30.

Initiative: build a personalized re-engagement loop for adventurers who have completed at least one booking. Core components: post-experience push notification 3 days after an experience (surface related listings), personalized "you might like" suggestions on app open based on past activity, and a booking history page that shows completed experiences with re-booking options.

Evidence:
- Current repeat rate: 38% (target: 45%)
- CAC: ~$38 per adventurer
- 7-point improvement × 47,000 MAU × $185 avg booking value = ~$609k additional GMV annually without new acquisition spend
- Day 7 feedback synthesis: "I forget to come back unless I'm planning a vacation" appeared in 6 instances across NPS verbatims, adventurer interviews, and post-booking surveys
- Day 8 data: no current cohort analysis on time-to-second-booking — this is a known gap, not a blocker for the decision

Engineering estimate: 3–4 sprint weeks across iOS, Android, backend. Single Android engineer is the constraint — this work cannot start until Android GA ships in 6 weeks.

Competing priorities: guide activation listing setup guidance and Instant Book flexible mode are also legitimate Q3 investments. The Day 11 prioritization recommended this sequence: guide activation first (lower Android dependency), repeat loop second (can start post-Android GA), Instant Book flexible mode third.

Why now: we have the evidence, the engineering is available post-GA, and every month without a re-engagement loop is CAC spend we can't recover with repeat bookings.
```

### Reflection Prompts
1. What did the one-pager cut from the business case that you thought was important — and was the cut right for this audience and ask?
2. Does the "why now" argument hold up if Dana asks one follow-up question — and what is that question?
3. What would the equivalent one-pager look like for Sam Rivera (Head of Engineering) — and what would be different?

### Day Metadata
```json
{
  "day": 17,
  "week": 4,
  "type": "skill",
  "skill": "one-pager",
  "invocation": "/one-pager",
  "mode": null,
  "title": "Compress a Complex Argument",
  "theme": "Communication & Integration",
  "estimated_minutes": 20,
  "required_inputs": "Audience (named person or role), ask type (approve/fund/prioritize/feedback/awareness), and a description of the initiative. Prior artifacts from the kit (business case, data analysis) can serve as source material.",
  "prompts": {
    "basic": "/one-pager\n\nAudience: our VP of Product.\nAsk: Prioritize — add this to our next quarter roadmap.\nInitiative: build a notification system that reminds adventurers about upcoming experiences 48 hours before the event, with weather information attached. We've had requests for this from users and it could reduce no-shows.",
    "advanced": "/one-pager\n\nAudience: Dana Park (VP Product).\nAsk: Prioritize — add the adventurer repeat engagement loop to the post-Android-GA Q3 roadmap alongside guide activation and Instant Book flexible mode.\n\nContext: I need Dana to decide to add this to the Q3 roadmap at our quarterly planning meeting next week. She has 3 minutes for this doc, not 30.\n\nInitiative: build a personalized re-engagement loop for adventurers who have completed at least one booking. Core components: post-experience push notification 3 days after an experience (surface related listings), personalized \"you might like\" suggestions on app open based on past activity, and a booking history page that shows completed experiences with re-booking options.\n\nEvidence:\n- Current repeat rate: 38% (target: 45%)\n- CAC: ~$38 per adventurer\n- 7-point improvement × 47,000 MAU × $185 avg booking value = ~$609k additional GMV annually without new acquisition spend\n- Day 7 feedback synthesis: \"I forget to come back unless I'm planning a vacation\" appeared in 6 instances across NPS verbatims, adventurer interviews, and post-booking surveys\n- Day 8 data: no current cohort analysis on time-to-second-booking — this is a known gap, not a blocker for the decision\n\nEngineering estimate: 3–4 sprint weeks across iOS, Android, backend. Single Android engineer is the constraint — this work cannot start until Android GA ships in 6 weeks.\n\nCompeting priorities: guide activation listing setup guidance and Instant Book flexible mode are also legitimate Q3 investments. The Day 11 prioritization recommended this sequence: guide activation first (lower Android dependency), repeat loop second (can start post-Android GA), Instant Book flexible mode third.\n\nWhy now: we have the evidence, the engineering is available post-GA, and every month without a re-engagement loop is CAC spend we can't recover with repeat bookings."
  },
  "reflection_questions": [
    "What did the one-pager cut from the business case that you thought was important — and was the cut right for this audience and ask?",
    "Does the 'why now' argument hold up if Dana asks one follow-up question — and what is that question?",
    "What would the equivalent one-pager look like for Sam Rivera (Head of Engineering) — and what would be different?"
  ],
  "expected_output_type": "single-page argument (400–600 words) structured as: ask, problem/opportunity, proposed approach, why now, impact sizing, cost/resource ask, key risks, next steps",
  "saves_to_knowledge": "knowledge/one-pagers/",
  "prerequisites": [
    10,
    11
  ]
}
```

---

## Day 18 — Build a Narrative for Any Audience
**Week 4: Communication & Integration | Skill: `presentation-deck` | Invocation: `/presentation-deck`**

### Skill Overview + Why It Matters

`presentation-deck` has two modes. Narrative mode produces a slide-by-slide markdown structure — each slide has a headline written as a takeaway (not a topic label), supporting content points, visual guidance, and speaker notes. Slides mode generates an actual presentation file: `.html` (default, self-contained), `.pdf` (via playwright or weasyprint), or `.pptx` (via python-pptx). Required inputs: audience and purpose/deck type. High-stakes deck types (Exec Review, Board Update) include an additional stress test on the narrative.

Most presentation problems are narrative problems, not design problems. Slides full of bullets fail because they describe content rather than make a claim. A deck with a clear Situation → Complication → Resolution arc tells the audience what to think, not just what to look at. `presentation-deck` builds the narrative first. If you can't state each slide's headline as a complete claim, the thinking isn't ready to put on a slide.

Day 18 synthesizes the week. The PM has built a business case, prioritized a roadmap, captured decisions, aligned on operating principles, and drafted a one-pager. The deck is how all of that becomes a coherent leadership narrative — the most composable output in the kit.

**Setup note for Slides mode:** Slides mode requires additional installs. Use Narrative mode today unless you completed the Slides setup. To generate `.pptx`: `python3 -m pip install python-pptx`. To generate `.pdf`: `python3 -m pip install playwright && python3 -m playwright install chromium`.

### Sample Prompts

**Basic**
```
/presentation-deck

Narrative mode. Build a 5-slide structure for a VP audience.

Situation: our booking conversion rate has been flat for two quarters at 2.8%. Complication: our two largest competitors are both investing in instant-confirmation features. Resolution: we have an Instant Book feature in beta that shows about 32% higher detail-to-booking conversion, but adoption is low. We need alignment on how to accelerate it.
```

**Advanced**
```
/presentation-deck

Narrative mode. Q3 marketplace priorities deck.

Audience: Dana Park (VP Product) and Sam Rivera (Head of Engineering).
Purpose: Exec Review / Strategy alignment.
Objective: align on the recommended initiative sequence for the quarter after Android GA ships, and surface the Android GA timeline as a near-term constraint that shapes everything else.

Narrative inputs (use these as source material for each slide — don't just summarize them, build takeaway-first headlines):

1. From Day 8 data analysis: Instant Book shows a consistent ~32% detail-to-booking conversion lift across the beta-period weekly data. In the category table, cancellations are 9.5% of completed-plus-cancelled Instant Book bookings vs. 13.7% for request-to-book. But non-Guide-Pro Instant Book search volume is only 18% of beta-period search sessions (24% including Guide Pro) — the conversion benefit is reaching a limited fraction of adventurers.

2. From Day 10 business case: adventurer repeat rate is 38%, target 45%. A 7-point improvement = ~$609k GMV annually without new acquisition spend. No current re-engagement mechanism. This is the highest-ROI initiative given current CAC.

3. From Day 11 prioritization and the Day 14 decision meeting outcome: recommended Q3 sequence — (1) guide activation listing guidance (can start now, lower Android dependency), (2) adventurer repeat loop (starts post-Android GA), (3) Instant Book flexible mode (third, after repeat loop is in flight). Instant Book mandate debate is resolved: flexible mode is the direction.

4. Android GA constraint: Android GA ships in 6 weeks and consumes the single Android engineer until then. No Android feature work starts before GA. This shapes everything.

5. Post-Day 14 outcome: Dana approved flexible Instant Book as the direction after reviewing the Day 12 decision log and Day 14 meeting brief.

Deck type: Strategy/Roadmap. Target: 8–10 slides. Include speaker notes.
```

### Reflection Prompts
1. How did the skill's headline framing differ from how you would have labeled the slides — and which version makes a stronger claim?
2. Which slide structure revealed a gap in the narrative — a claim you made that doesn't yet have a supporting slide?
3. What would you change about the Situation → Complication → Resolution arc the skill constructed?

### Day Metadata
```json
{
  "day": 18,
  "week": 4,
  "type": "skill",
  "skill": "presentation-deck",
  "invocation": "/presentation-deck",
  "mode": null,
  "title": "Build a Narrative for Any Audience",
  "theme": "Communication & Integration",
  "estimated_minutes": 25,
  "required_inputs": "Audience, purpose/deck type, and source material (business case, data analysis, status update, rough notes). Narrative mode: no install required. Slides mode: see setup page for python-pptx and playwright requirements.",
  "prompts": {
    "basic": "/presentation-deck\n\nNarrative mode. Build a 5-slide structure for a VP audience.\n\nSituation: our booking conversion rate has been flat for two quarters at 2.8%. Complication: our two largest competitors are both investing in instant-confirmation features. Resolution: we have an Instant Book feature in beta that shows about 32% higher detail-to-booking conversion, but adoption is low. We need alignment on how to accelerate it.",
    "advanced": "/presentation-deck\n\nNarrative mode. Q3 marketplace priorities deck.\n\nAudience: Dana Park (VP Product) and Sam Rivera (Head of Engineering).\nPurpose: Exec Review / Strategy alignment.\nObjective: align on the recommended initiative sequence for the quarter after Android GA ships, and surface the Android GA timeline as a near-term constraint that shapes everything else.\n\nNarrative inputs (use these as source material for each slide — don't just summarize them, build takeaway-first headlines):\n\n1. From Day 8 data analysis: Instant Book shows a consistent ~32% detail-to-booking conversion lift across the beta-period weekly data. In the category table, cancellations are 9.5% of completed-plus-cancelled Instant Book bookings vs. 13.7% for request-to-book. But non-Guide-Pro Instant Book search volume is only 18% of beta-period search sessions (24% including Guide Pro) — the conversion benefit is reaching a limited fraction of adventurers.\n\n2. From Day 10 business case: adventurer repeat rate is 38%, target 45%. A 7-point improvement = ~$609k GMV annually without new acquisition spend. No current re-engagement mechanism. This is the highest-ROI initiative given current CAC.\n\n3. From Day 11 prioritization and the Day 14 decision meeting outcome: recommended Q3 sequence — (1) guide activation listing guidance (can start now, lower Android dependency), (2) adventurer repeat loop (starts post-Android GA), (3) Instant Book flexible mode (third, after repeat loop is in flight). Instant Book mandate debate is resolved: flexible mode is the direction.\n\n4. Android GA constraint: Android GA ships in 6 weeks and consumes the single Android engineer until then. No Android feature work starts before GA. This shapes everything.\n\n5. Post-Day 14 outcome: Dana approved flexible Instant Book as the direction after reviewing the Day 12 decision log and Day 14 meeting brief.\n\nDeck type: Strategy/Roadmap. Target: 8–10 slides. Include speaker notes."
  },
  "reflection_questions": [
    "How did the skill's headline framing differ from how you would have labeled the slides — and which version makes a stronger claim?",
    "Which slide structure revealed a gap in the narrative — a claim you made that doesn't yet have a supporting slide?",
    "What would you change about the Situation → Complication → Resolution arc the skill constructed?"
  ],
  "expected_output_type": "slide-by-slide narrative structure with takeaway-first headlines, supporting content, visual guidance, and speaker notes per slide; for Exec Review deck types: narrative stress test included",
  "saves_to_knowledge": "knowledge/presentations/",
  "prerequisites": [
    10,
    11,
    17
  ]
}
```

---

## Day 19 — Capstone I: Idea to Backlog
**Week 4: Integration | Skills chained: `discovery-plan` → `prd-draft` → `generate-tasks`**

### Skill Overview + Why It Matters

Capstone I chains three skills in sequence — `discovery-plan` → `prd-draft` → `generate-tasks` — against a single scenario. Each step's output becomes the next step's input. The scenario is a real Terrain problem: guide activation drop-off. The challenge is to go from raw problem context to a backlog-ready story set in one session.

Individual skills are easy to run in isolation. The harder skill — for both the PM and the agent — is maintaining coherence across a chain. What assumptions from the discovery plan constrain the PRD? What decisions in the PRD surface as story-level ambiguities in the task breakdown? The capstone tests whether those handoffs happen cleanly and whether the agent carries context without the PM having to repeat it.

Day 19 is the first capstone because discovery → spec → tasks is the shorter chain and the workflow PMs run most often. Day 20 is the full strategic cycle, which compounds this chain with alignment and communication. Today is the foundation.

### Steps

**Step 1 — `/discovery-plan`**
```
/discovery-plan

Problem: guide activation drop-off at Terrain. 38% of guides who register never publish an experience within 30 days of signup.

Decision to inform: whether and how to invest in (a) listing setup guidance and pricing transparency tooling, (b) a milestone email sequence for guides in the first 30 days, or (c) both. These are the three candidate solutions. We need to know which underlying problem is load-bearing before committing engineering resources.

Current evidence:
- Exit survey verbatims (n≈40 over 6 months) point to listing setup friction and pricing uncertainty
- Zendesk tickets from guides who never published show "didn't know what to put" as the dominant theme (from the Day 7 feedback synthesis)
- No activation funnel instrumentation exists today — we can't see where in the listing setup process guides abandon
- Day 9 competitive analysis: Viator's new independent guide track includes pricing guidance during onboarding. This is a direct competitive signal.

What's not known: relative weight of friction vs. uncertainty vs. motivation problems; whether abandonment clusters in a specific step of listing setup; whether the problem is worse in certain experience categories.

Timeline: 6 weeks to Q3 planning. Research budget: 4 guide interviews/week, data requests through Fernando Lopez (2–3 day turnaround). Jordan Lee's squad owns the listing object; any build decision requires their coordination.

Produce a discovery plan: map assumptions, rank by cost-of-being-wrong, select research methods with pre-defined evidence thresholds, sequence the work.
```

**Step 2 — `/prd-draft`**
```
/prd-draft

Use the discovery plan output above as context.

Assume the discovery plan's top hypothesis has been confirmed: guides abandon listing setup because (1) they don't know what makes a strong listing description and (2) they have no pricing reference point for their experience category. The research validated these two root causes. The third candidate (milestone emails) showed weaker signal — guides who abandoned did so within the first session, before any email sequence would have reached them.

Draft a PRD for listing setup guidance at Terrain. The PRD should:
- Scope to the two confirmed root causes only (description guidance and pricing reference)
- Include data requirements for the activation funnel tracking that doesn't currently exist
- Account for the Jordan Lee squad coordination constraint on the listing object schema
- Be ready for a cross-squad engineering walkthrough with Jordan Lee, Aisha Nkomo, Chris Okafor, and the engineers next week

PM persona: Adventurer Experience PM partnering with Jordan Lee on guide-side work.
```

**Step 3 — `/generate-tasks`**
```
/generate-tasks

Use the PRD above as input. Decompose into sprint-ready stories for the Terrain Adventurer Experience squad.

Team context:
- 6 engineers: 2 iOS, 1 Android, 2 backend, 1 QA
- 18–22 story points per sprint, 85% capacity rule
- Single Android engineer — Android work is serialized and cannot run in parallel
- Jordan Lee's Guide Experience squad owns the listing object schema; any backend changes to the listing schema require a separate ticket owned by their squad
- Definition of ready: AC in Given/When/Then, Figma link for user-facing changes, named analytics events, no unresolved dependencies, estimated

Please flag:
- Any story requiring a data tracking counterpart not explicit in the PRD
- Any story that requires Jordan's squad to change the listing schema first (dependency)
- Any Android-specific work (serialized)
- Any story where the AC requires a PM decision the PRD didn't resolve
```

### Reflection Prompts
1. What was lost at the discovery-plan → prd-draft handoff — what context from the discovery plan should have shaped the PRD but didn't?
2. Where did the PRD make a scoping decision that the discovery plan's evidence didn't fully support — and would you have caught that without comparing the two outputs?
3. If you ran this chain again from the beginning with what you know now, what would you change in Step 1 that would improve the quality of the Step 3 output?

### Day Metadata
```json
{
  "day": 19,
  "week": 4,
  "type": "capstone",
  "title": "Capstone I: Idea to Backlog",
  "theme": "Communication & Integration",
  "estimated_minutes": 45,
  "skills_chained": [
    "discovery-plan",
    "prd-draft",
    "generate-tasks"
  ],
  "steps": [
    {
      "step": 1,
      "skill": "discovery-plan",
      "invocation": "/discovery-plan",
      "prompt": "Problem: guide activation drop-off at Terrain. 38% of guides who register never publish an experience within 30 days of signup.\n\nDecision to inform: whether and how to invest in (a) listing setup guidance and pricing transparency tooling, (b) a milestone email sequence for guides in the first 30 days, or (c) both. These are the three candidate solutions. We need to know which underlying problem is load-bearing before committing engineering resources.\n\nCurrent evidence:\n- Exit survey verbatims (n≈40 over 6 months) point to listing setup friction and pricing uncertainty\n- Zendesk tickets from guides who never published show \"didn't know what to put\" as the dominant theme (from the Day 7 feedback synthesis)\n- No activation funnel instrumentation exists today — we can't see where in the listing setup process guides abandon\n- Day 9 competitive analysis: Viator's new independent guide track includes pricing guidance during onboarding. This is a direct competitive signal.\n\nWhat's not known: relative weight of friction vs. uncertainty vs. motivation problems; whether abandonment clusters in a specific step of listing setup; whether the problem is worse in certain experience categories.\n\nTimeline: 6 weeks to Q3 planning. Research budget: 4 guide interviews/week, data requests through Fernando Lopez (2–3 day turnaround). Jordan Lee's squad owns the listing object; any build decision requires their coordination.\n\nProduce a discovery plan: map assumptions, rank by cost-of-being-wrong, select research methods with pre-defined evidence thresholds, sequence the work."
    },
    {
      "step": 2,
      "skill": "prd-draft",
      "invocation": "/prd-draft",
      "prompt": "Use the discovery plan output above as context.\n\nAssume the discovery plan's top hypothesis has been confirmed: guides abandon listing setup because (1) they don't know what makes a strong listing description and (2) they have no pricing reference point for their experience category. The research validated these two root causes. The third candidate (milestone emails) showed weaker signal — guides who abandoned did so within the first session, before any email sequence would have reached them.\n\nDraft a PRD for listing setup guidance at Terrain. The PRD should:\n- Scope to the two confirmed root causes only (description guidance and pricing reference)\n- Include data requirements for the activation funnel tracking that doesn't currently exist\n- Account for the Jordan Lee squad coordination constraint on the listing object schema\n- Be ready for a cross-squad engineering walkthrough with Jordan Lee, Aisha Nkomo, Chris Okafor, and the engineers next week\n\nPM persona: Adventurer Experience PM partnering with Jordan Lee on guide-side work."
    },
    {
      "step": 3,
      "skill": "generate-tasks",
      "invocation": "/generate-tasks",
      "prompt": "Use the PRD above as input. Decompose into sprint-ready stories for the Terrain Adventurer Experience squad.\n\nTeam context:\n- 6 engineers: 2 iOS, 1 Android, 2 backend, 1 QA\n- 18–22 story points per sprint, 85% capacity rule\n- Single Android engineer — Android work is serialized and cannot run in parallel\n- Jordan Lee's Guide Experience squad owns the listing object schema; any backend changes to the listing schema require a separate ticket owned by their squad\n- Definition of ready: AC in Given/When/Then, Figma link for user-facing changes, named analytics events, no unresolved dependencies, estimated\n\nPlease flag:\n- Any story requiring a data tracking counterpart not explicit in the PRD\n- Any story that requires Jordan's squad to change the listing schema first (dependency)\n- Any Android-specific work (serialized)\n- Any story where the AC requires a PM decision the PRD didn't resolve"
    }
  ],
  "reflection_questions": [
    "What was lost at the discovery-plan → prd-draft handoff — what context from the discovery plan should have shaped the PRD but didn't?",
    "Where did the PRD make a scoping decision that the discovery plan's evidence didn't fully support — and would you have caught that without comparing the two outputs?",
    "If you ran this chain again from the beginning with what you know now, what would you change in Step 1 that would improve the quality of the Step 3 output?"
  ],
  "prerequisites": [
    6,
    1,
    3
  ]
}
```

---

## Day 20 — Capstone II: Full Strategy Cycle
**Week 4: Integration | Skills chained: `business-case` → `roadmap-prioritization` → `presentation-deck` → `status-update`**

### Skill Overview + Why It Matters

Capstone II chains four skills in sequence — `business-case` → `roadmap-prioritization` → `presentation-deck` → `status-update` — threading a single initiative from investment argument to team communication. The scenario: making the case for the adventurer repeat engagement loop, sequencing it against competing priorities, presenting it to leadership, and communicating the outcome to the team.

The full strategy cycle is the PM's highest-leverage mode. Done well, it produces a decision that is funded, sequenced, understood by leadership, and communicated to the people building it — all in one session. Done poorly, it produces slides that don't connect to decisions and status updates that don't say what was decided. The gap between the two versions is usually not effort — it's whether context compounds correctly from step to step.

Day 20 is the final challenge because it integrates everything: user evidence, data analysis, business case, prioritization rationale, narrative, communication. It is also the cycle you'll repeat every quarter at your real company. The goal today isn't perfect outputs — it's running the cycle end-to-end once and knowing where you'd invest more time in a real context.

### Steps

**Step 1 — `/business-case`**
```
/business-case

Build the case for the adventurer repeat engagement loop at Terrain.

Problem: 38% of adventurers complete 2+ bookings in a 12-month window (target: 45%). Once an adventurer completes their first booking, Terrain has no structured re-engagement mechanism — no post-experience notifications, no personalized suggestions, no booking history page with re-booking options. Return traffic is entirely organic.

Evidence:
- Day 7 feedback synthesis: "I forget to come back unless I'm planning a vacation" — 6 instances across NPS verbatims, adventurer interviews, and post-booking surveys. Distinct and recurring.
- Day 8 data: adventurer repeat rate is the only major funnel metric without a corresponding product intervention. The data analysis flagged no second-booking cohort analysis as a gap.
- Sizing: CAC ~$38 per adventurer. A 7-point improvement in repeat rate (38% → 45%) × 47,000 MAU × $185 average booking value = ~$609k additional GMV annually without incremental acquisition spend.

Alternatives:
- Do Nothing: organic repeat stays at 38%. Every new adventurer costs $38 to acquire.
- Promotional campaigns only: email and push campaigns, no product changes. Low build cost, historically low lift for activity platforms (users opt out quickly).
- Full social layer: trip sharing, friend graph, public wishlists. High build cost (~6+ months), not committed, not in this business case.

Context: Android GA ships in 6 weeks. The repeat loop work cannot start on Android until after GA. Backend and iOS work can start sooner.

Run the full stress test.
```

**Step 2 — `/roadmap-prioritization`**
```
/roadmap-prioritization

Use the business case above as one candidate initiative. Sequence it against the other three known Terrain product problems for the quarter after Android GA ships.

Candidates:
1. Adventurer repeat loop (from Step 1 business case)
2. Guide activation — listing setup guidance and pricing transparency (from Day 19 PRD and Day 6 discovery plan; structured research not yet complete but direction is clear)
3. Cancellation rate reduction — 14% current, benchmark 7–9% (problem confirmed in Day 7; no discovery plan yet; most complex to solve)
4. Instant Book flexible mode — configurable advance-notice window (structured in Day 12 and approved by Dana after the Day 14 decision meeting; build not yet started)

Constraints:
- Android GA is non-negotiable and ships in 6 weeks
- Single Android engineer is the binding constraint on all mobile work until GA
- Instant Book flexible mode requires backend + iOS + Android; cross-squad with Jordan Lee
- H1 OKRs: GMV growth, guide 12-month retention (71% → 80%), adventurer repeat rate (38% → 45%)
- Team capacity post-GA: 18–22 story points per sprint

Include stress test.
```

**Step 3 — `/presentation-deck`**
```
/presentation-deck

Narrative mode. Build the leadership alignment deck for Q3 priorities.

Audience: Dana Park (VP Product) and Sam Rivera (Head of Engineering).
Purpose: Strategy / Exec Review.
Objective: align on the post-Android-GA initiative sequence and get explicit sign-off on the repeat loop as Priority 2 (after guide activation).

Source material for slides:
- Step 1 business case: repeat loop sizing ($609k GMV), conviction level, stress test results
- Step 2 prioritization: recommended sequence with per-position reasoning and deferred initiative framing
- Android GA constraint: 6 weeks, single Android engineer, no Android feature work until GA ships
- Post-Day 14 outcome: Instant Book flexible mode direction approved; this is already decided

Key asks for the deck:
1. Alignment on post-GA sequence (guide activation first, repeat loop second)
2. Explicit acknowledgment that cancellation rate work is deferred and why
3. Sam Rivera's sign-off on the engineering sequencing implication (backend for guide activation can start during GA sprint; Android repeat loop work starts post-GA)

8 slides. Include speaker notes.
```

**Step 4 — `/status-update`**
```
/status-update

Draft mode. Team communication for the Adventurer Experience squad.

Audience: the team — Chris Okafor (EM), 6 engineers, Mia Santos (designer).
Purpose: communicate the Q3 strategy decision that just came out of the leadership meeting.

What was decided:
- Post-Android GA, the squad's focus shifts to guide activation listing guidance first, then adventurer repeat loop.
- Instant Book flexible mode is third in sequence, starting after the repeat loop is in flight.
- Cancellation rate reduction is deferred — not this quarter. The underlying problem is real but the solution complexity is highest and we don't have a discovery plan yet.
- Android GA remains on track. Nothing changes for the next 6 weeks.

What this means for the team:
- Backend engineers: guide activation backend work (listing schema changes with Jordan's squad) can begin scoping during the current sprint, before GA ships.
- iOS engineers: guide activation iOS work starts sprint 1 post-GA.
- Android engineer: Android-specific work for guide activation and repeat loop starts sprint 2 post-GA (sprint 1 post-GA is decompression and infra catch-up).
- Mia: design for guide activation listing guidance starts now. Repeat loop design starts in 6 weeks.

Lead with the decision and the reasoning. Tell the team what's not happening and why — don't leave that unsaid. Keep it tight.
```

### Reflection Prompts
1. Where did compounding context improve the output quality most as the chain progressed — and where did earlier outputs add noise rather than signal to later steps?
2. At which step did the skill's framing diverge most from your own judgment — and would you have caught that divergence without running the full chain?
3. What would you do differently when you run this cycle at your real company — what input would you invest more time in, and what step would you skip or compress?

### Day Metadata
```json
{
  "day": 20,
  "week": 4,
  "type": "capstone",
  "title": "Capstone II: Full Strategy Cycle",
  "theme": "Communication & Integration",
  "estimated_minutes": 60,
  "skills_chained": [
    "business-case",
    "roadmap-prioritization",
    "presentation-deck",
    "status-update"
  ],
  "steps": [
    {
      "step": 1,
      "skill": "business-case",
      "invocation": "/business-case",
      "prompt": "Build the case for the adventurer repeat engagement loop at Terrain.\n\nProblem: 38% of adventurers complete 2+ bookings in a 12-month window (target: 45%). Once an adventurer completes their first booking, Terrain has no structured re-engagement mechanism — no post-experience notifications, no personalized suggestions, no booking history page with re-booking options. Return traffic is entirely organic.\n\nEvidence:\n- Day 7 feedback synthesis: \"I forget to come back unless I'm planning a vacation\" — 6 instances across NPS verbatims, adventurer interviews, and post-booking surveys. Distinct and recurring.\n- Day 8 data: adventurer repeat rate is the only major funnel metric without a corresponding product intervention. The data analysis flagged no second-booking cohort analysis as a gap.\n- Sizing: CAC ~$38 per adventurer. A 7-point improvement in repeat rate (38% → 45%) × 47,000 MAU × $185 average booking value = ~$609k additional GMV annually without incremental acquisition spend.\n\nAlternatives:\n- Do Nothing: organic repeat stays at 38%. Every new adventurer costs $38 to acquire.\n- Promotional campaigns only: email and push campaigns, no product changes. Low build cost, historically low lift for activity platforms (users opt out quickly).\n- Full social layer: trip sharing, friend graph, public wishlists. High build cost (~6+ months), not committed, not in this business case.\n\nContext: Android GA ships in 6 weeks. The repeat loop work cannot start on Android until after GA. Backend and iOS work can start sooner.\n\nRun the full stress test."
    },
    {
      "step": 2,
      "skill": "roadmap-prioritization",
      "invocation": "/roadmap-prioritization",
      "prompt": "Use the business case above as one candidate initiative. Sequence it against the other three known Terrain product problems for the quarter after Android GA ships.\n\nCandidates:\n1. Adventurer repeat loop (from Step 1 business case)\n2. Guide activation — listing setup guidance and pricing transparency (from Day 19 PRD and Day 6 discovery plan; structured research not yet complete but direction is clear)\n3. Cancellation rate reduction — 14% current, benchmark 7–9% (problem confirmed in Day 7; no discovery plan yet; most complex to solve)\n4. Instant Book flexible mode — configurable advance-notice window (structured in Day 12 and approved by Dana after the Day 14 decision meeting; build not yet started)\n\nConstraints:\n- Android GA is non-negotiable and ships in 6 weeks\n- Single Android engineer is the binding constraint on all mobile work until GA\n- Instant Book flexible mode requires backend + iOS + Android; cross-squad with Jordan Lee\n- H1 OKRs: GMV growth, guide 12-month retention (71% → 80%), adventurer repeat rate (38% → 45%)\n- Team capacity post-GA: 18–22 story points per sprint\n\nInclude stress test."
    },
    {
      "step": 3,
      "skill": "presentation-deck",
      "invocation": "/presentation-deck",
      "prompt": "Narrative mode. Build the leadership alignment deck for Q3 priorities.\n\nAudience: Dana Park (VP Product) and Sam Rivera (Head of Engineering).\nPurpose: Strategy / Exec Review.\nObjective: align on the post-Android-GA initiative sequence and get explicit sign-off on the repeat loop as Priority 2 (after guide activation).\n\nSource material for slides:\n- Step 1 business case: repeat loop sizing ($609k GMV), conviction level, stress test results\n- Step 2 prioritization: recommended sequence with per-position reasoning and deferred initiative framing\n- Android GA constraint: 6 weeks, single Android engineer, no Android feature work until GA ships\n- Post-Day 14 outcome: Instant Book flexible mode direction approved; this is already decided\n\nKey asks for the deck:\n1. Alignment on post-GA sequence (guide activation first, repeat loop second)\n2. Explicit acknowledgment that cancellation rate work is deferred and why\n3. Sam Rivera's sign-off on the engineering sequencing implication (backend for guide activation can start during GA sprint; Android repeat loop work starts post-GA)\n\n8 slides. Include speaker notes."
    },
    {
      "step": 4,
      "skill": "status-update",
      "invocation": "/status-update",
      "prompt": "Draft mode. Team communication for the Adventurer Experience squad.\n\nAudience: the team — Chris Okafor (EM), 6 engineers, Mia Santos (designer).\nPurpose: communicate the Q3 strategy decision that just came out of the leadership meeting.\n\nWhat was decided:\n- Post-Android GA, the squad's focus shifts to guide activation listing guidance first, then adventurer repeat loop.\n- Instant Book flexible mode is third in sequence, starting after the repeat loop is in flight.\n- Cancellation rate reduction is deferred — not this quarter. The underlying problem is real but the solution complexity is highest and we don't have a discovery plan yet.\n- Android GA remains on track. Nothing changes for the next 6 weeks.\n\nWhat this means for the team:\n- Backend engineers: guide activation backend work (listing schema changes with Jordan's squad) can begin scoping during the current sprint, before GA ships.\n- iOS engineers: guide activation iOS work starts sprint 1 post-GA.\n- Android engineer: Android-specific work for guide activation and repeat loop starts sprint 2 post-GA (sprint 1 post-GA is decompression and infra catch-up).\n- Mia: design for guide activation listing guidance starts now. Repeat loop design starts in 6 weeks.\n\nLead with the decision and the reasoning. Tell the team what's not happening and why — don't leave that unsaid. Keep it tight."
    }
  ],
  "reflection_questions": [
    "Where did compounding context improve the output quality most as the chain progressed — and where did earlier outputs add noise rather than signal to later steps?",
    "At which step did the skill's framing diverge most from your own judgment — and would you have caught that divergence without running the full chain?",
    "What would you do differently when you run this cycle at your real company — what input would you invest more time in, and what step would you skip or compress?"
  ],
  "prerequisites": [
    10,
    11,
    18,
    5
  ]
}
```
