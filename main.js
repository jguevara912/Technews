const btn = document.querySelector('.menu-btn')
btn.addEventListener('click',()=>{
    document.querySelector('.nav-menu').classList.toggle('show')//con toggle al hacer click si tiene la clase la quita y si no la agrega
})

ScrollReveal().reveal('.showcase', {delay:600});
ScrollReveal().reveal('.new-cards', {delay:600});
ScrollReveal().reveal('.cards-banner-one', {delay:600});
ScrollReveal().reveal('.cards-banner-two', {delay:600});
ScrollReveal().reveal('.social', {delay:600});
ScrollReveal().reveal('.footer-links', {delay:600});