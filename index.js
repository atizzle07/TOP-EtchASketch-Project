// Create main div element
const mainContainer = document.querySelector('.main-container');


const gridSizeButton = document.createElement('button');
const gridContainer = document.createElement('div')

gridContainer.classList.add('grid-container');
gridSizeButton.id = 'grid-size-button';

gridSizeButton.innerHTML = 'Select Grid Size';

mainContainer.append(gridSizeButton, gridContainer)


/*
1. Create main container div
2. append a button for resetting the grid size
3. append a grid div
*/

