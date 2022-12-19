// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let triangleVertices = [
  {x: 350, y: 150},
  {x:100, y: 500},
  {x: 600, y: 500}
];

let theDepth = 0;

let colours = ["purple", "indigo", "blue", "green", "yellow", "orange", "red"];

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(220);
  sierpinski(triangleVertices, theDepth);
}

function mousePressed() {
  if (theDepth < 6) {
    theDepth++;
  }
}

function sierpinski(points, depth) {
  fill(colours[depth]);
  noStroke();
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);
  
  if (depth > 0) {
    sierpinski([points[0], getMidpoint(points[0], points[1]), getMidpoint(points[0], points[2])], depth - 1);

    sierpinski([points[1], getMidpoint(points[0], points[1]), getMidpoint(points[1], points[2])], depth - 1);
  
    sierpinski([points[2], getMidpoint(points[2], points[1]), getMidpoint(points[0], points[2])], depth - 1);
  }
}

function getMidpoint(point1, point2) {
  let xDiff = point1.x + point2.x;
  let yDiff = point1.y + point2.y;
  let midpoint = {x: xDiff/2, y: yDiff/2};
  return midpoint;
}