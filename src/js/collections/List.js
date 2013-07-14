define(function(require){
	var Backbone 	= require('backbone');
	window.App 		= window.App || {
		Models: {},
		Views: {},
		Collections: {}
	};
	
	var List 		= Backbone.Collection.extend({
		model: App.Models.Todo,

		initialize: function(){
			this.on("add", function(model){
				//save to server here
			});
		}
	});

	return List;
});