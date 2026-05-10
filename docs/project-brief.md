# Project Brief: PM Agent Kit Workbook

**Version:** 0.1  
**Author:** Nicola de Vera
**Date:** 2026-05-09  
**Status:** Implemented draft — static site, curriculum index, and Terrain context are live; content QA and polish ongoing

---

## 1. Project Overview

### Name
PM Agent Kit Workbook

### Tagline
"20 days. One skill a day. Build your AI-powered PM practice."

### Problem Statement

Product managers recognize that AI tools like Claude Code are powerful, but they can't carve out intentional time to learn them — there's always a sprint, a stakeholder, a fire. The result is passive awareness with no real fluency. PMs end up with vague enthusiasm and zero reps.

The PM Agent Kit solves the *what* — a full suite of PM skills encoded in a portable, agentic system. The Workbook solves the *how* — a structured, self-paced, low-friction daily practice that builds fluency one skill at a time. Twenty minutes a day, Monday through Friday, for four weeks.

### Intended Outcome

After 20 days, a PM has:
- Run every skill in the Agent Kit at least once against real or realistic input
- Developed an intuition for when to reach for each skill
- Built a personal prompt library they can return to
- Experienced what it feels like to work *with* an agent as a collaborator, not just a tool

### Audience

**Primary — Human PMs:** Product managers at any stage of AI adoption. The workbook assumes they have the Agent Kit installed (or will set it up on Day 0). It does not assume prior AI fluency — it builds it.

**Secondary — Agents:** The workbook is also designed to be readable by agents as structured curriculum context. An agent asked to "run the Day 8 challenge" should be able to load the workbook, parse the day's metadata, and know exactly what skill to invoke, what prompts to use, and what output to produce. Every day page includes embedded machine-readable metadata, and `site/workbook.json` describes the full curriculum.

---

## 2. Functional Requirements

### Site Structure

```
pm-agent-kit-workbook/
  docs/
    project-brief.md
  company/                # Pre-filled Terrain context files — copy into pm-agent-kit clone
    ONBOARDING.md
    facts/
      product.md
      customers.md
      team.md
      competitors.md
      glossary.md
    norms/
      team-process.md
      communication.md
      decisions.md
      launch-process.md
    interfaces/
      branding.md
      data-sources.md
      templates.md
      tools.md
  site/                   # Static workbook website
    index.html            # Landing page: challenge overview, how it works, start CTA
    setup.html            # Day 0: environment setup (not counted in 20 days)
    terrain.html          # Company context: fictional Terrain scenario used throughout the challenge
    days/
      day-01.html         # prd-draft
      day-02.html         # doc-review
      ...
      day-20.html         # Capstone II
    assets/
      css/
        styles.css
      js/
        main.js           # Copy-to-clipboard, day navigation
    workbook.json         # Machine-readable curriculum index
  README.md
```

### Pages

#### Landing Page (`site/index.html`)
- Challenge name and tagline
- "What is the PM Agent Kit?" — one paragraph, link to the pm-agent-kit repo
- "How it works" — 4-step explainer (Set up → Understand the kit → Meet Terrain → Practice and reflect)
- Note that the challenge uses a fictional company, Terrain, so every day builds on the same product context
- 4-week curriculum overview: week themes and skill names, no detail
- Primary CTA: "Start Day 0 (Setup)"
- Secondary CTA: "Jump to Day 1" (for users who already have the kit installed)

#### Setup Page (`site/setup.html`) — Day 0, not counted in 20 days
- What you need: a Mac or Linux machine, a Claude account, a terminal or IDE
- Step-by-step:
  1. Install Claude Code
  2. Clone the pm-agent-kit repo: `git clone https://github.com/nicoladevera/pm-agent-kit`
  3. Clone this workbook repo: `git clone https://github.com/nicoladevera/pm-agent-kit-workbook`
  4. Copy the Terrain company context files: `cp -R pm-agent-kit-workbook/company/. pm-agent-kit/company/` — this replaces the kit's stub placeholders with pre-filled Terrain context so every skill runs at full capacity. If you have already added real company context to `pm-agent-kit/company`, back it up before copying Terrain over it.
  5. Open Claude Code in the pm-agent-kit directory
  6. Run a smoke-test prompt (`/doc-review`) to confirm the kit is working
- What to expect: a note on how the kit works (skills, context files, draft-confirm outputs); a note explaining why the company files matter — skills produce more specific, credible output when the agent has product, team, customer, and process context loaded
- Link to pm-agent-kit README: `https://github.com/nicoladevera/pm-agent-kit`
- **Dependency matrix by skill:** Not all skills are available immediately after cloning. The setup page must include this table so PMs know what to install before reaching that day:

| Day | Skill | Additional setup required |
|-----|-------|--------------------------|
| 1–7, 9–17 | Most skills | None — works immediately after cloning |
| 8 | `data-analysis` | `python3 -m pip install matplotlib` (for chart generation) |
| 18 | `presentation-deck` (Slides mode) | `python3 -m pip install python-pptx` for PPTX export; `python3 -m pip install playwright` + `python3 -m playwright install chromium` for PDF export; or `python3 -m pip install weasyprint` as the PDF fallback |
| 19–20 | Capstone I & II | Inherits dependencies from the skills chained (see individual days above) |

The setup page should show this table with a note: "You don't need everything installed on Day 0. Install the extras before the day they're needed."

Primary CTA at the bottom: "The Kit"

#### Terrain Context Page (`site/terrain.html`) — company context, not counted in 20 days

This page orients the user to the fictional company used throughout the workbook. It is not setup and not part of the 20-day curriculum. Its job is to show why shared company context matters when working with agents and to give the PM enough Terrain context to understand the advanced prompts.

The page should include:
- **Why this exists:** A short explanation that real PM agent work improves when the agent has durable product, customer, business, and team context. Terrain gives every day a consistent practice environment without requiring the PM to expose real company data.
- **What Terrain is:** Two-sided marketplace for bookable outdoor experiences; guides list surf lessons, alpine climbs, foraging walks, kayaking tours, and similar experiences; adventurers discover and book them; Terrain earns an 18% take rate plus a 3% adventurer platform fee.
- **Who the users are:** Short summaries of Marco (guide) and Jamie (adventurer), with their core goals and pain points.
- **The business snapshot:** GMV, take-rate revenue, active guides, monthly active adventurers, average booking value, Guide Pro attach rate.
- **The product context:** Current strategic work, especially Instant Book rollout, Android GA, expanded Guide Pro analytics dashboard, and under-consideration bets.
- **The four active product problems:** Guide activation drop-off, high cancellation rate, low adventurer repeat rate, and Instant Book guide adoption.
- **How to use this context:** Tell users they do not need to memorize Terrain. Relevant details will be embedded in advanced prompts. The point is to notice how richer context changes agent output, then apply the same pattern to their own company later.

The page should link to Day 1 with a primary CTA: "Start Day 1"

#### Day Pages (`site/days/day-NN.html`)
Each day page contains the following sections in order:

1. **Header:** Day number, week label (Week 1–4), day title (skill name + short descriptor)

2. **Skill Overview + Why It Matters**  
   2–3 paragraphs:
   - What the skill does (not a feature list — a plain-language description of what changes when you run it)
   - When a PM would use this in real work (name the situation, not the category)
   - Why this day in the sequence — how it connects to the skills that came before and what it unlocks for the days ahead

3. **Sample Prompts**  
   Two copy-paste ready prompts designed for Claude Code against the pm-agent-kit:
   - **Basic:** Low-context prompt that shows the skill at its simplest. Works even if the PM has no prior setup or company context loaded. Focused on demonstrating the skill's core output.
   - **Advanced:** Richer prompt that shows how the skill performs with real PM context. Includes a scenario setup (role, product area, problem) that gives the skill enough signal to produce a substantive output. Shows the PM what "using it well" looks like.
   Each prompt has a one-click copy button. The prompt text is unambiguous — no vague fill-in-the-blank placeholders that leave the PM guessing. Explicit paste targets such as `[paste PRD here]` are allowed when the point of the exercise is to run the skill against the PM's own artifact.

4. **Reflection Prompts**  
   2–3 written questions to work through after running the skill. Not a quiz. These are designed for honest self-assessment and transfer — connecting what the PM just saw to their actual work.
   Example question shapes:
   - "What did the agent get right that you wouldn't have caught on your own?"
   - "Where in your current sprint or product area would this skill change how you work?"
   - "What context would you need to have loaded to get a stronger output from this skill?"

5. **Machine-Readable Metadata Block**  
   Embedded in the page `<head>` as `<script type="application/json" id="day-metadata">`. The object must match the corresponding per-day object in `site/workbook.json`. Skill days use the skill-day schema (`type: "skill"`, `prompts: { basic, advanced }`). Capstone days use the capstone schema (`type: "capstone"`, `steps: [...]`).

#### Navigation
- The intended onboarding flow is `site/index.html` → `site/setup.html` → `site/kit.html` → `site/terrain.html` → `site/days/day-01.html`
- Each day page has Previous / Next navigation at the bottom
- A compact day strip or sidebar shows all 20 days with the current day highlighted — days are linked, not gated
- Week labels group the days visually (Week 1, Week 2, etc.)

### Technical Requirements

- **Static HTML + CSS + vanilla JS only.** No framework, no build step, no package.json.
- **Designed for static hosting.** The site is intended to be published to GitHub Pages, Replit, or another static host. Asset paths must remain relative so the site can be served from a subpath.
- **Copy-to-clipboard** for sample prompts via the Clipboard API with a fallback for older browsers (`execCommand`). Button text changes to "Copied ✓" for 2 seconds after click.
- **No backend, no auth.** The workbook is read-only. Reflection prompts are printed — PMs write their answers in a notebook, their own doc, or wherever they keep notes.
- **Preference-only browser state is allowed.** The site may use `localStorage` for non-essential UI preferences such as theme. It must not store reflection answers, progress, or user work.
- **Hosted presentation assets are allowed when non-critical.** Web fonts or similar presentation enhancements may load from hosted providers, but core content, navigation, and copy controls must remain usable if those requests fail.

### Machine-Readable Curriculum Index (`site/workbook.json`)

A JSON file published with the static site that describes the full 20-day curriculum. An agent that wants to understand the workbook loads this file as context rather than scraping all 20 HTML pages.

**Source-of-truth decision:** `docs/curriculum.md` owns the authored curriculum content: skill overviews, narrative framing, prompts, reflection questions, and per-day metadata. HTML day pages render that content for humans. `site/workbook.json` mirrors the structured data that agents need to act on: skill name, invocation, full runnable prompts, output type, and sequencing metadata. If content changes, update `docs/curriculum.md` first, then sync the HTML page and `site/workbook.json`. There is no runtime build step and the shipped site must not depend on generated files. During implementation, agents may use temporary validation scripts to confirm that each page's embedded metadata matches `site/workbook.json`.

**Full schema for a skill day:**
```json
{
  "name": "PM Agent Kit Workbook",
  "version": "1.0",
  "description": "A 20-day challenge for product managers to build fluency with the PM Agent Kit, one skill at a time.",
  "scenario": {
    "company": "Terrain",
    "description": "A two-sided marketplace for bookable outdoor experiences. Guides list surf lessons, alpine climbs, foraging walks, and more. Adventurers discover and book them. Terrain takes an 18% cut of each booking and charges adventurers a 3% platform fee at checkout.",
    "users": ["Guides (supply side)", "Adventurers (demand side)"],
    "product_area": "Marketplace",
    "persona": "You are the Adventurer Experience PM at Terrain. Your team is 6 engineers, 1 designer, and 1 EM. You ship in 2-week sprints. Your current focus is booking conversion, repeat engagement, Android GA, and marketplace-wide work with the Guide Experience PM on Instant Book adoption.",
    "scenario_context": {
      "metrics": {
        "gmv_annualized": "$18M",
        "take_rate_revenue_annualized": "~$3.2M excluding platform fee and Guide Pro",
        "average_booking_value": "$185",
        "active_guides": 2400,
        "monthly_active_adventurers": 47000,
        "guide_listing_activation_rate": "62%",
        "overall_booking_conversion": "2.8%",
        "detail_to_booking_rate": "8.2%",
        "guide_12_month_retention": "71%",
        "adventurer_repeat_rate": "38%",
        "cancellation_rate": "14%",
        "guide_pro_attach_rate": "14%"
      },
      "personas": ["Marco, freelance surf instructor and active Terrain guide", "Jamie, Seattle-based adventurer who books curated outdoor experiences"],
      "strategic_context": {
        "shipped": ["Core marketplace", "Guide Pro", "iOS app", "Instant Book beta"],
        "in_flight": ["Instant Book rollout", "Android GA", "expanded Guide Pro analytics dashboard"],
        "under_consideration": ["Group booking", "Seasonal / multi-day experiences", "Trust & safety improvements", "Social layer"]
      },
      "competitors": ["Airbnb Experiences", "Viator", "GetYourGuide", "REI Adventures"],
      "known_product_problems": ["Guide activation drop-off", "High cancellation rate", "Low adventurer repeat rate", "Instant Book guide adoption"],
      "day_scenario_map": {
        "1": "Draft a PRD for guided listing setup improvements that raise guide activation",
        "2": "Review the guide listing setup PRD before engineering walkthrough",
        "3": "Break the guide listing setup PRD into shippable stories",
        "4": "Plan a sprint around Android GA blockers and Instant Book adoption instrumentation",
        "5": "Draft a leadership update on Instant Book rollout risk and Android GA blockers",
        "6": "Plan discovery for guide activation drop-off",
        "7": "Synthesize cancellation complaints from guides and adventurers",
        "8": "Analyze Instant Book conversion lift or booking funnel drop-off",
        "9": "Compare Terrain against Airbnb Experiences, Viator, GetYourGuide, and REI Adventures",
        "10": "Build the case for an adventurer repeat loop or flexible Instant Book",
        "11": "Compare the four known product problems and sequence the next quarter",
        "12": "Structure the pending decision between mandatory Instant Book and flexible Instant Book",
        "13": "Draft an operating memo for how Terrain evaluates guide/adventurer trade-offs",
        "14": "Prepare for a leadership decision meeting on Instant Book rollout",
        "15": "Synthesize repeated process issues from Android GA and Instant Book rollout retros",
        "16": "Build the launch checklist for Android GA or Instant Book general rollout",
        "17": "Write a one-pager for guide activation investment or adventurer repeat loop",
        "18": "Build a leadership deck for Q3 marketplace priorities",
        "19": "Guide activation drop-off to discovery plan to PRD to tasks",
        "20": "Instant Book adoption or adventurer repeat loop to business case to prioritization to deck to status"
      },
      "reusable_input_sets": ["user_feedback_snippets", "booking_funnel_by_listing_type", "sprint_planning_input", "status_update_input", "retro_notes"]
    }
  },
  "weeks": [
    { "week": 1, "theme": "Writing & Thinking", "days": [1, 2, 3, 4, 5] }
  ],
  "days": [
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
      "required_inputs": "Any rough description of a product problem or feature direction — notes, bullets, stakeholder messages, data points.",
      "prompts": {
        "basic": "...",
        "advanced": "..."
      },
      "reflection_questions": ["...", "...", "..."],
      "expected_output_type": "complete PRD with context, problem, objectives, proposed solution, paths, acceptance criteria, data requirements, open questions, and assumptions",
      "saves_to_knowledge": "knowledge/prds/",
      "prerequisites": []
    }
  ]
}
```

**Schema for a capstone day** (type differs; prompts are a step array):
```json
{
  "day": 19,
  "week": 4,
  "type": "capstone",
  "title": "From Idea to Backlog",
  "theme": "Communication & Integration",
  "estimated_minutes": 45,
  "skills_chained": ["discovery-plan", "prd-draft", "generate-tasks"],
  "steps": [
    {
      "step": 1,
      "skill": "discovery-plan",
      "invocation": "/discovery-plan",
      "prompt": "..."
    },
    {
      "step": 2,
      "skill": "prd-draft",
      "invocation": "/prd-draft",
      "prompt": "Use the discovery plan output above as context. ..."
    },
    {
      "step": 3,
      "skill": "generate-tasks",
      "invocation": "/generate-tasks",
      "prompt": "Use the PRD above as input. ..."
    }
  ],
  "reflection_questions": ["...", "...", "..."],
  "prerequisites": [6, 1, 3]
}
```

### Terrain Company Context Files (`company/`)

The workbook ships pre-filled company context files for Terrain, stored in `company/` and aligned to the pm-agent-kit's `company/` directory structure. Users copy this folder into their pm-agent-kit clone during Day 0 setup. This replaces the kit's stub placeholders with substantive Terrain context, enabling every skill to run at full output quality rather than degraded mode. Users who have already configured the kit for a real company should back up their existing `pm-agent-kit/company` directory before copying Terrain over it.

**Why this matters:** The pm-agent-kit's CLAUDE.md treats stub files (comment-only templates) as unavailable context. Skills that read `facts/product.md`, `facts/customers.md`, `facts/team.md`, `norms/team-process.md`, and `norms/communication.md` are listed as "active runtime input" in the kit's ONBOARDING.md — these five files alone affect output quality for nearly every skill. Pre-filling them for Terrain means challenge participants experience the kit at full capability from Day 1, not a watered-down version.

**The files and their consumption priority:**

| File | Priority | Skills affected |
|------|----------|----------------|
| `facts/product.md` | Active runtime input | doc-review, prd-draft, generate-tasks, status-update, sprint-plan, business-case, and more |
| `facts/customers.md` | Active runtime input | user-feedback, prd-draft, business-case, competitive-intel, data-analysis |
| `facts/team.md` | Active runtime input | status-update, sprint-plan, meeting-brief, decision-log, launch-checklist |
| `norms/team-process.md` | Active runtime input | doc-review, prd-draft, generate-tasks, status-update, sprint-plan, retro-synthesis |
| `norms/communication.md` | Active runtime input | status-update, meeting-brief, presentation-deck |
| `norms/decisions.md` | Conditional | decision-log, business-case, roadmap-prioritization |
| `facts/competitors.md` | Conditional | competitive-intel, user-feedback |
| `interfaces/data-sources.md` | Conditional | data-analysis, user-feedback, discovery-plan |
| `norms/launch-process.md` | Conditional | launch-checklist |
| `interfaces/branding.md` | Conditional | presentation-deck (Slides mode only) |
| `facts/glossary.md` | Conditional | Terminology calibration for doc-review, prd-draft, generate-tasks, status-update, meeting-brief, data-analysis, competitive-intel |
| `interfaces/tools.md` | Future-facing | Not consumed by shipped skills today |
| `interfaces/templates.md` | Future-facing | Not consumed by shipped skills today |

**Secondary benefit:** These files serve as a reference implementation. Challenge participants who later want to configure the kit for their own company can see exactly what "substantive" context looks like versus a stub — and use the Terrain files as a template to replace.

---

## 3. Curriculum: 20-Day Skill Sequence

The sequence is intentional. Week 1 starts with the skills PMs use to evaluate and produce artifacts — the most immediately applicable. Week 2 adds evidence and discovery — the research layer that makes decisions defensible. Week 3 covers strategy and alignment — higher-leverage but dependent on the earlier skills. Week 4 handles communication and caps with integration challenges that chain multiple skills.

### Week 1: Writing & Thinking (Days 1–5)

The first week is about the written artifacts every PM produces constantly. These skills have immediate, tangible outputs — a reviewed PRD, a drafted spec, a set of tickets, a sprint plan, a status update. PMs see the agent's value fast.

| Day | Skill | Title |
|-----|-------|-------|
| 1 | `prd-draft` | Turn a Rough Idea Into a Spec |
| 2 | `doc-review` | Evaluate Like a Senior PM |
| 3 | `generate-tasks` | Break a Spec Into Shippable Stories |
| 4 | `sprint-plan` | Allocate Capacity and Set Goals |
| 5 | `status-update` | Assess and Communicate Delivery Health |

### Week 2: Evidence & Discovery (Days 6–10)

Week 2 adds the research and evidence layer. These skills require more context to run well — but after a week of practice, PMs know how to give the agent what it needs. The capstone of the week is `business-case`, which builds on every skill in the week.

| Day | Skill | Title |
|-----|-------|-------|
| 6 | `discovery-plan` | Map Assumptions Before Committing |
| 7 | `user-feedback` | Extract Signal from Customer Voices |
| 8 | `data-analysis` | Interpret Metrics in Context |
| 9 | `competitive-intel` | Read the Competitive Landscape |
| 10 | `business-case` | Build the Investment Argument |

### Week 3: Strategy & Alignment (Days 11–15)

Week 3 covers the alignment and strategy work that PMs do across teams and with leadership. These skills compound on Weeks 1 and 2: the prioritization rationale built in Day 11 informs the decision log captured in Day 12, and both feed the alignment memo drafted in Day 13.

| Day | Skill | Title |
|-----|-------|-------|
| 11 | `roadmap-prioritization` | Sequence Work and Name Trade-offs |
| 12 | `decision-log` | Capture Decisions That Stay Found |
| 13 | `alignment-memo` | Codify How the Team Operates |
| 14 | `meeting-brief` | Arrive Ready to Decide |
| 15 | `retro-synthesis` | Find Patterns Before They Become Permanent |

### Week 4: Communication & Integration (Days 16–20)

Week 4 completes the kit and ends with two capstone days that chain multiple skills into end-to-end workflows. These are the days that turn individual skill reps into system thinking.

| Day | Skill | Title |
|-----|-------|-------|
| 16 | `launch-checklist` | Coordinate a Multi-Stage Rollout |
| 17 | `one-pager` | Compress a Complex Argument |
| 18 | `presentation-deck` | Build a Narrative for Any Audience |
| 19 | Capstone I | End-to-End: Discovery → Spec → Tasks |
| 20 | Capstone II | Full Strategy Cycle: Case → Prioritization → Deck → Status |

#### Capstone Day Design

Capstone days are not skill showcases — they're integration challenges. The PM is given a scenario and asked to run a sequence of skills in one session, passing the output of each skill as input to the next.

**Day 19 — Capstone I: From Idea to Backlog**  
Scenario: The PM has a rough feature idea backed by user research notes. The challenge is to go from raw input to a backlog-ready set of stories in one session.  
Sequence: `discovery-plan` (map what you still need to learn) → `prd-draft` (structure the feature spec) → `generate-tasks` (decompose into stories with acceptance criteria)  
Prompt: A guided multi-step prompt that explains the scenario and asks the PM to run each skill in sequence, using the prior output as input.

**Day 20 — Capstone II: From Opportunity to Communication**  
Scenario: The PM needs to get a new initiative funded, prioritized, and presented to leadership and the team.  
Sequence: `business-case` (build the investment argument) → `roadmap-prioritization` (sequence it against existing work) → `presentation-deck` (build the leadership narrative) → `status-update` (draft the team communication)  
Prompt: A guided multi-step prompt that threads the same initiative through all four skills in one session.

---

## 4. Design Direction

### Aesthetic
Clean, minimal, typography-first. The workbook should feel like a well-designed physical workbook — focused, readable, no noise. It matches the pm-agent-kit's no-fluff character. Not a course platform, not a dashboard. A practice companion.

### Layout
- Single-column content area, max-width ~700px, centered
- Day navigation strip at the top or a compact sidebar for desktop
- Previous / Next navigation at the bottom of each day page
- Week label visible on each day page (small badge or section header)

### Color System
- **Base:** Off-white background (`#FAFAF9`), near-black text (`#1A1A1A`)
- **Accent:** One brand color for interactive elements (copy button, active day, links). The implementing agent should choose a color that reads as professional and calm — a muted indigo, slate blue, or forest green. Not a saturated primary.
- **Dividers and secondary text:** Light gray (`#E5E5E5`, `#6B6B6B`)

### Typography
- Body: Hosted web font with a system-font fallback, or a system font stack where preferred
- Code / prompts: `font-family: monospace` — prompts should feel like terminal input
- Hierarchy: Clear but subtle — H1 for day title, H2 for section headers, body for everything else

### Prompt Display
- Prompt text in a distinct code block with monospace font and a subtle background (`#F4F4F4`)
- Copy button in the top-right corner of each prompt block
- On copy: button text changes to "Copied ✓" for 2 seconds, then resets

### Accessibility
- All interactive elements keyboard-navigable
- Color contrast meets WCAG AA
- No information conveyed by color alone

---

## 5. Content Voice and Tone

The workbook content (skill overviews, prompt framing, reflection questions) should match the pm-agent-kit's voice:

- **Direct and specific.** Lead with the answer. "This skill is for evaluating existing PM artifacts" — not "This skill can be used to help you in the process of evaluating..."
- **No corporate language.** No "leveraging," no "driving alignment," no "key learnings."
- **Warm but efficient.** The workbook is a companion, not a textbook. It should feel like advice from a senior PM who is direct, not a course designed to feel comprehensive.
- **Opinionated about sequence.** The "why this day" sections should explain the sequencing rationale with conviction — not hedge with "this skill can be useful in many contexts."

---

## 6. Resolved Design Decisions

These were open questions; they are now resolved. The implementing agent should not re-open them.

1. **Repo reference style:** Sample prompts assume the pm-agent-kit is cloned locally — the workbook audience has completed Day 0. The GitHub URL (`https://github.com/nicoladevera/pm-agent-kit`) appears on the landing page, setup page, and README for users arriving cold, but not inside the daily prompts.

2. **Capstone prompt structure:** Capstone days use a sequence of separate prompts — one per skill, labeled Step 1 / Step 2 / Step 3 (or Step 4 for Day 20). The PM runs each step, reviews the output, then runs the next. No single chained mega-prompt. This matches how the `steps` array is modeled in `site/workbook.json`.

3. **Scenario substrate:** All sample prompts across 20 days reference "Terrain," defined in `site/workbook.json` under `scenario`. Terrain is a two-sided marketplace for bookable outdoor experiences — guides on the supply side, adventurers on the demand side, 18% take rate. Using a consistent fictional product makes prompts coherent across the challenge and shows PMs how skills chain together in real workflows. The Terrain context is defined in the site/workbook.json schema above and should be embedded in each day's advanced prompt.

4. **Fixture strategy:** No separate `/fixtures/` directory. Scenario context is embedded inline in the advanced prompts. This keeps the site self-contained (no external files to locate) and makes each day page fully portable. If a skill requires sample data (e.g., `data-analysis` needs a data table), the prompt includes a minimal inline dataset or a note to paste the PM's own data.

5. **README target audience:** The `README.md` is dual-audience. It should open with instructions for human PMs (clone, open `site/index.html`, start Day 0), then include a section titled "For Agents" that explains the `site/workbook.json` schema and how to load the curriculum as context.

6. **"Interactive workbook" definition:** In the context of this project, "interactive" means: copy-paste prompts with a one-click copy button, linked day-by-day navigation, and agent-readable metadata embedded in each page. It does not mean in-browser exercises, progress tracking, or stored state. This should be stated plainly on the landing page so PMs know what to expect.

---

## 7. Acceptance Checks

Before the workbook is considered implementation-complete, the implementing agent must verify each of the following. These are pass/fail — no partial credit.

**HTML & navigation**
- [ ] All 24 HTML files exist: `site/index.html`, `site/setup.html`, `site/kit.html`, `site/terrain.html`, `site/days/day-01.html` through `site/days/day-20.html`
- [ ] All internal links are relative (no `http://localhost`, no absolute `/` paths)
- [ ] Primary onboarding path works: landing page links to setup, setup links to The Kit, The Kit links to Terrain context, Terrain context links to Day 1
- [ ] Previous / Next navigation works correctly on every day page, including day-01 (no "previous") and day-20 (no "next")
- [ ] The site renders correctly when served from a static host or local static server

**Copy functionality**
- [ ] Every prompt block has a copy button
- [ ] Clicking copy changes the button text to "Copied ✓" and resets after 2 seconds
- [ ] Copy works in a hosted browser context, with `execCommand` fallback available when Clipboard API access is unavailable

**site/workbook.json**
- [ ] JSON is valid (passes `JSON.parse` without error)
- [ ] All 20 days are present with no gaps
- [ ] Skill days have `type: "skill"` and `prompts: { basic, advanced }`
- [ ] Capstone days have `type: "capstone"` and `steps: [...]`
- [ ] Every `invocation` field matches an actual skill name in `../pm-agent-kit/.claude/skills/`
- [ ] No `"..."` placeholder values remain in any field

**Content completeness**
- [ ] No day page contains placeholder text (`...`, `TODO`, `[insert]`, `[TBD]`)
- [ ] `site/terrain.html` renders the Terrain scenario from Appendix B / `site/workbook.json.scenario` without contradicting either source
- [ ] Core Terrain facts match across `company/`, `site/terrain.html`, `site/workbook.json`, and day prompts: take rate, platform fee, GMV, take-rate revenue definition, active guides, monthly active adventurers, Instant Book adoption, cancellation rate, repeat rate, and PM persona
- [ ] Every advanced prompt uses at least one specific Terrain detail from Appendix B: metric, persona, roadmap item, competitor, stakeholder, or product rule
- [ ] Every day page has exactly 2–3 reflection questions
- [ ] Every day page has a machine-readable `<script type="application/json" id="day-metadata">` block whose content matches `site/workbook.json` for that day

**CSS / assets**
- [ ] External URLs are limited to approved non-critical presentation assets such as hosted fonts; no remote images or runtime data dependencies
- [ ] Color contrast passes WCAG AA for body text and interactive elements

---

## 8. Success Criteria

The workbook is successful if:

- A PM with no prior Claude Code experience can complete Day 0 and run Day 1's basic prompt without any help beyond the workbook itself
- An agent given `site/workbook.json` and told "run Day 8" can invoke the correct skill with the correct prompt without any other context
- Every day page is self-contained — a PM who lands on Day 11 without having done Days 1–10 understands what the skill is and can run the prompt
- The hosted static site loads, navigates, and copies prompts correctly without a backend

---

## Appendix: Day 2 Content Example

The following is the full authored content for Day 2 (`doc-review`). It serves as the quality anchor and pattern for all other day pages. Implementing agents should match this tone, depth, and specificity for every remaining day.

### Day 2 — Evaluate Like a Senior PM
**Week 1: Writing & Thinking | Skill: `doc-review`**

#### Skill Overview + Why It Matters

`doc-review` evaluates any PM document — a PRD, a ticket, a project brief, a tech spec — and returns structured feedback with severity-rated issues and a smell test. You paste in the document (or point to a file), and the agent identifies what's missing, what's vague, and what would cause problems downstream if left unaddressed.

PMs produce and review documents constantly, but the review rarely happens with the same rigor as the writing. Teams approve PRDs with undefined success metrics, ship tickets with no edge cases, and brief engineers against specs that leave out the most important constraints. `doc-review` applies a consistent quality bar — the one a strong senior PM would apply — to every artifact you run it against.

Day 2 uses the PRD produced on Day 1 as input. That sequence is intentional: the PM sees their own draft evaluated by the same bar they will use for future artifacts. By the end of Day 2, the PM knows what questions to ask before drafting, not just after.

#### Sample Prompts

**Basic**
```
/doc-review

Review this PRD and tell me what's missing:

[paste any existing PRD or spec here]
```

**Advanced**
```
/doc-review

Review this PRD. I'm the Adventurer Experience PM at Terrain, a two-sided marketplace for bookable outdoor experiences — guides list surf lessons, alpine climbs, foraging walks; adventurers discover and book them. The PRD is for a guide listing setup guidance feature intended to raise guide activation from 62% to 75% by Q3. I need this reviewed before I walk the cross-squad engineering group through it on Thursday — flag anything that would cause confusion or require a follow-up meeting to resolve.

[paste the PRD you produced on Day 1 here]
```

*Don't have a Day 1 PRD? Use any ticket, project brief, or even a Confluence page. The skill auto-detects the document type.*

#### Reflection Prompts

1. What did the agent flag that you would have missed or let slide in a peer review?
2. Which severity-high issues surprised you — and why do you think they weren't caught earlier?
3. Where in your current work do you have docs that would benefit from this level of review before they go to engineering or leadership?

---

## Appendix B: Terrain Company Reference

This appendix is the authoritative source of truth for the Terrain scenario. All implementing agents writing day content must draw from this — do not invent company details that contradict it. Where the brief and this appendix conflict, this appendix wins.

---

### Company Snapshot

| Field | Detail |
|-------|--------|
| **Company** | Terrain |
| **Founded** | 2021 |
| **Stage** | Series B ($28M raised) |
| **HQ** | Denver, CO |
| **Total headcount** | ~85 |
| **Product org** | 3 PMs, 2 designers, 14 engineers (2 squads) |
| **Workbook PM persona** | Adventurer Experience PM partnering with Guide Experience on marketplace-wide work |
| **Business model** | 18% take rate on each booking + optional Guide Pro subscription ($29/month) |
| **Adventurer platform fee** | 3% added at checkout (on top of listed price) |
| **GMV (annualized)** | $18M |
| **Take-rate revenue (annualized)** | ~$3.2M, excluding platform fee and Guide Pro |
| **Average booking value** | $185 |
| **Active guides** | 2,400 (across 38 US states) |
| **Monthly active adventurers** | 47,000 |
| **Guide Pro subscribers** | 340 (~14% of active guides) |

**What Terrain does:** Terrain is a two-sided marketplace where independent outdoor guides list bookable experiences — surf lessons, alpine climbs, foraging walks, sea kayaking tours, fly fishing instruction — and adventurers discover and book them. Unlike Airbnb Experiences or Viator, Terrain is built exclusively for the outdoor and adventure category, with curation and verification standards tuned for that context.

---

### Stakeholders

Use these named stakeholders in `meeting-brief`, `status-update`, `presentation-deck`, `alignment-memo`, and capstone prompts when audience or approval context matters.

| Stakeholder | Role | What they care about |
|-------------|------|----------------------|
| **Dana Park** | VP Product | OKR progress, booking conversion, guide retention, GMV growth |
| **Sam Rivera** | Head of Engineering | Technical risk, system reliability, engineering velocity |
| **Priya Anand** | Head of Marketing | Launch timing, app store positioning, external messaging, CAC payback |
| **Chris Okafor** | EM, Adventurer Experience | Scope clarity, platform reliability, sprint predictability, payment edge cases |
| **Jordan Lee** | PM, Guide Experience | Guide activation, guide retention, payout reliability, policy fairness |
| **Mia Santos** | Designer | Trust cues, booking confidence, mobile UX, reducing guide setup friction |
| **Riley Chen** | PM, Trust & Safety | Guide verification, incident reporting, insurance exposure, cancellation disputes |
| **Marcus Webb** | Legal | Regulatory exposure, policy changes, liability, new data collection |

---

### Product Rules and Constraints

These constraints should appear in advanced prompts where relevant. They keep Terrain scenarios specific and prevent generic marketplace answers.

- Terrain takes an 18% cut from guides on each booking and adds a 3% adventurer platform fee at checkout.
- Adventurers can cancel up to 72 hours before the experience for a full refund. Inside 72 hours, support handles exceptions manually.
- Guides receive payouts T+3 after the experience completes.
- Instant Book is currently available to 15% of guides in beta. Eligibility requires rating above 4.7, at least 10 completed bookings, and no safety incidents in the past 12 months.
- Only 22% of beta-eligible guides have opted into Instant Book.
- Instant Book listings show about 32% higher detail-to-booking conversion than request-to-book listings, but guides worry about over-committed calendars and no-shows.
- Guide Pro costs $29/month and includes analytics dashboard, priority search placement, and bulk availability management.
- Android GA is planned in 6 weeks. Remaining blockers are payment edge cases and push notification reliability.
- Terrain operates only in the US today, with guide supply across 38 states.
- Outdoor experiences have weather, safety, and skill-level matching constraints that generic activity marketplaces do not handle well.

---

### User Personas

#### Guide — "Marco"

- Age 34, freelance surf instructor, San Diego CA
- On Terrain for 18 months; runs 3–5 sessions per week through the platform
- Primary income source is Terrain bookings plus a small number of regulars he retains off-platform
- **Pain points:**
  - Juggling availability across Terrain and two other booking platforms manually
  - No-show adventurers when cancellation windows are loose — he loses the slot and gets nothing
  - Getting buried in search results as guide supply grows; no clear way to stand out except reviews
  - Payouts arrive T+3 after the experience; cash flow is tight week-to-week
  - No visibility into how many people viewed his listing versus how many booked
- **Goals:** Consistent, predictable income; ability to raise prices as reputation grows; repeat customers who refer friends

#### Adventurer — "Jamie"

- Age 29, product designer, Seattle WA
- Books 4–6 guided outdoor experiences per year; mix of local day trips and travel-anchored experiences
- Comfortable spending $150–$300 for a half-day experience with a credible guide
- **Pain points:**
  - Hard to assess whether a guide is right for their skill level — reviews don't always surface this
  - Booking takes 1–2 days waiting for guide confirmation; frustrating when comparing options
  - Cancellation anxiety: unclear what happens if the weather turns or they need to cancel last-minute
  - No way to see what experiences friends have done or share trips after completing them
- **Goals:** Authentic, local experiences that feel curated rather than touristy; confidence in the guide's credibility before committing

---

### Key Metrics

These are the numbers the Terrain PM team tracks. Use these in `data-analysis`, `status-update`, `sprint-plan`, and `business-case` prompts to make scenarios specific and realistic.

| Metric | Current value | Context |
|--------|--------------|---------|
| Guide listing activation rate | 62% | Guides who sign up and publish at least one experience within 30 days of registration |
| Search-to-detail rate | 34% | Adventurers who click into a listing after running a search |
| Detail-to-booking rate | 8.2% | Of adventurers who view a listing, the share who book |
| Overall booking conversion | 2.8% | Bookings per search session |
| Guide 12-month retention | 71% | Guides still active 12 months after their first booking |
| Adventurer repeat rate | 38% | Adventurers who complete 2+ bookings in a 12-month window |
| Cancellation rate | 14% | Bookings cancelled by either party before the experience date |
| Guide Pro attach rate | 14% | Active guides who subscribe to Guide Pro |
| Average booking value | $185 | Across all categories; varies from $95 (2-hr kayak tour) to $420 (full-day alpine climb) |
| GMV (annualized) | $18M | |
| Take-rate revenue (annualized) | ~$3.2M | 18% take rate applied to GMV; excludes platform fee and Guide Pro |

---

### Current H1 Priorities

Use these priorities when writing advanced prompts for `roadmap-prioritization`, `business-case`, `one-pager`, `presentation-deck`, `status-update`, and capstone days.

| Priority | Current state | Target / desired outcome |
|----------|---------------|--------------------------|
| Improve guide activation | 62% of registered guides publish a listing within 30 days | Reach 75% without lowering guide quality standards |
| Expand Instant Book safely | Beta is live with 15% of guides; 22% of eligible guides have opted in | Increase eligible-guide opt-in to 45% while maintaining cancellation rate guardrails |
| Ship Android GA | Public beta is live; payment edge cases and push reliability remain open | GA in 6 weeks with no open P0/P1 payment or notification blockers |
| Improve adventurer repeat behavior | 38% of adventurers complete 2+ bookings in 12 months | Reach 45% through better re-engagement and post-experience loops |
| Reduce avoidable cancellations | 14% booking cancellation rate; industry benchmark is 7-9% | Reduce to 10% without creating unfair policy outcomes for guides or adventurers |

---

### Current Strategic Context

#### Shipped (live in production)
- Core marketplace: search, listing pages, availability calendar, booking, payment, reviews
- Guide Pro subscription with analytics dashboard and priority search placement
- iOS app (GA); Android app (public beta)
- Instant Book beta: adventurers can book without guide confirmation for opted-in guides — currently live with 15% of guides

#### In-flight (current quarter)
- **Instant Book rollout** — expanding from beta to all eligible guides; adoption is the key risk (only 22% of beta-eligible guides have opted in)
- **Android GA** — targeting launch in 6 weeks; main blockers are payment edge cases and push notification reliability
- **Expanded Guide Pro analytics dashboard** — expanded version behind Guide Pro paywall; in final QA

#### Under consideration / in discovery
- **Group booking** — splitting a single experience payment across multiple adventurers; commonly requested but complex to implement
- **Seasonal / multi-day experiences** — 3–7 day guided trips (surf camps, mountaineering expeditions); different inventory and pricing model from day experiences
- **Trust & safety improvements** — guide ID verification, insurance partnership (guides currently carry their own), incident reporting flow
- **Social layer** — trip sharing post-experience, friend following, public wishlists; no work has started, but leadership keeps raising it

---

### Competitive Landscape

| Competitor | Positioning | Take rate | Key weakness | Terrain advantage |
|------------|-------------|-----------|-------------|-------------------|
| **Airbnb Experiences** | Largest player; attached to Airbnb accommodation traffic | 20% from hosts | Quality highly variable; verification lax; discovery tied to travel intent, not standalone experience-seeking | Outdoor-specific curation; guides can onboard independently; higher quality bar |
| **Viator (TripAdvisor)** | Dominant in tour-operator segment; mostly professional companies | 20–30% from operators | Very commercial feel; built for tour companies, not independent guides; slow to add new supply | Independent guides can onboard in under 1 hour; more authentic and local |
| **GetYourGuide** | Strong in Europe; growing in the US; focused on city/cultural experiences | 20–30% | Thin supply in outdoor/adventure category in North America; cultural and food tours are the core | Outdoor is Terrain's entire category, not an afterthought; deeper curation in that vertical |
| **REI Adventures** | Premium multi-day guided trips; brand trust is high | Not a marketplace; direct model | No individual guide supply; no day experiences; expensive and limited to REI brand | Much broader supply; independent guides at every price point; day experiences |

---

### Known Product Problems

These are the four active problem areas on Terrain's roadmap. They are seeds for `business-case`, `discovery-plan`, `one-pager`, `roadmap-prioritization`, `alignment-memo`, and `user-feedback` prompts. Each is specific enough to generate a realistic scenario.

#### 1. Guide activation drop-off

38% of guides who register never publish an experience. Exit surveys and support tickets suggest two root causes: the listing setup process is long and unclear (guides don't know what makes a strong listing), and the time-to-first-booking feels uncertain (no signal that listing = income). There is no in-product guidance on pricing, no preview of comparable listings, and no milestone emails after signup. The team has not yet run structured discovery on this — it is an assumption based on anecdotal data.

#### 2. High cancellation rate (14%)

Industry benchmark for marketplace experiences is 7–9%. Terrain's 14% is roughly split: ~60% adventurer-initiated, ~40% guide-initiated. Adventurer cancellations cluster around weather uncertainty and "I found something better" — the cancellation window is currently 72 hours with a full refund, which is generous by design but expensive for guides. Guide cancellations are mostly availability conflicts caused by manual calendar management across platforms. The team has no consensus on whether this is a policy problem, a tooling problem, or both.

#### 3. Low adventurer repeat rate (38%)

Once an adventurer completes a booking, Terrain has no structured re-engagement loop. There are no post-experience push notifications, no personalized "you might like" suggestions based on past activity, no mechanism to share a completed trip, and no friend graph to surface what others have done. The 38% repeat rate is entirely organic — adventurers who come back do so because they remember Terrain, not because Terrain brought them back. The business impact: CAC is ~$38 per adventurer; a 7-point improvement from 38% to 45% would add ~$609k GMV at current scale without incremental acquisition spend.

#### 4. Instant Book guide adoption

Instant Book is in beta with 15% of guides. Of those eligible, only 22% have opted in. Detail-to-booking conversion on Instant Book-eligible listings is about 32% higher than on request-to-book listings — a significant lift — but guides cite two fears: over-committing their availability and absorbing no-shows without a buffer period. The team is debating two directions: mandate Instant Book for guides above a quality threshold (>4.7 rating, >10 completed bookings), or introduce a "flexible Instant Book" mode where guides can set a shorter advance-notice window. No decision has been made. This is the highest-leverage conversion lever the team has identified this quarter.

---

### Day-to-Scenario Mapping

Use this map when authoring advanced prompts. Basic prompts can stay generic; advanced prompts should use the mapped Terrain scenario unless there is a clear reason to choose another Appendix B detail.

| Day | Skill | Terrain scenario to use |
|-----|-------|-------------------------|
| 1 | `prd-draft` | Draft a PRD for guided listing setup improvements that raise guide activation |
| 2 | `doc-review` | Review the guide listing setup PRD before engineering walkthrough |
| 3 | `generate-tasks` | Break the guide listing setup PRD into shippable stories |
| 4 | `sprint-plan` | Plan a sprint around Android GA blockers and Instant Book adoption instrumentation |
| 5 | `status-update` | Draft a leadership update on Instant Book rollout risk and Android GA blockers |
| 6 | `discovery-plan` | Plan discovery for guide activation drop-off |
| 7 | `user-feedback` | Synthesize cancellation complaints from guides and adventurers |
| 8 | `data-analysis` | Analyze Instant Book conversion lift or booking funnel drop-off |
| 9 | `competitive-intel` | Compare Terrain against Airbnb Experiences, Viator, GetYourGuide, and REI Adventures |
| 10 | `business-case` | Build the case for an adventurer repeat loop or flexible Instant Book |
| 11 | `roadmap-prioritization` | Compare the four known product problems and sequence the next quarter |
| 12 | `decision-log` | Structure the pending decision between mandatory Instant Book and flexible Instant Book |
| 13 | `alignment-memo` | Draft an operating memo for how Terrain evaluates guide/adventurer trade-offs |
| 14 | `meeting-brief` | Prepare for a leadership decision meeting on Instant Book rollout |
| 15 | `retro-synthesis` | Synthesize repeated process issues from Android GA and Instant Book rollout retros |
| 16 | `launch-checklist` | Build the launch checklist for Android GA or Instant Book general rollout |
| 17 | `one-pager` | Write a one-pager for guide activation investment or adventurer repeat loop |
| 18 | `presentation-deck` | Build a leadership deck for Q3 marketplace priorities |
| 19 | Capstone I | Guide activation drop-off → discovery plan → PRD → tasks |
| 20 | Capstone II | Instant Book adoption or adventurer repeat loop → business case → prioritization → deck → status |

---

### Reusable Prompt Inputs

These inputs give implementation agents raw material for day prompts. They are intentionally compact enough to paste into prompt blocks.

#### User Feedback Snippets

Use for `user-feedback`, `discovery-plan`, `business-case`, and capstone prompts.

1. **Guide, support ticket:** "I had two people cancel the night before because the forecast looked cloudy. I blocked off my Saturday for that surf lesson and got nothing."
2. **Guide, onboarding survey:** "I got stuck writing the listing. I don't know what photos matter or what price is normal for a beginner surf lesson."
3. **Guide, beta feedback:** "Instant Book sounds useful, but my calendar changes when private clients text me. I can't risk double-booking."
4. **Guide, support ticket:** "I signed up three weeks ago and still haven't had a booking. I can't tell if my listing is bad or if nobody is seeing it."
5. **Adventurer, post-booking survey:** "Waiting two days for the guide to confirm made me book somewhere else for my backup activity."
6. **Adventurer, app review:** "The guide was great, but I wish I knew the skill level better. 'Intermediate' means different things depending on the activity."
7. **Adventurer, cancellation survey:** "Weather looked risky and I couldn't tell whether we'd still go, so I cancelled while I could still get a refund."
8. **Adventurer, interview note:** "I would book more weekend trips if Terrain reminded me based on what I've done before. I forget to come back unless I'm planning a vacation."
9. **Support macro note:** "Cancellation contacts spike Thursday and Friday before weekend trips, especially weather-related questions."
10. **Guide Pro churn note:** "Several guides cancelled Guide Pro after saying analytics were interesting but not actionable enough."

#### Data Table: Booking Funnel by Listing Type

Use for `data-analysis`, `business-case`, `status-update`, and Day 20 capstone.

```csv
listing_type,search_sessions,listing_detail_views,booking_starts,completed_bookings,cancellations
request_to_book,82000,27880,3624,2286,349
instant_book,18000,6660,1012,795,89
guide_pro_request_to_book,26000,10140,1460,982,131
guide_pro_instant_book,9000,3690,648,531,51
```

#### Sprint Planning Input

Use for `sprint-plan`, `status-update`, and capstone prompts.

```text
Sprint length: 2 weeks
Team capacity: 6 engineers, but 1 engineer is on PTO for 4 days and 1 engineer is on support rotation at 50% capacity.
Priority goal: reduce risk for Android GA and instrument Instant Book adoption before rollout expansion.
Carryover:
- AND-142 Payment failure retry state: 80% complete, blocked on QA reproduction
- IB-087 Guide opt-in analytics events: not started, required for rollout decision
Candidate backlog:
- AND-151 Fix push notification reliability for booking reminders (5 pts)
- AND-152 Add payment edge-case regression tests (3 pts)
- IB-088 Add calendar conflict warning before guide opts into Instant Book (5 pts)
- IB-089 Add opt-in funnel dashboard events (3 pts)
- IB-090 Guide-facing Instant Book education modal (2 pts)
- OPS-044 Support macro update for cancellation policy questions (1 pt)
- DATA-027 Cancellation reason taxonomy cleanup (3 pts)
```

#### Status Update Input

Use for `status-update`, `meeting-brief`, and Day 20 capstone.

```text
Audience: Dana Park (VP Product), Jordan Lee (PM, Guide Experience), Priya Anand (Head of Marketing)
Timeframe: This week
Instant Book rollout: eligible guide opt-in remains low at 22%; detail-to-booking conversion lift still strong at about +32% on opted-in listings; guide concern is calendar risk.
Android GA: still targeting launch in 6 weeks; payment edge-case bug remains open; push notification reliability improved from 91% to 97% in latest beta build.
Expanded Guide Pro analytics dashboard: final QA; no launch blocker yet.
Decision needed: whether to keep pushing opt-in education, build flexible Instant Book, or mandate Instant Book for high-quality guides.
Risks: calendar conflict issues could create guide distrust; Android payment bug could slip GA if not resolved next sprint.
```

#### Retro Notes

Use for `retro-synthesis` and process-oriented `alignment-memo` prompts.

```text
Retro: Instant Book Beta — Sprint 14
Went well: conversion lift was clear; guide interviews surfaced concrete adoption blockers.
Didn't go well: analytics events were added after launch, so early funnel data is incomplete. Support learned about the rollout from customer tickets.
Action item: define instrumentation before beta launch. Owner: Fernando Lopez. Status: not started.

Retro: Android GA — Sprint 15
Went well: crash rate improved; QA found payment issues before public launch.
Didn't go well: scope changed mid-sprint after leadership asked for push notification parity with iOS. Payment edge cases were underestimated.
Action item: create launch-readiness checklist for mobile releases. Owner: Chris Okafor. Status: in progress.

Retro: Expanded Guide Pro Analytics Dashboard — Sprint 16
Went well: Guide Pro beta users liked listing view data.
Didn't go well: dashboard shipped with metrics but no recommendations, so guides did not know what action to take. PM and design disagreed late on whether insights should be prescriptive.
Action item: define "actionable analytics" standard before adding new dashboard modules. Owner: Product. Status: not started.
```
