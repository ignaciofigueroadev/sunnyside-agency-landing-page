const headerButton = document.querySelector(".header__hamburguer");
const headerNav = document.querySelector(".header__nav");

headerButton.addEventListener("click", () => {
  headerNav.classList.toggle("header__nav--active");
});
