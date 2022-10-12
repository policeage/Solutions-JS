function reverseWords(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' ');
    }

//  Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Solution Notes: 
//  Honestly, I'm more mad that this solution worked. Initially I was like, okay, we receive a string, you can technically iterate through it
//  and you could iterate through it and when i = ' ' then concat those in to a new string, basically something like
//  for (let i = 0: i > str.length; i++) {
//  if (i === ' ') {
//    newString += str.slice(0, i)
//}
//  Something like that, probably need to do nested loops and it takes a long time.


//  I also thought that if I just split each word, I could loop through the array and apply the .reverse() method to it,
//  but when you iterate through an array with like array[i], you can't apply array methods because the data type of
//  array[i] returns the data type value, e.g. strArray[0] returns 'The' === String, therefore you can't do strArray[0].reverse()


//  But doing the str.split('').reverse().join('').split(' ').reverse().join(' ') just feels so goofy.
//  Basically you turn str in to an array, reverse everything, turn it back in to a string, then you split it at the ' ' space within the array
//  reverse that, because instead of reversing the string, it reverses the order of the indices in the array. The last .join(' ') then joins the array
//  with a space for the indices, returning the entire string with their words reversed. The last test seemed like it would anull this method
//  But it seems that despite adding an additional ' ' space, you still return the correct amount of ' ' spaces because if you split it at
// .split(' ') it retains the extra space so for example
//  strExample = "Funny  Puppy  Kisses"
//  strExample.split('') catches this as ["Funny", " Puppy", " Kisses"]
//  So when you apply a .join(' ') with a space you return the same value as "Funny  Puppy  Kisses".