CinemasApp.Router.map(function () {
  this.resource('cinemas', { path: '/' });
});

CinemasApp.CinemasRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('cinema');
  }
});
