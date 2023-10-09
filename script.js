let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        }
    })

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}

menuIcon.classList.remove('fa-x');
navbar.classList.remove('active');

var typed = new Typed ("#typing", {
    strings: ["Web Development","App development", "Programming", "Designing", "Exploring", "Dancing"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed (".typing-2", {
    strings: ["Full Stack Developer","App Developer","Open Source Enthusiasts", "Programmer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});
