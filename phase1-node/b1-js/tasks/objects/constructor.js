// Create a constructor function Calculator that creates objects with 3 methods: sum, mul, read

export function Calculator(num1, num2) {
  this.num1 = num1;
  this.num2 = num2;

  this.sum = function() {
    return this.num1 + this.num2;
  };

  this.mul = function() {
    return this.num1 * this.num2;
  };

  this.read = function() {
    return `Num1: ${this.num1}, Num2: ${this.num2}`;
  };
}
