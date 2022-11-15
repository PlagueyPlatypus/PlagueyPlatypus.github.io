// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = "red";
    this.speed = 5;
    this.radius = 10;
  }

  display() {
    stroke(this.color);
    fill(this.color);
    circle(this.x, this.y, this.radius * 2);
  }

  move() {
    let choice = random(100);

    if (choice < 25) {
      this.y -= this.speed;
    }
    else if (choice < 50) {
      this.y += this.speed;
    }
    else if (choice < 75) {
      this.x += this.speed;
    }
    else {
      this.x -= this.speed;
    }

  }
}

let michael;

let walkerArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let michael = new Walker(random.width, height/2);
  walkerArray.push(michael);

}

function draw() {
  for (let i = 0; i < walkerArray.length; i++) {
    michael.move();
    michael.display();
  }
}

function spawnWalker() {
  let michael = new Walker(width/2, height/2);
  let someColor = color(random(255), random(255), random(255));
  michael.color = someColor;
  walkerArray.push(michael);
}

function keyPressed() {
  spawnWalker();
}