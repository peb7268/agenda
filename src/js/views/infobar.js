define(function(require){
	var Backbone 	= require('backbone');
	var day;
	var current_date;

	var InfoBar  	= Backbone.View.extend({
		el: '#infoBar',
		events: {
			'click #today' 				: 'toggleDatePicker',
			'click #datePicker .prev a'	: 'decrementDay',
			'click #datePicker .next a'	: 'incrementDay',

		},
		initialize: function(){
			console.log('initialized infobar view');
			day 			= $('#datePicker li:eq(1) span'); 
			day.html(new Date().getDate());
			current_date 	= Number(day.html());
		},
		toggleDatePicker: function(e){
			$(e.target).find('#datePicker').slideToggle(100);
		},
		decrementDay: function(e){
			e.preventDefault();
			day.html(current_date --);
		}, 
		incrementDay: function(e){
			e.preventDefault();
			day.html(current_date ++);
		}
	});

	return InfoBar;
});