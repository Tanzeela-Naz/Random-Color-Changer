
// Function to change background color randomly
function colorchanger() {
    document.body.style.background = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

// Function to refresh the page
function refreshBtn() {
    window.location.reload(); // Reloads the current page
}
