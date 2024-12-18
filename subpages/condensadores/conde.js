// Abre una ventana emergente
function openPopup(id, event) {
    if (event) event.preventDefault(); // Previene el comportamiento por defecto
    const popup = document.getElementById(id);
    if (popup) {
        popup.style.display = 'flex'; // Muestra la ventana emergente
    } else {
        console.error(`No se encontró el elemento con ID: ${id}`);
    }
}

// Cierra una ventana emergente
function closePopup(id) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.style.display = 'none'; // Oculta la ventana emergente
    } else {
        console.error(`No se encontró el elemento con ID: ${id}`);
    }
}

// Cierra una ventana emergente si se hace clic fuera
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal'); // Selecciona todas las ventanas emergentes
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
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
