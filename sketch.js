var ship,shipMoving1,shipMoving2;

var sea,seaImg


function preload(){
  
 seaImg =loadImage("sea.png");
  shipMoving1=loadAnimation("ship-1.png","ship-2.png");
  shipMoving2=loadAnimation("ship-3.png","ship-4.png");
  
  
}

function setup(){
    createCanvas(400, 400);
   
  sea=createSprite(250,200,10,10);
  sea.addImage("sea",seaImg);
 sea.scale=0.25;  

  ship = createSprite(85,250,50,50);
  ship.addAnimation("ship",shipMoving1);
  ship.scale=0.25
  
}
  
function draw() {
    background(180);
  sea.velocityX=-2;
  if(sea.x<0){
     sea.x=250; 
     
     }
  if(keyDown("space")){
     ship.addAnimation("ship2",shipMoving2);
     
     }
  
  
  drawSprites();
  
  
}