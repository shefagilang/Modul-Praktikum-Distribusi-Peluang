const observer = new IntersectionObserver((entries) => {
  entries.forEach(({ target, isIntersecting }) => {
    if (isIntersecting) {
      target.classList.add('visible');
      observer.unobserve(target);
    }
  });
}, { threshold: 0.1 });

// Otomatis observe semua elemen dengan class .lazy
document.querySelectorAll('.lazy')
  .forEach((el, i) => {
    // Stagger dinamis berdasarkan index
    el.style.transitionDelay = `${i * 0.08}s`;
    observer.observe(el);
  });
