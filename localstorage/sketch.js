// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let clicks = 0;
let highestEver = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (getItem("highscore") !== null) {
    highestEver = getItem("highscore");
  }
  else {
    storeItem("highscore", 0);
  }
}

function draw() {
  background(220);
  fill("black");
  textSize(100);
  text(clicks, width/2, height/2);

  fill("red");
  text(highestEver, 50, height - 100);
}

function mousePressed(){
  clicks++;

  if (clicks > getItem("highscore")) {
    storeItem("highscore", clicks);
    highestEver = clicks;
  }
}