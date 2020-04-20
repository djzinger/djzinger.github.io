var scarySound;

function preload() {
  scarySound = loadSound("Villainous.mp3");  
}

function setup() {
    createCanvas(windowWidth, windowHeight,WEBGL);
    scarySound.play();
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }  
  
  function draw() {
    background(200);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    sphere(150);
  }
  
  function mouseClicked(event) {
    remove();
  }
  