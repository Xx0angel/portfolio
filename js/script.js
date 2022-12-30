console.log("START")

// MENU INTERACTIVITY
let menu = document.querySelector("#menu");
let menuBar = document.querySelector(".header__nav");

menu.onclick = () => {
    console.log("click")
    menuBar.classList.toggle("active__menu");
}