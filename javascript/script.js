//gallery
//------//
/// nav bar
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");

  const navbarCollapse = document.getElementById("navbarNav");

  navbarToggler.addEventListener("click", function () {
    navbarCollapse.classList.toggle("show");
  });
});
// Shows/hides text on hover
document.addEventListener("DOMContentLoaded", function () {
  // Newsletter form
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(` Thanks! We'll send travel updates to ${email}`);
    this.reset();
  });
});

//  END
