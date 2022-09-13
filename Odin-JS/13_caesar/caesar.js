const caesar = function(string, number) {
    let cryptString = '';
    let charCode;
    let fromCharCode;
    for (let i = 0; i < string.length; i++) {
        charCode = string.charCodeAt(i);
        //Mods the number if it's greater than 26 or less than 0, to change larger numbers in to easier to work with numbers.
        //I could technically just always mod the number input, but maybe it's considered an optimization if I only mod it when it needs to be.
        //If anything, I could also just catch it if number = 26 || -26 to just output the string but eh.
        if (number > 26 || number < -26) {
            number = number % 26;
        }
        //Excludes some syntax, specifically space, exclamation and comma.
        if (charCode == 32 || charCode == 44 || charCode == 33)  {
            fromCharCode = String.fromCharCode(charCode);
            cryptString += fromCharCode;
            continue;
        } 
        //This conditional defines the working area of numbers, specifically A-Z
        if (charCode >= 65 && charCode <= 90) {
            charCode += number;
            //This conditional is if the charCode + Number will put it outside of 65-90, and will reset it where the start/end of the number line and then count it again.
            if (charCode < 65 || charCode > 90) {
                charCode = (charCode < 90) ? charCode-65:charCode-90;
                //For values over 90, it'll add 64 to place them just before the start of A.
                if (charCode > 0) {
                charCode = charCode + 64;
                //For values under 65, it'll add 91 to place them just after Z. The only values entering here will be negative.
            }   if (charCode < 0) {
                charCode = charCode + 91;
            }
                fromCharCode = String.fromCharCode(charCode);
                cryptString += fromCharCode;
                continue;
            }
            fromCharCode = String.fromCharCode(charCode);
            cryptString += fromCharCode;
            continue;
        }
        //This conditional does the same specifying that it'll be between a-z
        if (charCode >= 97 && charCode <= 122) {
            charCode += number;
            //This conditional is if the charCode + Number will put it outside of 97-122, and will reset it where the start/end of the number line and then count it again.
            if (charCode < 97 || charCode > 122) {
                charCode = (charCode < 122) ? charCode-97:charCode-122;
                //For values over 122, it'll add 96 to place them just before the start of a.
                 if (charCode > 0) {
                charCode = charCode + 96;
                //For values under 97, it'll add 123 to place them just after z. The only values entering here will be negative.
            }   if (charCode < 0) {
                charCode = charCode + 123;
            }
            fromCharCode = String.fromCharCode(charCode);
            cryptString += fromCharCode;
            continue;
        }
        fromCharCode = String.fromCharCode(charCode);
        cryptString += fromCharCode;
        continue;
    };
    } return cryptString;

};

/*
    Post Solution:
    This was quite hard because of all of the playing around with numbers, but once I finally figured out how to properly catch and return values,
    as well as re-addressing the scopes of the if statements, it all started to come together nicely.
/*
Well ain't this something, guess I better get to cracking.

There is a tip to convert letters to unicode values, but wouldn't I be able to convert all of it to unicode?
Take the string, turn it all in to unicode, apply the numbers to change them and then return it back as a string?

Either that or just create a Key Value pair for all 26 letters... Plus their capital counter parts so 52, turn all the letters
in to numbers, math it, then turn all the numbers in to letters. :^)

Possibly use RegEx? Probably skip RegEx, instead I'll just add space - 32, comma - 44, Exclamation Mark - 33

So looking through the materials, I'd want to pull the UTF-8 from the string, .charCodeAt(i) will give me the dec
to modify to give me the adjusted value... I guess an issue would be if it's something like Z, 1, it won't go to A.

Should I just make an if statement or something to catch it if it ever goes past the parameter? Ah, and then also catch it if it ever goes behind.
Makes sense. So after some testing you can technically catch them, but placing them at the start of the charCode area and then counting has
proven to be difficult. Especially with larger numbers. I was thinking of doing the % mod but apparently this won't give me the answer I really need.
For example something like (A) 50, A is 65 and I want to shit it by 50 spaces, I have to basically mod 50 by 26(A-Z length), which gives us 24.
So (A), 24 would give me (Y). Which is correct. But what if it was (Z), 50? Well if we caught that it was 50, you'd 50%26 again for 24,
But then you have (Z), 24. Which if we say Z = 90, 90+24 = 114, 114 > 90, so we need to put it at 65, and then Number it, but how do we get what
the number should be when it's put back at the beginning? Because something like (G), 24 is 71 + 24 = 95, 95 > 90, so then maybe catch the excess?
So 90-95, 5, 65 + 5 = 70 = (F), that can't be right. Because if we just do alphabet G = 7, + 24 = 31 - 26 = 5, A = 1 + 5 = 6 = F, I think we need to start at 0
so instead of 65, start at 64.

I need a better way to check if (Z), 25, or any letter number combo which will bleed in to each of the letters designated areas. How about I just make two conditionals which will always be true first, thus eliminating the risk of bleeding
in to another area. Like if (charCode >= 65 || charCode <= 90)

charCodeat limitations: A-Z: 65-90, 64; a-z:97-122

PREP
Parameters: Receive a string followed by a number, the number can be negative
Return the string converted based on the number (It needs to keep all spaces and formatting)
Example is caesar('Hey', 5) // returns 'Mjd
Pseudo Code
*/
// Do not edit below this line
module.exports = caesar;
