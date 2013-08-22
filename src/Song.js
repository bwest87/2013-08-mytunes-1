var Song = Backbone.Model.extend({

  play: function(){
    this.trigger('play', this);
  },
  ended: function() {
    this.trigger('ended', this);
  },
  dequeue: function() {
    this.trigger('dequeue', this);
  },
  enqueue: function() {
    console.log("I'm emitting enqueu");
    this.trigger('enqueue', this);
  }

});
