const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//declare variables
var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var slingShot;
var polygon_img;
var b1,b2,b3,b4,b5,b6,b7,b8,b9;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block214,block15,block16;
function preload(){
  //load polygon image
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);

  //create engine
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  // create ground
  ground = new Ground();

  // create stands
  stand1 = new Stand(400,300,250,10);
  stand2 = new Stand(715,200,200,10);
 
  //create blocks for stand 1
  block1 = new Block(300,255,30,40);
  block2 = new Block(330,255,30,40);
  block3 = new Block(360,255,30,40);
  block4 = new Block(390,255,30,40);
  block5 = new Block(420,255,30,40);
  block6 = new Block(450,255,30,40);
  block7 = new Block(480,255,30,40);
  block8 = new Block(330,215,30,40);
  block9 = new Block(360,215,30,40);
  block10 = new Block(390,215,30,40);
  block11 = new Block(420,215,30,40);
  block12 = new Block(450,215,30,40);
  block13 = new Block(360,175,30,40);
  block14 = new Block(390,175,30,40);
  block15 = new Block(420,175,30,40);
  block16 = new Block(390,135,30,40);

  //create blocks for stand 2
  b1 = new Block(640,155,30,40);
  b2 = new Block(670,155,30,40);
  b3 = new Block(700,155,30,40);
  b4 = new Block(730,155,30,40);
  b5 = new Block(760,155,30,40);
  b6 = new Block(670,115,30,40);
  b7 = new Block(700,115,30,40);
  b8 = new Block(730,115,30,40);
  b9 = new Block(700,75,30,40);

  //create the polygon
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  //create the slinshot
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}

function draw() {
  background("lavender"); 
  
  //add text
  textSize(20);
  textFont("Snap ITC")
  fill("hotpink");
  text("Drag the polygon to destroy the blocks & press space get more chances",40,30);

  //display ground
  ground.display();

  //display stands
  stand1.display();
  stand2.display();

  //display blocks
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  //stand2 blocks
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();

  //add image to the polygon
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  //display slingshot
  slingShot.display();
  
}

function mouseDragged(){
  //move the polygon along with the sling
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  //release the polygon from the sling
  slingShot.fly();
}

function keyPressed(){
  //reset the polygon's positon
 if(keyCode === 32)
 {
   slingShot.attach(this.polygon);
 }
}