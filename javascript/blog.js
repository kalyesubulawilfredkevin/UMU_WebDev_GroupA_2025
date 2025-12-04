//navbar
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");

  const navbarCollapse = document.getElementById("navbarNav");

  navbarToggler.addEventListener("click", function () {
    navbarCollapse.classList.toggle("show");
  });
});

//newsletter
document.addEventListener("DOMContentLoaded", function () {
  // Newsletter form
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(` Thanks! We'll send blog updates to ${email}`);
    this.reset();
  });
});

// slides
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
// changing interval 3 secs
setInterval(() => {
  plusSlides(1);
}, 3000);
