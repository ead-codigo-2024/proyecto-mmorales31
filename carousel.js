let sliderInner = document.querySelector(".slider--inner");
let slides = sliderInner.querySelectorAll(".slide");
let index = 0;

document.getElementById("next").addEventListener("click", function() {
    index = (index + 1) % slides.length;
    sliderInner.style.transform = "translateX(" + (-index * 100) + "%)";
});

document.getElementById("prev").addEventListener("click", function() {
    index = (index - 1 + slides.length) % slides.length;
    sliderInner.style.transform = "translateX(" + (-index * 100) + "%)";
});

// Obtenemos la pantalla de bienvenida y el contenido principal
const welcomeScreen = document.getElementById("welcomeScreen");
const mainContent = document.getElementById("mainContent");

// Revisar si el usuario ya ha visto la bienvenida
if (!localStorage.getItem("visited")) {
    // Si es la primera vez, mostramos la pantalla de bienvenida y ocultamos el contenido principal
    mainContent.style.display = "none";
    
    // Al hacer clic en welcomeScreen, ocultamos la bienvenida y mostramos el contenido principal
    welcomeScreen.addEventListener("click", () => {
        welcomeScreen.style.display = "none";
        mainContent.style.display = "block";
        // Guardamos en localStorage que ya visitó el sitio
        localStorage.setItem("visited", "true");
    });
} else {
    // Si ya la visitó antes, ocultamos la bienvenida y mostramos el contenido
    welcomeScreen.style.display = "none";
    mainContent.style.display = "block";
}
