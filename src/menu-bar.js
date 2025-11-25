function menuShow() {
    let menuBar = document.querySelector('.menu-bar');
    let menuBtn = document.querySelector('.menu-icon');

    if (menuBar.classList.contains('open')) {
        menuBar.classList.remove('open');
        menuBtn.classList.remove('fa-times');

        menuBtn.classList.add('fa-bars');
    }

    else {
        menuBar.classList.add('open');
        menuBtn.classList.remove('fa-bars');

        menuBtn.classList.add('fa-times');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu-bar li a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            let menuMobile = document.querySelector('.menu-bar');
            let menuIcon = document.querySelector('.menu-icon');
            
            if (menuMobile.classList.contains('open')) {
                menuMobile.classList.remove('open');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });
    });
});