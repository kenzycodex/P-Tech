// JavaScript for menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('nav ul');
    const description = document.querySelector('.description');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        menuIcon.classList.toggle('close');
        description.classList.toggle('show');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
            menuIcon.classList.remove('close');
            description.classList.remove('show');
        });
    });
});
