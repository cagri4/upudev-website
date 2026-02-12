# MASTER PLAN - upudev.nl Homepage Renewal

## 1) Project Goal
Rebuild `upudev.nl` homepage from scratch with Next.js, inspired by the provided reference style, and prepare it for GitHub + Vercel auto-deploy workflow.

## 2) Scope
- In scope:
  - Next.js app setup (App Router, TypeScript, Tailwind, ESLint)
  - New homepage (`/`) design and implementation
  - TR-first content structure
  - i18n-ready architecture for future language expansion
  - Responsive behavior (mobile, tablet, desktop)
  - Performance and basic SEO setup
- Out of scope (for now):
  - Full secondary pages implementation
  - Final production CI/CD secrets setup
  - Final domain cutover

## 3) Phase Plan (A to Z)

| ID | Task | Status | Done Criteria | Notes |
|---|---|---|---|---|
| P1 | Initialize project | DONE | Next.js app boots locally | `npm run dev` works |
| P2 | Define design system | DONE | Colors, type scale, spacing tokens decided | Reference-inspired but branded |
| P3 | Build homepage skeleton | DONE | Header, hero, sections scaffolded | No final polish yet |
| P4 | Implement all core sections | DONE | Services, About, Process, Testimonials, CTA, Contact | TR-first copy |
| P5 | Add minimal motion | DONE | Subtle reveal/hover animations working | No heavy effects |
| P6 | i18n-ready structure | DONE | Content extracted for future locales | TR only active now |
| P7 | QA + polish | DONE | Responsive checks + lint clean | Build verified with webpack fallback |
| P8 | GitHub preparation | IN_PROGRESS | Repo initialized, meaningful commits | Branch strategy set |
| P9 | Vercel preparation | TODO | Deploy-ready config validated | Auto deploy path documented |

## 4) Rules of Execution
- Work in small tasks (30-90 min max each).
- Update `WORKLOG.md` at every checkpoint.
- Do not start a new task before marking current task status.
- Every completed micro-task should end with:
  - status update
  - next immediate action
  - optional commit note

## 5) Status Legend
- `TODO`: not started
- `IN_PROGRESS`: currently active (only one at a time)
- `DONE`: completed and verified
- `BLOCKED`: waiting for dependency/decision

## 6) Current Active Task
- `P8 - GitHub preparation`

## 8) Session Start Protocol
- First read `CODEX.md`, then `MASTER_PLAN.md`, then latest `WORKLOG.md` entry.
- Continue only from the single active (`IN_PROGRESS`) task.
- If priorities changed, update this plan before coding.

## 7) Risks & Mitigation
- Risk: Context loss in long sessions
  - Mitigation: Keep this file + `WORKLOG.md` always current
- Risk: Scope creep during visual work
  - Mitigation: Keep strict phase boundaries
- Risk: Deploy friction later
  - Mitigation: Keep deployment assumptions documented from day one
