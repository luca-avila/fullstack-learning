let user = {};
user.name = "Jhon";
user.surname = "Smith";

user.name = "Pete";
delete user.name;

console.log(user);

// ---
// Create check emptyness function

function checkEmptyness(obj) {

  for (let key in obj) {
    return false;
  }

  return true;
}

let schedule = {};
console.log(checkEmptyness(schedule));

schedule["8:30"] = "get up";
console.log(checkEmptyness(schedule));

// Sum all properties of an object

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;

for (let person in salaries) {
  sum += salaries[person];
}

console.log(sum);
