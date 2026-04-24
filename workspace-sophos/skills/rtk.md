# RTK — Reduced Token Kit

**Learned:** 2026-04-16
**Source:** NPC's tip about Claude Code optimization

---

## 🎯 What is RTK?

RTK = **Reduced Token Kit** — tool ที่ย่อ output จาก terminal ก่อนส่งกลับให้ Claude Code อ่าน

---

## 📊 Impact

| Metric | Before RTK | After RTK | Reduction |
|--------|-----------|-----------|-----------|
| Terminal output | 3.16M tokens | 919K tokens | **70.9%** |
| Commands processed | 1,890 commands | - | - |

---

## 🔧 How it Works

### Problem:
Claude Code รัน command → terminal output ยาวมาก → ส่งกลับหมด → ใช้ token เยอะ

### Solution:
RTK คัด filtering output ก่อนส่งกลับ

**Filter ออก:**
- Decoration (สีสัน, formatting ที่ไม่จำเป็น)
- Boilerplate (ข้อความซ้ำๆ)
- รายละเอียดจุกจิก (clutter ที่ไม่มีใจความ)

**เก็บไว้:**
- ใจความสำคัญ (important content)
- ข้อมูลที่ใช้งานได้จริง

---

## 📝 Example

```
git status
```

**Before RTK:**
```
On branch main
Your branch is ahead of 'origin/main' by 3 commits.
Changes not staged for commit:
  modified:   README.md
  modified:   src/index.js
  modified:   src/app.js

no changes added to commit (use "git add" and/or "git commit -a")
```

**After RTK:**
```
On branch main
Changes: README.md, src/index.js, src/app.js
```

---

## 🎯 Benefit

- Output สั้นลง → token ใช้น้อยลง → Claude Code limit อยู่นานขึ้น
- สำหรับ daily users ของ Claude Code → ช่วยประหยัด token มาก

---

## 💡 Related Concept

Claude Code limit หมดเร็วมีหลายปัจจัย:
1. **Terminal output** ← RTK ช่วยได้
2. Conversation history
3. File reading
4. Context size

---

_Last updated: 2026-04-16_