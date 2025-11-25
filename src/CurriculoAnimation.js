const curriculoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-curriculo');

            entry.target.classList.remove('hidden-curriculo');
        }

        else {
            entry.target.classList.add('hidden-curriculo');

            entry.target.classList.remove('show-curriculo');
        }
    });
});

const curriculoElements = document.querySelectorAll('.hidden-curriculo');

curriculoElements.forEach((el) => curriculoObserver.observe(el));