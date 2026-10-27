import { checkEmptyness, sum, multiplyNumeric } from "./objects.js";
import { Calculator } from "./constructor.js";
import { describe, it, expect } from "vitest";

describe("checkEmptyness", () => {
  it("Empty object returns true", () => {
    expect(checkEmptyness({})).toBe(true);
  });
  it("Non-empty object returns false", () => {
    expect(checkEmptyness({name: "Jhon"})).toBe(false);
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

describe("Calculator constructor", () => {
  let calculator =  new Calculator(2, 4);

  it("Reads correctly the properties", () => {
    expect(calculator.read()).toBe("Num1: 2, Num2: 4");
  });

  it("Sums both properties", () => {
    expect(calculator.sum()).toBe(6);
  });

  it("Multiply both properties", () => {
    expect(calculator.mul()).toBe(8);
  });
});
