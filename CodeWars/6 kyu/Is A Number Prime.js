/*
Problem:
Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
Requirements

    You can assume you will be given an integer input.
    You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
    NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
*/

function isPrime(num) {
  
 if (num <= 1) {
   return false;
 } if (num == 2 || num == 3) {
   return true;
 } if (num%2 == 0 || num%3 == 0) {
   return false;
 } else {
   for (let i = 5; i <= Math.sqrt(num); i = i + 6) {
     if (num % i == 0 || num % (i + 2) == 0) {
       return false;
     }}
     return true;
 }
}

/*
Solution Thoughts:
Initially my first solution was looking like this:
function isPrime(num) {
  let a = num%2;
  let b = num%3;
  let c = num%5;
  let d = num%7;
  let e = num%11;
  let array1 = new Array(a, b, c, d, e);
  return array1.forEach(number => number > 0)

  The primary issue with this is that I was having an issue with giving the correct response of true or false.

  function isPrime(num) {
  
  let a = num%2;
  let b = num%3;
  let c = num%5;
  let d = num%7;
  let e = num%11;
  let array1 = new Array(a, b, c, d, e);
  if (num == 2 || num == 3 || num == 5 || num == 7 || num == 11) {
    return true;
  } if (num <= 1 || array1.includes(0)) {
    return false;
  }  else {
    return true;
  }
}

I then used this instead, however the numbers go high enough to hit past the prime of 11, so instead I'm going to have to do additional math to make 
sure that the larger numbers will be caught within the conditions.

The final solution I used was stolen, basically because the max value was 2^31 put the possible solutions up to around 2 billion. This is done to prevent
my initial brute force solution. So the only actual solution is by using a formula which is able to handle really large numbers.

The solution I used was done with time complexity O(sqrt(n)) and the primary thing was that once numbers were large enough to be able to accept a formula,
that's when it would kick in, it uses Lemoine's Conjecture to sweep through all the numbers around it, basically reduces the probability as much as possible
that the number is indeed prime.

To be frank, this problem more so slapped for brute forcing and made me ready a book. Which I think is a good thing but not really enjoyable.
*/