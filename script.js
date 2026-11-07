
// =========================================
// MATHLAB — MAIN JAVASCRIPT
// =========================================

const themeToggle = document.getElementById("theme-toggle");

// Load the previously saved theme
const savedTheme = localStorage.getItem("mathlab-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
}

// Update the button label
function updateThemeButton() {
    if (document.body.classList.contains("dark-theme")) {
        themeToggle.textContent = "Light mode";
    } else {
        themeToggle.textContent = "Dark mode";
    }
}

updateThemeButton();

// Switch between light and dark themes
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    const currentTheme = document.body.classList.contains("dark-theme")
        ? "dark"
        : "light";

    localStorage.setItem("mathlab-theme", currentTheme);

    updateThemeButton();
});
