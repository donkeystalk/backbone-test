define([
  'jquery',
  'underscore',
  'backbone',
  'models/project/ProjectModel',
  'collections/projects/ProjectsCollection',
  'views/projects/ProjectsListView',
  'text!templates/projects/projectsTemplate.html'
], function ($, _, Backbone, ProjectModel, ProjectsCollection, ProjectsListView, projectsTemplate) {
  var ProjectsView = Backbone.View.extend({
    el: $("#page"),
    render: function () {
      $('.menu li').removeClass('active');
      $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
      this.$el.html(projectsTemplate);

      var donkeystalk = new ProjectModel({title: "Donkeystalk Github", url: "http://github.com/donkeystalk"});

      var projects = [donkeystalk];

      var projectsCollection = new ProjectsCollection(projects);
      var projectsListView = new ProjectsListView({collection: projectsCollection});

      projectsListView.render();
    }
  });
  return ProjectsView;
});
