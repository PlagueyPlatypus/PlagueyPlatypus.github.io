// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = "start";
let fishImg;

function preload(){
  fishImg = loadImage("fish.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if (state === "start") {
    startScreen();
  }
  if (state === "main") {
    image(fishImg, 0, 0, width, height) ;
  }
}

function mousePressed(){
  if (state === "start" && mouseInsideRect(400, 700, 400, 550)) {
    state = "main";
  }
}


function startScreen() {
  if (mouseInsideRect(400, 700, 400, 550)) {
    fill("gray");
    noStroke();
  }
  else {
    fill("black");
  }
  rect(400, 400, 300, 150);
}

function mouseInsideRect(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;
}