$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 79) {
            $('header').addClass('scrolling');
        } else {
            $('header').removeClass('scrolling');
        }
    });
});


var catOpener = document.querySelector('.js-catalog');
var navCat = document.querySelector('.nav');
var catalogBody = document.querySelector('.menu');


if (catOpener) {
    catOpener.addEventListener('click', function () {
        navCat.classList.toggle('catalog-opened');
        catalogBody.classList.toggle('opened');
        catOpener.classList.toggle('active');
    });
};

//var popupReactOpener = document.querySelector('.cart__submit');
//var popupReactCloser = document.querySelector('.popup-reaction__closer');
//var popupBody = document.querySelector('.popup-reaction');
//var bodyLayer = document.querySelector('.body');

//if (popupReactOpener) {
//    popupReactOpener.addEventListener('click', function () {
//        popupBody.classList.add('active');
//        bodyLayer.classList.add('no-scroll');
//    });
//};

//if (popupReactCloser) {
//    popupReactCloser.addEventListener('click', function () {
//        popupBody.classList.remove('active');
//        bodyLayer.classList.remove('no-scroll');
//    });
//};

var contactsOpener = document.querySelector('.--contacts');
var contactsBody = document.querySelector('.header__contacts');

if (contactsOpener) {
    contactsOpener.addEventListener('click', function () {
        event.preventDefault();
        contactsBody.classList.toggle('opened');
    });
};

var upperItem = document.getElementsByClassName('corporate__services-item');
var elNodes = document.querySelectorAll(".corporate__services-item");
//
for (var i = 0; i < upperItem.length; i++) {
    var elem = upperItem[i];
    elem.addEventListener("click", function() {
        event.preventDefault();
        this.classList.toggle("active");
    });
}
