const fibonacci = function(a) {
    let x = 0;
    let y = 1;
    let z = 0;
    if (a < 0 || isNaN(a)) {
        return "OOPS";
    } if (a == 1) {
        return parseInt(a);
    }
    for (let i = a; i > 1; i--) {
        z = x+y;
        x=y;
        y=z;
    }
    return z;
    
};


/* Create a function that returns a specific member of the Fibonacci sequence:

> A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc. 

Takes a number passed through the function and returns the Fibonacci number
Reminds me of previous sum all functions

x = */
// Do not edit below this line
module.exports = fibonacci;
