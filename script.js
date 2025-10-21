/* COMENTARIO INGENIOSO: El DOM es un árbol, y ella es el fruto más dulce.
   Usando vanilla JS para mantener la dependencia mínima.
*/

document.addEventListener('DOMContentLoaded', () => {

    // --- FUNCIÓN 1: ANIMACIÓN DEL TIMELINE (Intersection Observer) ---
    const timelineEvents = document.querySelectorAll('.timeline-event');
    
    // Opciones del observador (el evento aparece cuando el 50% es visible)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 
    };

    // Función que se ejecuta cuando un elemento cruza el umbral de visibilidad
    const timelineObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si es visible, añade la clase para la animación CSS
                entry.target.classList.add('event-visible');
                // Deja de observar, ya no es necesario
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar cada evento del timeline
    timelineEvents.forEach(event => {
        timelineObserver.observe(event);
    });


    // --- FUNCIÓN 2: CARRUSEL DE FOTOS ---
    const carruselItems = document.querySelectorAll('.carrusel-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    // Función para mostrar la imagen actual
    function updateCarrusel() {
        // Ocultar todos los ítems
        carruselItems.forEach(item => item.classList.remove('active'));
        
        // Mostrar el ítem actual
        carruselItems[currentIndex].classList.add('active');
    }

    // Navegar a la siguiente imagen
    nextBtn.addEventListener('click', () => {
        // COMENTARIO INGENIOSO: El módulo % garantiza que el loop no termine (¡como nuestro amor!)
        currentIndex = (currentIndex + 1) % carruselItems.length;
        updateCarrusel();
    });

    // Navegar a la imagen anterior
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carruselItems.length) % carruselItems.length;
        updateCarrusel();
    });

    // Inicializar el carrusel
    updateCarrusel();
});