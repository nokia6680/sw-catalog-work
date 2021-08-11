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
