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
]
const oldest = people.reduce((age, name, a) => {
    return age = (age > (a.yearOfDeath-a.yearOfBirth) ? age:(a.yearOfDeath-a.yearOfBirth))
 }, 0)

 console.log(oldest)