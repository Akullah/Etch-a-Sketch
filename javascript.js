// script.js

document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");
    const newGridButton = document.getElementById("newGridButton");

    function createGrid(squaresPerSide) {
        // Clear the container
        container.innerHTML = '';

        // Calculate the size of each square
        const squareSize = 960 / squaresPerSide;

        // Create the new grid
        for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            gridSquare.style.width = `${squareSize}px`;
            gridSquare.style.height = `${squareSize}px`;
            container.appendChild(gridSquare);

            // Initialize hover count
            gridSquare.dataset.hoverCount = 0;

            // Add event listener for hover effect
            gridSquare.addEventListener("mouseover", function() {
                let hoverCount = parseInt(gridSquare.dataset.hoverCount);
                if (hoverCount === 0) {
                    // First interaction: set a random color
                    const randomColor = getRandomColor();
                    gridSquare.style.backgroundColor = randomColor;
                    gridSquare.dataset.originalColor = randomColor;
                } else {
                    // Subsequent interactions: darken the color
                    const newColor = darkenColor(gridSquare.dataset.originalColor, hoverCount * 10);
                    gridSquare.style.backgroundColor = newColor;
                }

                // Increment hover count
                gridSquare.dataset.hoverCount = hoverCount + 1;
            });
        }
    }

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function darkenColor(color, percent) {
        // Extract RGB values
        const rgbValues = color.match(/\d+/g).map(Number);
        const factor = (100 - percent) / 100;
        const [r, g, b] = rgbValues.map(value => Math.max(0, Math.floor(value * factor)));
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Default grid size
    createGrid(16);

    // Add event listener to the button
    newGridButton.addEventListener("click", function() {
        let squaresPerSide = prompt("Enter the number of squares per side (1-100):");
        squaresPerSide = parseInt(squaresPerSide);

        if (isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100) {
            alert("Please enter a valid number between 1 and 100.");
        } else {
            createGrid(squaresPerSide);
        }
    });
});
