var bg , bgimg;
var snowfall , snowimg ,snowgroup
var human , humanimg

function preload() {
  
  bgimg=loadImage("snow2.jpg")
  humanimg = loadImage("huma.png")
  snowimg = loadImage("snow4.webp")
}


function setup() {
  createCanvas(2000,2000);

   bg = createSprite(400, 200, 50, 50);
   bg.addImage(bgimg)

   human = createSprite(200,400,50,50)
   human.addImage(humanimg)
   
   snowgroup = new  Group();

}

function draw() {
  background(255,255,255);  

if(keyDown(RIGHT_ARROW)){

  human.x += 5 ;

}
if(keyDown(LEFT_ARROW)){

  human.x -= 5 ;

}

  drawSprites();

  if ( frameCount%250 === 0){
    var snow = createSprite(200,-50)
    snow.addImage(snowimg);
    snow.scale = 0.1;
    snow.velocityY = 2;
    snow.lifetime = 600
    snow.x = Math.round(random(100 , 1000));
    snowgroup.add(snow);
}
}