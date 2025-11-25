const curriculobgObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log("Background intersection:", entry.isIntersecting); // Log para debug
        
        if (entry.isIntersecting) {
            entry.target.classList.add('show-curriculo-bg');
            entry.target.classList.remove('hidden-curriculo-bg');
        } else {
            entry.target.classList.remove('show-curriculo-bg');
            entry.target.classList.add('hidden-curriculo-bg');
        }
    });
}, {
    threshold: 0.1, // Reduzir o threshold para detectar mais cedo
    rootMargin: "0px 0px -100px 0px" // Ativar um pouco antes de entrar completamente na viewport
});

const curriculobgElements = document.querySelectorAll('.hidden-curriculo-bg');
console.log("Background elements found:", curriculobgElements.length); // Verificar se os elementos foram encontrados

curriculobgElements.forEach((el) => curriculobgObserver.observe(el));