
function preload()
{}

function setup() {
  createCanvas(9000, 668);
  var  xValue=0
  var gap=random([30,60,80])
  for (i = 0; i <6; i++){
 platform=new Platform(xValue)
 xValue=xValue+platform.rw
}
}

function draw() {
  background('skyblue'); 
 drawSprites();
}

