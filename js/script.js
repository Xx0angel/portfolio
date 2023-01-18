console.log("START")

// MENU INTERACTIVITY
let menu = document.querySelector("#menu");
let menuBar = document.querySelector(".header__nav");

menu.onclick = () => {
    console.log("click")
    menuBar.classList.toggle("active__menu");
}

// SKILLS 
const skillsContent = document.querySelector(".skills__item"),
      skillsHeader = document.querySelectorAll(".skill")

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__item skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__item skills__open'
    }
}

skillsHeader.forEach((el) => {
    console.log()
    el.addEventListener('click', toggleSkills)
})

