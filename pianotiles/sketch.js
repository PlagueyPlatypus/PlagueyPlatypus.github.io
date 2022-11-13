// Terrain Generation
// Sadique
// Oct 21, 2022

let w = 0;
let h = 0;

class Tile{
  constructor(lane,w,h){
    this.lane= lane;
    this.t=w;
    this.w = w/4 - 2;
    this.h = h/5;
    this.x = 1 + this.lane*w/4;
    this.y = 0;
    // this.speed = 10;
    // this.once = true;
    // this.trolled = false;
  }

  show() {
    push();
      translate(this.x, this.y);
      rectMode(CENTER);
      rect(this.w/2,this.h/2,r*this.w,r*this.h+a);
    pop();
  }
}

function setup() {
  createCanvas(windowWidth/2, windowHeight);
  background (255);
  //canvas.center("horizontal");
  w = width;
  h = height;
}

function draw() {
  // framerate(30);
  line(w/4, 0, w/4, h);
  line(2 * w/4, 0,2 * w/4, h);
  line(3 * w/4, 0, 3 * w/4, h);
  line(0, 4 * h/5.5, width, 4 * h/5.5);
}

















// let lineWidth = 3;
// let w = 0;
// let h = 0;

// class Tile{
//   constructor(lane,w,h){
//     this.lane= lane;
//     this.t=w;
//     this.w = w/4 - 2;
//     this.h = h/5;
//     this.x = 1 + this.lane*w/4;
//     this.y = 0;
//     // this.speed = 10;
//     // this.once = true;
//     // this.trolled = false;
//   }

//   show() {
//     push();
//       translate(this.x, this.y);
//       rectMode(CENTER);
//       rect(this.w/2,this.h/2,r*this.w,r*this.h+a);
//     pop();
//   }
// }

// tiles = [];

// function columns() {
//   let w = width / 4 ;
//   frameRate(30);
//   strokeWeight(lineWidth);
//   line(lineWidth, 0, lineWidth, height);
//   line(w * 1, 0, w * 1, height);
//   line(w * 2, 0, w * 2, height);
//   line(w * 3, 0, w * 3, height);
//   line(width - lineWidth, 0, width - lineWidth, height);
//   line(0, 4 * height/5.5, width, 4 * height/5.5);
//   tiles[0].show();
// }


// function setup() {
//   let canvas = createCanvas(windowWidth/2, windowHeight);
//   canvas.center("horizontal");
//   columns();
//   tiles.push(new Tile(0));
//   // gameOver();
// }


// function gameOver() {
//   noLoop();
//   fill(0);
//   textAlign(CENTER);
//   textSize(100);
//   text("Try Again!", width / 2, height / 2);
// }

//https://www.youtube.com/watch?v=1Izg1eHFsUw
//https://www.youtube.com/watch?v=554VpvX2m4E