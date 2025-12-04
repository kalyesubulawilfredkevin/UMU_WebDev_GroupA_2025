
/// nav bar
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");

  const navbarCollapse = document.getElementById("navbarNav");

  navbarToggler.addEventListener("click", function () {
    navbarCollapse.classList.toggle("show");
  });
});
// Scroll Animation
const elements = document.querySelectorAll(".scroll-anim");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach(el => observer.observe(el));