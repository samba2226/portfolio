// PAGE LOAD CHECK
console.log("JavaScript Loaded Successfully");

// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const error = document.getElementById("formError");
    const success = document.getElementById("formSuccess");

    error.textContent = "";
    success.textContent = "";

    if (!email.includes("@")) {
        error.textContent = "Please enter a valid email address";
        error.style.color = "red";
        return;
    }

    if (message.length < 10) {
        error.textContent = "Message must be at least 10 characters";
        error.style.color = "red";
        return;
    }

    success.textContent = "Message sent successfully!";
    success.style.color = "green";

    document.getElementById("contactForm").reset();
}

// DARK MODE TOGGLE
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDark);
}

// Load user preference
window.onload = function () {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
};


// SHOW / HIDE CONTENT

function toggleSection(id) {
    const section = document.getElementById(id);
    section.style.display =
        section.style.display === "none" ? "block" : "none";
}
