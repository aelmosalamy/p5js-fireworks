var fireworks = [];
var gravity;
// Increase this value for more fireworks!
var rate = 0.25

function setup() {
  createCanvas(1280, 720);
  fill(255);
  stroke(255);
  strokeWeight(4);
  textSize(64);
  textAlign(CENTER);
  gravity = createVector(0, 0.2);
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 25);
  if (random(1) < rate) {
    fireworks.push(new Firework())
  }

  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
  noStroke();
  text('Fireworks', width / 2, height / 2);
}

function mouseClicked() {
  saveCanvas('canvas-snapshot.jpg');
  return false;
}
