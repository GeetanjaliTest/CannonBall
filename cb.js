const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var balls=[];

/*var arr=[10,"test",90,true];
console.log(arr);
console.log(arr[3]);
console.log(arr.length);

arr.push("falseTest");
console.log(arr);
arr.push("falseTest1",100);
console.log(arr);*/



function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);
  //cannonBall = new CannonBall(cannon.x, cannon.y);

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  ground.display();

  for(var i=0; i< balls.length; i++){
    showCannonBalls(balls[i],i);
  }
  

  cannon.display();
  tower.display();
  //cannonBall.display()
 
}






function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    cannonBall.shoot()
  }
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    var cannonBall= new CannonBall(cannon.x,cannon.y);
    balls.push(cannonBall);
  }
}

function showCannonBalls(ball,index) {
  ball.display();
}


