var spr;
function setup() {
  createCanvas(1200, 800);
  spr = createSprite(
    width/2, height/3, 40, 40);
  spr.shapeColor = color(255);
  spr1 = createSprite(
  width/3, height/2, 40, 40);
  spr1.shapeColor = color(200);
}
function draw() {
  camera.on();
  background(50);
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  text("use arrow keys, or SPACE to stop",
    width/2, height*0.67);
  drawSprites();


}

function cameraMovement(){
  if (keyIsDown(RIGHT_ARROW)) {
    // spr.setSpeed(1.5, 0);
    camera.position.x += 5;
    console.log("hi");
  }
  else if (keyIsDown(DOWN_ARROW)) {
    // spr.setSpeed(1.5, 90);
    camera.position.y += 5;
  }
  else if (keyIsDown(LEFT_ARROW)) {
    // spr.setSpeed(1.5, 180);
    camera.position.x -= 5;
  }
  else if (keyCode(UP_ARROW)) {
    // spr.setSpeed(1.5, 270);
    camera.position.y -= 5;
  }
  else if (key == ' ') {
    // spr.setSpeed(0, 0);

  }
}
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    spr.position.x += 5;
    spr1.position.x += 5;
    // camera.position.x += 5;
    // console.log("hi");
  }
  else if (keyCode == DOWN_ARROW) {
    spr.position.y += 5;
    // camera.position.y += 5;
  }
  else if (keyCode == LEFT_ARROW) {
    spr.position.x -= 5;
    // camera.position.x -= 5;
  }
  else if (keyCode == UP_ARROW) {
    spr.position.y -= 5;
    // camera.position.y -= 5;
  }
  else if (key == ' ') {
    spr.setSpeed(0, 0);

  }
  return false;
}