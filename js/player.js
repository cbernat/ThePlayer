var player = 
{
	
	initialize: function (containerId){
		var playerObject = $("<audio/>", {id :'musicPlayer'});
		$("#"+containerId).append(playerObject);
	},
	
	
	addToPlaylist: function (song)
	{
		if ($("#musicPlayer").length > 0)
		{
			var playerObject = $("#musicPlayer");
			var source= $('<source/>');
			if (playerObject[0].canPlayType('audio/mpeg;')) {
				$(source).attr("type", "audio/mpeg");
				$(source).attr("media",+song+'.mp3');
			} else {
				$(source).attr("type", 'audio/ogg');
				$(source).attr("src", 'media/'+song+'.ogg');
			}
			$(playerObject).append(source);
		}
	},
	Play: function(){
		$("#musicPlayer")[0].play();
	}
	
}	
