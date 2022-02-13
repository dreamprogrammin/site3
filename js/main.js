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

const sliderLine = document.querySelectorAll('.slider_line')
const dot = document.querySelectorAll('.dot')
let index = 0

const sliderActive = (n) =>{
    for (sliders of sliderLine) {
        sliders.classList.remove('active')
    }
    sliderLine[n].classList.add('active')

}

const dotsActive = (p) =>{
    for (dots of dot){
        dots.classList.remove('active')
    }
    dot[p].classList.add('active')
}

addEventListener('click', dotsActive)


setInterval(() => {
    if (index == sliderLine.length - 1){
        index = 0
        sliderActive(index)
        dotsActive(index)
    }
    else {
        index++
        sliderActive(index)
        dotsActive(index)
    }
}, 2000);

const img1 = document.querySelector('.img_1')
const frameText2 = document.querySelector('.title_2')

const scrollActive = () => {
    scrollTop = window.scrollY
    console.log(scrollTop)
    if (scrollTop > 450){
        img1.classList.add('active')
    } else {
        img1.classList.remove('active')
    }
    if (scrollTop > 650){
        frameText2.classList.add('active')
    } else {
        frameText2.classList.remove('active')
    }
}


window.addEventListener('scroll', scrollActive)


