//ball1
const ballFirst = ball1.querySelector("svg");
const maxMoveFirst = ball1.offsetWidth / 10;
const ball1CenterX = ball1.offsetLeft + (ball1.offsetWidth / 10);
const ball1CenterY = ball1.offsetTop + (ball1.offsetHeight / 10);

function getMousePos(xRef, yRef) {

    let panelRect = ball1.getBoundingClientRect();
    return {
        x: Math.floor(xRef - panelRect.left) / (panelRect.right - panelRect.left) * ball1.offsetWidth,
        y: Math.floor(yRef - panelRect.top) / (panelRect.bottom - panelRect.top) * ball1.offsetHeight
    };
};

document.body.addEventListener("mousemove", function(e) {
    let mousePos = getMousePos(e.clientX, e.clientY),
        distX = mousePos.x - ball1CenterX,
        distY = mousePos.y - ball1CenterY;
    if (Math.abs(distX) < 1920 && distY < 1080) {
        ball1.style.transform = "translate(" + -1 * distX / 48 + "px," + -1 * distY / 48 + "px)";
    };
});

const ballSecond = ball2.querySelector('svg');
const maxMoveSecond = ball2.offsetWidth / 10;
const ball2CenterX = ball2.offsetLeft + (ball2.offsetWidth / 10);
const ball2CenterY = ball2.offsetTop + (ball2.offsetHeight / 10);

function getMousePos2(xRef, yRef) {

    let panelRect = ball2.getBoundingClientRect();
    return {
        x: Math.floor(xRef - panelRect.left) / (panelRect.right - panelRect.left) * ball2.offsetWidth,
        y: Math.floor(yRef - panelRect.top) / (panelRect.bottom - panelRect.top) * ball2.offsetHeight
    };
};

document.body.addEventListener("mousemove", function(e) {
    let mousePos = getMousePos2(e.clientX, e.clientY),
        distX = mousePos.x - ball2CenterX,
        distY = mousePos.y - ball2CenterY;
    if (Math.abs(distX) < 1920 && distY < 1080) {
        ball2.style.transform = "translate(" + -1 * distX / 128 + "px," + 1 * distY / 128 + "px)";
};
});
