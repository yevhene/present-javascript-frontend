App = Ember.Application.create({
  rootElement: '#ember'
});

App.ApplicationController = Ember.Controller.extend({
  dollars: 0,
  hryvnias: function (key, value) {
    if (arguments.length > 1) {
      this.set('dollars', h2d(value));
    }
    return d2h(this.get('dollars'));
  }.property('dollars')
});
