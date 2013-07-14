define(function(require){
	var Backbone 	= require('backbone'); 
	window.App 		= window.App || {
		Models: {},
		Views: {},
		Collections: {}
	};
	
	App.Models.Todo 		= Backbone.Model.extend({
		defaults: {
			name: 'default name',
			status: 'incomplete'
		},
		initialize: function(){}
	});

	return App.Models.Todo;
})