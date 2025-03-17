// Hide loader with a delay after the page is fully loaded
window.addEventListener("load", function () {
  const loaderContainer = document.querySelector(".loader-container");
  if (loaderContainer) {
    // Delay hiding the loader by 2 seconds (2000 milliseconds)
    setTimeout(function () {
      loaderContainer.classList.add("hide"); // Add the fade-out class
      
      // Remove the loader from the DOM after the fade-out animation completes
      setTimeout(function () {
        loaderContainer.style.display = "none";
      }, 500); // Wait for the fade-out animation to finish (0.5s)
    }, 2000); // Delay before hiding the loader (2 seconds)
  }
});

// Toggle menu for mobile
function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}

// Display the current year in the footer
const yearElement = document.getElementById("current-year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Basic contact form handling
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Simple email pattern check
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Simulate form submission (replace with actual submission logic)
    alert("Thank you for contacting us! We will get back to you soon.");
    contactForm.reset();
  });
}