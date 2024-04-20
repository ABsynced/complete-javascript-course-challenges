"use strict";
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, 
they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: 
if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
map,filter,reduce
*/

// Solution to Coding Challenge #2

// const calcAverageHumanAge = function(ages){
//     const humanAge = ages.map(age => age <= 2 ? age * 2 : (age * 4) + 16);
//     const adults = humanAge.filter(age => age >= 18);
//     console.log(humanAge);
//     console.log(adults);
//     const average = adults.reduce((accum, age) => (accum + age), 0) / adults.length;
//     console.log(average);
// };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// Solution to Coding Challenge #3

const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? age * 2 : age * 4 + 16))
    .filter((age) => age >= 18)
    .reduce((accum, age, i, arr) => (accum + age) / arr.length, 0);
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
