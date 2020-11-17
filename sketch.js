
//restitution - bounciness
//namespacing
// making constants for Engine, World, Bodies
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
// making the var 
var world, engine;
var ground;
var box1;

function setup() {
  createCanvas(400,400);
  // creating the engine
  engine = Engine.create();
  // engine belongs to world constant
  world = engine.world
  // using the isStatic option 
  
  
  
  ground = new Ground(200,380,400,10);
  box1 = new Box(200,100,30,60);
  box2 = new Box(220,50,50,30); 
}

function draw() {
  background("pink");
  // updating the engine
  Engine.update(engine);
  rectMode(CENTER);
  // displaying the ground
  
  box1.display();
  box2.display();
  ground.display();
  drawSprites();
}