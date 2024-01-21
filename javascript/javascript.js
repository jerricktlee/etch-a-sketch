const GRID_SIZE = 16;

const gridContainer = document.querySelector('.grid-container');

function populateGrid() {
   console.log("populateGrid() invoked");
   for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
         let gridSquare = document.createElement('div');
         gridSquare.classList.add('grid-square');
         gridContainer.appendChild(gridSquare);
      }
   }
}

window.addEventListener('load', () =>{
   populateGrid();
})