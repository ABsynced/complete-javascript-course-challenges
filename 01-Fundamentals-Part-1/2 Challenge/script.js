"use strict";
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
// Data 1:
// const marksHeight = 1.69;
// const johnsHeight = 1.95;
// const marksWeight = 78;
// const johnsWeight = 92;

// Data 2:
const marksHeight = 1.88;
const marksWeight = 95;
const johnsHeight = 1.76;
const johnsWeight = 85;

const markBmi = marksWeight / marksHeight ** 2;
console.log(`Mark's BMI is = ${markBmi}`);
const johnBmi = johnsWeight / johnsHeight ** 2;
console.log(`John's BMI is = ${johnBmi}`);

if (markBmi > johnBmi) {
  console.log(
    `Mark's BMI (${markBmi}) is higher than John's BMI (${johnBmi}) !`
  );
} else {
  console.log(
    `John's BMI (${johnBmi}) is higher than Mark's BMI (${markBmi}) !`
  );
}

// markBmi > johnBmi
//   ? console.log(
//       `Mark's BMI (${markBmi}) is higher than John's BMI (${johnBmi}) !`
//     )
//   : console.log(
//       `John's BMI (${johnBmi}) is higher than Mark's BMI (${markBmi}) !`
//     );
