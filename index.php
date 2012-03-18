<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
	
	<title>Arborist | The sounds of Ann Arbor</title>
	<link rel='stylesheet' href="/css/master.css" />
	<link rel="icon" type="image/png" href="/images/favicon.ico">
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script src="/js/soundmanager2-jsmin.js"></script>
	<script src="http://connect.soundcloud.com/sdk.js" type="text/JavaScript"></script>
	<script src="/js/navigation.js" type="text/JavaScript"></script>
	<script src="/js/arborist.js" type="text/JavaScript"></script>
	<script src="/js/utility.js" type="text/JavaScript"></script>
	
	<script type="text/javascript">
	var currentTrackId = <?
		if(isset($_GET["track"])) {
			echo $_GET["track"];
		}
		else {
			echo "null";
		}
	?>;

	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-28041327-1']);
	  _gaq.push(['_trackPageview']);

	  (function() {
	    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();

	</script>
</head>
<body>
	<script>
	soundManager.url = '/soundmanagerswf/';
	soundManager.debugMode = false;
	soundManager.onready(function() {
		Tracks.initialize();
		Navigation.initialize();
	});
	</script>
	<div id="container">
		<div class="header">
			<!--<img src="images/logoclear.png"/ style="width: 25px; display: inline;"><h1>RBORIST</h1>-->
			<img src="/images/header.png" style="width: 150px"/>
			<h3>The sounds of Ann Arbor</h3>
		</div>
		<div id="player" class="pane">
			<div id="currentTitle"></div>
			<div id="currentArtist"></div>
			<div id="trackBarContainer">
				<div id="loadedBar">
					<div id="currentBar"></div>
				</div>
			</div>
			<div id="playpausecontainer">
				<div id="play" class="playerbutton">PLAY</div>
				<div id="pause" class="playerbutton">PAUSE</div>
			</div>
			<div id="back" class="playerbutton">Back</div>
			<div id="next" class="playerbutton">Next</div>
			<div id="tweet" class="playerbutton"><img src="/images/twitter_blue.png" class="twitter_img"></div>
		</div>
		<!--
		<div class="header">
			#trending fthrsn
		</div>
		<img src="images/trending/fthrsn.jpg" style="width: 500px;" class="trending_image"/>
		<div id="trending" class="pane">
			fthrsn is cool cool cool cool cool. and cool cool cool cool
		</div> -->
		<br/>
		<div id="favorite_error" class="error_message pane">
			That feature isnt ready yet! Sorry!
		</div>
		<div id="footer">
			Made with &hearts; in Ann Arbor.<br/>
			Powered by Soundcloud.
		</div>
	</div>
</body>
</html>