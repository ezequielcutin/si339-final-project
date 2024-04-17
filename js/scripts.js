document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1000, // Animation duration
        easing: 'ease-in-out', // Animation easing
        once: false, // Whether animation should only happen once
        mirror: true // Whether elements should animate out while scrolling past them
    });
});


function toggleVisibility(elementId, button) {
    var content = document.getElementById(elementId);
    if (content.style.display === 'none') {
        content.style.display = 'block'; // Show the content
        button.textContent = 'Hide ' + button.textContent.split(' ')[1]; // Change button text to "Hide"
    } else {
        content.style.display = 'none'; // Hide the content
        button.textContent = 'Show ' + button.textContent.split(' ')[1]; // Change button text to "Show"
    }
}


// Saving the checked state to local storage
document.querySelectorAll('.list-center input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      localStorage.setItem(this.id, this.checked);
    });
  });
  
  // Loading the saved checked states when the page loads
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.list-center input[type="checkbox"]').forEach(function(checkbox) {
      checkbox.checked = localStorage.getItem(checkbox.id) === 'true';
    });
  });