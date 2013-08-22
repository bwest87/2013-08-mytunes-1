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
    this.on('dequeue', this.remove);
    this.on('enqueue', function() {
      console.log('i should be adding');
      this.add();
    });
  },
  playFirst: function() {
    this.at(0).play();
  }
});
