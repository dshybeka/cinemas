/*!
 * @overview  Custom script to display local cinemas using google map. Requires google map script
 * @usage add onLoad listener CinemasApp.GMap.initialize('map-div-id')
 * @copyright Copyright coffeteam
 * @version   0.0.1
 */

 CinemasApp.GMap = new function() {
	this.map=null;
	this.mogilev = new google.maps.LatLng(53.894017, 30.333033); //53.894017, 30.333033
	this.mogilevBounds = new google.maps.LatLngBounds(
			new google.maps.LatLng(53.7, 30.2),
			new google.maps.LatLng(53.99, 30.4));
	this.userLocation=null;
	this.targetLocation=null;
	this.customMarker=null;
	this.cinemas=[];
	
	this.cinemasMap = {"Октябрь":"Кастрычнiк", "Чырвоная зорка":"Чырвоная зорка", "Родина":"Kinovideoprokat Mogilevskoe Gosudarstvennoe Predprijatie", "Космос":"Kosmos"};
	
	this.initialize = function(mapDiv) {
		var mapOptions = {
			zoom: 12,
			center: CinemasApp.GMap.mogilev
		};

		this.geocoder = new google.maps.Geocoder();
		this.infowindow = new google.maps.InfoWindow();
		this.dirService = new google.maps.DirectionsService();
		this.dirDisplay = new google.maps.DirectionsRenderer();
		this.map = new google.maps.Map(document.getElementById(mapDiv), mapOptions);
		this.dirDisplay.setMap(this.map);

		// Try HTML5 geolocation
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
				CinemasApp.GMap.showUserLocation(pos);
			}, function() {
			  CinemasApp.GMap.handleNoGeolocation();
			});
		} else {
			// Browser doesn't support Geolocation
			this.handleNoGeolocation();
		}

		this.showCinemas();
	}
	
	this.handleNoGeolocation = function() {
		  $("#map-custom-address").show();
		  this.autocomplete = new google.maps.places.Autocomplete(
				(document.getElementById('map-custom-address-input')), {types: ['geocode'], bounds: this.mogilevBounds});	
		  this.map.setCenter(this.mogilev);
	}

	this.createCinema = function(name, marker) {
		var cinema = new Object();
		cinema.name = name;
		cinema.marker = marker;
		return cinema;
	}
	
	this.showCinemas = function () {
		this.cinemas = [];

		var request = {
			location: this.mogilev,
			radius: 2000,
			types: ['movie_theater']
		};

		var placeSearch = new google.maps.places.PlacesService(this.map);

		placeSearch.nearbySearch(request, function (results, status) {
		  if (status == google.maps.places.PlacesServiceStatus.OK) {
			for (var i = 0; i < results.length; i++) {
			  CinemasApp.GMap.addCinema(results[i]);
			}
		  }
		});
	}
	
	this.addCinema = function(place) {
		var placeLoc = place.geometry.location;
		var marker = this.createMarker(place.geometry.location);

		google.maps.event.addListener(marker, 'click', function() {
			CinemasApp.GMap.infowindow.setContent(place.name);
			CinemasApp.GMap.infowindow.open(CinemasApp.GMap.map, this);
		});

		var cinema = this.createCinema(place.name, marker);
		this.cinemas.push(cinema);
	}

	this.showCinema = function (cinemaName) {
		
		var mapName = null;
		if (cinemaName in this.cinemasMap) {
			mapName = this.cinemasMap[cinemaName];
		}
		
		if (mapName != null) {
			for (var index in this.cinemas) {
				var cinema = this.cinemas[index];
				if (cinema.name == mapName) {
					this.map.setCenter(cinema.marker.position);
					this.map.setZoom(16);
					this.targetLocation = cinema.marker.position;
					this.calcRoute();
					break;
				}
			}
		}
	}

	this.decodeAddress= function (address, handler) {
		this.geocoder.geocode( { 'address': address}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				handler(results[0].geometry.location);
			}
		});
	}

	this.findCustomAddress = function () {
		this.clearCustomMarker();
		this.decodeAddress($("#map-custom-address-input").val(), 
			function(position) {
				CinemasApp.GMap.showUserLocation(position);
				CinemasApp.GMap.calcRoute();
			});
	}

	this.clearCustomMarker= function () {
		if (this.customMarker != null) {
			this.customMarker.setMap(null);
		}
	}
	
	this.showUserLocation = function (position) {
		this.map.setCenter(position);
		this.userLocation = position;
		this.customMarker = this.createUserMarker(position, "You are here");
		
		google.maps.event.addListener(this.customMarker, 'click', function() {
			CinemasApp.GMap.infowindow.setContent("You are here");
			CinemasApp.GMap.infowindow.open(CinemasApp.GMap.map, this);
		});
		this.infowindow.setContent("You are here");
		this.infowindow.open(this.map, this.customMarker);
	}
		
	this.createMarker= function(location) {
		return new google.maps.Marker({
				map: this.map,
				position: location
		});
	}

	this.createUserMarker= function(location, name) {
		return new google.maps.Marker({
				map: this.map,
				position: location,
				title: name,
				draggable:false,
				animation: google.maps.Animation.DROP
		});
	}

	this.calcRoute= function() {
		if (this.userLocation != null && this.targetLocation != null) {
			  var request = {
				  origin: this.userLocation,
				  destination: this.targetLocation,
				  // Note that Javascript allows us to access the constant
				  // using square brackets and a string value as its
				  // "property."
				  travelMode: google.maps.TravelMode['DRIVING']
			  };
			  this.dirService.route(request, function(response, status) {
				if (status == google.maps.DirectionsStatus.OK) {
				  CinemasApp.GMap.dirDisplay.setDirections(response);
				}
			 });
		}
	}
 }
