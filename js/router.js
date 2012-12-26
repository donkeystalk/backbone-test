// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone'
  // include any views here
  // Example:
  // 'views/someViewType/SomeViewType'
], function($, _, Backbone) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      // example : 'projects': 'showProjects',
      
      // Default Action, fall back if no route is defined
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
    app_router.on('route:defaultAction', function (actions) {
     
    });

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
