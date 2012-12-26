// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'views/projects/ProjectsView'
], function($, _, Backbone, HomeView, ProjectsView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      // example : 'projects': 'showProjects',
      'projects' : 'showProjects', 
      // Default Action, fall back if no route is defined
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
    app_router.on('route:showProjects', function(){
      var projectsView = new ProjectsView();
      projectsView.render();
    });

    app_router.on('route:defaultAction', function (actions) {
      var homeView = new HomeView();
      homeView.render();     
    });

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
