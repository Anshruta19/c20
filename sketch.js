function setup() {
  createCanvas(600,400);
  noStroke();
}

function draw() {
  background(204);
  let x1 = map(mouseX,10, width, 25, 75);
  ellipse(x1, 25, 100, 100);
  //This ellipse is constrained to the 0-100 range
  //after setting withinBounds to true
  let x2 = map(mouseX, 0, width, 0, 100, true);
  ellipse(x2, 75, 25, 25);
}