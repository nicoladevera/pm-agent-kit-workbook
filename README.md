# PM Agent Kit Workbook

A 20-day challenge for product managers to build fluency with the PM Agent Kit — one skill a day.

## Quick start

Visit the site: **https://nicoladevera.github.io/pm-agent-kit-workbook**

Start at the Setup page (Day 0). You do not need to clone this repo — everything you need is on the site.

## What's in here

- `site/` — Static workbook website (published to GitHub Pages from the `site/` directory)
- `site/index.html` — Landing page with challenge overview
- `site/setup.html` — Day 0: how to install the PM Agent Kit and configure it for Terrain
- `site/terrain.html` — The fictional company context used throughout the 20 days
- `site/days/day-01.html` through `site/days/day-20.html` — One day page per skill
- `site/workbook.json` — Machine-readable curriculum index (see below)
- `site/downloads/terrain-company-context.zip` — Downloadable Terrain context ZIP served from the site
- `company/` — Source files for the Terrain context. Available as a downloadable ZIP from the setup page on the site.

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
  "skills_chained": ["discovery-plan", "prd-draft", "backlog-tasks"],
  "steps": [
    { "step": 1, "skill": "discovery-plan", "invocation": "/discovery-plan", "prompt": "..." },
    { "step": 2, "skill": "prd-draft", "invocation": "/prd-draft", "prompt": "..." },
    { "step": 3, "skill": "backlog-tasks", "invocation": "/backlog-tasks", "prompt": "..." }
  ],
  "reflection_questions": ["...", "...", "..."]
}
```

To run a specific day, load `site/workbook.json`, find the day object by `day` number, use the `invocation` field to call the skill, and use `prompts.advanced` (or the relevant step prompt for capstones) as the prompt.

Each HTML day page also embeds its metadata as `<script type="application/json" id="day-metadata">` in the page head — this makes individual pages self-describing.
