"use strict";

const btnLight = document.querySelector(".btn-light");
const btnDark = document.querySelector(".btn-dark");
const btnMenu = document.querySelector(".icon-btn");
const navTrack = document.querySelector(".nav-header");
const sliderMenu = document.querySelector(".slider-menu");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".btn-close--m");
const overlay = document.querySelector(".overlay");
const navLinks = document.querySelectorAll(".nav-links");
const navText = document.querySelectorAll("nav-links");

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

// NAVBAR color change/body blur   *//
window.onscroll = () => {
  if (window.scrollY >= 400) {
    navLinks.forEach((link) => (link.style.color = "#000"));
    navTrack.classList.add("nav-down");
    sliderMenu.style.color = "#000";
    btnMenu.style.border = "1px solid #000";
  } else {
    navLinks.forEach((link) => (link.style.color = "#efefef"));
    navTrack.classList.remove("nav-down");
    sliderMenu.style.color = "#efefef";
    btnMenu.style.border = "1px solid transparent";
  }
};

// SMOOTH scroll Navigation menu//

navLinks.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//Tabbed component

const tabs = document.querySelectorAll("[data-btn-tab]");
const tabsContainer = document.querySelectorAll(".sec-2-tabs--container");

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    const clicked = document.querySelector(tab.dataset.btnTab);
    tabsContainer.forEach((container) => {
      container.classList.remove("active");
    });
    clicked.classList.add("active");
  });
});

//Tabbed buttons

const btnUp = document.querySelectorAll(".sec-2-btn-tab");

btnUp.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const targetBtn = e.target;
    btnUp.forEach((btnc) => {
      btnc.classList.remove("btn-active");
    });
    targetBtn.classList.add("btn-active");
  });
});

//fix smooth scroll in section 2 its covering the section first text line

//revelling section on scroll

const allSection = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.02,
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

////// intersect API

// const section1 = document.querySelector('.nav-header')

// const obsBack = function (entries) {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (!entry.isIntersecting)
//     navTrack.classList.add('sticky')
//     else navTrack.classList.remove('sticky')
//   });
// };

// const obsOpt = {
//   root: null,
//   threshold: '0',
// };

// const obsAll = new IntersectionObserver(obsBack, obsOpt);
// obsAll.observe(section1);
