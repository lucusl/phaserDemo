//seting the state in an empty fuction 
demo.state9 = function() {};

demo.state9.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#dddddd';
		console.log('state 9 mother fucker');
		addStateKeyEventListners();
		
	},
	update: function(){}
};