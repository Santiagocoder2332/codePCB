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

function openPopup(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "block";
    }
}

function closePopup(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "none";
    }
}

// Cerrar la ventana emergente si se hace clic fuera
window.onclick = function(event) {
    const modal = document.getElementById("modal-popup");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
function openPopup(popupId) {
    event.preventDefault(); // Evita que el enlace recargue la página
    const modal = document.getElementById(popupId);
    if (modal) {
        modal.style.display = "block";
    }
}
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal'); // Selecciona todas las ventanas emergentes
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};
// Abre la ventana emergente
function openPopup(id, event) {
    if (event) event.preventDefault(); // Previene el comportamiento por defecto
    const popup = document.getElementById(id);
    if (popup) {
        popup.style.display = 'block';
    }
}

// Cierra la ventana emergente
function closePopup(id) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.style.display = 'none';
    }
}

// Cierra la ventana si se hace clic fuera del contenido
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};
