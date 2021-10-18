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

// breakpoint where swiper will be destroyed
// and switches to a dual-column layout
const breakpoint = window.matchMedia('(min-width: 720px)');
// keep track of swiper instances to destroy later
let swpImages;
const breakpointChecker = function() {
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {
        // clean up old instances and inline styles when available
        if (swpImages !== undefined) swpImages.destroy(true, true);
        // or/and do nothing
        return;
        // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
        // fire small viewport version of swiper
        return enableSwiper();
    }
};

const enableSwiper = function() {
    swpImages = new Swiper('.swiper-container-images', {
        slidesPerView: 1.165,
        spaceBetween: 13,
        speed: 1000,
        touchRatio: 0.2,
        effect: 'slide',
        slideToClickedSlide: true,
        controller: {
            inverse: false,
        },
    });
};

var swpText = new Swiper('.swiper-container-text', {
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
            navigation: {
                nextEl: '.swp-slider__next',
                prevEl: '.swp-slider__prev',
            },
        }
    }
});

// keep an eye on viewport size changes
breakpoint.addListener(breakpointChecker);
// kickstart
breakpointChecker();

swpText.controller.control = swpImages;
swpImages.controller.control = swpText;

var swpText = new Swiper('.swiper-container-text', {
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
            navigation: {
                nextEl: '.swp-slider__next',
                prevEl: '.swp-slider__prev',
            },
        }
    }
});
