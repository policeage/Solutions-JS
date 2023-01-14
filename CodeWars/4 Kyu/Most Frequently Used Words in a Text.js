/*
Problem:

Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.
Assumptions:

    A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
    Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
    Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
    Matches should be case-insensitive, and the words in the result should be lowercased.
    Ties may be broken arbitrarily.
    If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.

Examples:

top_3_words("In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.")
# => ["a", "of", "on"]

top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
# => ["e", "ddd", "aa"]

top_3_words("  //wont won't won't")
# => ["won't", "wont"]

Bonus points (not really, but just for fun):

    Avoid creating an array whose memory footprint is roughly as big as the input text.
    Avoid sorting the entire array of unique words.


*/
function topThreeWords(text) {
    const stringCheck = new Set((text.replace(/[^a-zA-Z' ]/gi, '').trim().split(/[^\w']+/)))
    const checkArr = [ ...stringCheck ]
    const test = /[A-Za-z]+('[A-Za-z]+)?/g
    if (!test.test(checkArr[0])) {
      return []
    }
    const uniqueWords = new Set(text.toLowerCase().match(test))
    let uniqueWordArr = [ ...uniqueWords ]
    const wordMap = new Map()
    const stringArr = (text.toLowerCase().match(test))
    
    uniqueWordArr.forEach(word => {
      wordMap.set(word, stringArr.filter(word1 => word == word1).length)
    })
    
    uniqueWordArr.sort((a,b) => wordMap.get(b) - wordMap.get(a))
    
    while (uniqueWordArr.length > 3) {
      uniqueWordArr.pop()
    }
    return uniqueWordArr
  }
/*
Solution:

So the problem has us return an array of the 3 most used unique words in a string given in the argument. The string must be lowercase and in the event of less than three UNIQUE words 
or empty string, return the top results or an empty array.

Initial thoughts:

So a few considerations, we'll have to use a few loops and they'll impact our overall memory performance based on the algorithms used. My first instinct would be to sanitize the string with
.toLowerCase(), will also need to .replace with a regular expression to remove most special characters. After sanitizing the string we'll need to loop through it, my first thought is using
a .split(' ') to create an array, then we'll need to create a map, the only issue is how we create the map, bonus points for not sorting the array, honestly I'm thinking there must be
a way to loop through a map to check for unique entries and then only loop through the unique entries while creating another map with a key value pair, the key will be the word and the value
will be the amount of occurrances, starting from 1 and ++ every time we see it. Technically you can loop once through the Array because when you create a map if you try to create an additional
entry which is a duplicate, it won't work. That should create the initial map, and with the initial map while we do the first Array loop we can set an if statement which can do the increments
to the map I think and an if statement to just skip duplicate entries... I think the logic is too innefficient but we'll just use this as a brute force.

After we create the Map with the Keys and Values I think we can just use a .filter method to return an Array which will have our finished result.

Post Solution thoughts:

I finally got it, it took me about 3 days or about 18ish hours and I finally managed to complete it. One of the biggest hurdles was using Regular Expressions and properly capturing the
contracted words to display properly. Creating the test regular expression helped a lot since it'll always capture regular words and contracted words e.g. Can't Won't etc.

Another hurdle was working with maps and sets which were a first for me, basically I used sets to find Unique Words/Letters and then set it to an Array so I could do a .forEach()
which added the unique word as the key and the number of times it appeared as a value, which in this I used the .filter() method on the two arrays and returned the .length of the array
as the value. I then had to sort the array using the value assigned to the map and then just used a .pop() method to reduce it to 3, but I did see someone use the .slice(0, 3) which obviously
makes more sense but I just did what I figured would work.
*/