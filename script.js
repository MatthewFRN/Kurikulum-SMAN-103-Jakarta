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

// Smooth scroll animation for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll smoothly to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        // Add a small animation to the link when clicked
        this.classList.add('clicked');
        setTimeout(() => this.classList.remove('clicked'), 150);
    });
});

// Function to switch between sections
function switchSection(sectionId) {
    document.querySelectorAll(".content-section").forEach(section => {
        section.classList.add("hidden");  // Hide all sections
        section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.remove("hidden"); // Show the selected section
    document.getElementById(sectionId).classList.add("active");
}

// Add event listeners to each nav link
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const sectionId = link.getAttribute("href").substring(1);
            
            // Add a small animation to the link when clicked
            link.classList.add("clicked");
            setTimeout(() => link.classList.remove("clicked"), 200);

            // Switch to the selected section
            switchSection(sectionId);
        });
    });

    // Set default section to be visible
    switchSection("tentang");
});