// Seleccionamos todas las tarjetas con la clase "service-card"
const serviceCards = document.querySelectorAll('.service-card');

// Creamos un observer usando IntersectionObserver
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Añadimos la clase visible
        }
    });
}, {
    threshold: 0.3 // Dispara la animación cuando el 30% de la tarjeta es visible
});

// Aplicamos el observer a cada tarjeta
serviceCards.forEach(card => {
    observer.observe(card);
});

// Función para abrir el popup
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = "flex"; // Mostrar el popup
}

// Función para cerrar el popup
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.animation = "fadeOut 0.5s ease"; // Animación de salida
    setTimeout(() => {
        popup.style.display = "none";
        popup.style.animation = ""; // Restablecer animación
    }, 500); // Esconder después de la animación
}

// Event Listeners para abrir popups (opcional si tienes botones específicos)
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("openComoPagar").addEventListener("click", () => openPopup("comoPagar"));
    document.getElementById("openQuienesSomos").addEventListener("click", () => openPopup("quienesSomos"));
});
