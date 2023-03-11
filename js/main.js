const hamburguerButton = document.querySelector(".header__toggle");
const navBar = document.querySelector(".header__nav");

hamburguerButton.addEventListener("click", () => {
  navBar.classList.toggle("header__nav--active");
});
