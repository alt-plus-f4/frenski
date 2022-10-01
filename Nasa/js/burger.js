const hamburger = document.querySelector(".burger");
const navMenu = document.querySelector(".navlist");
const navLink = document.querySelectorAll(".navlist .li");
const menu = document.querySelector(".menu");


hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    menu.classList.toggle("active");
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    menu.classList.remove("active");
}
