//name of game 
var demo = {};

//Game config
var centerX = 1500/2;
var centerY = 1000/2;
var dave; 
var speed = 6;
var jumpButton;
var jumpTimer = 0;



function charature( somthing ){
	this.somthing = somthing;
	this.name = name;
};


var luke = new charature("haha");



//seting the state in an empty fuction 
demo.state0 = function() {};

demo.state0.prototype = {
	preload: function(){
		game.load.spritesheet('dave', 'assets/spriteSheets/daveSprite.png', 134.5, 279.67)
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
	    dave.scale.setTo(1, 1);

	    game.physics.arcade.gravity.y = 100;


	    game.physics.enable(dave,Phaser.Physics.ARCADE);


	    dave.body.collideWorldBounds = true;
	    dave.animations.add('walk', [1,2,3,4,5,6,7,8]);
	    dave.animations.add('jump', [11,12,13,14]);
	    dave.body.bounce.y = 0.1;
 
	    game.camera.follow(dave);
	    game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600,1000);
	    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
 

	},
	update: function(){
		if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
		    dave.scale.setTo(1, 1);
			dave.x += speed;
			dave.animations.play('walk', 14, true);
		}
	    else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			   dave.scale.setTo(-1, 1);	
			   dave.x -= speed;
		       dave.animations.play('walk', 14, true);
	}
	else{
		dave.animations.stop('walk')
		dave.frame = 10;
		dave.scale.setTo(1, 1);

	}

		if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
			dave.y -= speed;
			dave.animations.play('jump', 14, true);
			dave.y = 640.75;
			if(dave.y < 633.75){
				dave.y = 633.75;
			}
		}
	  else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
			dave.y += speed;
	}


	   //  only move when you click / touch
    if (game.input.mousePointer.isDown || game.input.pointer1.isDown)
    {
        //  400 is the speed it will move towards the mouse
        dave.animations.play('walk', 14, true); 
        game.physics.arcade.moveToPointer(dave, 400);

  		if (dave.y < 600){
  			dave.y = 600;
  		}

        //  if it's overlapping the mouse, don't move any more
        if (Phaser.Rectangle.contains(dave.body, game.input.x, game.input.y))
        {
            dave.body.velocity.setTo(0, 0);
        }
    }
    else
    {
    }
     if (jumpButton.isDown && dave.body.onFloor() && game.time.now > jumpTimer)
    {
        dave.body.velocity.y = -200;
        jumpTimer = game.time.now + 150;
       			dave.animations.play('jump', 14, true);
 
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


//lukes custom function that creates phaser listerners for number key
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