//seting the state in an empty fuction 
demo.state2 = function() {};

demo.state2.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#dddddd';
		console.log('state 2 mother fucker');
		addStateKeyEventListners();
		
	},
	update: function(){}
};