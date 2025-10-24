document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todas as seções que devem ter animação
    const sections = document.querySelectorAll('.section-1, .section-2, .section-3, .section-4, .section-5');
    
    // Adiciona a classe fade-in-section a todas as seções
    sections.forEach(section => {
        section.classList.add('fade-in-section');
    });
    
    // Adiciona a classe animated aos títulos principais
    const mainTitles = document.querySelectorAll('.main-title');
    mainTitles.forEach(title => {
        title.classList.add('animated');
    });
    
    // Adiciona a classe stagger-item aos cards de habilidades
    const skillCards = document.querySelectorAll('.section-3 .card');
    skillCards.forEach(card => {
        card.classList.add('stagger-item');
    });
    
    // Função para verificar se um elemento está visível no viewport
    function checkIfInView() {
        const windowHeight = window.innerHeight;
        const windowTopPosition = window.scrollY;
        const windowBottomPosition = windowTopPosition + windowHeight;
        
        sections.forEach(section => {
            const elementHeight = section.offsetHeight;
            const elementTopPosition = section.offsetTop;
            const elementBottomPosition = elementTopPosition + elementHeight;
            
            // Verifica se a seção está visível na tela
            // Adicionamos um pequeno offset para que a animação comece um pouco antes da seção entrar completamente na tela
            if (
                (elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition - 150)
            ) {
                section.classList.add('is-visible');
            }
        });
    }
    
    // Verifica a visibilidade inicial dos elementos
    checkIfInView();
    
    // Adiciona o evento de scroll para verificar a visibilidade durante a rolagem
    window.addEventListener('scroll', checkIfInView);
    
    // Também verifica ao redimensionar a janela
    window.addEventListener('resize', checkIfInView);
});