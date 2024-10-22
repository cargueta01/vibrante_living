// Crear el contenido del footer
const footer = document.getElementById('contact-section');

const socialLinks = [
    {
        name: 'vibranteliving0@gmail.com',
        url: 'mailto:vibranteliving0@gmail.com',
        svg: '../img/icons/E-mail.svg' 
    },
    {
        name: '@vibrante_living',
        url: 'https://www.instagram.com/vibrante_living/',
        svg: '../img/icons/Instagram.svg' 
    },
    {
        name: 'Vibrante Living',
        url: 'https://www.facebook.com/profile.php?id=61567002672598&mibextid=ZbWKwL',
        svg: '../img/icons/Facebook.svg' 
    },
    {
        name: '@VibranteLiving1',
        url: 'https://x.com/VibranteLiving1',
        svg: '../img/icons/Twitter.svg' 
    }
];

socialLinks.forEach(link => {
    const col = document.createElement('div');
    col.classList.add('text-center', 'mx-2'); 

    const anchor = document.createElement('a');
    anchor.href = link.url;
    anchor.target = '_blank'; 
    anchor.classList.add('text-light', 'text-decoration-none');

    const img = document.createElement('img');
    img.src = link.svg; 
    img.alt = link.name; 
    img.classList.add('mb-2', 'svg-icon'); 
    img.style.width = '60px'; 
    img.style.height = '60px'; 

    const name = document.createElement('div');
    name.classList.add('mt-2'); 
    name.textContent = link.name;

    anchor.appendChild(img); 
    col.appendChild(anchor);
    col.appendChild(name);
    footer.appendChild(col);
});

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
})