# 📚 LLM Wiki Pattern

**Taught by:** Petch NPC  
**Date:** 2026-04-16

---

## Core Concept

Instead of RAG (retrieving raw documents every query), the LLM incrementally builds a **persistent wiki** that compounds over time. Knowledge is compiled once and kept current, not re-derived on every query.

---

## Three Layers

### 1. Raw Sources
- Immutable collection of articles, papers, images, data
- Source of truth — LLM reads but never modifies

### 2. The Wiki
- LLM-generated markdown files (summaries, entity pages, concept pages, synthesis)
- LLM owns this layer entirely — creates, updates, maintains cross-references
- User reads it; LLM writes it

### 3. The Schema
- Config file (e.g., AGENTS.md) telling LLM how wiki is structured
- Conventions, workflows, page formats
- Co-evolved between user and LLM

---

## Operations

### Ingest
1. Drop new source into raw collection
2. LLM reads it
3. Discusses key takeaways with user
4. Writes summary page in wiki
5. Updates index
6. Updates relevant entity/concept pages
7. Appends entry to log

### Query
1. User asks question
2. LLM searches wiki for relevant pages
3. Synthesizes answer with citations
4. Good answers filed back into wiki as new pages

### Lint (Periodic Health-Check)
- contradictions between pages
- stale claims superseded by new sources
- orphan pages with no inbound links
- important concepts missing their own page
- missing cross-references
- data gaps fillable with web search

---

## Special Files

### index.md
- Content-oriented catalog
- Each page listed with link, one-line summary, metadata (date, source count)
- Organized by category (entities, concepts, sources)
- Updated on every ingest
- LLM reads index first to find relevant pages

### log.md
- Chronological, append-only record
- Entries: ingests, queries, lint passes
- Consistent prefix format (e.g., `## [2026-04-02] ingest | Article Title`)
- Parseable with grep

---

## Key Insight

> The tedious part of maintaining a knowledge base is not reading or thinking — it's the bookkeeping. LLMs don't get bored, don't forget cross-references, and can touch 15 files in one pass.

---

## Optional Tools

- **Obsidian Web Clipper** — browser extension to convert web articles to markdown
- **qmd** — local search engine for markdown (BM25/vector + LLM re-ranking, CLI + MCP)
- **Obsidian Dataview** — query over YAML frontmatter
- **Marp** — markdown-based slide decks
- **Download images locally** — set attachment folder path in Obsidian settings

---

## Why This Works

Humans abandon wikis because maintenance burden grows faster than value. LLMs handle the bookkeeping that no one wants to do.

**Human's job:** curate sources, direct analysis, ask good questions, think about meaning  
**LLM's job:** everything else — summarizing, cross-referencing, filing, bookkeeping

---

## Related

- Vannevar Bush's Memex (1945) — personal curated knowledge store with associative trails
- Note: this document is intentionally abstract. Implementation depends on domain and preferences.
