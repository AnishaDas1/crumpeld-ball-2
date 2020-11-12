
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin1,paper1,ground1;
var world;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1=new Dustbin(1200,580);
	paper1=new Paper(200,450,60);
	ground1=new Ground(800,670,1600,20);

	

	


	Engine.run(engine);
	
  
}


function draw() {
Engine.update(engine);
  background("white");
  ground1.display();

  paper1.display();
  dustbin1.display();
  

  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:170,y:-260});

	}
}



