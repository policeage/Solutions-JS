const getTheTitles = function(array) {
    let titles = [];
    for (const x of array) {
       titles.push(x.title);
    } return titles;
}

/*
Post solution note:
  I had a couple of times where I was so close to getting the solution
  but for some reason I was getting an additional "undefined" attached to it
  so I just checked the solution, changed the function input parameter to array
  and then changed the initial arguments to array and it worked.

  I'm assuming that because I was using the arguments for the parameter,
  it was keeping an undefined in there because it basically read it as
  function(books,) instead of function(books)


/* const getTheTitles = function() {
    let titles = [];
    let a = 0;
    for (let i = 0; i <= arguments.length -2; i++) {
        titles[a] = arguments[i].title
        a++;
    } return titles
} */  

/* Glad I just read through objects,
    so the goal is just to iterate through a given object, looks like it has an array
    inside of it so something like 

    Needs to return this value: ['Book','Book2'] 
*/

/* # Exercise 11 - Get the Titles!

You are given an array of objects that represent books with an author and a title that looks like this:

```javascript
const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]
```

Your job is to write a function that takes the array and returns an array of titles: */

// Do not edit below this line
module.exports = getTheTitles;
