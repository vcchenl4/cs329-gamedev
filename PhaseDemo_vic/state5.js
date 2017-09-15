demo.state5 = function(){};
demo.state5.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#DDDDDD';
		console.log('state5');
		
		addChangeEventListener();
	},
	update:function(){}
};