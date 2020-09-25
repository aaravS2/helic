var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b1,b2,b3,b11,b22,b33;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(400 ,200, 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);


	
	b1=createSprite(400,650,200,20);
	b2=createSprite(300,600,10,200);
	b3=createSprite(500,600,10,200)

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
b11= Bodies.rectangle(400, 650, 200, 20 , {isStatic:true} );
	 World.add(world, b11);
	 b22 = Bodies.rectangle(300, 600, 10, 20 , {isStatic:true} );
	 World.add(world, b22);
	 b33 = Bodies.rectangle(500, 600, 10, 200 , {isStatic:true} );
 	World.add(world, b33);

	Engine.run(engine);
	
	
}


function draw() {
	Engine.update(engine)
	
  rectMode(CENTER);
  background(0);
  
  
b1.shapeColor="red"
b2.shapeColor="red"
b3.shapeColor="red"
 
	

	
b1.x =b11.position.x
		b1.y = b11.position.y
		b2.x =b22.position.x
		b2.y = b22.position.y
		b3.x =b33.position.x
		b3.y = b33.position.y


		packageSprite.x =packageBody.position.x
		packageSprite.y = packageBody.position.y




	

  keyPressed()
	
  
	
  

	
	
	
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false)
	
  }
}



