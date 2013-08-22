var SongQueue = Songs.extend({
  initialize: function(params){
    this.on('add', this.playFirst, this);
    this.on('ended', this.remove(song));
  },
  playFirst: function() {
    if(this.length === 1) {
      console.log("i'm still getting called");
      this.at(0).play();
    }
  }
});
