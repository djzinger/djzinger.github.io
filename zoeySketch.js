var scarySound;

function preload() {
  scarySound = loadSound("Villainous.mp3");  
}

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
    scarySound.play();
    sphere(150);
  }
  