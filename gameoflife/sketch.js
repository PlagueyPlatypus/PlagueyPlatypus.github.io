// Game of Life
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const ROWS = 40;
const COLS = 40;
let grid;
let cellWidth;
let cellHeight;
let autoplay = false;
let gosperGun;

function preload() {
  gosperGun = loadJSON("gosper.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLS;
  cellHeight = height/ROWS;
  grid = createRandom2dArray(COLS, ROWS);
}

function draw() {
  background(220);
  if (autoplay && frameCount % 3 === 0) {
    grid = takeTurn(grid);
  }
  displayGrid(grid);
}

function keyPressed() {
  if (key === "e") {
    grid = create2dArray(COLS, ROWS);
  }
  if (key === " ") {
    grid = takeTurn(grid);
  }
  if (key === "a") {
    autoplay = !autoplay;
  }
  if (key === "g"){
    grid = gosperGun;
  }
}

function takeTurn(grid) {
  let nextTurn = create2dArray(COLS, ROWS);

  for (let y = 0; y<ROWS; y++) {
    for (let x = 0; x<COLS; x++) {
      let neighbors = 0;

      for (let i =- 1; i<=1; i++) {
        for (let j =- 1; j<=1; j++) {
          if (y + i >= 0 && y+i < ROWS && x + j >= 0 && x+j < COLS) {
            neighbors += grid[y+i][x+j];
          }
        }
      }

      neighbors -= grid[y][x];
      if (grid[y][x] === 1) { 
        if (neighbors === 2 || neighbors === 3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }
      if (grid[y][x] === 0) {
        if (neighbors === 3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }
    }
  }

  return nextTurn;
}

function mousePressed() {
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseY/cellHeight);

  if (grid[yPos][xPos] === 0) {
    grid[yPos][xPos] = 1;
  }
  else if (grid[yPos][xPos] === 1) {
    grid[yPos][xPos] = 0;
  }
}

function displayGrid(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      }
      square(x*cellWidth, y*cellHeight, cellWidth);
    }
  }
}

function create2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}

function createRandom2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
      if (random(100) < 50) {
        emptyArray[y].push(0);
      }
      else {
        emptyArray[y].push(1);
      }
    }
  }
  return emptyArray;
}