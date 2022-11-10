// Terrain Generation
// Sadique
// Oct 21, 2022

let tiles = [];
let startingLocation = 0;
let time;
let lineWidth = 3;

let piano = [
  [" ", " ", " ", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", " "]
];

function columns() {
  let w = width / 4 ;
  strokeWeight(lineWidth);
  line(lineWidth, 0, lineWidth, height);
  line(w * 1, 0, w * 1, height);
  line(w * 2, 0, w * 2, height);
  line(w * 3, 0, w * 3, height);
  line(width - lineWidth, 0, width - lineWidth, height);
}

function setup() {
  let canvas = createCanvas(windowWidth/2, windowHeight);
  canvas.center("horizontal");
  columns();
  tiles.push(spawnTile(100, 100));
  //gameOver();
}

function spawnTile(tempX, tempY) {
  let newTile = {
    y: tempY,
    radius: random(25, 100),
    dy: (0, -5),
    theColor: color(0)
  };
  return newTile;
}

function gameOver() {
  noLoop();
  fill(0);
  textAlign(CENTER);
  textSize(100);
  text("Try Again!", width / 2, height / 2);
}

//https://www.youtube.com/watch?v=1Izg1eHFsUw
//https://www.youtube.com/watch?v=554VpvX2m4E