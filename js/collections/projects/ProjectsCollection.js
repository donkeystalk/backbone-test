define([
  'jquery',
  'underscore',
  'backbone',
  'models/project/ProjectModel'
], function($, _, Backbone, ProjectModel){
  var ProjectsCollection = Backbone.Collection.extend({
    model: ProjectModel,

    initialize: function () {
      var testProject = new ProjectModel('Test Project', 'http://github.com/donkeystalk')
    }
  });
  return ProjectsCollection;
});
