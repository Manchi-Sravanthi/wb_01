// script.js

// Change navbar style on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#000';
    navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
  } else {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    navbar.style.boxShadow = 'none';
  }
});

// Smooth scroll to sections
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
