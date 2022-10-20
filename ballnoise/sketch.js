// Perkinn Noise demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let allCircles = []
let x;
let y;
let radius;
let time = 0;

function keyPressed() {
  let ball = {
    x: random(width),
    y: random(height),
    radius: random(50, 100),
    time: random(3000)
  };
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill(allCircles[i].("black"));

  for (let i = 0; i < allCircles.length; i++) {
    allCircles[i].x = noise(time + 1000) * width;
    allCircles[i].y = noise(time + 5000) * height;

    // increase time along noise
    allCircles[i].time += 0.01;
    circle(allCircles[i], allCircles[i].y, allCircles[i].radius);
  }
}