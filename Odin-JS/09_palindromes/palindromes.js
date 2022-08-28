const palindromes = function (string) {
    let cleanString = string.replace(/\W|\s/g, '').toUpperCase();
    let reverseString = cleanString.split('').reverse().join('');
        if (cleanString === reverseString) {
            return true;
        } else {
            return false;
        }
};

/*
Write a function that determines whether or not a given string is a palindrome.

A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:

Hm, this seems annoying. I remember that we can iterate through strings, similar to arrays.
Ignoring punctuation as well as word breaks too...
I'm thinking to use a for loop which iterates through the string... Actually, should I not just reverse the string, create a loop which
iterates through both strings, one starts at the front and one starts at the back and any time (a!==b) return false.
I'll have to clean up both the strings, trim spaces, probably remove the exclimation point? I'm not sure if a RegEx would work.

Not too bad. The RegEx was the way to go, was going to make a for loop but then I realized, "If it's the same backwards and forwards,
wouldn't a (a===b) work?" which it does.

the upper-case kind of messed me up, because r!=R but I just added on the .toUpperCase() and the rest just all came together.
*/
// Do not edit below this line
module.exports = palindromes;
