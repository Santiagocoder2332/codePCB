// Función para mostrar la ventana modal
function openPopup(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "flex";
}

// Función para cerrar la ventana modal
function closePopup(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Cerrar la ventana si se hace clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById("modal-0.1uF50V");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};


// Alterna la visibilidad de las secciones de filtro
function toggleSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.style.display = section.style.display === "none" ? "block" : "none";
    } else {
        console.error(`No se encontró la sección con ID: ${id}`);
    }
}

// Filtra los productos según los checkboxes seleccionados
function filterProducts() {
    const productCards = document.querySelectorAll('.product-card');
    const selectedCapacities = [...document.querySelectorAll('input[data-filter="capa"]:checked')].map(cb => cb.value);
    const selectedVoltages = [...document.querySelectorAll('input[data-filter="volt"]:checked')].map(cb => cb.value);
    const selectedMaterials = [...document.querySelectorAll('input[data-filter="material"]:checked')].map(cb => cb.value);

    productCards.forEach(card => {
        const capa = card.getAttribute('data-capa');
        const volt = card.getAttribute('data-volt');
        const material = card.getAttribute('data-material');

        const matchesCapa = selectedCapacities.length === 0 || selectedCapacities.includes(capa);
        const matchesVolt = selectedVoltages.length === 0 || selectedVoltages.includes(volt);
        const matchesMaterial = selectedMaterials.length === 0 || selectedMaterials.includes(material);

        card.style.display = matchesCapa && matchesVolt && matchesMaterial ? 'block' : 'none';
    });
}

// Configura los eventos después de que el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.filter-checkbox');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts); // Llama a la función de filtro al cambiar un checkbox
    });

    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header-top');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
