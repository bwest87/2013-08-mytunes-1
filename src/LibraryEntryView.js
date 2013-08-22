var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="artist">(<%= artist %>)</td> <td class="title"><%= title %></td> <td class="playCount"> <%= playCount %> </td><td class="addtoQueue">+</td>'),

  events: {
    'click': function() {
      this.model.play();
      this.model.enqueue();
      this.render();
    },
    'click .addtoQueue': 'addtoQueue'
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  },

  addtoQueue: function() {
    this.model.enqueue();
  }

});
