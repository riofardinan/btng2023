$(function () {
    $('.slick-slider').slick({
        infinite: true,
        dots: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        variableWidth: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 4000,

    });
})

const nav = document.querySelector('#mainNav')
const navButton = document.querySelector('.navbar-toggler')

navButton.addEventListener('click', function () {
    nav.classList.toggle('show')
})

window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
        nav.classList.add('active', 'text-light', 'shadow');
    } else {
        nav.classList.remove('active', 'text-light', 'shadow')
    }
})

// Activate the main nav element
const mainNav = document.body.querySelector('#mainNav');
if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        offset: 72,
    });
};

//Activate list in project
const list = document.querySelector('#list li')
$(document).on('click', '#list li', function () {
    $(this).addClass('active').siblings().removeClass('active');
})


