//seting the state in an empty fuction 
demo.state8 = function() {};

demo.state8.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#dddddd';
		console.log('state 8 mother fucker');
	},
	update: function(){}
};