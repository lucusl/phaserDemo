//seting the state in an empty fuction 
demo.state5 = function() {};

demo.state5.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#dddddd';
		console.log('state 5 mother fucker');
	},
	update: function(){}
};