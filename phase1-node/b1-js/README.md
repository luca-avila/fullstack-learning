# Block 1 — JavaScript, the language

Node is JavaScript: if the language is shaky, everything else is built on sand. By the end of this block I write idiomatic JS without looking up syntax.

**Main resource:** [javascript.info](https://javascript.info/), Part 1. Every chapter ends with tasks and their solutions: do them here, not in the browser, and only check the solution once the test passes or after 25 minutes.

## Sessions

- [x] **S1 — Fundamentals** ([`s1-fundamentals/`](s1-fundamentals/)): from Variables to Arrow functions basics.
- [x] **S2 — Objects** ([`s2-objects/`](s2-objects/)): Objects, Object references and copying, Object methods "this", Optional chaining, Arrays and Array methods.
- [ ] **S3 — Data structures:** Iterables, Map and Set, Object.keys/values/entries, Destructuring assignment, JSON methods.
- [ ] **S4 — Functions in depth:** Rest parameters and spread syntax, Variable scope and closure, Function binding, Arrow functions revisited. Kata 3.
- [ ] **S5 — Classes and errors:** Class basic syntax, Class inheritance, Private and protected, Error handling (try..catch and Custom errors). Kata 1.
- [ ] **S6 — Async:** the whole Promises, async/await chapter, including Microtasks. Katas 4 and 5.
- [ ] **S7 — Modules and tests:** Modules introduction, Export and Import. Write 2–3 Vitest tests for each kata. Kata 2 and the exit check.

## Katas

Kitchen-themed, so they can be reused in the anchor project. They go in `katas/`, one file per kata with its tests next to it.

1. `recipeCost(recipe, prices)`: `recipe` is an array of `{ ingredient, quantity }` and `prices` is a `Map` from ingredient to unit price. Returns the total. If a price is missing, throw a custom `MissingPriceError` that extends `Error`.
2. `groupBy(items, key)` written by hand with `reduce`. Then compare it with `Object.groupBy`.
3. `createOrderCounter()`: returns `{ newOrder, total }` without global variables. Explain in `NOTES.md` where the counter lives.
4. Three mock suppliers built with `setTimeout` at 300, 800 and 1500 ms. Ask all three for prices in parallel with `Promise.all`. Then make one fail and use `Promise.allSettled`. Finally, cut it off at 1000 ms with `Promise.race` and a timeout.
5. Write 5 snippets that mix synchronous code, `setTimeout`, `.then` and `queueMicrotask`. Write down the expected order before running them and explain every wrong prediction.

## Exit check

60 minutes, starting from a blank file. If it doesn't work out, repeat S4 and S6.

- [ ] Rewrite Kata 1 with its tests, and Kata 4 complete.
- [ ] Record 3 minutes explaining closures and the order of Kata 5.
