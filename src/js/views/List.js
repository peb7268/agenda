define(function(require){
	var Backbone 	= require('backbone');
	var List 		= require('collections/List');
	var TodoView 	= require('views/Todo');
	var that;

	var todos      = [
        { name: 'Get the milk' },
        { name: 'Take out the dog' },
        { name: 'Go to the store' }
    ];

	var AppView 	= Backbone.View.extend({
		tagName: 'ul',
		id: 'content',

		initialize: function()
		{
			that = this;
			this.render();
			this.collection  = new List( todos );
			this.renderList();
			this.$el.on("change", function(){
				that.updateStats();
			});
		},
		events: {
			"click .todo-item input" : "toggleComplete",
			"completion .todo-item"  : "toggleControls",
			"todoAdded"  			 : "renderATodo"
		},
		
		toggleComplete: function(evt)
		{
			var $target = $(evt.target).parent();

			if($target.hasClass('completed')){
				$target.removeClass('completed');
				this.toggleControls();
				return;
			}
			$target.trigger('completion');
			$target.addClass('completed');
		},
		getCompleteCount: function()
		{
			return this.$el.find('input:checked').length;
		},
		getRemainingCount: function()
		{
			console.log(this.el, ($(this.el).find('li > input').not(':checked').length));
			return ($(this.el).find('li > input').not(':checked').length);
		},
		toggleControls: function()
		{
			var $stats = $('#stats');
			var completeCount  = this.getCompleteCount();
			this.updateStats();

			if(completeCount > 0){
				$stats.slideDown(100);
				return;
			}
				$stats.slideUp(100);
		},
		updateStats: function()
		{
			var completeCount = null, remainigCount = null;
			var $stats = $('#stats');
			completeCount  = this.getCompleteCount();
			remainigCount  = this.getRemainingCount();

			console.log('updating stats c/r: ', completeCount, remainigCount); 

			var completed = $($stats.find('li')[0]);
			completed.html('Completed: ');
			completed.html(completed.html() + ' ' + completeCount);

			var remaining = $($stats.find('li')[1]);
			remaining.html('Remaining: ');
			remaining.html(remaining.html() + ' ' + remainigCount);

			return;
		},
		render: function()
		{
			var rootEl 	= this.$el;
			$('#agendaWrapper').append(rootEl);

			var stats 	= require('text!templates/stats.html');
			$(stats).insertAfter('#content');

			return this;
		},
		renderList: function(model)
		{
			 var that = this;
	        _.each(this.collection.models, function (item) {
	            that.renderATodo(item);
	        }, this);
	        return this;
		},
		renderATodo: function( item )
		{
			var todoView = new TodoView( { model: item } );
			this.$el.append(todoView.render().el);
			return this;
		}
	});
	
	return AppView;
});