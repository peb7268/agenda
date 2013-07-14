define(function(require){
	var Backbone 	= require('backbone');
					   
	return Router = Backbone.Router.extend({
		routes: {
			'' : 'start'
		},

		start: function(){},

	});
});