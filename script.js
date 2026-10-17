const mainContainer = document.querySelector('.main-container');
const title = document.querySelector('.title');
const gridSizeButton = document.querySelector('.grid-size-button');
const resetButton = document.querySelector('.clear-button');
const buttonContainer = document.querySelector('button-container');
const gridContainer = document.querySelector('.grid-container');
const gridSizeDisplay = document.querySelector('#current-gridsize')

const drawModes = ['black', 'shaded', 'multicolor']
let currentMode;
let lastMode;
const drawModeBlackButton = document.querySelector('#black')
const drawModeShadedButton = document.querySelector('#shaded')
const drawModeMulticolorButton = document.querySelector('#multicolor')


let gridSize = 24;
ResetGridSize(gridSize);

function ResetGridSize(gridSizeParam) {
    // Assumes grid to be 800px X 800px
    let gridSquareSize = Math.fround(800 / gridSizeParam)

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
    gridSizeDisplay.innerHTML = `Grid Size = ${gridSizeParam} x ${gridSizeParam}`
}

function GetGridSize() {
    let response = 0;
    while (response < 10 || response > 100) {
        response = parseInt(prompt('Please enter a grid size between 10 and 100.'))
    }
    return response;
}

function SetRandomGridColor(event) {
    let r = Math.round(256 * Math.random())
    let g = Math.round(256 * Math.random())
    let b = Math.round(256 * Math.random())

    event.target.style.backgroundColor = `rgb(${r},${g},${b})`;

}

function DarkenGridColors(event) {
    event.target.style.backgroundColor = `rgb(0, 0, 0)`;
}

function ShadeGridColors(event, darkenValue) {
    currentColor = window.getComputedStyle(event.target).backgroundColor
    let rgbVals = ParseRGB(currentColor)
    // console.log(`starting value: ${rgbVals}`)

    // applies darkening to rgb values and normalizes at 0
    rgbVals.forEach((val, index) => {
        if (rgbVals[index] - darkenValue < 0) {
            rgbVals[index] = 0;
        } else {
            rgbVals[index] = val - darkenValue;
        }
    });
    // console.log(`End value: ${rgbVals}`)

    event.target.style.backgroundColor = `rgb(${rgbVals[0]}, ${rgbVals[1]}, ${rgbVals[2]})`
}

function ParseRGB(rgb) {
    // example: rgb(0, 0, 0)
    // returns [0,0,0]
    const colors = rgb.slice(4, -1)
    const colorArr = colors.split(',').map(item => item.trim())
    return colorArr
}

function SetDrawMode(mode) {
    switch (mode) {
        case 'black':
            currentMode = 'black'
            break;
        case 'shaded':
            currentMode = 'shaded'
            break;
        case 'multicolor':
            currentMode = 'multicolor'
            break;
        case 'none':
            currentMode = 'none'
            break;
        default:
            currentMode = 'shaded'
            break;
    }
}

function ToggleDrawMode(e) {
    if (e.key == ' ' && currentMode != 'none') { //if space is pressed and mode is not currently off, toggle draw mode on
        lastMode = currentMode;
        SetDrawMode('none')
        console.log(`current mode: ${currentMode}\nlastMode: ${lastMode}`)
    } else if (e.key == ' ' && currentMode == 'none') {//toggle draw mode off
        SetDrawMode(lastMode);
    }
}

function Draw(event) {
    switch (currentMode) {
        case 'black':
            DarkenGridColors(event)

            break;
        case 'shaded':
            ShadeGridColors(event, Math.round(256 / 10));

            break;
        case 'multicolor':
            SetRandomGridColor(event)

            break;
        case 'none':
            break;
        default:
            ShadeGridColors(event, Math.round(256 / 10));
            break;
    }
}

//TODO - Add a click event that when pressing a certain button it toggles off draw mode
gridSizeButton.addEventListener('click', (e) => {
    gridSize = GetGridSize();
    gridContainer.replaceChildren();
    ResetGridSize(gridSize)
})

resetButton.addEventListener('click', (e) => {
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach((square) => square.style.backgroundColor = '');
})

gridContainer.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('grid-square')) {
        Draw(event);
    }
})

drawModeBlackButton.addEventListener('click', (e) => {
    SetDrawMode('black');
    drawModeBlackButton.style.backgroundColor = 'rgb(208, 237, 58)';
    drawModeShadedButton.style.backgroundColor = '';
    drawModeMulticolorButton.style.backgroundColor = '';
})

drawModeShadedButton.addEventListener('click', (e) => {
    console.log('Shaded button clicked');
    SetDrawMode('shaded');
    drawModeBlackButton.style.backgroundColor = '';
    drawModeShadedButton.style.backgroundColor = 'rgb(208, 237, 58)';
    drawModeMulticolorButton.style.backgroundColor = '';
})

drawModeMulticolorButton.addEventListener('click', (e) => {
    console.log('Multicolor button clicked');
    SetDrawMode('multicolor');
    drawModeBlackButton.style.backgroundColor = '';
    drawModeShadedButton.style.backgroundColor = '';
    drawModeMulticolorButton.style.backgroundColor = 'rgb(208, 237, 58)';
})

document.addEventListener('keyup', (e) => {
    e.preventDefault();
    ToggleDrawMode(e)
})