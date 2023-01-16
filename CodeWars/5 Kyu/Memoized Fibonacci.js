/*
Problem:

The Fibonacci sequence is traditionally used to explain tree recursion.

function fibonacci(n) {
    if(n==0 || n == 1)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

This algorithm serves welll its educative purpose but it's tremendously inefficient, not only because of recursion, but because we invoke the fibonacci function twice, and the right 
branch of recursion (i.e. fibonacci(n-2)) recalculates all the Fibonacci numbers already calculated by the left branch (i.e. fibonacci(n-1)).

This algorithm is so inefficient that the time to calculate any Fibonacci number over 50 is simply too much. You may go for a cup of coffee or go take a nap while you wait for 
the answer. But if you try it here in Code Wars you will most likely get a code timeout before any answers.

For this particular Kata we want to implement the memoization solution. This will be cool because it will let us keep using the tree recursion algorithm while still keeping it 
sufficiently optimized to get an answer very rapidly.

The trick of the memoized version is that we will keep a cache data structure (most likely an associative array) where we will store the Fibonacci numbers as we calculate them. 
When a Fibonacci number is calculated, we first look it up in the cache, if it's not there, we calculate it and put it in the cache, otherwise we returned the cached number.

Refactor the function into a recursive Fibonacci function that using a memoized data structure avoids the deficiencies of tree recursion. 
Can you make it so the memoization cache is private to this function?

*/
function fibonacci(n, memo) {
    memo = memo || {};
    if (n < 2) {
      return n;
      }
    if (memo[n]) {
      return memo[n]
    } else
    return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  }

/*
Post Solution Thoughts:

This code isn't entirely mine but after watching some videos on the process it all makes sense. The code was gleaned from FreeCodeCamp who does an amazing job on explaining the concepts.
Basically the idea of Memoization is to take repetitive calculations and simplifies the fibonacci sequence from O(2^n) to O(n).

Thinking of it from a full stack developer perspective, I can see the value in this and it even seems to be the same type of idea behind user generated objects. You'd just have to check
if obj[x] exists you'd return that obj or create a new obj which can be recalled in the same way.
*/