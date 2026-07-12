const insta = document.getElementById("insta");

let x = 100;
let y = 100;

let dx = 3;
let dy = 3;

function animate() {

    x += dx;
    y += dy;

    if (x + insta.offsetWidth >= window.innerWidth || x <= 0) {
        dx = -dx;
    }

    if (y + insta.offsetHeight >= window.innerHeight || y <= 0) {
        dy = -dy;
    }

    insta.style.left = x + "px";
    insta.style.top = y + "px";

    requestAnimationFrame(animate);
}

animate();