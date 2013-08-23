var App = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new Song());
    this.set('songQueue', new SongQueue());
    this.get('songQueue').meta('name', 'firstQueue');

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song) {
      this.get('songQueue').add(song);
    }, this);

    this.on('createQueue', function(name) {
      console.log(name);
      this.set(name, new SongQueue());
      this.get(name).meta('name', name);
      $('body').append(new SongQueueView({collection: this.get(name)}).render());
    }, this);
    // var newRouter = new newRouter();
  }

  //use select tag to easily add to a given queue
  //or go for drag and drop to be bad ass.http://html5demos.com/drag#view-source

});
