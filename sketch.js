class Ellipse {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  display() {
    ellipse(this.x, this.y, this.size, this.size);
  }

  move() {
    if (this.y < height) {
      this.y += 1; // Move the ellipse down each frame
      console.log("1");
    } else if (this.y >= height) {
      // Check if the ellipse has moved beyond the canvas
      this.y -= 1;
      console.log("2");
    }
  }
}

let myEllipse;

function setup() {
  createCanvas(400, 400);
  myEllipse = new Ellipse(50, 50, 5);
  myEllipse2 = new Ellipse(100, 100, 10);
}
function draw() {
  background(0);
  myEllipse.display();
  myEllipse.move();
  myEllipse2.display();
}
