var game = new Phaser.Game(600,400, Phaser.AUTO);

//adding state 1 to our game 
game.state.add('state1', demo.state1);

//setting state 1 to be the starting state
game.state.start('state1');