"use strict";

const btnLight = document.querySelector(".btn-light");
const btnDark = document.querySelector(".btn-dark");
const navTrack = document.querySelector(".nav-header");
const sliderMenu = document.querySelector(".slider-menu");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".btn-close--m");
const overlay = document.querySelector(".overlay");
const navLinks = document.querySelectorAll(".nav-links");

btnLight.addEventListener("click", function () {
  btnLight.style.display = "none";
  btnDark.style.display = "block";
});

btnDark.addEventListener("click", function () {
  btnLight.style.display = "block";
  btnDark.style.display = "none";
});

sliderMenu.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.add("modal-show");
  overlay.classList.remove("hidden");
});

closeModal.addEventListener("click", function () {
  modal.classList.remove("modal-show");
  overlay.classList.add("hidden");
});

// NAVBAR color change //
window.onscroll = () => {
  if (window.scrollY >= 15) {
    navTrack.style.backgroundColor = "#1f2121";
    navTrack.style.transition = "0.5s";
  } else {
    navTrack.style.backgroundColor = "#9391912b";
    navTrack.style.backdropFilter = "blur(0px)";
    navTrack.style.transition = "0.5s";
  }
};

// SMOTH scroll Navigation menu//

navLinks.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  });
});
