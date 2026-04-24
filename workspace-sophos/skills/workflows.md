# ⚙️ General Workflows

workflows ทั่วไปสำหรับงานต่างๆ

## 📝 Review Article Workflow

```
1. User → ส่ง topic
2. Agent → ค้นหา sources (Tavily)
3. Agent → แสดงตารางให้เลือก
4. User → เลือก sources
5. Agent → บอกเวลา
6. Agent → Research + Write
7. Agent → Humanizer (optional)
8. Agent → Visual HTML
9. Agent → Export PDF
10. Agent → บันทึก + ส่งให้ user
```

**Output Locations:**
- MD: `FOR OPENCLAW/IMBR/Review/[topic].md`
- PDF: `FOR OPENCLAW/IMBR/Review/[topic].pdf`
- HTML: `FOR OPENCLAW/IMBR/Review/[topic]-Visual.html`

## 🔍 Research Workflow

```
1. Define topic
2. Tavily search (advanced mode)
3. Filter high-quality sources
4. Fetch content
5. Summarize
6. Present findings
```

## 📊 Daily Report Workflow

```
1. Weather check (wttr.in)
2. Fuel prices (web search)
3. Format as ASCII table
4. Send to Telegram
```

## 🧹 Agent Check Workflow (Daily)

```
1. List agents
2. Check workspace folders
3. Report misplaced files
4. If found:
   - Find cause
   - Ask user for action
   - DO NOT delete non-OpenClaw files
```

## 📤 File Transfer Workflow

```
1. Identify source folder
2. Identify target folder (in FOR OPENCLAW)
3. Copy files
4. Verify copy
5. Delete from source (if safe)
6. Report to user
```

## 🔄 Agent Memory Update Workflow

```
1. After task completion
2. Check for new learnings
3. Update Knowledge Base:
   - medical-patterns.md
   - skills-reference.md
   - effective-prompts.md
4. Personal learnings → MEMORY.md (main only)
```

---
_Updated: 2026-03-29_