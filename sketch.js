var fixedRect, movingRect, rect1,rect2,fixedRect2,fixedRect3

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200,200,50,100);
  movingRect=createSprite(50,200,50,100)
  fixedRect2= createSprite(100,200,50,100);
  fixedRect3= createSprite(300,200,50,100);
  fixedRect.shapeColor="red";
  movingRect.shapeColor="green";
  fixedRect2.shapeColor="pink";
  fixedRect3.shapeColor="orange";
  fixedRect.debug=true;
  movingRect.debug=true;
  rect1= createSprite(0,200,20,20);
  rect2= createSprite(600,200,20,20);
  rect1.shapeColor="blue";
  rect2.shapeColor= "yellow";
  rect1.velocityX=2;
  rect2.velocityX=-2;

}

function draw() {
  background(0,0,0);  
  drawSprites();
movingRect.x=mouseX;
movingRect.y=mouseY;
if(isTouching(movingRect, fixedRect3)){
  fixedRect3.shapeColor="white";
  movingRect.shapeColor="blue";
}
  else {
    fixedRect3.shapeColor="orange";
  movingRect.shapeColor="green";
  }
  bounceOff(rect1,rect2);
}
// save here
 
