define(function(require){
	var Backbone 	= require('backbone');
	var InfoBar 	= require('views/infobar');
	var that, infoBar;
	var App 		= Backbone.View.extend({
		el: $('<form />'),
		id: 'addTodo',

		template: _.template(require('text!templates/app.html')),
		
		initialize: function(){
			this.render();
			that = this;
			infoBar = new InfoBar({});
			this.$el.on('submit', this.addEvent);

		},
		render: function(){
			var compiled = this.$el.append('<input type="text" placeholder="New todo.." autofocus />');
			$('#content').prepend(compiled);
		},
		addEvent: function(e){
			e.preventDefault();
			var todoText    = $($(e.target).find('input')[0]).val();
			var collection  = that.collection.add({ name: todoText });
			var model 		= collection.last();
			app.listView.renderATodo(model);
		}
	});

	return App;
});