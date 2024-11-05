// Add animation to navigation links on click
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function () {
            // Add a quick "clicked" animation to the link
            anchor.classList.add("clicked");
            setTimeout(() => anchor.classList.remove("clicked"), 150); // Reset after animation
        });
    });
});
