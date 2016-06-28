var game = new Phaser.Game(600,400, Phaser.AUTO);

//adding state 1 to our game 
game.state.add('state0', demo.state0);
game.state.add('state1', demo.state1);
game.state.add('state2', demo.state2);
game.state.add('state3', demo.state3);
game.state.add('state4', demo.state4);
game.state.add('state5', demo.state4);
game.state.add('state6', demo.state4);
game.state.add('state7', demo.state4);
game.state.add('state8', demo.state4);
game.state.add('state9', demo.state4);



//setting state 1 to be the starting state
game.state.start('state0');
