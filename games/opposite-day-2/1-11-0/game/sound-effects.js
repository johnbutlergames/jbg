game.soundEffects = {
    update: function () {
        var volume = audios.bubbles.trueVolume || 0;
        volume -= 0.004;
        if (!game.objects.objects.find(e => e.type == "player eye")) volume -= 0.05;
        volume = Math.max(volume, 0);
        audios.bubbles.volume = volume * menu.settings.soundEffectsVolume * (menu.settings.soundEffectsMuted ? 0 : 1);
        audios.bubbles.trueVolume = volume;
        if (volume) audios.bubbles.play();
    },
    updateSoundEffectsVolume: function (v) {
        var soundEffects = Object.keys(audios).filter(e => !musicAudios.includes(e));
        for (var o of soundEffects) {
            audios[o].volume = v;
        }
    },
    landNumber: 0,
    collectBlueCube: function () {
        audios.collectBlueCube.currentTime = 0;
        audios.collectBlueCube.play();
    },
    recollectBlueCube: function () {
        audios.recollectBlueCube.currentTime = 0;
        audios.recollectBlueCube.play();
    },
    blueCubeClue: function () {
        audios.blueCubeClue.currentTime = 0;
        audios.blueCubeClue.play();
    },
    blueCubePreClue: function () {
        audios.blueCubePreClue.currentTime = 0;
        audios.blueCubePreClue.play();
    },
    shortcut: function () {
        audios.shortcut.currentTime = 0;
        audios.shortcut.play();
    },
    preShortcut: function () {
        audios.preShortcut.currentTime = 0;
        audios.preShortcut.play();
    },
    collectRedCube: function () {
        audios.collectRedCube.currentTime = 0;
        audios.collectRedCube.play();
    },
    recollectRedCube: function () {
        audios.recollectRedCube.currentTime = 0;
        audios.recollectRedCube.play();
    },
    redCubeClue: function () {
        audios.redCubeClue.currentTime = 0;
        audios.redCubeClue.play();
    },
    redCubePreClue: function () {
        audios.redCubePreClue.currentTime = 0;
        audios.redCubePreClue.play();
    },
    sokobanCubeBox: function (n) {
        var name = "sokobanBox" + n;
        audios[name].currentTime = 0;
        audios[name].play();
    },
    pressButton: function () {
        audios.pressButton.currentTime = 0;
        audios.pressButton.play();
    },
    doorSlam: function () {
        audios.doorSlam.currentTime = 0;
        audios.doorSlam.play();
    },
    jump: function () {
        var name = "jump" + Math.floor(Math.random() * 3 + 1);
        audios[name].currentTime = 0;
        audios[name].play();
    },
    wallJump: function () {
        audios.wallJump.currentTime = 0;
        audios.wallJump.play();
    },
    wallHit: function () {
        audios.wallHit.currentTime = 0;
        audios.wallHit.play();
    },
    land: function () {
        this.landNumber++;
        this.landNumber %= 3;
        var name = "land" + (this.landNumber + 1);
        audios[name].currentTime = 0;
        audios[name].play();
    },
    landGlass: function () {
        this.landNumber++;
        this.landNumber %= 3;
        var name = "landGlass" + (this.landNumber + 1);
        audios[name].currentTime = 0;
        audios[name].play();
    },
    heavyLand: function () {
        audios.heavyLand.currentTime = 0;
        audios.heavyLand.play();
    },
    heaviestLand: function () {
        audios.heaviestLand.currentTime = 0;
        audios.heaviestLand.play();
    },
    death: function () {
        audios.death.currentTime = 0;
        audios.death.play();
    },
    pacmanDeath: function () {
        audios.pacmanDeath.currentTime = 0;
        audios.pacmanDeath.play();
    },
    switchGravity: function () {
        audios.gravitySwitch.currentTime = 0;
        audios.gravitySwitch.play();
    },
    buzzer: function () {
        audios.buzzer.currentTime = 0;
        audios.buzzer.play();
    },
    eatDot: function (n) {
        var name = "eatDot" + n;
        audios[name].currentTime = 0;
        audios[name].play();
    },
    collectCoin: function (n) {
        audios.collectCoin.currentTime = 0;
        audios.collectCoin.play();
    },
    whoosh: function () {
        audios.whoosh.currentTime = 0;
        audios.whoosh.play();
    },
    reverseWhoosh: function () {
        audios.reverseWhoosh.currentTime = 0;
        audios.reverseWhoosh.play();
    },
    bubblesStart: function () {
        audios.bubblesStart.currentTime = 0;
        audios.bubblesStart.play();
    },
    bubbles: function () {
        var volume = audios.bubbles.trueVolume || 0;
        volume += 0.1;
        volume = Math.min(volume, 1);
        audios.bubbles.volume = volume * menu.settings.soundEffectsVolume * (menu.settings.soundEffectsMuted ? 0 : 1);
        audios.bubbles.trueVolume = volume;
    },
    killJumpEnemy: function () {
        audios.killJumpEnemy.currentTime = 0;
        audios.killJumpEnemy.play();
    },
    pingPongHit: function () {
        audios.pingPongHit.currentTime = 0;
        audios.pingPongHit.play();
    },
    bossFireballExplosion: function () {
        audios.bossFireballExplosion.currentTime = 0;
        audios.bossFireballExplosion.play();
    },
    bossShootFireball: function () {
        audios.bossShootFireball.currentTime = 0;
        audios.bossShootFireball.play();
    },
    bossHurt: function () {
        audios.bossHurt.currentTime = 0;
        audios.bossHurt.play();
    },
    platformMove: function () {
        audios.platformMove.currentTime = 0;
        audios.platformMove.play();
    },
    bossDeathSlam: function () {
        audios.bossDeathSlam.currentTime = 0;
        audios.bossDeathSlam.play();
    },
    levelSelect: function () {
        audios.levelSelect.currentTime = 0;
        audios.levelSelect.play();
    },
    levelSelectInvalid: function () {
        audios.levelSelectInvalid.currentTime = 0;
        audios.levelSelectInvalid.play();
    },
    menuClick: function () {
        audios.menuClick.currentTime = 0;
        audios.menuClick.play();
    },
    eatApple: function () {
        audios.eatApple.currentTime = 0;
        audios.eatApple.play();
    },
    ultra: function () {
        audios.ultra.currentTime = 0;
        audios.ultra.play();
    },
    finish: function () {
        audios.finish.currentTime = 0;
        audios.finish.play();
    },
    ultraFinish: function () {
        audios.finish.currentTime = 0;
        audios.ultraFinish.play();
    },
    finishShortcut: function () {
        audios.finish.currentTime = 0.3;
        audios.finish.play();
    },
    blobStart: function () {
        audios.blobStart.currentTime = 0;
        audios.blobStart.play();
    },
    blobEnd: function () {
        audios.blobEnd.currentTime = 0;
        audios.blobEnd.play();
    },
    shortcutCompleted: function () {
        audios.shortcutCompleted.currentTime = 0;
        audios.shortcutCompleted.play();
    }
};