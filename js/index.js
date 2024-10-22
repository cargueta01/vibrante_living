// Crear el contenido del footer
const footer = document.getElementById('contact-section');

const socialLinks = [
    {
        name: 'vibranteliving0@gmail.com',
        url: 'mailto:vibranteliving0@gmail.com',
        svg: '../img/icons/E-mail.svg' // Ruta al SVG de Instagram
    },
    {
        name: '@vibrante_living',
        url: 'https://www.instagram.com/vibrante_living/',
        svg: '../img/icons/Instagram.svg' // Ruta al SVG de Instagram
    },
    {
        name: 'Vibrante Living',
        url: 'https://www.facebook.com/profile.php?id=61567002672598&mibextid=ZbWKwL',
        svg: '../img/icons/Facebook.svg' // Ruta al SVG de Facebook
    },
    {
        name: '@VibranteLiving1',
        url: 'https://x.com/VibranteLiving1',
        svg: '../img/icons/Twitter.svg' 
    }
];

socialLinks.forEach(link => {
    const col = document.createElement('div');
    col.classList.add('text-center', 'mx-2'); // Centrar y margen horizontal

    const anchor = document.createElement('a');
    anchor.href = link.url;
    anchor.target = '_blank'; // Abre el enlace en una nueva pestaña
    anchor.classList.add('text-light', 'text-decoration-none');

    // Crear un elemento img para el SVG
    const img = document.createElement('img');
    img.src = link.svg; // Establecer la ruta del SVG
    img.alt = link.name; // Texto alternativo
    img.classList.add('mb-2', 'svg-icon'); // Clase para margen inferior
    img.style.width = '60px'; // Ajustar el ancho del SVG
    img.style.height = '60px'; // Ajustar la altura del SVG

    const name = document.createElement('div');
    name.classList.add('mt-2'); // Margen superior
    name.textContent = link.name;

    anchor.appendChild(img); // Agregar el SVG al enlace
    col.appendChild(anchor);
    col.appendChild(name);
    footer.appendChild(col);
});
