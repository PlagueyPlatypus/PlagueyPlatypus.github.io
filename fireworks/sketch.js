// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.alpha = 255;
    this.color = color(this.r, this.g, this.b, this.alpha);
    this.diameter = 50;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
    this.alpha --;
  }

  display() {
    fill(this.color);
    stroke(this.color);
    circle(this.x, this.y, this.diameter);
    this.color = color(this.r, this.g, this.b, this.alpha);
  }
}

let theFireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  frameRate(120);
  background(0);
  for (let i = 0; i < theFireworks.length; i++){
    theFireworks[i].move();
    theFireworks[i].display();
  }
}
function mousePressed() {
  for (let i = 0; i < 100; i++) {
    let someParticles = new Particle(mouseX, mouseY);
    theFireworks.push(someParticles);
  }
}