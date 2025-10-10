document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        const hero = document.querySelector('.hero-bg');
        hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });

    // Dynamic date in footer
    const footer = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footer.textContent = `© ${currentYear} Katsave Sustain Planet International. All rights reserved.`;

    // Animate on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.bg-white');
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial call
});