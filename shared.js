document.addEventListener("DOMContentLoaded", function()
{
  const imgs = document.querySelectorAll('.animated-img');
  const observer = new IntersectionObserver((entries) => 
  {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }
  , { threshold: 0.1 });
  imgs.forEach(img => observer.observe(img));
});