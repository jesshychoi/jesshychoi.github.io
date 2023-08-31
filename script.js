/* scroll reveal */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 100
});

ScrollReveal().reveal('.home-content, .header', { origin: 'top' });
ScrollReveal().reveal('.home-middle', { origin: 'right' });
ScrollReveal().reveal('.home-img', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });

/* typed js */
const typed = new Typed('.typed-text', {
    strings: ['product manager, <br> passionate about marketing <br> and UI/UX design.'],
    typeSpeed: 40,
    startDelay: 1000
})

/* navbar */
var lastScrollTop;
navbar = document.getElementById('header');
window.addEventListener('scroll',function(){
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if(scrollTop > lastScrollTop){
navbar.style.top='-80px';
}
else{
navbar.style.top='0';
}
lastScrollTop = scrollTop;
});