var Router = Backbone.Router.extend({
  routes: {
    "testing" : "testing"
  },
  initialize: function(){

  },

  testing: function() {
    alert("I'm using routes!");
  }
});