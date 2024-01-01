"use script";
// document.querySelector(".guess").value = null;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

console.log(secretNumber);
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // if there's no input :
  if (!guess) {
    document.querySelector(".message").textContent =
      "⛔️Please Try a Number Between 1-20";
  }
  // if guess is too HIGH & score > 1 :
  else if (score > 1) {
    if (guess > secretNumber) {
      document.querySelector(".message").textContent = "📈Too high!";
      if (score > 1) {
        score--;
        document.querySelector(".score").textContent = score;
      }
    }
    // if guess is EQUAL to the secret number :
    else if (guess === secretNumber) {
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".message").textContent = "🎉Correct Number!";
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
      document.querySelector(".check").disabled = true;
      document.querySelector(".guess").disabled = true;
    }
    //if guess is too LOW & score > 1 :
    else if (guess < secretNumber) {
      document.querySelector(".message").textContent = "📉Too Low!";
      if (score > 1) {
        score--;
        document.querySelector(".score").textContent = score;
      }
    }
  }
  // if you failed all your tries the game ends:
  else if (score === 1) {
    document.querySelector(".score").textContent = "0";
    document.querySelector(".message").textContent = "💥GAME OVER💥 Try again!";
    document.querySelector("body").style.backgroundColor = "red";
    document.querySelector(".check").disabled = true;
    document.querySelector(".guess").disabled = true;
    document.querySelector(".guess").value = "";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#003367";
  document.querySelector(".score").textContent = score;
  document.querySelector(".check").disabled = false;
  document.querySelector(".guess").disabled = false;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
});
