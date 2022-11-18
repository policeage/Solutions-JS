/* Solution */
function generateHashtag (str) {
    let trimmedstring = str.trim().split(' ').filter(spaces => spaces.length > 1).join(' ')
    if (trimmedstring.length < 1 || trimmedstring.length >= 140) {
      return false;
    } if (str.split(' ').length < 2) {
      return '#' + str.charAt(0).toUpperCase() + str.slice(1);
      } else {
    let splitString = str.split(' ');
    let shenanigan = [];
    splitString.forEach(x => shenanigan.push(x.charAt(0).toUpperCase() + x.slice(1)))
    let stringJoin = shenanigan.join('')
    return '#' + stringJoin
      }
  }

  /* Problem:
  The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.

Examples

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

*/

/* Thoughts:

Going through it was a little rough, some of my main issues was figuring out how to properly play with the string, additionally, I had issues
with playing around with the data inside of the .split() method on an array because I really wanted to just be able to change them while inside of the array.
I chose to use the forEach method mostly because it's the one I'm most familiar with, I also had issues deciphering the initial if statement,
I wanted to be able to catch anything that would be considered too large from the jump so the initial first line was just:
trimmedstring = str.trim()
the second if statement was to catch any single words, so I just did a str.split(' ') and checked if the length was less than two.

It wasn't until they tested a bunch of spaces between the two words that I eventually had to add a filter to it otherwise it would fail the first test.

I considered using .replace() with regex but decided against it. Mainly because if I just got rid of all spaces, then I would no longer be able to
split at the space, which allowed me to capitalize each word.

*/