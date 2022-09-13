const findTheOldest = function(array) {
    let oldest = '';
    let current = new Date();
    let currentYear = current.getFullYear();
    let oldestAge = 0;
    let age = 0;
    for (const x of array) {
      age = x.yearOfDeath - x.yearOfBirth
        if (x.yearOfDeath == undefined) {
          age = currentYear - x.yearOfBirth;
          oldest = (oldestAge > age) ? oldest:x;
          oldestAge = (oldestAge > age) ? oldestAge:age;
        } else {
          oldest = (oldestAge > age) ? oldest:x;
          oldestAge = (oldestAge > age) ? oldestAge:age;
        }
    }
    return oldest;
};

/*
Post Solution Thoughts:
In the test you can see me fooling around with using array.reduce() but
I wasn't entirely sure if I could use conditionals within it, even then
I had already had the bones of this for array loop already done so I just
chose to go with it.

I had several issues with this, the major one being, I thought that I would
only need to return a string containing the name of the oldest. This was incorrect,
instead it checks for (people).name which is querying the objects name:value.
I only had a little bit of issues changing it from the string to the object instead.

Additionally, the third test asks "finds the oldest person if the OLDEST is still living",
which clearly my code wouldn't normally do, however the oldest person who is still living
is literally over 900 years old so she'd be the oldest in both life and death and it also
doesn't take in to consideration if others are possibly alive.


/*
Another array with objects problem.

So I'll need to iterate through the array, compare the yearofbirth and death, take that difference...
Will need to store a value as it's iterating. Can do the same for (const x of array) from the previous one, but
it will need a conditional to only store the oldest.

*/
/* # Exercise 12 - Find the Oldest

Given an array of objects representing people with a birth and death year, return the oldest person.


describe('findTheOldest', () => {
    test('finds the oldest person!', () => {
      const people = [
        {
          name: "Carly",
          yearOfBirth: 1942,
          yearOfDeath: 1970,
        },
        {
          name: "Ray",
          yearOfBirth: 1962,
          yearOfDeath: 2011,
        },
        {
          name: "Jane",
          yearOfBirth: 1912,
          yearOfDeath: 1941,
        },
      ] */


// Do not edit below this line
module.exports = findTheOldest;
