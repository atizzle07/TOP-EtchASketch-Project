const mainContainer = document.querySelector('.main-container');
let gridSize = 16;

const title = document.createElement('div');
title.classList.add('title');
title.innerHTML = 'Etch A Sketch';

const gridSizeButton = document.createElement('button');
gridSizeButton.id = 'grid-size-button';
gridSizeButton.innerHTML = 'Select Grid Size';

const resetButton = document.createElement('button');
resetButton.id = 'clear-button';
resetButton.innerHTML = 'Reset Grid Color';

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');
buttonContainer.append(gridSizeButton, resetButton);

// Configure grid container and all elements within
const gridContainer = document.createElement('div')
gridContainer.classList.add('grid-container');


//TODO - Need to set the grid container size to be fixed and adjust the grid-items and rows so they are evenly distributed in the space. This can be calculated based on the set grid container size and required rows. for example, if the container size is 1000px and the grid size is 16, the width of each grid-square is 1000/16 = 62px
for (let i = 0; i < gridSize; i++) {
    const gridRow = document.createElement('div');
    gridRow.classList.add('grid-row');

    for (let j = 0; j < gridSize; j++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-square');
        gridRow.append(gridItem);
    }
    gridContainer.append(gridRow);
}

mainContainer.append(title, buttonContainer, gridContainer)


// =============== EVENT LISTENERS ===================

gridSizeButton.addEventListener('click', (e) => {
    gridSize = parseInt(
        prompt('Please enter a grid size between 4 and 64'));
    //TODO - Need to reload the grid container for the new size
    //TODO - Need to move this code to a separate function so it can also be called when the page is first loaded and the 
})

resetButton.addEventListener('click', (e) => {
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach((square) => square.style.backgroundColor = '');
})

gridContainer.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('grid-square')) {
        console.log(event.target)
        event.target.style.backgroundColor = 'rgb(0,0,0)';
    }
})