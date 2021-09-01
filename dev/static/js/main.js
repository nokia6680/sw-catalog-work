var menuOpener = document.querySelector('.js-menuOpener');
var menuOverlay = document.querySelector('.nav__list');

if (menuOpener) {
    menuOpener.addEventListener('click', function () {
        menuOverlay.classList.toggle('active');
    });
};
