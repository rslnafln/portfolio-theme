let swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
    },
});

// Carousel
var mySwiper = new Swiper ('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    //truewrapper adoptsheight of active slide
    autoHeight: false,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // delay between transitions in ms
    autoplay: {
        delay: 5000,
    },
    // And if we need scrollbar
    //scrollbar: '.swiper-scrollbar',
    // "slide", "fade", "cube", "coverflow" or "flip"
    effect: 'slide',
    // Distance between slides in px.
    spaceBetween: 60,
    //
    slidesPerView: 2,
    //
    // centeredSlides: true,
    //
    //
    grabCursor: true,
});