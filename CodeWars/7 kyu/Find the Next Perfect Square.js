/* Description:

You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square

 */
function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    let sqRoot = (Math.floor(Math.sqrt(sq)))
    let next = Math.pow((sqRoot+1), 2)
    return Math.sqrt(sq) <= sqRoot ? next : -1
  }

/* Thoughts:

    Approaching this problem, I had to clarify what a perfect square was, saw some examples and then had to figure out how to get the next perfect square.
    Initially I was trying to write out a one liner, but doing a bunch of (Math(Math(Math(Math)))) just hurt my eyes so instead I just broke it in to
    a couple of variables.

    I then wanted to try to return a conditional ternary, which the biggest issue was trying to figure out a good conditional in order to check what non-perfect squares
    looked like which returns an integer with floating points. Which initially I applied Math.floor() because I thought that square roots could just return
    integers with floating points but I am now learning isn't a thing. So the Math.floor() is uneccessary because the return wants a -1 if it isn't a perfect square.

    In the end my conditional just checks if the square root of the non-perfect square is greater than the Math.floor() version of it which rounds it down.

    I did see some people just do a modal 1 (%1) as their conditional which:

    return Math.sqrt(sq)%1

    If the parameter passed isn't a perfect square, it will return 0 which is false and when it is a perfect square it will return 1 which is true.
*/