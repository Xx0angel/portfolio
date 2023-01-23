console.log("START")

// MENU INTERACTIVITY
let menu = document.querySelector("#menu");
let menuBar = document.querySelector(".header__nav");

menu.onclick = () => {
    console.log("click")
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
    console.log("click")
}

skillsHeader.forEach((el) => {   
    el.addEventListener('click', toggleSkills)
})

