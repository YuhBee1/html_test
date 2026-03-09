// Initialize Lucide Icons
lucide.createIcons();

// Sticky Header Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Initialize Hero Slider
const swiper = new Swiper('.hero-swiper', {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});