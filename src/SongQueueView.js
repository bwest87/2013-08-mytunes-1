var SongQueueView = Backbone.View.extend({
  tagName: 'table',

  initialize: function() {
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  render: function() {
    return this.$el.html('<th>' + this.collection.meta('name') + '</th>').append(this.collection.map(function(song) {
      return new SongQueueEntryView({model: song}).render();
    }));
  }

});
