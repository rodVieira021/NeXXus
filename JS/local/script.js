"use strict";

const btnLight = document.querySelector(".btn-light");
const btnDark = document.querySelector(".btn-dark");
const navTrack = document.querySelector(".nav-header");
const sliderMenu = document.querySelector(".slider-menu");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".btn-close--m");
const blur = document.querySelector(".blur");

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
  blur.classList.add("blur-on");
});

closeModal.addEventListener("click", function () {
  modal.classList.remove("modal-show");
  blur.classList.remove("blur-on");
});

window.onscroll = () => {
  if (window.scrollY >= 100) {
    navTrack.style.backgroundColor = "#1f2121";
    navTrack.style.transition = "0.5s";
  } else {
    navTrack.style.backgroundColor = "#9391912b";
    navTrack.style.backdropFilter = "blur(0px)";
    navTrack.style.transition = "0.5s";
  }
};
