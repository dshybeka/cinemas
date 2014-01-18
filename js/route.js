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
    // });

    // $.get( "http://afisha.tut.by/film.php?fid=3735&city=Mogilev").done(function( data ) {

    //     var scheduleModels = [];

    //     var scheduleRows = [];
    //     var textArea = $(data).find("#__raspisanie_first").find("tr").each(function(index) {
    //         scheduleRows.push($(this).text());
    //         //console.log( "some text " + $(this).text() );
    //     });

    //     var scheduleDate;
    //     for (var i = 0; i < scheduleRows.length; ++i) {

    //         var scheduleModel = {date: "", cinema: [], schedule: []};

    //         var scheduleInfoDirty = scheduleRows[i].split("\n");
    //         var scheduleInfo = scheduleInfoDirty.filter(function(n){return n.trim()})

    //         if (scheduleInfo != undefined && scheduleInfo.length > 1 ) {
    //             console.log("in if");
    //             var firstParam = scheduleInfo[0].trim();
    //             if (firstParam.indexOf(",") != -1) {
    //                 scheduleDate = scheduleInfo[0].trim();

    //                 scheduleModel.cinema.push(scheduleInfo[1].trim());

    //                 for (var j = 2; j < scheduleInfo.length; ++j) {
    //                     if (scheduleInfo[j] != undefined) {
    //                         scheduleModel.schedule.push(scheduleInfo[j].trim());
    //                     }
    //                 }
    //             } else {
    //                 scheduleModel.cinema.push(scheduleInfo[0].trim());

    //                 for (var j = 1; j < scheduleInfo.length; ++j) {

    //                     if (scheduleInfo[j] != undefined) {
    //                         scheduleModel.schedule.push(scheduleInfo[j].trim());
    //                     }
    //                 }
    //             }
    //             scheduleModel.date = scheduleDate;
    //             scheduleModels.push(scheduleModel);
    //         }

    //     }
        
    //     // for (var i = 0; i < scheduleModels.length; ++i) { 
    //     //     console.log("scheduleModels " + scheduleModels[i].date);
    //     //     console.log("scheduleModels " + scheduleModels[i].cinema);
    //     //      console.log("scheduleModels " + scheduleModels[i].schedule);
    //     // }

    // });
    return this.store.find('cinema');
  }
});

CinemasApp.CinemaRoute = Ember.Route.extend({
  model: function(params) {
    return cinemas.findBy('id', params.cinema_id);
  }
});
