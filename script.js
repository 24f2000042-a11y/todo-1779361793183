document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');
  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });

  // Close menu on link click (mobile)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  // Scroll animations for testimonials
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.testimonial').forEach(el => observer.observe(el));

  // Simple form validation
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (name && email && message) {
      alert('Thank you, ' + name + '! Your message has been sent.');
      form.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
});