// Terrain Generation
// Sadique
// Oct 21, 2022

let theHeights = [];
let startingLocation = 0;
let time;

function setup() {
  createCanvas(windowWidth, windowHeight);
  theHeights = generateHeights(20000);
}

function draw() {
  background("white");
  for (let i = startingLocation; i < startingLocation + width; i++) {
    displayRectangle(i-startingLocation, theHeights[i], 100);
  }
  startingLocation += 1;
}

function displayRectangle(x, rectHeight, rectWidth) {
  let y = height - rectHeight;
  rect(x, y, rectWidth, rectHeight);
}

function generateHeights(howMany) {
  let tempArray = [];
  let time = random(10000);
  for (let i = 0; i < howMany; i++) {
    tempArray.push(noise(time) * height);
    time += 1;
  }
  return tempArray;
}