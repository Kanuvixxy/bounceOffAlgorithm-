var fixedRect, movingRect;

function setup() {
  createCanvas(1200, 800);

  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 800, 80, 30);
  movingRect.shapeColor = "green";

  movingRect.debug = true;
  fixedRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = 5;
}

function draw() {
  background(0);

  if (
    movingRect.y - fixedRect.y < movingRect.height / 2 + fixedRect.height / 2 &&
    fixedRect.y - movingRect.y < movingRect.height / 2 + fixedRect.height / 2
  ) {
    movingRect.velocityY = movingRect.velocityY * -1;
    fixedRect.velocityY = fixedRect.velocityY * -1;
  }

  // movingRect.x = mouseX;
  // movingRect.y = mouseY;

  drawSprites();
}
