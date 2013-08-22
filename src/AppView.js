var AppView = Backbone.View.extend({

  events: {
    'click .newQueueButton': 'createQueue'
  },

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});

    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      new LibraryView({collection: this.model.get('library')}).render(),
      new SongQueueView({collection: this.model.get('songQueue')}).render(),
      '<div class="newQueueButton">Create New Queue</div>'
    ]);
  },

  createQueue: function() {
    var name = prompt('What would you like to name your new queue?');
    this.model.trigger('createQueue', name);
  }


});
