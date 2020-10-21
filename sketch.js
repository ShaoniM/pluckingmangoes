
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree, stone1, ground1, boy;
var mango1,mango2,mango3,mango4,mango5;

function preload()
{
	boyImage=loadImage("boy.png");
	
	treeImage=loadImage("tree.png");
stoneImage=loadImage("stone.png");
mangoImage=loadImage("mango.png");
}

function setup() {
	var canvas = createCanvas(2000, 2000);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(600,650,2000,100);
  tree = createSprite(1000,350);
  tree.addImage(treeImage);
  tree.scale=0.5;

boy = createSprite(200,570,100,100);
boy.addImage(boyImage);
boy.scale=0.15;

stone1 = new stone(1000,200,60,60);

mango1= new mango(100,100,50,50);
mango2= new mango(1050,100,50,50);
mango3= new mango(1075,150,50,50);
mango4= new mango(1100,150,50,50);
mango5= new mango(1300,360,50,50);


 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine);
  boy.display();
  tree.display();
  ground1.display();

  stone1.display();

  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango1.display();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}




