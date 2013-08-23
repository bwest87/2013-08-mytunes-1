var Router = Backbone.Router.extend({
  routes: {
    "testing" : "testing"
  },
  initialize: function(){
    // set up model objects
    var library = new Songs(songData);
    var app = new App({library: library});

    // build a view for the top level of the whole app
    var appView = new AppView({model: app});

    // put the view onto the screen
    $('body').append(appView.render());
  },

  testing: function() {
    alert("I'm using routes!");
  }
});