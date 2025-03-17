// script.js

function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}

// Display the current year in any element with ID="current-year"
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