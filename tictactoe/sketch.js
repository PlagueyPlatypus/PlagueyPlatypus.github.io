// Tik Tac Toe
// Sadique
// Sept 21 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  setup();
}

function draw() {
  background("white");
  drawGraph();
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
    isWhite = !isWhite;  //flip boolean in between rows
  }
}

