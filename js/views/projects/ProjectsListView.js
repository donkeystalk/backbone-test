define([
  'jquery',
  'underscore',
  'backbone',
  'models/project/ProjectModel',
  'collections/projects/ProjectsCollection',
  'text!templates/projects/projectsListTemplate.html'
], function ($, _, Backbone, ProjectModel, ProjectsCollection, projectsListTemplate) {
  var ProjectsListView = Backbone.View.extend({
    el: $("#projects-list"),
    render: function () {
      var data = {
        projects: this.collection.models,
        _:_
      };

      var compiledTemplate = _.template(projectsListTemplate, data);
      $("#projects-list").html(compiledTemplate);
    }
  });
  return ProjectsListView;
});
