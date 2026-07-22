> This document explains the architecture of the Assessment Engine.
>
> For installation instructions, see `README.md`.
>
> For development roadmap, see `docs/roadmap.md`.
>
> For AI prompt documentation, see `prompt-library/docs/README.md`.

# soul2win Assessment Engine Architecture

## Purpose

The soul2win Assessment Engine is a data-driven bilingual assessment platform designed to deliver daily NEET practice tests without requiring application code changes.

The application separates configuration, content, and presentation so that new assessments can be published by updating JSON files only.

---

# Project Structure

```
configs/
│
├── chapters.json
├── tests.json
└── current-test.json

data/
├── en/
│   ├── biology/
│   ├── chemistry/
│   └── physics/
│
└── ta/
    ├── biology/
    ├── chemistry/
    └── physics/

js/
css/
index.html
```

---

# Configuration Files

## chapters.json

Purpose:

Master catalog of all available chapters.

Responsibilities:

- Maintains chapter metadata.
- Maps chapter titles to JSON file names.
- Shared across all assessments.
- Single source of truth for chapter information.

Example

```json
{
  "chapter": 1,
  "title": "The Living World",
  "file": "the-living-world"
}
```

---

## tests.json

Purpose:

Master catalog of all available assessments.

Responsibilities:

- Defines every published assessment.
- Maps each assessment to its subject files.
- Powers the Practice Library.
- Enables students to revisit previous tests.
- Supports future expansion (Mock Tests, Revision Tests, etc.).

Example

```json
{
  "day": 1,
  "subjects": [
    {
      "name": "biology",
      "file": "the-living-world"
    },
    {
      "name": "physics",
      "file": "physical-world"
    },
    {
      "name": "chemistry",
      "file": "basic-concepts"
    }
  ]
}
```

---

## current-test.json

Purpose:

Identifies the assessment currently featured on the home page.

Responsibilities:

- Keeps the application focused on today's recommended assessment.
- Requires only one value to be updated each day.

Example

```json
{
  "currentDay": 6
}
```

---

# Content Files

Question banks are stored separately for each language.

```
data/
    en/
    ta/
```

Each chapter contains its own JSON file.

Example

```
data/en/biology/the-living-world.json
data/ta/biology/the-living-world.json
```

---

# Assessment Flow

```
Home Page

↓

Load current-test.json

↓

Read currentDay

↓

Load tests.json

↓

Find matching assessment

↓

Load chapter JSON files

↓

Render quiz
```

---

# Practice Library Flow

```
Practice Library

↓

Load tests.json

↓

Display available assessments

↓

Search by day, subject or chapter

↓

Student selects assessment

↓

Start Test
```

---

# Design Principles

- Data-driven architecture.
- Separation of configuration and content.
- No application code changes for new daily assessments.
- Bilingual support (English & Tamil).
- Reusable assessment engine.
- Scalable for future learning products.

---

# Future Enhancements

- Student Progress Dashboard
- Local progress tracking
- Mock Tests
- Revision Tests
- Subject-wise practice
- Chapter-wise search
- Performance analytics
- AI-generated personalized revision recommendations
