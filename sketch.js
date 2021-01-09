const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ground;
var div1, div2, div3, div4, div5, div6, div7, div8;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  ground = new Ground(480,790,950,10);
  // div1 = new Division(10,680,10,200);
  // div2 = new Division(110,680,10,200);
  // div3 = new Division(210,680,10,200);
  // div4 = new Division(310,680,10,200);
  // div5 = new Division(410,680,10,200);
  // div6 = new Division(510,680,10,200);
  // div7 = new Division(610,680,10,200);
  // div8 = new Division(710,680,10,200);
  

  for(var k = 0; k<=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  
  for(var j = 75; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for(var j = 75; j<=width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }
  
}

  

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
  // div1.display();
  // div2.display();
  // div3.display();
  // div4.display();
  // div5.display();
  // div6.display();
  // div7.display();
  // div8.display();
  if(frameCount&60===0){
    particles.push(new Particle(random(width/2-10,width/2 +10),10,10));
  }
  for(var j=0; j<particles.length; j++){
    particles[j].display();
  }
  for(var k=0; k<divisions.length; k++){
    divisions[k].display();
  }
  for(var j=0; j<plinkos.length; k++){
    plinkos[j].display();
  }
  drawSprites();
}