"use script";
// Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names �
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }
// GOOD LUCK
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// Solution of Coding Challenge #2:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// for (let i = 0; i < game.scored.length; i++) {
//   console.log(`Goal ${i + 1}: ${game.scored[i]}`);
// }
for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${player}`);
}
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
const gameOddsValues = Object.values(game.odds);
console.log(gameOddsValues);
// let sum = 0;
// for (let i = 0; i < gameOddsValues.length; i++) {
//   sum += gameOddsValues[i];
//   let average = sum / gameOddsValues.length;
//   console.log(average);
// }
let average = 0;
for (const odd of gameOddsValues) average = average + odd;
average = average / gameOddsValues.length;
console.log(average);
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names
const gameOddsKeys = Object.keys(game.odds);

for (let i = 0; i < gameOddsKeys.length; i++) {
  if (gameOddsKeys[i] === "x") {
    console.log(`odd of draw : ${gameOddsValues[i]}`);
  } else {
    console.log(`odd of victory of ${gameOddsKeys[i]}: ${gameOddsValues[i]}`);
  }
}
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }
const scorers = {};
for (const player of game.scored) {
  scorers[player] = scorers[player] ? scorers[player] + 1 : 1;
}

console.log(scorers);

// game.scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
// The loop iterates over each player in the game.scored array.
// For each player, it checks if the player is already a property in the scorers object (scorers[player]).
// If the player is not a property in scorers, it initializes the count to 1 (scorers[player] = 1).
// If the player is already a property in scorers, it increments the count by 1 (scorers[player]++).
// during the iteration:
// The first time "Gnarby" is encountered, it's not in scorers, so it's added with a count of 1.
// The first time "Hummels" is encountered, it's not in scorers, so it's added with a count of 1.
// The second time "Lewandowski" is encountered, it's already in scorers, so its count is incremented to 2.
// This process continues for each player in game.scored, resulting in the final scorers object you provided.
// Each player's name is a property, and the corresponding value is the number of goals they scored.
