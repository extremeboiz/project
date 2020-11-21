
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survival_time = 0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10)
  ground.velocityX= -4
  ground.x=ground.width/2
  console.log(frameCount)
  
}


function draw() {
  background(255)
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
  if(keyDown("space")){
    monkey.velocityY = -12
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground)
  
  banana();
  
  stroke("black")
  textSize(20)
  fill("black")
  survival_time=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survival_time, 100,50)
  
  drawSprites()
}


function banana() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(200,200);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    
  }
  
}

function rock() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var object = createSprite(400,315,20,20);

    object.addImage(obstacleImage);

    object.velocityX = -3;
    
     //assign lifetime to the variable
    object.lifetime = 200;
    
    //adjust the depth
    object.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    
  }
  
}


