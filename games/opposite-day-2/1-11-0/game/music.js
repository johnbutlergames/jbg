game.music = {
    volume: 1,
    musicVolumes: [
        { name: "oppositeDayTheme", volume: 0 },
        { name: "incompletionTheme", volume: 0 },
        { name: "notTheRealBossfight", volume: 0 }
    ],
    updateVolume: function (v) {
        this.volume = v;
    },
    update: function () {
        var musicPlaying = [];
        if (menu.titleScreen) {
            musicPlaying.push("oppositeDayTheme");
        } else if (menu.creditsScreen) {
            musicPlaying.push("incompletionTheme");
        } else {
        }
        for (var o of this.musicVolumes) {
            if (musicPlaying.includes(o.name)) {
                var currentlyPlaying = this.musicVolumes.find(e => e.volume > 0);
                if (!currentlyPlaying) {
                    o.volume = 1;
                } else if (currentlyPlaying.name === o.name) {
                    o.volume = 1;
                } else {
                    o.volume -= 0.01;
                }
            } else {
                o.volume -= 0.01;
            }
            o.volume = Math.max(Math.min(o.volume, 1), 0);
            if (o.volume === 0 && !audios[o.name].paused) {
                audios[o.name].pause();
                audios[o.name].currentTime = 0;
            } else if(o.volume) {
                audios[o.name].volume = o.volume * this.volume;
                audios[o.name].play();
            }
        }
    }
};