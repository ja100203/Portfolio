const burger = document.querySelector('.icon');
const dropdown = document.querySelector('.dropdown');
let collapsed = true;

burger.addEventListener("click", () => {
  if(collapsed){
    dropdown.style.maxHeight = dropdown.scrollHeight + "px";
    collapsed = false;
  }
  else{
    dropdown.style.maxHeight = "";
    collapsed = true;
  }
  if(burger.innerHTML == 'menu') burger.innerHTML = 'close';
  else burger.innerHTML = 'menu';
})

window.addEventListener("resize", () => {
  if(!collapsed){
    dropdown.style.maxHeight = "";
    collapsed = true;
  }
  burger.innerHTML = 'menu';
})
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