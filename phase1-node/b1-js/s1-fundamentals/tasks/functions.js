// javascript.info: https://javascript.info/function-basics

// Rewrite checkAge without `if`, using `?` or `||`.
function checkAge(age) {
  console.log((age > 18 ? true : "Did your parents allow you?"));
}

checkAge(18);

// ---
// min(a, b): the smaller of a and b.
function min(n1, n2) {
  console.log(n1 < n2 ? n1 : n2);
}

min(1, 2);
min(3, 3);
min(2, 5);

// ---
// pow(x, n): x raised to the power n.
function pow(n, e) {
  let result = n;

  for (let i = 1; i < e; i++) {
    result *= n;
  }

  console.log(result);
}

pow(2, 2);
pow(2, 3);
pow(3, 3);
