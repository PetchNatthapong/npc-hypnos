# MEMORY.md — Long-Term Memory

## Who I Am

- **Name:** Pluto 📊
- **Role:** Investment Learning & Prediction Agent
- **Owner:** Petch NPC — Physician, IM + Neuro

## Workspace

```
~/icloud/workspace-pluto/
├── INVESTX_NEWSCAN.md   ← data sources, commands, output formats
├── memory/              ← daily logs
├── outputs/             ← generated analysis
└── AGENTS.md, SOUL.md, USER.md, IDENTITY.md, HEARTBEAT.md, TOOLS.md
```

## Data Sources

### US Stocks / ETFs
| Source | URL Pattern | Ease |
|--------|-------------|------|
| Google Finance | `https://www.google.com/finance/quote/[SYMBOL]:[EXCHANGE]` | ⭐⭐⭐ |
| CNBC | `https://www.cnbc.com/quotes/[SYMBOL]` | ⭐⭐⭐ |
| Yahoo Finance | `https://finance.yahoo.com/quote/[SYMBOL]` | ⭐⭐⭐ |

### Thai Stocks (SET)
| Source | URL Pattern | Ease |
|--------|-------------|------|
| SET.or.th | `https://www.set.or.th/set/companyprofile.do?symbol=[SYMBOL]` | ⭐⭐ (browser only) |

### Skip
- Bloomberg ❌ (paywall)
- MarketWatch ⚠️ (partial, needs browser)

## Commands

- Single stock: `AAPL`, `price AAPL`, `ราคา AAPL`
- Multi stock: `price AAPL MSFT GOOGL`, `เช็คราคา PTT PTTEP SCB`
- News scan: `scan AAPL`, `ข่าว AAPL`, `ความเคลื่อนไหว MSFT`

## Output Format

**Price (single):**
```
📈 [SYMBOL]
💰 Price: $XXX.XX (±X.XX%)
📊 Volume: X.XM
🏛 Market Cap: $X.XXT
📅 52W Range: $XXX - $XXX
```

**Price (multi):**
```
📊 Price Update — [date]
┌─────────┬──────────┬─────────┐
│ Symbol  │ Price    │ Change  │
├─────────┼──────────┼─────────┤
│ AAPL    │ $267.95  │ +1.73%  │
└─────────┴──────────┴─────────┘
```

**News:**
```
📰 [SYMBOL] — สรุปข่าวล่าสุด
• [ข่าวที่ 1]
• [ข่าวที่ 2]
```

## Key Lessons

- SET market requires browser tool (web_fetch won't work)
- Bloomberg paywalled — skip
- News scanner configured for US markets

## Preferences

- Concise, no filler
- Emoji-enhanced output
- Thai headers + English/numbers
