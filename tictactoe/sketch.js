// Tik Tac Toe
// Sadique
// Sept 21 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

let w;
let h;

let bot = "X";
let player = "O";
let currentPlayer = player;

function setup() {
  createCanvas(windowWidth, windowHeight);
  w = width / 3;
  h = height / 3;
}

function inARow(a, b, c) {
  return a === b && b === c && a != "";
}

// Checking Who Won
function checkWinner() {
  let winner = null;

  // Horizontal
  for (let i = 0; i < 3; i++) {
    if (inARow(grid[i][0], grid[i][1], grid[i][2])) {
      winner = grid[i][0];
    }
  }

  // Vertical
  for (let i = 0; i < 3; i++) {
    if (inARow(grid[0][i], grid[1][i], grid[2][i])) {
      winner = grid[0][i];
    }
  }

  // Diagonal
  if (inARow(grid[0][0], grid[1][1], grid[2][2])) {
    winner = grid[0][0];
  }
  if (inARow(grid[2][0], grid[1][1], grid[0][2])) {
    winner = grid[2][0];
  }

  // Indicating which spots are "empty"
  let empty = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i][j] === "") {
        empty++;
      }
    }
  }

  if (winner === null && empty === 0) {
  } else {
    return winner;
  }
}

function mousePressed() {
  if (currentPlayer === player) {
    // player make turn
    let i = floor(mouseX / w);
    let j = floor(mouseY / h);
    // If valid turn
    if (grid[i][j] === "") {
      grid[i][j] = player;
      currentPlayer = bot;
    }
  }
}

// Drawing the Grid
function createGrid() {
  strokeWeight(5);
  line(w, 0, w, height);
  line(w * 2, 0, w * 2, height);
  line(0, h, width, h);
  line(0, h * 2, width, h * 2);  
}

function draw() {
  background("white");
  createGrid();
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      let x = w * i + w / 2;
      let y = h * j + h / 2;
      let spot = grid[i][j];
      textSize(32);
      let r = w / 4;
      if (spot === player) {
        circle(x, y, r * 2);
      }
      
      else if (spot === bot) {
        line(x - r, y - r, x + r, y + r);
        line(x + r, y - r, x - r, y + r);
      }
    }
  }

  // let result = checkWinner();
  // if (result != null) {
  //   noLoop();
  //   let results = createP("");
  //   results.style("font-size", "32pt");
  //   if (result === "tie") {
  //     results.html("Tie!");
  //   } else {
  //     results.html(`${result} wins!`);
  //   }
  // }
}
