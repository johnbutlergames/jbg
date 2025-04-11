levels[9] = {
    objects: [
        { type: "text", content: "This isn't the last level", x: 0, y: -250, font: "40px rubik", spawnAnimation: 50, spawnAnimationDuration: 50 },
        { type: "text", content: "and it's completely ordinary.", x: 0, y: -200, font: "40px rubik", spawnAnimation: 50, spawnAnimationDuration: 50 },
        { type: "clue", x: -1250, y: -200, id: "shortcut clue", proximity: 1, radius: 1, color: { r: 0, g: 230, b: 0 }, air: true, down: true, angle: 180, alpha: 0 },
        { type: "block", x: 500, y: -500, w: 2000, h: 1000, slippery: true },
        { type: "block", x: -4100, y: 100, w: 5000, h: 1000, illusion3Push: { y: 1 } },
        { type: "lava", x: -1100, y: -2800, w: 2100, h: 2000 },
        { type: "lava", x: -1300, y: -1300, w: 100, h: 100 },
        { type: "lava", x: -1400, y: -1800, w: 100, h: 100 },
        { type: "lava", x: -1200, y: -1800, w: 100, h: 100 },
        { type: "lava", x: -1300, y: -2300, w: 100, h: 100 },
        { type: "lava", x: -3500, y: -2800, w: 2100, h: 2000 },
        { type: "block", x: -1200, y: -800, w: 2050, h: 200 },
        { type: "block", x: -1200, y: -700, w: 100, h: 1000, slippery: true },
        { type: "block", x: -1400, y: -1000, w: 100, h: 300, slippery: true, notIllusion1: true, alpha: 0 },
        { type: "block", x: -1400, y: -700, w: 100, h: 700, slippery: true, notIllusion1: true },
        { type: "block", x: -2700, y: -100, w: 1200, h: 100, changeToSlippery: true, illusion3Push: { h: 1 } },
        { type: "block", x: -1600, y: -100, w: 300, h: 100, notIllusion1: true },
        { type: "block", x: -1600, y: -1000, w: 100, h: 300, slippery: true, notIllusion1: true, alpha: 0 },
        { type: "block", x: -1600, y: -700, w: 100, h: 500, slippery: true, notIllusion1: true },
        { type: "block", x: -1600, y: -200, w: 100, h: 100, slippery: true, notIllusion1: true, id: "stop jump block", alpha: 0, collide: false },
        { type: "block", x: -1800, y: -1000, w: 100, h: 300, slippery: true, notIllusion1: true, alpha: 0 },
        { type: "block", x: -1800, y: -700, w: 100, h: 700, slippery: true, notIllusion1: true },
        { type: "block", x: -1800, y: -800, w: 500, h: 100.1, collide: false, notIllusion1: true },
        { type: "block", x: -3900, y: -1000, w: 2000, h: 800, slippery: true, illusion3Push: { y: -1 } },
        { type: "block", x: -3800, y: -500, w: 1000, h: 900, changeToSlippery: true, illusion3Push: { x: -1 } },
        { type: "block", x: -2900, y: -1000, w: 2000, h: 800, alpha: 0, collide: false, illusion1: true },
        { type: "block", x: -1400, y: -1000, w: 2000, h: 2000, alpha: 0, collide: false, illusion1: true },
        { type: "block", x: -2600, y: 3700, w: 400, h: 3800, illusion3: true },
        { type: "block", x: -3400, y: 5700, w: 400, h: 1800, illusion3: true },
        { type: "block", x: -4200, y: 7700, w: 2100, h: 2000, illusion3: true, slippery: true },
        { type: "block", x: -4300, y: 7000, w: 200, h: 3000, illusion3: true, slippery: true },
        { type: "block", x: -2700, y: 7400, w: 2000, h: 1000, illusion3: true, slippery: true },
        { type: "block", x: -3800, y: 6000, w: 600, h: 1500, illusion3: true },
        { type: "block", x: -10000, y: 5800, w: 7000, h: 1000, illusion3: true },
        { type: "block", x: -4900, y: 6600, w: 400, h: 1300, illusion3: true },
        { type: "block", x: -6700, y: 6600, w: 1000, h: 1700, illusion3: true },
        { type: "block", x: -5500, y: 7000, w: 400, h: 900, illusion3: true },
        { type: "block", x: -6200, y: 8100, w: 1100, h: 4000, illusion3: true },
        { type: "block", x: -4900, y: 8100, w: 700, h: 2000, illusion3: true },
        { type: "block", x: -5200, y: 8100, w: 400, h: 1300, illusion3: true, id: "crossroad block 1" },
        { type: "block", x: -5150, y: 6000, w: 350, h: 1900, illusion3: true, id: "crossroad block 1" },
        { type: "block", x: -5500, y: 7300, w: 400, h: 1000, collide: false, alpha: 0, id: "crossroad block 2" },
        { type: "block", x: -4900, y: 7300, w: 400, h: 1000, collide: false, alpha: 0, id: "crossroad block 2" },
        { type: "block", x: -5800, y: 7500, w: 400, h: 800, collide: false, alpha: 0, id: "crossroad block 2" },
        { type: "block", x: -4600, y: 7300, w: 400, h: 800, collide: false, alpha: 0, id: "crossroad block 2" },
        { type: "block", x: -800, y: 560, w: 3000, h: 3000, collide: false, alpha: 0, t: true },
        { type: "block", x: 113, y: -1000, w: 1000, h: 3000, collide: false, alpha: 0, t: true, slippery: true },
        /**/
        { type: "block", drawType: "phase in out", x: -1000, y: 560, w: 201, h: 200, t: true },
        { type: "block", drawType: "phase in out", x: -1200, y: 560, w: 201, h: 200, t: true },
        { type: "block", drawType: "phase in out", x: -1400, y: 560, w: 201, h: 200, t: true },
        { type: "block", drawType: "phase in out", x: -1600, y: 560, w: 201, h: 200, t: true },
        { type: "block", drawType: "phase in out", x: -1800, y: 560, w: 201, h: 200, t: true },
        { type: "block", drawType: "phase in out", x: -2000, y: 560, w: 201, h: 200, t: true },
        { type: "block", x: -2400, y: 560, w: 401, h: 1000, t: true, slippery: true },
        { type: "block", drawType: "phase in out", x: -2600, y: 560, w: 201, h: 200, t: true, id: "false bridge" },
        { type: "block", drawType: "phase in out", x: -2800, y: 560, w: 201, h: 200, t: true, id: "false bridge" },
        { type: "block", drawType: "phase in out", x: -3000, y: 560, w: 201, h: 200, t: true, id: "false bridge" },
        { type: "block", drawType: "phase in out", x: -3200, y: 560, w: 201, h: 200, t: true, id: "false bridge" },
        /**/
        /*
        { type: "block", x: -1200, y: 560, w: 401, h: 200, t: true, collide: false, slippery: true },
        { type: "block", x: -1600, y: 560, w: 401, h: 200, t: true, collide: false, id: "false bridge" },
        { type: "block", x: -2200, y: 560, w: 601, h: 200, t: true, collide: false, id: "shrink bridge" },
        { type: "portal", drawType: "portal", x: -1450, y: 1000, length: 100, angle: 0, pair: 1, portalNumber: 0, color: { r: 100, g: 130, b: 255 }, direction: "in", id: "portal1", t: true },
        { type: "portal", drawType: "portal", x: -1800, y: 200, length: 100, angle: 180, pair: 0, portalNumber: 1, color: { r: 100, g: 130, b: 255 }, direction: "out", id: "portal2", t: true },
        { type: "block", x: -1800, y: 360, w: 200, h: 400, t: true, collide: false, noAlpha: true, slippery: true },
        /**/
        //{ type: "block", drawType: "phase in out", x: -2000, y: 560, w: 201, h: 200, t: true },
        { type: "block", x: -3400, y: 2000, w: 600, h: 600, t: true, id: "planet layer 1" },
        { type: "block", x: -3351, y: 2000, w: 201, h: 50, t: true, id: "layer 1 border" },
        { type: "block", x: -3050, y: 2000, w: 201, h: 50, t: true, id: "layer 1 border" },
        { type: "block", x: -3351, y: 2550, w: 201, h: 50, t: true, id: "layer 1 border" },
        { type: "block", x: -3050, y: 2550, w: 201, h: 50, t: true, id: "layer 1 border" },
        { type: "block", x: -3400, y: 2000, w: 50, h: 250, t: true, id: "layer 1 border" },
        { type: "block", x: -3400, y: 2350, w: 50, h: 250, t: true, id: "layer 1 border" },
        { type: "block", x: -2850, y: 2000, w: 50, h: 250, t: true, id: "layer 1 border" },
        { type: "block", x: -2850, y: 2350, w: 50, h: 250, t: true, id: "layer 1 border" },
        { type: "block", x: -3300, y: 2100, w: 400, h: 400, t: true, id: "planet layer 2" },
        { type: "block", x: -3251, y: 2100, w: 101, h: 50, t: true, id: "layer 2 border" },
        { type: "block", x: -3050, y: 2100, w: 101, h: 50, t: true, id: "layer 2 border" },
        { type: "block", x: -3251, y: 2450, w: 101, h: 50, t: true, id: "layer 2 border" },
        { type: "block", x: -3050, y: 2450, w: 101, h: 50, t: true, id: "layer 2 border" },
        { type: "block", x: -3300, y: 2100, w: 50, h: 150, t: true, id: "layer 2 border" },
        { type: "block", x: -3300, y: 2350, w: 50, h: 150, t: true, id: "layer 2 border" },
        { type: "block", x: -2950, y: 2100, w: 50, h: 150, t: true, id: "layer 2 border" },
        { type: "block", x: -2950, y: 2350, w: 50, h: 150, t: true, id: "layer 2 border" },
        { type: "block", x: -3200, y: 2200, w: 200, h: 200, t: true, id: "planet layer 3" },
        { type: "block", x: -3171, y: 2200, w: 46, h: 30, t: true, id: "layer 3 border" },
        { type: "block", x: -3075, y: 2200, w: 46, h: 30, t: true, id: "layer 3 border" },
        { type: "block", x: -3171, y: 2370, w: 46, h: 30, t: true, id: "layer 3 border" },
        { type: "block", x: -3075, y: 2370, w: 46, h: 30, t: true, id: "layer 3 border" },
        { type: "block", x: -3200, y: 2200, w: 30, h: 75, t: true, id: "layer 3 border" },
        { type: "block", x: -3200, y: 2325, w: 30, h: 75, t: true, id: "layer 3 border" },
        { type: "block", x: -3030, y: 2200, w: 30, h: 75, t: true, id: "layer 3 border" },
        { type: "block", x: -3030, y: 2325, w: 30, h: 75, t: true, id: "layer 3 border" },
        { type: "lava", x: -2950, y: 2900, w: 2100, h: 2000, t: true, id: "shortcut lava" },
        { type: "lava", x: -3150, y: 4200, w: 100, h: 100, t: true, id: "shortcut lava" },
        { type: "lava", x: -3050, y: 3700, w: 100, h: 100, t: true, id: "shortcut lava" },
        { type: "lava", x: -3250, y: 3700, w: 100, h: 100, t: true, id: "shortcut lava" },
        { type: "lava", x: -3150, y: 3200, w: 100, h: 100, t: true, id: "shortcut lava" },
        { type: "lava", x: -5350, y: 2900, w: 2100, h: 2000, t: true, id: "shortcut lava" },
        { type: "block", drawType: "glass", x: -3400, y: 1300, w: 600, h: 700, t: true, id: "gravity down", noCollide: true, noAlpha: true },
        { type: "block", drawType: "glass", x: -3400, y: 2600, w: 600, h: 700, t: true, id: "gravity up", noCollide: true, noAlpha: true },
        { type: "block", drawType: "glass", x: -4100, y: 2000, w: 700, h: 600, t: true, id: "gravity right", noCollide: true, noAlpha: true },
        { type: "block", drawType: "glass", x: -2800, y: 2000, w: 700, h: 600, t: true, id: "gravity left", noCollide: true, noAlpha: true },
        { type: "cube", x: -4800, y: 400, id: "blue cube", illusion3: true },
        { type: "clue", x: -3200, y: 400, id: "blue cube pre clue", down: true, angle: 90, proximity: 1, radius: 1, illusion3: true },
        { type: "clue", x: -4800, y: 320, id: "blue cube clue", down: true, proximity: 1, radius: 1, illusion3: true }
    ],
    triggers: [
        {
            name: "teleport 1",
            check: function () {
                return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.x < -1080;
            },
            stop: function () {
                if (game.level.triggers.tripped("teleport 2")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.x < -1080;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.y = -600 - (player.y - 60);
                player.ymove = -player.ymove;
                player.xmove = -player.xmove;
                player.updateAngle = 180;
                player.swapControls = {
                    left: "left",
                    right: "right",
                    top: "top",
                    bottom: "bottom"
                }
                player.eyeAngleTarget = 180;
            },
            untrip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.y = 60 - (player.y + 600);
                player.ymove = -player.ymove;
                player.xmove = -player.xmove;
                player.updateAngle = 0;
                player.swapControls = false;
                player.eyeAngleTarget = 0;
            }
        },
        {
            name: "teleport 2",
            check: function () {
                if (!game.level.triggers.tripped("teleport 1")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.x > -380;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.x = -1250;
                player.y = -740;
                player.positionHistory = [];
                player.ymove = 8;
                player.xmove = 0;
                player.updateAngle = 0;
                player.swapControls = false;
                player.eyeAngleTarget = 0;
            }
        },
        {
            name: "show shortcut clue",
            check: function () {
                if (!game.level.triggers.tripped("teleport 2")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y > -500;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.alpha = 0;
                o.decay = -0.1;
            }
        },
        {
            name: "hide shortcut clue",
            check: function () {
                if (!game.level.triggers.tripped("show shortcut clue")) return false;
                if (game.level.triggers.tripped("shortcut")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return player.y == 60;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.alpha = 1;
                o.decay = 0.1;
                for (var o of game.objects.objects.filter(e => e.id == "shortcut lava")) o.delete = true;
            }
        },
        {
            name: "shortcut",
            check: function () {
                if (game.level.triggers.tripped("hide shortcut clue")) return false;
                if (!game.level.triggers.tripped("show shortcut clue")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                var dist = Math.abs(player.y + player.h / 2 - o.y);
                if (dist > 40) return false;
                return game.input.up && game.input.upHold < 20;
            },
            trip: function () {
                game.level.discoverShortcut();
                game.background.effect.start("green");
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.activated = true;
                var player = game.objects.objects.find(e => e.type == "player");
                player.ymove = -10;
                player.updateAngle = 180;
                player.eyeAngleTarget = 180;
                player.eyeAngle = 180;
                player.swapControls = { left: "left", right: "right", up: "up", down: "down" };
                player.wallJumpDisabled = true;

                game.cam.viewportBoundary = false;
            }
        },
        {
            name: "shortcut teleport",
            check: function () {
                if (!game.level.triggers.tripped("shortcut")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y < -1500;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.emitParticles = false;
                player.wallJumpDisabled = false;
                player.x -= 1850;
                player.y += 5500;
                for (var o of player.positionHistory) {
                    o.x -= 1850;
                    o.y += 5500;
                }
                game.cam.x -= 1850;
                game.cam.y += 5465;
                game.level.playerControlDelay = 0;
                for (var o of game.objects.objects) {
                    if (o.type == "player") continue;
                    if (o.t) {
                        o.alpha = 1;
                        if (o.noAlpha) o.alpha = 0;
                        o.collide = true;
                        if (o.noCollide) o.collide = false;
                    } else {
                        o.delete = true;
                        o.alpha = 0;
                    }
                }
                game.cam.y += 35;
                game.backgroundOffset.x += -80;
                game.backgroundOffset.y += 200;
                for (var o of game.objects.objects.filter(e => e.id && e.id.includes("layer"))) {
                    o.type = "lava";
                    o.drawType = "lava";
                }

                game.cam.offset = { x: 0, y: 0 };
            }
        },
        {
            name: "teleport 3",
            check: function () {
                if (game.level.triggers.tripped("shortcut")) return false;
                if (!game.level.triggers.tripped("teleport 2")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.x < -1870;
            },
            stop: function () {
                if (game.level.triggers.tripped("teleport 4")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y < -740;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.x = -1300;
                player.y = -740;
                player.positionHistory = [];
                var xmove = player.xmove;
                var ymove = player.ymove;
                player.ymove = -xmove;
                player.xmove = -ymove;
                player.updateAngle = 90;
                player.swapControls = {
                    right: "left",
                    left: "right",
                    top: "top",
                    bottom: "bottom"
                };
                player.eyeAngleTarget = 90;
                player.wallJumpDisabled = true;
            },
            untrip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.x = -1870;
                player.y = 60;
                player.positionHistory = [];
                var xmove = player.xmove;
                var ymove = player.ymove;
                player.ymove = -xmove;
                player.xmove = -ymove;
                player.updateAngle = 0;
                player.swapControls = false;
                player.eyeAngleTarget = 0;
                player.wallJumpDisabled = false;
            }
        },
        {
            name: "teleport 4",
            check: function () {
                if (!game.level.triggers.tripped("teleport 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.x < -2100;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.x = -1480;
                player.y = -740;
                player.againstBottom.current = false;
                player.againstBottom.last = 10000;
                player.againstBottom.time = 0;
                player.positionHistory = [];
                var xmove = player.xmove;
                var ymove = player.ymove;
                player.ymove = -xmove;
                player.xmove = -ymove;
                player.updateAngle = 0;
                player.swapControls = false;
                player.eyeAngleTarget = 0;
            }
        },
        {
            name: "jump 1",
            check: function () {
                if (!game.level.triggers.tripped("teleport 4")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x > -1640) return false;
                if (player.y == -140 || player.ymove < 0 && game.input.up) return true;
                return false;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 180;
                player.ymove = -8;
                player.swapControls = {
                    left: "right",
                    right: "left",
                    up: "up",
                    down: "down"
                }
                player.wallJumpDisabled = true;
                if (player.y == -140) game.soundEffects.jump();
                var o = game.objects.objects.find(e => e.id == "stop jump block");
                o.collide = true;
            }
        },
        {
            name: "teleport 5",
            check: function () {
                if (!game.level.triggers.tripped("jump 1")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y < -740;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 0;
                player.ymove = 8;
                player.swapControls = false;
                player.x -= 200;
            }
        },
        {
            name: "illusion 1",
            check: function () {
                if (!game.level.triggers.tripped("teleport 5")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y > -140;
            },
            stop: function () {
                if (game.level.triggers.tripped("illusion 2")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y < -140 && player.x < -2700;
            },
            trip: function () {
                for (var o of game.objects.objects.filter(e => e.notIllusion1)) {
                    o.alpha = 0;
                    o.collide = false;
                }
                for (var o of game.objects.objects.filter(e => e.illusion1)) {
                    o.alpha = 1;
                    o.collide = true;
                }
                var player = game.objects.objects.find(e => e.type == "player");
                player.wallJumpDisabled = false;
            },
            untrip: function () {
                for (var o of game.objects.objects.filter(e => e.notIllusion1)) {
                    o.alpha = 1;
                    o.collide = true;
                }
                for (var o of game.objects.objects.filter(e => e.illusion1)) {
                    o.alpha = 0;
                    o.collide = false;
                }
            }
        },
        {
            name: "illusion 2",
            check: function () {
                if (!game.level.triggers.tripped("illusion 1")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y < -140 && player.x > -1700;
            },
            stop: function () {
                if (game.level.triggers.tripped("illusion 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y > -140 && player.x > -1700;
            },
            trip: function () {
                for (var o of game.objects.objects.filter(e => e.changeToSlippery)) {
                    o.slippery = true;
                }
            },
            untrip: function () {
                for (var o of game.objects.objects.filter(e => e.changeToSlippery)) {
                    o.slippery = false;
                }
            }
        },
        {
            name: "illusion 3 push",
            check: function () {
                if (!game.level.triggers.tripped("illusion 2")) return false;
                if (game.level.triggers.tripped("illusion 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y > -140 && player.x < -2700;
            },
            stop: function () {
                return game.level.triggers.tripped("illusion 3")
            },
            trip: function () {
                for (var o of game.objects.objects.filter(e => e.illusion3Push)) {
                    o.originX = o.x;
                    o.originY = o.y;
                    o.originW = o.w;
                    o.originH = o.h;
                }
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                var n = Math.min(Math.max(player.y, -140) + 140, 100);
                if (n > 30 && n < 40) {
                    game.soundEffects.switchGravity();
                }
                for (var o of game.objects.objects.filter(e => e.illusion3Push)) {
                    if (o.illusion3Push.x) o.x = o.originX + o.illusion3Push.x * n;
                    if (o.illusion3Push.y) o.y = o.originY + o.illusion3Push.y * n;
                    if (o.illusion3Push.w) o.w = o.originW + o.illusion3Push.w * n;
                    if (o.illusion3Push.h) o.h = o.originH + o.illusion3Push.h * n;
                }
            }
        },
        {
            name: "illusion 3",
            check: function () {
                //return true;
                if (!game.level.triggers.tripped("illusion 3 push")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y > -40 && player.x < -2700;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.emitParticles = false;
                player.controlDelay = 100;
                for (var o of game.objects.objects) {
                    if (o.type == "player") continue;
                    if (o.illusion3) continue;
                    o.collide = false;
                    o.alpha = 0;
                    if (o.illusion3) {
                        o.collide = true;
                        o.alpha = 1;
                    }
                }
                for (var x = -3; x < 3; x++) {
                    for (var y = -3; y < 5; y++) {
                        var o = { type: "block", w: 200, h: 200, illusion3: true, slippery: true };
                        o.x = -2700 + x * 400 + y % 2 * 200;
                        o.y = -100 + y * 400;
                        if (y == 4) o.h = 6000;
                        if (x == -1 && y == 1) {
                            game.objects.objects.splice(game.objects.objects.length - 4, 0, {
                                type: "block",
                                illusion3: true,
                                x: -2700 + x * 400 + y % 2 * 200,
                                y: -100 + y * 400,
                                w: 200,
                                h: 200,
                                noCollide: true,
                                alpha: 0.15,
                                collide: false
                            });
                            var objects = [
                                {
                                    type: "block",
                                    slippery: true,
                                    illusion3: true,
                                    x: -2700 + x * 400 + y % 2 * 200,
                                    y: -100 + y * 400,
                                    w: 20,
                                    h: 200
                                },
                                {
                                    type: "block",
                                    slippery: true,
                                    illusion3: true,
                                    x: -2700 + x * 400 + y % 2 * 200 + 180,
                                    y: -100 + y * 400,
                                    w: 20,
                                    h: 200
                                },
                                {
                                    type: "block",
                                    illusion3: true,
                                    x: -2700 + x * 400 + y % 2 * 200 + 10,
                                    y: -100 + y * 400,
                                    w: 30,
                                    h: 200
                                },
                                {
                                    type: "block",
                                    illusion3: true,
                                    x: -2700 + x * 400 + y % 2 * 200 + 160,
                                    y: -100 + y * 400,
                                    w: 30,
                                    h: 200
                                },
                                {
                                    type: "block",
                                    slippery: true,
                                    illusion3: true,
                                    x: -2700 + x * 400 + y % 2 * 200,
                                    y: -100 + y * 400 + 160,
                                    w: 200,
                                    h: 40
                                },
                                {
                                    type: "block",
                                    id: "blue cube cover",
                                    slippery: true,
                                    illusion3: true,
                                    x: -2700 + x * 400 + y % 2 * 200,
                                    y: -100 + y * 400,
                                    w: 200,
                                    h: 200
                                }
                            ];
                            game.objects.objects.splice(game.objects.objects.length - 3, 0, ...objects);
                        } else {
                            game.objects.objects.splice(game.objects.objects.length - 3, 0, o);
                        }
                    }
                }
                for (var x = -2; x <= 2; x++) {
                    for (var y = -2; y <= 1; y++) {
                        if (!x && !y) continue;
                        var o = { type: "player copy" };
                        o.offsetX = x * 400 + y % 2 * 200;
                        o.offsetY = y * 400;
                        game.objects.objects.push(o);
                    }
                }
                game.cam.viewportBoundary = false;
                game.cam.offset = {
                    x: 0,
                    y: 0
                };
            }
        },
        {
            name: "teleport up",
            check: function () {
                if (!game.level.triggers.tripped("illusion 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.fallTimes > 3) return false;
                return player.y > 1060;
            },
            stop: function () {
                return true;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player.fallTimes) player.fallTimes = 0;
                player.fallTimes++;
                player.y -= 800;
                game.cam.y -= 800;
                for (var o of player.positionHistory) {
                    o.y -= 800;
                }
                game.backgroundOffset.y -= 800 * 0.8;
                if (game.backgroundOffset.y <= -700) {
                    game.backgroundPatternOffset.y += 0.5;
                }
                var o = game.objects.objects.find(e => e.id == "blue cube pre clue");
                o.y -= 800;
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                o.y -= 800;
                var o = game.objects.objects.find(e => e.id == "blue cube");
                o.y -= 800;
            }
        },
        {
            name: "teleport right",
            check: function () {
                if (game.level.triggers.tripped("fall in long pipes")) return false;
                if (!game.level.triggers.tripped("illusion 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.x < -3100;
            },
            stop: function () {
                return true;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.x += 400;
                game.cam.x += 400;
                for (var o of player.positionHistory) {
                    o.x += 400;
                }
                game.backgroundOffset.x += 400 * 0.8;
                if (game.backgroundOffset.x >= 700) {
                    game.backgroundPatternOffset.x -= 0.5;
                }
                var o = game.objects.objects.find(e => e.id == "blue cube pre clue");
                o.x += 400;
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                o.x += 400;
                var o = game.objects.objects.find(e => e.id == "blue cube");
                o.x += 400;
            }
        },
        {
            name: "teleport left",
            check: function () {
                if (game.level.triggers.tripped("fall in long pipes")) return false;
                if (!game.level.triggers.tripped("illusion 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.x > -2700;
            },
            stop: function () {
                return true;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.x -= 400;
                game.cam.x -= 400;
                for (var o of player.positionHistory) {
                    o.x -= 400;
                }
                game.backgroundOffset.x -= 400 * 0.8;
                if (game.backgroundOffset.x <= -700) {
                    game.backgroundPatternOffset.x += 0.5;
                }
                var o = game.objects.objects.find(e => e.id == "blue cube pre clue");
                o.x -= 400;
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                o.x -= 400;
                var o = game.objects.objects.find(e => e.id == "blue cube");
                o.x -= 400;
            }
        },
        {
            name: "stop blue cube",
            check: function () {
                if (game.level.triggers.tripped("blue cube")) return false;
                if (!game.level.triggers.tripped("illusion 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y > 300;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "blue cube pre clue");
                o.alpha = 1;
                o.decay = 0.1;
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                o.alpha = 1;
                o.decay = 0.1;
            }
        },
        {
            name: "blue cube pre clue",
            check: function () {
                if (game.level.triggers.tripped("stop blue cube repeat")) return false;
                if (game.level.triggers.tripped("stop blue cube")) return false;
                if (!game.level.triggers.tripped("illusion 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "blue cube pre clue");
                return player.x < o.x;
            },
            stop: function () {
                if (game.level.triggers.tripped("stop blue cube")) return true;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "blue cube pre clue");
                return player.x > o.x;
            },
            trip: function () {
                game.background.effect.start("blue");
                var o = game.objects.objects.find(e => e.id == "blue cube pre clue");
                o.activated = true;
            },
            untrip: function () {
                game.background.effect.end("blue");
                var o = game.objects.objects.find(e => e.id == "blue cube pre clue");
                o.activated = false;
            }
        },
        {
            name: "blue cube",
            check: function () {
                if (game.level.triggers.tripped("hide blue cube block")) return false;
                if (game.level.triggers.tripped("stop blue cube")) return false;
                if (!game.level.triggers.tripped("illusion 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                return Math.abs(player.x + player.w / 2 - o.x) < 20 && player.y == 260 && game.input.downStart;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y < 260;
            },
            trip: function () {
                game.background.effect.end("blue");
                var o = game.objects.objects.find(e => e.id == "blue cube cover");
                o.alpha = 1;
                o.decay = 0.1;
                o.collide = false;
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                o.activated = true;
                for (var o of game.objects.objects.filter(e => e.type == "player copy")) {
                    o.originalOffsetY = o.offsetY;
                }
                var player = game.objects.objects.find(e => e.type == "player");
                player.againstBottom.current = false;
                player.againstBottom.last = 1000;
                player.againstBottom.time = 0;
            },
            untrip: function () {
                var o = game.objects.objects.find(e => e.id == "blue cube cover");
                o.alpha = 0;
                o.decay = -0.1;
                o.collide = true;
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                o.activated = false;
                for (var o of game.objects.objects.filter(e => e.type == "player copy")) {
                    o.offsetY = o.originalOffsetY;
                }
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                for (var o of game.objects.objects.filter(e => e.type == "player copy")) {
                    o.offsetY = o.originalOffsetY - (player.y - 260);
                }
            }
        },
        {
            name: "stop blue cube repeat",
            check: function () {
                return game.level.triggers.tripped("blue cube");
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "blue cube pre clue");
                o.alpha = 0;
                o.decay = 0;
            }
        },
        {
            name: "hide blue cube block",
            check: function () {
                if (!game.level.triggers.tripped("stop blue cube repeat")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                var dist = Math.abs(player.x + player.w / 2 - o.x);
                if (dist <= 800) return false;
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                o.alpha = 0;
                o.decay = 0;
            }
        },
        {
            name: "delete lower copies",
            check: function () {
                if (!game.level.triggers.tripped("illusion 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y > 1260;
            },
            trip: function () {
                for (var o of game.objects.objects) {
                    if (o.type != "player copy") continue;
                    if (o.offsetY > 0) o.delete = true;
                }
            }
        },
        {
            name: "fall in long pipes",
            check: function () {
                if (!game.level.triggers.tripped("illusion 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y > 1480;
            },
            trip: function () {
                for (var o of game.objects.objects) {
                    if (o.type != "player copy") continue;
                    o.originalOffsetY = o.offsetY;
                }
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                for (var o of game.objects.objects) {
                    if (o.type != "player copy") continue;
                    if (o.offsetX == 400) {
                        if (o.offsetY == 0 && player.y > 3660) game.soundEffects.land();
                        o.offsetY = -Math.max(player.y - 3660, 0);
                        if (o.offsetY < -1000) o.delete = true;
                        continue;
                    }
                    if (o.offsetX == -400) {
                        if (o.offsetY == 0 && player.y > 5660) game.soundEffects.land();
                        o.offsetY = -Math.max(player.y - 5660, 0);
                        if (o.offsetY < -1000) o.delete = true;
                        continue;
                    }
                    if (o.offsetY < 0 || Math.abs(o.offsetX) > 400) {
                        var n = player.y - 1480;
                        o.offsetY = o.originalOffsetY - n / 3;
                        if (n > 600) o.delete = true;
                    }
                }
            }
        },
        {
            name: "gravity switch 1",
            check: function () {
                if (!game.level.triggers.tripped("fall in long pipes")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var rect = {
                    x: -4100,
                    y: 7500,
                    w: 200,
                    h: 200
                }
                if (!blocksColliding(player, rect)) return false;
                return player.x < -3900;
            },
            stop: function () {
                if (game.level.triggers.tripped("gravity switch 2")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var rect = {
                    x: -4100,
                    y: 7500,
                    w: 200,
                    h: 200
                }
                if (!blocksColliding(player, rect)) return false;
                return player.x > -3900;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 90;
                player.wallJumpDisabled = true;
                player.swapControls = {
                    left: "left",
                    right: "right",
                    top: "top",
                    bottom: "bottom"
                }
            },
            untrip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 0;
                player.swapControls = false;
            }
        },
        {
            name: "gravity switch 2",
            check: function () {
                if (!game.level.triggers.tripped("gravity switch 1")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var rect = {
                    x: -4500,
                    y: 7900,
                    w: 200,
                    h: 200
                }
                if (!blocksColliding(player, rect)) return false;
                return player.y > 7900;
            },
            stop: function () {
                if (game.level.triggers.tripped("gravity switch 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var rect = {
                    x: -4500,
                    y: 7900,
                    w: 200,
                    h: 200
                }
                if (!blocksColliding(player, rect)) return false;
                return player.y < 7900;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 0;
                player.swapControls = {
                    left: "right",
                    right: "left",
                    top: "bottom",
                    bottom: "top"
                }
            },
            untrip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 90;
                player.swapControls = {
                    left: "left",
                    right: "right",
                    top: "top",
                    bottom: "bottom"
                }
            }
        },
        {
            name: "gravity switch 3",
            check: function () {
                if (!game.level.triggers.tripped("gravity switch 2")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var rect = {
                    x: -5700,
                    y: 7900,
                    w: 200,
                    h: 200
                }
                if (!blocksColliding(player, rect)) return false;
                return player.x < -5600;
            },
            stop: function () {
                if (game.level.triggers.tripped("gravity switch 4")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var rect = {
                    x: -5700,
                    y: 7900,
                    w: 200,
                    h: 200
                }
                if (!blocksColliding(player, rect)) return false;
                return player.x > -5600;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 90;
            },
            untrip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 0;
            }
        },
        {
            name: "gravity switch 4",
            check: function () {
                if (!game.level.triggers.tripped("gravity switch 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var rect = {
                    x: -5700,
                    y: 6800,
                    w: 200,
                    h: 200
                }
                if (!blocksColliding(player, rect)) return false;
                return player.y < 7000;
            },
            stop: function () {
                if (game.level.triggers.tripped("gravity switch 5")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var rect = {
                    x: -5700,
                    y: 6800,
                    w: 200,
                    h: 200
                }
                if (!blocksColliding(player, rect)) return false;
                return player.y > 7000;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 180;
                for (var o of game.objects.objects.filter(e => e.id == "crossroad block 1")) {
                    o.alpha = 0;
                    o.collide = false;
                }
                for (var o of game.objects.objects.filter(e => e.id == "crossroad block 2")) {
                    o.alpha = 1;
                    o.collide = true;
                }
            },
            untrip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 270;
                for (var o of game.objects.objects.filter(e => e.id == "crossroad block 1")) {
                    o.alpha = 1;
                    o.collide = true;
                }
                for (var o of game.objects.objects.filter(e => e.id == "crossroad block 2")) {
                    o.alpha = 0;
                    o.collide = false;
                }
            }
        },
        {
            name: "gravity switch 5",
            check: function () {
                if (!game.level.triggers.tripped("gravity switch 4")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var rect = {
                    x: -5100,
                    y: 6800,
                    w: 200,
                    h: 200
                }
                if (!blocksColliding(player, rect)) return false;
                return player.x > -5100;
            },
            stop: function () {
                if (game.level.triggers.tripped("gravity switch 6")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var rect = {
                    x: -5100,
                    y: 6800,
                    w: 200,
                    h: 200
                }
                if (!blocksColliding(player, rect)) return false;
                return player.x < -5100;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 0;
                player.swapControls = false;
                game.level.playerControlDelay = 10000;
            },
            untrip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 180;
                player.swapControls = {
                    left: "right",
                    right: "left",
                    top: "bottom",
                    bottom: "top"
                }
            },
            passive: function () {
                if (game.level.triggers.tripped("teleport 6")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                player.x = player.x * 0.99 + -5013 * 0.01;
            }
        },
        {
            name: "gravity switch 6",
            check: function () {
                if (!game.level.triggers.tripped("gravity switch 5")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y > 8500;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.swapControls = {
                    left: "right",
                    right: "left",
                    top: "bottom",
                    bottom: "top"
                };
                game.level.playerControlDelay = 1000;
            },
            passive: function () {
                if (game.level.triggers.tripped("teleport 6")) return;
                var player = game.objects.objects.find(e => e.type == "player");
                var percent = Math.max(Math.min((player.y - 9500) / 3000, 1), 0);
                player.ymove -= (1 * percent) ** 2 * 1.7;
            }
        },
        {
            name: "whoosh",
            check: function () {
                if (!game.level.triggers.tripped("gravity switch 6")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                return player.y > 9500;
            },
            trip: function () {
                game.soundEffects.reverseWhoosh();
            }
        },
        {
            name: "teleport 6",
            check: function () {
                return true;
                if (!game.level.triggers.tripped("gravity switch 6")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.ymove < 0;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.swapControls = false;
                player.updateAngle = 0;
                player.eyeAngleTarget = 0;
                player.eyeAngle = 0;
                player.positionHistory = [];
                player.emitParticles = true;
                player.wallJumpDisabled = false;
                player.x += 5000;
                player.y -= 10600;
                game.cam.x += 5000;
                game.cam.y -= 10600;
                game.cam.angle = 0;
                game.level.playerControlDelay = 0;
                for (var o of game.objects.objects) {
                    if (o.type == "player") continue;
                    if (o.t) {
                        o.alpha = 1;
                        if (o.noAlpha) o.alpha = 0;
                        o.collide = true;
                        if (o.noCollide) o.collide = false;
                    } else {
                        o.delete = true;
                    }
                }
                game.cam.y += 35;
                game.backgroundOffset.x *= -1;
                game.backgroundOffset.y *= -1;
                game.backgroundOffset.x += 210;
                game.backgroundOffset.y += 140;

                var player = game.objects.objects.find(e => e.type == "player");
                //game.level.playerFlightMode = true;
                //game.level.showWireframes = true;
                player.x = 0;
                player.x = -3300;
                player.y = 0;
                game.cam.viewportBoundary = false;
                game.cam.offset = { x: 0, y: 0 };
                /**/
            }
        },
        {
            name: "false bridge",
            check: function () {
                return true;
                if (!game.level.triggers.tripped("teleport 6")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.x < -3100;
            },
            trip: function () {
                for (var o of game.objects.objects.filter(e => e.id == "false bridge")) {
                    o.playerDistCheck = false;
                    o.collide = false;
                    o.animation.current = false;
                }
            },
            passive: function () {
                if (game.level.triggers.tripped("fall on planet")) return;
                var player = game.objects.objects.find(e => e.type == "player");
                player.x = player.x * 0.9 + -3100 * 0.1;
            }
        },
        {
            name: "false bridge",
            check: function () {
                return false;
                if (!game.level.triggers.tripped("teleport 6")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.x < -1300;
            },
            trip: function () {
                return;
                var o = game.objects.objects.find(e => e.id == "false bridge");
                o.animation = 0;
                o.collide = false;
                o.originalY = o.y;
                var o = game.objects.objects.find(e => e.id == "shrink bridge");
                o.originalW = o.w;
                var player = game.objects.objects.find(e => e.type == "player");
                player.ymove = -3;
            },
            passive: function () {
                return;
                var o = game.objects.objects.find(e => e.id == "false bridge");
                o.animation++;
                var a = easeInOut(o.animation / 100);
                o.angle = a * 90;
                o.y = o.originalY - a * 200;
                var o = game.objects.objects.find(e => e.id == "shrink bridge");
                o.w = o.originalW - a * 2;
                var player = game.objects.objects.find(e => e.type == "player");
                player.ymove *= 0.995;
                /*if (game.level.triggers.tripped("fall on planet")) return;
                var player = game.objects.objects.find(e => e.type == "player");
                player.x = player.x * 0.9 + -3100 * 0.1;*/
            }
        },
        {
            name: "falling on planet",
            check: function () {
                if (!game.level.triggers.tripped("false bridge") && !game.level.triggers.tripped("shortcut teleport")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y > 1000;
            },
            trip: function () {
                for (var n = 1; n < 4; n++) {
                    var o = { type: "player copy" };
                    o.rotate = { x: -3100, y: 2300, angle: n * 90 };
                    game.objects.objects.splice(game.objects.objects.length - 1, 0, o);
                }
            }
        },
        {
            name: "fall on planet",
            check: function () {
                if (game.level.triggers.tripped("shortcut teleport")) return true;
                if (!game.level.triggers.tripped("false bridge")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y > 1900;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.wallJumpDisabled = true;
            },
            passive: function () {
                if (game.level.triggers.tripped("layer 2")) return;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                var dist = distTo(player.x + player.w / 2, player.y + player.h / 2, -3100, 2300);
                if (dist < 450) return;
                var dir = dirTo(player.x + player.w / 2, player.y + player.h / 2, -3100, 2300);
                var move = distToMove(0.05, dir);
                player.xmove += move.x;
                player.ymove += move.y;
            }
        },
        {
            name: "open layer 2",
            check: function () {
                return true;
                if (game.level.triggers.tripped("shortcut teleport")) return true;
                if (!game.level.triggers.tripped("fall on planet")) return false;
                return Math.abs(game.cam.angle) >= 315;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "planet layer 1");
                o.alpha = 1;
                o.decay = 0.1;
                o.collide = false;
            }
        },
        {
            name: "layer 2",
            check: function () {
                if (!game.level.triggers.tripped("open layer 2")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "planet layer 1");
                var rect = { x: o.x + 25, y: o.y + 25, w: o.w - 50, h: o.h - 50 };
                return blocksColliding(player, rect);
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.enteredLayer2Angle = game.cam.angle;
                for (var o of game.objects.objects.filter(e => e.id == "layer 1 border")) {
                    o.collide = false;
                    o.rotate = {
                        x: -3100,
                        y: 2300,
                        angle: 0,
                        scale: 1
                    }
                }
                var o = game.objects.objects.find(e => e.id == "gravity down");
                o.x += 100;
                o.w -= 200;
                o.h += 100;
                var o = game.objects.objects.find(e => e.id == "gravity up");
                o.x += 100;
                o.w -= 200;
                o.h += 100;
                o.y -= 100;
                var o = game.objects.objects.find(e => e.id == "gravity right");
                o.y += 100;
                o.h -= 200;
                o.w += 100;
                var o = game.objects.objects.find(e => e.id == "gravity left");
                o.y += 100;
                o.h -= 200;
                o.w += 100;
                o.x -= 100;
            },
            passive: function () {
                for (var o of game.objects.objects.filter(e => e.id == "layer 1 border")) {
                    o.rotate.angle += 0.1;
                    o.rotate.scale = o.rotate.scale * 0.99 + 2.5 * 0.01;
                }
                if (game.level.triggers.tripped("enter layer 3")) return;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                var dist = distTo(player.x + player.w / 2, player.y + player.h / 2, -3100, 2300);
                if (dist < 310) return;
                var dir = dirTo(player.x + player.w / 2, player.y + player.h / 2, -3100, 2300);
                var move = distToMove(0.1, dir);
                player.xmove += move.x;
                player.ymove += move.y;
            }
        },
        {
            name: "open layer 3",
            check: function () {
                return true;
                if (game.level.triggers.tripped("shortcut teleport")) return true;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return Math.abs(game.cam.angle - player.enteredLayer2Angle) >= 315;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "planet layer 2");
                o.alpha = 1;
                o.decay = 0.1;
                o.collide = false;
            }
        },
        {
            name: "layer 3",
            check: function () {
                if (!game.level.triggers.tripped("open layer 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "planet layer 2");
                var rect = { x: o.x + 25, y: o.y + 25, w: o.w - 50, h: o.h - 50 };
                return blocksColliding(player, rect);
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.enteredLayer3Angle = game.cam.angle;
                for (var o of game.objects.objects.filter(e => e.id == "layer 2 border")) {
                    o.collide = false;
                    o.rotate = {
                        x: -3100,
                        y: 2300,
                        angle: 0,
                        scale: 1
                    }
                }
                var o = game.objects.objects.find(e => e.id == "gravity down");
                o.x += 100;
                o.w -= 200;
                o.h += 100;
                var o = game.objects.objects.find(e => e.id == "gravity up");
                o.x += 100;
                o.w -= 200;
                o.h += 100;
                o.y -= 100;
                var o = game.objects.objects.find(e => e.id == "gravity right");
                o.y += 100;
                o.h -= 200;
                o.w += 100;
                var o = game.objects.objects.find(e => e.id == "gravity left");
                o.y += 100;
                o.h -= 200;
                o.w += 100;
                o.x -= 100;
            },
            passive: function () {
                for (var o of game.objects.objects.filter(e => e.id == "layer 2 border")) {
                    o.rotate.angle -= 0.05;
                    o.rotate.scale = o.rotate.scale * 0.99 + 2 * 0.01;
                }
                if (game.level.triggers.tripped("open layer 4")) return;
                var player = game.objects.objects.find(e => e.type == "player");
                var dist = distTo(player.x + player.w / 2, player.y + player.h / 2, -3100, 2300);
                if (dist < 170) return;
                var dir = dirTo(player.x + player.w / 2, player.y + player.h / 2, -3100, 2300);
                var move = distToMove(0.1, dir);
                player.xmove += move.x;
                player.ymove += move.y;
                player.xmove *= 1 - dist / (170 * 50);
                player.ymove *= 1 - dist / (170 * 50);
            }
        },
        {
            name: "open layer 4",
            check: function () {
                if (game.level.triggers.tripped("shortcut teleport")) return true;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return Math.abs(game.cam.angle - player.enteredLayer3Angle) >= 310;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "planet layer 3");
                o.alpha = 1;
                o.decay = 0.1;
                o.collide = false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!game.level.triggers.tripped("shortcut teleport")) player.updatePlayer = false;
                player.eyeAngle = player.eyeAngleTarget;
            },
            passive: function () {
                if (game.level.triggers.tripped("shortcut teleport")) return;
                if (game.level.triggers.tripped("layer 4")) return;
                var player = game.objects.objects.find(e => e.type == "player");
                var angle = ((Math.floor((player.enteredLayer3Angle + 45) / 90) * 90) % 360 + 360) % 360;
                var point, point2;
                if (angle == 0) {
                    point = { x: -3100, y: 2160 };
                    point2 = { x: -3100, y: 2100 };
                } else if (angle == 180) {
                    point = { x: -3100, y: 2440 };
                    point2 = { x: -3100, y: 2500 };
                } else if (angle == 270) {
                    point = { x: -2960, y: 2300 };
                    point2 = { x: -2900, y: 2300 };
                } else if (angle == 90) {
                    point = { x: -3240, y: 2300 };
                    point2 = { x: -3300, y: 2300 };
                }
                var dist = distTo(player.x + player.w / 2, player.y + player.h / 2, point.x, point.y);
                var dist2 = distTo(player.x + player.w / 2, player.y + player.h / 2, point2.x, point2.y);
                if (dist < 10 || dist2 < dist) {
                    player.goUp = true;
                }
                if (dist2 < 10 && player.goUp) {
                    player.layer4 = true;
                }
                if (player.goUp) {
                    var dir = dirTo(player.x + player.w / 2, player.y + player.h / 2, point2.x, point2.y);
                } else {
                    var dir = dirTo(player.x + player.w / 2, player.y + player.h / 2, point.x, point.y);
                }
                var move = distToMove(0.2, dir);
                player.xmove += move.x;
                player.ymove += move.y;
                player.xmove *= 0.85;
                player.ymove *= 0.85;
                player.x += player.xmove;
                player.y += player.ymove;
            }
        },
        {
            name: "layer 4",
            check: function () {
                if (game.level.triggers.tripped("shortcut teleport")) return true;
                if (!game.level.triggers.tripped("open layer 4")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.layer4;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.originX = player.x;
                player.originY = player.y;
                player.animation = 0;
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (game.level.triggers.tripped("shortcut teleport")) {
                    if (game.level.triggers.tripped("explosion")) return;
                    if (!player) return;
                    var dist = distTo(player.x + player.w / 2, player.y + player.h / 2, -3100, 2300);
                    if (dist < 500) {
                        player.ymove *= 0.98;
                    }
                    if (dist < 100) {
                        game.level.playerControlDelay = 1;
                        player.updateMovement = false;
                        var speed = distTo(0, 0, player.xmove, player.ymove);
                        var dir = dirTo(player.x + player.w / 2, player.y + player.h / 2, -3100, 2300);
                        var maxSpeed = 0.1 + dist / 100 * 2.9;
                        var move = distToMove(Math.min(speed, maxSpeed, dist), dir);
                        player.x += move.x;
                        player.y += move.y;
                        if (dist < maxSpeed || dist < speed) {
                            player.x = -3100 - player.w / 2;
                            player.y = 2300 - player.h / 2;
                            player.xmove = 0;
                            player.ymove = 0;
                            player.animation = 140;
                        }
                    }
                    return;
                }
                if (player.animation == 100) {
                    for (var o of game.objects.objects.filter(e => e.id == "layer 3 border")) {
                        o.collide = false;
                        o.rotate = {
                            x: -3100,
                            y: 2300,
                            angle: 0,
                            scale: 1
                        }
                    }
                }
                if (player.animation > 100) {
                    for (var o of game.objects.objects.filter(e => e.id == "layer 3 border")) {
                        o.rotate.angle += 0.15;
                        o.rotate.scale = o.rotate.scale * 0.99 + 1.9 * 0.01;
                    }
                }
                if (game.level.triggers.tripped("explosion")) return;
                player.animation++;
                var a = easeInOut((player.animation - 60) / 160) * 2.4 - (Math.min((player.animation / 140), 1) ** 0.8) * 0.2;
                player.x = player.originX * (1 - a) + -3120 * a;
                player.y = player.originY * (1 - a) + 2280 * a;
            }
        },
        {
            name: "explosion",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.animation == 140;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.x = -3120;
                player.y = 2280;
                player.explodeAnimation = 0;
                for (var o of game.objects.objects.filter(e => e.type == "player copy")) o.onlyDrawTrail = true;
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.x = -3100 - player.w / 2;
                player.y = 2300 - player.h / 2;
                player.explodeAnimation++;
                if (player.explodeAnimation % 4 == 0) game.particles.createEffect("player explode");
                game.cam.screenshake = Math.min(player.explodeAnimation / 50, 8) + 2;
                if (player.explodeAnimation > 500) {
                    if (game.level.triggers.tripped("shortcut")) {
                        saveData.shortcutsTaken[9] = true;
                    }
                    saveData.levelsBeaten = 10;
                    updateSaveData();
                    menu.resetCreditsScreen();
                    menu.creditsScreen = true;
                    menu.levelSelectAnimations = [];
                }
            }
        },
        {
            name: "gravity down",
            check: function () {
                if (!game.level.triggers.tripped("fall on planet")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "gravity down");
                return blocksColliding(player, o);
            },
            stop: function () {
                return true;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 0;
                player.eyeAngleTarget = 0;
                player.swapControls = {
                    left: "left",
                    right: "right",
                    top: "top",
                    bottom: "bottom"
                };
            }
        },
        {
            name: "gravity left",
            check: function () {
                if (!game.level.triggers.tripped("fall on planet")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "gravity left");
                return blocksColliding(player, o);
            },
            stop: function () {
                return true;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 90;
                player.eyeAngleTarget = 90;
                player.swapControls = {
                    left: "left",
                    right: "right",
                    top: "top",
                    bottom: "bottom"
                };
            }
        },
        {
            name: "gravity up",
            check: function () {
                if (!game.level.triggers.tripped("fall on planet")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "gravity up");
                return blocksColliding(player, o);
            },
            stop: function () {
                return true;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 180;
                player.eyeAngleTarget = 180;
                player.swapControls = {
                    left: "left",
                    right: "right",
                    top: "top",
                    bottom: "bottom"
                };
            }
        },
        {
            name: "gravity right",
            check: function () {
                if (!game.level.triggers.tripped("fall on planet")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "gravity right");
                return blocksColliding(player, o);
            },
            stop: function () {
                return true;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 270;
                player.eyeAngleTarget = 270;
                player.swapControls = {
                    left: "left",
                    right: "right",
                    top: "top",
                    bottom: "bottom"
                };
            }
        }
    ],
    viewportBoundary: { x: -1000, y: -200, w: 1000, h: 0 },
    camFunction: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return;
        if (game.level.triggers.tripped("shortcut teleport")) {
            if (game.level.triggers.tripped("explosion")) {
                game.cam.zoom = 1.3 + 0.4 * Math.min(player.explodeAnimation / 400, 1);
                return;
            }
            if (!player.shortcutTeleportTime) player.shortcutTeleportTime = 0;
            player.shortcutTeleportTime++;
            var percent = easeInOut(player.shortcutTeleportTime / 100 - 0.05);
            game.cam.x = game.cam.x * (1 - percent) - 3100 * percent;
            game.cam.y = (player.y + 87) * (1 - percent) + 2300 * percent;
            var dist = distTo(-3100, 2300, player.x + player.w / 2, player.y + player.h / 2);
            var a = easeInOut(1 - (dist - 10) / 190);
            game.cam.zoom = 1 - 0.3 * percent + a * 0.6;
            if (dist > 10) {
                var dir = -dirTo(-3100, 2300, player.x + player.w / 2, player.y + player.h / 2);
                var t = turn(game.cam.angle, dir);
                game.cam.angle += t / 20;
            }
            return;
        } else if (game.level.triggers.tripped("shortcut")) {
            return;
        } else if (game.level.triggers.tripped("explosion")) {
            game.cam.x = -3100;
            game.cam.y = 2300;
            game.cam.zoom = 1.3 + 0.4 * Math.min(player.explodeAnimation / 400, 1);
            return;
        } else if (game.level.triggers.tripped("layer 4")) {
            game.cam.x = -3100;
            game.cam.y = 2300;
            var dist = distTo(-3100, 2300, player.x + player.w / 2, player.y + player.h / 2);
            game.cam.zoom = 0.7 + 0.6 * (1 - Math.min(Math.max(dist / 100, 0), 1));
            return;
        } else if (game.level.triggers.tripped("fall on planet")) {
            game.cam.x = -3100;
            game.cam.y = 2300;
            var dir = -dirTo(-3100, 2300, player.x + player.w / 2, player.y + player.h / 2);
            var t = turn(game.cam.angle, dir);
            game.cam.angle += t / 20;
            game.cam.zoom = 0.7;
            return;
        } else if (game.level.triggers.tripped("falling on planet")) {
            var percent = ((player.y - 1000) / 900) ** 8;
            game.cam.x = game.cam.x * (1 - percent) - 3100 * percent;
            game.cam.y = game.cam.y * (1 - percent) + 2300 * percent;
            game.cam.zoom = 1 - 0.3 * easeInOut((player.y - 1000) / 900);
            return;
        } else if (game.level.triggers.tripped("teleport 6") || game.level.triggers.tripped("shortcut teleport")) {
            game.cam.angle = 0;
            return;
        }
        if (game.level.triggers.tripped("gravity switch 6")) {
            var percent = easeInOut((player.y - 9300) / 1400);
            game.cam.angle = game.cam.angle * (1 - percent) + (-360 + 180 * easeInOut((player.y - 9300) / 1400)) * percent;
            player.eyeAngleTarget = -360 + 180 * easeInOut((player.y - 9300) / 1400);
        } else if (game.level.triggers.tripped("gravity switch 5")) {
            game.cam.angle = game.cam.angle * 0.98 + (-360) * 0.02;
        } else if (game.level.triggers.tripped("gravity switch 4")) {
            game.cam.angle = game.cam.angle * 0.98 + (-(player.x + 5700) * 0.06 - 300) * 0.02;
        } else if (game.level.triggers.tripped("gravity switch 3")) {
            game.cam.angle = game.cam.angle * 0.98 + ((player.y - 8060) * 0.08 - 215) * 0.02;
        } else if (game.level.triggers.tripped("gravity switch 2")) {
            game.cam.angle = game.cam.angle * 0.98 + ((player.x + 4500) * 0.06 - 150) * 0.02;
        } else if (game.level.triggers.tripped("gravity switch 2")) {
            game.cam.angle = game.cam.angle * 0.98 + ((player.x + 4500) * 0.06 - 150) * 0.02;
        } else if (game.level.triggers.tripped("gravity switch 1") && player.x < -4100) {
            game.cam.angle = game.cam.angle * 0.98 + ((player.x + 4100) * 0.04 - (player.y - 6880) * 0.06 - 70) * 0.02;
        } else if (game.level.triggers.tripped("gravity switch 1")) {
            game.cam.angle = game.cam.angle * 0.98 + ((player.y - 7550) * 0.04 - 45) * 0.02;
        } else if (game.level.triggers.tripped("fall in long pipes") && player.y > 7460) {
            if (game.cam.angle === 360) game.cam.angle = 0;
            game.cam.angle = game.cam.angle * 0.98 + ((Math.min(player.x, -2900) + 2900) * 0.04) * 0.02;
        }
        if (game.level.triggers.tripped("gravity switch 5")) {
            if (player.y > 7800) game.cam.zoom = game.cam.zoom * 0.98 + 1 * 0.02;
            game.cam.followX = 0.1;
            game.cam.followY = 0.1;
            return;
        } else if (game.level.triggers.tripped("gravity switch 1") || game.level.triggers.tripped("gravity switch 4")) {
            game.cam.zoom = game.cam.zoom * 0.99 + 1.4 * 0.01;
            game.cam.followX = 0.1;
            game.cam.followY = 0.1;
            return;
        } else if (game.level.triggers.tripped("fall in long pipes")) {
            var p = easeInOut((player.y - 1480) / 100) * 0.2;
            game.cam.x = game.cam.x * (1 - p) + (player.x + player.w / 2) * p;
            game.cam.y = game.cam.y * (1 - p) + (player.y + player.h / 2) * p;
            game.cam.zoom = game.cam.zoom * 0.99 + 1 * 0.01;
            return;
        } else if (game.level.triggers.tripped("illusion 3")) {
            game.cam.zoom = 1 + easeInBack((Math.max(player.y, -140) + 140) / 200) * 3;
            game.cam.angle = easeInOut((Math.max(player.y, -140) + 140) / 200) * 360;
            return;
        }
        var targetX;
        if (game.level.triggers.tripped("illusion 2")) {
            targetX = -1840 + player.x + 1940;
            if (player.y > -140 && player.x < -2700) {
                var n = Math.min(Math.max(player.y, -140) + 140, 100);
                player.x = player.x * 0.9 + (-2775 - n / 2) * 0.1;
                player.xmove *= 0.9;
                player.ymove *= 0.5 + easeInOut((Math.max(player.y, -140) + 140) / 100) * 0.3;
                player.ymove += easeInOut((Math.max(player.y, -140) + 140) / 100) * 0.5;
                var percent = easeInOut((Math.max(player.y, -140) + 140) / 25);
                game.cam.x = targetX * (1 - percent) + (player.x + player.w / 2) * percent;
                game.cam.y = game.cam.y * (1 - percent) + (player.y + player.h / 2) * percent;
                game.cam.zoom = 1 + easeInBack((Math.max(player.y, -140) + 140) / 200) * 3;
                game.cam.angle = easeInOut((Math.max(player.y, -140) + 140) / 200) * 360;
                return;
            }
        } else if (game.level.triggers.tripped("illusion 1")) {
            targetX = -1840 + player.x + 1940;
        } else if (game.level.triggers.tripped("teleport 5")) {
            targetX = -1740 - (Math.min(player.y, -240) + 740) / 5 + Math.min(player.x, -1940) + 1940;
        } else if (game.level.triggers.tripped("jump 1")) {
            targetX = -1620 + (player.y + 140) / 5;
        } else if (game.level.triggers.tripped("teleport 4")) {
            targetX = Math.min(game.cam.x, -1560 - (player.y + 740) / 10);
        } else if (game.level.triggers.tripped("teleport 3")) {
            targetX = -1328 - (Math.min(player.y, 0) + 740) / 5 + (Math.min(player.x, -1300) + 1250) / 10;
        } else if (game.level.triggers.tripped("teleport 2")) {
            targetX = -870 - (Math.min(player.y, 0) + 740) / 5 + (Math.min(player.x, -1300) + 1250) / 2;
        } else if (game.level.triggers.tripped("teleport 1")) {
            targetX = -540 - (player.x + 1080) / 2;
        } else {
            targetX = player.x / 2;
        }
        game.cam.x = Math.min(0, targetX);
    },
    levelComplete: function () {
        return false;
    },
    camOffset: {
        x: 0,
        y: -200
    },
    camStartingPosition: {
        x: 0,
        y: -200
    },
    spawnPoint: {
        x: 300,
        y: 0
    },
    manualRespawn: function () {
        this.reload(9);
    }
}