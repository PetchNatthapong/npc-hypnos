# 💬 Effective Prompts

prompts ที่ได้ผลดีสำหรับงานต่างๆ

---

## 📝 Review Article Prompt

```
สร้าง review article เรื่อง [topic]

Requirements:
- ความยาว: ไม่เกิน 5 หน้า A4
- ระดับ: Expert
- Format: Markdown
- ภาษา: ส่วนหัวไทย, เนื้อหา English/ไทย

Sources: [list sources]
```

---

## 🔍 Tavily Search Prompt

```
ค้นหา sources สำหรับ [topic] จากเว็บที่น่าเชื่อถือ
แสดงเป็นตารางพร้อม:
- ชื่อ source
- ความน่าเชื่อถือ (1-5 stars)
- สรุปสั้นๆ
```

---

## 📊 Long Case Setup

```
เริ่ม long case เรื่อง [chief complaint]
ระดับ: [normal|hard]
```

---

## 🎨 Visual HTML Creation

```
สร้าง visual HTML summary สำหรับ [topic]
Style: WHITE/LIGHT mode
มี: summary, tables, key points
```

---

## 📋 Daily Report (Weather + Fuel)

```
ทำรายงานประจำวัน:
1. Weather (Hat Yai) - curl wttr.in
2. Fuel prices - search latest

Format: ASCII table in code block
```

---

## 🧹 File Organization Check

```
Check Agent & Access Report:
1. List all agents
2. Check folders
3. Report if any files outside FOR OPENCLAW
4. Delete only OpenClaw-created files
```

---

## ✅ Task Regulation Template

```
✅ รับทราบ [task]
⏱️ ใช้เวลาประมาณ X นาที

🔄 กำลังทำ: [step]
📊 Progress: X/Y

✅ เสร็จแล้ว!
📄 ไฟล์: [path]
```

---

_Last updated: 2026-04-16_