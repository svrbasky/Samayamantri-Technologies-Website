// Mobile nav
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });
  document.querySelectorAll('#navLinks a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
  });

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Nav scroll effect
  window.addEventListener('scroll', () => {
    document.querySelector('nav').style.background =
      window.scrollY > 60 ? 'rgba(3,12,26,0.97)' : 'rgba(3,12,26,0.85)';
  });

  // Form handler
  function handleSubmit(e) {
    e.preventDefault();
    document.getElementById('form-success').style.display = 'block';
    e.target.reset();
  }
