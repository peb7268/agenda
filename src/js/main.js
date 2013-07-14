define(function(require) {
    var Backbone    = require('backbone');
    var Router      = require('router');

    window.App      = {
        Models: {},
        Views: {},
        Collections: {}
    };
    window.app = {};
    
    router = new Router();
    Backbone.history.start();

    App.Models.Todo 		= require('models/Todo');
    App.Views.Todo 			= require('views/Todo');
    App.Collections.List 	= require('collections/List');
    App.Views.List 			= require('views/List');
    App.Views.InfoBar       = require('views/infobar');
    App.Views.AppView       = require('views/App');

    app.listView = new App.Views.List(); 
    app.appView  = new App.Views.AppView({ collection: app.listView.collection }); 
});
