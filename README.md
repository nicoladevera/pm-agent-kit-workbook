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
- `site/days/day-01.html` through `site/days/day-20.html` — One page per skill day or capstone
- `site/workbook.json` — Machine-readable curriculum index (see below)
- `site/downloads/terrain-company-context.zip` — Downloadable Terrain context ZIP served from the site
- `company/` — Source files for the Terrain context. Available as a downloadable ZIP from the setup page on the site.

## Deployment

This repo deploys the static site to GitHub Pages with GitHub Actions. The workflow publishes the `site/` directory directly, so GitHub Pages should be configured to use **GitHub Actions** as its source.

## Analytics

The workbook site uses Google Analytics 4 (GA4) to understand launch traffic and on-site behavior.

- GA4 Measurement ID: `G-L6MZH516QP`
- Implementation: `site/assets/js/main.js`
- The Measurement ID is public by design and is safe to commit. It is not an API secret.
- Analytics are disabled for local development: `file://`, `localhost`, `127.0.0.1`, and `0.0.0.0` do not send events.

The shared site script loads `gtag.js` and configures GA4 for every page that includes `site/assets/js/main.js`. This keeps the tag in one place instead of duplicating the Google tag snippet across all HTML files.

Custom events currently tracked:

- `cta_click` — primary and secondary call-to-action links
- `copy_prompt` — prompt copy buttons
- `download_click` — downloadable assets
- `outbound_click` — external links

GA4's standard and enhanced measurement events cover baseline behavior such as page views, scrolls, and other default web interactions configured in the GA4 stream.

To verify collection after deployment:

1. Visit the live site: `https://nicoladevera.github.io/pm-agent-kit-workbook/`
2. Open Google Analytics: https://analytics.google.com/
3. Select the `PM Agent Kit Workbook` property and go to **Reports > Realtime**.
4. Click around the site and confirm realtime activity appears.

GA4 may show realtime users before setup banners such as "No data received from your website yet" or stream-level warnings clear. Treat realtime activity as the strongest immediate signal. Summary reports and setup-status warnings can lag, especially during the first 24-48 hours after installation.

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
