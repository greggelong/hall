const step = 50;
const amp = 20;
const freq = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noFill();
}

function draw() {
  background(0);
  beginShape(LINES);
  stroke(0, 255, 0);
  for (let z = 500; z > -1900; z -= step) {
    let dx = amp * sin(z * freq + frameCount / 10);
    let dxPrev = amp * sin((z + step) * freq + frameCount / 10);
    vertex(100 + dx, 100, z - step);
    vertex(100 + dx, -100, z - step);
    vertex(-100 + dx, 100, z - step);
    vertex(-100 + dx, -100, z - step);
   // if(z%4==0) point(-100+dx,100,z)
    for (let x = -100; x <= 100; x += 10) {
      vertex(x + dxPrev, 100, z);
      vertex(x + dx, 100, z - step);
    }
    for (let x = 100; x >= -100; x -= 10) {
      vertex(x + dxPrev, -100, z);
      vertex(x + dx, -100, z - step);
    }
  }
  endShape();
}