"use strict";

// Predict the output of each console.log and write it in the `// ?`.
// Some throw on purpose: if you think it throws, write which error.
// Only once you've filled everything in: node objects-quiz.js

function run(label, fn) {
  console.log(`\n--- ${label}`);
  try {
    fn();
  } catch (e) {
    console.log("ERROR:", e.constructor.name, "-", e.message);
  }
}

run("1", () => {
  console.log(typeof null); // ?
  console.log(typeof function () {}); // ?
  console.log(typeof Symbol()); // ?
  console.log(typeof 10n); // ?
  console.log(typeof NaN); // ?
  console.log(typeof []); // ?
});

run("2", () => {
  console.log(10n == 10); // ?
  console.log(10n === 10); // ?
  console.log(10n + 1); // ?
});

run("3", () => {
  const id = Symbol("id");
  const user = { name: "Luca", [id]: 123 };

  console.log(Object.keys(user)); // ?
  for (const key in user) console.log(key); // ?
  console.log(JSON.stringify(user)); // ?
  console.log(Object.assign({}, user)[id]); // ?
  console.log({ ...user }[id]); // ?
  console.log(Symbol("id") === Symbol("id")); // ?
  console.log(Symbol.for("id") === Symbol.for("id")); // ?
  console.log(id.description); // ?
});

run("4", () => {
  const id = Symbol("id");
  console.log(`The id is ${id}`); // ?
});

run("5", () => {
  const user = { name: "Luca", hi() { return this.name; } };
  const admin = { name: "Admin" };
  admin.hi = user.hi;

  console.log(admin.hi()); // ?
  console.log((user.hi)()); // ?
});

run("6", () => {
  const user = { name: "Luca", hi() { return this.name; } };
  const hi = user.hi;
  console.log(hi()); // ?
});

run("7", () => {
  const user = {
    name: "Luca",
    friends: ["Ana", "Juan"],
    list() {
      return this.friends.map((f) => `${this.name} -> ${f}`);
    },
  };
  console.log(user.list()); // ?
});

run("8", () => {
  const user = {
    name: "Luca",
    friends: ["Ana", "Juan"],
    list() {
      return this.friends.map(function (f) {
        return `${this.name} -> ${f}`;
      });
    },
  };
  console.log(user.list()); // ?
});

run("9", () => {
  function User(name) {
    this.name = name;
    this.arrow = () => this.name;
    this.regular = function () { return this.name; };
  }
  const u = new User("Luca");
  const { arrow, regular } = u;

  console.log(arrow()); // ?
  console.log(regular()); // ?
});

run("10", () => {
  function A() { this.x = 1; return { x: 2 }; }
  function B() { this.x = 1; return 5; }
  function C() { this.x = 1; return null; }

  console.log(new A().x); // ?
  console.log(new B().x); // ?
  console.log(new C().x); // ?
});

run("11", () => {
  function B() { this.x = 1; return 5; }
  console.log(B()); // ?
});

run("12", () => {
  const a = {};
  const b = {};
  const c = a;

  console.log(a == b, a === b); // ?
  console.log(a == c, a === c); // ?
  console.log([1] == 1); // ?
  console.log([1, 2] == "1,2"); // ?
  console.log({} == "[object Object]"); // ?
});

run("13", () => {
  const money = {
    [Symbol.toPrimitive](hint) {
      console.log("  hint:", hint);
      return hint === "string" ? "$100" : 100;
    },
  };

  console.log(`${money}`); // ?
  console.log(money + 1); // ?
  console.log(money * 2); // ?
  console.log(money > 50); // ?
  console.log(String(money)); // ?
  console.log(money == 100); // ?
});

run("14", () => {
  const obj = {
    toString() { return "2"; },
    valueOf() { return 10; },
  };

  console.log(obj + 1); // ?
  console.log(`${obj}`); // ?
  console.log(obj * 2); // ?
  console.log(String(obj)); // ?
});

run("15", () => {
  const obj = { toString() { return "5"; } };

  console.log(obj + 1); // ?
  console.log(obj * 2); // ?
});

run("16", () => {
  const obj = { [Symbol.toPrimitive]() { return {}; } };
  console.log(obj + 1); // ?
});

// --- 17 and 18 aren't run: answer in a comment.

// 17
// let a = { name: "a" };
// let b = { name: "b", ref: a };
// a = null;
// Can { name: "a" } be garbage collected? Why?
// b = null;
// What about now?

// 18
// let x = {};
// let y = {};
// x.other = y;
// y.other = x;
// x = null;
// y = null;
// They still reference each other. Are they collected?
