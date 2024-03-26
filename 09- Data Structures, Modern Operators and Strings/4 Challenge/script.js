"use strict";
// Coding Challenge #4

/* 
Write a program that receives a list of variable names 
written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion
will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. 
Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

// Solution of Coding Challenge #4

document.querySelector("button").addEventListener("click", function () {
  const impArray = [];
  let replaced;
  const areaText = document.querySelector("textarea").value;

  const row = areaText.split("\n");
  //   console.log(...row.entries());

  for (const [key, x] of row.entries()) {
    // console.log(x);
    const [firstName, secondName] = x.trim().toLowerCase().split("_");
    const output = `${firstName}${secondName[0].replace(
      secondName[0],
      secondName[0].toUpperCase()
    )}${secondName.slice(1)}`;
    console.log(`${output.padEnd(20, " ")}${"✅".repeat(key + 1)}`); // or just console.log(output.padEnd(20);
  }
});

///////////////////////////////////////
// String Methods Practice

const sliceUpperCase = (str) => str.slice(0, 3).toUpperCase();

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
console.log(flights);
for (const item of flights.split("+")) {
  const [type, from, to, time] = item.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${sliceUpperCase(from)} to ${sliceUpperCase(to)} (${time.replace(
    ":",
    "h"
  )})`.padStart(50);
  console.log(output);
}
