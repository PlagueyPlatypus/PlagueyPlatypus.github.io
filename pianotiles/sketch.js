// Terrain Generation
// Sadique
// Oct 21, 2022

let w = 0;
let h = 0;

class Tile{
  constructor(lane){
    this.lane = lane;
    this.w = w/4 - 20; 
    this.h = h/4;
    this.X = 10 + this.lane * w/4;
    this.y = -2; 
    this.speed = 5;
  }

  show() {
    push() ;
    translate(this.X, this.y);
    rectMode(CENTER);
    rect(this.w/2, this.h/2, this.w, this.h);
  }

  move() {
    this.y += this.speed;
  }

  arrive() {
    return this.y > -this.h;
  }

  missed() {

  }

  touched() {
    
  }
}

tiles = []

function piano() {
  // framerate(30);
  stroke(0);
  line(w/4, 0, w/4, h);
  line(2 * w/4, 0,2 * w/4, h);
  line(3 * w/4, 0, 3 * w/4, h);
  line(0, 4 * h/5.25, width, 4 * h/5.25);

  if (tiles[tiles.length - 1].arrive()) {
    tiles.push(new Tile(int(random(4))));
  }

  for (let i = 0; i < tiles.length; i++) {
    tile.show();
    tile.move();
  }
  tiles[0].show();
  tiles[0].move();
}

function setup() {
  let canvas = createCanvas(windowWidth/2, windowHeight);
  canvas.center("horizontal");
  background (240);
  w = width;
  h = height;
  tiles.push(new Tile(int(random(4))));
}

function draw() {
  piano()
}

// function gameOver() {
//   noLoop();
//   fill(0);
//   textAlign(CENTER);
//   textSize(100);
//   text("Try Again!", width / 2, height / 2);
// }
