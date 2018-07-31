var player;
var player_sprite_sheet;
var playeranim;
var player_right;
var player_left;
var bee;
var grass;
var ground;
var flower;
var grassImage;
var groundImage;
var flowerImages = [];
var bees = [];
var randomInt = []



function preload(){
	for(var i = 1; i < 10; i++){
		flowerImages[i] = loadImage('assets/flower' + i.toString() +'.png');
	}
	grassImage = loadImage('assets/grass.png');
	groundImage = loadImage('assets/groundtile.png');
	wall_v = loadImage('assets/walltilev.png');
	wall_h = loadImage('assets/walltileh.png');
	grass = new Group();
	bees = new Group();
	ground = new Group();
	flower = new Group();
	walls = new Group();
	players = new Group();
	// room_size = int(random(50, 70));
	for(var i = 0; i < 25; i ++){
		;
		randomInt[i] = i * 2 + 1;
		// console.log(randomInt);
	}

	for(var i = 0; i < 51; i++){
		w = createSprite(i * 64, -32);
		w.addImage(wall_h);
		w.scale = 1;
		walls.add(w);		
	}
	for(var i = 0; i < 51; i++){
		w = createSprite(i * 64, 3232);
		w.addImage(wall_h);
		w.scale = 1;
		walls.add(w);		
	}
	for(var i = 1; i < 50; i++){
		w = createSprite(-32, i * 64);
		w.addImage(wall_v);
		w.scale = 1;
		walls.add(w);		
	}
	for(var i = 1; i < 50; i++){
		w = createSprite(3232, i * 64);
		w.addImage(wall_v);
		w.scale = 1;
		walls.add(w);		
	}
	for(var i = 1; i < 50; i ++){
		for(var j = 1; j < 50; j ++){
			g = createSprite(i * 64 , j * 64);
			g.addImage(grassImage);
			g.scale = 1;
			grass.add(g);
			j++;
		}
		i++;
	}

	for(var i = 1; i < 50; i ++){
		for(var j = 1; j < 50; j ++){
			// if(grass.overlap(ground) == false){
				var seed = random(0, 1);
				if(seed < 0.05){
					f = createSprite(i*64, j*64 , 32, 32);
					f.addImage(flowerImages[int(random(1,9))]);
					f.scale = 0.5;
					flower.add(f);
				}	
			// }			
		}
	}

	for(var i = 0; i < 10; i++){
		var seed = random(0,1);
		if(seed < 0.25){
			x_in = randomInt[int(random(1, 25))];
			var x_length = int(random(3, 50 - 3));
			for(var x_cd = 1; x_cd < x_length; x_cd ++){
				gr = createSprite(x_in * 64, x_cd * 64);
				gr.addImage(groundImage);
			
				ground.add(gr);
				x_cd++;
			}
		}
		// MORE GENERATIONS THAT CANT WORK BECAUSE ITS NOT OPTIMAL LUL
		// else if(seed >= 0.25 && seed < 0.5){
		// 	x_in = randomInt[int(random(1, 25))];
		// 	// console.log("first" + x_in);
		// 	// console.log("x_in" + x_in);
		// 	var x_length = int(random(3, 25));
		// 	// console.log("x_length" + x_length);
		// 	for(var x_cd = 49; x_length > 0; x_cd --){
		// 		gr = createSprite(x_in * 64,x_cd*64);
		// 		gr.addImage(groundImage);
		// 		// console.log("gr" + gr.position);
		// 		ground.add(gr);
		// 		x_cd--;
		// 		x_length -= 2;
		// 	}
		// }
		// else if(seed >= 0.5 && seed < 0.75){
		// 	y_in = randomInt[int(random(1, 25))];
		// 	console.log("first" + y_in);
		// 	// console.log("x_in" + x_in);
		// 	var y_length = int(random(3, 25));
		// 	console.log("y_length" + y_length);
		// 	for(var y_cd = 49; x_length > 0; y_cd --){
		// 		gr = createSprite(y_cd * 64,y_in*64);
		// 		gr.addImage(groundImage);
		// 		// console.log("gr" + gr.position);
		// 		ground.add(gr);
		// 		y_cd--;
		// 		y_length -= 2;
		// 	}
		// }
		// if(seed >= 0.75 && seed <= 1){
		// 	y_in = randomInt[int(random(1, 25))];
		// 	console.log("first" + y_in);
		// 	// console.log("x_in" + x_in);
		// 	var y_length = int(random(3, 50 - 3));
		// 	console.log("y_length" + x_length);
		// 	for(var y_cd = 1; y_cd < y_length; y_cd ++){
		// 		gr = createSprite(y_cd * 64, y_in * 64);
		// 		gr.addImage(groundImage);
		// 		// console.log("gr" + gr.position);
		// 		ground.add(gr);
		// 		y_cd++;
		// 	}
		// }
	}

	
}

function setup() {
	// createCanvas(1280, 896);
	createCanvas(1280, 896);
	

	

	player = createSprite((50*64)/2, (50*64)/2, 64 ,64);
	playerstill = player.addAnimation("still", 'assets/Flint0002.png');
	player.addAnimation('left', 'assets/Flint0013.png', 'assets/Flint0016.png');
	player.addAnimation('right', 'assets/Flint0009.png', 'assets/Flint0012.png');
	player.addAnimation('up', 'assets/Flint0005.png', 'assets/Flint0008.png');
	player.addAnimation('down', 'assets/Flint0001.png', 'assets/Flint0004.png');
	

	for(var i = 0; i < 5; i ++){
		x_b = int(random(100, 45 * 64));
		y_b = int(random(100, 45*64));
		bees[i] = createSprite(x_b, y_b);
		buzzing = bees[i].addAnimation('buzz', 'assets/bee0001.png', 'assets/bee0002.png');
		bees[i].scale = 1;
		bees[i].maxSpeed = 2;
		// bees[i].friction = 0.9;
	}
	


	
					
	
	// player = createSprite(600, 400, 50, 50);
	// bee = createSprite(100, 100, 10, 10);
	// bee.scale = 0.5;
	// playerstill = player.addAnimation("still", 'assets/Flint0002.png');
	// player.addAnimation('left', 'assets/Flint0013.png', 'assets/Flint0016.png');
	// player.addAnimation('right', 'assets/Flint0009.png', 'assets/Flint0012.png');
	// player.addAnimation('up', 'assets/Flint0005.png', 'assets/Flint0008.png');
	// player.addAnimation('down', 'assets/Flint0001.png', 'assets/Flint0004.png');
	// bee.addAnimation('buzz', 'assets/bee0001.png', 'assets/bee0002.png');
}

function draw() {
 background(200,200,200);
 player.velocity.x = 0;
 player.velocity.y = 0;
 player.collide(walls);
 for(var i = 0; i < 5; i++){
 	bees[i].collide(walls);
 	bees[i].collide(ground);
 }
 for(var i = 0; i < 5; i ++){
 bees[i].attractionPoint(0.5, player.position.x, player.position.y);
 }
 if(player.position.x >= 568 && player.position.x <= 2632){
 camera.position.x = player.position.x;	
 }
 if(player.position.y >= 380 && player.position.y <= 2816){
 camera.position.y = player.position.y;	
 }


 // console.log(player.position.x);
 // console.log(player.position.y);

 if(keyIsDown(RIGHT_ARROW)) {
    player.changeAnimation('right');
    player.animation.frameDelay = 8;

    player.velocity.x = 15;
  }
  else if(keyIsDown(LEFT_ARROW)) {
    player.changeAnimation('left');
    // console.log(player.position.x);
    player.animation.frameDelay = 8;
    player.velocity.x = -15;
  }
  else if(keyIsDown(UP_ARROW)) {
    player.changeAnimation('up');
    player.animation.frameDelay = 8;
    player.velocity.y = -15;
  }
  else if(keyIsDown(DOWN_ARROW)) {
    player.changeAnimation('down');
    player.animation.frameDelay = 8;
    player.velocity.y = 15;
  } 
  else {
 
    player.changeAnimation('still');
    
  }

  drawSprites();
}