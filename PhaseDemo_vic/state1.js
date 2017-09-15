var demo = {}
// this 1st variable is the name of the game
// only needs to be created once(doesn't need to be in the other state js files)
demo.state1 = function(){}

demo.state1.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#76b236';
		console.log('state1')
		
		addChangeEventListener()
	},
	update:function(){}
}

// 'i' is just necessary in callback
function change_state(i,statenum){
	game.state.start('state'+ statenum);
}

// key = which key was pressed, func is which func used, arg = args for that func
// the mechanism for how we switch states or utilize any key press
function addKeyCallback(key,func,args){
	game.input.keyboard.addKey(key).onDown.add(func,null,null,args);
}

//eventlistenerchange is how we can not have write local eventlisteners to each state.js
function addChangeEventListener(){
	addKeyCallback(Phaser.Keyboard.ZERO,change_state,0);
	addKeyCallback(Phaser.Keyboard.ONE,change_state,1);
	addKeyCallback(Phaser.Keyboard.TWO,change_state,2);
	addKeyCallback(Phaser.Keyboard.THREE,change_state,3);
	addKeyCallback(Phaser.Keyboard.FOUR,change_state,5);
	addKeyCallback(Phaser.Keyboard.FIVE,change_state,4);
	addKeyCallback(Phaser.Keyboard.SIX,change_state,6);
	addKeyCallback(Phaser.Keyboard.SEVEN,change_state,7);
	addKeyCallback(Phaser.Keyboard.EIGHT,change_state,8);	
}
