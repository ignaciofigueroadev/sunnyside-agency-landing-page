const hamburguerButton = document.querySelector(".header__toggle");
const navBar = document.querySelector(".header__nav");
const navLink = document.querySelectorAll(".header__li");
const tooltipImage = document.querySelector(".tooltip__img");
const tooltip = document.querySelector(".tooltip__container");

hamburguerButton.addEventListener("click", () => {
  navBar.classList.toggle("header__nav--active");
});

navLink.forEach((n) =>
  n.addEventListener("click", () => {
    navBar.classList.remove("header__nav--active");
  })
);

tooltipImage.addEventListener("click", () => {
  tooltip.classList.toggle("visible");
});
