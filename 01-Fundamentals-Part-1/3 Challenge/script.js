"use strict";
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. 
The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw,
 so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule,
 a team only wins if it has a higher score than the other team, and the same 
 time a score of at least 100 points. HINT: Use a logical operator to test for 
 minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! 
So a draw only happens when both teams have the same score and both have a score greater or equal 100 points.
Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// Solution Coding Challenge #3
// 1. Calculate the average score for each team, using the test data below

// Data 1
// const averageDolphins = (96 + 108 + 89) / 3;
// const averageKoalas = (88 + 91 + 110) / 3;

// Data 2
// const averageDolphins = (97 + 112 + 101) / 3;
// const averageKoalas = (109 + 95 + 123) / 3;

// Data 3
const averageDolphins = (97 + 112 + 101) / 3;
const averageKoalas = (109 + 95 + 106) / 3;
console.log(averageDolphins);
console.log(averageKoalas);

// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
  console.log(
    `The winner is the 🏆Dolphins🏆 with a score of ${averageDolphins} - ${averageKoalas}`
  );
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
  console.log(
    `The winner is the 🏆Koalas🏆 with a score of ${averageKoalas} - ${averageDolphins}`
  );
} else if (
  averageDolphins === averageKoalas &&
  averageDolphins >= 100 &&
  averageKoalas >= 100
) {
  console.log(`It's a Draw ${averageDolphins}-${averageKoalas}`);
} else {
  console.log(`No team wins the trophy!`);
}
