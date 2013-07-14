define(function(require){
	var Backbone 	= require('backbone');
	var $day, current_date, days_in_month;

	var InfoBar  	= Backbone.View.extend({
		el: '#infoBar',
		events: {
			'click #today' 				: 'toggleDatePicker',
			'click #datePicker .prev a'	: 'decrementDay',
			'click #datePicker .next a'	: 'incrementDay',

		},
		initialize: function(){
			console.log('initialized infobar view');
			var d 			= new Date();
			$day 			= $('#datePicker li:eq(1) span'); 
			$day.html(d.getDate());
			days_in_month 	= this.getDaysInMonth(d.getMonth() + 1, d.getUTCFullYear());
			current_date 	= Number($day.html());
		},
		getDaysInMonth: function(month, year) {
		    return new Date(year, month, 0).getDate();
		},
		toggleDatePicker: function(e){
			$(e.target).find('#datePicker').slideToggle(100);
		},
		decrementDay: function(e){
			e.preventDefault();
			$day.html(current_date--);
		}, 
		incrementDay: function(e){
			e.preventDefault();
			$day.html(current_date++);
		}
	});

	return InfoBar;
});