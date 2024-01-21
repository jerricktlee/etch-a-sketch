const DEFAULT_GRID_SIZE = 16;
const MIN_GRID_SIZE = 1;
const MAX_GRID_SIZE = 100;
const RGB_MAX_VALUE = 255;
const GRID_CONTAINER_PERCENTAGE = 100;

let currGridSize = DEFAULT_GRID_SIZE;
let gridSquareList;
const gridContainer = document.querySelector('.grid-container');
const resetBtn = document.querySelector('.reset-btn');
const customSizeBtn = document.querySelector('.custom-size-btn');
const blackBtn = document.querySelector('.black-btn');
const rgbBtn = document.querySelector('.rgb-btn');
const gradientBtn = document.querySelector('.gradient-btn');

function populateGrid(gridSize) {
   for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
         let gridSquare = document.createElement('div');
         gridSquare.classList.add('grid-square');
         gridContainer.appendChild(gridSquare);
      }
   }
   gridSquareList = document.querySelectorAll('.grid-square');
}

function addEventListenerToSquares(squareNodeList) {
   squareNodeList.forEach(gridSquare => {
      gridSquare.addEventListener('mouseenter', (event) => {
         event.target.style.backgroundColor = 'black';
      });
   });
}

function resetGrid(squareNodeList) {
   squareNodeList.forEach(gridSquare => {
      gridSquare.style['background-color'] = 'white';
   });
}

window.addEventListener('load', () =>{
   populateGrid(DEFAULT_GRID_SIZE);
   addEventListenerToSquares(gridSquareList);
});

resetBtn.addEventListener('click', () => resetGrid(gridSquareList));

customSizeBtn.addEventListener('click', () => {
   currGridSize = prompt('Enter a number 1-100, to generate a grid:');
   if (currGridSize < MIN_GRID_SIZE || currGridSize > MAX_GRID_SIZE) {
      alert('Invald number. The number must be 1-100');
   }
   else {
      gridSquareList.forEach(gridSquare => {
         gridSquare.remove();
      })
      populateGrid(currGridSize);
      addEventListenerToSquares(gridSquareList);
      setCSSGridSize(currGridSize);
   }
});

blackBtn.addEventListener('click', () => {
   resetGrid(gridSquareList);
   gridSquareList.forEach(gridSquare => {
      gridSquare.addEventListener('mouseenter', (event) => {
         event.target.style.backgroundColor = 'black';
      });
   });
});

rgbBtn.addEventListener('click', () => {
   resetGrid(gridSquareList);
   let randR;
   let randG; 
   let randB;
   gridSquareList.forEach(gridSquare => {
      gridSquare.addEventListener('mouseenter', (event) => {
         randR = Math.floor(Math.random() * RGB_MAX_VALUE) + 1;
         randG = Math.floor(Math.random() * RGB_MAX_VALUE) + 1;
         randB = Math.floor(Math.random() * RGB_MAX_VALUE) + 1;
         event.target.style.backgroundColor = `rgb(${randR}, ${randG}, ${randB})`;
      });
   });
});

function setCSSGridSize(gridDimension) {
   let squarePercentage = GRID_CONTAINER_PERCENTAGE / gridDimension;
   let root = document.querySelector(':root');
   root.style.setProperty('--square-size', `${squarePercentage}%`);
}