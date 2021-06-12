const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;


var backgroundImg;
var snow;
var engine,world;
var character,charImg;
var array=[];

function preload() {
  backgroundImg = loadImage("snow1.jpg");
  charImg=loadImage("character2.png");
}

function setup() {
  createCanvas(800,400);
  
  engine=Engine.create();
  world=engine.world;

  array.push(new Snow())
  //snow = new Snow(368, 241, 50, 50);
  //snow1 = new Snow(600, 200, 50, 50);
  //snow2 = new Snow(800, 200, 50, 50);
  //snow3 = new Snow(190, 327, 50, 50);
  //snow4 = new Snow(700, 500, 50, 50);
  //snow5 = new Snow(900, 800, 50, 50);
  //snow6 = new Snow(41, 20, 50, 50);
  //snow7 = new Snow(216 , 75, 50, 50);
  //snow8 = new Snow(607, 18, 50, 50);
  //snow9 = new Snow(426, 33, 50, 50);
  //snow10 = new Snow(56, 231, 50, 50);

   character = createSprite (597, 250, 50, 50);
   
    character.addImage(charImg);
    character.scale=0.2;


}

function draw() {
  background(backgroundImg);  

  Engine.update(engine);
  for(s of array){
    s.render();
    s.update();
    s.display()
  }
  //snow.display();
  //snow1.display();
  //snow2.display();
 // snow3.display();
  //snow4.display();
  //snow5.display();
  //snow6.display();
  //snow7.display();
  //snow8.display();
  //snow9.display();
  //snow10.display();
  character.display();
  
  console.log(mouseX,mouseY);

  drawSprites();
}