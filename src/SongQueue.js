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
    this._meta = {};
  },
  playFirst: function() {
    this.at(0).play();
    this.at(0).set('playCount', this.at(0).get('playCount')-1);
  },
  meta: function(prop, value) {
    if(this._meta[prop] === undefined) {
      this._meta[prop] = value;
    } else {
      return this._meta[prop];
    }
  }
});
