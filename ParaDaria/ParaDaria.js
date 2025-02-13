let nob = document.getElementById("No");
let sib = document.getElementById("Si");

let isMobile = 'ontouchstart' in document.documentElement;

// Función para mover el botón "No" por toda la pantalla
function moverBoton() {
    let minX = 10;
    let minY = 10; 
    let maxX = window.innerWidth - nob.offsetWidth - 10;
    let maxY = window.innerHeight - nob.offsetHeight - 10;

    let randomX = Math.floor(Math.random() * (maxX - minX) + minX);
    let randomY = Math.floor(Math.random() * (maxY - minY) + minY);

    // Teletransporte del botón
    nob.style.position = "absolute";
    nob.style.left = `${randomX}px`;
    nob.style.top = `${randomY}px`;
}

// Responsive
if (isMobile) {
    nob.addEventListener("touchend", function (e) {
        e.preventDefault();
        moverBoton();
    }, { passive: false });
} else {
    nob.addEventListener("mouseenter", moverBoton);
}

sib.addEventListener("click", function () {
    document.getElementById("p").removeAttribute("hidden");
    document.getElementById("1").style.color = "transparent";
    sib.style.display = "none";
    nob.style.display = "none";
});