// Write a function ucFirst(str) that returns the string str with the uppercased first character
function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false

function checkSpam(str) {
  const lowerStr = str.toLowerCase();

  if (lowerStr.includes("viagra") | lowerStr.includes("xxx")) { return true }

  return false;
}

// Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

function truncate(str, maxlength) {
  let len = str.length;

  if (len === maxlength) {
    return str;
  }
  else if (len > maxlength) {
    return str.slice(0, maxlength);
  } else {
    let filled = str;
    for (let i = 0; i < maxlength - len; i++) {
      filled += ".";
    }

    return filled;
  }
}

// We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.
// Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

function extractCurrencyValue(str) {
  return +str.slice(1);
}
