const container = document.getElementById('container');
const newGridButton = document.getElementById('new-grid');

// Create the grid
function createGrid(size) {
  container.innerHTML = ''; // Clear the container
  const squareSize = 960 / size; // Calculate square size
  
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);

    // Add hover effect
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = getRandomColor();
    });
  }
}

// Generate a random color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Prompt user for new grid size
newGridButton.addEventListener('click', () => {
  let size = parseInt(prompt('Enter grid size (max 100):'), 10);
  if (size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

// Initial 16x16 grid
createGrid(16);
