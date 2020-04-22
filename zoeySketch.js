var soundClip;

function preload() {
  soundClip = loadSound('Symphony5.mp3');  
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }  
  
  var timesExecuted = 0;
  var backgroundSwitch = true;

  function draw() {

    background(200);

    if (backgroundSwitch) {
      background(125, 0, 0);
      backgroundSwitch = false;
    } 
    else {
      background(0, 125, 0);
      backgroundSwitch = true;
    }    

    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    sphere(150);

  }
  