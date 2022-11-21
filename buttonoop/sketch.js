// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
class Button {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = "black";
    this.hovercolor = "grey";
  }

  display() {
    if (this.press(mouseX, mouseY)){
      fill(this.hovercolor);
    }
    else {
      fill(this.color);
    }
    rect(this.x, this.y, this.w, this.h);
  }

  press(x, y) {
    return x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.h;   
  }
}

let buttonone = new Button(200, 200, 150, 75);
let buttontwo = new Button(200, 500, 150, 75);

function mousePressed() {
  if(buttonone.press(mouseX, mouseY)) {
    print("tap");
  }
  if(buttontwo.press(mouseX, mouseY)) {
    print("beep");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  buttonone.display();
  buttontwo.display();
}
