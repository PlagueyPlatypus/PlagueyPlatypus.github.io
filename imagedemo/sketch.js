// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let fishimage;
let scalar = 0.2;

function preload() {
  fishimage = loadImage("fish.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(fishimage, mouseX, mouseY, fishimage.width*scalar, fishimage.height*scalar);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    scalar = scalar * 1.5;
  }
  else if (keyCode === DOWN_ARROW){
    scalar = scalar *0.5
  }
}