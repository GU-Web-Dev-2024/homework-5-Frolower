// Nikita Dubinin
// CPSC 332
// Homework 5
// Last modified: 10.09.2024


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

//Basic variables
let viewedCount = 0;
const counterElement = document.getElementById("counter");
const artPanels = document.querySelectorAll(".art-panel");
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetGallery);
const addArtButton = document.getElementById("add-art-button");
addArtButton.addEventListener("click", addNewArtwork);

function updateCounter() {
    counterElement.innerHTML="Artworks viewed: " + viewedCount;
}

artPanels.forEach(panel => {
    panel.addEventListener("click", handleArtPanelClick);
});

//Updates view counter if pannel wasn't already viewed
function handleArtPanelClick(event) {
    const panel = event.currentTarget;
    if (!panel.classList.contains("viewed")) {
        panel.classList.add("viewed");
        viewedCount++;
        updateCounter();
    }
}

function resetGallery() {
    viewedCount = 0;
    updateCounter();
    const panels = document.querySelectorAll(".art-panel");

    panels.forEach(panel => {
        panel.classList.remove("viewed");
    });
}

function addNewArtwork() {
    const randomArtwork = newArtworks[Math.floor(Math.random() * newArtworks.length)];
    const newPanel = document.createElement("div");
    const img = document.createElement("img");
    const description = document.createElement("p");
    const artGrid = document.querySelector(".art-grid");

    newPanel.classList.add("art-panel");
    img.src = randomArtwork.img;
    img.alt = randomArtwork.title;
    newPanel.appendChild(img);

    description.textContent = `${randomArtwork.title} by ${randomArtwork.artist}`;
    newPanel.appendChild(description);

    newPanel.addEventListener("click", handleArtPanelClick);
    artGrid.appendChild(newPanel);
}