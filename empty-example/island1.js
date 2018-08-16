
var noiseVal;
var noiseScale=0.02;
var hexTiles = [];
var hit = false

//hextiles[0].color = [255,0,0];
//for each tile in hextiles
// fill(tile.color[0],tile.color[1],tile.color[2])
// Draw the shape at the right place

// var counter = 0;

function setup() {
  createCanvas(642,360);
  var index = 0;
  var int_j = 0;
  var j_length = 2;
  for(var i = 0; i < 71; i++){
    if(i%2 == 0 && i !=0){
      int_j -= 1;
      j_length -= 1;
    }
    for(j = int_j;j < j_length; j++){    
      hexTiles[index] = new HexTile(j, i);

      index += 1;
    }
  }   
  

  // for (var y = 0; y < height; y++) {
  //    for (var x = 0; x < width; x++) {
  //      // noiceDetail of the pixels octave count and falloff value       
  //      noiseDetail(4,.1);
  //      noiseVal = noise((x) * noiseScale, (y) * noiseScale) * noise((x) * noiseScale, (y) * noiseScale)/ 3;
  //      // console.log(noiseVal);
  //     if(noiseVal <= .01){
  //          stroke(255, 150, 150);
  //          point(x,y);

  //     }
  //     else if(noiseVal > .01 && noiseVal <= .06){
           
  //          point(x,y);
  //          stroke(150, 255, 150);
  //     }
  //      else{
  //         stroke(100);
  //          point(x,y);
  //      }
       
      

  //    }
  //  }

 for(let hexTile of hexTiles){
    hexTile.show();
    hit = collidePointPoly(mouseX,mouseY,hexTile.gethexPoints());
  }
}


function draw() {
  // background(255);
  for(let hexTile of hexTiles){
  hit = collidePointPoly(mouseX,mouseY,hexTile.gethexPoints());
    if(hit == true){
      hexTile.highlightHex();
    }
  }



  // var int_j = 0;
  // var j_length = 34;
  // for(var i = 0; i < 71; i++){
  //   if(i%2 == 0 && i !=0){
  //     int_j -= 1;
  //     j_length -= 1;
  //   }
  //   for(j = int_j;j < j_length; j++){    
  //     strokeWeight(.5);
  //     stroke(100);
  //     noFill();
  //     beginShape();
  //       for (var side = 0; side < 7; side++) {
  //         y_hex = (6*(Math.sqrt(3) * j + Math.sqrt(3)/2 * i) + 6 + 6 * Math.cos((2 * side - 1) * Math.PI / 6));
  //         x_hex = (6*(3 / 2 * i) + 6 + 6 * Math.sin((2 * side - 1) * Math.PI / 6));
  //         var x = vertex(x_hex, y_hex);
  //         // console.log("this is x" + x);

  //         }
  //     endShape();
  //   }
    


  // }


  //Show the details of two part

 }

class HexTile {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.centerx = (6*(3 / 2 * y) + 6 + 6 * Math.sin((- 1) * Math.PI / 6) + 6*(3 / 2 * y) + 6 + 6 * Math.sin((5) * Math.PI / 6))/2;
    this.centery = ((6*(Math.sqrt(3) * x + Math.sqrt(3)/2 * y) + 6 + 6 * Math.cos((- 1) * Math.PI / 6)) + (6*(Math.sqrt(3) * x + Math.sqrt(3)/2 * y) + 6 + 6 * Math.cos((5) * Math.PI / 6)))/2;
    this.noiseVal = function() {
      noiseDetail(3,.3);
  // noiseSeed(10);
      var noiseTotal = 0;
      var noiseAverage = 0;


        // strokeWeight(.5);
        // stroke(100);
        // noFill();
        for (var side = 0; side < 6; side++) {
          var hexpointx = this.gethexPoints()[side].x;
          var hexpointy = this.gethexPoints()[side].y;
          var noiseVal = noise((hexpointx) * noiseScale, (hexpointy) * noiseScale) * noise((hexpointx) * noiseScale, (hexpointy) * noiseScale)/ 3;
          noiseTotal += noiseVal;
        }
        noiseAverage = noiseTotal/6 * 10;;
        return noiseAverage;
    } 
  }

  gethexPoints(){
    var hexArr = []
      for (var side = 0; side < 6; side++) {
        var y_hex = (6*(Math.sqrt(3) * this.x + Math.sqrt(3)/2 * this.y) + 6 + 6 * Math.cos((2 * side - 1) * Math.PI / 6));
        var x_hex = (6*(3 / 2 * this.y) + 6 + 6 * Math.sin((2 * side - 1) * Math.PI / 6));
        var hexpoint = createVector(x_hex, y_hex);
        hexArr.push(hexpoint);
        // console.log("hi " + hexArr);
      }
    return hexArr;
   
  }
  show(){
  // noiseDetail(3,.3);
  // // noiseSeed(10);
  // var noiseTotal = 0;
  // var noiseAverage = 0;
  

  //   // strokeWeight(.5);
  //   // stroke(100);
  //   // noFill();
  //   for (var side = 0; side < 6; side++) {
  //     var hexpointx = this.gethexPoints()[side].x;
  //     var hexpointy = this.gethexPoints()[side].y;
  //     var noiseVal = noise((hexpointx) * noiseScale, (hexpointy) * noiseScale) * noise((hexpointx) * noiseScale, (hexpointy) * noiseScale)/ 3;
  //     noiseTotal += noiseVal;
  //   }
  //   noiseAverage = noiseTotal/6 * 10;
    // console.log(noiseAverage);
    if(this.noiseVal<`= 0.1){
      strokeWeight(.5);
      stroke(100);
      fill(74, 23, 23);
      beginShape();
      for (var side = 0; side < 6; side++) {
        var hexpointx = this.gethexPoints()[side].x;
        var hexpointy = this.gethexPoints()[side].y;
        vertex(hexpointx, hexpointy);
      }
      endShape(CLOSE);
    }
    else if(this.noiseVal > 0.1 && this.noiseVal <= .6){
      strokeWeight(.5);
      stroke(100);
      fill(14, 94 , 35);
      beginShape();
      for (var side = 0; side < 6; side++) {
        var hexpointx = this.gethexPoints()[side].x;
        var hexpointy = this.gethexPoints()[side].y;
        vertex(hexpointx, hexpointy);
      }
      endShape(CLOSE);
    }
    else{
      strokeWeight(.5);
      stroke(100);
      fill(100,100, 255);
      beginShape();
      for (var side = 0; side < 6; side++) {
      var hexpointx = this.gethexPoints()[side].x;
      var hexpointy = this.gethexPoints()[side].y;
      vertex(hexpointx, hexpointy);
      }
      endShape(CLOSE);
    }
    
    
    // noFill();
  }

  // console.log(this.gethexPoints());
  //   var xhex = 0;
  //   var yhex = 0;
  //   strokeWeight(.5);
  //   stroke(100);
  //   noFill();
  //   beginShape();
  //   for (var side = 0; side < 6; side++) {
  //     yhex = (6*(Math.sqrt(3) * this.x + Math.sqrt(3)/2 * this.y) + 6 + 6 * Math.cos((2 * side - 1) * Math.PI / 6));
  //     xhex = (6*(3 / 2 * this.y) + 6 + 6 * Math.sin((2 * side - 1) * Math.PI / 6));
  //     vertex(xhex, yhex);
  //     // console.log("this is x" + x);
  //   }
  //   endShape(CLOSE);
  highlightHex() {
      strokeWeight(.5);
      stroke(100);
      fill(74, 23, 23, 200);
      beginShape();
      for (var side = 0; side < 6; side++) {
        var hexpointx = this.gethexPoints()[side].x;
        var hexpointy = this.gethexPoints()[side].y;
        vertex(hexpointx, hexpointy);
      }
      endShape(CLOSE);

  //     // redraw();
  }
}

  


