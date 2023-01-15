/*
Problem:
In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

    At least one character ("" is not valid)
    Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
    No whitespaces / underscore

*/
function alphanumeric(string){
    if (string == '') {
      return false
    }
    return string.search(/[^A-Za-z0-9]+(_[A-Za-z0-9]+)?/) == -1 ? true : false
  }

/*
Solution:
Return a true if the string only contains alphanumeric, otherwise return false.

Post Solution Thoughts:
Initially the issue was how do I interact with the string which will give me a true or false value, I was thinking a .match() would work but you can only pass through
an actual string, you can't use RegEx. So instead I used a .search() which allowed me to get the value of -1 which when you execute a .search() it checks
if the string contains a value that matches the search, but when you use [^ ] this creates a whitelisted class, the (_[A-Za-z0-9]+) allows me to check
if there is an _ which has words and such following it. I was getting tripped up as well because if you create a class [A-z] it actually means [A-Za-z_]
which I didn't want _ but I didn't realize it was a part of it. So I ended up reusing a check for ' words and got this.

To Summarize, I don't like Regular Expressions.
*/