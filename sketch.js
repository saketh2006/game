const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ninja,ninjaImage
var backgroundImage
var engine, world;



function preload(){
  backgroundImage= loadImage("images/back.gif");
}



function setup(){

createCanvas(900,600);
engine = Engine.create();
world = engine.world;
box1 =new Box(100,100,50,50);







}
function draw(){
background(backgroundImage);
Engine.update(engine);



box1.display();
  drawSprites();
}