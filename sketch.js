const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var ground;

function setup() {
  var canvas = createCanvas(880,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(340, 790, 1500, 20);

  for(var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }
  
  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }
  
  for(var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175));
  }

  for(var j = -10; j <= width - 20; j = j + 50){
    plinkos.push(new Plinko(j, 275));
  }

  for(var j = -35; j <= width - 30; j = j + 50){
    plinkos.push(new Plinko(j, 375));
  }
}

function draw() {
  background("black");
  Engine.update(engine);

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
  }

  for(var a = 0; a < particles.length; a ++){
    particles[a].display();
  }
  
  for(var k = 0; k < divisions.length; k ++){
    divisions[k].display();
  }
  
  for(var j = 0; j < plinkos.length; j ++){
    plinkos[j].display();
  }

  ground.display();
}