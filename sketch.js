var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud;
var r
var cloudImg;




function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");

  
  groundImage = loadImage("ground2.png");
  
 cloudImg = loadImage('cloud.png');
  
}


function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
   
  // r = Math.round(random(100, 300));
 // r = round(random(100, 300));
 //  console.log(r)
 
}

function draw() {
  //set background color
  background(180);
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 148) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //call the function of spawn clouds
  spawnCloud();
  //console.log(frameCount)
  drawSprites();
  
}


//user defined 
function spawnCloud()
{
  if(frameCount% 60 === 0)
  {
    //cloud = createSprite(600,round(random(10, 100)),20,20);
    cloud = createSprite(600,10,20,20) 
    cloud.velocityX = -4;
    cloud.addImage(cloudImg);
    cloud.scale = 0.5
    cloud.y = Math.round(random(10,100))
    console.log('cloud depth: ', cloud.depth);
    console.log('trex depth: ', trex.depth);

    trex.depth = cloud.depth +1

    
  }

 

}




