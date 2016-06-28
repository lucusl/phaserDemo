//name of game 
var demo = {};

//seting the state in an empty fuction 
demo.state0 = function() {};

demo.state0.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#a64dff';
		console.log('state 0 mother fucker');
		addStateKeyEventListners();

		//REMEMBER THIS TO SCALE to viewport
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

	},
	update: function(){}
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