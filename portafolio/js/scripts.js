/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Abrir los certificados en nueva pestaña de forma segura
document.querySelectorAll('.btn-cert').forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault(); // evita comportamiento por defecto del <a>
        e.stopPropagation(); // evita que el click suba a la tarjeta
        const url = button.href; // usa directamente el href del botón
        window.open(url, '_blank', 'noopener,noreferrer');
    });
});

// Animación al hacer scroll usando IntersectionObserver
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

// Configurar variables de animación y observar cada tarjeta
document.querySelectorAll('.cert-card').forEach((card, i) => {
    card.style.setProperty('--i', i);
    observer.observe(card);
});
