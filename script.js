var hamBurger = document.querySelector(".hamburger-button");

var phoneMenu = document.querySelector(".list ul")
hamBurger.addEventListener("click", () => {
    hamBurger.classList.toggle("active");
    phoneMenu.classList.toggle("active");
});