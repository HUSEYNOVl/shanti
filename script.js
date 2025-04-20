document.addEventListener('DOMContentLoaded', function () {
    // Reveal elements on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('.product-card, .feature, .cta').forEach((el) => {
      observer.observe(el);
    });
  
    // Header transparency on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', function () {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
        header.classList.remove('transparent');
      } else {
        header.classList.add('transparent');
        header.classList.remove('scrolled');
      }
    });
  });
  