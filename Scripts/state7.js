//seting the state in an empty fuction 
demo.state7 = function() {};

demo.state7.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#dddddd';
		console.log('state 7 mother fucker');
		addStateKeyEventListners();

	},
	update: function(){}
};