$(document).ready(function() {
  var Currency = Backbone.Model.extend({
    defaults: {
      dollars: 0
    },
    hryvnias: function(value) {
      if (typeof value == 'undefined') {
        return d2h(this.get('dollars'))
      }
      value = parseFloat(value);
      this.set('dollars', h2d(value));
    }
  })

  var ConverterView = Backbone.View.extend({
    el: document.getElementById('backbone'),
    model: new Currency(),
    events: {
      'input #backboneDollar': 'updateDollars',
      'input #backboneHryvnia': 'updateHryvnias'
    },
    initialize: function() {
      this.listenTo(this.model, 'change:dollars', this.render)
      this.render()
    },
    render: function() {
      this.$('#backboneDollar').val(this.model.get('dollars'))
      this.$('#backboneHryvnia').val(this.model.hryvnias())
    },
    updateDollars: function(event) {
      this.model.set('dollars', event.target.value)
    },
    updateHryvnias: function(event) {
      this.model.hryvnias(event.target.value)
    }
  })

  var converterView = new ConverterView();
});
