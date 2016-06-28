//seting the state in an empty fuction 
demo.state4 = function() {};

demo.state4.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#dddddd';
		console.log('state 4 mother fucker');
		addStateKeyEventListners();

	},
	update: function(){}
};