var Navigation = {
	initialize: function() {
		var soundObj;
		SC.initialize({
			client_id: "0fcb5b2bf30dd4fe9f4ab1551a794eb2",
		});
		var fullUrl = parent.document.URL;
		var urlSegments = fullUrl.split('/');
		/*if(urlSegments.length == 5) {
			var urlTrack = urlSegments[4];
			this.playById(Tracks.songs[Tracks.currentSong]);
		}*/
		if(currentTrackId == null) {
			Navigation.playByObject(Tracks.songs[Tracks.currentSong]);
		}
		else {
			console.log("set");
			Navigation.playById(currentTrackId);
		}
	},
	playByObject: function(track) {
		soundObj = SC.stream(track.trackId);
		
		//add artist clickthrough
		if(track.bandcamp != "") {
				$("#currentArtist").html("<a href=\"http://" + track.bandcamp + "\" target=\"_blank\">" + track.trackArtist + "</a>");
		}
		else {
				$("#currentArtist").html(track.trackArtist);
		}
		
		//add track clickthrough
		SC.get("/tracks/" + track.trackId, function(track_data) {
			$("#currentTitle").html("<a href=\"" + track_data.permalink_url + "\" target=\"_blank\">" + track.trackName + "</a>");
		});
		
		soundObj.play({
			whileplaying: function() {
				$("#currentBar").width(400 * this.position/track.trackDuration);
			},
			whileloading: function() {
				$("#loadedBar").width(400 * this.duration/track.trackDuration);
			},
			onfinish: function() {
				Navigation.next();
			}
		});
	},
	playById : function(currentId) {
		for(song in Tracks.songs) {
			if(Tracks.songs[song].trackId == currentId) {
				Navigation.playByObject(Tracks.songs[song]);
			}
		}
	},
	resume: function() {
		soundObj.resume();
	},
	next: function() {
		soundObj.stop();
		soundObj.destruct();
		if(Tracks.currentSong != Tracks.songs.length) {
			Tracks.currentSong++;
		}
		this.playByObject(Tracks.songs[Tracks.currentSong]);
	},
	back: function() {
		soundObj.stop();
		soundObj.destruct();
		if(Tracks.currentSong != 0) {
			Tracks.currentSong--;
		}
		this.playByObject(Tracks.songs[Tracks.currentSong]);
	},
	pause: function() {
		soundObj.pause();
	}
}

var Tracks = {
	initialize: function() {
		//getting tracks from dB
		$.ajax(
		{
			async: false,
			type: "GET",
			url: "/server/arborist_get.php",
			data: "action=get_tracks",
			success: function(msg) {
				data = JSON.parse(msg);
				for(track in data) {
					var thistrack = data[track];
					Tracks.songs.push(thistrack);
				}
				Tracks.randomizeTracks();
			}
		});
		
	},
	randomizeTracks: function() {
		Tracks.songs.sort(function() {return 0.5 - Math.random()});
	},
	songs: [],
	artist_meta: [],
	currentSong: 0,
}