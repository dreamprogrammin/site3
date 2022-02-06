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

const accordionItem = document.querySelectorAll('.accordion_item') 

for (items of accordionItem){
    items.addEventListener('click', function (){
        if(this.classList.contains('active')){
            this.classList.remove('active')
        }
        else {
            for (el of accordionItem) {
                el.classList.remove('active')
            }
            this.classList.add('active')
        }
    })
}
