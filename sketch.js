
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var world;
var box1,box2,box3,box4;
var ground;
var paper;
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;	

	
	paper = new Paper(70,600,2);
	ground = new Ground(400,690,800,10);
	box1 = createSprite(540,685,230,12);
	box2 = createSprite(432,600,12,160);
	box3 = createSprite(648,600,12,160);
	box1.shapeColor = color("white");
	box2.shapeColor = color("white");
	box3.shapeColor = color("white");
	box4 = new Dustbin(540,590,229,190);
	
	
	
	Engine.run(engine);
  
}


function draw() {

  background("red");
  paper.display();
  ground.display(); 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x: 9,y: -15})
	}
}

