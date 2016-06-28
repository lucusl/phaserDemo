//name of game 
var demo = {};

//seting the state in an empty fuction 
demo.state0 = function() {};

demo.state0.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#a64dff';
		console.log('state 0 mother fucker');
		
	},
	update: function(){}
};