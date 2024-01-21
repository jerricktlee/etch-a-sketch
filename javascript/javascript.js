const DEFAULT_GRID_SIZE = 16;

let currGridSize = DEFAULT_GRID_SIZE;
let gridSquareList;
const gridContainer = document.querySelector('.grid-container');
const resetBtn = document.querySelector('.reset-btn');
const customSizeBtn = document.querySelector('.custom-size-btn');

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

window.addEventListener('load', () =>{
   populateGrid(DEFAULT_GRID_SIZE);
   addEventListenerToSquares(gridSquareList);
})

resetBtn.addEventListener('click', () => {
   gridSquareList.forEach(gridSquare => {
      gridSquare.style['background-color'] = 'white';
   })
})

customSizeBtn.addEventListener('click', () => {
   currGridSize = prompt('Enter a number 1-100, to generate a grid:');
   if (currGridSize < 1 || currGridSize > 100) {
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
})

function setCSSGridSize(gridDimension) {
   let squarePercentage = 100 / gridDimension;
   let root = document.querySelector(':root');
   root.style.setProperty('--square-size', `${squarePercentage}%`);
}