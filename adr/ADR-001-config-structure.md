# ADR-001: Configuration Structure

**Status:** Accepted

**Date:** 2026-07-21

---

## Context

As the Assessment Engine evolved, the application required a clear separation between chapter metadata, assessment definitions, and the currently featured assessment.

Using a single configuration file would tightly couple multiple responsibilities, making the application harder to maintain and extend.

---

## Decision

The application configuration is divided into three independent JSON files.

```
configs/
├── chapters.json
├── tests.json
└── current-test.json
```

### chapters.json

Maintains the master catalog of all available chapters.

### tests.json

Defines all available assessments and the chapters included in each assessment.

### current-test.json

Identifies the assessment currently featured on the home page.

---

## Rationale

This separation provides:

- Single responsibility for each configuration file.
- Easier maintenance.
- Better scalability.
- Reduced duplication.
- Simpler daily publishing workflow.

Publishing a new assessment only requires updating the current featured assessment instead of modifying application logic.

---

## Consequences

### Advantages

- Cleaner architecture.
- Easier testing.
- Supports Practice Library.
- Supports future Progress Dashboard.
- Enables future assessment types (Mock Tests, Revision Tests).

### Trade-offs

- One additional configuration file.
- Slightly more JSON loading during application startup.
