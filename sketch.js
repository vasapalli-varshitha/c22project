const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var con_1;
var con_2;
var con_3;
var con_4;
var con_5;

var ball_1;
var ball_2;
var ball_3;
var ball_4;
var ball_5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution: 0.5
	  }

  ball_1= Bodies.circle(200,50,10,ball_options);
  World.add(world,ball_1);

  ball_2= Bodies.circle(200,50,10,ball_options);
  World.add(world,ball_2);

  ball_3= Bodies.circle(200,50,10,ball_options);
  World.add(world,ball_3);

  ball_4= Bodies.circle(200,50,10,ball_options);
  World.add(world,ball_4);

  ball_5= Bodies.circle(200,50,10,ball_options);
  World.add(world,ball_5);

  con_1 = Matter.Constraint.create({
	pointA:{x:300,y:100},
	bodyB:ball_1,
	pointB:{x:0,y:0},
	length:100,
	stiffness:0.1
  });

World.add(world,con_1);

con_2 = Matter.Constraint.create({
	pointA:{x:350,y:100},
	bodyB:ball_2,
	pointB:{x:0,y:0},
	length:100,
	stiffness:0.1
  });

World.add(world,con_2);

con_3 = Matter.Constraint.create({
	pointA:{x:400,y:100},
	bodyB:ball_3,
	pointB:{x:0,y:0},
	length:100,
	stiffness:0.1
  });

World.add(world,con_3);

con_4 = Matter.Constraint.create({
	pointA:{x:450,y:100},
	bodyB:ball_4,
	pointB:{x:0,y:0},
	length:100,
	stiffness:0.1
  });

World.add(world,con_4);

con_5 = Matter.Constraint.create({
	pointA:{x:500,y:100},
	bodyB:ball_5,
	pointB:{x:0,y:0},
	length:100,
	stiffness:0.1
  });

World.add(world,con_5);



	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);



	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  line(con_1.pointA.x,con_1.pointA.y,ball_1.position.x,ball_1.position.y);
  line(con_2.pointA.x,con_2.pointA.y,ball_2.position.x,ball_2.position.y);
  line(con_3.pointA.x,con_3.pointA.y,ball_3.position.x,ball_3.position.y);
  line(con_4.pointA.x,con_4.pointA.y,ball_4.position.x,ball_4.position.y);
  line(con_5.pointA.x,con_5.pointA.y,ball_5.position.x,ball_5.position.y);
  
  //create ellipse shape for multiple bobs here
  ellipse(ball_1.position.x,ball_1.position.y,10);
  ellipse(ball_2.position.x,ball_2.position.y,10);
  ellipse(ball_3.position.x,ball_3.position.y,10);
  ellipse(ball_4.position.x,ball_4.position.y,10);
  ellipse(ball_5.position.x,ball_5.position.y,10);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
  if(keyCode===RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball_1,{x:0,y:0},{x:0.05,y:0});
    }

    if(keyCode===DOWN_ARROW)
    {
      Matter.Body.applyForce(ball_2,{x:0,y:0},{x:0.05,y:0});
    }
	

  if(keyCode===LEFT_ARROW)
    {
      Matter.Body.applyForce(ball_3,{x:0,y:0},{x:0.05,y:0});
    }

    if(keyCode===UP_ARROW)
    {
      Matter.Body.applyForce(ball_4,{x:0,y:0},{x:0.05,y:0});
    }

	if(keyCode==="5")
    {
      Matter.Body.applyForce(ball_4,{x:0,y:0},{x:0.05,y:0});
    }

}