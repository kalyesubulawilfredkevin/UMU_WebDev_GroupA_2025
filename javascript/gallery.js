// nav bar
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");

  const navbarCollapse = document.getElementById("navbarNav");

  navbarToggler.addEventListener("click", function () {
    navbarCollapse.classList.toggle("show");
  });
});

//  image and video clicks for a larger view
document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {
    const imageContainer = item.querySelector(".image-container");

    imageContainer.addEventListener("click", () => {
      const mediaElement = imageContainer.querySelector("img, video");
      const overlay = createOverlay(mediaElement.cloneNode(true));

      // Append overlay to the body
      document.body.appendChild(overlay);
    });
  });

  // create an overlay with a larger view
  function createOverlay(mediaElement) {
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "1000";

    // Adjust media element's size
    mediaElement.style.maxWidth = "90%";
    mediaElement.style.maxHeight = "90%";

    // Close overlay when clicked
    overlay.addEventListener("click", () => {
      document.body.removeChild(overlay);
    });

    overlay.appendChild(mediaElement);
    return overlay;
  }
  // Newsletter form
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(` Thanks! We'll send travel updates to ${email}`);
    this.reset();
  });
});

//  END
