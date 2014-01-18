window.CinemasApp = Ember.Application.create();

CinemasApp.ApplicationAdapter = DS.FixtureAdapter.extend();

var showdown = new Showdown.converter();
Ember.Handlebars.helper('format-markdown', function(input) {
    return new Handlebars.SafeString(showdown.makeHtml(input));
});

Ember.Handlebars.helper('format-markdown-minimized', function(input) {
    return new Handlebars.SafeString(showdown.makeHtml(input.substr(0,150) + "..."));
});
