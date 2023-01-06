/*
Problem: 
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, 
and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character 
should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be 
separated by a single space(' ').
*/
function toWeirdCase(string){
    let array = string.split(' ')
    let container = []
    let weirdstring = []
    for (let i = 0; i <= array.length - 1; i++) {
      let words = array[i].split('')
      if (i == 0) {
      words.forEach((letter, index) => {
      container.push((index^1) == (index+1) ? letter.toUpperCase() : letter.toLowerCase())
    })
      weirdstring.push(container.join(''))
      container = []
        continue;
      } else {
      words.forEach((letter, index) => {
      container.push((index^1) == (index+1) ? letter.toUpperCase() : letter.toLowerCase())
    })
      weirdstring.push(' ');
      weirdstring.push(container.join(''))
      container = []
      }
      }
    return weirdstring.join('');
  }
/*
Solution:
Initially, my first major coding looked like this:

function toWeirdCase(string){
  //TODO
  let array = string.split(' ')
  let container = []
  let weirdstring = ''
  if (array.length == 1) {
    string.split('').forEach((letter, index) => {
      container.push((index^1) == (index+1) ? letter.toUpperCase() : letter.toLowerCase())
    })
    return container.join('')
  }
  for (let i = 0; i <= array.length - 1; i++) {
    let words = array[i].split('')
    words.forEach((letter, index) => {
    weirdstring.concat((index^1) == (index+1) ? letter.toUpperCase() : letter.toLowerCase())
  })
    }
  return weirdstring
}

The use of (index^1) == (index+1) is to check if the current index is odd or even and since I was iterating through the string after changing the data
in to an Array this was quite easy. My main hang up is that after splitting and joining arrays is that I wasn't able to quite add a space between the words.
I'm assuming if I was able to format the for loop correctly I'd be able to do something like that, but my main issue is that I'm unable to clear the container.

So after beating my head over why doing something like container.join('').split(' ').shift() or .pop() wasn't actually clearing the container, I think it has
an issue to do with scope. Since container is declared outside of the loop, the container variable inside the loop wasn't being correctly mutated.

So in the end simply using container = [] at the end of the conditionals reset the container to an empty array within the loop.

Honestly, I should really just learn how to use the .map function because I saw quite a few solutions utilize it. I was also considering using a double .forEach
type of thing where I declare forEach(word) and then forEach(letter, index) but after looking at the .map() solutions it's basically the same thing I was doing
except with only Arrays. Also the Issue with using two .forEach is that they always return undefined, so you  have to be making changes to something in your scope.

Overall very annoying problem but at least with this one I feel like I learned a lot about handling arrays and scopes.
*/