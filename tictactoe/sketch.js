// Tik Tac Toe
// Sadique
// Sept 21 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let graph = [
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

function checkWinner() {
  let winner = null;

  // Horizontal
  for (let i = 0; i < 3; i++) {
    if (inARow(graph[i][0], graph[i][1], graph[i][2])) {
      winner = graph[i][0];
    }
  }

  // Vertical
  for (let i = 0; i < 3; i++) {
    if (inARow(graph[0][i], graph[1][i], graph[2][i])) {
      winner = graph[0][i];
    }
  }

  // Diagonal
  if (inARow(graph[0][0], graph[1][1], graph[2][2])) {
    winner = graph[0][0];
  }
  if (inARow(graph[2][0], graph[1][1], graph[0][2])) {
    winner = graph[2][0];
  }

  let empty = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (graph[i][j] === "") {
        empty++;
      }
    }
  }

  if (winner === null && empty === 0) {
    return "tie";
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
    if (graph[i][j] === "") {
      graph[i][j] = player;
      currentPlayer = bot;
      bestMove();
    }
  }
}

function draw() {
  background(255);
  strokeWeight(4);

  line(w, 0, w, height);
  line(w * 2, 0, w * 2, height);
  line(0, h, width, h);
  line(0, h * 2, width, h * 2);

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      let x = w * i + w / 2;
      let y = h * j + h / 2;
      let spot = graph[i][j];
      textSize(32);
      let r = w / 4;
      if (spot === player) {
        noFill();
        ellipse(x, y, r * 2);
      } else if (spot === bot) {
        line(x - r, y - r, x + r, y + r);
        line(x + r, y - r, x - r, y + r);
      }
    }
  }

  let result = checkWinner();
  if (result != null) {
    noLoop();
    let results = createP("");
    results.style("font-size", "32pt");
    if (result === "tie") {
      results.html("Tie!");
    } else {
      results.html(`${result} wins!`);
    }
  }
}
