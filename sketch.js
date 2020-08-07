var fixedRect, movingRect


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 30);
fixedRect.shapeColor = "blue";
fixedRect.debug = true;
movingRect = createSprite(100, 300, 70, 80);
movingRect.shapeColor = "blue";
movingRect.debug = true;

}

function draw() {
  background(0,0,0); 
  movingRect.x= World.mouseX;
  movingRect.y= World.mouseY;
  console.log(movingRect.x - fixedRect.x); //-100
  console.log(fixedRect.width/2 + movingRect.width/2); //-60

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x  < fixedRect.width/2 + movingRect.width/2
     && movingRect.y- fixedRect.y < fixedRect.width/2 + movingRect.width/2
     && fixedRect.y - movingRect.y  < fixedRect.width/2 + movingRect.width/2)
{
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
}
else {movingRect.shapeColor = "blue";fixedRect.shapeColor = "blue";}
  drawSprites();
}