const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myWorld,myEngine;
var ground,ball;



function setup() {
 myEngine=Engine.create();
 myWorld = myEngine.world;
 ground=Bodies.rectangle(200,300,400,10,{isStatic : true});
 World.add(myWorld,ground);

 ball = Bodies.circle(200,200,25,{restitution : 1});
 World.add(myWorld,ball);

 console.log(ground);
 
}

function draw() {
  background("black");
  Engine.update(myEngine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);

}