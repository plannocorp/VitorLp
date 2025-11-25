document.addEventListener('DOMContentLoaded', function() {
    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const animatedElements = entry.target.querySelectorAll('.footer-animate');
                animatedElements.forEach(element => {
                    element.style.opacity = "1";
                    element.style.transform = "translateY(0)";
                });
            }
        });
    }, {
        threshold: 0.2
    });

    const footer = document.querySelector('footer');
    if (footer) {
        footerObserver.observe(footer);
    }
});