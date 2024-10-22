document.addEventListener('DOMContentLoaded', function () {
    // Seleccionamos la etiqueta <main>
    const main = document.querySelector('main');

    // Verificamos si <main> existe para evitar errores
    if (main) {
        // Creamos el contenedor donde irá el código HTML
        const contactoSection = document.createElement('section');
        contactoSection.id = 'contacto';
        contactoSection.className = 'bg-light py-5';

        // Insertamos el HTML del formulario
        contactoSection.innerHTML = `
            <div class="container text-center p-4">
                <h2>Suscríbete a nuestras novedades</h2>
                <p>Recibe recetas y promociones exclusivas directamente en tu correo.</p>
                <form class="row g-3 justify-content-center">
                    <div class="col-auto">
                        <input type="email" class="form-control" id="email" placeholder="Tu email">
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-3">Suscribirme</button>
                    </div>
                </form>
            </div>
        `;

        // Insertamos la sección al final del elemento <main>
        main.appendChild(contactoSection);
    } else {
        console.error("No se encontró la etiqueta <main>.");
    }
});
