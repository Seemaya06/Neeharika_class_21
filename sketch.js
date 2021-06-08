
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ball;
var ground;
var box;
var ball2;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,390,400,20);

  ground1 = new Ground(100,100,400,20);
}



function draw() 
{
  background(51);
  Engine.update(engine);

  ground.show();
  ground1.show();
  

  
}

