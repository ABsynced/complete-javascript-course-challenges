"use strict";
// Coding Challenge #3
// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, it was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL
// GOOD LUCK

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// Solution of Coding Challenge #3 :
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);

// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)

console.log(`An event happened every ${90 / gameEvents.size} minutes`);
// in this exercise we used 90, to make it more accurate, to make it more accurate
// we need to use the last key of the gameEvents map, to do that :
// in the past we only used the pop() method to delete the last element of an array
// but we also know that the pop method returns the deleted element
// and that's exactly what we'll use here :
const eventMaxDuration = [...gameEvents.keys()].pop();
console.log(eventMaxDuration); // this returns 92;
console.log(
  `An event happened every ${eventMaxDuration / gameEvents.size} minutes`
);

// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL

for (const [minute, event] of gameEvents) {
  let whichHalf;
  if (minute <= 45) {
    whichHalf = "[FIRST HALF]";
  } else {
    whichHalf = "[SECOND HALF]";
  }
  console.log(`${whichHalf} ${minute} ${event}`);
}
