
const newArtworks = [
    { title: 'The Scream', artist: 'Edvard Munch', img: 'https://via.placeholder.com/200' },
    { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', img: 'https://via.placeholder.com/200' },
    { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'https://via.placeholder.com/200' },
    { title: 'The Night Watch', artist: 'Rembrandt van Rijn', img: 'https://via.placeholder.com/200' },
    { title: 'The Kiss', artist: 'Gustav Klimt', img: 'https://via.placeholder.com/200' },
    { title: 'American Gothic', artist: 'Grant Wood', img: 'https://via.placeholder.com/200' },
    { title: 'Las Meninas', artist: 'Diego Velázquez', img: 'https://via.placeholder.com/200' },
    { title: 'The Last Supper', artist: 'Leonardo da Vinci', img: 'https://via.placeholder.com/200' },
    { title: 'Water Lilies', artist: 'Claude Monet', img: 'https://via.placeholder.com/200' },
    { title: 'Starry Night Over the Rhône', artist: 'Vincent van Gogh', img: 'https://via.placeholder.com/200' }
];

// Track viewed artworks and initialize counter
let viewedCount = 0;
const counterElement = document.getElementById("counter");

// Function to update the counter display
function updateCounter() {
    counterElement.textContent = `Artworks Viewed: ${viewedCount}`;
}

// Function to handle click event on an art panel
function handleArtPanelClick(event) {
    const panel = event.currentTarget;
    if (!panel.classList.contains("viewed")) {
        panel.classList.add("viewed");
        viewedCount++;
        updateCounter();
    }
}

// Add click event listeners to initial art panels
const artPanels = document.querySelectorAll(".art-panel");
artPanels.forEach(panel => {
    panel.addEventListener("click", handleArtPanelClick);
});

// Function to reset the gallery to its original state
function resetGallery() {
    viewedCount = 0;
    updateCounter();

    // Remove 'viewed' class from all art panels
    const panels = document.querySelectorAll(".art-panel");
    panels.forEach(panel => {
        panel.classList.remove("viewed");
    });
}

// Add event listener for the reset button
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetGallery);

// Function to dynamically add a new art panel
function addNewArtwork() {
    // Randomly select a new artwork from the predefined list
    const randomArtwork = newArtworks[Math.floor(Math.random() * newArtworks.length)];

    // Create new art panel
    const newPanel = document.createElement("div");
    newPanel.classList.add("art-panel");

    // Create and add the artwork image
    const img = document.createElement("img");
    img.src = randomArtwork.img;
    img.alt = randomArtwork.title;
    newPanel.appendChild(img);

    // Create and add the artwork description
    const description = document.createElement("p");
    description.textContent = `${randomArtwork.title} by ${randomArtwork.artist}`;
    newPanel.appendChild(description);

    // Add click event listener to the new panel
    newPanel.addEventListener("click", handleArtPanelClick);

    // Append the new panel to the art grid
    const artGrid = document.querySelector(".art-grid");
    artGrid.appendChild(newPanel);
}

// Add event listener for the "Add New Artwork" button
const addArtButton = document.getElementById("add-art-button");
addArtButton.addEventListener("click", addNewArtwork);
