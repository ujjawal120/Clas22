var fixedRect, movingRect,gameObject4,gameObject3,gameObject2,gameObject1

function setup() {
  createCanvas(800,800);
  fixedRect=createSprite(250,250,50,80);
  movingRect=createSprite(400,250,80,30);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";

  gameObject1=createSprite(100,100,50,50);
  gameObject1.shapeColor="green";
  gameObject2=createSprite(200,100,50,50);
  gameObject2.shapeColor="green";
  gameObject3=createSprite(100,300,50,50);
  gameObject3.shapeColor="green";
  gameObject4=createSprite(400,100,50,50);
  gameObject4.shapeColor="green";

  gameObject1.velocityY=1;
  gameObject3.velocityY=-1;
}


function draw() {
  background(0,0,0); 
  movingRect.y=World.mouseY; 
  movingRect.x=World.mouseX; 


  if(isTouching(gameObject2,movingRect)){
    gameObject2.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
else{
  gameObject2.shapeColor="green";
  movingRect.shapeColor="green";
}
 
 bounceOff(gameObject1,gameObject3);
  drawSprites();
 
}

function isTouching(object1,object2){
  if(object2.x-object1.x < object2.width/2+object1.width/2&&
    object1.x-object2.x< object2.width/2+object1.width/2&&
    object2.y-object1.y < object2.height/2+object1.height/2&&
    object1.y-object2.y< object2.height/2+object1.height/2){
    return true;
  }
  else{
   return false;
  }

}


function bounceOff(object1,object2){
 if(object2.x-object1.x < object2.width/2+object1.width/2&&
  object1.x-object2.x< object2.width/2+object1.width/2 ){
   object1.velocityX=object1.velocityX*(-1); 
   object2.velocityX=object2.velocityX*(-1); 
  }
 if( object2.y-object1.y < object2.height/2+object1.height/2&&
  object1.y-object2.y< object2.height/2+object1.height/2){
    object1.velocityY=object1.velocityY*(-1); 
    object2.velocityY=object2.velocityY*(-1);  
  }

}