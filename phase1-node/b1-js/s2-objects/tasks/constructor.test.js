import { Calculator } from "./constructor.js";
import { describe, it, expect } from "vitest";

describe("Calculator constructor", () => {
  let calculator = new Calculator(2, 4);

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
