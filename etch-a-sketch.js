const grid = document.querySelector(".grid");
const gridWidth = parseFloat(getComputedStyle(grid).width);

let gridSize = 16;
const maxGridSize = 100;

function createGrid(gridSize) {
    for (let i = 0; i < gridSize ** 2; i++) {
    let square = document.createElement("div");
    square.classList.add("square");

    let squareSide = gridWidth / gridSize;
    square.style.width = `${squareSide}px`;

    // Remove extra borders
    if (i < gridSize) square.style.borderTop = "0";
    if (i % gridSize === 0) square.style.borderLeft = "0";

    grid.appendChild(square);
    }
}

function empty(grid) {
    while (grid.lastChild) {
        grid.lastChild.remove();
    }
}

createGrid(gridSize);

// Add hovering effect
grid.addEventListener("mousedown", (event) => {
    const target = event.target;

    if (target.classList.contains("square")) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        
        let background = target.style.background
        let alphaMatch = background.match(
            /rgba?\([^,]+,\s*[^,]+,\s*[^,]+,\s*([^)]+)/
        );
        let alpha = alphaMatch ? parseFloat(alphaMatch[1]) + 0.1 : 0.1;
        alpha = Math.min(alpha, 1);

        target.style.background = `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
});

const resizeButton = document.querySelector("button");

resizeButton.addEventListener('click', () => {
    do {gridSize = parseInt(prompt(`Choose the size of the grid's sides (max. ${maxGridSize}).`));
    } while (isNaN(gridSize)
        || gridSize <= 0
        || gridSize > maxGridSize
    )

    empty(grid);
    createGrid(gridSize);
});