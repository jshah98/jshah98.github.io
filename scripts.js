// scripts.js

// Function to get today's date and format it
function getCurrentDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'short'};
    return today.toLocaleDateString('en-US', options);
}

// Set today's date in the timeline
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('today-date').textContent = getCurrentDate();
});
