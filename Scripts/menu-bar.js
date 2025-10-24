function menuShow() {
    let menuMobile = document.querySelector('.menu-bar');
    let menuIcon = document.querySelector('.mobile-menu-icon i');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        // Alterar o ícone para lista quando o menu está fechado
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-list');
    } else {
        menuMobile.classList.add('open');
        // Alterar o ícone para X quando o menu está aberto
        menuIcon.classList.remove('fa-list');
        menuIcon.classList.add('fa-times');
    }
}

// Fechar o menu quando um link for clicado
document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu-bar a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            let menuMobile = document.querySelector('.menu-bar');
            let menuIcon = document.querySelector('.mobile-menu-icon i');
            
            if (menuMobile.classList.contains('open')) {
                menuMobile.classList.remove('open');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-list');
            }
        });
    });
});