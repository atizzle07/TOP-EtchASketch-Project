const mainContainer = document.querySelector('.main-container');
const title = document.querySelector('.title');
const gridSizeButton = document.querySelector('.grid-size-button');
const resetButton = document.querySelector('.clear-button');
const buttonContainer = document.querySelector('button-container');
const gridContainer = document.querySelector('.grid-container');

let gridSize = 24;
ResetGridSize(gridSize);


function ResetGridSize(gridSizeParam) {
    // Assumes grid to be 800px X 800px
    let gridSquareSize = Math.fround(800 / gridSizeParam)
    console.log(`Grid size: ${gridSizeParam}\nSquare size: ${gridSquareSize}px`)

    for (let i = 0; i < gridSizeParam; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row')
        gridRow.style.height = `${gridSquareSize}px`

        for (let j = 0; j < gridSizeParam; j++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-square');
            gridItem.style.width = `${gridSquareSize}px`
            gridRow.append(gridItem);
        }
        gridContainer.append(gridRow);
    }

}

function GetGridSize() {
    let response = 0;
    while (response < 10 || response > 100) {
        response = parseInt(prompt('Please enter a grid size between 10 and 100.'))
    }
    return response;
}

gridSizeButton.addEventListener('click', (e) => {
    console.log('Grid size button clicked...')
    gridSize = GetGridSize();
    gridContainer.replaceChildren();
    ResetGridSize(gridSize)
})

resetButton.addEventListener('click', (e) => {
    console.log('Reset size button clicked...')
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach((square) => square.style.backgroundColor = '');
})

gridContainer.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('grid-square')) {
        //TODO - Need to change this to slightly darken the background color instead of just color it black. Requires a get --> conditional logic --> set process.
        event.target.style.backgroundColor = 'rgb(0,0,0)';
    }
})