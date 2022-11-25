/* 

Problem: 

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

*/

/* Solution: */

function solution(number){
    let collection = [];
    for (let i = 0; i < number; i++) {
      if (i%3 === 0 || i%5 === 0) {
        collection.push(i)
      } else {
        continue;
      }
    }
    return number > 0 ? collection.reduce((a, b) => a + b) : 0
  }

/*
  Thought Process:

  Initially I was wondering which methods to use to best collect the numbers between 0 and the provided number,
  I eventually settled on just looping through all of the numbers which I believe is one of the least efficient but acceptable brute force methods.

  I also chose to use an array just because it's what I'm most used to for adding, I did see others use a sum += i to add to a sum retainer.

  Example:
  let sum = 0;
  Loop
  If statement for 3 and 5;
  sum += i

  and then you would just return sum. Additionally I recognize now that I would be able to just use the sum = 0 and in the event the loop never runs,
  you would return the requested value of 0 which would remove the need to have a switch statement checking if the value is above 0.
*/