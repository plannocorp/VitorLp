const habilidadesObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-habilidades');

            entry.target.classList.remove('hidden-habilidades');
        }

        else {
            entry.target.classList.add('hidden-habilidades');

            entry.target.classList.remove('show-habilidades');
        }
    });
});

const habilidadesElements = document.querySelectorAll('.hidden-habilidades');

habilidadesElements.forEach((el) => habilidadesObserver.observe(el));