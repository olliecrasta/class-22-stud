
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var rect1
var engine,world;
var object1

function setup() {

  canvas = createCanvas(400,400);
  

  engine = Engine.create();
  
  world = engine.world;
  
  object1 = Bodies.rectangle(300,100,100,100)
  
  World.add(world,object1)
  Engine.run(engine)
}

function draw() {
  console.log(object1.position.y)
  background(220,200,200);
  rectMode(CENTER)
  rect(object1.position.x,object1.position.y,100,100)
  drawSprites();
  
}