demo.state3 = function(){};
demo.state3.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#DDDDDD';
		console.log('state3');
		
		addChangeEventListener()
	},
	update:function(){}
};