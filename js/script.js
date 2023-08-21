//////  Scrol Reveal

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

// main
ScrollReveal().reveal('.main .container .row .text-main h3', {origin: 'top'});
ScrollReveal().reveal('.main .container .row .text-main h1', {origin: 'left'});
ScrollReveal().reveal('.main .container .row .text-main h2', {origin: 'top'});
ScrollReveal().reveal('.main .container .row .text-main p', {origin: 'left'});
ScrollReveal().reveal('.main .container .row .text-main ul', {origin: 'left'});
ScrollReveal().reveal('.main .container .row .img ', {origin: 'bottom'});

ScrollReveal().reveal('.container-fluid .container .heading', {origin: 'top'});

// about 
ScrollReveal().reveal('.about .container .row .img-about', {origin: 'left'});
ScrollReveal().reveal('.about .container .row .text-about h1', {origin: 'right'});
ScrollReveal().reveal('.about .container .row .text-about h2', {origin: 'right'});
ScrollReveal().reveal('.about .container .row .text-about h3', {origin: 'right'});
ScrollReveal().reveal('.about .container .row .text-about p', {origin: 'right'});
ScrollReveal().reveal('.container-fluid .container .row .tombol', {origin: 'bottom'});

// service 
ScrollReveal().reveal('.service .container .row .keluar', {origin: 'bottom'});

// project 
ScrollReveal().reveal('.project .container .row .masuk', {origin: 'left'});

// contact 
ScrollReveal().reveal('.contact .container form', {origin: 'bottom'});

// footer 
ScrollReveal().reveal('.footer-fluid .container .footer .row .col-6', {origin: 'left'});
ScrollReveal().reveal('.footer-fluid .container .footer .row .col-5', {origin: 'right'});
ScrollReveal().reveal('.footer-fluid .container .footer .row .copy p', {origin: 'bottom'});
ScrollReveal().reveal('.footer-fluid .container .footer .row .icon', {origin: 'bottom'});



// typed text
const typed = new Typed('.multiple-text', {
    strings: ["Frntend Developer", "Bckend Developer", "Software Enginer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


const Info = document.querySelector('.container .row .tombol');
const Info2 = document.querySelector('.container .row .text-about .tombol');

Info.addEventListener('click', (e) => {
        e.target.innerHTML(alert('Maaf Tombol" ini tdk berfungsi karna ini hanya web latihan'));
});
Info2.addEventListener('click', (e) => {
        e.target.innerHTML(alert('Maaf Tombol" ini tdk berfungsi karna ini hanya web latihan'));
});
