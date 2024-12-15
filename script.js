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

let lastScrollTop = 0;
const headerBottom = document.querySelector('.header-bottom');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Al desplazarse hacia abajo, ocultar la parte inferior
        headerBottom.style.display = 'none';
    } else {
        // Al desplazarse hacia arriba, mostrar la parte inferior
        headerBottom.style.display = 'flex';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para evitar valores negativos
});

let currentIndex = 0;

function moveSlide(direction) {
    const slide = document.querySelector('.carousel-slide');
    const totalImages = document.querySelectorAll('.carousel-image').length;

    currentIndex += direction;

    if (currentIndex >= totalImages) {
        currentIndex = 0; // Reinicia al inicio
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1; // Va al final
    }

    slide.style.transform = `translateX(${-currentIndex * 100}%)`;
}
const slides = document.querySelectorAll('.carousel-item');
let currentSlide = 0;

function showSlide(index) {
    const slideContainer = document.querySelector('.carousel-slide');
    const currentTexts = slides[index].querySelectorAll('.carousel-text span');
    const textContainer = slides[index].querySelector('.carousel-text');

    // Mover el carrusel a la imagen actual
    slideContainer.style.transform = `translateX(${-index * 100}%)`;

    // Ocultar todos los textos y el fondo
    document.querySelectorAll('.carousel-text').forEach(container => {
        container.style.opacity = '0'; // Ocultar fondo
    });
    currentTexts.forEach(text => {
        text.style.opacity = '0';
        text.style.transform = 'translateY(50px)';
    });

    // Mostrar fondo del texto justo antes de la primera palabra
    setTimeout(() => {
        textContainer.style.opacity = '1'; // Mostrar fondo
    },  1000); // Delay de 0.3 segundos antes del fondo

    // Mostrar palabras una por una
    currentTexts.forEach((text, i) => {
        setTimeout(() => {
            text.style.opacity = '1';
            text.style.transform = 'translateY(0)';
        }, 600 * i); // Intervalo entre palabras
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Ciclo infinito
    showSlide(currentSlide);
}

// Mostrar la primera diapositiva al inicio
showSlide(currentSlide);

// Cambiar de diapositiva cada 6 segundos (imagen + texto)
setInterval(nextSlide, 6000);

