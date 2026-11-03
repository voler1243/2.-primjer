let lopta = document.getElementById("lopta");

let x = 0;
let smjer = 2;
let radi = true;

function pomakni() {
    if (radi) {
        x = x + smjer;

    if (x >= window.innerWidth - 40 || x <= 0) {
        smjer = -smjer;
    }

        lopta.style.left = x + "px";
    }
}

    setInterval(pomakni, 20);

function promijeniStanje() {
        radi = !radi;
}