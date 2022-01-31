let headerNav = document.querySelector('.header_nav')
let navMenu = document.querySelector('.nav_menu')
const span = document.querySelectorAll('span')
const body = document.querySelector('body')

const headerMenuActiv = () =>{
    headerNav.classList.toggle('active')
    span.forEach(element => {
        element.classList.toggle('active')
    });
    body.classList.toggle('lock')
}

navMenu.addEventListener('click', headerMenuActiv)