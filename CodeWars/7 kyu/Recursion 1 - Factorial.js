/*
Problem:
This is a kata series that you can only solve using recursion.

##1 - Factorial

In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

5! = 5 * 4 * 3 * 2 * 1 = 120.

The value of 0! is 1.

#Your task

You have to create the function factorial that receives n and returns n!. You have to use recursion.
*/

const factorial = (n, memo = {}) => {
    if (memo[n]) return memo[n];
    if (n === 1 || n === 0) return 1;
    if (n < 0) return 0;
    return memo[n] = factorial(n-1, memo) * n
  };

/*
Post Solution:

I did this Kata just to review, practice and study my own recursion abilities. I'm thinking of attempting to use it to
solve more problems in the future. Let's hope for the best.
*/