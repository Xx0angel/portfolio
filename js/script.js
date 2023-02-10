// MENU INTERACTIVITY
let menu = document.querySelector("#menu");
let menuBar = document.querySelector(".header__nav");

menu.onclick = () => {
    menuBar.classList.toggle("active__menu");
}

// SKILLS 
const skillsContent = document.getElementsByClassName('skills__item'),
      skillsHeader = document.querySelectorAll('.skill__item')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__item skills__close'
    }
    
    if(itemClass === 'skills__item skills__close'){
        this.parentNode.className = 'skills__item skills__open'
    }
}

skillsHeader.forEach((el) => {   
    el.addEventListener('click', toggleSkills)
})

// STICKY NAVBAR 

window.onscroll = function(){functionSticky()};
var navbar = document.getElementById("header");
var sticky = navbar.offsetTop + 100;

function functionSticky() {
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
} 

// SCROLL REVEAL LIBRARY
// ScrollReveal().reveal('.header');
ScrollReveal().reveal('.header');
ScrollReveal().reveal('.header__box');
ScrollReveal().reveal('.home', { delay: 500 });

// AOS LIBRARY
AOS.init();
