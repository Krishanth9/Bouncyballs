  var rect1,rect2

  function setup() {
    createCanvas(800,400);
    rect1=createSprite(400, 200, 50, 50);
    rect2=createSprite(400,200,70,70);
    rect1.debug=true;
    rect2.debug=true;
    rect2.shapeColor="grey"
    rect1.shapeColor="grey"
  }

  function draw() {
    background(255,255,255); 
    rect1.setCollider("rectangle",10,20,50,50,50)
    rect2.x=World.mouseX
    rect2.y=World.mouseY 
    if (rect1.x-rect2.x<rect2.width/2+rect1.width/2&&rect2.x-rect1.x<rect2.width/2+rect1.width/2&&
      rect1.y-rect2.y<rect2.height/2+rect1.height/2&&rect2.y-rect1.y<rect2.height/2+rect1.height/2)
      {
      rect1.shapeColor="black";
      rect2.shapeColor="black";
      }else {
        rect1.shapeColor="grey";
        rect2.shapeColor="grey";
      }

      if (rect1.x-rect2.x<rect2.width/2+rect1.width/2&&rect2.x-rect1.x<rect2.width/2+rect1.width/2){
        rect1.velocityX=rect1.velocityX-1;
        rect2.velocityX=rect2.velocityX-1;
      }

      if ( rect1.y-rect2.y<rect2.height/2+rect1.height/2&&rect2.y-rect1.y<rect2.height/2+rect1.height/2){
        rect1.velocityY=rect1.velocityY-1;
        rect2.velocityY=rect2.velocityY-1;
      }
        drawSprites();
  }