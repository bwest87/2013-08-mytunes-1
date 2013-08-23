var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: function(model) {
    var title = model.get('title');
    var titleEncoded = encodeURI(this.model.get('title'));
    var artist = model.get('artist');
    var playCount = model.get('playCount');
    var temp = '<td class="artist">(' + artist + ')</td> <td class="title"><a href="#/song/' + titleEncoded + '">' + title + '</a></td> <td class="playCount">' + playCount + ' </td><td class="addtoQueue">+</td>';
    return _.template(temp);
  },

  events: {
    'click .artist': function() {
      this.model.play();
      this.render();
    },
    'click .title a': function() {
      this.model.play();
      this.render();
    },
    'click .addtoQueue': 'addtoQueue'
  },

  render: function(){
    return this.$el.html(this.template(this.model));
  },

  addtoQueue: function() {
    this.model.enqueue();
  }

});
