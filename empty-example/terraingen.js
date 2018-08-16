
var noiseVal;
var noiseScale=0.02;
var hexTiles = [];
var hexOffset = [];
var treeGroup = [];
var houseGroup = [];
var hit = false;
var noiseRand = 0;

// var counter = 0;
function preload(){
  tree = loadImage('assets/tree.png');
  house = loadImage('assets/house.png')
}
function setup() {
  createCanvas(642,450);
  greenHex = createButton()
  noiseRand = int(random(0,100))
  var index = 0;
  var index1 = 0;
  var int_j = 1;
  var j_length = 32;
  for(var i = 0; i < 53; i++){
    if(i%2 == 0 && i !=0){
      int_j -= 1;
      j_length -= 1;
    }
    for(j = int_j;j < j_length; j++){    
      hexTiles[index] = new HexTile(j, i);
      index += 1;
    }
  }  
  index = 0;
  for(var i = 0; i < 53; i++){
    hexOffset[i] = []; 
    for(var j = 1; j < 32; j ++){
      hexOffset[i][j] = hexTiles[index];
      index += 1;
    }
  }
  for(var i = 0; i < 53; i++){
    for(var j = 1; j < 32; j ++){
      var seed = random(0,1);
      if(hexOffset[i][j].color[0] == 70 && hexOffset[i][j].color[1] == 230 && hexOffset[i][j].color[2] == 112){
        if( seed < .5 && hexOffset[i][j].checkGround() == 1 ){
          hexOffset[i][j].color[0] = 222; 
          hexOffset[i][j].color[1] = 175; 
          hexOffset[i][j].color[2] = 122; 
        }
        if(seed > .5 && hexOffset[i][j].checkTree() == 1){
          treeGroup[index1] = new Tree(hexOffset[i][j].x, hexOffset[i][j].y, hexOffset[i][j].centerx, hexOffset[i][j].centery);
          index1 += 1;   
        }
       
      }
    }
  }
  index1 = 0;
  for(var i = 0; i < 53; i++){
    for(var j = 1; j < 32; j ++){
      var seed = random(0,1);
      if(hexOffset[i][j].color[0] == 222 && hexOffset[i][j].color[1] == 175 && hexOffset[i][j].color[2] == 122){
        // console.log("here");
        if(seed < .1 && hexOffset[i][j].checkHouse() == 1 ){
           houseGroup[index1] = new House(hexOffset[i][j].x, hexOffset[i][j].y, hexOffset[i][j].centerx, hexOffset[i][j].centery);
           index1 += 1;
        }
      }
    }
  }
} 


function draw() {
  background(255);
  // console.log(mouseX, mouseY);
  // console.log(mouseY);
   for(let hexTile of hexTiles){
    hexTile.highlightHex();
    // var hit = collidePointPoly(mouseX,mouseY,hexTile.gethexPoints());
    // if(hit){
    //   // console.log(hexTile);
    //   var on = 1;
    //   hexTile.highlightHex(on);
    // }
    // else{
    //   var on = 0;
    //   hexTile.highlightHex(on);
    // }
  }
  for(let tree of treeGroup){
    tree.show();
  }
  for(let house of houseGroup){
    // console.log('hi');
    house.show();
    // console.log('hi');
  }
  // image(house, 0, 8, 15, 15);
  // scale(.2);
  // image(tree, treeGroup[1].centery - 4, treeGroup[1].centerx - 13 , 10,15);
  // console.log(treeGroup[1].centerx);
  // console.log(treeGroup[1].centery);
 }

class HexTile {
  constructor(x, y){
    this.x = y;
    this.y = x;
    this.centery = (8*(3 / 2 * y) + 8 + 8 * Math.sin((- 1) * Math.PI / 6) + 8*(3 / 2 * y) + 8 + 8 * Math.sin((5) * Math.PI / 6))/2;
    this.centerx = ((8*(Math.sqrt(3) * x + Math.sqrt(3)/2 * y) + 8 + 8 * Math.cos((- 1) * Math.PI / 6)) + (8*(Math.sqrt(3) * x + Math.sqrt(3)/2 * y) + 8 + 8 * Math.cos((5) * Math.PI / 6)))/2;
    this.color = this.noiseVal();
  }

  noiseVal(){
  noiseDetail(3,.1);
  noiseSeed(noiseRand);
  var noiseTotal = 0;
  var noiseAverage = 0;

    for (var side = 0; side < 6; side++) {
      var hexpointx = this.gethexPoints()[side].x;
      var hexpointy = this.gethexPoints()[side].y;
      var noiseVal = noise((hexpointx) * noiseScale, (hexpointy) * noiseScale) * noise((hexpointx) * noiseScale, (hexpointy) * noiseScale)/ 3;
      noiseTotal += noiseVal;
    }
    noiseAverage = noiseTotal/6 * 10;

    if(noiseAverage <= 0.1){
      return [105, 76, 42, 255];
    }
    else if(noiseAverage > 0.1 && noiseAverage <= .45){
      return [70, 230, 112, 255];
    }
    // else if(noiseAverage > 0.35 && noiseAverage <= .5){
    //   return [222, 175, 122, 255];
    // }
    else{
      return[94,189, 236, 255];
    }
  }
  gethexPoints(){
    var hexArr = []
      for (var side = 0; side < 6; side++) {
        var y_hex = (8*(Math.sqrt(3) * this.y + Math.sqrt(3)/2 * this.x) + 8 + 8 * Math.cos((2 * side - 1) * Math.PI / 6));
        var x_hex = (8*(3 / 2 * this.x) + 8 + 8 * Math.sin((2 * side - 1) * Math.PI / 6));
        var hexpoint = createVector(x_hex, y_hex);
        hexArr.push(hexpoint);
      }
    return hexArr;
   
  }
  highlightHex(on){
    if(on == 1){
      this.color[3]= 100;
    }
    else{
      this.color[3]= 255;
    }
    strokeWeight(.5);
    stroke(100);
    fill(this.color[0], this.color[1], this.color[2], this.color[3]);
    beginShape();
    for (var side = 0; side < 6; side++) {
      var hexpointx = this.gethexPoints()[side].x;
      var hexpointy = this.gethexPoints()[side].y;
      vertex(hexpointx, hexpointy);
    }
    endShape(CLOSE);
  }
  checkTree(){
  noiseDetail(2,.1);
  noiseSeed(noiseRand);
  var noiseTotal = 0;
  var noiseAverage = 0;

    for (var side = 0; side < 6; side++) {
      var hexpointx = this.gethexPoints()[side].x;
      var hexpointy = this.gethexPoints()[side].y;
      var noiseVal = noise((hexpointx) * noiseScale, (hexpointy) * noiseScale) * noise((hexpointx) * noiseScale, (hexpointy) * noiseScale)/ 3;
      noiseTotal += noiseVal;
    }
    noiseAverage = noiseTotal/6 * 10;
    if(noiseAverage >= 0.1 && noiseAverage <= 0.4){
      return 1;
    }
    else{
      return 0;
    }
    
  }
  checkGround(){
  noiseDetail(2,.1);
  noiseSeed(noiseRand);
  var noiseTotal = 0;
  var noiseAverage = 0;

    for (var side = 0; side < 6; side++) {
      var hexpointx = this.gethexPoints()[side].x;
      var hexpointy = this.gethexPoints()[side].y;
      var noiseVal = noise((hexpointx) * noiseScale, (hexpointy) * noiseScale) * noise((hexpointx) * noiseScale, (hexpointy) * noiseScale)/ 3;
      noiseTotal += noiseVal;
    }
    noiseAverage = noiseTotal/6 * 10;
    if(noiseAverage >= 0.25 && noiseAverage <= 0.5){
      return 1;
    }
    else{
      return 0;
    }
    
  }
  checkHouse(){
  noiseDetail(2,.1);
  noiseSeed(noiseRand);
  var noiseTotal = 0;
  var noiseAverage = 0;

    for (var side = 0; side < 6; side++) {
      var hexpointx = this.gethexPoints()[side].x;
      var hexpointy = this.gethexPoints()[side].y;
      var noiseVal = noise((hexpointx) * noiseScale, (hexpointy) * noiseScale) * noise((hexpointx) * noiseScale, (hexpointy) * noiseScale)/ 3;
      noiseTotal += noiseVal;
    }
    noiseAverage = noiseTotal/6 * 10;
    if(noiseAverage >= 0.25 && noiseAverage <= 0.5){
      return 1;
    }
    else{
      return 0;
    }
    
  }
}

class Tree {
  constructor(x, y, offx, offy){
    this.x = x;
    this.y = y;
    this.centery = offy 
    this.centerx = offx;
  }
  show(){

    image(tree, this.centery - 4, this.centerx - 13,10, 15);
  }
}

class House {
  constructor(x, y, offx, offy){
    this.x = x;
    this.y = y;
    this.centery = offy 
    this.centerx = offx;
  }
  show(){
    image(house, this.centery - 6, this.centerx - 10,12, 12);
  }
}

  


