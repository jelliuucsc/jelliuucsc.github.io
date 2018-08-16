
var noiseVal;
var noiseScale=0.02;

// var counter = 0;

function setup() {
   createCanvas(642,360);
  

  for (var y = 0; y < height; y++) {
     for (var x = 0; x < width; x++) {
       // noiceDetail of the pixels octave count and falloff value       
       noiseDetail(5,0.5);
       noiseVal = noise((x) * noiseScale,
                        (y) * noiseScale);
       stroke(noiseVal*255);
       point(x,y);
     }
   }
 // }

  for (var y = 0; y < height; y++) {
  //    for (var x = 0; x < width; x++) {
  //      // noiceDetail of the pixels octave count and falloff value       
  //      noiseDetail(4,0.3);
  //      noiseVal = noise((x) * noiseScale, (y) * noiseScale) * noise((x) * noiseScale, (y) * noiseScale)/ 3;
  //      // console.log(noiseVal);
  //     if(noiseVal <= .0){
  //          stroke(150, 255, 150);
  //          point(x,y);

  //     }
  //     else if(noiseVal > .01 && noiseVal <= .075){
  //          stroke(255, 150, 150);
  //          point(x,y);

  //     }
  //      else{
  //         stroke(100);
  //          point(x,y);
  //      }
       
      

  //    }
  //  }


}

function draw() {
  // background(0);
  var int_j = 0;
  var j_length = 34;
  for(var i = 0; i < 71; i++){
    if(i%2 == 0 && i !=0){
      int_j -= 1;
      j_length -= 1;
    }
    for(j = int_j;j < j_length; j++){    
      strokeWeight(.5);
      stroke(0);
      noFill();
      beginShape();
        for (var side = 0; side < 7; side++) {
          y_hex = (6*(Math.sqrt(3) * j + Math.sqrt(3)/2 * i) + 6 + 6 * Math.cos((2 * side - 1) * Math.PI / 6));
          x_hex = (6*(3 / 2 * i) + 6 + 6 * Math.sin((2 * side - 1) * Math.PI / 6));
          vertex(x_hex, y_hex);

          }
      endShape();
    }
var noiseVal;
var noiseScale=0.02;
var hexTiles = [];

// var counter = 0;

function setup() {
  createCanvas(642,360);
  // var index = 0;
  // var int_j = 0;
  // var j_length = 34;
  // for(var i = 0; i < 71; i++){
  //   if(i%2 == 0 && i !=0){
  //     int_j -= 1;
  //     j_length -= 1;
  //   }
  //   for(j = int_j;j < j_length; j++){    
  //     hexTiles[index] = new HexTile(j, i);
  //     index += 1;
  //   }
  // }   
  // for (var y = 0; y < height; y++) {
  //    for (var x = 0; x < width; x++) {
  //      // noiceDetail of the pixels octave count and falloff value       
  //      noiseDetail(5,0.5);
  //      noiseVal = noise((x) * noiseScale,
  //                       (y) * noiseScale);
  //      stroke(noiseVal*255);
  //      point(x,y);
  //    }
  //  }

  // for (var y = 0; y < height; y++) {
  //    for (var x = 0; x < width; x++) {
  //      // noiceDetail of the pixels octave count and falloff value       
  //      noiseDetail(4,0.3);
  //      noiseVal = noise((x) * noiseScale, (y) * noiseScale) * noise((x) * noiseScale, (y) * noiseScale)/ 3;
  //      // console.log(noiseVal);
  //     if(noiseVal <= .0){
  //          stroke(150, 255, 150);
  //          point(x,y);

  //     }
  //     else if(noiseVal > .01 && noiseVal <= .075){
  //          stroke(255, 150, 150);
  //          point(x,y);

  //     }
  //      else{
  //         stroke(100);
  //          point(x,y);
  //      }
       
      

  //    }
  //  }


}

function draw() {
  background(255);
  // for( let hexTile of hexTiles){
  //   hexTile.show();
  // }

  var int_j = 0;
  var j_length = 34;
  for(var i = 0; i < 71; i++){
    if(i%2 == 0 && i !=0){
      int_j -= 1;
      j_length -= 1;
    }
    for(j = int_j;j < j_length; j++){    
      strokeWeight(.5);
      stroke(``);
      noFill();
      beginShape();
        for (var side = 0; side < 7; side++) {
          y_hex = (6*(Math.sqrt(3) * j + Math.sqrt(3)/2 * i) + 6 + 6 * Math.cos((2 * side - 1) * Math.PI / 6));
          x_hex = (6*(3 / 2 * i) + 6 + 6 * Math.sin((2 * side - 1) * Math.PI / 6));
          var x = vertex(x_hex, y_hex);
          // console.log("this is x" + x);

          }
      endShape();
    }
    


  }


  //Show the details of two part

 }

class HexTile {
  constructor(x, y){
    this.centerx = x *6;
    this.centery = y * 6;
    this.hexpoints = function(){
      hexArr = []
      for (var side = 0; side < 7; side++) {
        y_hex = (6*(Math.sqrt(3) * j + Math.sqrt(3)/2 * i) + 6 + 6 * Math.cos((2 * side - 1) * Math.PI / 6));
        x_hex = (6*(3 / 2 * i) + 6 + 6 * Math.sin((2 * side - 1) * Math.PI / 6));
        hexArr.push(x_hex, y_hex);
      }
      return hexArr; 
    }   
  }

  show(){
    strokeWeight(.5);
    stroke(255);
    noFill();
    beginShape();
    vertex(this.hexpoints[0], this.hexpoints[1]);
    vertex(this.hexpoints[2], this.hexpoints[3]);
    vertex(this.hexpoints[4], this.hexpoints[5]);
    vertex(this.hexpoints[6], this.hexpoints[7]);
    vertex(this.hexpoints[8], this.hexpoints[9]);
    vertex(this.hexpoints[10], this.hexpoints[11]);
    endShape();
    }
}
  



    


  }


  //Show the details of two part

 }
