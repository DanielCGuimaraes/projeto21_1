var ball
var wall_1
var wall_2
var ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
	 	restitution: 1,
	 	frictionAir: 0.01,
		
	}
	
	var wall_options = {
		isStatic:true	

	}

	buttom = createImg("up.png")
  	buttom.position(20,50)
  	buttom.size(30,30)
  	buttom.mouseClicked(force)


	ball = Bodies.circle(300,550,30,ball_options)
	World.add(world,ball)
	wall_1 = Bodies.rectangle(550,550,20,100,wall_options)
	World.add(world,wall_1)
	wall_2 = Bodies.rectangle(750,550,20,100,wall_options)
	World.add(world,wall_2)
	ground = Bodies.rectangle(300,600,1000,20,wall_options)
	World.add(world,ground)
	
	Engine.run(engine);

	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  background(50);
  drawSprites();

  ellipse(ball.position.x,ball.position.y,30)

  rect(wall_1.position.x,wall_1.position.y,20,100)	
  rect(wall_2.position.x,wall_2.position.y,20,100)
  rect(ground.position.x,ground.position.y,1000,20)
	
}

function force()
{
  Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
  Body.applyForce(ball,{x:0,y:0},{x:0,y:0.15});

}
