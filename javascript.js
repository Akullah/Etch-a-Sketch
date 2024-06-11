// script.js

document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");
    const newGridButton = document.getElementById("newGridButton");

    function createGrid(squaresPerSide) {
        // Clear the container
        container.innerHTML = '';

        // Calculate the size of each square
        const squareSize = 960 / squaresPerSide; // Total container width divided by number of squares per side

        // Create the new grid
        for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            gridSquare.style.width = `${squareSize}px`;
            gridSquare.style.height = `${squareSize}px`;
            container.appendChild(gridSquare);

            // Add event listeners for hover effect
            gridSquare.addEventListener("mouseover", function() {
                gridSquare.classList.add("hovered");
            });
        }
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
