// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rows = 10;
let cols = 10;
let grid;
let cellWidth;
let cellHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/cols;
  cellHeight = height/rows;
  grid = createRandom2dArray(cols, rows);
}

function mousePressed() {
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseX/cellHeight);

  if (grid[yPos][xPos] === 0) {
    grid[yPos][xPos] = 1;
  }
  else if (grid[yPos][xPos] === 1) {
    grid[yPos][xPos] = 0;
  }
}

function draw() {
  background(220);
  displayGrid(grid);
}

function displayGrid(grid) {
  for (let y=0; y<rows; y++) {
    for (let x=0; x<cols; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function create2dArray(cols, rows) {
  let newArray = [];
  for (let y=0; y<rows; y++) {
    newArray.push([]);
    for (let x=0; x<cols; x++) {
      newArray[y].push(0);
    }
  }
  return newArray;
}

function createRandom2dArray(cols, rows) {
  let newArray = [];
  for (let y=0; y<rows; y++) {
    newArray.push([]);
    for (let x=0; x<cols; x++) {
      if (random(100) < 50) {
        newArray[y].push(0);
      }
      else {
        newArray[y].push(1);
      }
    }
  }
  return newArray;
}