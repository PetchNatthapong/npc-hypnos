# 🦸 Superpowers — Software Engineering Methodology for AI Agents

**Taught by:** Petch NPC  
**Date:** 2026-04-16  
**Source:** https://github.com/obra/superpowers

---

## Overview

Superpowers คือ plugin ที่ยก Software Engineering Methodology ระดับโลกมาใส่ AI coding agents (Claude Code, Cursor, Codex, Gemini) เพื่อเปลี่ยนจาก AI ที่ "สุ่มเดา" ให้กลายเป็น AI ที่ "คิดเป็นระบบ"

---

## Core 4-Step Disciplined Workflow

### 1. Brainstorming (คิดก่อนลุย)
- เมื่อได้รับคำสั่ง AI ยังไม่เขียนโค้ด
- จะ "ยิงคำถามกลับ" เพื่อเค้น Requirement ที่แท้จริง
- เสนอแผนการดีไซน์ให้คุณ Approve ก่อนเสมอ

### 2. Writing Plans (ย่อยงานให้จิ๋ว)
- แตกโปรเจกต์ยากๆ ให้กลายเป็นงานย่อยๆ
- แต่ละ task ใช้เวลา 2-5 นาที
- ระบุไฟล์ที่ต้องเข้าถึงอย่างแม่นยำ
- ลดโอกาสที่ AI จะหลงทิศหลงทาง

### 3. Test-Driven Development (TDD)
นี่คือหัวใจสำคัญ!
- **RED:** เขียน test ให้ error ก่อน
- **GREEN:** แล้วค่อยเขียนโค้ดเพื่อให้ test ผ่าน
- **REFACTOR:** ปรับปรุงโค้ดให้ดีขึ้น
- งานที่ได้เสถียรและใช้งานจริงได้ทันที

### 4. Systematic Debugging (แก้บั๊กแบบนักสืบ)
- ไม่เดาสุ่มแก้ไปเรื่อยๆ
- มีกระบวนการ 4 ขั้นตอนเพื่อหา Root Cause
- ตรวจสอบซ้ำจนมั่นใจว่าแก้หายขาดจริงๆ

---

## Auto-Trigger Skills

| Skill | Trigger |
|-------|---------|
| brainstorming | ก่อนเขียนโค้ดเสมอ |
| using-git-worktrees | หลัง approve design |
| writing-plans | หลัง approve design |
| subagent-driven-development | มี plan แล้ว |
| test-driven-development | ระหว่าง implement |
| requesting-code-review | ระหว่าง tasks |

---

## Key Insight

> ขั้นตอนที่ถูกต้อง = ประหยัดเวลามหาศาล เพราะไม่ต้องรื้อโค้ดทำใหม่หลายรอบ

**Superpowers เปลี่ยน AI จาก:**
- ❌ "เครื่องมือพิมพ์ตามสั่ง"
- ✅ "เพื่อนร่วมทีมระดับ Senior" ที่ช่วยคิดและวางระบบอย่างมืออาชีพ

---

## Installation

```bash
# Claude Code
/plugin install superpowers@claude-plugins-official

# Claude Code (alternative)
/plugin marketplace add obra/superpowers-marketplace
/plugin install superpowers@superpowers-marketplace

# Codex
Fetch https://raw.githubusercontent.com/obra/superpowers/refs/heads/main/.codex/INSTALL.md

# Cursor
/add-plugin superpowers

# Gemini
gemini extensions install https://github.com/obra/superpowers
```

---

## Related

- LLM Wiki Pattern
- Hotcache Concept
