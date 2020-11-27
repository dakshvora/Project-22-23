//GLOBAL VARIABLES
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
//modules fro Matter.js
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// IMAGES LOADING
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	



//your engine created form matter.js engine
	engine = Engine.create();
	///world creation
	world = engine.world;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 690, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 

	//create package

	packet = Bodies.rectangle(400,100, 10, 10 , {isStatic:true, restitution:0.8} );
	World.add(world, packet);

	//create helicoptre
	helicopter = Bodies.rectangle(400,100, 10, 10 , {isStatic:true} );
	World.add(world, helicopter);

	//bin
	left = Bodies.rectangle(290,580, 20, 200 , {isStatic:true} );
	World.add(world, left);
	right = Bodies.rectangle(510,580, 20, 200 , {isStatic:true} );
	World.add(world, right);
	base = Bodies.rectangle(400,670, 200, 20 , {isStatic:true} );
	World.add(world, base);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);
  //packageSprite.x= packageBody.position.x 
  //packageSprite.y= packageBody.position.y 
  //drawSprites();
  fill("brown")
  rect(ground.position.x,ground.position.y, 800,10);
  imageMode(CENTER);
  fill("yellow")
  image(packageIMG,packet.position.x,packet.position.y, 50,50);
  fill("black");
  image(helicopterIMG,helicopter.position.x,helicopter.position.y, 400,100);
  fill("red")
  rect(left.position.x,left.position.y, 20,200);
  fill("red")
  rect(right.position.x,right.position.y, 20,200);
  fill("red")
  rect(base.position.x,base.position.y, 200,20);
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packet, false);

    
  }
}



