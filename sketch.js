
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
options={isStatic:true,restitution:0.2}
	//Create the Bodies Here.
c1=Bodies.circle(20,600,20)
World.add(world,c1)

ground=Bodies.rectangle(400,630,800,20,options)
World.add(world,ground)

rectangle2=Bodies.rectangle(450,530,20,150,options)
World.add(world,rectangle2)
rectangle1=Bodies.rectangle(580,530,20,150,options)
World.add(world,rectangle1)


	Engine.run(engine);
  
}


function draw() {
	background(0);

if(keyIsDown(RIGHT_ARROW))
{
	Body.applyForce(c1,{x:0,y:0},{x:0.004,y:-0.009})
}
if(keyIsDown(LEFT_ARROW))
{
	Body.applyForce(c1,{x:0,y:0},{x:-0.004,y:-0.009})
}
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20)
  rect(rectangle2.position.x,rectangle2.position.y,20,180)
  rect(rectangle1.position.x,rectangle1.position.y,20,180)


  ellipseMode(RADIUS)
  ellipse(c1.position.x,c1.position.y,20,20);
  
  
  drawSprites();
 
}



