// Tik Tac Toe
// Sadique
// Sept 21 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

let players = ["X", "O"];

let playerTurn;
let empty = [];

function setup() {
  createCanvas(windowWidth, windowHeight - 100);
  playerTurn = floor(random(players.length));
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      empty.push([x, y]);
    }
  }
}

function equals3(a, b, c) {
  return a === b && b === c && a !== " ";
}

function checkWinner() {
  let winner = null;

  //Horizontal
  for (let i = 0; i < 3; i++) {
    if (equals3(grid[i][0], grid[i][1], grid[i][2])) {
      winner = grid[i][0];
    }
  }

  //Vertical
  for (let i = 0; i < 3; i++) {
    if (equals3(grid[0][i], grid[1][i], grid[2][i])) {
      winner = grid[0][i];
    }
  }

  //Diagonal
  if (equals3(grid[0][0], grid[1][1], grid[2][2])) {
    winner = grid[0][0];
  }
  if (equals3(grid[2][0], grid[1][1], grid[0][2])) {
    winner = grid[2][0];
  }

  if (winner === null && empty.length === 0) {
    return "tie";
  } 
  else {
    return winner;
  }

}

function nextTurn() {
  let index = floor(random(empty.length));
  let spot = empty.splice(index, 1)[0];
  let i = spot[0];
  let j = spot[1];
  grid[i][j] = players[playerTurn];
  playerTurn = (playerTurn + 1) % players.length;
}

// function mousePressed() {
//   nextTurn(); 
// }

function draw() {
  background(255);
  let w = width / 3;
  let h = height / 3;
  strokeWeight(4);

  //Lines For the Grid
  line(w, 0, w, height);
  line(w * 2, 0, w * 2, height);
  line(0, h, width, h);
  line(0, h * 2, width, h * 2);

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      let x = w * i + w / 2;
      let y = h * j + h / 2;
      let spot = grid[i][j];
      textSize(32);
      if (spot === players[1]) {
        noFill();
        ellipse(x, y, w / 2);
      } 
      else if (spot === players[0]) {
        let xr = w / 4;
        line(x - xr, y - xr, x + xr, y + xr);
        line(x + xr, y - xr, x - xr, y + xr);
      }

    }
  }

  let result = checkWinner();
  if (result !== null) {
    noLoop();
    let resultP = createP(" ");
    resultP.style("font-size", "32pt");
    if (result === "tie") {
      resultP.text("Tie!");
    } 
    else {
      resultP.html(`${result} wins!`);
    }
  } 
  else {
    nextTurn();
  }

}