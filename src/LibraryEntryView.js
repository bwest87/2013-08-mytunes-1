var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td class="addtoQueue">+</td>'),

  events: {
    'click': function() {
      this.model.play();
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
