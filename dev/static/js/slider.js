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

var swpThumbs = new Swiper('.swiper-container-images', {
    spaceBetween: 0,
    slidesPerView: 1,
    effect: 'slide',
    breakpoints: {
        375: {
            slidesPerView: 1.165,
            spaceBetween: 13,
            speed: 1000,
            touchRatio: 0.2,
            effect: 'slide',
            slideToClickedSlide: true,
            controller: {
                inverse: false,
            },
        },

        720: {
            slidesPerView: 1,
            spaceBetween: 0,
            direction: 'vertical',
            grabCursor: true,
            speed: 1000,
            effect: 'slide',
            touchRatio: 0.2,
            slideToClickedSlide: true,
            controller: {
                inverse: false,
            },
        },
    }
});

var swpImages = new Swiper('.swiper-container-text', {
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 1300,
    effect: 'slide',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    controller: {
        inverse: false,
    },

    navigation: {
        nextEl: '.swp-slider__next',
        prevEl: '.swp-slider__prev',
    },

    breakpoints: {
        375: {
            spaceBetween: 0,
            slidesPerView: 1,
            speed: 1300,
            effect: 'slide',
            touchRatio: 0.2,
            slideToClickedSlide: true,

            controller: {
                inverse: false,
            },

            navigation: {
                nextEl: '.swp-slider__next',
                prevEl: '.swp-slider__prev',
            },
        },

        720: {
            spaceBetween: 0,
            slidesPerView: 1,
            speed: 1300,
            touchRatio: 0.2,
            slideToClickedSlide: true,
            direction: 'vertical',
            effect: 'fade',
            navigation: {
                nextEl: '.swp-slider__next',
                prevEl: '.swp-slider__prev',
            },
        }
    }
});

swpThumbs.controller.control = swpImages;
swpImages.controller.control = swpThumbs;

const swiper3 = new Swiper('.custom-swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    slideClass: 'custom__item',
    speed: 1000,
    effect: "creative",
    creativeEffect: {
        prev: {
            translate: ["-120%", 0, -500],
        },
        next: {
            translate: ["120%", 0, -500],
        },
    },

    navigation: {
        nextEl: '.custom__next',
        prevEl: '.custom__prev',
    }
});
