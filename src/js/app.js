require.config({
    paths: {
    	jquery:    'lib/jquery',
    	underscore: 'lib/underscore',
        main:       'main',
        backbone:   'lib/backbone',
        templates:  '../templates',
        jasmine:    '../../spec/lib/jasmine.js',
        spec:       '../../spec/',
        global: 	'lib/global'
    },
    shim: {
    	'jquery': {
    		exports: 'jQuery'
    	},
    	'underscore': {
    		exports: '_'
    	},
    	'backbone': {
    		deps: ['underscore', 'jquery'],
    		exports: 'Backbone'
    	},
        'jasmine': {
            exports: 'jasmine'
        },
        'jasmine-html':{
            deps: ['jasmine'],
            exports: 'jasmine'
        }
    }
});

define(function(require) {
   require('main');
});