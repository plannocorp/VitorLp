/*IntersectionObserver*/ 

const homeObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if (entry.isIntersecting && entry.target.classList.contains('hidden-home')) {
            entry.target.classList.add('show-home');

            entry.target.classList.remove('hidden-home');
        }

        else {
            entry.target.classList.remove('show-home');

            entry.target.classList.add('hidden-home');
        }
    })
});

const homeElements = document.querySelectorAll('.hidden-home');

homeElements.forEach( (element) => homeObserver.observe(element));