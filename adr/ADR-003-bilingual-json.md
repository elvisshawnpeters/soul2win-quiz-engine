# ADR-003: Bilingual JSON Architecture

**Status:** Accepted

**Date:** 2026-07-21

---

## Context

The Assessment Engine supports both English and Tamil learners.

Questions, options, explanations, and subject content must remain independent for each language while using the same application logic.

---

## Decision

Language-specific content is stored in separate directory structures.

```
data/

├── en/
│   ├── biology/
│   ├── chemistry/
│   └── physics/

└── ta/
    ├── biology/
    ├── chemistry/
    └── physics/
```

The application determines the active language and loads content from the corresponding folder.

Configuration files remain language-independent.

---

## Rationale

This architecture:

- Keeps application logic independent from language.
- Simplifies translation workflows.
- Allows QA to review each language separately.
- Supports future languages without changing application code.

---

## Consequences

### Advantages

- Reusable application logic.
- Clean folder organization.
- Easier translation management.
- Better maintainability.
- Scalable to additional languages.

### Trade-offs

- Duplicate folder structures.
- Translations require synchronization across languages.
