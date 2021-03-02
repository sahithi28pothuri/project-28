const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var ground;
var boy;
var tree;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var mango11, mango12, mango13, mango14, mango15, mango16, mango17, mango18;
var slingShot, stone;
var gameState = "onhold"
function preload(){
  boy_img = loadImage("images/boy.png");
}


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,20);


	tree = new Tree(600,510,70,150);

	mango1 = new Mango(610,440,20);
	mango2 = new Mango(580,460,20);
	mango3 = new Mango(640,450,20);
	mango4 = new Mango(540,480,20);
	mango5 = new Mango(560,430,20);
	mango6 = new Mango(630,420,20);
	mango7 = new Mango(650,410,20);
	mango8 = new Mango(560,400,20);
	mango9 = new Mango(590,390,20);
	mango10 = new Mango(610,410,20);
	mango11 = new Mango(630,370,20);
	mango12 = new Mango(565,360,20);
	mango13 = new Mango(540,480,20);
	mango14 = new Mango(510,460,20);
	mango15 = new Mango(610,350,20);
	mango16 = new Mango(700,480,20);
	mango17 = new Mango(680,460,20);
	mango18 = new Mango(680,430,20);

	stone = new Stone(70,580,20);
	slingShot = new Sling(stone.body, {x:160,y:590});

}


function draw() {
  
  background(0,48,65);
  Engine.update(engine);
  rectMode(CENTER);

  image(boy_img,200,630,130,190);

  
  ground.display();
  tree.display();
  //mango1.display();
  mango2.display();
  //mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  //mango7.display();
  mango8.display();
  //mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  mango16.display();
  mango17.display();
  mango18.display();

  stone.display();
  slingShot.display();

  detecttouch(stone,mango18);
  detecttouch(stone,mango17);
  detecttouch(stone,mango16);
  detecttouch(stone,mango15);
  detecttouch(stone,mango14);
  detecttouch(stone,mango13);
  detecttouch(stone,mango12);
  detecttouch(stone,mango11);
  detecttouch(stone,mango10);
  detecttouch(stone,mango9);
  detecttouch(stone,mango8);
  detecttouch(stone,mango7);
  detecttouch(stone,mango6);
  detecttouch(stone,mango5);
  detecttouch(stone,mango4);
  detecttouch(stone,mango3);
  detecttouch(stone,mango2);
  detecttouch(stone,mango1);
  

}

function mouseDragged(){
  if(gameState==="onhold"){
    Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
  }
	
}

function mouseReleased(){
	slingShot.fly();
  gameState = "flying";
}

function keyPressed(){
	if(keyCode === UP_ARROW){
    gameState = "onhold";
		slingShot.attach(stone.body);
		Matter.Body.setPosition(stone.body,{x:70, y:580});
	}
}

function detecttouch(lstone,lmango){

  mangoBody=lmango.body.position;
  StoneBody=lstone.body.position;
  
  var distance=dist(StoneBody.x, StoneBody.y, mangoBody.x, mangoBody.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
      textSize(35);
      strokeWeight(5);
      text("press UP arrow to shot again",50,200);
    }

}



