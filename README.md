# Fullstack learning

My path to becoming a fullstack developer, organized in phases. Every exercise is typed by hand, without AI autocomplete.

## Roadmap

| Phase | Focus | Status |
| --- | --- | --- |
| [1](phase1-node/) | Backend with Node and TypeScript, from the basics | In progress |
| 2 | Frontend with Next.js | Not started |
| 3 | CI and AWS | Not started |
| 4 | AI | Not started |

## Structure

```
phaseN-<topic>/          a phase: goal, rules and list of blocks
└── bN-<topic>/          a block: main resource, sessions, katas and exit check
    └── sN-<topic>/      a session
        ├── NOTES.md     what I learned, written at the end of the session
        └── tasks/       exercises from the block's main resource
```

Each README links to the level below it, so start from the phase you're interested in.

## Conventions

- Everything is in English: code, comments, notes and commit messages.
- File names use kebab-case.
- Exercises that use browser APIs (`alert`, `prompt`, `confirm`) are `.html` files. Plain `.js` files run with Node.
- Tests live next to the code they test, as `<file>.test.js`.
- Each exercise starts with a comment that links to its source chapter and states the task.

## Running

```bash
npm install
npm test               # run every test once (Vitest)
npm run tdd            # run tests in watch mode
node path/to/file.js   # run a single exercise
```

Open `.html` exercises in a browser.
