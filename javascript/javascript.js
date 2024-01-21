const GRID_SIZE = 16;
let testVar = 0;


let gridSquareList;
const gridContainer = document.querySelector('.grid-container');

function populateGrid() {
   for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
         let gridSquare = document.createElement('div');
         gridSquare.classList.add('grid-square');
         gridContainer.appendChild(gridSquare);
      }
   }
   gridSquareList = document.querySelectorAll('.grid-square');
}

window.addEventListener('load', () =>{
   populateGrid();
   gridSquareList.forEach(gridSquare => {
      gridSquare.addEventListener('mouseenter', (event) => {
         event.target.style.backgroundColor = 'black';
      });
   });
})
