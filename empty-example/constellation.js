let constellations = [];
let main_pt;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  var r = 10;
  for ( var i = 0; i < floor(random(50, 100)); i++){
  	var x = random(canvas.width - 50);
  	var y = random(canvas.height - 50);
  	constellations[i] = new Constellation(x,y,r);
  }
  main_pt = new Constellation(mouseX, mouseY, r);

}

function draw() {
  fill(255);
  stroke(255);
  line(100, 100, 255, 255);
  background(0);
  
  main_pt.x = mouseX;
  main_pt.y = mouseY;
  main_pt.show();

  
  for (let constellation of constellations) {
  //   bubble.move();
    constellation.show();
  }

  // for (let constellation of constellations) {
	 //  if(mouseIsPressed && main_pt.intersects(constellation)){
	 //  		// constellation.changeHighlight(random(255), random(255), random(255));
	 //  		constellation.drawLine(main_pt);
	 //  	}
  // }
 
}

function mousePressed(){
	for (let constellation of constellations) {
	  if(mouseIsPressed && main_pt.intersects(constellation)){
	  		constellation.changeHighlight(random(255), random(255), random(255));
	  	}
  	}
}

class Constellation {
  constructor(x, y, r = 10) {
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
    // fill(this.color_r, this.color_g, this.color_b);
    point(this.x, this.y);
  }

  // drawLine(other) {
  // 	stroke(255);
  // 	strokeWeight(3);
  // 	// console.log(this.x, this.y);
  // 	console.log(other.x);
  // 	var l = line(this.x, this.y, other.x, other.y);
  // 	console.log(l);
  // }
}

// window.onresize = function() {
//   var w = window.innerWidth;
//   var h = window.innerHeight;  
//   canvas.size(w,h);
//   width = w;
//   height = h;
// };