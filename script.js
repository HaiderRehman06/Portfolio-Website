var hamBurger = document.querySelector(".hamburger-button");

var phoneMenu = document.querySelector(".lists ul")
hamBurger.addEventListener("click", () => {
    hamBurger.classList.toggle("active");
    phoneMenu.classList.toggle("active");
});