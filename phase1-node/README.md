# Phase 1 — Backend Node/TS from the basics

**Goal:** build and explain an API in Node/TypeScript without AI and without checking the docs for the basics.

It takes about 13 weeks at 8 hours of coding per week, across 52 sessions. The phase ends with the first version of the anchor project's API: a management platform for restaurants.

## Blocks

| # | Block | Sessions | Weeks | Folder |
| --- | --- | --- | --- | --- |
| 0 | Diagnosis | 1 | 1 | |
| 1 | JavaScript, the language | 7 | 1–2 | [b1-js](b1-js/) |
| 2 | TypeScript | 6 | 3–4 | |
| 3 | Node internals | 4 | 4–5 | |
| 4 | HTTP by hand and Express | 6 | 5–6 | |
| 5 | SQL, Postgres and Prisma | 8 | 7–8 | |
| 6 | NestJS | 8 | 9–10 | |
| 7 | Auth and roles | 6 | 11–12 | |
| 8 | Integration testing, OpenAPI and deliverable | 6 | 12–13 | |

Every block has one main resource (the others are optional: don't open them unless you get stuck), sessions with a goal, exercises and an exit check. One resource per block is on purpose: Full Stack Open was dropped for having too many things open at once.

## Anti-atrophy rules

1. **No AI autocomplete in this phase.** The TypeScript LSP in Neovim is fine: it flags errors and completes names, but it doesn't think for you.
2. **25 minutes alone before asking for help.** Read the whole error, search the official docs and write down your hypothesis in one line.
3. **AI only as a tutor.** Ask for a hint, never for code. Fixed prompt: "Don't give me code. Tell me which concept I'm missing and ask me a question that leads me there."
4. **Type everything.** Never copy from the tutorial. If you copied something, delete it the next day and rewrite it from memory.
5. **Close every session in `NOTES.md`.**
6. **Blank exit check.** Empty file, no docs, with a timer. If you can't do it, the block isn't done: repeat the exercises instead of moving on.
7. **LeetCode in JavaScript during Blocks 1 and 2**, as part of the 20-minute warm-up.

## Final phase check

If any item fails, add one week to the matching block before moving on to Phase 2.

- [ ] **New endpoint in 60 minutes, without AI or docs:** `GET /recipes/:id/scale?servings=N` returns the recipe scaled to N servings with its cost. Validated DTO (N is an integer between 1 and 500), service, one unit test and one e2e test.
- [ ] **5-minute recorded explanation** of the API end to end: the request lifecycle in Nest, dependency injection, validation, the auth flow with rotating refresh tokens, and how it's tested.
- [ ] **`NEST-VS-FASTAPI.md`**: a table written from memory comparing dependency injection, validation, async and concurrency, error handling, testing and OpenAPI docs.
- [ ] **Eight questions, a one-minute spoken answer each:** what the event loop is and what blocks it; JWT vs server-side sessions; why `httpOnly` cookies; 401 vs 403; what an index is and when it doesn't help; what an N+1 is and how to detect it; `migrate dev` vs `migrate deploy`; why validate at runtime if you already have TypeScript.
- [ ] **Repeat the Block 0 diagnosis** in 30 minutes and compare it with the first one.
