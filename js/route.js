CinemasApp.Router.map(function () {
  this.resource('about');
  this.resource('cinemas', { path: '/' });
  this.resource('detail', { path: ':cinema_id' });
});

CinemasApp.CinemasRoute = Ember.Route.extend({
  model: function () {
    // $.get( "http://afisha.tut.by/film.php?fid=3576").done(function( data ) {
    //    console.log("start");
    //    var textArea = $(data).find(".filmImage").find("img").attr('src');
	//    var rating = $(data).find(".rating_s").attr('class');
    // });
    return this.store.find('cinema');
  }
});

CinemasApp.CinemaRoute = Ember.Route.extend({
  model: function(params) {
    return cinemas.findBy('id', params.cinema_id);
  }
});
