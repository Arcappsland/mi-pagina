const arcappsland = document.querySelectorAll("header h1 span");
const img = document.querySelector("main div img");

setInterval(() => {
    img.style.filter = `drop-shadow(0 0 50px #${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')})`;
}, 1000);


arcappsland.forEach(span => {
    span.addEventListener("mouseenter", () => {
        span.classList.add("animacion");
    });

    span.addEventListener("animationend", () => {
        span.classList.remove("animacion");
    });
});