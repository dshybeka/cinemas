CinemasApp.CinemaController = Ember.ObjectController.extend({
    isMinimized: true,

    actions: {
        minimizeMaximize: function () {

            this.set('isMinimized', !this.isMinimized);
            return ;
        }
    }
});

CinemasApp.CinemasController = Ember.ArrayController.extend();

