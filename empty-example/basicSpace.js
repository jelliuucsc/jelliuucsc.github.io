var hit = false;
var poly = []; //store the vertices for our polygon
function setup() {
    createCanvas(500,500);
    poly[0] = createVector(123,231);     // set X/Y positions
    poly[1] = createVector(10,111);
    poly[2] = createVector(20,23);
    poly[3] = createVector(390,33);
}

function draw() {
    background(255);

  //draw the polygon from the created Vectors above.
    beginShape();
    for(i=0; i < poly.length; i++){
        vertex(poly[i].x,poly[i].y);
    }
    endShape(CLOSE);

    ellipse(mouseX,mouseY,10,10); //put a small ellipse on our point.

    hit = collidePointPoly(mouseX,mouseY,poly); //3rd parameter is an array of vertices.

    print("colliding? " + hit);
}