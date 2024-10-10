
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

let viewedCount = 0;
const counterElement = document.getElementById("counter");
const artPanels = document.querySelectorAll(".art-panel");

function updateCounter() {
    counterElement.innerHTML="Artworks viewed: " + viewedCount;
}

function handleArtPanelClick(event) {
    const panel = event.currentTarget;
    if (!panel.classList.contains("viewed")) {
        panel.classList.add("viewed");
        viewedCount++;
        updateCounter();
    }
}


artPanels.forEach(panel => {
    panel.addEventListener("click", handleArtPanelClick);
});

function resetGallery() {
    viewedCount = 0;
    updateCounter();

    const panels = document.querySelectorAll(".art-panel");
    panels.forEach(panel => {
        panel.classList.remove("viewed");
    });
}

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetGallery);

