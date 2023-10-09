// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

$(function() {
    $(window).scroll(function() {
        var catalog = document.querySelector('.menu');
        var navCatalog = document.querySelector('.nav');
        var bodyIndex = document.querySelector('.body-index');

        if ($(this).scrollTop() >= 80) {
            $('header').addClass('scrolling');
            catalog.classList.remove('index-active');
            navCatalog.classList.remove('catalog-opened');

        } else {
            $('header').removeClass('scrolling');
            catalog.classList.add('index-active');
        }
    });
});

function show() {
    var option = document.getElementById('contactCity').value;
    var mskItem = document.querySelector('.nav__city-block--msk');
    var spbItem = document.querySelector('.nav__city-block--spb');
    var regItem = document.querySelector('.nav__city-block--reg');

    if (option == "msk") {
        mskItem.classList.add('active');
        spbItem.classList.remove('active');
        regItem.classList.remove('active');
    }

    if (option == "spb") {
        mskItem.classList.remove('active');
        spbItem.classList.add('active');
        regItem.classList.remove('active');
    }

    if (option == "reg") {
        mskItem.classList.remove('active');
        spbItem.classList.remove('active');
        regItem.classList.add('active');
    }
};

var catOpener = document.querySelector('.js-catalog');
var navCat = document.querySelector('.nav');
var catalogBody = document.querySelector('.menu');
var navList = document.querySelector('.nav__wrap');
var navOpener = document.querySelector('.js-opener');

if (catOpener) {
    catOpener.addEventListener('click', function () {
        navCat.classList.toggle('catalog-opened');
        catOpener.classList.toggle('active');
        catalogBody.classList.toggle('opened');
        navList.classList.remove('active');
    });
};

if (navOpener) {
    navOpener.addEventListener('click', function () {
        catalogBody.classList.remove('opened');
        navOpener.classList.toggle('opened');
        navList.classList.toggle('active');
    });
};

document.addEventListener("click", function(event) {
	// If user clicks inside the element, do nothing
	if (event.target.closest(".header, .menu")) return;

	// If user clicks outside the element, hide it!
	catalogBody.classList.remove("opened");
});


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
var contactsBody = document.querySelector('.nav__contacts');

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

//var subscribeSubmit = document.querySelector('.subscribe__submit');
//var subscribeWrapper = document.querySelector('.subscribe__wrapper');
//var subscribeReaction = document.querySelector('.subscribe__title');

//if (subscribeSubmit) {
//    subscribeSubmit.addEventListener('click', function () {
//        event.preventDefault();
//        subscribeWrapper.classList.add('passed');
//        subscribeReaction.innerText = 'Вы успешно подписались на рассылку';
//    });
//};

var videoFrame = document.querySelector('.itemcard__body');
var videoBtn = document.querySelector('.js-start-video');
var body = document.querySelector('.body-itemcard');
var videoCloser = document.querySelector('.itemcard__video-closer');
var videoPlayer = document.querySelector('.itemcard__video-frame');

if (videoBtn) {
    videoBtn.addEventListener('click', function () {
        event.preventDefault();
        videoFrame.classList.add('video-active');
        body.classList.add('body-video');
        window.scrollTo(pageXOffset, 200);
    });
};

if (videoCloser) {
    videoCloser.addEventListener('click', function () {
        event.preventDefault();
        videoFrame.classList.remove('video-active');
        body.classList.remove('body-video');

        if (videoPlayer.src.startsWith("https://player.vimeo.com/")) {
            videoPlayer.contentWindow.postMessage('{"method":"pause"}', "*");
        }
    });
};
