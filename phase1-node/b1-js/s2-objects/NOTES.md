# S2 — Objects

## Objects: the basics
- Unreachable values are garbage collected.
- Something is reachable if you can get it from a root.
- Roots examples: Functions in the callstack, global vars.
- Some optimizations are applied by the JS engines to speed up this process: Generational collection, incremental collection, idle-time collection.

- "This" is evaluated at call time. "Before the dot".
- Arrow functions doesn't have this.
- Calling a constructor function with "new" create a "this", run the function body and implicitly returns "this".

- When both sides are objects, == and === does the same.

- There are 3 types of hints: string, number and default.
- The conversion algorithm is: obj[Symbol.toPrimitive](hint), string hint (obj.toString, obj.valueOf, number or default hint (obj.valueOf, obj.toString).
