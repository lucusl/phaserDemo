//seting the state in an empty fuction 
demo.state1 = function(){};

demo.state1.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#000';
		console.log('state 1 mother fucker');

	},
	update: function(){}
};