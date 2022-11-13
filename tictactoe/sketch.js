// Tik Tac Toe
// Sadique
// Sept 21 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

<<<<<<< Updated upstream
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
=======
let canvasSize;
let canvas;
let xoArray;
let turnX;

function setup() {
  canvasSize = min(windowHeight, windowWidth);
  canvas = createCanvas(canvasSize, canvasSize);
  canvas.position(windowWidth/4, 0);
  xoArray = [];
  textAlign (CENTER, CENTER);
  turnX = true;
}

function draw() {
  background(100);
  if(!condition) {
    drawTicTacToe();
    drawXO();
  }

  endresult();
}

function drawTicTacToe() {
  for (let y = 1; y <= 3; y++) {
    for (let x = 1; x <= 3; x++) {
        square(x*canvasSize/5, y*canvasSize/5, canvasSize/5)
    }

}
}

function mouseClicked() {
  let isTaken = false;
  let x = canvasSize * (ceil(map(mouseX, 0, canvasSize, 0, 5)) - .5)/5
  let y = canvasSize * (ceil(map(mouseY, 0, canvasSize, 0, 5)) - .425)/5

// Let's check the bounding box  
if (x >= canvasSize*4/5 || x <= canvasSize/5 || y <= canvasSize/5 || y >= canvasSize*4/5) {
  return
}
// Let's checkthe array to see if we clicked it before
  for (let index = 0; index < xoArray.length; index++) {
    if (xoArray[index].x === x && xoArray[index].y === y) {
      isTaken = true
      break   // Ok we are done, let's exit the loop
    }
  }

  if (isTaken === false) {  
    if (turnX){
      xoArray.push(
      {
        x: x,

        y: y,

        XorO: "X"
      }
      )
    }
    else{
      xoArray.push(
      {
        x: x,

        y: y,

        XorO: "O"
      }
      )
    }
    turnX =! turnX;

    print(ceil(map(mouseX, 0, canvasSize, 0, 4)));
    print(ceil(map(mouseY, 0, canvasSize, 0, 4)));
}
console.log (xoArray);
}

function drawXO() {
for (let i = 0; i < xoArray.length; i++) {
  textSize(canvasSize/5)
  text (xoArray[i].XorO, xoArray[i].x, xoArray[i].y);
}
}
function endresult() {
  for (let i = 0; i < xoArray.length; i++) {
    textSize(canvasSize/4);
    if (condition) {
      text("X Wins!");
    } else {
      text("O Wins!");
    }
    }
  }
>>>>>>> Stashed changes
