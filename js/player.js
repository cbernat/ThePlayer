var player = 
{
	playerObject: $("<audio/>", {id :'musicPlayer'}),
	currentTrack:0,
	trackCount:0,
	repeatPlayList: false,
	playlistSources: "",
	initialize: function (){
		
		this.playerObject = $("<audio/>", {id :'musicPlayer'});
		this.playlistSources = new Array();
		$(this.playerObject).on('ended',function(){
		
			if(this.currentTrack==this.trackCount-1){
				if(this.repeatPlayList){
					this.currentTrack = 0;
					this.playerObject.src = this.playlistSources[this.currentTrack];
					this.Play();
				}
			}else{
				this.currentTrack++;
				this.playerObject.src = this.playlistSources[this.currentTrack];
				this.Play();
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
					this.playerObject.src = this.playlistSources[this.currentTrack];
					this.playerObject[0].load();
					this.Play();
				}
			}else{
				this.currentTrack++;
				this.playerObject.src = this.playlistSources[this.currentTrack];
				this.playerObject[0].load();
				this.Play();
			}
	}
	
	
	
}	
