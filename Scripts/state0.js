//name of game 
var demo = {};

//seting the state in an empty fuction 
demo.state0 = function() {};

demo.state0.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#a64dff';
		console.log('state 0 mother fucker');
		game.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState, null, null, 1);

	},
	update: function(){}
};

function changeState(i, stateNum){
	console.log('fire');
    game.state.start('state' + stateNum);
}