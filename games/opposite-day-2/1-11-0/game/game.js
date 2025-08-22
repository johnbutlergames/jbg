var game = {
    newGameFromMenu: false,
    backgroundOffset: {
        x: 0,
        y: 0,
    },
    backgroundPatternOffset: {
        x: 0,
        y: 0,
        angle: 0,
    },
    backgroundOpacity: 1,
    update: function () {
        var transitionPercent = this.level.levelTransition / this.level.levelTransitionCap;
        if (transitionPercent < 0.5) {
            this.objects.update();
            this.cam.update();
            this.particles.update();
        }
        this.level.update();

        this.backgroundOffset.x %= 700;
        this.backgroundOffset.y %= 700;
        this.background.update();
        this.soundEffects.update();
        this.music.update();

        if (this.input.exit) {
            menu.exitToMenu();
            this.ui.alerts.shortenAlertsForMenu();
        }
    },
    draw: function () {
        this.cam.updateRealCoordinates();

        this.background.drawColorMatte();

        ctx.save();
        this.cam.alignViewport();

        this.background.draw();
        this.objects.draw();
        this.particles.draw();
        if (this.level.showViewBox) this.cam.drawViewBox();

        ctx.restore();

        this.level.drawLevelTransition();
        this.level.drawRestartTransition();
    },
    newGame: function () {
        saveData = {
            levelsBeaten: 0,
            blueCubesDiscovered: [],
            blueCubesCollected: [],
            ultraBlueCubesDiscovered: [],
            ultraBlueCubesTaken: [],
            redCubesCollected: [],
            redCubesDiscovered: [],
            ultraRedCubesDiscovered: [],
            ultraRedCubesTaken: [],
            shortcutsDiscovered: [],
            ultraShortcutsTaken: [],
            ultraShortcutsDiscovered: [],
            shortcutsTaken: [],
            bestLevelSplits: [],
            time: 0
        };
        this.ui.timer.newGame();
        deleteSaveData();
        this.level.load(0);
        this.ui.timer.newGame();
    }
}