game.level = {
    level: 0,
    tookShortcutLastLevel: false,
    levelAnimationTime: 0,
    playerControlDelay: 0,
    ultraCubeCollectPause: 0,
    ultraCubeCollecting: null,
    playerInPortal: false,
    portalNumber: false,
    playerExitingPortal: false,
    playerSpawnPoint: {},
    lastPlayerPosition: {},
    levelComplete: false,
    levelTransition: 0,
    levelTransitionCap: 100,
    restartLevelTransition: 0,
    restartingLevel: false,
    restartGameTransition: 0,
    restartingGame: false,
    playerDead: false,
    playerRespawnTime: 0,
    levelCompleteFunction: false,
    playerDeadFunction: false,
    manualRespawn: false,

    autoSkipCutscenes: false,
    lockedCamera: false,
    lockedPlayerCamera: false,
    stopLevelComplete: false,
    showWireframes: false,
    showViewBox: false,
    forceVisibility: false,
    playerInvincible: false,
    playerGlobalWallJump: false,
    playerSpeedMultiplier: 1,
    playerJumpMultiplier: 1,
    playerFallMultiplier: 1,
    playerFlightMode: false,
    update: function () {
        if (this.ultraCubeCollectPause) {
            this.ultraCubeCollectPause--;
            let player = game.objects.objects.find(e => e.type == "player");
            if (player) {
                let targetX = this.ultraCubeCollecting.x - player.w / 2;
                let targetY = this.ultraCubeCollecting.y - player.h / 2;
                player.x = player.x * 0.9 + targetX * 0.1;
                player.y = player.y * 0.9 + targetY * 0.1;
            }
            return;
        }

        this.levelAnimationTime++;

        if (this.playerControlDelay) this.playerControlDelay--;
        if (this.autoSkipCutscenes) this.playerControlDelay = 0;

        var player = game.objects.objects.find(e => e.type == "player");
        var playerEye = game.objects.objects.find(e => e.id == "player eye 1") && game.objects.objects.find(e => e.id == "player eye 2");
        if (player) {
            this.lastPlayerPosition.x = player.x;
            this.lastPlayerPosition.y = player.y;
        } else if (playerEye) {
            var eye1 = game.objects.objects.find(e => e.id == "player eye 1");
            var eye2 = game.objects.objects.find(e => e.id == "player eye 2");
            this.lastPlayerPosition.x = eye1.x * 0.5 + eye2.x * 0.5;
            this.lastPlayerPosition.y = eye1.y * 0.5 + eye2.y * 0.5;
        } else {
            var possiblePlayers = game.objects.objects.filter(e => e.type.includes("player") && e.type != "player copy");
            var substitutePlayer = possiblePlayers[possiblePlayers.length - 1];
            if (substitutePlayer) {
                this.lastPlayerPosition.x = substitutePlayer.x;
                this.lastPlayerPosition.y = substitutePlayer.y;
            }
        }

        this.triggers.update();

        if (this.levelComplete) {
            this.levelTransition++;
            if (this.levelTransition == 20) game.soundEffects.reverseWhoosh();
            if (this.levelTransition >= this.levelTransitionCap) {
                game.background.effect.end("all");
                game.ui.timer.updateBestLevelSplit(this.level);
                this.level++;
                if (this.tookShortcutLastLevel) {
                    this.reload(this.level, false);
                    var player = game.objects.objects.find(e => e.type == "player");
                    player.spawnTime = 0;
                    player.spawnAnimation = 0;
                    this.tookShortcutLastLevel = false;
                } else {
                    this.load(this.level);
                }
                game.ui.timer.newLevel();
                saveData.levelsBeaten = Math.max(saveData.levelsBeaten, this.level);
                updateSaveData();
            }
            return;
        } else {
            if (this.levelTransition == 90) game.soundEffects.whoosh();
            this.levelTransition--;
        }
        this.levelTransition = Math.min(Math.max(this.levelTransition, 0), this.levelTransitionCap);

        if (this.levelCompleteFunction() && !this.stopLevelComplete) {
            this.levelComplete = true;
            if (this.triggers.tripped("ultra shortcut")) {
                this.tookShortcutLastLevel = true;
                this.takeUltraShortcut();
                game.soundEffects.ultraShortcutCompleted();
            } else if (this.triggers.tripped("shortcut")) {
                this.tookShortcutLastLevel = true;
                this.takeShortcut();
                game.soundEffects.shortcutCompleted();
            }
            game.ui.alerts.shortenAlerts();
        }

        if (!this.playerDead) {
            if (this.playerDeadFunction) {
                if (this.playerDeadFunction()) {
                    this.playerDead = true;
                    this.playerRespawnTime = 200;
                }
            } else {
                if (!player && !playerEye) {
                    this.playerDead = true;
                    this.playerRespawnTime = 200;
                }
            }
        } else {
            if (this.respawnTimeFunction) {
                this.respawnTimeFunction();
            } else {
                this.playerRespawnTime--;
            }
            var shouldManualRespawn = true;
            if (this.checkForManualRespawn) shouldManualRespawn = this.checkForManualRespawn();
            if (this.manualRespawn && shouldManualRespawn) {
                if (this.beforeManualRespawn) this.beforeManualRespawn();
                if (this.playerRespawnTime <= 0) {
                    this.playerDead = false;
                    this.manualRespawn();
                }
            } else {
                var a = Math.min(Math.max((120 - this.playerRespawnTime) / 120, 0), 1);
                var p0 = easeInOut(a);
                var p = easeInOut(a) * (1 - a);
                game.cam.x = game.cam.x * (1 - p0) + game.cam.origin.x * p0;
                game.cam.y = game.cam.y * (1 - p0) + game.cam.origin.y * p0;
                game.cam.zoom = game.cam.zoom * (1 - p) + 1 * p;
                game.cam.angle = game.cam.angle * (1 - p);
                var xOffset = 0;
                var yOffset = 0;
                if (this.originalBackgroundOffset) {
                    xOffset = this.originalBackgroundOffset.x;
                    yOffset = this.originalBackgroundOffset.y;
                }
                game.backgroundOffset.x = game.backgroundOffset.x * (1 - p) + xOffset * p;
                game.backgroundOffset.y = game.backgroundOffset.y * (1 - p) + yOffset * p;
                if (this.playerRespawnTime <= 0) {
                    this.playerDead = false;
                    this.reload(this.level);
                }
            }
        }

        if (this.restartingLevel) {
            if (this.restartLevelTransition == 10) game.soundEffects.whoosh();
            this.restartLevelTransition++;
            if (this.restartLevelTransition == 50) {
                this.restartingLevel = false;
                this.load(this.level);
                game.ui.timer.newLevel();
            }
        } else {
            this.restartLevelTransition--;
        }
        this.restartLevelTransition = Math.max(Math.min(this.restartLevelTransition, 50), 0);

        if (this.restartingGame) {
            if (this.restartGameTransition == 20) game.soundEffects.whoosh();
            this.restartGameTransition++;
            if (this.restartGameTransition == 50) {
                this.restartingGame = false;
                game.newGame();
            }
        } else {
            this.restartGameTransition--;
        }
        this.restartGameTransition = Math.max(Math.min(this.restartGameTransition, 50), 0);

        if (menu.exitingGameAnimation) {
            this.restartingGame = false;
            this.restartingLevel = false;
            this.restartGameTransition = 0;
            this.restartLevelTransition = 0;
        }

        if (game.input.restartLevel) {
            this.restartLevel();
        }

        if (game.input.restartGame && menu.settings.restartGameKeybind) {
            this.restartGame();
        }
    },
    restartLevel: function () {
        if (this.restartingLevel || this.restartingGame || menu.exitingGameAnimation || this.restartLevelTransition) return;
        if (menu.settings.instantRestart) {
            this.load(this.level);
            game.ui.timer.newLevel();
        } else {
            this.restartingLevel = true;
        }
    },
    restartGame: function () {
        if (this.restartingLevel || this.restartingGame || menu.exitingGameAnimation || this.restartGameTransition) return;
        if (menu.settings.instantRestart) {
            game.newGame();
        } else {
            this.restartingGame = true;
        }
    },
    drawRestartTransition: function () {
        if (!this.restartLevelTransition && !this.restartGameTransition) return;
        var transition = Math.max(this.restartLevelTransition, this.restartGameTransition);
        if (this.restartingGame || this.restartingLevel) {
            var a = easeInOut(transition / 50);
            ctx.save();
            ctx.translate(0, -500 + (1 - a) * 2000);
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(1000, 500);
            ctx.lineTo(1000, 2000);
            ctx.lineTo(0, 1500);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        } else {
            var a = easeInOut(transition / 50);
            ctx.save();
            ctx.translate(0, -2500 + a * 2000);
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(1000, 500);
            ctx.lineTo(1000, 2000);
            ctx.lineTo(0, 1500);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
    },
    drawLevelTransition: function () {
        if (!this.levelTransition) return;
        if (isNaN(this.lastPlayerPosition.x) || isNaN(this.lastPlayerPosition.y)) {
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, 1000, 1000);
            return;
        }
        var a = easeInOut(this.levelTransition / (this.levelTransitionCap * 0.8));
        var radius = (1 - a) * 1500;
        var cors = game.cam.alignCoordinates(this.lastPlayerPosition.x + 20, this.lastPlayerPosition.y + 20);
        var grd = ctx.createRadialGradient(cors.x, cors.y, radius, cors.x, cors.y, radius + 20);
        grd.addColorStop(0, "rgba(0,0,0,0)");
        grd.addColorStop(1, "rgba(0,0,0,1)");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, 1000, 1000);

        ctx.save();
        ctx.fillStyle = "black";
        ctx.globalAlpha = easeInOut((a - 0.99) * 100);
        ctx.fillRect(0, 0, 1000, 1000);
        ctx.restore();
    },
    discoverBlueCube: function () {
        if (!saveData.blueCubesDiscovered[this.level]) {
            saveData.blueCubesDiscovered[this.level] = true;
            game.ui.alerts.alert("blue cube discovered");
        }
        updateSaveData();
    },
    collectCube: function (o) {
        o.collectedAnimation = 20;
        o.collected = true;
        game.particles.createEffect("collect cube", o);

        if (o.red) {
            game.level.collectRedCube(o);
            if (game.level.triggers.tripped("red cube ultra")) {
                game.soundEffects.collectCubeUltra();
            } else {
                if (o.grey) {
                    game.soundEffects.recollectCube();
                } else {
                    game.soundEffects.collectCube();
                }
            }
        } else {
            game.level.collectBlueCube(o);
            if (game.level.triggers.tripped("blue cube ultra")) {
                game.soundEffects.collectCubeUltra();
            } else {
                if (o.grey) {
                    game.soundEffects.recollectCube();
                } else {
                    game.soundEffects.collectCube();
                }
            }
        }
    },
    collectBlueCube: function (o) {
        if (game.level.triggers.tripped("blue cube ultra")) {
            this.ultraCubeCollectPause = 30;
            this.ultraCubeCollecting = o;
            game.cam.screenshake = 50;
            saveData.blueCubesCollected[this.level] = true;
            if (!saveData.ultraBlueCubesTaken[this.level]) {
                saveData.ultraBlueCubesTaken[this.level] = true;
                game.ui.alerts.alert("ultra blue cube taken");
            }
        } else {
            if (!saveData.blueCubesCollected[this.level]) {
                saveData.blueCubesCollected[this.level] = true;
                game.ui.alerts.alert("blue cube collected");
            }
        }
        updateSaveData();
    },
    discoverRedCube: function () {
        if (!saveData.redCubesDiscovered[this.level]) {
            saveData.redCubesDiscovered[this.level] = true;
            game.ui.alerts.alert("red cube discovered");
        }
        updateSaveData();
    },
    collectRedCube: function (o) {
        if (game.level.triggers.tripped("red cube ultra")) {
            this.ultraCubeCollectPause = 30;
            this.ultraCubeCollecting = o;
            game.cam.screenshake = 50;
            saveData.redCubesCollected[this.level] = true;
            if (!saveData.ultraRedCubesTaken[this.level]) {
                saveData.ultraRedCubesTaken[this.level] = true;
                game.ui.alerts.alert("ultra red cube taken");
            }
        } else {
            if (!saveData.redCubesCollected[this.level]) {
                saveData.redCubesCollected[this.level] = true;
                game.ui.alerts.alert("red cube collected");
            }
        }
        updateSaveData();
    },
    discoverUltraRedCube: function () {
        if (!saveData.ultraRedCubesDiscovered[this.level]) {
            saveData.ultraRedCubesDiscovered[this.level] = true;
            game.ui.alerts.alert("ultra red cube discovered");
        }
        updateSaveData();
    },
    discoverUltraBlueCube: function () {
        if (!saveData.ultraBlueCubesDiscovered[this.level]) {
            saveData.ultraBlueCubesDiscovered[this.level] = true;
            game.ui.alerts.alert("ultra blue cube discovered");
        }
        updateSaveData();
    },
    discoverShortcut: function () {
        if (!saveData.shortcutsDiscovered[this.level]) {
            saveData.shortcutsDiscovered[this.level] = true;
            game.ui.alerts.alert("shortcut discovered");
        }
        updateSaveData();
    },
    takeShortcut: function () {
        if (!saveData.shortcutsTaken[this.level]) {
            saveData.shortcutsTaken[this.level] = true;
            game.ui.alerts.alert("shortcut taken");
        }
        updateSaveData();
    },
    discoverUltraShortcut: function () {
        if (!saveData.ultraShortcutsDiscovered[this.level]) {
            saveData.ultraShortcutsDiscovered[this.level] = true;
            game.ui.alerts.alert("ultra shortcut discovered");
        }
        updateSaveData();
    },
    takeUltraShortcut: function () {
        saveData.shortcutsTaken[this.level] = true;
        if (!saveData.ultraShortcutsTaken[this.level]) {
            saveData.ultraShortcutsTaken[this.level] = true;
            game.ui.alerts.alert("ultra shortcut taken");
        }
        updateSaveData();
    },
    createPlayer: function (x, y) {
        var o = {
            type: "player",
            x: x,
            y: y,
            w: 40,
            h: 40,
            xmove: 0,
            ymove: 0,
            targetEyeHeight: 0,
            eyeHeight: 0,
            eyeDirection: 0,
            wallSlideAnimation: 0,
            wallSlideAnimationDirection: "right",
            stretchAnimation: 0,
            splatAnimation: 0,
            lastJumpType: false,
            runSkew: 0,
            positionHistory: [],
            eyePositions: [],
            againstLeft: { current: false, last: 100, time: 0 },
            againstRight: { current: false, last: 100, time: 0 },
            againstTop: { current: false, last: 100, time: 0 },
            againstBottom: { current: false, last: 100, time: 0 },
            touchingLeft: { current: false, last: 100, time: 0 },
            touchingRight: { current: false, last: 100, time: 0 },
            touchingTop: { current: false, last: 100, time: 0 },
            touchingBottom: { current: false, last: 100, time: 0 },
            roomToJump: true,
            touchingSurfaces: {}
        };
        return o;
    },
    load: function (level) {
        this.level = level;
        this.levelAnimationTime = 0;
        game.objects.objects = structuredClone(levels[level].objects);
        game.particles.objects = [];
        var cube = game.objects.objects.find(e => e.type == "cube");
        if (cube) {
            cube.color = "blue";
            if (saveData.blueCubesCollected[this.level]) {
                cube.grey = true;
            }
        }
        var cube = game.objects.objects.find(e => e.type == "cube" && e.red);
        if (cube) {
            cube.color = "red";
            if (saveData.redCubesCollected[this.level]) {
                cube.grey = true;
            }
        }
        for (var o of game.objects.objects) {
            if (o.type == "text") o.collide = false;
            if (o.type == "arrow") o.collide = false;
            if (o.type == "button") o.slippery = o.slippery || true;
            if (!o.w || !o.h) o.collide = false;
        }
        this.playerSpawnPoint = levels[level].spawnPoint;
        var player = this.createPlayer(this.playerSpawnPoint.x, this.playerSpawnPoint.y);
        game.objects.objects.push(player);
        game.cam.levelFunction = levels[level].camFunction || false;
        game.cam.viewportBoundary = structuredClone(levels[level].viewportBoundary);
        game.cam.offset = structuredClone(levels[level].camOffset);
        var x = levels[level].camStartingPosition.x;
        var y = levels[level].camStartingPosition.y;
        if (!game.newGameFromMenu) {
            game.cam.x = x;
            game.cam.y = y;
        }
        game.newGameFromMenu = false;
        game.cam.origin = { x: x, y: y };
        game.cam.zoom = 1;
        game.cam.angle = 0;
        game.cam.screenshake = 0;
        game.cam.screenshakeStrength = 1;
        game.cam.speedModifiers = levels[level].camSpeedModifiers || false;
        game.cam.followX = levels[level].camFollowX || 0.01;
        game.cam.followY = levels[level].camFollowY || 0.01;
        game.backgroundOffset = { x: 0, y: 0 };
        this.originalBackgroundOffset = false;
        if (levels[level].backgroundOffset) {
            game.backgroundOffset = {
                x: levels[level].backgroundOffset.x,
                y: levels[level].backgroundOffset.y
            }
            this.originalBackgroundOffset = levels[level].backgroundOffset;
        }
        game.backgroundPatternOffset = { x: 0, y: 0 };
        game.backgroundOpacity = 1;
        game.level.playerRespawnTime = 0;
        game.level.playerDead = false;
        if (levels[level].playerDeadFunction) {
            this.playerDeadFunction = levels[level].playerDeadFunction;
        } else {
            this.playerDeadFunction = false;
        }
        if (levels[level].checkForManualRespawn) {
            this.checkForManualRespawn = levels[level].checkForManualRespawn;
        } else {
            this.checkForManualRespawn = false;
        }
        if (levels[level].manualRespawn) {
            this.manualRespawn = levels[level].manualRespawn;
        } else {
            this.manualRespawn = false;
        }
        if (levels[level].beforeManualRespawn) {
            this.beforeManualRespawn = levels[level].beforeManualRespawn;
        } else {
            this.beforeManualRespawn = false;
        }
        if (levels[level].respawnTimeFunction) {
            this.respawnTimeFunction = levels[level].respawnTimeFunction;
        } else {
            this.respawnTimeFunction = false;
        }
        this.playerControlDelay = levels[level].playerControlDelay || 0;
        this.playerInPortal = false;
        this.portalNumber = false;
        this.playerExitingPortal = false;
        this.triggers.triggered = [];
        this.triggers.triggerChecks = levels[level].triggers || [];
        this.levelCompleteFunction = levels[level].levelComplete;
        this.levelComplete = false;
        game.background.effect.end("all");
        this.triggers.update();
    },
    reload: function (level, hidePeekedUltras) {
        var peekedUltraIds = game.objects.objects.filter(e => e.ultra && e.peeked).map(e => e.id);
        this.load(level);
        if (hidePeekedUltras !== false) {
            peekedUltraIds.forEach(function (id) {
                var o = game.objects.objects.find(e => e.id === id);
                o.peeked = true;
            });
        }
        this.reloaded = true;
        for (var o of game.objects.objects) {
            if (o.spawnAnimation) o.spawnAnimation = 0;
        }
        this.playerControlDelay = 0;
        this.levelAnimationTime = 100000;
        var player = game.objects.objects.find(e => e.type == "player");
        player.spawnTime = 150;
        player.spawnAnimation = 20;
        game.background.effect.end("all");
        if (levels[level].reload) levels[level].reload();
    },
    triggers: {
        triggerChecks: [],
        triggered: [],
        tripped: function (name) {
            return this.triggered.includes(name);
        },
        update: function () {
            var untrip = [];
            for (var trigger of this.triggerChecks) {
                if (this.triggered.includes(trigger.name)) {
                    if (trigger.passive && !trigger.noDoublePassive) trigger.passive();
                    if (trigger.stop && trigger.stop()) {
                        if (trigger.untrip) trigger.untrip();
                        untrip.push(trigger.name);
                    }
                    continue;
                }
                if (trigger.check()) {
                    this.triggered.push(trigger.name);
                    if (trigger.trip) trigger.trip();
                }
            }
            this.triggered = this.triggered.filter(e => !untrip.includes(e));
            for (var trigger of this.triggerChecks) {
                if (this.triggered.includes(trigger.name)) {
                    if (trigger.passive) trigger.passive();
                }
            }
        }
    }
};