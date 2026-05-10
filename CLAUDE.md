# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A static workbook site for a 20-day PM Agent Kit challenge. No build step, no framework, no package manager — open `site/index.html` directly in a browser.

## Viewing the site

```bash
open site/index.html          # open landing page
open site/days/day-01.html    # open a specific day
open site/setup.html          # open Day 0 setup guide
```

## Architecture

### Source of truth hierarchy

1. `docs/curriculum.md` — canonical curriculum content. Update here first if content changes.
2. `site/workbook.json` — machine-readable index of all 20 days. Sync from `docs/curriculum.md` when content changes.
3. `site/days/day-NN.html` — rendered HTML for each day. Each page embeds its own metadata as `<script type="application/json" id="day-metadata">` in the page `<head>`.

When updating curriculum content, the change sequence is: `docs/curriculum.md` → `site/workbook.json` → `site/days/*.html`.

### Site structure

- `site/assets/css/styles.css` — single stylesheet, "Soft Studio" aesthetic. CSS custom properties define the full design token set (colors, spacing, typography). Light/dark theme via `[data-theme="dark"]` on `<html>`.
- `site/assets/js/main.js` — single vanilla JS file. Handles: theme toggle (persisted via `localStorage` key `pmakw-theme`), mobile sidebar toggle, copy-to-clipboard for prompt blocks, and active nav highlighting.
- `site/days/day-NN.html` — all 20 day pages share the same HTML shell (topbar, sidebar, main content). The sidebar lists all days grouped by week.
- `site/index.html`, `site/setup.html`, `site/terrain.html` — top-level pages with the same shell.
- `site/workbook.json` — machine-readable curriculum index, published with the static site.

### Fictional company context

`company/` contains pre-filled context files for "Terrain" (a fictional outdoor-experience marketplace). These are copied into the user's `pm-agent-kit/company/` directory during Day 0 setup — they are not consumed by this repo itself. The full scenario (metrics, personas, product rules) is also embedded in `site/workbook.json` under `scenario`.

### site/workbook.json schema

Two day types:

**Skill day:**
```json
{
  "day": 1, "week": 1, "type": "skill",
  "skill": "prd-draft", "invocation": "/prd-draft",
  "title": "...",
  "prompts": { "basic": "...", "advanced": "..." },
  "reflection_questions": ["..."],
  "prerequisites": []
}
```

**Capstone day:**
```json
{
  "day": 19, "week": 4, "type": "capstone",
  "title": "...",
  "skills_chained": ["discovery-plan", "prd-draft", "generate-tasks"],
  "steps": [
    { "step": 1, "skill": "...", "invocation": "/...", "prompt": "..." }
  ],
  "reflection_questions": ["..."]
}
```

## Content conventions

- Curriculum tone and depth should match the Day 2 (`doc-review`) content as a quality anchor — see `docs/curriculum.md`.
- Days 1 and 2 are intentionally sequenced: Day 1 produces a PRD with `/prd-draft`; Day 2 reviews it with `/doc-review`.
- Each day page's embedded `<script type="application/json" id="day-metadata">` must stay in sync with `site/workbook.json`.
- The `advanced` prompt in each day always includes the full Terrain scenario context needed; the `basic` prompt is context-free.
