//name of game 
var demo = {};

//Game config
var centerX = 1500/2;
var centerY = 1000/2;
var dave; 
var speed = 6;

//seting the state in an empty fuction 
demo.state0 = function() {};

demo.state0.prototype = {
	preload: function(){
		game.load.spritesheet('dave', 'assets/spriteSheets/adamSprite.png', 260, 510)
		game.load.image('BG1', 'assets/Background/BG1.png')


	},
	create: function(){

		game.physics.startSystem(Phaser.Physics.ARCADE)

		game.stage.backgroundColor = '#a64dff';
		console.log('state 0 mother fucker');
		addStateKeyEventListners();

		game.world.setBounds(0,0,2800,1000)
		//REMEMBER THIS TO SCALE to viewport
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	    var BG1 = game.add.sprite(0, 0, 'BG1');

		dave = game.add.sprite(centerX,centerY + 200, 'dave');
		dave.anchor.x = 0.5;
	    dave.anchor.y = 0.5;
	    dave.scale.setTo(0.7, 0.7);
	    game.physics.enable(dave);
	    dave.body.collideWorldBounds = true;
	    dave.animations.add('walk', [0,1,2,3]);

	    game.camera.follow(dave);
	    game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600,1000);

	},
	update: function(){
		if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
		    dave.scale.setTo(0.7, 0.7);
			dave.x += speed;
			dave.animations.play('walk', 14, true);
		}
	  else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			  dave.scale.setTo(-0.7, 0.7);	
			  dave.x -= speed;
			dave.animations.play('walk', 14, true);
	}
	else{
		dave.animations.stop('walk')
		dave.frame = 0;
	}

		if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
			dave.y -= speed;
			if(dave.y < 633.75){
				dave.y = 633.75;
			}
		}
	  else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
			dave.y += speed;
	}
 }
};



function changeState(i, stateNum){
	console.log('changed the state to ' + stateNum);
    game.state.start('state' + stateNum);
}


// Keyboard call back function that is global 
function addKeyCallback (key, fn, args){
	game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}


//lukes custom fucntion that creates phaser listerners for number key
function addStateKeyEventListners(){
			addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
			addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
			addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
            addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
            addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4); 
            addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
            addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);  
            addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);  
            addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);  
            addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);  
}