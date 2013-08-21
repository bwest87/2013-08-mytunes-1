var SongQueue = Songs.extend({
  initialize: function(){
    this.on('add', this.playFirst, this);
  },
  playFirst: function() {
    console.log("i'm getting called!");
  }
});
