const sobremimObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('hidden-sobremim');

      entry.target.classList.add('show-sobremim');
    }

    else {
      entry.target.classList.remove('show-sobremim');

      entry.target.classList.add('hidden-sobremim');
    }
  });
});

const sobremimElements = document.querySelectorAll('.hidden-sobremim');

sobremimElements.forEach((el) => sobremimObserver.observe(el));