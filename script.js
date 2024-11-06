document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function () {
            // Add a quick "clicked" animation to the link
            anchor.classList.add("clicked");
            setTimeout(() => anchor.classList.remove("clicked"), 150); // Reset after animation
        });
    });
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        this.classList.add('clicked');
        setTimeout(() => this.classList.remove('clicked'), 150);
    });
});

function switchSection(sectionId) {
    document.querySelectorAll(".content-section").forEach(section => {
        section.classList.add("hidden");
        section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.remove("hidden"); 
    document.getElementById(sectionId).classList.add("active");
}
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const sectionId = link.getAttribute("href").substring(1);
            
       
            link.classList.add("clicked");
            setTimeout(() => link.classList.remove("clicked"), 200);

            switchSection(sectionId);
        });
    });

   
    switchSection("tentang");
});
