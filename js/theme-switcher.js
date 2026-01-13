
document.addEventListener("DOMContentLoaded", () => {

  /*   DARK MODE TOGGLE */

  const toggleBtn = document.getElementById("darkModeBtn");
  const savedTheme = localStorage.getItem("theme");

  // Apply saved theme on page load
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (toggleBtn) {
      toggleBtn.textContent = "☀️ Light Mode";
    }
  } else {
    if (toggleBtn) {
      toggleBtn.textContent = "🌙 Dark Mode";
    }
  }

  // Toggle theme on click
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark-mode");

      toggleBtn.textContent = isDark
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";

      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }


  /*CONTACT FORM VALIDATION */

  const form = document.getElementById("contactForm");
  const errorMsg = document.getElementById("formError");
  const successMsg = document.getElementById("formSuccess");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Clear messages
      errorMsg.textContent = "";
      successMsg.textContent = "";

      // Validation
      if (!name || !email || !message) {
        errorMsg.textContent = "All fields are required.";
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errorMsg.textContent = "Please enter a valid email address.";
        return;
      }

      if (message.length < 10) {
        errorMsg.textContent = "Message must be at least 10 characters.";
        return;
      }

      // Success
      successMsg.textContent = "Message sent successfully!";
      form.reset();

      // Auto-hide success message
      setTimeout(() => {
        successMsg.textContent = "";
      }, 3000);
    });
  }

});

