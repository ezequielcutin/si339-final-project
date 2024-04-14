document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1000, // Animation duration
        easing: 'ease-in-out', // Animation easing
        once: false, // Whether animation should only happen once
        mirror: true // Whether elements should animate out while scrolling past them
    });
});



function toggleVisibility(elementId) {
    var content = document.getElementById(elementId);
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}