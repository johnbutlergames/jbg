levels[3] = {
    objects: [
        { type: "block", x: -600, y: -1000, w: 100, h: 2000, slippery: true, blue: true },
        { type: "block", x: -500, y: 100, w: 1500, h: 3000, slippery: true, blue: true },
        { type: "block", x: 900, y: 100, w: 700, h: 2000, id: "fake block", alpha: 1 },
        { type: "block", x: 1500, y: 100, w: 2000, h: 2760, slippery: true, blue: true },
        { type: "block", x: 1540, y: 2850, w: 500, h: 200, blue: true },
        { type: "block", x: 1500, y: 2859, w: 2000, h: 1000, id: "push block", blue: true },
        { type: "block", x: 400, y: 2900, w: 2000, h: 3000, blue: true },
        { type: "text", content: "These walls are", x: 1250, y: 2500, font: "40px rubik", id: "fall in pit text", alpha: 0 },
        { type: "text", content: "your prison.", x: 1250, y: 2550, font: "40px rubik", id: "fall in pit text 2", alpha: 0 },
        { type: "block", x: 1000, y: 100, w: 500, h: 2800, collide: false, alpha: 0, eyeCollide: true },
        { type: "block", x: -600, y: 3000, w: 5000, h: 2800, collide: false, alpha: 0, eyeCollide: true },
        { type: "block", x: -600, y: 0, w: 5000, h: 100, collide: false, alpha: 0, eyeCollide: true },
        { type: "block", x: 200, y: 100, w: 100, h: 3000, collide: false, alpha: 0, eyeCollide: true },
        { type: "block", x: 2400, y: 100, w: 1000, h: 1850, collide: false, eyeCollide: true },
        { type: "block", x: 2400, y: 2300, w: 100, h: 800, collide: false, eyeCollide: true },
        { type: "block", x: 3100, y: 1900, w: 100, h: 1200, collide: false, eyeCollide: true },
        { type: "block", x: 2400, y: 1950, w: 100, h: 350, collide: false, eyeCollide: true, id: "red cube entrance" },
        { type: "block", x: 1700, y: 2600, w: 100, h: 100, collide: false, eyeCollide: true },
        { type: "block", x: 2130, y: 2500, w: 100, h: 100, collide: false, eyeCollide: true },
        { type: "block", x: 1650, y: 2100, w: 100, h: 100, collide: false, eyeCollide: true },
        { type: "block", x: 1950, y: 2000, w: 475, h: 250, collide: false, eyeCollide: true },
        { type: "text", content: "Sorry about this one.", color: "white", x: 2187.5, y: 2125, font: "30px rubik", alpha: 0, redCube: true },
        { type: "block", x: 2000, y: 1700, w: 100, h: 100, collide: false, eyeCollide: true },
        { type: "block", x: 1750, y: 1500, w: 100, h: 100, collide: false, eyeCollide: true },
        { type: "block", x: 2150, y: 1100, w: 100, h: 100, collide: false, eyeCollide: true },
        { type: "block", x: 1700, y: 1000, w: 300, h: 300, collide: false, eyeCollide: true },
        { type: "block", x: 2000, y: 100, w: 1000, h: 710, collide: false, eyeCollide: true },
        { type: "cube", x: 400, y: 2900, collide: false, collected: false, alpha: 0, hidden: true, onBlue: true },
        { type: "clue", x: 1250, y: 2950, collide: false, blue: true, collected: false, alpha: 0, hidden: true, proximity: 1, radius: 0, down: true, angle: 90, id: "cube clue" },
        { type: "block", x: 500, y: 1800, w: 500, h: 1100, collide: false, eyeCollide: true, alpha: 0, hidden: true, drawType: "glass" },
        { type: "block", x: 300, y: 1700, w: 200, h: 1100, collide: false, eyeCollide: true, alpha: 0, hidden: true, drawType: "glass" },
        { type: "block", x: 500, y: 1800, w: 500, h: 1100, collide: false, eyeCollide: true, alpha: 0, hidden: true, drawType: "glass" },
        { type: "block", x: 300, y: 1700, w: 200, h: 1100, collide: false, eyeCollide: true, alpha: 0, hidden: true, drawType: "glass" },
        { type: "clue", x: 1290, y: 50, collide: false, id: "shortcut clue", air: true, alpha: 0, color: { r: 0, g: 230, b: 0 }, down: true, angle: 180, radius: 0, proximity: 1 },
        { type: "text", content: "Good luck.", x: 1290, y: -50, font: "40px rubik", alpha: 0, shortcut: true },
        { type: "lava", x: 1400, y: 75, w: 5000, h: 25, collide: false, alpha: 0, shortcut: true },
        { type: "lava", x: -1800, y: 75, w: 3000, h: 25, collide: false, alpha: 0, shortcut: true },
        { type: "lava", x: 1175, y: 100, w: 25, h: 25, collide: false, alpha: 0, shortcut: true },
        { type: "lava", x: 1400, y: 100, w: 25, h: 25, collide: false, alpha: 0, shortcut: true },
        { type: "lava", x: 1175, y: 125, w: 250, h: 25, collide: false, alpha: 0, shortcut: true },
        { type: "unstable", x: 1400, y: 25, w: 100, h: 50, collide: false, alpha: 0, shortcut: true, decayValue: 0.05 },
        { type: "unstable", x: 1700, y: 25, w: 50, h: 50, collide: false, alpha: 0, shortcut: true, decayValue: 0.05 },
        { type: "unstable", x: 1600, y: -180, w: 50, h: 50, collide: false, alpha: 0, shortcut: true, decayValue: 0.05 },
        { type: "unstable", x: 2100, y: -230, w: 50, h: 50, collide: false, alpha: 0, shortcut: true, decayValue: 0.05 },
        { type: "clue", x: 2375, y: 1975, collide: false, id: "red cube clue 1", blue: true, color: { r: 255, g: 100, b: 100 }, down: true, angle: 270, radius: 0, proximity: 1 },
        { type: "clue", x: 2375, y: 2275, collide: false, id: "red cube clue 2", blue: true, color: { r: 255, g: 100, b: 100 }, down: true, angle: 270, radius: 0, proximity: 1 },
        { type: "lava", x: 2550, y: 1950, w: 100, h: 800, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "block", x: 2500, y: 2761, w: 500, h: 10, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "block", x: 2675, y: 2741, w: 25, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2680, y: 2021, w: 20, h: 720, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2720, y: 1950, w: 20, h: 800, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2980, y: 2021, w: 20, h: 740, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2740, y: 2730, w: 10, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2970, y: 2730, w: 10, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2770, y: 2730, w: 180, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2740, y: 2690, w: 15, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2965, y: 2650, w: 15, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2740, y: 2610, w: 15, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2965, y: 2570, w: 15, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2740, y: 2530, w: 15, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2965, y: 2490, w: 15, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2740, y: 2450, w: 15, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2965, y: 2410, w: 15, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2740, y: 2370, w: 15, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2965, y: 2330, w: 15, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2740, y: 2290, w: 15, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2965, y: 2250, w: 15, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2740, y: 2210, w: 15, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2960, y: 2150, w: 20, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2740, y: 2100, w: 20, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2960, y: 2050, w: 20, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "lava", x: 2740, y: 2000, w: 23, h: 20, collide: false, eyeCollide: true, alpha: 0, redCube: true },
        { type: "cube", x: 2615, y: 2890, collide: false, collected: false, red: true, onBlue: true, alpha: 0, redCube: true },
    ],
    triggers: [
        {
            name: "fall in pit",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x > 1000 && player.x < 1500) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.x > 1500) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "fake block");
                o.decay = 0.1;
                o.collide = false;
            },
            passive: function () {
                var o = game.objects.objects.find(e => e.type == "player");
                if (!o) return;
                if (o.x < 800) return;
                if (o.y < 200) o.xmove *= 0.99;
                game.cam.x = game.cam.x * 0.95 + 1200 * 0.05;
            }
        },
        {
            name: "fall in pit text",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.y > 2800) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "fall in pit text");
                o.decay = -0.05;
                var o = game.objects.objects.find(e => e.id == "fall in pit text 2");
                o.decay = -0.05;
            }
        },
        {
            name: "push block",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (!game.input.right) return false;
                var o = game.objects.objects.find(e => e.id == "push block");
                var xDist = o.x - player.x - player.w;
                if (xDist < 1 && o.y + 1 == player.y) return true;
                return false;
            },
            stop: function () {
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "push block");
                o.x += 0.5;
                var player = game.objects.objects.find(e => e.type == "player");
                player.x += 0.5;
            }
        },
        {
            name: "way out",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x != 1500) return false;
                if (player.y != 2860) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (player) return true;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.type = "block";
                player.id = "player block";
                player.color = "rgb(50,50,255)";
                player.w += 2;
                player.h += 2;
                player.y--;
                for (var o of game.objects.objects) {
                    if (!o.blue) continue;
                    o.blueAnimation = -50;
                    o.blueAnimationOrigin = { x: player.x - o.x, y: player.y - o.y };
                }

                var playerEye1 = {};
                playerEye1.type = "player eye";
                playerEye1.id = "player eye 1";
                playerEye1.x = player.eyePositions[0].x - 3.7;
                playerEye1.y = player.eyePositions[0].y - 3.7;
                playerEye1.w = 10;
                playerEye1.h = 10;
                playerEye1.controlDelay = 50;
                var playerEye2 = {};
                playerEye2.type = "player eye";
                playerEye2.id = "player eye 2";
                playerEye2.x = player.eyePositions[1].x - 3.7;
                playerEye2.y = player.eyePositions[1].y - 3.7;
                playerEye2.w = 10;
                playerEye2.h = 10;
                playerEye2.controlDelay = 50;
                game.objects.objects.push(playerEye1);
                game.objects.objects.push(playerEye2);
                game.cam.viewportBoundary.x += 800;
                game.cam.viewportBoundary.w -= 800;
                for (var o of game.objects.objects.filter(e => e.hidden)) {
                    o.alpha = 1;
                }
            },
            untrip: function () {
                game.cam.viewportBoundary.x -= 800;
                game.cam.viewportBoundary.w += 800;
                for (var o of game.objects.objects.filter(e => e.hidden)) {
                    o.alpha = 0;
                }
            },
            passive: function () {
                if (game.level.playerDead) return;
                var n = 0;
                for (var o of game.objects.objects) {
                    if (!o.blue) continue;
                    o.blueAnimation++;
                    if (o.blueAnimation == 7 && n === 0) game.soundEffects.bubblesStart();
                    n++;
                }
            }
        },
        {
            name: "respawn player",
            check: function () {
                var player1 = game.objects.objects.find(e => e.id == "player eye 1");
                var player2 = game.objects.objects.find(e => e.id == "player eye 2");
                if (!player1) return false;
                if (!player2) return false;
                if (player1.y > 110) return false;
                if (player2.y > 110) return false;
                return true;
            },
            stop: function () {
                return game.level.triggers.tripped("fall in pit");
            },
            trip: function () {
                var o1 = game.objects.objects.find(e => e.id == "player eye 1");
                var o2 = game.objects.objects.find(e => e.id == "player eye 2");
                o1.delete = true;
                o1.noDeathEffect = true;
                o2.delete = true;
                o2.noDeathEffect = true;
                game.objects.objects.find(e => e.id == "player block").delete = true;
                game.objects.objects.find(e => e.id == "push block").x = 1500;
                var player = game.level.createPlayer(o1.x / 2 + o2.x / 2 - 20 + 3.7, 100);
                player.x = Math.min(Math.max(player.x, 1500), 1960);
                player.a = 0;
                player.updatePlayer = false;
                game.objects.objects.push(player);
                for (var o of game.objects.objects) {
                    if (!o.blue) continue;
                    o.blueAnimation = 60;
                    o.blueAnimationOrigin = { x: o1.x - o.x, y: 100 - o.y };
                }
                game.soundEffects.bubblesEnd();
            },
            untrip: function () {
                for (var o of game.objects.objects) {
                    if (!o.blue) continue;
                    o.blueAnimation = 0;
                }
            },
            passive: function () {
                for (var o of game.objects.objects) {
                    if (!o.blue) continue;
                    o.blueAnimation--;
                }
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                if (player.y <= 60) {
                    player.updatePlayer = true;
                } else {
                    player.y -= 0.45;
                    player.ymove = -12;
                }
            }
        },
        {
            name: "show shortcut",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x < 1110) return false;
                if (player.x > 1150) return false;
                if (player.xmove < 0) return false;
                if (player.y > 60) return false;
                return true;
            },
            stop: function () {
                return game.level.triggers.tripped("fall in pit text");
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.time = 0;
            },
            untrip: function () {
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.alpha = 0;
            },
            passive: function () {
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.time++;
                o.alpha = o.time / 10;
            }
        },
        {
            name: "shortcut",
            check: function () {
                if (!game.level.triggers.tripped("show shortcut")) return;
                var player = game.objects.objects.find(e => e.type == "player");
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                if (!player) return false;
                var dist = distTo(o.x, o.y, player.x, player.y);
                if (dist > 40) return false;
                if (game.input.upStart == 0 || game.input.upStart > 10) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return false;
            },
            trip: function () {
                game.level.discoverShortcut();
                game.background.effect.start("green");
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.activated = true;
                for (var o of game.objects.objects.filter(e => e.shortcut)) {
                    o.decay = -0.1;
                    o.collide = true;
                }
                var player = game.objects.objects.find(e => e.type == "player");
                player.ymove = -10;
            },
            untrip: function () {
                game.background.effect.end("green");
                for (var o of game.objects.objects.filter(e => e.shortcut)) {
                    o.alpha = Math.min(o.alpha, 1);
                    o.decay = 0.1;
                    o.collide = false;
                }
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.activated = false;
            }
        },
        {
            name: "cube",
            check: function () {
                var player1 = game.objects.objects.find(e => e.id == "player eye 1");
                var player2 = game.objects.objects.find(e => e.id == "player eye 2");
                if (!player1 || !player2) return false;
                var minX = Math.min(player1.x, player2.x);
                var o = game.objects.objects.find(e => e.id == "cube clue");
                return minX < o.x;
            },
            stop: function () {
                var player1 = game.objects.objects.find(e => e.id == "player eye 1");
                var player2 = game.objects.objects.find(e => e.id == "player eye 2");
                if (!player1 || !player2) return true;
                var minX = Math.min(player1.x, player2.x);
                var o = game.objects.objects.find(e => e.id == "cube clue");
                return minX > o.x;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "cube clue");
                o.activated = true;
                game.background.effect.start("blue", { x: o.x, y: o.y });
            },
            untrip: function () {
                game.background.effect.end("blue");
                var o = game.objects.objects.find(e => e.id == "cube clue");
                o.activated = false;
            }
        },
        {
            name: "red cube",
            check: function () {
                var player1 = game.objects.objects.find(e => e.id == "player eye 1");
                var player2 = game.objects.objects.find(e => e.id == "player eye 2");
                if (!player1 || !player2) return false;
                var o1 = game.objects.objects.find(e => e.id == "red cube clue 1");
                var o2 = game.objects.objects.find(e => e.id == "red cube clue 2");
                var dist1 = Math.min(distTo(player1.x, player1.y, o1.x, o1.y), distTo(player2.x, player2.y, o1.x, o1.y));
                var dist2 = Math.min(distTo(player1.x, player1.y, o2.x, o2.y), distTo(player2.x, player2.y, o2.x, o2.y));
                return dist1 < 40 && dist2 < 40;
            },
            stop: function () {
                var player1 = game.objects.objects.find(e => e.id == "player eye 1");
                var player2 = game.objects.objects.find(e => e.id == "player eye 2");
                if (!player1 || !player2) return false;
                return player1.x < 2200 && player2.x < 2200;
            },
            trip: function () {
                game.level.discoverRedCube();
                var player1 = game.objects.objects.find(e => e.id == "player eye 1");
                var player2 = game.objects.objects.find(e => e.id == "player eye 2");
                var avgX = player1.x * 0.5 + player2.x * 0.5;
                var avgY = player1.y * 0.5 + player2.y * 0.5;
                game.background.effect.start("red", { x: avgX, y: avgY });
                var o = game.objects.objects.find(e => e.id == "red cube clue 1");
                o.activated = true;
                var o = game.objects.objects.find(e => e.id == "red cube clue 2");
                o.activated = true;
                var o = game.objects.objects.find(e => e.id == "red cube entrance");
                o.alpha = 0;
                o.eyeCollide = false;
                for (var o of game.objects.objects.filter(e => e.redCube)) {
                    o.alpha = 0;
                    o.decay = -0.1;
                }
            },
            untrip: function () {
                game.background.effect.end("red");
                var o = game.objects.objects.find(e => e.id == "red cube clue 1");
                o.activated = false;
                var o = game.objects.objects.find(e => e.id == "red cube clue 2");
                o.activated = false;
                var o = game.objects.objects.find(e => e.id == "red cube entrance");
                o.alpha = 1;
                o.eyeCollide = true;
                for (var o of game.objects.objects.filter(e => e.redCube)) {
                    o.alpha = 1;
                    o.decay = 0.1;
                }
            },
            passive: function () {
                var player1 = game.objects.objects.find(e => e.id == "player eye 1");
                var player2 = game.objects.objects.find(e => e.id == "player eye 2");
                if (!player1 || !player2) return;
                var maxX = Math.max(player1.x, player2.x);
                var percent = easeInOut((maxX - 2200) / 200);
                game.cam.viewportBoundary.w = 1100 + 700 * percent;
            }
        }
    ],
    viewportBoundary: { x: 0, y: 0, w: 1900, h: 2500 },
    checkForManualRespawn: function () {
        return game.level.triggers.tripped("red cube");
    },
    beforeManualRespawn: function () {
        var a = Math.min(Math.max((100 - this.playerRespawnTime) / 100, 0), 1);
        var p0 = easeInOut(a);
        game.cam.x = game.cam.x * (1 - p0) + (2470) * p0;
        game.cam.y = game.cam.y * (1 - p0) + (2120) * p0;
    },
    manualRespawn: function () {
        this.playerDead = false;
        var playerEye1 = {};
        playerEye1.type = "player eye";
        playerEye1.id = "player eye 1";
        playerEye1.x = 2470;
        playerEye1.y = 2020;
        playerEye1.w = 10;
        playerEye1.h = 10;
        playerEye1.spawnAnimation = 100;
        var playerEye2 = {};
        playerEye2.type = "player eye";
        playerEye2.id = "player eye 2";
        playerEye2.x = 2470;
        playerEye2.y = 2220;
        playerEye2.w = 10;
        playerEye2.h = 10;
        playerEye2.spawnAnimation = 100;
        game.objects.objects.push(playerEye1);
        game.objects.objects.push(playerEye2);
    },
    camFunction: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return;
    },
    levelComplete: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return false;
        if (player.x > 2420) return true;
        return false;
    },
    camOffset: {
        x: 0,
        y: 0
    },
    camStartingPosition: {
        x: 0,
        y: 0
    },
    spawnPoint: {
        x: -270,
        y: 0
    }
}