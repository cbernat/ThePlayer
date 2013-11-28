var player = 
{
	playerObject: $("<audio/>", {id :'musicPlayer'}),
	currentTrack:0,
	trackCount:0,
	repeatPlayList: true,
	playlistSources: "",
	initialize: function (){
		
		this.playerObject = $("<audio/>", {id :'musicPlayer'});
		this.playlistSources = new Array();
		$(this.playerObject).on('ended',function(){
		
			if(player.currentTrack==player.trackCount-1){
				if(player.repeatPlayList){
					player.currentTrack = 0;
					player.playerObject[0].src = player.playlistSources[player.currentTrack];
					player.Play();
				}
			}else{
				player.currentTrack++;
				player.playerObject[0].src = player.playlistSources[player.currentTrack];
				player.Play();
			}
		});
		this.currentTrack=0;
		if (!(!!(this.playerObject.canPlayType) && ("no" != this.playerObject.canPlayType("audio/mpeg")) && ("" != this.playerObject.canPlayType("audio/mpeg")))) {
			//Add flash fallback here
		}
	},

	addToPlaylist: function (song)
	{
		if ($(this.playerObject).length > 0)
		{
			var source= $('<source/>');
			if (this.playerObject[0].canPlayType('audio/mpeg;')) {
				$(source).attr("src", song);
				this.playlistSources[this.trackCount] = song;
				$(source).attr("type", "audio/mpeg");
			} 
			$(this.playerObject).append(source);
			this.trackCount++;
		}
	},
	
	Play: function(){
		this.playerObject[0].play();
	},
	
	Next: function(){
		if(this.currentTrack==this.trackCount-1){
				if(this.repeatPlayList){
					this.currentTrack = 0;
					this.playerObject[0].src = this.playlistSources[this.currentTrack];
					this.playerObject[0].load();
					this.Play();
				}
			}else{
				this.currentTrack++;
				this.playerObject[0].src = this.playlistSources[this.currentTrack];
				this.playerObject[0].load();
				this.Play();
			}
	},
	Prev: function(){
		if(this.currentTrack==0){
				if(this.repeatPlayList){
					this.currentTrack = this.trackCount-1;
					this.playerObject[0].src = this.playlistSources[this.currentTrack];
					this.playerObject[0].load();
					this.Play();
				}
			}else{
				this.currentTrack--;
				this.playerObject[0].src = this.playlistSources[this.currentTrack];
				this.playerObject[0].load();
				this.Play();
			}
	}
	
	
	
}	
