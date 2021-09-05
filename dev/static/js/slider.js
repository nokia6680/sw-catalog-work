var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: false,
    autoplay: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.gallery__next-th',
        prevEl: '.gallery__prev-th',
    }
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 0,
    autoplay: false,
    pagination: {
        el: '.fraction-pagination',
        type: 'fraction',
    },

    thumbs: {
        swiper: galleryThumbs
    }
});

const swiper2 = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    speed: 1000,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    navigation: {
        nextEl: '.swp-slider__next',
        prevEl: '.swp-slider__prev',
    }
});

const swiper3 = new Swiper('.swiper-container-st', {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    speed: 1000,

    navigation: {
        nextEl: '.st__next',
        prevEl: '.st__prev',
    }
});
