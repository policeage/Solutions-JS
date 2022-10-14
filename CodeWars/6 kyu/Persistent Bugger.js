function persistence(num) {
    //code me
   let arr = num;
   let counter = 0;
   while (arr >= 10) {
     arr = arr.toString().split('').reduce((a,b) => a*b);
     counter++
   }
   return counter
   }

/* Description:
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

   Comments:
Nothing too crazy here, you receive a number and then count how many times
it has to be multiplied by the digits provided until they are less than 10.

The key is to change the provided number in to an iterable data type and then
apply the .reduce() method (Which can only be used on Array-like data types)
and then also count how many times you multiplied it and then return the count.

I got tripped up at first because I created an infinite loop with a conditional,
because I wanted to do an If statement to continue the loop, but when I realized
I could just modify the initial while conditional it became a lot easier.

I did see some people use the "while (arr.length > 1)" and agreed that was a bit smarter
than while (arr >= 10) because initially it was (arr > 10) which naturally 10 = 10 and 10
needs to be less than 10, but that was just because I needed to read the question a bit more.
*/