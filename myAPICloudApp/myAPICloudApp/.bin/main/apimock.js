var Xo5j = {
	G: function(){
		console.log('api method mock in: ' + JSON.stringify(arguments));
	},
	A: function(){
		console.log('api attr mock in: ' + JSON.stringify(arguments));
	},
	require: function(name){
		console.log('api.require mock in: ' + JSON.stringify(arguments));
		if('mam' == name){
			return "({checkUpdate: function(){console.log('mam checkUpdate in');return 'succees!'}})";
		}
	}
};