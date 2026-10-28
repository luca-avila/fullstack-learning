let user = {};
user.name = "Jhon";
user.surname = "Smith";

user.name = "Pete";
delete user.name;


// ---
// Create check emptyness function

export function checkEmptyness(obj) {

  for (let key in obj) {
    return false;
  }

  return true;
}


// Sum all properties of an object
export function sum(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];

  }
    return sum;
}
// ---
// Multiply numeric property values by 2

export function multiplyNumeric(obj){
  for (let key in obj) {
    if(typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }

  return obj;
};
