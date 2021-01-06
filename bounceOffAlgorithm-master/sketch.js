var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
gameObject1 = createSprite(400,300,70,70);
 gameObject1.shapeColor = "green";
  gameObject1.debug = true;
   gameObject2 = createSprite(100,300,70,70);
    gameObject2.shapeColor = "green";
     gameObject2.debug = true;
      gameObject3 = createSprite(700,100,70,70);
       gameObject3.shapeColor = "green";
        gameObject3.debug = true;
         gameObject4 = createSprite(1000,100,70,70);
          gameObject4.shapeColor = "green";
           gameObject4.debug = true;
  gameObject1.velocityX = -5;
  gameObject2.velocityX = +5;
}

function draw() {
  background(0,0,0);  
bounceoff(gameObject1,gameObject2);
  
  drawSprites();
}
function bounceoff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
  object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
  object1.velocityY = object1.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
}



}
