class Ellipse {
  constructor(x, y, size, velocity) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.velocity = velocity;
  }
  display() {
    ellipse(this.x, this.y, this.size, this.size, this.velocity);
  }

  move() {
    this.y += this.velocity;
    this.x += this.velocity;

    if (this.y <= 0 || this.y + this.size >= height) {
      this.velocity *= -1;
    }
  }
}

let myEllipse;

function setup() {
  createCanvas(400, 400);
  myEllipse = new Ellipse(50, 50, 5, 1);
  myEllipse2 = new Ellipse(100, 50, 10, 1.2);
}
function draw() {
  background(0);
  myEllipse.display();
  myEllipse.move();
  myEllipse2.display();
  myEllipse2.move();
}
