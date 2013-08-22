var Song = Backbone.Model.extend({

  play: function(){
    this.trigger('play', this);
  },
  ended: function() {
    this.trigger('ended', this);
  },
  dequeue: function() {
    console.log('model is triggering');
    this.trigger('dequeue', this);
  }

});
