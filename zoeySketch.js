function setup() {
    createCanvas(windowWidth, windowHeight,WEBGL);
    background(220);
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }  
  
  function draw() {
    background(200);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(50);
    sphere(150);
  }
  