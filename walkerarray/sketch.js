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
let katharine;
let taran;

function setup() {
  createCanvas(windowWidth, windowHeight);
  michael = new Walker(100, 50);
  katharine = new Walker(200, 300);
  katharine.color = "blue";
  taran = new Walker(width - 500, height - 500);
  taran.color = "green";
}

function draw() {
  michael.move();
  michael.display();
  katharine.move();
  katharine.display();
  taran.move();
  taran.display();
}
