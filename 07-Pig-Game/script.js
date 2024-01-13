"use strict";
let player1Current = document.querySelector("#current--0");
let player1Overall = document.querySelector("#score--0");
let player1Overlay = document.querySelector(".player--0");
let player2Current = document.querySelector("#current--1");
let player2Overall = document.querySelector("#score--1");
let player2Overlay = document.querySelector(".player--1");

let dice = document.querySelector(".dice");

let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");
let btnNew = document.querySelector(".btn--new");
let ap, currentScore, scores, playing;

let el1Name = document.getElementById("name--0");
let el2Name = document.getElementById("name--1");

const player1Name = prompt("Enter player 1's name: ");
if (player1Name) {
  el1Name.textContent = player1Name;
}
const player2Name = prompt("Enter player 2's name: ");
if (player2Name) {
  el2Name.textContent = player2Name;
}

let init = function () {
  player1Current.textContent = 0;
  player2Current.textContent = 0;
  player1Overall.textContent = 0;
  player2Overall.textContent = 0;
  scores = [0, 0];
  playing = true;
  dice.classList.add("hidden");
  player1Overlay.classList.remove("player--winner");
  player2Overlay.classList.remove("player--winner");
  player2Overlay.classList.remove("player--active");
  player1Overlay.classList.add("player--active");
  ap = 0;
  currentScore = 0;
};
init();

// function to switch ACTIVE players :
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${ap}`).textContent = 0;
  ap = ap === 0 ? 1 : 0;
  player1Overlay.classList.toggle("player--active");
  player2Overlay.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    let diceRoll = Math.trunc(Math.random() * 6 + 1);
    dice.classList.remove("hidden");
    dice.src = `dice-${diceRoll}.png`;
    console.log(diceRoll);
    if (diceRoll === 1) {
      switchPlayer();
    } else if (diceRoll !== 1) {
      currentScore += diceRoll;
      document.getElementById(`current--${ap}`).textContent = currentScore;
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[ap] += currentScore;
    document.getElementById(`score--${ap}`).textContent = scores[ap];

    if (scores[ap] >= 10) {
      document.querySelector(`.player--${ap}`).classList.add("player--winner");
      document
        .querySelector(`.player--${ap}`)
        .classList.remove("player--active");
      dice.classList.add("hidden");
      const winner = ap === 0 ? player1Name : player2Name;
      alert(`The winner is: ${winner}`);
      playing = false;
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);

const btnOpenModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closeModal = function () {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
  // modal.style.display = "none";
};
const openModal = function () {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
  // modal.style.display = "block";
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // to figure out which keyboard key was pressed to use it : console.log(e.key);
  // !modal.classList.contains("hidden") = if the modal DOESN'T contain the class hidden
  // we used the !modal.classList.contains("hidden") to only close tha modal when it's actually open
  if (!modal.classList.contains("hidden") && e.key === "Escape") {
    closeModal();
  }
});
