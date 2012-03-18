

$(document).ready(function() {
	//$("#trending").hide();
	$("#favorite_error").hide();
	$("#play").hide();
	$("#play").click(function() {
		$("#play").fadeOut(200);
		$("#pause").delay(200).fadeIn(200);
		Navigation.resume();
	});
	$("#pause").click(function() {
		$("#pause").fadeOut(200);
		$("#play").delay(200).fadeIn(200);
		Navigation.pause();
	});
	$("#next").click(function() {
		if($("#play").is(":visible")) {
			$("#play").fadeOut(200);
			$("#pause").delay(200).fadeIn(200);
		}
		Navigation.next();
	});
	$("#back").click(function() {
		Navigation.back();
	});
	$("#tweet").click(function() {
		var theSong;
		if(currentTrackId == null) {
			theSong = Tracks.songs[Tracks.currentSong];
		}
		else {
			for(song in Tracks.songs) {
				if(Tracks.songs[song].trackId == currentTrackId) {
					theSong = Tracks.songs[song];
				}
			}
		}
		window.open("https://twitter.com/share?url=http%3A%2F%2Fwww.arboristfm.com%2Ftrack%2F" + theSong.trackId + "&text=Listening to " + theSong.trackName + " by " + theSong.trackArtist + " on @arborist", "_blank", 'width=500, height=300');
	});
	$("#tweet").hover(function() {
		$(this).children(".twitter_img").attr("src", "/images/twitter_white.png");
	}, function() {
		$(this).children(".twitter_img").attr("src", "/images/twitter_blue.png");
	});
})