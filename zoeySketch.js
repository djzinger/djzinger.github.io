var scarySound;

function preload() {
  soundClip = loadSound('Symphony5.mp3');  
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    soundClip.play(); 
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }  
  
  function draw() {

    background(200);

    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    sphere(150);

    if (soundClip.isPlaying()) {
      background(255, 0, 0);
    } 
    else {
      background(0, 255, 0);
      noLoop();
    }    

  }
  