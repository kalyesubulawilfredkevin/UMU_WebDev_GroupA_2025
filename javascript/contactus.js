// nav bar
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");

  const navbarCollapse = document.getElementById("navbarNav");

  navbarToggler.addEventListener("click", function () {
    navbarCollapse.classList.toggle("show");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Contact form submission
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;

    if (name && email) {
      alert(` Thank you ${name}! We'll contact you at ${email} soon.`);
      this.reset();
    } else {
      alert(" Please fill in all required fields (name and email).");
    }
  });
});
