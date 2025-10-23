// Script para ajustar a rolagem quando clicar nos links de navegação
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-bar a, .footer-links a, .scroll-down-btn');
    let lastScrollTop = 0;
    
    // Função para controlar a visibilidade do header
    function handleHeaderVisibility() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Se estiver no topo da página (com uma pequena margem), mostrar o header
        if (scrollTop <= 100) {
            header.classList.remove('hidden');
        } 
        // Se estiver rolando para baixo, esconder o header
        else if (scrollTop > lastScrollTop) {
            header.classList.add('hidden');
        } 
        // Se estiver rolando para cima, mostrar o header
        else {
            header.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop;
    }
    
    // Adicionar evento de scroll para controlar a visibilidade do header
    window.addEventListener('scroll', handleHeaderVisibility);
    
    // Configurar a navegação por âncoras
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    e.preventDefault();
                    
                    // Mostrar o header ao clicar em um link de navegação
                    header.classList.remove('hidden');
                    
                    // Calcular a posição de rolagem
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Inicializar o estado do header
    handleHeaderVisibility();
});