# MEMORY.md — Long-Term Memory

## Who I Am

- **Name:** Hypnos 🌙
- **Role:** Generalist AI Agent — main hub + orchestrator
- **Owner:** Petch NPC — Physician, IM + Neuro 🇹🇭
- **Workspace:** `~/icloud/workspace-hypnos/`
- **Bot:** @KFosterBot (NOT @HypnosBot)
- **Token:** `8123197166:AAFQafWxt8zBUQo1m9CBlBTxTFE2YueUl2A`
- **Telegram Chat ID:** `8763794609`

## Agent System

### Mac Agents (this environment)

| Agent | Workspace | Role |
|-------|-----------|------|
| Hypnos 🌙 | `workspace-hypnos` | Main hub (you are here) |
| Nevr 🧠 | `workspace-nevr` | Neurology learning |
| Pluto 📊 | `workspace-pluto` | Investment + prediction |
| Sophos 🧐 | `workspace-sophos` | General content/learning |

### VPS Agents (separate — do NOT connect from Mac)

| Agent | Role |
|-------|------|
| IMBR | Medical review |
| Hulks | Content creation |

## Infrastructure

- **Sandbox:** `~/icloud/` = `~/Library/Mobile Documents/com~apple~CloudDocs/FOR HERMES/`
- **Model:** MiniMax-M2.7
- **Provider:** MiniMax

## Deployment — GitHub + Cloudflare Pages

- **GitHub repo:** `PetchNatthapong/npc-hypnos` (public)
- **Cloudflare Pages:** `https://npc-hypnos.pages.dev/` — live, password-protected
- **Public site password:** `npc-atlas`
- **Build output:** `public/` folder (HTML dashboards only)
- **Custom domain:** `npc-hub.com` — DNS pointed to Cloudflare, propagating
- **Auto-deploy:** On every `git push origin main` via Cloudflare Pages

## Git Workflow

- **Repo root:** `~/icloud/` (FOR HERMES) — NOT `workspace-hypnos/`
- **Public deploy:** `~/icloud/public/` — only HTML files, excluded from `.gitignore`
- **Post-commit hook:** `~/icloud/.git/hooks/post-commit` — auto-push on commit
- **Auto-push cron:** every 30 min (job_id `c26a3bde6139`)
- **Files excluded from git:** `memory/`, `state/`, `.obsidian/`, `cases/`, `.DS_Store`
- **Public files tracked:** `public/*.html`, `public/_worker.js`

## Telegram Notifications

- Nevr sends to @KFosterBot (token `8123197166:***`, chat ID `8763794609`)
- Message format: `"✅ Nevr lesson done — [topic]. Time to push workspace-nevr/ files to git."`
- Use `send_message` or curl to Telegram Bot API

## Naming Convention

Mac agents: lowercase, NO "Her" prefix (e.g., sophos, pluto, nevr, hypnos)

## Petch's Preferences

- Concise, efficient — no filler
- Direct answers over long explanations
- Updates on significant actions, not every step

## Past Work

- 2026-04-24: Master plan executed — absorbed Shiba, created Sophos/Pluto/Nevr, deleted old agents
- 2026-04-24: Set up Cloudflare Pages deployment — GitHub repo `PetchNatthapong/npc-hypnos`, `public/` folder only (HTML/PDF), password gate `npc-atlas`
- 2026-04-24: Created Hypnos Hub + 3 agent HTML dashboards, stripped broken links, pushed to `public/`
- 2026-04-24: Set up auto-push cron (every 30 min) + post-commit hook for git sync
- 2026-04-24: Fixed bot name: @KFosterBot (not @HypnosBot) across all workspaces
- 2026-04-25: Updated Hypnos MEMORY.md with full infrastructure + deployment docs
