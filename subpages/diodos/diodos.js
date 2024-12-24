document.querySelectorAll('.filter-checkbox').forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        const activeFilters = Array.from(
            document.querySelectorAll('.filter-checkbox:checked')
        ).map((cb) => cb.getAttribute('data-filter'));

        document.querySelectorAll('.product-card').forEach((card) => {
            const cardType = card.getAttribute('data-tipo');
            if (activeFilters.length === 0 || activeFilters.includes(cardType)) {
                card.style.display = ''; // Mostrar elemento
            } else {
                card.style.display = 'none'; // Ocultar elemento
            }
        });
    });
});
