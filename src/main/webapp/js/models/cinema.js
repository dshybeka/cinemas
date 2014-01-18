CinemasApp.Cinema = DS.Model.extend({
  title: DS.attr('string'),
  photoUrl: DS.attr('string'),
  description: DS.attr('string'),
  minDescription: DS.attr('string'),
  raiting: DS.attr('string'),
  trailer: DS.attr('trailer')
});

CinemasApp.Cinema.FIXTURES = [
  {
    id: 1,
    title: 'Eлки 3',
    photoUrl: "http://images.afisha.tut.by/user.files/652659trees.jpg",
    description: "Если ты сделал добро, тебе не обязательно ответят добром — это правда жизни. Ты помог кому-то, а тебе помог неизвестный… Случайно? Это бумеранг добра, который будет запущен героем нашей объединяющей истории, пройдет внутри других новелл, вызвав волну добрых поступков и серьезные изменения для всех героев, и вернется к тому, кто все начал, в тот момент, когда надеяться, кажется, будет уже не на что.",
    minDescription: "",
	raiting: 'rating_s onestar_s',
trailer: 'width=420&height=280&file=http://images.afisha.tut.by/trailers/cc/ccsxhlnjgdfqgpbwxseykdsjcypy.mp4&image=http://images.afisha.tut.by/trailers/cc/ccsxhlnjgdfqgpbwxseykdsjcypy.jpg&id=playerID'
  },
  {
    id: 2,
    title: 'Любовь в большом городе 3',
    photoUrl: "http://afisha.tut.by/user.files/image/fy/fymzgsknrvtkpajhzhfgswyzkjp.jpg",
    description: "В жизни каждого отца, рано или поздно наступает момент, когда жена улетает на заслуженный отдых, а он остается один на один с собственным ребенком. Казалось бы — ничего сложного! Также подумали Игорь, Артем и Сауна, даже не подозревая, какой «водопад» приключений накроет их с головой. ",
    minDescription: "",
	raiting: 'rating_s fourstar_s',
	trailer: 'width=420&height=280&file=http://images.afisha.tut.by/trailers/cc/ccsxhlnjgdfqgpbwxseykdsjcypy.mp4&image=http://images.afisha.tut.by/trailers/cc/ccsxhlnjgdfqgpbwxseykdsjcypy.jpg&id=playerID'
  },
  {
    id: 3,
    photoUrl: "http://img.tyt.by/n/afisha/0b/7/revansh.jpg",
    title: "Забойный реванш",
    description: "Фильм расскажет о двух бывших боксерах, решающих вернуться на ринг ради финального матча, который должен будет уладить все их разногласия и расставить точки над «и».",
    minDescription: "",
	raiting: 'rating_s fivestar_s',
trailer: 'width=420&height=280&file=http://images.afisha.tut.by/trailers/cc/ccsxhlnjgdfqgpbwxseykdsjcypy.mp4&image=http://images.afisha.tut.by/trailers/cc/ccsxhlnjgdfqgpbwxseykdsjcypy.jpg&id=playerID'
  }
];