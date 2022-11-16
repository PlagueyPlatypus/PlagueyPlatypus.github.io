// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Bullet {
  constructor(x, y) {
    this.x = 250;
    this.y = random(windowHeight);
    this.dx = 7; //random(-5, 5);
    this.dy = 0; //random(-5, 5);
    this.diameter = 5;
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.alpha = 255;
    this.color = color(this.r, this.g, this.b, this.alpha);
  }

  update() {
    //move
    this.x += this.dx;
    this.dx+= 2;
    // this.y += this.dy;

    //making it more transparent
    this.alpha--;
  }

  display() {
    fill(this.color);
    stroke(this.color);
    circle(this.x, this.y, this.diameter);
    this.color = color(this.r, this.g, this.b, this.alpha);
  }

  faded() {
    return this.alpha <= 0;
  }
}

let bullets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].update();
    if (bullets[i].faded()) {
      bullets.splice(i, 1);
    }
    else {
      bullets[i].display();
    }
  }
  fill(255);
  rect(0, 0, 249, windowHeight);
}

function mousePressed() {
  for (let i = 0; i < 1; i++) {
    let spawnbullet = new Bullet(mouseX, mouseY);
    bullets.push(spawnbullet);
  }
}