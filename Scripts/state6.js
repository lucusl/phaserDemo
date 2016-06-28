//seting the state in an empty fuction 
demo.state6 = function() {};

demo.state6.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#dddddd';
		console.log('state 6 mother fucker');
	},
	update: function(){}
};