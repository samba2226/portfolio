
// PAGE LOAD CHECK

console.log("JavaScript Loaded Successfully");


// FORM VALIDATION

const form = document.getElementById("contactForm");
const error = document.getElementById("formError");
const success = document.getElementById("formSuccess");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

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
    form.reset();
});


// DARK MODE TOGGLE

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark-mode")
    );
});

// Load saved preference
window.onload = function () {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
};


// SHOW / HIDE ABOUT SECTION

const aboutToggleBtn = document.getElementById("aboutToggleBtn");

aboutToggleBtn.addEventListener("click", function () {
    const aboutSection = document.getElementById("about");
    aboutSection.style.display =
        aboutSection.style.display === "none" ? "block" : "none";
});
