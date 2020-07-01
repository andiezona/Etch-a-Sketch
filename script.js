const gridContainer = document.querySelector("#grid-container");

function createGrid(rows, columns) {
  gridContainer.style.setProperty("--grid-rows", rows);
  gridContainer.style.setProperty("--grid-columns", columns);
  //CSS grid tracks will be made from rows and columns
  //input will update the # of rows & columns in the CSS variable
  //CSS will be dynamically updated to reflect the inputs using js and the CSS repeat function
  //repeat(var(--grid-rows))[<<this value is # of repititions], auto)[<< this value is the size of each cell]

  for (let i = 0; i < rows * columns; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("mouseover", colorChangeHandler);
    gridContainer.appendChild(cell);
  }
}

function colorChangeHandler(e) {
  e.target.style.background = "black";
  e.target.style.opacity = parseFloat(e.target.style.opacity || 0) + 0.1;
}

function resetGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
  let gridNum = Number(
    prompt("Enter a number to choose the amount of rows in your new grid")
  );
  createGrid(gridNum, gridNum);
}

////-----

createGrid(16, 16);

const newGridBtn = document.querySelector("#new-grid-btn");
newGridBtn.addEventListener("click", resetGrid);
