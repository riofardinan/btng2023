
const navButton = document.querySelector('#nav-button')
const nav = document.querySelector('nav')

function toggle() {

    navButton.classList.toggle('active')

}

navButton.addEventListener('click', function () {
    if (navButton.classList == 'active') {
        nav.classList.add('active-color')
    } else {
        nav.classList.remove('active-color')
    }
})


window.addEventListener('scroll', function () {
    if (this.window.scrollY > 10) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
})

const content = document.querySelector('#content')
window.addEventListener('scroll', function () {
    var wScroll = this.window.scrollY

    content.style.transform = 'translate(0px, ' + wScroll / 4 + '%)';
})

