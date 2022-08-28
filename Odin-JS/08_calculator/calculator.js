const add = function() {
  let sum = 0;
  for (let i = 0; i <= arguments.length -1; i++) {
    sum = sum + arguments[i];
  }
  if (Number.isNaN(sum)) {
    return 0;
  } else {
  return sum;
}};

const subtract = function() {
  let diff = arguments[0];
  for (let i=1; i <= arguments.length -1; i++) {
    diff -= arguments[i];
  }
  return diff;
};

const sum = function(a) {
  let sum = 0;
  for (let i = 0; i <= a.length -1; i++) {
    sum = sum + a[i];
  }
  return sum;
};

const multiply = function(b) {
  let mult = b[0];
  for (let i=1; i <= b.length -1; i++) {
    mult *= b[i];
  }
  return mult;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	if (a === 0 || a === 1) {
    return 1;
  }
  for (let i = a-1; i >= 1; i--) {
    a *= i;
  }
  return a;
};

/*
The goal for this exercise is to create a calculator that does the following:

add, subtract, get the sum, multiply, get the power, and find the factorial

Hm, seems interesting. We'll need to check the tests to see how well they need to be designed.

Was a bit annoying, didn't expect mult to be arrays. Been having issues with how I visualize for loops as well.
It's always one more than I expect it to be.
*/
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
