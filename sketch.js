
var camX, camY, camZ;
var planet;
var graph;

var boxes = [];
var music;



function preload(){
  planet=loadImage('pianeta1.jpg');
  music=loadSound('music.wav');
  boxes[0]=loadImage('B.png');
  boxes[1]=loadImage('O.png');
  boxes[2]=loadImage('X.png');
  boxes[3]=loadImage('E.png');
  boxes[4]=loadImage('S.png');
}

function setup(){
  createCanvas(1020, 780, WEBGL);
  strokeWeight(2);
  camX=camY=0;
  camZ=115;
  music.play();
  graph=createGraphics(600,200);
  graph.background(20);

  //frameRate(1);
}

function draw(){

  background(20);

//ANIMATION
  camera(camX,camY,camZ,0,0,0,0,1,0);
  camZ+=5;
  camY++;
  print(frameCount);

  //X BOX
  push();
  translate(0,0,0);
  texture(boxes[2]);
  box(100);
  pop();

  //E BOX
  push();
  translate(170,0,0);
  texture(boxes[3]);
  box(100);
  pop();

  //S BOX
  push();
  translate(340,0,0);
  texture(boxes[4]);
  box(100);
  pop();

  //O BOX
  push();
  translate(-170,0,0);
  texture(boxes[1]);
  box(100);
  pop();

  //B BOX
  push();
  translate(-340,0,0);
  texture(boxes[0]);
  box(100);
  pop();

  //EARTH
  push();
  texture(planet);
  translate(0,height-100,-100);
  rotateY(frameCount*0.01);
  sphere(500);
  pop();



  //STOP
  if(frameCount>=250) {
    graph.fill(150,255,200);
    graph.textSize(50);
    graph.textAlign(CENTER);
    graph.text("From everyone...\n...To everyone!",250,100);
    push();
    translate(50,-300);
    texture(graph);
    box(600,300,0);
    pop();
    noLoop();
  }

}
