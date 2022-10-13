/*A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. 

Arguments:

Will always be a positive Number value
*/
function narcissistic(value) {
    // Code me to return true or false
    let arr = value.toString().split('');
    let cubedArr = arr.map((num) => Math.pow(num, arr.length));
    let cubedSum = cubedArr.reduce((a, b) => a + b);
    
    if (cubedSum === value) {
      return true;
    } else if (value < 10) {
      return true;
    } else {
      return false;
    }
    }

/* Pretty interesting problem, initially I approached it by converting the number to an Array and then I was going to iterate through the array with a for loop,
    however I stopped myself from doing that when I remembered that I could just stack methods on to the value but for readability sake, I also chose to split
    the methods applied to the data.

    Had to look up how the .map() and .reduce() methods also worked because I wasn't entirely sure on how they manipulate the data which is provided.

*/