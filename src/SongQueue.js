var SongQueue = Songs.extend({
  initialize: function(){
    this.on('add', function() {
      if(this.length === 1) {
        this.playFirst();
      }
    } , this);
    this.on('ended', function() {
      this.shift();
      if(this.length === 1) {
        this.playFirst();
      }
    });
    // this.on('dequeue', function() {
    //   this.remove(this.at(this.length));
    // });
    this.on('dequeue', this.remove);
  },
  playFirst: function() {
    this.at(0).play();
  }
});
