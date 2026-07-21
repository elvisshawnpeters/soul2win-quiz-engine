# SOP-00

# soul2win Quality Standard

Version: 1.0
Status: Active
Last Updated: 18 July 2026

---

## Purpose

This document defines the universal quality standards for all AI-generated educational content produced by soul2win.

Every subject-specific SOP inherits these standards unless explicitly overridden.

The objective is to ensure that all generated content is:

- Accurate
- Student-friendly
- Pedagogically sound
- Production-ready
- Consistent across all generators

These standards apply to every generator, including question generation, translation, quality review, chapter summaries, blogs, revision sheets, flash cards, and future content generators.

## Core Principles

Every generated output must follow these guiding principles.

### Accuracy First

Correctness is always more important than speed.

### Student First

Content should be written for students, not for AI systems or prompt debugging.

### Faculty Quality

Questions, explanations, and translations should read as though they were prepared by an experienced NEET faculty member.

### NCERT Source Hierarchy

For all educational content generation, review, and translation,
the configured NCERT class and chapter shall be treated as the primary and authoritative source.

Do not introduce concepts, terminology, facts, or learning objectives outside the configured NCERT syllabus unless explicitly instructed.

When supplementary knowledge is required for clarity, it must not contradict or extend beyond the NCERT learning objectives.

### Production Ready

soul2win follows a Zero-Edit Publishing Standard.

The expected outcome of every generator is publication-ready content that can be published without manual editing.

Quality review exists to verify compliance with this standard, not to rewrite the generated content.

### Consistency

The same terminology, formatting, and writing style should be maintained across all generators.

## Student Experience Standard

Every learner should receive content that is clear, accurate, engaging, and immediately usable for exam preparation.

Student-facing content must follow these standards:

### Natural Language

Write in clear, natural academic language that resembles the teaching style of an experienced educator.

Avoid awkward AI-generated wording, repetitive phrases, and unnecessary complexity.

### Hidden Implementation Details

Never expose internal prompt instructions, metadata, generation labels, workflow information, debugging information, or reasoning traces.

Examples of prohibited content include:

- NCERT line-based
- Application Question
- Bloom Level
- Internal Review
- Prompt Notes
- Debugging information
- Reasoning traces

Students should only see polished educational content.

### No Internal Reasoning Leakage

Students must only see polished educational content.

Do not expose any internal reasoning,
draft calculations,
self-corrections,
alternative solutions,
conversational text,
or intermediate thought processes.

Before returning the final output,
verify that no student-facing field contains reasoning traces such as:

- "Wait..."
- "Let's recalculate..."
- "Let's change..."
- "Maybe..."
- "I should..."
- "According to the prompt..."
- "Based on the instruction..."
- "Internal notes..."
- Any unfinished or conversational reasoning.

This applies to:

- Question text
- Options
- Explanations
- Titles
- Topics
- Any generated student-facing content

- The final output must appear as if it were prepared,
  reviewed,
  and published by a human subject expert.

### NCERT Reference Leakage

Verify that no student-facing field explicitly contains phrases such as:

- NCERT line
- NCERT text
- NCERT chapter
- NCERT syllabus
- According to NCERT
- Based on NCERT
- Read the following line from NCERT

Questions may be derived from NCERT but should appear as natural examination questions.

### Self-Contained Content

Every question should contain all the information required to answer it unless the question explicitly refers to a provided passage or dataset.

Students should never need missing context to understand a question.

### Consistent Writing Style

Maintain a consistent tone, terminology, formatting, and educational style throughout the generated content.

The learning experience should feel as though all content was prepared by the same academic team.

## Content Quality Standard

Every generated educational resource must satisfy the following quality standards before it is considered publication-ready.

### Accuracy

All facts, concepts, formulas, definitions, and explanations must be scientifically and academically correct.

Never invent, assume, or hallucinate factual information.

### Clarity

Questions and explanations should be clear, concise, and unambiguous.

Students should be able to understand the intent of the question without unnecessary complexity.

### One Correct Answer

Every multiple-choice question must contain exactly one unambiguously correct answer.

Distractors should be plausible but clearly incorrect.

### Pedagogical Quality

Content should promote conceptual understanding rather than rote memorization whenever appropriate.

Questions should encourage logical thinking consistent with the learning objectives of the examination.

### Consistency

Terminology, notation, formatting, symbols, units, and writing style must remain consistent throughout the generated content.

### Publication Ready

soul2win follows a Zero-Edit Publishing Standard.

The expected outcome of every generator is publication-ready content that can be published without manual editing.

Quality review exists to verify compliance with this standard rather than to rewrite generated content.

## Explanation Standards

The primary purpose of an explanation is to help the learner understand the concept rather than merely justify the correct answer.

Every explanation should be educational, concise, and logically structured.

### Teaching First

Explain why the correct answer is correct before focusing on why the other options are incorrect.

The explanation should strengthen conceptual understanding and exam readiness.

### Logical Flow

Present ideas in a natural teaching sequence instead of translating or repeating the question.

The structure should follow the reasoning process used by an experienced educator.

### Subject-Specific Teaching Style

Adapt the explanation style according to the nature of the subject.

**Biology**

Concept
→ Reason
→ Conclusion

**Physics**

Formula
→ Substitution
→ Calculation
→ Final Answer

**Chemistry**

Principle
→ Equation (where applicable)
→ Calculation or Reasoning
→ Conclusion

### Conciseness

Include sufficient reasoning for understanding without unnecessary repetition or excessive detail.

Avoid explanations that simply restate the question or repeat the correct option.

### Exam Focus

Emphasize the concept, principle, formula, or NCERT statement that enables the learner to answer similar questions in future examinations.

### Avoid Answer-First Explanations

Do not begin explanations by immediately stating that the selected option is correct.

Instead, introduce the relevant concept, principle, or formula first, allowing the conclusion to follow naturally.

The explanation should mirror the reasoning process expected from a student solving the question.

## Image Policy

soul2win Version 1 follows a Text-Only Assessment Standard.

All generated questions must be completely self-contained and fully answerable using only the text provided.

Do not generate questions that depend on:

- diagrams
- graphs
- figures
- illustrations
- maps
- photographs
- labelled structures
- external visual references

When a concept is commonly illustrated using an image, rewrite the question as a complete textual description while preserving the same concept, difficulty, and learning objective.

Do not generate image placeholders, image descriptions, or requests for accompanying images.

## Scientific Terminology Policy

Scientific terminology shall be presented consistently across all generated educational content.

### International Scientific Names

Scientific taxonomic names and internationally standardized biological names must remain in their original English or Latin form.

Do not translate or transliterate these names.

Examples include:

- Cycas
- Pinus
- Selaginella
- Rhodophyceae
- Chlorophyceae
- Pteridophyta

### Scientific Terms

When a scientific English term is widely recognized by NEET students, translate it naturally into Tamil while retaining the English term in parentheses on its first occurrence where appropriate.

Examples:

- இணைவு (Syngamy)
- மூவிணைவு (Triple Fusion)
- சைலம் (Xylem)

Subsequent occurrences may use the translated form alone if clarity is maintained.

### Terminology Consistency

Use the same translated terminology consistently throughout the generated content.

Avoid using multiple Tamil equivalents for the same scientific term within a single resource.

## Output Standards

Every generated resource shall be complete, internally consistent, and immediately usable for its intended purpose.

### Complete Output

Generate all requested components.

Do not omit required sections, fields, explanations, or supporting information.

### Internal Consistency

Ensure that all parts of the generated output agree with one another.

Examples include:

- The correct answer matches the explanation.
- Numerical calculations match the final answer.
- Terminology remains consistent throughout the resource.
- References to concepts or formulas are accurate and complete.

### Format Compliance

The generated output shall strictly follow the required output format specified by the generator.

Do not include additional commentary, reasoning, prompt notes, or metadata outside the requested format.

## Quality Verification Checklist

Before considering any generated output publication-ready, verify the following:

### Accuracy

☐ Facts, concepts, formulas, and explanations are correct.

☐ No hallucinated or unsupported information is present.

### Student Experience

☐ The content is clear, natural, and student-friendly.

☐ No internal instructions, labels, reasoning traces, or debugging information are visible.

### Content Quality

☐ The question is clear and unambiguous.

☐ Exactly one answer is correct.

☐ Distractors are plausible.

☐ Explanations teach the concept rather than merely justify the answer.

### Explanation Standards

☐ The explanation follows the appropriate teaching flow for the subject.

☐ The reasoning is concise and logically structured.

### Image Policy

☐ Every question is fully answerable using only the text provided.

☐ No image-dependent content is present.

### Terminology

☐ Scientific names remain unchanged where required.

☐ Terminology is consistent throughout the resource.

### Output

☐ All required sections have been generated.

☐ The output format matches the generator requirements.

☐ The resource is publication-ready under the soul2win Zero-Edit Publishing Standard.

## Failure Conditions

Generated content shall not be considered publication-ready if any of the following conditions are present:

- Factual inaccuracies or unsupported claims.
- Multiple correct answers or no correct answer.
- Ambiguous or misleading questions.
- Explanations that do not support conceptual understanding.
- Inconsistent terminology or formatting.
- Visible internal instructions, prompt labels, reasoning traces, or debugging information.
- Image-dependent questions that cannot be answered using the provided text.
- Missing required sections or incomplete output.
- Output that does not comply with the applicable generator specification.

Any output that fails one or more of these conditions shall be regenerated or corrected before publication.

## Document History

| Version | Date        | Summary                                           |
| ------- | ----------- | ------------------------------------------------- |
| 1.0     | 18 Jul 2026 | Initial release of the soul2win Quality Standard. |
