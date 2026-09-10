document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  if (window.scrollY > 100) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

const subtitle = document.querySelector('.hero-subtitle');
if (subtitle) {
  const text = subtitle.textContent;
  subtitle.textContent = '';
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      subtitle.textContent += text.charAt(i);
      i += 1;
      setTimeout(typeWriter, 100);
    }
  }
  window.addEventListener('load', () => setTimeout(typeWriter, 1000));
}

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-15px) rotateX(5deg)';
    this.style.boxShadow = '0 25px 50px rgba(0, 212, 255, 0.2)';
  });
  card.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0) rotateX(0deg)';
    this.style.boxShadow = 'none';
  });
});

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  document.querySelectorAll('.floating-icon').forEach((icon, index) => {
    const speed = 0.5 + (index * 0.1);
    icon.style.transform = 'translateY(' + (scrolled * speed) + 'px) rotate(' + (scrolled * 0.1) + 'deg)';
  });
});

document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(input => {
  input.addEventListener('focus', function () {
    this.style.transform = 'translateY(-2px)';
  });
  input.addEventListener('blur', function () {
    this.style.transform = 'translateY(0)';
  });
});
