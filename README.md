# PM Agent Kit Workbook

A 20-day challenge for product managers to build fluency with the PM Agent Kit — one skill a day.

## Quick start

1. Clone this repo: `git clone https://github.com/nicoladevera/pm-agent-kit-workbook`
2. Open `site/index.html` in a browser — it works from the filesystem, no server needed
3. Start at `site/setup.html` (Day 0) if you haven't installed the PM Agent Kit yet
4. Or jump to Day 1 if you have: `site/days/day-01.html`

## What's in here

- `site/` — Static workbook website. Open `site/index.html` to start.
- `site/index.html` — Landing page with challenge overview
- `site/setup.html` — Day 0: how to install the PM Agent Kit and configure it for Terrain
- `site/terrain.html` — The fictional company context used throughout the 20 days
- `site/days/day-01.html` through `site/days/day-20.html` — One day page per skill
- `site/workbook.json` — Machine-readable curriculum index (see below)
- `company/` — Pre-filled Terrain context files. Copy these into your pm-agent-kit clone during setup.

## Deployment

This repo deploys the static site to GitHub Pages with GitHub Actions. The workflow publishes the `site/` directory directly, so GitHub Pages should be configured to use **GitHub Actions** as its source.

## PM Agent Kit

The workbook is built around the PM Agent Kit: https://github.com/nicoladevera/pm-agent-kit

---

## For Agents

To load the full curriculum as context, read `site/workbook.json`. It contains:

- `scenario`: The full Terrain company context (metrics, personas, product rules, strategic context)
- `weeks`: The four-week curriculum structure with themes
- `days`: All 20 day objects with skill metadata, full prompts, reflection questions, and sequencing data

**Schema for skill days:**
```json
{
  "day": 1,
  "week": 1,
  "type": "skill",
  "skill": "prd-draft",
  "invocation": "/prd-draft",
  "title": "Turn a Rough Idea Into a Spec",
  "prompts": { "basic": "...", "advanced": "..." },
  "reflection_questions": ["...", "...", "..."],
  "prerequisites": []
}
```

**Schema for capstone days:**
```json
{
  "day": 19,
  "week": 4,
  "type": "capstone",
  "title": "From Idea to Backlog",
  "skills_chained": ["discovery-plan", "prd-draft", "generate-tasks"],
  "steps": [
    { "step": 1, "skill": "discovery-plan", "invocation": "/discovery-plan", "prompt": "..." },
    { "step": 2, "skill": "prd-draft", "invocation": "/prd-draft", "prompt": "..." },
    { "step": 3, "skill": "generate-tasks", "invocation": "/generate-tasks", "prompt": "..." }
  ],
  "reflection_questions": ["...", "...", "..."]
}
```

To run a specific day, load `site/workbook.json`, find the day object by `day` number, use the `invocation` field to call the skill, and use `prompts.advanced` (or the relevant step prompt for capstones) as the prompt.

Each HTML day page also embeds its metadata as `<script type="application/json" id="day-metadata">` in the page head — this makes individual pages self-describing.
