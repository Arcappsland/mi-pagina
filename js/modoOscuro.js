const botonInterruptor = document.querySelector("header button");
const imgInterruptor = document.querySelector("header button img");
const menu = document.querySelectorAll("header nav a");
const audio = document.querySelector("main audio");

function cambiarImagen(src){
    window.location.pathname.includes("index") ? imgInterruptor.src = src : imgInterruptor.src = "../" + src

    if(imgInterruptor.src.includes("encendido"))
    {
        imgInterruptor.alt = "Un interruror para activar el modo oscuro";
        imgInterruptor.title = "Activar modo Oscuro";
    }

    else{
        imgInterruptor.alt = "Un interruror para activar el modo claro";
        imgInterruptor.title = "Activar modo claro";
    }

}

if(localStorage.getItem("darkMode") === "false")
{
    cambiarImagen("assets/encendido.svg");
    document.body.classList.remove("fondo-modo-oscuro");
    document.body.classList.remove("fuente-modo-oscuro");
    document.querySelector("header h1").classList.remove("fuente-modo-oscuro");
    
    menu.forEach(link => {
        link.classList.remove("fuente-modo-oscuro");
        link.classList.remove("hover-modo-oscuro");
    })
}

else{
    cambiarImagen("assets/apagado.svg");
    document.body.classList.add("fondo-modo-oscuro");
    document.body.classList.add("fuente-modo-oscuro");
    document.querySelector("header h1").classList.add("fuente-modo-oscuro");

    menu.forEach(link => {
        link.classList.add("fuente-modo-oscuro");
        link.classList.add("hover-modo-oscuro");
    })
}

botonInterruptor.addEventListener("click", () => {

    audio.currentTime = 0;
    audio.play();
    
    document.body.classList.toggle("fondo-modo-oscuro");
    document.body.classList.toggle("fuente-modo-oscuro");
    document.querySelector("header h1").classList.toggle("fuente-modo-oscuro");
    
    menu.forEach(link => {
        link.classList.toggle("fuente-modo-oscuro");
        link.classList.toggle("hover-modo-oscuro");
    })

    if(document.body.classList.contains("fondo-modo-oscuro"))
    {
        localStorage.setItem("darkMode", "true");
        cambiarImagen("assets/apagado.svg");
    }
    else
    {
        localStorage.setItem("darkMode", "false");
        cambiarImagen("assets/encendido.svg");
    }

});

botonInterruptor.addEventListener("contextmenu", (e) => {
    e.preventDefault();
})