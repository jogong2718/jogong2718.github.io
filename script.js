// Select all sections
const sections = document.querySelectorAll('section');

// Function to add highlight background color
function highlightSection(event) {
    event.target.style.backgroundColor = '#e8f4e8';
}

// Function to remove highlight background color
function unhighlightSection(event) {
    event.target.style.backgroundColor = 'white';
}

// Add event listeners to each section
sections.forEach(section => {
    section.addEventListener('mouseover', highlightSection);
    section.addEventListener('mouseout', unhighlightSection);
});