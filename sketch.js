const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint ;

var once_pressed = false ;

function preload(){
	boyImg = loadImage("images/boy.png");
	stoneImg = loadImage("images/stone.png");
	treeImg = loadImage("images/tree.png");
}

function setup() {
	
	createCanvas(1300, 800);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine); 

	ground = new Ground(width/2,height-40,width,90);

	stone = new Stone(170,480,20); // actual 250 and 350

	chain = new Chain(stone.body,{x:170,y:480});

	mango1 = new mango(900,200,30);

	mango2 = new mango(950,250,25);

	mango3 = new mango(800,200,30);

	mango4 = new mango(1050,300,25);

	mango5 = new mango(1150,200,30);

	mango6 = new mango(1000,150,25);

	mango7 = new mango(1060,200,30);

	mango8 = new mango(1150,300,30);

	mango9 = new mango(830,310,30);

}
function draw(){

	background("lightblue");

	imageMode(CENTER);
	image(boyImg,250,600,200,300);
	image(stoneImg,315,612,50,55);
	image(treeImg,950,height/2,700,750);

	textDisplay();

	chain.display();
	ground.display();
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();

	detectCollision(mango1);
	detectCollision(mango2);
	detectCollision(mango3);
	detectCollision(mango4);
	detectCollision(mango5);
	detectCollision(mango6);
	detectCollision(mango7);
	detectCollision(mango8);
	detectCollision(mango9);

} 
function mouseDragged(){
	if(chain.chain.bodyA != null){
		Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	}
}
function mouseReleased(){
	chain.fly();
	once_pressed = true
}
function keyPressed(){
	var stonePos = stone.body.position ;
	if(keyCode === UP_ARROW && (stonePos.y > 680 || stonePos.x < 0 || 
		stonePos.x > width || stonePos.y < -100)){
		Matter.Body.setPosition(stone.body,{x:170,y:480});
		Matter.Body.setVelocity(stone.body,{x:0,y:0});
		chain.attach(stone.body);
	}
}
function detectCollision(mango){
	var stonePos = stone.body.position ;
	var mangoPos = mango.body.position ;
	var distance = int(dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y));
	if(distance <= stone.radius + mango.radius){
		Matter.Body.setStatic(mango.body,false);
		Matter.Body.setVelocity(stone.body,{x:0,y:3});
	}
}
function textDisplay(){
	if(once_pressed === true){
		textSize(35);
		textFont("Calibri");
		textAlign(CENTER);
		text("Press 'UP ARROW' key for another chance",375,100);
	}
	else {
		textSize(35);
		textFont("Calibri");
		textAlign(CENTER);
		text("Drag the stone and hit the mangoes",350,100);
	}
}