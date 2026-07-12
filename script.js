const orbit = document.getElementById("orbit");

let angle = 0;

// Orbit ka radius
const radius = 220;

// Speed (0.01 slow, 0.03 medium, 0.05 fast)
const speed = 0.02;

function animate(){

    angle += speed;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    orbit.style.left = x + "px";
    orbit.style.top = y + "px";

    requestAnimationFrame(animate);

}

animate();