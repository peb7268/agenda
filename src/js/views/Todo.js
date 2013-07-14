define(function(require){
	var Backbone 	= require('backbone');
	window.App 		= window.App || {
		Models: {},
		Views: {},
		Collections: {}
	};
	App.Models.Todo = App.Models.Todo;

	var TodoView = Backbone.View.extend({

		tagName: 'li',
		className: 'todo-item clearfix',
		template: _.template(require('text!templates/todo.html')),
		model: App.Models.Todo,
		
		initialize: function()
		{
			this.render();
			// this.$el.on("click", function(evt){
			// 	//this.remove();
			// });
		},
		render: function()
		{
			this.$el.html(this.template(this.model.attributes));
			return this;
		}
	});

	return TodoView;
});