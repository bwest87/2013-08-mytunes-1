var SongQueueEntryView = Backbone.View.extend({
  events: {
    'click .removeButton': 'removeFromQueue'
  },

  tagName: 'tr',

  template: _.template('<td class="artist">(<%=artist%>)</td><td class="title"><%=title%></td><td class="removeButton">-</td>'),

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  },

  removeFromQueue: function() {
    this.model.dequeue();
  }

});
