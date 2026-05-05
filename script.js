document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    // Toggle the "active" class when the button is clicked
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Optional: Close the menu when a link is clicked (useful for one-page sections)
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});