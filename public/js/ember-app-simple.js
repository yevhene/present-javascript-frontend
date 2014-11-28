App = Ember.Application.create({
  rootElement: '#ember'
});

App.ApplicationController = Ember.Controller.extend({
  dollars: 0,
  hryvnias: function (key, value) {
    return this.get('dollars') * kurs;
  }.property('dollars')
});
