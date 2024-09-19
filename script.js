var hamBurger = document.querySelector(".hamburger-button");

var phoneMenu = document.querySelector(".list ul")

var menuitem = document.querySelectorAll(".list ul li a");
hamBurger.addEventListener("click", () => {
    hamBurger.classList.toggle("active");
    phoneMenu.classList.toggle("active");
});

menuitem.forEach((item) => {
    item.addEventListener("click", () => { 
     hamBurger.classList.toggle("active");
     phoneMenu.classList.toggle("active");
    });
});