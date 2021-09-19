var path, pathImg
var runner, runnerImg

function preload(){
pathImg = loadImage("path.png")
runnerImg = loadAnimation("runner-1.png","runner-2.png")
}

function setup(){
  console.log("setup")
  createCanvas(400,400);
  path = createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY = 4 

  runner = createSprite(200,350,80,80)
  runner.addAnimation("runner", runnerImg)
  runner.scale = 0.1
  
}

function draw() { 
  console.log("draw")
  background(0);
  runner.x = World.mouseX
  drawSprites();
  
}
