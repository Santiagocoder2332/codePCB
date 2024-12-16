function openPopup(id) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.style.display = 'flex'; // Muestra la ventana emergente
    } else {
        console.error(`No se encontró el elemento con ID: ${id}`);
    }
}

function closePopup(id) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.style.display = 'none'; // Oculta la ventana emergente
    } else {
        console.error(`No se encontró el elemento con ID: ${id}`);
    }
}

function toggleSection(id) {
    const section = document.getElementById(id);
    section.style.display = section.style.display === "none" ? "block" : "none";
}

// Seleccionar todos los checkboxes de filtro
const filterCheckboxes = document.querySelectorAll(".filter-checkbox");
const productCards = document.querySelectorAll(".product-card");

// Evento para manejar cambios en los checkboxes
filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        applyFilters();
    });
});

// Función para aplicar los filtros
function applyFilters() {
    const activeFilters = {}; // Guardar los filtros activos
    
    // Agrupar filtros seleccionados
    filterCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const filterType = checkbox.dataset.filter; // Tipo de filtro (ej: power, resistencia)
            const filterValue = checkbox.value;

            if (!activeFilters[filterType]) {
                activeFilters[filterType] = [];
            }
            activeFilters[filterType].push(filterValue);
        }
    });

    // Mostrar/ocultar tarjetas según filtros
    productCards.forEach(card => {
        let isVisible = true;

        for (const [filterType, values] of Object.entries(activeFilters)) {
            const cardValue = card.dataset[filterType];
            if (!values.includes(cardValue)) {
                isVisible = false;
                break;
            }
        }

        // Mostrar u ocultar la tarjeta
        card.classList.toggle("hidden", !isVisible);
    });
}
