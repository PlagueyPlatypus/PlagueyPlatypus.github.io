// Terrain Generation
// Sadique
// Oct 21, 2022

let w = 0;
let h = 0;
let s = "play";
let score = 0;
let gameOver = false;

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

  touched(x, y) {
    return ((x > this.x) && (x < this.x + this.w) && (y > this.y) && (y < y < this.y + this.h));
  }
}

tiles = []

function piano() {
  stroke(255);
  line(w/4, 0, w/4, h);
  line(2 * w/4, 0,2 * w/4, h);
  line(3 * w/4, 0, 3 * w/4, h);
  line(0, 4 * h/5.25, width, 4 * h/5.25);

  if (tiles[tiles.length - 1].arrive()) {
    tiles.push(new Tile(int(random(4))));
  }

  // for (let i = 0; i < tiles.length; i++) {
  //   tile.show();
  //   tile.move();
  // }
  tiles[0].show();
  tiles[0].move();
}

function setup() {
  let canvas = createCanvas(windowWidth/2, windowHeight);
  canvas.center("horizontal");
  background (0);
  w = width;
  h = height;
  tiles.push(new Tile(int(random(4))));
}

// function text() {
//   textSize(32);
//   textAlign(CENTER);
//   fill(col);
//   text(s,width/2,32);
//   text(score,width/2,64);
// }

function draw() {
  frameRate(120);
  piano()

}

function mousePressed() {
  if(tiles[0].touched(mouseX, mouseY)) {
    score += 5;
    tiles.splice(0, 1);
  }

  else gameOver = true;
}

