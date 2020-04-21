var scarySound;

function preload() {
  scarySound = loadSound('Villainous.mp3');  
}

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
    cnv.mouseClicked(stopProgram);
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
  
  function stopProgram() {
    if (scarySound.isPlaying()) {
      background(255, 0, 0);
    } 
    else {
      background(0, 255, 0);
    }    
    remove();
  }
