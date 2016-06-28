//seting the state in an empty fuction 
demo.state3 = function() {};

demo.state3.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#dddddd'
		console.log('state 3 mother fucker');
		addStateKeyEventListners();
		
	},
	update: function(){}
};