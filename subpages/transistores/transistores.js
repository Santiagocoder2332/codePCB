// Función para alternar la visibilidad de las secciones de filtros
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('active');
}

// Función para filtrar los productos
function filterProducts() {
    const checkboxes = document.querySelectorAll('.filter-checkbox:checked');
    const filters = {}; // Objeto para almacenar los filtros seleccionados

    // Recopila los filtros seleccionados
    checkboxes.forEach((checkbox) => {
        const filterType = checkbox.dataset.filter.toUpperCase(); // Tipo de filtro (TYPE, CANAL, etc.)
        const value = checkbox.value.toUpperCase();

        if (!filters[filterType]) {
            filters[filterType] = [];
        }
        filters[filterType].push(value); // Agrega el valor seleccionado al filtro correspondiente
    });

    const products = document.querySelectorAll('.product-card'); // Selecciona todas las tarjetas de productos

    products.forEach((product) => {
        let visible = true; // Asume que el producto es visible

        // Verifica si el producto cumple con los filtros seleccionados
        for (const filterType in filters) {
            const productValue = product.dataset[filterType.toLowerCase()]?.toUpperCase();
            if (filters[filterType].length && !filters[filterType].includes(productValue)) {
                visible = false; // Oculta el producto si no cumple con el filtro
                break;
            }
        }

        // Muestra u oculta el producto según el resultado del filtrado
        product.style.display = visible ? '' : 'none';
    });
}

// Evento para actualizar los filtros cuando se seleccionan checkboxes
const checkboxes = document.querySelectorAll('.filter-checkbox');
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', filterProducts);
});
function openPopup(modalId, event) {
    event.preventDefault(); // Evita recargar la página
    const modal = document.getElementById(modalId); // Busca el modal por su ID
    if (modal) {
        modal.style.display = 'block'; // Muestra el modal
    } else {
        console.error(`Modal con ID '${modalId}' no encontrado.`);
    }
}

function closePopup(modalId) {
    const modal = document.getElementById(modalId); // Busca el modal por su ID
    if (modal) {
        modal.style.display = 'none'; // Oculta el modal
    } else {
        console.error(`Modal con ID '${modalId}' no encontrado.`);
    }
}

// Hacer que las funciones sean insensibles a mayúsculas y minúsculas
function callPopupFunction(funcName, modalId, event) {
    const func = window[funcName.toLowerCase()];  // Convertir el nombre de la función a minúsculas y buscarla en el objeto global (window)
    if (typeof func === 'function') {
        func(modalId, event);  // Llamar a la función con el nombre correcto
    } else {
        console.error(`La función '${funcName}' no está definida.`);
    }
}

// Uso del nuevo enfoque:
document.querySelectorAll('.open-popup-btn').forEach(button => {
    button.addEventListener('click', function (event) {
        callPopupFunction('openPopup', 'modalId', event);  // Usar 'openPopup' o 'openpopup' indistintamente
    });
});

document.querySelectorAll('.close-popup-btn').forEach(button => {
    button.addEventListener('click', function (event) {
        callPopupFunction('closePopup', 'modalId', event);  // Usar 'closePopup' o 'closepopup' indistintamente
    });
});

// Cerrar el modal al hacer clic fuera de él
window.onclick = function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};

