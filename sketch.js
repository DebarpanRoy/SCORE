const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies  

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;
var backgroundIMG;
 
var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";

function preload(){

backgroundIMG = loadImage("plinko.jpg");

}

function setup() {
  createCanvas(800,800);

 engine = Engine.create();
 world = engine.world;
 ground = new Ground(width/2, height, width, 20)
 
 for (var k = 0; k <=width; k = k + 80){
   divisions.push(new Divisions(k, height-divisionHeight/2,10, divisionHeight))
 }

 for (var j = 75; j <=width; j=j+50){
   plinkos.push(new Plinko(j,75))}

   for (var j = 50; j <=width-10 ; j=j+50){
    plinkos.push(new Plinko(j,175))
  }

  for (var j = 75; j <=width; j=j+50){
    plinkos.push(new Plinko(j,275))
  }

  for (var j = 50; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,375))
  }
  
 
}

function draw() {
  
  strokeWeight(5);
  stroke("black")

  background("black");
 
  Engine.update(engine);
  for (var i = 0; i<divisions.length; i++){
    divisions[i].display();
  }

  for (var i = 0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  if (frameCount% 60 === 0){
    particles.push(new Particle(random(width/2 -30,width/2 +30),10,10))
    score++;
  }

  for (var i = 0; i<particles.length; i++){
    particles[i].display();
  }
  ground.display();

  textSize(23)
  text(" 1 ", 5, 550);
  text(" 1", 80, 550);
  text(" 1 ", 160, 550);
  text(" 1 ", 240, 550);
  text(" 1 ", 320, 550);
  text(" 1 ", 400, 550);
  text(" 1 ", 480, 550);
  text(" 1 ", 560, 550);
  text(" 1 ", 640, 550);
  text(" 1 ", 720, 550);

  textSize(18);
  text("Score : "+score,20,40);
  fill("white");

  
  
}