"use strict";

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
