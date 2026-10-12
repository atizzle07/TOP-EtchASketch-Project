const mainContainer = document.querySelector('.main-container');
let gridSize = 16;

const title = document.createElement('div');
title.classList.add('title');
title.innerHTML = 'Etch A Sketch';


const gridSizeButton = document.createElement('button');
gridSizeButton.id = 'grid-size-button';
gridSizeButton.innerHTML = 'Select Grid Size';

// Configure grid container and all elements within
const gridContainer = document.createElement('div')
gridContainer.classList.add('grid-container');

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

mainContainer.append(title, gridSizeButton, gridContainer)