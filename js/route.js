CinemasApp.Router.map(function () {
  this.resource('about');
  this.resource('cinemas', { path: '/' });
});

CinemasApp.CinemasRoute = Ember.Route.extend({
  model: function () {
    // $.get( "http://afisha.tut.by/film.php?fid=3576").done(function( data ) {
    //    console.log("start");
    //    var textArea = $(data).find(".filmImage").find("img").attr('src');
    // });
    return this.store.find('cinema');
  }
});
