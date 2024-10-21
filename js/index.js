 // Detectar la ruta actual
    const currentPage = window.location.pathname;

    // Referencias a los enlaces del menú de navegación
    const recetas = document.querySelector('a[href="/recetas/recetas.html"]');
    const Recursos = document.querySelector('a[href="/recursos/recursos.html"]');
    const about = document.querySelector('a[href="/sobre_nosotros/about.html"]');
    const snacks = document.querySelector('a[href="/"]');
    const extra = document.getElementById("snacks");

    // Cambiar el texto de los enlaces según la ruta actual
    if (currentPage.includes("index.html")) {
        recetas.textContent = "Recetas";
        Recursos.textContent = "Recursos";
        about.textContent = "Sobre nosotros";
        contact.textContent = "Contacto";
        extra.classList.add('d-none');
    }
 