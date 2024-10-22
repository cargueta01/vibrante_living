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
