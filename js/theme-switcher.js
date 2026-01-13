document.addEventListener("DOMContentLoaded", () => {
  /*  THEME TOGGLE */

  const toggleBtn = document.getElementById("darkModeBtn");

  if (toggleBtn) {
    // Load saved theme on page load
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "true") {
      document.body.classList.add("dark-mode");
      toggleBtn.textContent = "☀️ Light Mode";
    } else {
      toggleBtn.textContent = "🌙 Dark Mode";
    }

    // Toggle theme on button click
    toggleBtn.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark-mode");

      toggleBtn.textContent = isDark
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";

      localStorage.setItem("theme", isDark);
    });
  } else {
    console.error("darkModeBtn not found in DOM");
  }

  /* FORM VALIDATION */

  const form = document.getElementById("contactForm");
  const error = document.getElementById("formError");
  const success = document.getElementById("formSuccess");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      error.textContent = "";
      success.textContent = "";

      if (name === "" || email === "" || message === "") {
        error.textContent = "All fields are required.";
        return;
      }

      if (!email.includes("@") || !email.includes(".")) {
        error.textContent = "Please enter a valid email address.";
        return;
      }

      if (message.length < 10) {
        error.textContent = "Message must be at least 10 characters.";
        return;
      }

      success.textContent = "Message sent successfully!";
      form.reset();
    });
  } else {
    console.error("contactForm not found in DOM");
  }
});
