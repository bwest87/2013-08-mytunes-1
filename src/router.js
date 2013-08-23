var Router = Backbone.Router.extend({
  routes: {
    "song/:title" : "playSongUrl",
    "queue/:qName": "showQueue"
  },
  initialize: function(){
    // set up model objects
    this.library = new Songs(songData);
    this.app = new App({library: this.library});

    // build a view for the top level of the whole app
    this.appView = new AppView({model: this.app});

    // put the view onto the screen
    $('body').append(this.appView.render());
  },

  testing: function() {
    alert("I'm using routes!");
  },
  playSongUrl: function(title) {
    this.library.where({'title' : title})[0].play();
  },
  showQueue: function() {
    
  }
});