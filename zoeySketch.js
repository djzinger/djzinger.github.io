var scarySound;

function preload() {
  scarySound = loadSound('Villainous.mp3');  
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }  
  
  function draw() {
    background(200);
    scarySound.play();
   // rotateX(frameCount * 0.01);
   // rotateY(frameCount * 0.01);
   // sphere(150);
  }
  
  function mouseClicked(event) {
    if (scarySound.isPlaying()) {
      background(255, 0, 0);
    } 
    else {
      background(0, 255, 0);
    }    
    remove();
  }
