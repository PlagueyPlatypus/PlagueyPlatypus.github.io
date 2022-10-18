// Tik Tac Toe
// Sadique
// Sept 21 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const playerX = "x"
const playerO = "o"
const wins = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  setup();
}

function draw() {
  background("white");
  drawGraph();
  if (state === "x") {
    drawCounter();
  }
}

function drawGraph() {
  let cellWidth = width/3;
  let cellHeight = height/3;
  if (cellWidth > cellHeight) {
    cellWidth = cellHeight;
  }
  else {
    cellHeight = cellWidth;
  }

  let isWhite = true;
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      if (isWhite) {
        fill("white");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      isWhite = !isWhite;
    }
    isWhite = !isWhite;
  }
}
