let constellations = [];
let main_pt;
var rand;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);
  frameRate(5);
  var r = 1;
  rand = 100
  for ( var i = 0; i < rand; i++){
  	var x = ceil(random(canvas.width - 50));
  	var y = ceil(random(canvas.height - 50));
  	constellations[i] = new Constellation(x,y,r);
  }
  main_pt = new Constellation(mouseX, mouseY, r);

}

function draw() {
  
  background(0);
  main_pt.x = mouseX;
  main_pt.y = mouseY;
  main_pt.show();
  if(mouseIsPressed){
  	noFill();
  	stroke(random(255), random(255), random(255));
  	beginShape();
  	for(var i = 0; i < 6 ; i++){
  		num_star = ceil(random(99));
	  	vertex(constellations[num_star].x, constellations[num_star].y);
		endShape();
  	}
  }
  
  for (let constellation of constellations) {
    constellation.show();
  }

 
}

class Constellation {
  constructor(x, y, r = 1) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color_r = 255;
    this.color_g = 255;
    this.color_b = 255;

  }

  intersects(other) {
  	var d = dist(this.x, this.y, other.x, other.y);
  	return(d < this.r + other.r);
  }

  changeHighlight(r, g, b){
  	
  	this.color_r = r;
    this.color_g = g;
    this.color_b = b;
  }


  show() {
    stroke(this.color_r, this.color_g, this.color_b);
    strokeWeight(10);
    point(this.x, this.y);
  }
}

