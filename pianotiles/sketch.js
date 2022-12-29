// Terrain Generation
// Sadique
// Oct 21, 2022

let w = 0;
let h = 0;
let script = "play";
let score = 0;
let gameOver = false;

class Tile {
  constructor(lane){
    this.lane = lane;
    this.w = w/4 - 20; 
    this.h = h/4;
    this.x = 10 + this.lane * w/4;
    this.y = 0 - this.h; 
    this.speed = 5;
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.alpha = 255;
    this.color = color(this.r, this.g, this.b, this.alpha);
  }

  show() {
    push() ;
    stroke(this.color);
    fill(this.color); 
    rect(this.x, this.y, this.w, this.h);
  }

  move() {
    this.y += this.speed;
  }

  arrive() {
    if(this.y > windowHeight){
      print("tile arrived!");
    }
    return this.y > windowHeight;
  }

  missed() {
    return this.y > 9 * this.h/2;
  }

  touched(x, y) {
    return x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.h;
  }
}

let tiles = [];

function setup() {
  let canvas = createCanvas(windowWidth/2, windowHeight);
  canvas.center("horizontal");

  w = width;
  h = height;
  tiles.push(new Tile(floor(random(4))));
}

function whenPressed(){
  if(tiles[0].touched(mouseX, mouseY)) {
    score += 5;
    tiles[0].color = "grey";
    print("tap");
  }
  else {
    gameOver = true;
  }
}

function mousePressed() {
  whenPressed();
}

function keyPressed() {
  if (key === 65) {
    print("tap");
  }

  if (key === 83) {
    score += 5;
    tiles[0].color = "grey";
    print("tap");
  }

  if (key === 75) {
    score += 5;
    tiles[0].color = "grey";
    print("tap");
  }
  
  if (key === 76){
    score += 5;
    tiles[0].color = "grey";
    print("tap");
  }
}

function playAndScore() {
  textSize(28);
  textAlign(CENTER);
  fill(255);
  noStroke();
  text(script, w/2, 32);
  text(score, w/2, 64);
}

function gameoverText() {
  if(gameOver){
    textSize(50);
    text("YOU GOT TO",width/2,height/2+50);
    text("score: "+score,width/2,height/2+100);
  }
}

function piano() {
  stroke(0);
  line(w/4, 0, w/4, h);
  line(2 * w/4, 0,2 * w/4, h);
  line(3 * w/4, 0, 3 * w/4, h);
  line(0, 4 * h/5.25, width, 4 * h/5.25);

  if (tiles[tiles.length - 1].arrive()) {
    tiles.pop();
    tiles.push(new Tile(floor(random(4))));
  }

  if(tiles[0].missed()) {
    gameOver = true;
    print("game over");
  }

  for (let i = 0; i < tiles.length; i++) {
    tiles[i].show();
    tiles[i].move();
  }

  tiles[0].show();
  tiles[0].move();
}

function draw() {
  frameRate(120);
  background (200);
  playAndScore();
  piano();
}

