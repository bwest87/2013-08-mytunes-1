var Song = Backbone.Model.extend({

  initialize: function() {
    this.set('playCount', 0);
  },

  play: function(){
    this.trigger('play', this);
    this.set('playCount', this.get('playCount')+1);
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
