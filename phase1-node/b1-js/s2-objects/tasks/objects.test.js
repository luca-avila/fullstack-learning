import { checkEmptiness, sum, multiplyNumeric } from "./objects.js";
import { describe, it, expect } from "vitest";

describe("checkEmptiness", () => {
  it("Empty object returns true", () => {
    expect(checkEmptiness({})).toBe(true);
  });
  it("Non-empty object returns false", () => {
    expect(checkEmptiness({name: "Jhon"})).toBe(false);
  });
});

describe("sum", () => {
  it("Sum an object returns the correct output", () => {
    expect(sum({a: 50, b: 100, c: 200})).toBe(350);
  });
});

describe("multiplyNumeric", () => {

  let person = { name: "Jhon", surname: "Smith" };

  it("An object with no numeric values stays the same", () => {
    expect(multiplyNumeric(person)).toBe(person);
  });

  it("An object with only numeric values", () => {
    expect(multiplyNumeric({a: 100, b: 200})).toEqual({a: 200, b: 400});
  });

  it("An object with numeric and string values", () => {
    expect(multiplyNumeric({a: 100, b: "hello"})).toEqual({a: 200, b: "hello"});
  });
});
