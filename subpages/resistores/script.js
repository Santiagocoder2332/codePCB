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