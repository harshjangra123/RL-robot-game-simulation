// script.js
const gridSize = 5;
const blockedcells = [
    {row: 1,col: 2},
    {row: 3,col: 3},
    {row: 2,col: 4}
];
let path = [];

const grid = document.getElementById("grid");
let robotpos = { x: 0, y: 0 };

function createGrid() {
  grid.innerHTML = ''; // Clear previous cells

  for (let i = 0; i < gridSize; i++) { // Row loop
    for (let j = 0; j < gridSize; j++) { // Column loop

      const cell = document.createElement("div"); // Create cell
      cell.className = "cell"; // Add cell class

      if (i === robotpos.x && j === robotpos.y) { // Robot position
        cell.classList.add("robot");
      }
      if(i === 1 && j === 2){
        cell.classList.add("blocked");
      }
      if(i === 3 && j === 1){
        cell.classList.add("blocked");
      }
      if(i === 2 && j === 4){
        cell.classList.add("blocked");
      }
      if (i === gridSize - 1 && j === gridSize - 1) { // Target position
        cell.classList.add("target");
      }

      grid.appendChild(cell); // Add cell to grid
    }
  }
}

function moverobot(direction){
    switch(direction){
        case 'up':
            if(robotpos.x > 0) robotpos.x -=1;
            break;
        case 'down':
            if(robotpos.x < gridSize - 1) robotpos.x +=1;
            break;
        case 'left':
            if(robotpos.y > 0) robotpos.y -= 1;
            break;
        case 'right':
            if(robotpos.y < gridSize- 1)robotpos.y += 1;
            break;

    }
    createGrid();
}

document.addEventListener('keydown',(event) => {
    if(event.key === 'ArrowUp') moverobot('up');
    if(event.key === 'ArrowDown') moverobot('down');
    if(event.key === 'ArrowLeft') moverobot('left');
    if(event.key === 'ArrowRight') moverobot('right');
});

//initializing grid creation 
createGrid();


