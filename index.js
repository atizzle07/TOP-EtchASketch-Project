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
for (let id = 0; id < gridSize.length; id++) {
        
}

mainContainer.append(title, gridSizeButton, gridContainer)


/*
1. Create main container div
2. append a button for resetting the grid size
3. append a grid div
*/

