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

var upperItem = document.getElementsByClassName('menu__item');
var elNodes = document.querySelectorAll(".menu__item");

for (var i = 0; i < upperItem.length; i++) {
    var elem = upperItem[i];
    elem.addEventListener("click", function() {
        event.preventDefault();
        this.classList.toggle("pressed");
    });
}
