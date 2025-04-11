var levels = [];
levels[0] = {
    objects: [
        { type: "text", content: "It's Opposite Day!", x: 0, y: -600, font: "80px rubikbold", spawnAnimation: 80, spawnAnimationDuration: 50 },
        { type: "text", content: "(again)", x: 0, y: -520, font: "50px rubik", spawnAnimation: 150, spawnAnimationDuration: 50 },
        { type: "image", image: "arrows", x: -200, y: -420, w: 140, h: 100, spawnAnimation: 200, spawnAnimationDuration: 50 },
        { type: "text", content: "or", x: 0, y: -370, font: "50px rubik", spawnAnimation: 210, spawnAnimationDuration: 50 },
        { type: "image", image: "wasd", x: 60, y: -420, w: 140, h: 100, spawnAnimation: 220, spawnAnimationDuration: 50 },
        { type: "text", content: "Go this way to win", x: 0, y: -200, font: "60px rubik", spawnAnimation: 300, spawnAnimationDuration: 50 },
        { type: "text", content: "You sure figured", x: -1150, y: -200, font: "40px rubik", alpha: 0, id: "figured text 1" },
        { type: "text", content: "that out quick...", x: -1150, y: -150, font: "40px rubik", alpha: 0, id: "figured text 2" },
        { type: "arrow", x: 0, y: -100, spawnAnimation: 300, spawnAnimationDuration: 50 },
        { type: "text", content: "It's Opposite Day by the way...", x: 1000, y: 440, font: "34px rubikbold" },
        { type: "text", content: "You're a clever one, aren't you.", x: 1000, y: 1000, font: "34px rubik" },
        { type: "text", content: "Need to go faster?", x: -1100, y: 200, font: "34px rubik" },
        { type: "lava", x: 660, y: 500, w: 800, h: 350 },
        { type: "block", x: 600, y: 100, w: 800, h: 2000, id: "false block" },
        { type: "block", x: -2000, y: 100, w: 1600, h: 200, id: "shortcut passage" },
        { type: "clue", x: -550, y: 150, collide: false, proximity: 1, radius: 0, id: "shortcut passage clue", down: true, color: { r: 0, g: 230, b: 0 } },
        { type: "block", x: -2000, y: 100, w: 1400, h: 50 },
        { type: "block", x: -2000, y: 250, w: 1600, h: 50 },
        { type: "block", x: -500, y: 100, w: 1200, h: 250 },
        { type: "block", x: -2000, y: 300, w: 2500, h: 1300 },
        { type: "block", x: 600, y: 450, w: 100, h: 500 },
        { type: "block", x: 600, y: 850, w: 800, h: 100 },
        { type: "block", x: 400, y: 1050, w: 1300, h: 1000 },
        { type: "block", x: 1650, y: 0, w: 100, h: 2000 },
        { type: "block", x: 1650, y: -1000, w: 100, h: 1010, slippery: true },
        { type: "block", x: 1300, y: 100, w: 52, h: 850, slippery: true },
        { type: "block", x: 1350, y: 100, w: 150, h: 850 },
        { type: "cube", x: 1400, y: 0, collide: false, collected: false },
        { type: "block", x: 490, y: 300, w: 210, h: 1000, collide: false, id: "secret passage" },
        { type: "block", x: 490, y: 900, w: 1200, h: 200, collide: false, id: "secret passage 2" },
        { type: "block", x: 1490, y: 100, w: 210, h: 1200, id: "secret passage 3" },
        { type: "block", x: 500, y: 300, w: 200, h: 1000, collide: false, alpha: 0.15 },
        { type: "block", x: 1500, y: 100, w: 200, h: 1000, collide: false, alpha: 0.15 },
        { type: "block", x: 700, y: 500, w: 800, h: 1000, collide: false, alpha: 0.15 },
        { type: "clue", x: 640, y: 400, collide: false, proximity: 50, radius: 75, id: "secret passage clue" },
        { type: "cube", x: -500, y: -400, collide: false, collected: false, red: true, alpha: 0 },
        { type: "block", x: -1900, y: -450, w: 100, h: 300, slippery: true, alpha: 0 },
        { type: "block", x: -1900, y: -150, w: 100, h: 100, alpha: 0 },
        { type: "block", x: -1425, y: -400, w: 50, h: 25, redCube: true, alpha: 0, collide: false },
        { type: "lava", x: -1425, y: -425, w: 25, h: 25, redCube: true, alpha: 0, collide: false },
        { type: "lava", x: -1400, y: -375, w: 50, h: 25, redCube: true, alpha: 0, collide: false },
        { type: "block", x: -1000, y: -400, w: 60, h: 25, redCube: true, alpha: 0, collide: false },
        { type: "lava", x: -1025, y: -410, w: 25, h: 35, redCube: true, alpha: 0, collide: false },
        { type: "lava", x: -940, y: -410, w: 25, h: 35, redCube: true, alpha: 0, collide: false },
        { type: "text", content: "You'll never figure", x: -1150, y: -330, font: "30px rubik", alpha: 0, redCube: true },
        { type: "text", content: "this out though.", x: -1150, y: -290, font: "30px rubik", alpha: 0, redCube: true },
        { type: "clue", x: -1450, y: -200, collide: false, proximity: 1, radius: 0, air: true, down: true, angle: 180, color: { r: 255, g: 100, b: 100 }, id: "red cube clue" }
    ],
    triggers: [
        {
            name: "fall in pit",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "false block");
                if (o.collide == false && player.x > 700) return true;
                if (player.x > 750) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x < 0) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "false block");
                o.collide = false;
                if (o.alpha === undefined) o.alpha = 1;
                o.alpha = Math.min(o.alpha, 1);
                o.decay = 0.1;
            },
            passive: function () {
                if (game.level.triggers.tripped("secret passage")) return;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                if (player.y < 150) {
                    player.xmove *= 0.98;
                }
            }
        },
        {
            name: "secret passage",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x > 500 && player.x < 700 && player.y > 200) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.y < 60) return true;
                return false;
            },
            trip: function () {
                game.background.effect.start("blue");
                var o = game.objects.objects.find(e => e.id == "secret passage");
                o.alpha = 1;
                o.decay = 0.1;
                var o = game.objects.objects.find(e => e.id == "secret passage 2");
                o.alpha = 1;
                o.decay = 0.1;
                var o = game.objects.objects.find(e => e.id == "secret passage 3");
                o.alpha = 1;
                o.decay = 0.1;
                o.collide = false;
                var o = game.objects.objects.find(e => e.id == "secret passage clue");
                o.activated = true;
            },
            untrip: function () {
                game.background.effect.end("blue");
                var o = game.objects.objects.find(e => e.id == "secret passage");
                o.alpha = 0;
                o.decay = -0.1;
                var o = game.objects.objects.find(e => e.id == "secret passage 2");
                o.alpha = 0;
                o.decay = -0.1;
                var o = game.objects.objects.find(e => e.id == "secret passage 3");
                o.alpha = 0;
                o.decay = -0.1;
                o.collide = true;
                var o = game.objects.objects.find(e => e.id == "secret passage clue");
                o.activated = false;
            }
        },
        {
            name: "secret passage camera",
            check: function () {
                return game.level.triggers.tripped("secret passage");
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x < 0 && player.y < 100) return true;
                return false;
            },
            trip: function () {
                game.cam.offset = { x: 0, y: 0 };
                game.cam.viewportBoundary.w += 200;
            },
            untrip: function () {
                game.cam.offset = { x: 0, y: -200 };
                game.cam.viewportBoundary.w -= 200;
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;

                if (player.y < 100) {
                    var a = easeInOut((player.x - 200) / 400);
                    game.cam.y = game.cam.y * a - 200 * (1 - a);
                }
            }
        },
        {
            name: "figured out",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x < -1000) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "figured text 1");
                o.decay = -0.05;
                var o = game.objects.objects.find(e => e.id == "figured text 2");
                o.decay = -0.05;
            }
        },
        {
            name: "shortcut",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                var o = game.objects.objects.find(e => e.id == "shortcut passage clue");
                if (!player) return false;
                var dist = distTo(player.x + player.w / 2, player.y + player.h / 2, o.x, o.y);
                if (dist < 80 && game.input.down) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.y <= 59) return true;
                return false;
            },
            trip: function () {
                game.level.discoverShortcut();
                game.background.effect.start("green");
                var o = game.objects.objects.find(e => e.id == "shortcut passage");
                o.collide = false;
                o.alpha = 1;
                o.decay = 0.1;
                var o = game.objects.objects.find(e => e.id == "shortcut passage clue");
                o.activated = true;
            },
            untrip: function () {
                game.background.effect.end("green");
                var o = game.objects.objects.find(e => e.id == "shortcut passage");
                o.collide = true;
                o.alpha = 0;
                o.decay = -0.1;
                var o = game.objects.objects.find(e => e.id == "shortcut passage clue");
                o.activated = false;
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                if (player.y > 60) {
                    player.xmove *= 1.03;
                }
                var o = game.objects.objects.find(e => e.id == "shortcut passage");
                o.alpha = Math.max(o.alpha, 0.15);
            }
        },
        {
            name: "red cube",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                if (!player) return false;
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 40) return false;
                if (game.input.upStart == 0 || game.input.upStart > 10) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.y >= 50) return true;
                return false;
            },
            trip: function () {
                game.level.discoverRedCube();
                game.background.effect.start("red");
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.activated = true;
                var o = game.objects.objects.find(e => e.type == "cube" && e.red);
                o.decay = -0.1;
                o.alpha = 0;
                for (var o of game.objects.objects.filter(e => e.redCube)) {
                    o.alpha = 0;
                    o.decay = -0.1;
                    o.collide = true;
                }
                var player = game.objects.objects.find(e => e.type == "player");
                player.ymove = -10;
            },
            untrip: function () {
                game.background.effect.end("red");
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.activated = false;
                var o = game.objects.objects.find(e => e.type == "cube" && e.red);
                o.decay = 0.1;
                o.alpha = 1;
                for (var o of game.objects.objects.filter(e => e.redCube)) {
                    o.alpha = 1;
                    o.decay = 0.1;
                    o.collide = false;
                }
            }
        }
    ],
    viewportBoundary: { x: -1300, y: -10000, w: 2300, h: 20000 },
    camFunction: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return;
        if (!game.level.triggers.tripped("secret passage camera")) {
            if (!game.level.triggers.tripped("fall in pit")) {
                this.y = -200;
            }
            if (player.x > 0) {
                var a = easeInOut(player.x / 600);
                this.offset.x = a * 500;
            }
        }
    },
    levelComplete: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return false;
        if (player.x < -1840) return true;
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
    camSpeedModifiers: {
        y: 0.8
    },
    spawnPoint: {
        x: -20,
        y: 0
    }
}

levels[1] = {
    objects: [
        { type: "lava", drawType: "lava glass", x: -2000, y: -2900, w: 1400, h: 5000, alpha: 0, collide: false, id: "secret passage" },
        { type: "block", x: -600, y: 300, w: 200, h: 125, collide: false, alpha: 0.15 },
        { type: "block", x: -1850, y: 425, w: 1400, h: 2000, collide: false, alpha: 0.15 },
        { type: "text", content: "Jumping. How smart.", x: -1075, y: 115, font: "40px rubik", alpha: 0, id: "jump1" },
        { type: "text", content: "You think it works the second time?", x: -1200, y: 0, font: "40px rubik", alpha: 0, id: "jump2" },
        { type: "text", content: "That was embarrassing.", x: -1200, y: 300, font: "40px rubik", alpha: 0, id: "jump3" },
        { type: "text", content: "I'm stunned at your level of skill...", x: 0, y: -250, font: "40px rubik", spawnAnimation: 50, spawnAnimationDuration: 50 },
        { type: "block", x: 500, y: -1000, w: 2000, h: 800, slippery: true },
        { type: "block", x: 500, y: -200, w: 2000, h: 5000 },
        { type: "block", x: -600, y: 100, w: 2000, h: 225 },
        { type: "block", x: -500, y: 200, w: 2000, h: 5000 },
        { type: "block", x: -3250, y: 100, w: 1500, h: 5000, id: "platform3", slippery: true },
        { type: "block", x: -1050, y: 100, w: 200, h: 25, id: "platform1" },
        { type: "block", x: -1500, y: 100, w: 200, h: 25, id: "platform2" },
        { type: "block", x: -1850, y: 425, w: 1250, h: 100 },
        { type: "clue", x: 260, y: -180, collide: false, proximity: 100, radius: 0, id: "secret passage clue", air: true },
        { type: "block", drawType: "glass", x: 150, y: -100, w: 200, h: 25, alpha: 0, collide: false, id: "secret passage" },
        { type: "block", drawType: "glass", x: -300, y: -150, w: 100, h: 25, alpha: 0, collide: false, id: "secret passage" },
        { type: "block", drawType: "glass", x: -500, y: -320, w: 100, h: 25, alpha: 0, collide: false, id: "secret passage" },
        { type: "block", drawType: "glass", x: 0, y: -400, w: 100, h: 25, alpha: 0, collide: false, id: "secret passage" },
        { type: "block", drawType: "glass", x: 100, y: -570, w: 100, h: 25, alpha: 0, collide: false, id: "secret passage" },
        { type: "block", drawType: "glass", x: -300, y: -630, w: 100, h: 25, alpha: 0, collide: false, id: "secret passage" },
        { type: "block", drawType: "glass", x: -500, y: -800, w: 100, h: 25, alpha: 0, collide: false, id: "secret passage" },
        { type: "block", drawType: "glass", x: -137.5, y: -900, w: 100, h: 25, alpha: 0, collide: false, id: "secret passage" },
        { type: "text", content: "This should be easy for you.", font: "40px Rubik", x: 0, y: -470, alpha: 0, collide: false, id: "secret passage text" },
        { type: "cube", x: -87.5, y: -1100, collide: false, collected: false },
        { type: "clue", x: -750, y: -50, collide: false, proximity: 0, radius: 0, alpha: 0, id: "shortcut clue", air: true, color: { r: 0, g: 230, b: 0 } },
        { type: "text", content: "Wheeeeeeeeeeeeeeee!!!", x: -1200, y: -250, font: "40px rubik", alpha: 0, id: "shortcut text" },
        { type: "text", content: "Admit it, that one got you.", x: -2000, y: 200, font: "40px rubik", alpha: 0, id: "figured out text" },
        { type: "block", x: -600, y: 300, w: 200, h: 1000, id: "red cube cover" },
        { type: "block", x: -1850, y: 425, w: 1400, h: 1000, id: "red cube cover" },
        { type: "clue", x: -560, y: 375, collide: false, proximity: 100, radius: 50, alpha: 0, id: "red cube clue", color: { r: 255, g: 100, b: 100 } },
        { type: "block", x: -1850, y: 2000, w: 1400, h: 2000, alpha: 0, collide: false, redCube: true },
        { type: "block", x: -1800, y: 500, w: 100, h: 5000, alpha: 0, collide: false, redCube: true },
        { type: "block", x: -650, y: 500, w: 50, h: 1425, alpha: 0, collide: false, redCube: true },
        { type: "lava", x: -1200, y: 1700, w: 550, h: 50, alpha: 0, collide: false, redCube: true },
        { type: "lava", x: -1700, y: 1850, w: 50, h: 150, alpha: 0, collide: false, redCube: true },
        { type: "lava", x: -1700, y: 1400, w: 50, h: 170, alpha: 0, collide: false, redCube: true },
        { type: "block", x: -1200, y: 1830, w: 200, h: 50, alpha: 0, collide: false, redCube: true, slippery: true },
        { type: "block", x: -1250, y: 1650, w: 50, h: 50, alpha: 0, collide: false, redCube: true, slippery: true },
        { type: "lava", x: -1100, y: 1450, w: 25, h: 250, alpha: 0, collide: false, redCube: true },
        { type: "block", x: -1340, y: 1300, w: 25, h: 200, alpha: 0, collide: false, redCube: true },
        { type: "lava", x: -1315, y: 1100, w: 25, h: 400, alpha: 0, collide: false, redCube: true },
        { type: "text", content: "Have fun with this one.", x: -1350, y: 1950, font: "40px rubik" },
        { type: "lava", x: -1750, y: 400, w: 1150, h: 1000, id: "platform4" },
        { type: "cube", x: -720, y: 600, collide: false, collected: false, red: true, alpha: 0, redCube: true }
    ],
    triggers: [
        {
            name: "jump first",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (game.level.triggers.tripped("fall first")) return false;
                if (player.x > -600) return false;
                if (player.y >= 60) return false;
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "platform1");
                o.time = 0;
                var o = game.objects.objects.find(e => e.id == "platform2");
                o.time = 0;
                var o = game.objects.objects.find(e => e.id == "jump1");
                o.time = 0;
                game.soundEffects.platformMove();
            },
            passive: function () {
                var o = game.objects.objects.find(e => e.id == "platform1");
                o.time++;
                o.x = -1050 - 550 * easeInOut(o.time / 50);
                o.w = 200 - 100 * easeInOut(o.time / 50);
                var o = game.objects.objects.find(e => e.id == "platform2");
                o.time++;
                o.x = -1500 - 225 * easeInOut(o.time / 50);
                o.w = 200 - 100 * easeInOut(o.time / 50);
                var o = game.objects.objects.find(e => e.id == "jump1");
                o.time++;
                o.alpha = easeInOut((o.time - 30) / 30);
            }
        },
        {
            name: "fall first",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (game.level.triggers.tripped("jump first")) return false;
                if (player.y < 100) return false;
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "platform1");
                o.time = 0;
                var o = game.objects.objects.find(e => e.id == "platform2");
                o.time = 0;
                var o = game.objects.objects.find(e => e.id == "platform3");
                o.time = 0;
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.time = 0;
                game.soundEffects.platformMove();
            },
            passive: function () {
                if (game.level.triggers.tripped("jump second")) return;
                if (game.level.triggers.tripped("fall second")) return;
                var o = game.objects.objects.find(e => e.id == "platform1");
                o.time++;
                o.y = 100 + 200 * easeInOut(o.time / 20);
                o.w = 200 + 300 * easeInOut((o.time - 10) / 20);
                var o = game.objects.objects.find(e => e.id == "platform2");
                o.time++;
                o.y = 100 + 200 * easeInOut(o.time / 20);
                var o = game.objects.objects.find(e => e.id == "platform3");
                o.time++;
                o.y = 100 + 200 * easeInOut(o.time / 20);
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.time++;
                o.alpha = easeInOut((o.time - 20) / 20);
                if (o.time < 40) {
                    var player = game.objects.objects.find(e => e.type == "player");
                    if (player) {
                        player.ymove *= 0.95;
                    }
                }
            }
        },
        {
            name: "jump second",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (game.level.triggers.tripped("shortcut")) return false;
                if (!game.level.triggers.tripped("fall first")) return false;
                if (game.level.triggers.tripped("fall second")) return false;
                if (player.x > -1000) return false;
                if (player.ymove >= 0 && player.y >= 60) return false;
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "platform1");
                o.time = 0;
                var o = game.objects.objects.find(e => e.id == "platform2");
                o.time = 0;
                var o = game.objects.objects.find(e => e.id == "jump2");
                o.time = 0;
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.alpha = 0;
                game.soundEffects.platformMove();
            },
            passive: function () {
                var o = game.objects.objects.find(e => e.id == "platform1");
                o.time++;
                o.x = -1050 + 350 * easeInOut(o.time / 50);
                var o = game.objects.objects.find(e => e.id == "platform2");
                o.time++;
                o.x = -1500 + 650 * easeInOut(o.time / 50);
                o.w = 200 - 100 * easeInOut(o.time / 50);
                var o = game.objects.objects.find(e => e.id == "jump2");
                o.time++;
                o.alpha = easeInOut(o.time / 30);
            }
        },
        {
            name: "fall second",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (game.level.triggers.tripped("shortcut")) return false;
                if (game.level.triggers.tripped("jump second")) return false;
                if (!game.level.triggers.tripped("fall first")) return false;
                if (player.y < 261) return false;
                if (player.x > -1000) return false;
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "platform2");
                o.time = 0;
                var o = game.objects.objects.find(e => e.id == "platform3");
                o.time = 0;
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.alpha = 0;
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.decay = -0.1;
                for (var o of game.objects.objects.filter(e => e.id == "red cube cover")) {
                    o.collide = false;
                }
                game.soundEffects.platformMove();
            },
            passive: function () {
                if (game.level.triggers.tripped("jump third")) return false;
                if (game.level.triggers.tripped("fall third")) return false;
                var o = game.objects.objects.find(e => e.id == "platform2");
                o.time++;
                o.y = 300 + 75 * easeInOut(o.time / 20);
                o.w = 200 + 250 * easeInOut(o.time / 20);
                var o = game.objects.objects.find(e => e.id == "platform3");
                o.time++;
                o.y = 300 + 75 * easeInOut(o.time / 20);
            }
        },
        {
            name: "jump third",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (game.level.triggers.tripped("fall third")) return false;
                if (!game.level.triggers.tripped("fall second")) return false;
                if (player.y >= 335 && player.ymove >= 0) return false;
                if (player.x > -1500) return false;
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "platform1");
                o.time = 0;
                var o = game.objects.objects.find(e => e.id == "platform2");
                o.time = 0;
                var o = game.objects.objects.find(e => e.id == "platform3");
                o.time = 0;
                var o = game.objects.objects.find(e => e.id == "jump3");
                o.time = 0;
                game.soundEffects.platformMove();
            },
            passive: function () {
                var o = game.objects.objects.find(e => e.id == "platform1");
                o.time++;
                o.x = -1050 + 250 * easeInOut(o.time / 40);
                var o = game.objects.objects.find(e => e.id == "platform2");
                o.time++;
                o.x = -1500 + 700 * easeInOut(o.time / 40);
                var o = game.objects.objects.find(e => e.id == "platform3");
                o.time++;
                o.y = 375 - 275 * easeInOut(o.time / 40);
                var o = game.objects.objects.find(e => e.id == "jump3");
                o.time++;
                o.alpha = easeInOut((o.time - 30) / 30);
            }
        },
        {
            name: "fall third",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (game.level.triggers.tripped("jump third")) return false;
                if (!game.level.triggers.tripped("fall second")) return false;
                if (player.y < 336) return false;
                if (player.x > -1500) return false;
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "platform4");
                o.time = 0;
                o.decay = 0.1;
                o.alpha = 1;
                o.collide = false;
                var o = game.objects.objects.find(e => e.id == "platform3");
                o.time = 0;
                game.soundEffects.platformMove();
            },
            passive: function () {
                var o = game.objects.objects.find(e => e.id == "platform3");
                o.time++;
                o.y = 375 + 50 * easeInOut(o.time / 20);
                var o = game.objects.objects.find(e => e.id == "platform4");
                o.time++;
                o.y = 400 + 50 * easeInOut(o.time / 20);
            }
        },
        {
            name: "secret passage",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "secret passage clue");
                if (distTo(player.x + player.w / 2, player.y + player.h / 2, o.x, o.y) < 60) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (distTo(player.x + player.w / 2, player.y + player.h / 2, -87.5, -1100) < 70) return true;
                return false;
            },
            trip: function () {
                game.background.effect.start("blue");
                var o = game.objects.objects.find(e => e.id == "secret passage clue");
                o.activated = true;
                var o = game.objects.objects.find(e => e.id == "secret passage text");
                o.alpha = 0;
                o.decay = -0.1;
                for (var o of game.objects.objects.filter(e => e.id == "secret passage")) {
                    o.collide = true;
                    o.alpha = 0;
                    o.decay = -0.1;
                }
            },
            untrip: function () {
                game.background.effect.end("blue");
                var o = game.objects.objects.find(e => e.id == "secret passage clue");
                o.activated = false;
                var o = game.objects.objects.find(e => e.id == "secret passage text");
                o.alpha = 1;
                o.decay = 0.1;
                var arr = game.objects.objects.filter(e => e.id == "secret passage");
                for (var o of arr) {
                    o.collide = false;
                    o.alpha = 1.5;
                    o.decay = 0.01;
                }
            }
        },
        {
            name: "collect cube",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (distTo(player.x + player.w / 2, player.y + player.h / 2, -87.5, -1100) < 70) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.y > -200) return true;
                return false;
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                player.xmove *= 0.9;
            }
        },
        {
            name: "shortcut",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                if (o.alpha < 1) return false;
                if (distTo(player.x + player.w / 2, player.y + player.h / 2, o.x, o.y) < 50) return true;
                return false;
            },
            trip: function () {
                game.level.discoverShortcut();
                game.background.effect.start("green");
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.activated = true;
                var o = game.objects.objects.find(e => e.id == "shortcut text");
                o.decay = -0.05;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                player.xmove = -30;
                player.ymove = -10;
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                player.xmove -= 2;
            }
        },
        {
            name: "figured out",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (game.level.triggers.tripped("shortcut")) return false;
                if (player.x < -1900) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "figured out text");
                o.decay = -0.05;
            }
        },
        {
            name: "red cube",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!game.level.triggers.tripped("fall third")) return false;
                if (!player) return false;
                if (player.x < -640) return false;
                if (player.y < 270) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x > -640) return false;
                if (player.y > 400) return false;
                return true;
            },
            trip: function () {
                game.level.discoverRedCube();
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.activated = true;
                for (var o of game.objects.objects.filter(e => e.redCube)) {
                    o.alpha = 1;
                    o.collide = true;
                    o.decay = 0;
                }
                for (var o of game.objects.objects.filter(e => e.id == "red cube cover")) {
                    o.alpha = 1;
                    o.decay = 0.1;
                }
            },
            untrip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.activated = false;
                for (var o of game.objects.objects.filter(e => e.redCube)) {
                    o.alpha = 1;
                    o.decay = 0.1;
                    o.collide = false;
                }
                for (var o of game.objects.objects.filter(e => e.id == "red cube cover")) {
                    o.alpha = 0;
                    o.decay = -0.1;
                }
            }
        },
        {
            name: "red cube background",
            check: function () {
                return game.level.triggers.tripped("red cube") && game.objects.objects.find(e => e.type == "player");
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.x > -700) return false;
                if (player.y > 400) return false;
                return true;
            },
            trip: function () {
                game.background.effect.start("red");
            },
            untrip: function () {
                game.background.effect.end("red");
            }
        },
    ],
    viewportBoundary: { x: -2000, y: -10000, w: 2000, h: 20000 },
    camFunction: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return;
        if (game.level.triggers.tripped("secret passage")) return;
        var p = easeInOut(1 - (player.x + 600) / 400);
        var p2 = easeInOut(1 - (player.x + 400) / 400);
        if (player.x < -1400 && !game.level.triggers.tripped("jump third")) {
            var p = easeInOut((player.x + 1900) / 400);
            var p2 = easeInOut((player.x + 1900) / 400);
        }
        if (player.y > 500 || player.x > -600 && player.y > 200) {
            game.cam.x = -1175;
            game.cam.zoom = 0.7;
            return;
        }
        if (p != 0 || player.x < -1400) {
            game.cam.x = (player.x + player.w / 2) * (1 - p) - 1175 * p;
            game.cam.x = Math.max(game.cam.viewportBoundary.x, game.cam.x);
        }
        if (p2 != 0 || player.x < -1400) {
            game.cam.zoom = 1 * (1 - p2) + 0.7 * p2;
        }
    },
    levelComplete: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return false;
        return player.x < -2550;
    },
    camOffset: {
        x: 0,
        y: 0
    },
    camFollowX: 1,
    camStartingPosition: {
        x: 0,
        y: 0
    },
    spawnPoint: {
        x: 300,
        y: 0
    }
}

levels[2] = {
    objects: [
        { type: "text", content: "Behold!", x: 0, y: -250, font: "40px rubik", spawnAnimation: 120, spawnAnimationDuration: 50, id: "first text" },
        { type: "text", content: "The Mountain of Persistence!", x: 0, y: -180, font: "40px rubik", spawnAnimation: 210, spawnAnimationDuration: 50, id: "first text" },
        { type: "arrow", x: 0, y: -100, spawnAnimation: 210, spawnAnimationDuration: 50, angle: 180, lineWidth: 8, totalWidth: 130, height: 20, id: "first text" },
        { type: "text", content: "Sorry if that took you a while...", x: 0, y: -180, font: "40px rubik", alpha: 0, id: "second text" },
        { type: "arrow", x: 0, y: -100, angle: 0, lineWidth: 8, totalWidth: 130, height: 20, alpha: 0, id: "second arrow" },
        { type: "text", content: "Risk it for the biscuit.", x: -550, y: 250, font: "35px rubik" },
        { type: "block", x: -700, y: 100, w: 3000, h: 100 },
        { type: "block", x: -6000, y: 300, w: 12000, h: 5000 },
        { type: "block", x: 500, y: -1000, w: 4000, h: 2000, id: "barrier", alpha: 0, slippery: true },
        { type: "lava", x: -2000, y: -350, w: 4000, h: 50, redCube: true, alpha: 0, collide: false },
        { type: "block", x: -910, y: 0, w: 110, h: 2000 },
        { type: "block", x: -1010, y: -100, w: 110, h: 2000 },
        { type: "block", x: -1110, y: -200, w: 110, h: 2000 },
        { type: "block", x: -1210, y: -300, w: 110, h: 2000 },
        { type: "block", x: -1310, y: -400, w: 110, h: 2000 },
        { type: "block", x: -1410, y: -500, w: 110, h: 2000 },
        { type: "block", x: -1510, y: -600, w: 110, h: 2000 },
        { type: "block", x: -1610, y: -700, w: 110, h: 2000 },
        { type: "block", x: -1710, y: -800, w: 110, h: 2000 },
        { type: "block", x: -1810, y: -900, w: 110, h: 2000 },
        { type: "block", x: -1910, y: -1000, w: 110, h: 2000 },
        { type: "block", x: -2010, y: -1100, w: 110, h: 2000 },
        { type: "block", x: -2110, y: -1200, w: 110, h: 2000 },
        { type: "block", x: -2210, y: -1300, w: 110, h: 2000 },
        { type: "block", x: -2310, y: -1400, w: 110, h: 2000 },
        { type: "block", x: -2410, y: -1500, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -2510, y: -1600, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -2610, y: -1700, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -2710, y: -1800, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -2810, y: -1900, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -2910, y: -2000, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -3010, y: -2100, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -3110, y: -2200, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -3210, y: -2300, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -3310, y: -2400, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -3410, y: -2500, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -3510, y: -2600, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -3610, y: -2700, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -3710, y: -2800, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -3810, y: -2900, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -3910, y: -3000, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -4010, y: -3100, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -4110, y: -3200, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -4210, y: -3300, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -4310, y: -3400, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -4410, y: -3500, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -4510, y: -3600, w: 110, h: 6000, collide: false, fake: true },
        { type: "block", x: -6010, y: -3700, w: 1510, h: 6000, collide: false, fake: true },
        { type: "block", x: -3710, y: -1500, w: 1410, h: 2000, alpha: 0, hidden: true },
        { type: "cube", x: -2400, y: -1600, collide: false, collected: false, alpha: 0, hidden: true },
        { type: "block", x: -4110, y: -3000, w: 1600, h: 4000, alpha: 0, hidden: true, slippery: true },
        { type: "lava", x: -300, y: 290, w: 100, h: 1010 },
        { type: "lava", x: 0, y: 290, w: 100, h: 1010 },
        { type: "lava", x: 320, y: 290, w: 100, h: 1010 },
        { type: "lava", x: 640, y: 290, w: 100, h: 1010 },
        { type: "block", x: -900, y: 100, w: 10000, h: 2000, id: "shortcut passage" },
        { type: "clue", x: -150, y: 150, collide: false, proximity: 1, radius: 0, id: "first shortcut passage clue", down: true, color: { r: 0, g: 230, b: 0 }, alpha: 0, decay: -0.005 },
        { type: "clue", x: -750, y: 150, collide: false, proximity: 1, radius: 0, id: "shortcut passage clue", down: true, color: { r: 0, g: 230, b: 0 }, alpha: 0 },
        { type: "block", x: 900, y: -200, w: 25, h: 170, id: "cube wall jump", alpha: 0 },
        { type: "block", x: 900, y: -500, w: 25, h: 300, id: "cube wall jump", alpha: 0, slippery: true },
        { type: "clue", x: 650, y: -165, collide: false, alpha: 0, proximity: 100, radius: 0, id: "cube clue", air: true },
        { type: "arrow", x: 650, y: -85, collide: false, alpha: 0, angle: 180, lineWidth: 8, totalWidth: 130, height: 20, id: "cube arrow" },
        { type: "text", content: "Second time's the charm", x: 650, y: -235, font: "35px rubik", alpha: 0, id: "cube text" },
        { type: "clue", x: -1250, y: -350, collide: false, proximity: 1, radius: 0, id: "red cube jump clue", down: true, angle: 225, color: { r: 255, g: 100, b: 100 } },
        { type: "clue", x: -540, y: -400, collide: false, proximity: 1, radius: 0, air: true, id: "red cube clue", down: true, angle: 180, color: { r: 255, g: 100, b: 100 } },
        { type: "unstable", x: -120, y: -500, w: 25, h: 25, redCube: true, alpha: 0, collide: false, decayValue: 0.1 },
        { type: "unstable", x: -60, y: -650, w: 25, h: 25, redCube: true, alpha: 0, collide: false, decayValue: 0.1 },
        { type: "unstable", x: -200, y: -800, w: 25, h: 25, redCube: true, alpha: 0, collide: false, decayValue: 0.1 },
        { type: "unstable", x: -500, y: -960, w: 25, h: 25, redCube: true, alpha: 0, collide: false, decayValue: 0.1 },
        { type: "unstable", x: -100, y: -1110, w: 25, h: 25, redCube: true, alpha: 0, collide: false, decayValue: 0.1 },
        { type: "unstable", x: 0, y: -1270, w: 25, h: 25, redCube: true, alpha: 0, collide: false, decayValue: 0.1 },
        { type: "unstable", x: -400, y: -1400, w: 25, h: 25, redCube: true, alpha: 0, collide: false, decayValue: 0.1 },
        { type: "unstable", x: -300, y: -1600, w: 25, h: 25, redCube: true, alpha: 0, collide: false, decayValue: 0.1 },
        { type: "cube", x: -550, y: -1700, collide: false, collected: false, red: true, alpha: 0, redCube: true },
        { type: "text", content: "Actually impossible.", x: -540, y: -500, font: "35px rubik", alpha: 0, redCube: true },
    ],
    triggers: [
        {
            name: "first mountain illusion",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x > -1400) return false;
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube jump clue");
                o.alpha = 1;
                o.decay = 0.1;
                if (o.activated) o.alpha = 0;
                o.x += 100;
                o.y += 100;
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.alpha = 1;
                o.decay = 0.1;
                for (var o of game.objects.objects.filter(e => e.id == "first text")) {
                    o.alpha = 0;
                }
                for (var o of game.objects.objects.filter(e => e.id == "second text")) {
                    o.alpha = 1;
                }
                var o = game.objects.objects.find(e => e.id == "second arrow");
                o.alpha = 1;
                var o = game.objects.objects.find(e => e.id == "shortcut passage clue");
                o.alpha = 0;
                var o = game.objects.objects.find(e => e.id == "first shortcut passage clue");
                o.alpha = 0;
                o.decay = 0;
                var o = game.objects.objects.find(e => e.id == "cube clue");
                o.alpha = 1;
                var o = game.objects.objects.find(e => e.id == "barrier");
                o.x += 500;
                game.cam.viewportBoundary.w += 400;
            }
        },
        {
            name: "mountain illusion",
            check: function () {
                if (game.level.triggers.tripped("cube")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x > -1400) return false;
                return true;
            },
            stop: function () {
                return true;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                for (var o of player.positionHistory) {
                    o.x += 100;
                    o.y += 100;
                }
                player.x += 100;
                player.y += 100;
                game.cam.x += 100;
                game.cam.y += 100;
                for (var o of game.particles.objects) {
                    o.x += 100;
                    o.y += 100;
                }
                game.backgroundOffset.x += 100 * 0.8;
                game.backgroundOffset.y += 100 * 0.8;
            }
        },
        {
            name: "pre-shortcut",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (game.level.triggers.tripped("first mountain illusion") && !game.level.triggers.tripped("cube")) return false;
                var o = game.objects.objects.find(e => e.id == "first shortcut passage clue");
                var dist = distTo(player.x + player.w / 2, player.y + player.y / 2, o.x, o.y);
                if (dist < 70 && game.input.down) return true;
                return false;
            },
            trip: function () {
                game.level.discoverShortcut();
                var o = game.objects.objects.find(e => e.id == "first shortcut passage clue");
                o.activated = true;
                o.alpha = 1.5;
                o.decay = 0.02;
                var o = game.objects.objects.find(e => e.id == "shortcut passage clue");
                o.alpha = 1;
                game.soundEffects.preShortcut();
            }
        },
        {
            name: "shortcut",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (!game.level.triggers.tripped("pre-shortcut")) return false;
                if (game.level.triggers.tripped("first mountain illusion") && !game.level.triggers.tripped("cube")) return false;
                var o = game.objects.objects.find(e => e.id == "shortcut passage clue");
                var dist = distTo(player.x + player.w / 2, player.y + player.y / 2, o.x, o.y);
                if (dist < 67 && game.input.down) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.y <= 60) return true;
                return false;
            },
            trip: function () {
                game.background.effect.start("green");
                var o = game.objects.objects.find(e => e.id == "shortcut passage");
                o.collide = false;
                o.decay = 0;
                var o = game.objects.objects.find(e => e.id == "shortcut passage clue");
                o.activated = true;
                if (!game.level.triggers.tripped("cube")) {
                    var o = game.objects.objects.find(e => e.id == "barrier");
                    o.x += 500;
                    game.cam.viewportBoundary.w += 400;
                }
                var player = game.objects.objects.find(e => e.type == "player");
                if (player) {
                    player.againstBottom = {
                        current: false,
                        last: 10000,
                        time: 0
                    }
                }
            },
            untrip: function () {
                game.background.effect.end("green");
                var o = game.objects.objects.find(e => e.id == "shortcut passage");
                o.collide = true;
                o.decay = -0.05;
                var o = game.objects.objects.find(e => e.id == "shortcut passage clue");
                o.activated = false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!game.level.triggers.tripped("cube") && player) {
                    var o = game.objects.objects.find(e => e.id == "barrier");
                    o.x -= 500;
                    game.cam.viewportBoundary.w -= 400;
                }
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                if (player.y > 60) {
                    player.xmove *= 1.03;
                    game.cam.offset.y = 200;
                } else {
                    game.cam.offset.y = 0;
                }
                var o = game.objects.objects.find(e => e.id == "shortcut passage");
                if (!o.alpha) o.alpha = 1;
                o.alpha = Math.min(Math.max(1 - easeInOut((player.y - 60) / 170), 0.15), o.alpha);
            }
        },
        {
            name: "cube",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (!game.level.triggers.tripped("first mountain illusion")) return false;
                var o = game.objects.objects.find(e => e.id == "cube clue");
                var dist = distTo(player.x + player.w / 2, player.y + player.h / 2, o.x, o.y);
                if (dist < 60) return true;
                return false;
            },
            trip: function () {
                game.background.effect.start("blue");
                var o = game.objects.objects.find(e => e.id == "cube clue");
                o.activated = true;
                var o = game.objects.objects.find(e => e.id == "cube arrow");
                o.decay = -0.1;
                var o = game.objects.objects.find(e => e.id == "cube text");
                o.decay = -0.1;
                var o = game.objects.objects.find(e => e.id == "second arrow");
                o.decay = 0.1;
                o.alpha = 1;
                if (game.level.triggers.tripped("pre-shortcut")) {
                    var o = game.objects.objects.find(e => e.id == "shortcut passage clue");
                    o.alpha = 1;
                } else {
                    var o = game.objects.objects.find(e => e.id == "first shortcut passage clue");
                    o.alpha = 1;
                }
            }
        },
        {
            name: "stop cube background",
            check: function () {
                if (!game.level.triggers.tripped("cube")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                var o = game.objects.objects.find(e => e.type == "cube");
                var dist = distTo(player.x, player.y, o.x - 20, o.y - 20);
                if (dist < 70) return true;
                return false;
            },
            trip: function () {
                game.background.effect.end("blue");
            }
        },
        {
            name: "red cube jump",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (game.level.triggers.tripped("red cube")) return false;
                if (game.level.triggers.tripped("first mountain illusion")) return false;
                if (player.y != -440 && !(player.againstBottom.last < 10 && player.y < -430 && player.y >= -440)) return false;
                if (player.xmove <= 0) return false;
                if (!game.input.up) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.y > -351) return true;
                if (player.xmove < 0) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube jump clue");
                o.activated = true;
                var player = game.objects.objects.find(e => e.type == "player");
                player.ymove = -14;
                player.y--;
                game.soundEffects.redCubePreClue();
            },
            untrip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube jump clue");
                o.activated = false;
            }
        },
        {
            name: "red cube",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (!game.level.triggers.tripped("red cube jump")) return false;
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                var dist = distTo(player.x, player.y, o.x - 20, o.y - 20);
                if (dist < 40 && (game.input.upStart && game.input.upStart < 10)) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.x < -1200) return true;
                var o = game.objects.objects.find(e => e.type == "cube" && e.red);
                var dist = distTo(player.x + player.w / 2, player.y + player.h / 2, o.x, o.y);
                if (dist < 70) return true;
                return false;
            },
            trip: function () {
                game.level.discoverRedCube();
                game.background.effect.start("red");
                var player = game.objects.objects.find(e => e.type == "player");
                player.ymove = -10;
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.activated = true;
                for (var o of game.objects.objects.filter(e => e.redCube)) {
                    o.decay = -0.1;
                    o.collide = true;
                }
            },
            untrip: function () {
                game.background.effect.end("red");
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.activated = false;
                for (var o of game.objects.objects.filter(e => e.redCube)) {
                    if (o.alpha > 1 || o.alpha === undefined) o.alpha = 1;
                    o.decay = 0.1;
                    o.collide = false;
                }
            }
        },
    ],
    viewportBoundary: { x: -3300, y: -10000, w: 3300, h: 20000 },
    camFunction: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return;
        if (game.level.levelAnimationTime > 250) {
            game.backgroundOpacity = 1 - easeInOut((game.level.levelAnimationTime - 250) / 50);
            this.zoom = 1 - easeInOut((game.level.levelAnimationTime - 300) / 50) * 0.9;
        }
        if (game.level.levelAnimationTime == 300) game.soundEffects.whoosh();
        if (game.level.levelAnimationTime > 500) {
            game.backgroundOpacity = easeInOut((game.level.levelAnimationTime - 540) / 50);
            this.zoom = 0.1 + easeInOut((game.level.levelAnimationTime - 500) / 50) * 0.9;
        }
        if (game.level.levelAnimationTime == 500) game.soundEffects.reverseWhoosh();
        if (game.level.levelAnimationTime == 550) {
            for (var o of game.objects.objects.filter(e => e.hidden)) {
                o.alpha = 1;
            }
            for (var o of game.objects.objects.filter(e => e.fake)) {
                o.alpha = 0;
            }
        }
    },
    reload: function () {
        for (var o of game.objects.objects.filter(e => e.hidden)) {
            o.alpha = 1;
        }
        for (var o of game.objects.objects.filter(e => e.fake)) {
            o.alpha = 0;
        }
    },
    levelComplete: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return false;
        if (player.x > 900) return true;
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
        x: 300,
        y: 0
    },
    playerControlDelay: 500
}

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
                if (!player1 || !player2) return true;
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
        },
        {
            name: "player eye dead",
            check: function () {
                return game.level.triggers.tripped("way out") && game.level.playerDead;
            },
            trip: function () {
                for (var o of game.objects.objects) {
                    if (!o.blue) continue;
                    o.stopBlueAnimation = 0;
                    o.color = "rgb(50,50,255)";
                    o.blueAnimation = false;
                    o.blueAnimationOrigin = false;
                }
            },
            passive: function () {
                for (var o of game.objects.objects) {
                    if (!o.blue) continue;
                    o.stopBlueAnimation++;
                    var percent = 1 - easeInOut((o.stopBlueAnimation - 50) / 30);
                    o.color = `rgb(${50 * percent},${50 * percent},${255 * percent})`;
                }
            }
        }
    ],
    viewportBoundary: { x: 0, y: 0, w: 1900, h: 2500 },
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

levels[4] = {
    objects: [
        { type: "text", content: "Don't press the button...", x: 0, y: -250, font: "40px rubik", spawnAnimation: 120, spawnAnimationDuration: 50, id: "dont press button text" },
        { type: "text", content: "Better run!!!", x: 0, y: -180, font: "40px rubik", spawnAnimation: 50, spawnAnimationDuration: 50, alpha: 0, id: "run text" },
        { type: "block", x: -1000, y: -1000, w: 500, h: 2000, id: "left barrier", slippery: true },
        { type: "block", x: 500, y: -1000, w: 50, h: 2000, id: "right barrier", slippery: true },
        { type: "block", x: -2000, y: 100, w: 1700, h: 2000 },
        { type: "block", x: -255, y: 100, w: 8000, h: 2000 },
        { type: "block", x: -350, y: 100, w: 400, h: 2000, id: "shortcut background", collide: false, alpha: 0.15 },
        { type: "block", x: -350, y: 100, w: 400, h: 2000, id: "shortcut barrier" },
        { type: "clue", x: 150, y: 140, collide: false, proximity: 1, radius: 0, id: "shortcut clue 1", down: true, color: { r: 0, g: 230, b: 0 }, alpha: 0 },
        { type: "clue", x: -277.5, y: 140, collide: false, proximity: 1, radius: 0, id: "shortcut clue 2", down: true, color: { r: 0, g: 230, b: 0 }, alpha: 0 },
        { type: "button", x: -50, y: 70, w: 100, h: 30, originalHeight: 30, pushBack: false, id: "button" },
        { type: "lava", x: -3550, y: -1000, w: 3000, h: 900, id: "lava chase" },
        { type: "lava", x: -100, y: -1000, w: 200, h: 900, id: "fake cube lava", collide: false, alpha: 0 },
        { type: "lava", x: -100, y: -1500, w: 200, h: 900, id: "fake cube top lava", collide: false, alpha: 0 },
        { type: "cube", x: 0, y: -500, w: 200, h: 900, id: "blue cube", collide: false, alpha: 0 },
        { type: "clue", x: 0, y: -150, id: "cube clue", lava: true, alpha: 0, proximity: 1, radius: 0 },
        { type: "lava", x: -3550, y: -100, w: 3000, h: 200, id: "lava chase 2", collide: false, alpha: 1 },
        { type: "block", x: 3070, y: -850, w: 500, h: 100, redCube: true, alpha: 0 },
        { type: "lava", x: 100, y: -4000, w: 0, h: 4100, id: "lava chase 3", collide: false },
        { type: "text", content: "It wasn't as hard as you thought.", x: -1000, y: 0, font: "40px rubik", alpha: 0, id: "figured out text" },
        { type: "clue", x: 3300, y: -50, collide: false, proximity: 1, radius: 0, air: true, id: "red cube clue", down: true, angle: 180, color: { r: 255, g: 100, b: 100 } },
        { type: "block", x: 3770, y: -250, w: 90, h: 90, redCube: true, alpha: 0 },
        { type: "block", x: 3680, y: -350, w: 90, h: 100, redCube: true, alpha: 0 },
        { type: "block", x: 3590, y: -450, w: 90, h: 100, redCube: true, alpha: 0 },
        { type: "block", x: 3500, y: -550, w: 90, h: 100, redCube: true, alpha: 0 },
        { type: "block", x: 3410, y: -650, w: 90, h: 100, redCube: true, alpha: 0 },
        { type: "block", x: 3570, y: -950, w: 100, h: 100, redCube: true, alpha: 0 },
        { type: "block", x: 3670, y: -1050, w: 100, h: 100, redCube: true, alpha: 0 },
        { type: "block", x: 3770, y: -1150, w: 100, h: 100, redCube: true, alpha: 0 },
        { type: "block", x: 3870, y: -1250, w: 100, h: 100, redCube: true, alpha: 0 },
        { type: "block", x: 3970, y: -1350, w: 100, h: 100, redCube: true, alpha: 0 },
        { type: "block", x: 3840, y: -1470, w: 400, h: 10, redCube: true, alpha: 0 },
        { type: "block", x: 4150, y: -4000, w: 100, h: 4200, redCube: true, alpha: 0, slippery: true },
        { type: "cube", x: 4000, y: -1570, collide: false, collected: false, red: true, redCube: true, alpha: 0 },
    ],
    triggers: [
        {
            name: "button",
            check: function () {
                var o = game.objects.objects.find(e => e.id == "button");
                return o.pressed;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "left barrier");
                o.delete = true;
                var o = game.objects.objects.find(e => e.id == "right barrier");
                o.delete = true;
                var o = game.objects.objects.find(e => e.id == "run text");
                o.spawnAnimation = 50;
                o.alpha = 1;
                game.cam.viewportBoundary.w += 4700;
                game.cam.viewportBoundary.x -= 1000;
                var o = game.objects.objects.find(e => e.id == "shortcut clue 1");
                o.decay = -0.05;
            },
            passive: function () {
                if (game.level.triggers.tripped("third lava chase")) return;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                var o = game.objects.objects.find(e => e.id == "lava chase");
                o.w++;
                o.w = Math.max(o.w, player.x - o.x - 750);
                o.w = Math.min(o.w, 3650);
                var o = game.objects.objects.find(e => e.id == "lava chase 2");
                o.w++;
                o.w = Math.max(o.w, player.x - o.x - 750);
                o.w = Math.min(o.w, 3650);
            }
        },
        {
            name: "third lava chase",
            check: function () {
                var o = game.objects.objects.find(e => e.id == "lava chase");
                return o.w == 3650;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "shortcut clue 1");
                o.alpha = Math.min(o.alpha, 1);
                o.decay = 0.1;
                var o = game.objects.objects.find(e => e.id == "lava chase");
                o.w -= 200;
                var o = game.objects.objects.find(e => e.id == "fake cube lava");
                o.alpha = 1;
                var o = game.objects.objects.find(e => e.id == "fake cube top lava");
                o.alpha = 1;
                var o = game.objects.objects.find(e => e.id == "cube clue");
                o.alpha = 0;
                o.decay = -0.02;
            },
            passive: function () {
                if (game.level.triggers.tripped("red cube")) return;
                var o = game.objects.objects.find(e => e.id == "lava chase 3");
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                o.w += 1 + Math.sqrt(Math.max(player.x - 1100, 0)) / 9;
                o.w = Math.max(o.w, player.x - o.x - 750);
                o.collide = true;
            }
        },
        {
            name: "don't move",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "lava chase 2");
                if (!o) return;
                if (!blocksCollidingEdge(o, player)) return false;
                if (player.x > 100) return false;
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "lava chase 2");
                o.alpha = 1;
                o.maxAlpha = 0.2;
                o.decay = 0.05;
                var o = game.objects.objects.find(e => e.id == "dont press button text");
                o.alpha = 5;
                o.decay = 0.05;
                var o = game.objects.objects.find(e => e.id == "run text");
                o.alpha = 5;
                o.decay = 0.05;
            }
        },
        {
            name: "moved",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (!game.level.triggers.tripped("button")) return false;
                if (game.level.triggers.tripped("third lava chase")) return false;
                if (player.x > 50) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "lava chase 2");
                o.collide = true;
                o.decay = -0.05;
            }
        },
        {
            name: "figured out text",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x < -950) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "figured out text");
                o.decay = -0.1;
            }
        },
        {
            name: "player dead",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "run text");
                o.decay = 0.05;
                if (o.alpha === undefined) o.alpha = 1;
                var o = game.objects.objects.find(e => e.id == "lava chase");
                o.decay = 0.05;
                o.alpha = 1;
                var o = game.objects.objects.find(e => e.id == "lava chase 2");
                o.decay = 0.05;
                if (o.alpha === undefined) {
                    o.alpha = 1;
                } else {
                    o.alpha = Math.min(o.alpha, 1);
                }
                o.maxAlpha = 0;
                var o = game.objects.objects.find(e => e.id == "lava chase 3");
                o.decay = 0.05;
                o.alpha = 1;
                var o = game.objects.objects.find(e => e.id == "fake cube lava");
                o.alpha = Math.min(o.alpha, 1);
                o.decay = 0.05;
                o.maxAlpha = 0;
                var o = game.objects.objects.find(e => e.id == "fake cube top lava");
                o.alpha = Math.min(o.alpha, 1);
                o.decay = 0.05;
                o.maxAlpha = 0;
                var o = game.objects.objects.find(e => e.id == "cube clue");
                o.decay = 0.05;
                if (o.alpha === undefined) {
                    o.alpha = 1;
                } else {
                    o.alpha = Math.min(o.alpha, 1);
                }
                if (o.alpha === undefined) o.alpha = 1;
                var o = game.objects.objects.find(e => e.id == "button");
                o.pushBack = true;
                var o = game.objects.objects.find(e => e.id == "shortcut clue 1");
                o.alpha = Math.min(o.alpha, 1);
                o.decay = 0.1;
                var o = game.objects.objects.find(e => e.id == "shortcut clue 2");
                o.alpha = Math.min(o.alpha, 1);
                o.decay = 0.1;
            }
        },
        {
            name: "first shortcut clue",
            check: function () {
                if (!game.level.triggers.tripped("button")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "shortcut clue 1");
                var dist = distTo(player.x, player.y, o.x - 20, o.y - 20);
                if (dist < 100 && (game.input.downStart && game.input.downStart < 10)) return true;
                return false;
            },
            trip: function () {
                game.level.discoverShortcut();
                var o = game.objects.objects.find(e => e.id == "shortcut clue 1");
                o.decay = 0.05;
                o.alpha = 2;
                o.activated = true;
                var o = game.objects.objects.find(e => e.id == "shortcut clue 2");
                o.decay = -0.05;
                game.soundEffects.preShortcut();
            }
        },
        {
            name: "shortcut",
            check: function () {
                if (!game.level.triggers.tripped("first shortcut clue")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "shortcut clue 2");
                var dist = distTo(player.x, player.y, o.x - 20, o.y - 20);
                if (dist < 100 && (game.input.downStart && game.input.downStart < 10)) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return false;
            },
            trip: function () {
                game.background.effect.start("green");
                var o = game.objects.objects.find(e => e.id == "shortcut clue 2");
                o.activated = true;
                var o = game.objects.objects.find(e => e.id == "shortcut barrier");
                o.collide = false;
                o.alpha = 1;
                o.decay = 0.1;
            },
            untrip: function () {
                game.background.effect.end("green");
                var o = game.objects.objects.find(e => e.id == "shortcut clue 2");
                o.activated = false;
                var o = game.objects.objects.find(e => e.id == "shortcut barrier");
                o.alpha = 0;
                o.decay = -0.1;
            }
        },
        {
            name: "blue cube",
            check: function () {
                if (!game.level.triggers.tripped("third lava chase")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x > 1000) return false;
                if (player.y < -100) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.y > -100) return true;
                return false;
            },
            trip: function () {
                game.background.effect.start("blue");
                var o = game.objects.objects.find(e => e.id == "fake cube lava");
                o.alpha = 1;
                o.decay = 0.1;
                o.maxAlpha = 0.2;
                var o = game.objects.objects.find(e => e.id == "cube clue");
                o.activated = true;
                var o = game.objects.objects.find(e => e.id == "blue cube");
                o.alpha = 1;
                var player = game.objects.objects.find(e => e.type == "player");
                player.ymove = -19.6;
            },
            untrip: function () {
                game.background.effect.end("blue");
                var o = game.objects.objects.find(e => e.id == "fake cube lava");
                if (!game.level.triggers.tripped("player dead")) {
                    o.alpha = 0.2;
                    o.decay = -0.1;
                }
                var o = game.objects.objects.find(e => e.id == "cube clue");
                o.activated = false;
                var o = game.objects.objects.find(e => e.id == "blue cube");
                o.alpha = 0;
            }
        },
        {
            name: "red cube",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                var dist = distTo(player.x, player.y, o.x - 20, o.y - 20);
                if (dist < 60 && (game.input.upStart && game.input.upStart < 10)) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return false;
            },
            trip: function () {
                game.level.discoverRedCube();
                game.background.effect.start("red");
                game.cam.offset.y -= 200;
                var player = game.objects.objects.find(e => e.type == "player");
                if (player) player.ymove = -10;
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.activated = true;
                for (var o of game.objects.objects.filter(e => e.redCube)) {
                    o.decay = -0.1;
                    o.collide = true;
                }
            },
            untrip: function () {
                game.background.effect.end("red");
                game.cam.offset.y += 200;
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.activated = false;
                for (var o of game.objects.objects.filter(e => e.redCube)) {
                    if (o.alpha <= 0 || o.alpha > 1 || o.alpha === undefined) o.alpha = 1;
                    o.decay = 0.1;
                    o.collide = false;
                }
            }
        },
    ],
    viewportBoundary: { x: 0, y: -10000, w: 0, h: 10000 },
    camFunction: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return;
    },
    levelComplete: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return false;
        return player.x < -1550 || player.y > 500;
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
        x: -270,// + 3800 + 270,
        y: 0//-1350
    }
}

levels[5] = {
    objects: [
        { type: "text", content: "0", x: -1850, y: -400, font: "150px rubikbold", id: "digit 1" },
        { type: "text", content: "0", x: -2000, y: -400, font: "150px rubikbold", id: "digit 2" },
        { type: "text", content: "0", x: -2150, y: -400, font: "150px rubikbold", id: "digit 3" },
        { type: "image", image: "circuitBlack", x: -3070, y: -923, w: 1430, h: 1430, collide: false, alpha: 0.2 },
        { type: "image", image: "circuitRed", x: -3070, y: -923, w: 1430, h: 1430, collide: false, alpha: 0, id: "red circuit" },
        { type: "image", image: "circuitPurple", x: -3070, y: -923, w: 1430, h: 1430, collide: false, alpha: 0, id: "purple circuit" },
        { type: "text", content: "a\u00B2 + b\u00B2 = c\u00B2", x: -1250, y: -800, font: "40px rubik" },
        { type: "text", content: "e^i\u03C0 = -1", x: -900, y: -750, font: "40px rubik" },
        { type: "text", content: "\u03C0 = 3.14159265859", x: -700, y: -650, font: "40px rubik" },
        { type: "text", content: "x = 4i + y", x: -1000, y: -430, font: "40px rubik" },
        { type: "text", content: "2i + 2y - x = x", x: -700, y: -480, font: "40px rubik" },
        { type: "text", content: "i = \u221A-1", x: -1300, y: -400, font: "40px rubik" },
        { type: "text", content: "y = 3z + 2z + 4ix", x: -800, y: -250, font: "40px rubik" },
        { type: "text", content: "2 + 3 = 4", x: -1150, y: -600, font: "40px rubik" },
        { type: "text", content: "Solve for z.", x: -1200, y: -200, font: "40px rubik" },
        { type: "block", x: -3018, y: -550, w: 96, h: 0, collide: false, id: "gate" },
        { type: "block", x: 500, y: -1000, w: 500, h: 2000, slippery: true },
        { type: "block", x: -7000, y: 100, w: 8000, h: 2000 },
        { type: "button", x: -1900, y: 70, w: 100, h: 30, originalHeight: 30, id: "button", id: "button 1" },
        { type: "button", x: -2050, y: 70, w: 100, h: 30, originalHeight: 30, id: "button", id: "button 2" },
        { type: "button", x: -2200, y: 70, w: 100, h: 30, originalHeight: 30, id: "button", id: "button 3" },
        { type: "button", x: -2400, y: 70, w: 100, h: 30, originalHeight: 30, id: "button", color: "rgb(70,180,70)", id: "check button" },
        { type: "text", content: "I hope your math skills are good.", x: -2000, y: -200, font: "40px rubik", id: "math text 1", alpha: 0 },
        { type: "text", content: "You'll need them.", x: -2000, y: -150, font: "40px rubik", id: "math text 2", alpha: 0 },
        { type: "block", x: -3030, y: -2500, w: 20, h: 2000 },
        { type: "block", x: -4000, y: -2500, w: 1000, h: 1350 },
        { type: "text", content: "Nice.", x: -3270, y: -1060, font: "40px rubik" },
        { type: "cube", x: -3125, y: -1060, collide: false, collected: false },
        { type: "block", x: -3020, y: -2500, w: 110, h: 2000, slippery: true },
        { type: "block", x: -4890, y: -350, w: 2000, h: 1000, slippery: true },
        { type: "block", x: -2950, y: -300, w: 110, h: 1000, slippery: true },
        { type: "block", x: -2900, y: -250, w: 110, h: 1000, slippery: true },
        { type: "block", x: -2850, y: -200, w: 110, h: 1000, slippery: true },
        { type: "block", x: -2800, y: -150, w: 110, h: 1000, slippery: true },
        { type: "block", x: -2750, y: -100, w: 110, h: 1000, slippery: true },
        { type: "block", x: -2700, y: -50, w: 110, h: 1000, slippery: true },
        { type: "block", x: -2650, y: 0, w: 110, h: 1000, slippery: true },
        { type: "block", x: -2600, y: 50, w: 110, h: 1000, slippery: true },
        { type: "text", content: "Yeah, you could've gone through", x: -3450, y: -550, font: "40px rubik", id: "figured out text", alpha: 0 },
        { type: "text", content: "there the entire time...", x: -3450, y: -500, font: "40px rubik", id: "figured out text", alpha: 0 },
        { type: "clue", x: -3000, y: -530, collide: false, proximity: 1, radius: 0, id: "cube clue" },
        { type: "block", invisibleUntilTouched: true, lastTouchedTime: 1000, x: 0, y: -190, w: 100, h: 100, id: "red cube starting block" },
        { type: "clue", x: 50, y: -140, id: "red cube clue", activated: true, proximity: 1, radius: 0, color: { r: 255, g: 100, b: 100 }, alpha: 0 },
        { type: "text", content: "Why would I make an", x: 50, y: -50, font: "30px rubik", id: "red cube text", alpha: 0 },
        { type: "text", content: "invisible red cube level?", x: 50, y: -10, font: "30px rubik", id: "red cube text", alpha: 0 },
        { type: "block", x: -400, y: -300, w: 150, h: 50, alpha: 0 },
        { type: "lava", x: -400, y: -500, w: 50, h: 200, alpha: 0 },
        { type: "block", x: 0, y: -530, w: 200, h: 50, alpha: 0 },
        { type: "lava", x: -400, y: -900, w: 50, h: 200, alpha: 0 },
        { type: "lava", x: 0, y: -580, w: 50, h: 50, alpha: 0 },
        { type: "block", x: -400, y: -700, w: 50, h: 200, alpha: 0 },
        { type: "lava", x: 200, y: -660, w: 100, h: 50, alpha: 0 },
        { type: "block", x: 300, y: -660, w: 200, h: 50, alpha: 0 },
        { type: "cube", red: true, x: 400, y: -800, alpha: 0, id: "red cube" },
    ],
    triggers: [
        {
            name: "button 1",
            check: function () {
                var o = game.objects.objects.find(e => e.id == "button 1");
                return o.firstPress;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "digit 1");
                var number = Number(o.content);
                number++;
                number %= 10;
                o.content = String(number);
            },
            stop: function () {
                return true;
            }
        },
        {
            name: "button 2",
            check: function () {
                var o = game.objects.objects.find(e => e.id == "button 2");
                return o.firstPress;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "digit 2");
                var number = Number(o.content);
                number++;
                number %= 10;
                o.content = String(number);
            },
            stop: function () {
                return true;
            }
        },
        {
            name: "button 3",
            check: function () {
                var o = game.objects.objects.find(e => e.id == "button 3");
                return o.firstPress;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "digit 3");
                var number = Number(o.content);
                number++;
                number %= 10;
                o.content = String(number);
            },
            stop: function () {
                return true;
            }
        },
        {
            name: "check code",
            check: function () {
                var o = game.objects.objects.find(e => e.id == "check button");
                return o.firstPress;
            },
            trip: function () {
                var code = game.objects.objects.find(e => e.id == "digit 3").content;
                code += game.objects.objects.find(e => e.id == "digit 2").content;
                code += game.objects.objects.find(e => e.id == "digit 1").content;
                if (code == "666") {
                    var o = game.objects.objects.find(e => e.id == "purple circuit");
                    o.purpleTime = 200;
                    var o = game.objects.objects.find(e => e.id == "red circuit");
                    o.redTime = 0;
                    var demon = {
                        type: "image",
                        image: "demon",
                        id: "demon",
                        x: -2000 - 649 / 14,
                        y: 100,
                        ymove: -5,
                        w: 649 / 7,
                        h: 610 / 7,
                        collide: false,
                        alpha: 1.2,
                        update: function () {
                            this.y += this.ymove;
                            this.ymove--;
                            this.ymove *= 0.8;
                            this.alpha -= 0.007;
                            this.x += Math.sin(t / 20);
                            this.angle = Math.sin(t / 20) * 20;
                            if (this.alpha <= 0) this.delete = true;
                        }
                    }
                    game.objects.objects.unshift(demon);
                    var o = game.objects.objects.find(e => e.id == "digit 3");
                    o.purpleTime = 200;
                    var o = game.objects.objects.find(e => e.id == "digit 2");
                    o.purpleTime = 200;
                    var o = game.objects.objects.find(e => e.id == "digit 1");
                    o.purpleTime = 200;
                } else {
                    game.soundEffects.buzzer();
                    var o = game.objects.objects.find(e => e.id == "purple circuit");
                    o.purpleTime = 0;
                    var o = game.objects.objects.find(e => e.id == "red circuit");
                    o.redTime = 100;
                    game.cam.screenshake = 20;
                    var o = game.objects.objects.find(e => e.id == "digit 3");
                    o.redTime = 100;
                    var o = game.objects.objects.find(e => e.id == "digit 2");
                    o.redTime = 100;
                    var o = game.objects.objects.find(e => e.id == "digit 1");
                    o.redTime = 100;
                }
            },
            stop: function () {
                return true;
            }
        },
        {
            name: "incorrect code",
            check: function () {
                return game.level.triggers.tripped("check code");
            },
            stop: function () {
                var o = game.objects.objects.find(e => e.id == "digit 1");
                return !o.redTime && !o.purpleTime;
            },
            passive: function () {
                var o = game.objects.objects.find(e => e.id == "digit 1");
                if (o.redTime) {
                    o.redTime--;
                    o.redTime = Math.max(o.redTime, 0);
                    o.color = `rgb(${o.redTime / 50 * 255},0,0)`;
                } else {
                    o.purpleTime--;
                    o.purpleTime = Math.max(o.purpleTime, 0);
                    o.color = `rgb(${o.purpleTime / 100 * 150},0,${o.purpleTime / 100 * 255})`;
                }
                if (isNaN(o.redTime)) o.redTime = 0;
                if (isNaN(o.purpleTime)) o.purpleTime = 0;
                var o = game.objects.objects.find(e => e.id == "digit 2");
                if (o.redTime) {
                    o.redTime--;
                    o.redTime = Math.max(o.redTime, 0);
                    o.color = `rgb(${o.redTime / 50 * 255},0,0)`;
                } else {
                    o.purpleTime--;
                    o.purpleTime = Math.max(o.purpleTime, 0);
                    o.color = `rgb(${o.purpleTime / 100 * 150},0,${o.purpleTime / 100 * 255})`;
                }
                if (isNaN(o.redTime)) o.redTime = 0;
                if (isNaN(o.purpleTime)) o.purpleTime = 0;
                var o = game.objects.objects.find(e => e.id == "digit 3");
                if (o.redTime) {
                    o.redTime--;
                    o.redTime = Math.max(o.redTime, 0);
                    o.color = `rgb(${o.redTime / 50 * 255},0,0)`;
                } else {
                    o.purpleTime--;
                    o.purpleTime = Math.max(o.purpleTime, 0);
                    o.color = `rgb(${o.purpleTime / 100 * 150},0,${o.purpleTime / 100 * 255})`;
                }
                if (isNaN(o.redTime)) o.redTime = 0;
                if (isNaN(o.purpleTime)) o.purpleTime = 0;
                var o = game.objects.objects.find(e => e.id == "red circuit");
                o.redTime--;
                o.redTime = Math.max(o.redTime, 0);
                o.alpha = o.redTime / 50 * 0.2;
                var o = game.objects.objects.find(e => e.id == "purple circuit");
                o.purpleTime--;
                o.purpleTime = Math.max(o.purpleTime, 0);
                o.alpha = o.purpleTime / 100 * 0.2;
            }
        },
        {
            name: "animation",
            check: function () {
                if (game.level.triggers.tripped("animation completed")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x < -1600) return true;
                return false;
            },
            stop: function () {
                return game.level.levelAnimationTime > 300;
            },
            trip: function () {
                game.level.playerControlDelay = 300;
                game.level.levelAnimationTime = 0;
            },
            passive: function () {
                var a = game.level.levelAnimationTime;
                game.cam.followX = 0.01 + 0.09 * Math.min(a / 20, 1);
                if (a > 20 && a < 100) {
                    game.cam.offset.x = -easeInOut((a - 20) / 80) * 700;
                    game.cam.zoom = 1 - easeInOut((a - 20) / 80) * 0.35;
                }
                if (a > 145 && a < 165) {
                    var o = game.objects.objects.find(e => e.id == "gate");
                    o.h = Math.min(Math.max(a - 145, 0) / 20, 1) * 250;
                    if (o.h >= 130 && !o.slammed) {
                        o.slammed = true;
                        game.soundEffects.doorSlam();
                    }
                }
                if (a == 160) {
                    game.cam.screenshake = 50;
                }
                if (a > 200) {
                    game.cam.offset.x = -440 - easeInOut(1 - (a - 200) / 100) * 220;
                    game.cam.zoom = 0.7 - easeInOut(1 - (a - 200) / 100) * 0.05;
                }
            }
        },
        {
            name: "animation completed",
            check: function () {
                return game.level.triggers.tripped("animation") && game.level.levelAnimationTime > 300;
            },
            trip: function () {
                game.cam.followX = 0.01;
                game.cam.offset.x = 0;
            }
        },
        {
            name: "math 1",
            check: function () {
                if (!game.level.triggers.tripped("animation completed")) return false;
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "math text 1");
                o.alpha = -2;
                o.decay = -0.05;
            }
        },
        {
            name: "math 2",
            check: function () {
                var o = game.objects.objects.find(e => e.id == "math text 1");
                return o.alpha > 6;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "math text 2");
                o.alpha = 0;
                o.decay = -0.05;
            }
        },
        {
            name: "figured out",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x < -3150) return true;
                return false;
            },
            trip: function () {
                for (var o of game.objects.objects.filter(e => e.id == "figured out text")) {
                    o.alpha = 0;
                    o.decay = -0.1;
                }
            }
        },
        {
            name: "blue cube",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x > -2000) return false;
                if (player.y < -550) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.y > -550) return true;
                return false;
            },
            trip: function () {
                game.background.effect.start("blue");
                var o = game.objects.objects.find(e => e.id == "cube clue");
                o.activated = true;
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
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.y == -230) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.y > -210) return true;
                return false;
            },
            trip: function () {
                game.level.discoverRedCube();
                game.background.effect.start("red");
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.alpha = 0;
                o.decay = -0.1;
                var o = game.objects.objects.find(e => e.id == "red cube");
                o.alpha = 0;
                o.decay = -0.1;
                for (var o of game.objects.objects.filter(e => e.id == "red cube text")) {
                    o.alpha = 0;
                    o.decay = -0.1;
                }
            },
            untrip: function () {
                game.background.effect.end("red");
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.alpha = 1;
                o.decay = 0.1;
                var o = game.objects.objects.find(e => e.id == "red cube");
                o.alpha = 1;
                o.decay = 0.1;
                for (var o of game.objects.objects.filter(e => e.id == "red cube text")) {
                    o.alpha = 1;
                    o.decay = 0.1;
                }
            },
            passive: function () {
                var o = game.objects.objects.find(e => e.id == "red cube starting block");
                o.lastTouchedTime = 0;
            }
        }
    ],
    viewportBoundary: { x: -3400, y: -200, w: 3400, h: 0 },
    camFunction: function () {
        var player = game.objects.objects.find(e => e.type == "player")
        if (!player) return;
        if (game.level.triggers.tripped("red cube")) {
            game.cam.viewportBoundary.h = 1000;
            game.cam.viewportBoundary.y = -1000;
            game.cam.offset.y = 0;
            var dist = -player.y - 210;
            var p = Math.min(Math.max(dist / 100, 0), 1);
            game.cam.y = game.cam.y * p + -200 * (1 - p);
            return;
        } else {
            game.cam.viewportBoundary.y = -200;
            game.cam.viewportBoundary.h = 0;
            game.cam.offset.y = -200;
        }
        if (!game.level.triggers.tripped("animation completed")) return false;
        game.cam.zoom = 1 - easeInOut((-player.x) / 500) * 0.3;
        if (player.x < -3000) {
            game.cam.zoom = 0.7 + easeInOut(1 - (player.x + 3500) / 400) * 0.3;
        }
        var percent = 1 - Math.min(Math.abs(player.x + 1800) / 1000, 1);
        percent = percent * 0.1;
        game.cam.x = game.cam.x * (1 - percent) - 2430 * percent;
        if (player.y < -550) {
            var a = Math.min(-(player.y + 550) / 200, 1);
            game.cam.viewportBoundary.y = -200 - 300 * a;
            game.cam.viewportBoundary.h = a * 300;
            game.cam.x = game.cam.x * (1 - a) - 3050 * a;
        } else {
            game.cam.offset.y = -200;
            game.cam.viewportBoundary.y = -200;
            game.cam.viewportBoundary.h = 0;
        }
    },
    levelComplete: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return false;
        return player.x < -3940;
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
        x: 270,
        y: 0
    }
}

levels[6] = {
    objects: [
        { type: "block", x: -7500, y: 100, w: 8500, h: 2000 },
        { type: "block", x: -1500, y: -1000, w: 300, h: 2000, slippery: true },
        { type: "block", x: 500, y: -2500, w: 200, h: 3000, slippery: true, id: "right boundary" },
        { type: "block", x: 500, y: 50, w: 50, h: 100, slippery: true },
        { type: "block", x: -5000, y: -2500, w: 6000, h: 1000, slippery: true },
        { type: "block", x: -3500, y: -1500, w: 1200, h: 1200, slippery: true },
        { type: "text", content: "You can't get", x: -1000, y: -200, font: "40px rubik", id: "impassible text", alpha: 0 },
        { type: "text", content: "over this wall.", x: -1000, y: -150, font: "40px rubik", id: "impassible text", alpha: 0 },
        { type: "text", content: "Sometimes ", x: -1950 - 365 / 2, y: -450, font: "40px rubik", textAlign: "left", id: "figured out text", alpha: 0 },
        { type: "text", content: "the box", x: -1950 - 365 / 2 + 219, y: -450, font: "40px rubikbolditalic", textAlign: "left", id: "figured out text", alpha: 0 },
        { type: "text", content: "thinks outside of ", x: -1950 - 404 / 2, y: -400, font: "40px rubik", textAlign: "left", id: "figured out text", alpha: 0 },
        { type: "text", content: "you.", x: -1950 - 404 / 2 + 321, y: -400, font: "40px rubikbolditalic", textAlign: "left", id: "figured out text", alpha: 0 },
        { type: "clue", x: -2250, y: 150, proximity: 1, radius: 0, id: "blue cube clue" },
        { type: "cube", x: -1700, y: -880, id: "blue cube", alpha: 0 },
        { type: "text", content: "You weren't the only", x: -1780, y: -700, font: "40px rubik", id: "blue cube text", alpha: 0 },
        { type: "text", content: "thing in the box.", x: -1780, y: -650, font: "40px rubik", id: "blue cube text", alpha: 0 },

    ],
    triggers: [
        {
            name: "impassible",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x < -950) return true;
                return false;
            },
            trip: function () {
                for (var o of game.objects.objects.filter(e => e.id == "impassible text")) {
                    o.alpha = 0;
                    o.decay = -0.1;
                }
                game.cam.viewportBoundary.w += 50;
                var o = game.objects.objects.find(e => e.id == "right boundary");
                o.x += 50;
            }
        },
        {
            name: "fall down",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.y >= 60 && player.x != -1540) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x >= 510) return true;
                if (player.x == -1540) return true;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (player) {
                    if (player.x > 300 || player.x < -300) {
                        game.objects.switchGravity(0);
                    }
                }
            }
        },
        {
            name: "fall right",
            check: function () {
                if (!game.level.triggers.tripped("impassible")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x == -1540) return true;
                if (player.y <= -1500) return false;
                if (player.y >= 60) return false;
                if (player.x >= 510) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.y <= -1500) return true;
                if (player.y >= 60 && player.x != -1540) return true;
            },
            trip: function () {
                game.objects.switchGravity(270);
            }
        },
        {
            name: "fall up",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.y <= -1500 && player.x > -2300) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x >= 510 && player.y > -1500) return true;
                if (player.x <= -2300) return true;
            },
            trip: function () {
                game.objects.switchGravity(180);
            }
        },
        {
            name: "fall left",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x > -2300) return false;
                if (player.y > -200) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.y <= -1500 && player.x > -2300) return true;
                if (player.y >= 60) return true;
            },
            trip: function () {
                game.objects.switchGravity(90);
            }
        },
        {
            name: "figured out",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x > -2000) return false;
                if (player.y < -650) return false;
                return true;
            },
            trip: function () {
                for (var o of game.objects.objects.filter(e => e.id == "figured out text")) {
                    o.alpha = 0;
                    o.decay = -0.1;
                }
            }
        },
        {
            name: "blue cube",
            check: function () {
                if (game.level.triggers.tripped("stop blue cube")) return false;
                if (game.level.levelComplete) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x > -1500) return false;
                if (player.y < 60) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                var o = game.objects.objects.find(e => e.id == "blue cube");
                if (distTo(player.x + player.w / 2, player.y + player.h / 2, o.x, o.y) < 70) return true;
                return false;
            },
            trip: function () {
                game.background.effect.start("blue");
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                o.activated = true;
                var o = game.objects.objects.find(e => e.id == "blue cube");
                o.alpha = 0;
                o.decay = -0.1;
                for (var o of game.objects.objects.filter(e => e.id == "blue cube text")) {
                    o.alpha = 0;
                    o.decay = -0.1;
                }
            },
            untrip: function () {
                game.background.effect.end("blue");
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                o.activated = false;
            }
        },
        {
            name: "stop blue cube",
            check: function () {
                return game.level.triggers.tripped("blue cube");
            }
        }
    ],
    viewportBoundary: { x: -2050, y: -1000, w: 2050, h: 1000 },
    camFunction: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return;
    },
    levelComplete: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return false;
        return player.x < -2650;
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
        x: 300,
        y: 0
    }
}

levels[7] = {
    objects: [
        { type: "text", content: "This level is", x: 2000, y: -230, font: "50px rubik", spawnAnimation: 90, spawnAnimationDuration: 50, room0: true },
        { type: "text", content: "short and simple.", x: 2000, y: -160, font: "50px rubik", spawnAnimation: 90, spawnAnimationDuration: 50, room0: true },
        { type: "block", x: 1500, y: 200, w: 1000, h: 1000, room0: true },
        { type: "block", x: 2500, y: -1000, w: 500, h: 2000, slippery: true, room0: true },
        { type: "image", image: "coinDashBackground", x: 500, y: -500, w: 1000, h: 1000, room1: true, noCollide: true, alpha: 0 },
        { type: "block", drawType: "coin dash block", x: 500, y: 200, w: 1000, h: 1000, room1: true, alpha: 0 },
        { type: "block", drawType: "coin dash block", x: 800, y: -1500, w: 1000, h: 1050, room1: true, alpha: 0 },
        { type: "block", drawType: "coin dash block", x: 750, y: -50, w: 750, h: 50, room1: true, alpha: 0 },
        { type: "block", drawType: "coin dash block", x: 500, y: -270, w: 750, h: 50, room1: true, alpha: 0 },
        { type: "block", drawType: "coin dash block", x: 1450, y: -600, w: 50, h: 600, room1: true, alpha: 0 },
        { type: "block", drawType: "coin dash block", x: 450, y: -600, w: 100, h: 1100, room1: true, alpha: 0 },
        { type: "coin dash coin", x: 650, y: 100, room1: true },
        { type: "coin dash coin", x: 750, y: 100, room1: true },
        { type: "coin dash coin", x: 850, y: 100, room1: true },
        { type: "coin dash coin", x: 950, y: 100, room1: true },
        { type: "coin dash coin", x: 1050, y: 100, room1: true },
        { type: "coin dash coin", x: 1150, y: 100, room1: true },
        { type: "coin dash coin", x: 1250, y: 100, room1: true },
        { type: "coin dash coin", x: 1350, y: 100, room1: true },
        { type: "coin dash coin", x: 650, y: -15, room1: true },
        { type: "coin dash coin", x: 650, y: -130, room1: true },
        { type: "coin dash coin", x: 750, y: -130, room1: true },
        { type: "coin dash coin", x: 850, y: -130, room1: true },
        { type: "coin dash coin", x: 950, y: -130, room1: true },
        { type: "coin dash coin", x: 1050, y: -130, room1: true },
        { type: "coin dash coin", x: 1150, y: -130, room1: true },
        { type: "coin dash coin", x: 1250, y: -130, room1: true },
        { type: "coin dash coin", x: 1350, y: -130, room1: true },
        { type: "coin dash coin", x: 1350, y: -245, room1: true },
        { type: "coin dash coin", x: 750, y: -360, room1: true },
        { type: "coin dash coin", x: 850, y: -360, room1: true },
        { type: "coin dash coin", x: 950, y: -360, room1: true },
        { type: "coin dash coin", x: 1050, y: -360, room1: true },
        { type: "coin dash coin", x: 1150, y: -360, room1: true },
        { type: "coin dash coin", x: 1250, y: -360, room1: true },
        { type: "coin dash coin", x: 1350, y: -360, room1: true },
        { type: "block", x: 500, y: -1500, w: 1000, h: 1000, room2: true, color: "rgb(200,255,255)", noCollide: true },
        { type: "block", x: 500, y: -525, w: 50, h: 25, room2: true },
        { type: "platform", x: 550, y: -525, w: 250, h: 10, room2: true },
        { type: "block", x: 800, y: -525, w: 700, h: 25, room2: true },
        { type: "platform", x: 500, y: -650, w: 200, h: 10, room2: true },
        { type: "platform", x: 700, y: -800, w: 150, h: 10, room2: true },
        { type: "platform", x: 1310, y: -800, w: 190, h: 10, room2: true },
        { type: "jump enemy", x: 1310, y: -840, w: 40, h: 40, room2: true, noCollide: true, xmove: 1 },
        { type: "platform", x: 900, y: -950, w: 200, h: 10, room2: true },
        { type: "platform", x: 750, y: -1100, w: 150, h: 10, room2: true },
        { type: "platform", x: 1200, y: -1100, w: 250, h: 10, room2: true },
        { type: "platform", x: 920, y: -1250, w: 220, h: 10, room2: true },
        { type: "platform", x: 600, y: -1400, w: 250, h: 10, room2: true },
        { type: "image", image: "sokobanBackground", x: 500, y: -2500, w: 1000, h: 1000, room3: true, noCollide: true, collide: false },
        { type: "block", x: 500, y: -2540, w: 1000, h: 40, room3: true, sokobanBoxCollide: true, collide: false },
        { type: "block", x: 500, y: -1500, w: 1000, h: 40, room3: true, sokobanBoxCollide: true, collide: false },
        { type: "block", x: 500, y: -2500, w: 40, h: 1000, room3: true, sokobanCollide: true },
        { type: "block", x: 1460, y: -2500, w: 40, h: 280, room3: true, sokobanCollide: true },
        { type: "block", x: 1460, y: -2220, w: 40, h: 40, room3: true, sokobanBoxCollide: true },
        { type: "clue", x: 1475, y: -2200, down: true, angle: 270, room3: true },
        { type: "block", x: 1460, y: -2180, w: 40, h: 680, room3: true, sokobanCollide: true },
        { type: "block", x: 1060, y: -1900, w: 200, h: 200, room3: true, sokobanCollide: true },
        { type: "block", x: 660, y: -1980, w: 200, h: 200, room3: true, sokobanCollide: true },
        { type: "block", x: 820, y: -2380, w: 280, h: 280, room3: true, sokobanCollide: true },
        { type: "block", x: 1220, y: -2260, w: 120, h: 120, room3: true, sokobanCollide: true },
        { type: "sokoban box", x: 1020, y: -1820, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 1020, y: -1860, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 940, y: -1860, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 980, y: -1900, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 860, y: -1860, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 900, y: -1860, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 580, y: -1900, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 540, y: -1900, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 540, y: -1940, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 620, y: -1940, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 1260, y: -1820, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 1300, y: -1820, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 1340, y: -1820, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 1380, y: -1860, w: 40, h: 40, room3: true },
        { type: "sokoban box", x: 1420, y: -1860, w: 40, h: 40, room3: true },
        { type: "image", image: "sokobanCubeBackground", x: 1500, y: -2500, w: 1000, h: 1000, cubeRoom: true, noCollide: true, collide: false },
        { type: "block", x: 1500, y: -2500, w: 40, h: 280, cubeRoom: true, sokobanCollide: true },
        { type: "block", x: 1500, y: -2180, w: 40, h: 680, cubeRoom: true, sokobanCollide: true },
        { type: "block", x: 2460, y: -2500, w: 40, h: 1000, cubeRoom: true, sokobanCollide: true },
        { type: "block", x: 1500, y: -2500, w: 1000, h: 40, cubeRoom: true, sokobanCollide: true },
        { type: "block", x: 1500, y: -1540, w: 1000, h: 40, cubeRoom: true, sokobanCollide: true },
        { type: "block", x: 1500, y: -2500, w: 120, h: 120, cubeRoom: true, sokobanCollide: true },
        { type: "block", x: 1500, y: -2340, w: 80, h: 40, cubeRoom: true, sokobanCollide: true },
        { type: "block", x: 1700, y: -2340, w: 80, h: 40, cubeRoom: true, sokobanCollide: true },
        { type: "block", x: 1660, y: -2420, w: 120, h: 40, cubeRoom: true, sokobanCollide: true },
        { type: "block", x: 1740, y: -2420, w: 40, h: 280, cubeRoom: true, sokobanCollide: true },
        { type: "block", x: 1500, y: -2140, w: 280, h: 40, cubeRoom: true, sokobanCollide: true },
        { type: "clue", x: 2200, y: -2040, air: true, cubeRoom: true, white: true },
        { type: "clue", x: 2040, y: -2040, air: true, cubeRoom: true, white: true },
        { type: "clue", x: 1960, y: -1960, air: true, cubeRoom: true, white: true },
        { type: "clue", x: 1960, y: -1800, air: true, cubeRoom: true, white: true },
        { type: "clue", x: 2200, y: -1720, air: true, cubeRoom: true, white: true },
        { type: "clue", x: 2040, y: -1720, air: true, cubeRoom: true, white: true },
        { type: "clue", x: 2280, y: -1960, air: true, cubeRoom: true, white: true },
        { type: "clue", x: 2280, y: -1800, air: true, cubeRoom: true, white: true },
        { type: "sokoban box", x: 1580, y: -2340, w: 40, h: 40, cubeRoom: true, sokobanCollide: true },
        { type: "sokoban box", x: 1620, y: -2340, w: 40, h: 40, cubeRoom: true, sokobanCollide: true },
        { type: "sokoban box", x: 1660, y: -2340, w: 40, h: 40, cubeRoom: true, sokobanCollide: true },
        { type: "sokoban box", x: 2060, y: -2340, w: 40, h: 40, blue: true, cubeRoom: true, sokobanCollide: true },
        { type: "sokoban box", x: 2380, y: -2420, w: 40, h: 40, blue: true, cubeRoom: true, sokobanCollide: true },
        { type: "sokoban box", x: 2100, y: -1900, w: 40, h: 40, blue: true, cubeRoom: true, sokobanCollide: true },
        { type: "sokoban box", x: 1580, y: -1620, w: 40, h: 40, blue: true, cubeRoom: true, sokobanCollide: true },
        { type: "sokoban box", x: 1620, y: -1620, w: 40, h: 40, blue: true, cubeRoom: true, sokobanCollide: true },
        { type: "sokoban box", x: 1580, y: -1660, w: 40, h: 40, blue: true, cubeRoom: true, sokobanCollide: true },
        { type: "sokoban box", x: 1860, y: -2220, w: 40, h: 40, blue: true, cubeRoom: true, sokobanCollide: true },
        { type: "sokoban box", x: 2300, y: -2140, w: 40, h: 40, blue: true, cubeRoom: true, sokobanCollide: true },
        { type: "cube", x: 2120, y: -1880, collected: false, cubeRoom: true },
        { type: "image", image: "snakeBackground", x: 500, y: -3500, w: 1000, h: 1000, room4: true, noCollide: true, collide: false },
        { type: "block", x: 500, y: -2900, w: 800, h: 120, room4: true, snakeCollide: true },
        { type: "block", x: 700, y: -3300, w: 800, h: 120, room4: true, snakeCollide: true },
        { type: "block", x: 460, y: -3540, w: 80, h: 1080, room4: true, snakeCollide: true },
        { type: "block", x: 1460, y: -3540, w: 80, h: 1080, room4: true, snakeCollide: true },
        { type: "apple", x: 660, y: -2700, w: 40, h: 40, room4: true },
        { type: "image", image: "pacmanBackground", x: 498, y: -4502, w: 1004, h: 1004, room5: true, noCollide: true, collide: false, id: "pacman background" },
        { type: "block", hidden: true, x: 500, y: -4500, w: 40, h: 440, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 500, y: -3940, w: 40, h: 440, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 500, y: -4500, w: 1000, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1460, y: -4500, w: 40, h: 1000, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 500, y: -3540, w: 440, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1060, y: -3540, w: 440, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 580, y: -4420, w: 40, h: 200, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 580, y: -4180, w: 40, h: 360, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 580, y: -3780, w: 40, h: 200, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 580, y: -4420, w: 200, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 820, y: -4420, w: 360, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1220, y: -4420, w: 200, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1380, y: -4420, w: 40, h: 200, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1380, y: -4180, w: 40, h: 360, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1380, y: -3780, w: 40, h: 200, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 580, y: -3620, w: 200, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 820, y: -3620, w: 360, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1220, y: -3620, w: 200, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 660, y: -4340, w: 40, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 660, y: -4260, w: 40, h: 240, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 660, y: -3980, w: 40, h: 240, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 660, y: -3700, w: 40, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1300, y: -4340, w: 40, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1300, y: -4260, w: 40, h: 240, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1300, y: -3980, w: 40, h: 240, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1300, y: -3700, w: 40, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 740, y: -4340, w: 240, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1020, y: -4340, w: 240, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 740, y: -3700, w: 240, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1020, y: -3700, w: 240, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 740, y: -4340, w: 40, h: 120, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1220, y: -4340, w: 40, h: 120, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 740, y: -3780, w: 40, h: 120, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1220, y: -3780, w: 40, h: 120, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 660, y: -4260, w: 120, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1220, y: -4260, w: 120, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 660, y: -3780, w: 120, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1220, y: -3780, w: 120, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 820, y: -4260, w: 40, h: 120, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1140, y: -4260, w: 40, h: 120, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 820, y: -3860, w: 40, h: 120, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1140, y: -3860, w: 40, h: 120, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 740, y: -4180, w: 120, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1140, y: -4180, w: 120, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 740, y: -3860, w: 120, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1140, y: -3860, w: 120, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 740, y: -4100, w: 40, h: 200, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 820, y: -4100, w: 40, h: 200, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1140, y: -4100, w: 40, h: 200, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1220, y: -4100, w: 40, h: 200, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 900, y: -4260, w: 200, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 900, y: -4180, w: 200, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 900, y: -3860, w: 200, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 900, y: -3780, w: 200, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 900, y: -4100, w: 200, h: 200, room5: true, collide: false, pacmanCollide: true, id: "ghost den" },
        { type: "block", hidden: true, x: 900, y: -3500, w: 40, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1060, y: -3500, w: 40, h: 40, room5: true, collide: false, pacmanCollide: true },
        //{ type: "block", hidden: true, x: 460, y: -4180, w: 40, h: 40, room5: true, collide: false, pacmanCollide: true },
        //{ type: "block", hidden: true, x: 460, y: -3960, w: 40, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 500, y: -4060, w: 40, h: 120, room5: true, collide: false, id: "pacman red cube door" },
        { type: "block", hidden: true, x: 940, y: -3540, w: 120, h: 40, room5: true, collide: false, id: "pacman red cube door" },
        { type: "block", hidden: true, x: 900, y: -4100, w: 80, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 900, y: -4100, w: 40, h: 80, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1020, y: -4100, w: 80, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1060, y: -4100, w: 40, h: 80, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 900, y: -3940, w: 80, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 900, y: -3980, w: 40, h: 80, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1020, y: -3940, w: 80, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", hidden: true, x: 1060, y: -3980, w: 40, h: 80, room5: true, collide: false, pacmanCollide: true },
        { type: "cube", x: 1000, y: -4000, room5: true, red: "true", hidden: true },
        { type: "image", image: "pingPongBackground", x: -500, y: -4500, w: 1000, h: 1000, room6: true },
        { type: "block", x: -450, y: -4100, w: 20, h: 200, room6: true, id: "opponent paddle" },
        { type: "block", x: 430, y: -4100, w: 20, h: 200, room6: true, id: "player paddle" },
        { type: "text", x: 50, y: -4450, font: "50px rubikbold", content: "0", room6: true, id: "player score", textAlign: "left" },
        { type: "text", x: -50, y: -4450, font: "50px rubikbold", content: "0", room6: true, id: "opponent score", textAlign: "right" },
        { type: "image", image: "circlesBackground", x: -1500, y: -4500, w: 1000, h: 1000, room7: true },
        { type: "image", image: "circlesBackground", x: -1500, y: -5500, w: 1000, h: 1000, secretCirclesRoom: true },
        { type: "circle", x: -530, y: -4100, r: 150, color: "hsl(0,100%,50%)", room7: true },
        { type: "circle", x: -830, y: -4050, r: 200, color: "hsl(100,100%,50%)", room7: true },
        { type: "circle", x: -1100, y: -4070, r: 100, color: "hsl(50,100%,50%)", room7: true },
        { type: "circle", x: -1400, y: -4500, r: 200, color: "hsla(150,100%,50%,0.2)", room7: true, secretCirclesRoom: true },
        { type: "circle", x: -1070, y: -4700, r: 300, color: "hsl(30,100%,50%)", room7: true, secretCirclesRoom: true },
        { type: "circle", x: -1700, y: -4200, r: 300, color: "hsl(160,100%,50%)", room7: true },
        { type: "circle", x: -600, y: -4500, r: 130, color: "hsl(140,100%,50%)", room7: true, secretCirclesRoom: true },
        { type: "circle", x: -1500, y: -3900, r: 140, color: "hsl(200,100%,50%)", room7: true },
        { type: "circle", x: -1330, y: -3600, r: 250, color: "hsl(50,100%,50%)", room7: true },
        { type: "circle", x: -1050, y: -3400, r: 250, color: "hsl(230,100%,50%)", room7: true },
        { type: "circle", x: -340, y: -3500, r: 250, color: "hsl(300,100%,50%)", room7: true },
        { type: "circle", x: -330, y: -3780, r: 250, color: "hsl(320,100%,50%)", room7: true },
        { type: "circle", x: -800, y: -3500, r: 80, color: "hsl(10,100%,50%)", room7: true },
        { type: "circle", x: -550, y: -4700, r: 120, color: "hsl(210,100%,50%)", secretCirclesRoom: true },
        { type: "circle", x: -700, y: -4900, r: 150, color: "hsl(250,100%,50%)", secretCirclesRoom: true },
        { x: -1500 + 400, y: -3500 + 70, type: "text", content: "No tricks here ;)", font: "50px Arial", room8: true },
        { x: -1500 + 790, y: -3500 + 0, w: 10, h: 800, type: "block", room8: true },
        { x: -1500 + 900, y: -3500 - 100, w: 200, h: 1000, type: "block", room8: true },
        { x: -1500 - 100, y: -3500 + 900, w: 1200, h: 200, type: "block", room8: true },
        { x: -1500 - 100, y: -3500 + 300, w: 200, h: 600, type: "lava", drawType: "block", color: "red", room8: true },
        { x: -1500 + 700, y: -3500 + 800, w: 100, h: 10, type: "block", room8: true },
        { x: -1500 + 500, y: -3500 + 700, w: 100, h: 10, type: "block", room8: true },
        { x: -1500 + 100, y: -3500 + 650, w: 200, h: 10, type: "block", room8: true },
        { x: -1500 + 450, y: -3500 + 550, w: 100, h: 10, type: "block", room8: true },
        { x: -1500 + 700, y: -3500 + 500, w: 51, h: 10, type: "block", room8: true },
        { x: -1500 + 500, y: -3500 + 400, w: 100, h: 10, type: "block", room8: true },
        { x: -1500 + 200, y: -3500 + 300, w: 100, h: 10, type: "block", room8: true },
        { type: "pacman ghost", color: "cyan", x: 1020, y: -3980, w: 40, h: 40, direction: 270, room5: true },
        { type: "pacman ghost", color: "orange", x: 940, y: -4020, w: 40, h: 40, direction: 180, room5: true },
        { type: "pacman ghost", color: "red", x: 980, y: -4060, w: 40, h: 40, direction: 180, room5: true },
        { type: "pacman ghost", color: "pink", x: 1020, y: -4060, w: 40, h: 40, direction: 180, room5: true }
    ],
    triggers: [
        {
            name: "room 0",
            check: function () {
                //return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.x > 1480 && player.y > -480;
            },
            trip: function () {
                for (var o of game.objects.objects) {
                    if (o.room0) {
                        o.alpha = 1;
                        o.collide = true;
                    } else {
                        o.alpha = 0;
                        o.collide = false;
                    }
                }
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.x < 1480;
            },
            passive: function () {
                game.cam.x = 2000;
                game.backgroundOpacity = 1;
            }
        },
        {
            name: "room 1",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                if (player.y < -480) return false;
                if (player.x < 1480) return true;
            },
            trip: function () {
                for (var o of game.objects.objects) {
                    if (o.room1) {
                        if (!o.collected) o.alpha = 1;
                        if (!o.noCollide) o.collide = true;
                    } else {
                        o.alpha = 0;
                        o.collide = false;
                    }
                }
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.y < -480) return true;
                if (player.x > 1480) return true;
            },
            passive: function () {
                game.cam.x = 1000;
                game.backgroundOpacity = 0;
            }
        },
        {
            name: "room 2",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                if (player.x < 480) return false;
                if (player.y < -1480) return false;
                if (player.y < -480) return true;
            },
            trip: function () {
                for (var o of game.objects.objects) {
                    if (o.room2) {
                        o.alpha = 1;
                        if (!o.noCollide) o.collide = true;
                    } else {
                        o.alpha = 0;
                        o.collide = false;
                    }
                }
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                if (player.y > -565) player.y = -565;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.y > -480) return true;
                if (player.y < -1480) return true;
            },
            passive: function () {
                game.cam.x = 1000;
                game.cam.y = -1000;
                game.backgroundOpacity = 0;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                if (player.x < 480) {
                    player.x = 1480;
                    player.positionHistory = [];
                }
                if (player.x > 1480) {
                    player.x = 480;
                    player.positionHistory = [];
                }
            },
        },
        {
            name: "room 3",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (player && player.y < -1480) return true;
                var player = game.objects.objects.find(e => e.type == "sokoban player");
                if (player && player.y < -2500) return false;
                if (player && player.x <= 1460) return true;
                var player = game.objects.objects.find(e => e.type == "snake player");
                if (player && player.y > -2500) return true;
            },
            trip: function () {
                for (var o of game.objects.objects) {
                    if (o.type == "sokoban player") continue;
                    if (o.room3) {
                        o.alpha = 1;
                        o.collide = true;
                    } else {
                        o.alpha = 0;
                        o.collide = false;
                    }
                }
                if (!game.objects.objects.find(e => e.type == "sokoban player")) {
                    var player = game.objects.objects.find(e => e.type == "player");
                    if (player) {
                        player.delete = true;
                        player.noDeathEffect = true;
                    } else {
                        player = game.objects.objects.find(e => e.type == "snake player");
                        o.delete = true;
                        for (var o of game.objects.objects) {
                            if (o.type == "snake body") o.delete = true;
                        }
                    }
                    var x = Math.floor((player.x - 20) / 40) * 40 + 20;
                    if (x <= 540) x = 580;
                    if (x >= 1460) x = 1420;
                    var sokobanPlayer = {
                        type: "sokoban player",
                        x: x,
                        y: -1540,
                        w: 40,
                        h: 40
                    }
                    if (player.type == "snake player") sokobanPlayer.y = -2500;
                    game.objects.objects.push(sokobanPlayer);
                }
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "sokoban player");
                if (!player) return false;
                if (player.y >= -1500) {
                    player.delete = true;
                    game.objects.objects.push(game.level.createPlayer(player.x, player.y + 50));
                    return true;
                }
                if (player.x > 1460) return true;
                if (player.y < -2500) return true;
            },
            passive: function () {
                game.cam.x = 1000;
                game.cam.y = -2000;
                game.backgroundOpacity = 0;
            }
        },
        {
            name: "cube room",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "sokoban player");
                if (!player) return;
                if (player.x > 1460) return true;
            },
            trip: function () {
                for (var o of game.objects.objects) {
                    if (o.type == "sokoban player") continue;
                    if (o.cubeRoom && o.type != "cube") {
                        o.alpha = 1;
                        o.collide = true;
                    } else {
                        o.alpha = 0;
                        o.collide = false;
                    }
                }
                game.background.effect.start("blue");
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "sokoban player");
                if (!player) return;
                if (player.x <= 1460) return true;
            },
            passive: function () {
                game.cam.x = 2000;
                game.cam.y = -2000;
                game.backgroundOpacity = 0;
            }
        },
        {
            name: "cube",
            check: function () {
                if (!game.level.triggers.tripped("cube room")) return false;
                if (game.objects.objects.some(e => e.type == "sokoban box" && e.blue && !e.lit)) return false;
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.type == "cube" && e.cubeRoom);
                o.alpha = 0;
                o.decay = -0.05;
                o.collide = true;
            },
            stop: function () {
                if (!game.level.triggers.tripped("cube room")) return true;
                if (game.objects.objects.some(e => e.type == "sokoban box" && e.blue && !e.lit)) return true;
                return false;
            },
            untrip: function () {
                var o = game.objects.objects.find(e => e.type == "cube" && e.cubeRoom);
                o.alpha = 1;
                o.decay = 0.05;
                o.collide = false;
            }
        },
        {
            name: "room 4",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "sokoban player");
                if (player && player.y < -2500) return true;
                var player = game.objects.objects.find(e => e.type == "pacman player");
                if (player && player.y > -3500) return true;
            },
            trip: function () {
                for (var o of game.objects.objects) {
                    if (o.room4) {
                        o.alpha = 1;
                        o.collide = true;
                    } else {
                        o.alpha = 0;
                        o.collide = false;
                    }
                }
                var o = game.objects.objects.find(e => e.type == "sokoban player");
                if (!o) {
                    var o = game.objects.objects.find(e => e.type == "pacman player");
                }
                o.delete = true;
                var x = o.x;
                if (x == 500) x += 40;
                if (x == 1460) x -= 40;
                var snakePlayer = {
                    type: "snake player",
                    length: 10,
                    x: x,
                    y: -2500,
                    w: 40,
                    h: 40,
                    move: {
                        origin: {
                            x: x,
                            y: -2500
                        },
                        direction: {
                            x: 0,
                            y: -40
                        },
                        lastDirection: {
                            x: 0,
                            y: -40
                        },
                        directionQueue: [],
                        time: 0
                    }
                }
                if (o.type == "pacman player") {
                    snakePlayer.x = Math.round(snakePlayer.x / 40) * 40 - 20;
                    snakePlayer.move.origin.x = snakePlayer.x;
                    snakePlayer.y = -3500;
                    snakePlayer.move.origin.y = -3500;
                    snakePlayer.move.lastDirection = {
                        x: 0,
                        y: 40
                    }
                    snakePlayer.move.direction = {
                        x: 0,
                        y: 40
                    }
                }
                game.objects.objects.push(snakePlayer);
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "snake player");
                if (!player) return false;
                if (player.y > -2500) return true;
                if (player.y < -3500) return true;
                return false;
            },
            passive: function () {
                game.cam.x = 1000;
                game.cam.y = -3000;
                game.backgroundOpacity = 0;
            }
        },
        {
            name: "new apple",
            check: function () {
                if (!game.level.triggers.tripped("room 4")) return false;
                if (!game.objects.objects.find(e => e.type == "apple")) return true;
                return false;
            },
            trip: function () {
                var possibleCoordinates = [];
                for (var x = 540; x <= 1460; x += 40) {
                    for (var y = -3500; y <= -2540; y += 40) {
                        var rect = { x: x, y: y, w: 40, h: 40 };
                        var collide = false;
                        for (var o of game.objects.objects) {
                            if (!o.snakeCollide) continue;
                            if (!blocksColliding(o, rect)) continue;
                            collide = true;
                            break;
                        }
                        if (collide) continue;
                        possibleCoordinates.push(rect);
                    }
                }
                var snake = game.objects.objects.find(e => e.type == "snake player");
                var snakeEnd = game.objects.objects.filter(e => e.type == "snake body").sort((a, b) => a.time - b.time)[0];
                var snakeX = Math.floor(snakeEnd.x / 40) * 40;
                var snakeY = Math.floor(snakeEnd.y / 40) * 40;
                var psuedoRandom = Math.abs(snake.length * 0.1283479 + snakeX * 0.8127634 + snakeY * 0.113489975) % 1;
                var coor = possibleCoordinates[Math.floor(psuedoRandom * possibleCoordinates.length)];
                var apple = {
                    type: "apple",
                    room4: true,
                    x: coor.x,
                    y: coor.y,
                    w: 40,
                    h: 40
                };
                game.objects.objects.splice(game.objects.objects.length - 1, 0, apple);
            },
            stop: function () {
                return true;
            }
        },
        {
            name: "room 5",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "snake player");
                if (player && player.y < -3500) return true;
                return false;
            },
            trip: function () {
                for (var o of game.objects.objects) {
                    if (o.room5) {
                        if (o.hidden) {
                            o.alpha = 0;
                        } else {
                            o.alpha = 1;
                        }
                        o.collide = true;
                    } else {
                        o.alpha = 0;
                        o.collide = false;
                    }
                }
                var o = game.objects.objects.find(e => e.type == "snake player");
                o.delete = true;
                for (var o of game.objects.objects) {
                    if (o.type != "snake body") continue;
                    o.delete = true;
                }

                /*var o = game.objects.objects.find(e => e.type == "player");
                o.delete = true;
                o.noDeathEffect = true;*/

                var pacmanPlayer = {
                    type: "pacman player",
                    x: 980,
                    y: -3500,
                    w: 40,
                    h: 40,
                    angle: 0,
                    nextDirection: false,
                    animation: 0
                };
                game.objects.objects.push(pacmanPlayer);

                if (game.level.triggers.tripped("init room 5")) {
                    for (var o of game.objects.objects.filter(e => e.type == "pacman dot")) {
                        if (o.collected) continue;
                        o.alpha = 1;
                    }
                    return;
                }
                for (var o of game.objects.objects) {
                    if (o.type == "pacman dot") o.delete = true;
                }
                var dots = [];
                for (var x = 540; x < 1460; x += 40) {
                    for (var y = -4460; y < -3540; y += 40) {
                        var dot = {
                            type: "pacman dot",
                            x: x + 15,
                            y: y + 15,
                            w: 10,
                            h: 10,
                            collected: false
                        }
                        if ((x == 540 || x == 1420) && (y == -4460 || y == -3580)) {
                            dot.w = 20;
                            dot.h = 20;
                            dot.x -= 5;
                            dot.y -= 5;
                            dot.booster = true;
                        }
                        if (x == 1420 && y == -4460) {
                            dot.clue = true;
                        }
                        var collide = game.objects.objects.some(e => e.pacmanCollide && blocksColliding(e, dot));
                        if (collide) continue;
                        game.objects.objects.unshift(dot);
                        dots.push(dot);
                    }
                }
                for (var n = 0; n < dots.length; n++) {
                    var o = dots[n];
                    for (var n2 = 0; n2 < dots.length; n2++) {
                        var o2 = dots[n2];
                        if (Math.abs(o.x - o2.x) > 40) continue;
                        if (Math.abs(o.y - o2.y) > 40) continue;
                        if (o2.x == o.x - 40 && o.y == o2.y) {
                            o.left = true;
                            o2.right = true;
                        }
                        if (o.x == o2.x - 40 && o.y == o2.y) {
                            o2.left = true;
                            o.right = true;
                        }
                        if (o2.y == o.y - 40 && o.x == o2.x) {
                            o.top = true;
                            o2.bottom = true;
                        }
                        if (o.y == o2.y - 40 && o.x == o2.x) {
                            o2.top = true;
                            o.bottom = true;
                        }
                    }
                }
                game.objects.ghostNodes = [];
                for (var o of dots) {
                    var yAxis = o.top || o.bottom;
                    var xAxis = o.left || o.right;
                    if (xAxis && yAxis) {
                        var ghostNode = {};
                        ghostNode.type = "ghost node";
                        ghostNode.x = o.x - 15;
                        ghostNode.y = o.y - 15;
                        ghostNode.w = 40;
                        ghostNode.h = 40;
                        game.objects.ghostNodes.push(ghostNode);
                        game.objects.objects.push(ghostNode);
                    }
                }
                var extraCoordinates = [
                    { x: 540, y: -4460 },
                    { x: 1420, y: -4460 },
                    { x: 540, y: -3580 },
                    { x: 1420, y: -3580 },
                    { x: 980, y: -4140 },
                    { x: 980, y: -4060 },
                    { x: 980, y: -3980 },
                    { x: 980, y: -3900 },
                    { x: 860, y: -4020 },
                    { x: 940, y: -4020 },
                    { x: 1020, y: -4020 },
                    { x: 1100, y: -4020 },
                ];
                for (var o of extraCoordinates) {
                    var ghostNode = {};
                    ghostNode.type = "ghost node";
                    ghostNode.x = o.x;
                    ghostNode.y = o.y;
                    ghostNode.w = 40;
                    ghostNode.h = 40;
                    game.objects.ghostNodes.push(ghostNode);
                    game.objects.objects.push(ghostNode);
                }
                for (var n = 0; n < game.objects.ghostNodes.length; n++) {
                    var o = game.objects.ghostNodes[n];
                    for (var n2 = n + 1; n2 < game.objects.ghostNodes.length; n2++) {
                        var o2 = game.objects.ghostNodes[n2];
                        if (o.x != o2.x && o.y != o2.y) continue;
                        if (o.x == o2.x) {
                            var dist = Math.abs(o.y - o2.y);
                            if (o.y < o2.y) {
                                if (!o.bottom || o.bottom.dist > dist) {
                                    var box = { x: o.x, y: o.y, w: o.w, h: o2.y - o.y + o2.h };
                                    var colliding = game.objects.objects.some(e => e.pacmanCollide && e.id != "ghost den" && blocksColliding(e, box));
                                    if (!colliding) {
                                        o.bottom = { dist: dist, id: n2 };
                                        o2.top = { dist: dist, id: n };
                                    }
                                }
                            } else {
                                if (!o.top || o.top.dist > dist) {
                                    var box = { x: o2.x, y: o2.y, w: o2.w, h: o.y - o2.y + o.h };
                                    var colliding = game.objects.objects.some(e => e.pacmanCollide && e.id != "ghost den" && blocksColliding(e, box));
                                    if (!colliding) {
                                        o.top = { dist: dist, id: n2 };
                                        o2.bottom = { dist: dist, id: n };
                                    }
                                }
                            }
                        } else {
                            var dist = Math.abs(o.x - o2.x);
                            if (o.x < o2.x) {
                                if (!o.right || o.right.dist > dist) {
                                    var box = { x: o.x, y: o.y, w: o2.x - o.x + o2.w, h: o.h };
                                    var colliding = game.objects.objects.some(e => e.pacmanCollide && e.id != "ghost den" && blocksColliding(e, box));
                                    if (!colliding) {
                                        o.right = { dist: dist, id: n2 };
                                        o2.left = { dist: dist, id: n };
                                    }
                                }
                            } else {
                                if (!o.left || o.left.dist > dist) {
                                    var box = { x: o2.x, y: o2.y, w: o.x - o2.x + o.w, h: o2.h };
                                    var colliding = game.objects.objects.some(e => e.pacmanCollide && e.id != "ghost den" && blocksColliding(e, box));
                                    if (!colliding) {
                                        o.left = { dist: dist, id: n2 };
                                        o2.right = { dist: dist, id: n };
                                    }
                                }
                            }
                        }
                    }
                }
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "pacman player");
                if (!player) return false;
                if (player.y > -3500) return true;
                if (player.x < 500) return true;
                return false;
            },
            passive: function () {
                game.cam.x = 1000;
                game.cam.y = -4000;
                game.backgroundOpacity = 0;
            }
        },
        {
            name: "init room 5",
            check: function () {
                return game.level.triggers.tripped("room 5");
            }
        },
        {
            name: "won red cube",
            check: function () {
                if (!game.level.triggers.tripped("red cube")) return false;
                for (var o of game.objects.objects) {
                    if (o.type != "pacman dot") continue;
                    if (!o.collected) return false;
                }
                return true;
            },
            trip: function () {
                game.objects.objects = game.objects.objects.filter(e => e.type != "pacman ghost");
                var o = game.objects.objects.find(e => e.type == "cube" && e.red);
                o.alpha = 0;
                o.decay = -0.1;
                var o = game.objects.objects.find(e => e.id == "pacman background");
                o.image = "pacmanRedCubeWonBackground";
                var o = game.objects.objects.find(e => e.id == "ghost den");
                o.pacmanCollide = false;
                for (var o of game.objects.objects.filter(e => e.id == "pacman red cube door")) {
                    o.pacmanCollide = false;
                }
            }
        },
        {
            name: "red cube",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "pacman player");
                if (!player || player.dead) return false;
                if (!game.level.triggers.tripped("room 5")) return false;
                if (!game.objects.objects.find(e => e.type == "pacman dot" && e.clue && !e.collected)) return true;
                return false;
            },
            trip: function () {
                game.soundEffects.redCubeClue();
                game.level.discoverRedCube();
                var o = game.objects.objects.find(e => e.id == "pacman background");
                o.image = "pacmanRedCubeBackground";
                var origin = game.objects.objects.find(e => e.type == "pacman dot" && e.clue);
                for (var o of game.objects.objects) {
                    if (o.type != "pacman dot") continue;
                    o.originalX = o.x;
                    o.originalY = o.y;
                    o.originalW = o.w;
                    o.originalH = o.h;
                    if (o.clue) continue;
                    var dist = distTo(o.x, o.y, origin.x, origin.y);
                    o.redTime = Math.round(dist / 40) + 2;
                }
                for (var o of game.objects.objects.filter(e => e.id == "pacman red cube door")) {
                    o.pacmanCollide = true;
                }
                var cyanGhost = game.objects.objects.find(e => e.type == "pacman ghost" && e.color == "cyan");
                cyanGhost.direction = 270;
                cyanGhost.x = 1020;
                cyanGhost.y = -3980;
                var orangeGhost = game.objects.objects.find(e => e.type == "pacman ghost" && e.color == "orange");
                orangeGhost.direction = 180;
                orangeGhost.x = 940;
                orangeGhost.y = -4020;
                var redGhost = game.objects.objects.find(e => e.type == "pacman ghost" && e.color == "red");
                redGhost.direction = 180;
                redGhost.x = 980;
                redGhost.y = -4060;
                var pinkGhost = game.objects.objects.find(e => e.type == "pacman ghost" && e.color == "pink");
                pinkGhost.direction = 180;
                pinkGhost.x = 1020;
                pinkGhost.y = -4060;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "pacman player");
                if (!player) return false;
                if (player.deathAnimation > 199) return true;
            },
            untrip: function () {
                var o = game.objects.objects.find(e => e.id == "pacman background");
                o.image = "pacmanBackground";
                for (var o of game.objects.objects) {
                    if (o.type != "pacman dot") continue;
                    o.redTime = undefined;
                    o.red = false;
                    o.x = o.originalX;
                    o.y = o.originalY;
                    o.w = o.originalW;
                    o.h = o.originalH;
                    o.collected = false;
                    o.alpha = 1;
                }
                var cyanGhost = game.objects.objects.find(e => e.type == "pacman ghost" && e.color == "cyan");
                cyanGhost.direction = 270;
                cyanGhost.x = 1020;
                cyanGhost.y = -3980;
                var orangeGhost = game.objects.objects.find(e => e.type == "pacman ghost" && e.color == "orange");
                orangeGhost.direction = 180;
                orangeGhost.x = 940;
                orangeGhost.y = -4020;
                var redGhost = game.objects.objects.find(e => e.type == "pacman ghost" && e.color == "red");
                redGhost.direction = 180;
                redGhost.x = 980;
                redGhost.y = -4060;
                var pinkGhost = game.objects.objects.find(e => e.type == "pacman ghost" && e.color == "pink");
                pinkGhost.direction = 180;
                pinkGhost.x = 1020;
                pinkGhost.y = -4060;
                for (var o of game.objects.objects.filter(e => e.type == "pacman ghost")) {
                    o.animation = 0;
                    o.targetAngle = 0;
                    o.targetDistTime = 0;
                    o.targetDist = 0;
                    o.targetNode = false;
                }
                for (var o of game.objects.objects.filter(e => e.id == "pacman red cube door")) {
                    o.pacmanCollide = false;
                }
            },
            passive: function () {
                if (!game.level.triggers.tripped("room 5")) return;
                var player = game.objects.objects.find(e => e.type == "pacman player");
                for (var n = 0; n < game.objects.ghostNodes.length; n++) {
                    var o = game.objects.ghostNodes[n];
                    if (o.distToPlayer === undefined) o.distToPlayer = 10000000;
                    if (blocksColliding(o, player)) {
                        o.distToPlayer = 0;
                        o.precedentId = n;
                        for (var n2 = 0; n2 < game.objects.ghostNodes.length; n2++) {
                            if (n == n2) continue;
                            var o2 = game.objects.ghostNodes[n2];
                            if (o2.precedentId !== n) o2.precedentId = false;
                        }
                        if (o.left) {
                            var o2 = game.objects.ghostNodes[o.left.id];
                            var box = { x: o2.x + o2.w, y: o2.y, w: o.x - o2.x - o2.w, h: o2.h };
                            if (blocksColliding(box, player)) {
                                o2.distToPlayer = 1;
                                o2.precedentId = o.precedentId;
                            }
                        }
                        if (o.right) {
                            var o2 = game.objects.ghostNodes[o.right.id];
                            var box = { x: o.x + o.w, y: o.y, w: o2.x - o.x - o.w, h: o.h };
                            if (blocksColliding(box, player)) {
                                o2.distToPlayer = 1;
                                o2.precedentId = o.precedentId;
                            }
                        }
                        if (o.top) {
                            var o2 = game.objects.ghostNodes[o.top.id];
                            var box = { x: o2.x, y: o2.y + o2.h, w: o2.w, h: o.y - o2.y - o2.h };
                            if (blocksColliding(box, player)) {
                                o2.distToPlayer = 1;
                                o2.precedentId = o.precedentId;
                            }
                        }
                        if (o.bottom) {
                            var o2 = game.objects.ghostNodes[o.bottom.id];
                            var box = { x: o.x, y: o.y + o.h, w: o.w, h: o2.y - o.y - o.h };
                            if (blocksColliding(box, player)) {
                                o2.distToPlayer = 1;
                                o2.precedentId = o.precedentId;
                            }
                        }
                    } else {
                        var neighbors = [];
                        if (o.left) neighbors.push(game.objects.ghostNodes[o.left.id]);
                        if (o.right) neighbors.push(game.objects.ghostNodes[o.right.id]);
                        if (o.top) neighbors.push(game.objects.ghostNodes[o.top.id]);
                        if (o.bottom) neighbors.push(game.objects.ghostNodes[o.bottom.id]);
                        for (var o2 of neighbors) {
                            if (o2.precedentId === false || o2.precedentId === undefined) continue;
                            if (o.precedentId === false || o2.precedentId === false) o.distToPlayer = distTo(o.x, o.y, o2.x, o2.y) + o2.distToPlayer;
                            o.precedentId = o2.precedentId;
                            o.distToPlayer = Math.min(o.distToPlayer, distTo(o.x, o.y, o2.x, o2.y) + o2.distToPlayer);
                        }
                    }
                }
            }
        },
        {
            name: "room 6",
            check: function () {
                //return true;
                var player = game.objects.objects.find(e => e.type == "pacman player");
                if (player && player.x < 500) return true;
                var player = game.objects.objects.find(e => e.type == "circles player");
                if (player && player.x > -500) return true;
                return false;
            },
            trip: function () {
                for (var o of game.objects.objects) {
                    if (o.type == "pacman dot") o.delete = true;
                    if (o.type == "pacman ghost") o.delete = true;
                }
                var o = game.objects.objects.find(e => e.type == "pacman player");
                if (!o) o = game.objects.objects.find(e => e.type == "circles player");
                //o = game.objects.objects.find(e => e.type == "player");
                //o.noDeathEffect = true;
                o.delete = true;
                for (var o of game.objects.objects) {
                    if (o.room6) {
                        o.alpha = 1;
                        o.collide = true;
                    } else {
                        o.alpha = 0;
                        o.collide = false;
                    }
                }
                var pingPongPlayer = {
                    type: "ping pong player",
                    x: 470,
                    y: o.y,
                    w: 30,
                    h: 30,
                    xmove: -2.9,
                    ymove: -4
                }
                if (o.type == "circles player") {
                    pingPongPlayer.x = -500;
                    pingPongPlayer.xmove = 2.9;
                }
                game.objects.objects.push(pingPongPlayer);
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "ping pong player");
                if (player && player.x < -500) return true;
                return false;
            },
            passive: function () {
                game.cam.x = 0;
                game.cam.y = -4000;
                game.backgroundOpacity = 0;

                var o = game.objects.objects.find(e => e.id == "player paddle");
                if (game.input.down) {
                    o.y += 4;
                }
                if (game.input.up) {
                    o.y -= 4;
                }
                if (o.y < -4500) o.y = -4500;
                if (o.y > -3500 - o.h) o.y = -3500 - o.h;

                var o = game.objects.objects.find(e => e.id == "opponent paddle");
                var player = game.objects.objects.find(e => e.type == "ping pong player");
                if (player) {
                    if (player.y > o.y + o.h / 2) {
                        o.y += 2;
                    }
                    if (player.y < o.y + o.h / 2) {
                        o.y -= 2;
                    }
                }
                if (o.y < -4500) o.y = -4500;
                if (o.y > -3500 - o.h) o.y = -3500 - o.h;
            }
        },
        {
            name: "room 7",
            check: function () {
                //return true;
                var player = game.objects.objects.find(e => e.type == "ping pong player");
                if (player && player.x < -500) return true;
                var player = game.objects.objects.find(e => e.type == "circles player");
                if (player && player.y > -4500) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.type == "ping pong player");
                //o = game.objects.objects.find(e => e.type == "player");
                //o.noDeathEffect = true;
                if (o) o.delete = true;
                for (var o of game.objects.objects) {
                    if (o.type == "circles player") continue;
                    if (o.room7) {
                        o.alpha = 1;
                        o.collide = true;
                    } else {
                        o.alpha = 0;
                        o.collide = false;
                    }
                }
                if (game.objects.objects.find(e => e.type == "circles player")) return;
                var circlesPlayer = {
                    type: "circles player",
                    x: -500,
                    y: -4300,
                    r: 20,
                    angle: 0,
                    xmove: -6,
                    ymove: 0,
                    turn: 0
                }
                game.objects.objects.push(circlesPlayer);
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "circles player");
                if (player && player.x > -500) return true;
                if (player && player.y > -3500) return true;
                if (player && player.y < -4500) return true;
                return false;
            },
            passive: function () {
                game.cam.x = -1000;
                game.cam.y = -4000;
                game.backgroundOpacity = 0;
            }
        },
        {
            name: "secret circles room",
            check: function () {
                //return true;
                var player = game.objects.objects.find(e => e.type == "circles player");
                if (player && player.y < -4500) return true;
                return false;
            },
            trip: function () {
                for (var o of game.objects.objects) {
                    if (o.type == "circles player") continue;
                    if (o.secretCirclesRoom) {
                        o.alpha = 1;
                        o.collide = true;
                    } else {
                        o.alpha = 0;
                        o.collide = false;
                    }
                }
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "circles player");
                if (player && player.y > -4500) return true;
                return false;
            },
            passive: function () {
                game.cam.x = -1000;
                game.cam.y = -5000;
                game.backgroundOpacity = 0;
            }
        },
        {
            name: "room 8",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "circles player");
                if (player && player.y > -3500) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.type == "circles player");
                o.delete = true;
                for (var o of game.objects.objects) {
                    if (o.room8) {
                        o.alpha = 1;
                        o.collide = true;
                    } else {
                        o.alpha = 0;
                        o.collide = false;
                    }
                }
                var oldPlayer = {
                    type: "old player",
                    x: -670,
                    y: -3540,
                    w: 40,
                    h: 40,
                    xmove: 0,
                    ymove: 4
                }
                game.objects.objects.push(oldPlayer);
            },
            passive: function () {
                game.cam.x = -1000;
                game.cam.y = -3000;
                game.backgroundOpacity = 0;
            }
        },
    ],
    viewportBoundary: { x: 0, y: 0, w: 0, h: 0 },
    camFunction: function () {
    },
    levelComplete: function () {
        if (!game.level.triggers.tripped("room 8")) return false;
        var player = game.objects.objects.find(e => e.type == "old player");
        if (!player) return false;
        if (player.x < -1540) return true;
        return false;
    },
    camOffset: {
        x: 0,
        y: 0
    },
    camStartingPosition: {
        x: 2000,
        y: 0
    },
    spawnPoint: {
        x: 2300,
        y: 100
    },
    manualRespawn: function () {
        if (game.level.triggers.tripped("room 2")) {
            var o = game.level.createPlayer(980, -700);
            o.spawnTime = 150;
            o.spawnAnimation = 20;
            game.objects.objects.push(o);
        }
        if (game.level.triggers.tripped("room 4")) {
            for (var o of game.objects.objects) {
                if (o.type == "snake player") o.delete = true;
                if (o.type == "snake body") o.delete = true;
            }
            var snakePlayer = {
                type: "snake player",
                length: 10,
                x: 1020,
                y: -2500,
                w: 40,
                h: 40,
                move: {
                    origin: {
                        x: 1020,
                        y: -2500
                    },
                    direction: {
                        x: 0,
                        y: -40
                    },
                    lastDirection: {
                        x: 0,
                        y: -40
                    },
                    directionQueue: [],
                    time: 0
                }
            }
            game.objects.objects.push(snakePlayer);
        }
        if (game.level.triggers.tripped("room 5")) {
            var player = game.objects.objects.find(e => e.type == "pacman player");
            player.dead = false;
            player.deathAnimation = 0;
            player.x = 980;
            player.y = -3500;
            player.angle = 0;
            player.nextDirection = false;
            player.animation = 0;
        }
        if (game.level.triggers.tripped("room 6")) {
            var pingPongPlayer = {
                type: "ping pong player",
                x: 470,
                y: -4000,
                w: 30,
                h: 30,
                xmove: -4,
                ymove: -4
            }
            game.objects.objects.push(pingPongPlayer);
        }
        if (game.level.triggers.tripped("room 8")) {
            var oldPlayer = {
                type: "old player",
                x: -670,
                y: -3540,
                w: 40,
                h: 40,
                xmove: 0,
                ymove: 4
            }
            game.objects.objects.push(oldPlayer);
        }
    },
    playerDeadFunction: function () {
        if (game.level.triggers.tripped("room 2") && !game.objects.objects.find(e => e.type == "player")) return true;
        if (game.level.triggers.tripped("room 4")) {
            var player = game.objects.objects.find(e => e.type == "snake player");
            if (player && player.deathAnimation) return true;
        }
        if (game.level.triggers.tripped("room 5")) {
            var player = game.objects.objects.find(e => e.type == "pacman player");
            if (player.dead) return true;
        }
        if (game.level.triggers.tripped("room 6")) {
            var player = game.objects.objects.find(e => e.type == "ping pong player");
            if (!player) return true;
        }
        if (game.level.triggers.tripped("room 8")) {
            var player = game.objects.objects.find(e => e.type == "old player");
            if (!player) return true;
        }
        return false;
    },
    respawnTimeFunction: function () {
        if (game.level.triggers.tripped("room 2")) {
            game.level.playerRespawnTime -= 3;
        }
        if (game.level.triggers.tripped("room 4")) {
            var snakeHead = game.objects.objects.find(e => e.type == "snake player");
            var snakeLength = 10;
            if (snakeHead) {
                snakeLength = snakeHead.length;
            }
            var decayAmount = snakeLength / 8 + 3.75;
            if (game.level.playerRespawnTime < 100) {
                for (var o of game.objects.objects) {
                    if (o.type != "snake body") continue;
                    o.time -= decayAmount;
                    if (o.time <= 0) o.delete = true;
                }
                if (!game.objects.objects.find(e => e.type == "snake body")) game.level.playerRespawnTime -= decayAmount * 4;
            } else {
                game.level.playerRespawnTime--;
            }
        }
        if (game.level.triggers.tripped("room 5")) {
            game.level.playerRespawnTime--;
        }
        if (game.level.triggers.tripped("room 6")) {
            game.level.playerRespawnTime--;
        }
        if (game.level.triggers.tripped("room 8")) {
            game.level.playerRespawnTime -= 2;
        }
    }
}

levels[8] = {
    objects: [
        { type: "block", x: -6000, y: 100, w: 10000, h: 2000 },
        { type: "block", x: 500, y: -1000, w: 1000, h: 3000, slippery: true },
        { type: "text", content: "You made it.", x: -200, y: -200, font: "40px rubik", id: "text 1", alpha: 0 },
        { type: "text", content: "The final level.", x: -700, y: -200, font: "40px rubik", id: "text 2", alpha: 0 },
        { type: "text", content: "Time to defeat", x: -1100, y: -225, font: "40px rubikbolditalic", id: "text 3", alpha: 0 },
        { type: "text", content: "the boss.", x: -1100, y: -175, font: "40px rubikbolditalic", id: "text 3", alpha: 0 },
        { type: "text", content: "Who said running out", x: -2100, y: -125, font: "40px rubik", id: "text 4", alpha: 0 },
        { type: "text", content: "of hearts would kill you?", x: -2100, y: -75, font: "40px rubik", id: "text 4", alpha: 0 },
        { type: "block", x: -2750, y: -200, w: 100, h: 0, id: "gate 1", slippery: true },
        { type: "block", x: -2775, y: -1200, w: 150, h: 1000 },
        { type: "block", x: -1550, y: -200, w: 100, h: 0, id: "gate 2", slippery: true },
        { type: "block", x: -1575, y: -1200, w: 150, h: 1000 },
        { type: "boss", x: -2300, y: -650, w: 400, h: 400, idle: true, alpha: 0, direction: 1, collide: false },
        { type: "button", x: -2500, y: 70, w: 100, h: 30, originalHeight: 30, pushBack: false, id: "damage boss button", respawnTime: 400, alpha: 0, collide: false },
    ],
    triggers: [
        {
            name: "text 1",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x < 0) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "text 1");
                o.alpha = 0;
                o.decay = -0.1;
            }
        },
        {
            name: "text 2",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x < -500) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "text 2");
                o.alpha = 0;
                o.decay = -0.1;
            }
        },
        {
            name: "text 3",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x < -1000) return true;
                return false;
            },
            trip: function () {
                for (var o of game.objects.objects.filter(e => e.id == "text 3")) {
                    o.alpha = 0;
                    o.decay = -0.1;
                }
            }
        },
        {
            name: "animation",
            check: function () {
                if (game.level.triggers.tripped("animation completed")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x < -1600) return true;
                return false;
            },
            stop: function () {
                return game.level.levelAnimationTime > 350;
            },
            trip: function () {
                game.level.playerControlDelay = 350;
                game.level.levelAnimationTime = 0;
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                var a = game.level.levelAnimationTime;
                game.cam.followX = 0.01 + 0.09 * Math.min(a / 20, 1);
                if (a > 20 && a < 100) {
                    game.cam.offset.x = easeInOut((a - 20) / 80) * (-2100 - player.x - player.w / 2);
                    game.cam.zoom = 1 - easeInOut((a - 20) / 80) * 0.35;
                }
                if (a > 145 && a < 165) {
                    var o = game.objects.objects.find(e => e.id == "gate 1");
                    o.h = Math.min(Math.max(a - 145, 0) / 20, 1) * 350;
                    o.collide = true;
                    var o = game.objects.objects.find(e => e.id == "gate 2");
                    o.h = Math.min(Math.max(a - 145, 0) / 20, 1) * 350;
                    o.collide = true;
                    if (o.h >= 182 && !o.slammed) {
                        o.slammed = true;
                        game.soundEffects.doorSlam();
                    }
                }
                if (a == 160) {
                    game.cam.screenshake = 50;
                }
                if (a > 200) {
                    game.cam.zoom = 0.88 - easeInOut(1 - (a - 200) / 100) * 0.23;
                }
                if (a > 250) {
                    var o = game.objects.objects.find(e => e.type == "boss");
                    o.alpha = 1;
                    o.y = -1250 + 600 * easeInOut((a - 250) / 100);
                }
                if (a == 310 && !game.objects.objects.find(e => e.type == "heart")) {
                    for (var n = 0; n < 5; n++) {
                        var o = {
                            type: "heart",
                            x: -2600 + n * 50,
                            y: -750,
                            w: 40,
                            h: 40,
                            color: "blue",
                            full: true,
                            id: "player heart " + n,
                            alpha: 0,
                            decay: -0.05
                        }
                        game.objects.objects.push(o);
                        var o = {
                            type: "heart",
                            x: -2600 + n * 50,
                            y: -700,
                            w: 40,
                            h: 40,
                            color: "black",
                            full: true,
                            id: "boss heart " + n,
                            alpha: 0,
                            decay: -0.05
                        }
                        game.objects.objects.push(o);
                    }
                }
            }
        },
        {
            name: "animation completed",
            check: function () {
                return game.level.triggers.tripped("animation") && game.level.levelAnimationTime > 350;
            },
            trip: function () {
                game.cam.followX = 0.01;
                game.cam.offset.x = 0;
                var o = game.objects.objects.find(e => e.type == "boss");
                o.idle = false;
            }
        },
        {
            name: "damage boss",
            check: function () {
                var o = game.objects.objects.find(e => e.id == "damage boss button");
                return o.pressed && o.alpha >= 1;
            },
            stop: function () {
                var o = game.objects.objects.find(e => e.type == "boss");
                return o.stunnedTime === 0;
            },
            trip: function () {
                for (var n = 4; n >= 0; n--) {
                    var o2 = game.objects.objects.find(e => e.id == "boss heart " + n);
                    if (!o2.full) continue;
                    o2.full = false;
                    game.particles.createEffect("lose heart", o2);
                    break;
                }
                var o = game.objects.objects.find(e => e.type == "boss");
                o.stunnedTime = 200;
                o.xOrigin = o.x;
                var o = game.objects.objects.find(e => e.id == "damage boss button");
                o.pushBack = false;
                game.soundEffects.bossHurt();
            },
            untrip: function () {
                var o = game.objects.objects.find(e => e.id == "damage boss button");
                o.collide = false;
                o.alpha = 1;
                o.decay = 0.05;
                o.respawnTime = 400;
            }
        },
        {
            name: "respawn button",
            check: function () {
                var o = game.objects.objects.find(e => e.id == "damage boss button");
                if (o.respawnTime) {
                    o.respawnTime--;
                    if (o.respawnTime === 0) {
                        return true;
                    }
                }
                if (o.alpha <= 0) o.pushBack = true;
                return false;
            },
            stop: function () {
                return true;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                var o = game.objects.objects.find(e => e.id == "damage boss button");
                if (player.x < -2000) {
                    o.x = -1800;
                } else {
                    o.x = -2500;
                }
                o.collide = true;
                o.decay = -0.05;
            }
        },
        {
            name: "boss dead",
            check: function () {
                for (var n = 4; n >= 0; n--) {
                    var o2 = game.objects.objects.find(e => e.id == "boss heart " + n);
                    if (!o2) return false;
                    if (o2.full) return false;
                }
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.type == "boss");
                o.deathAnimation = 0;
                var o = game.objects.objects.find(e => e.id == "text 1");
                o.alpha = 0;
                o.decay = 0;
                var o = game.objects.objects.find(e => e.id == "text 2");
                o.alpha = 0;
                o.decay = 0;
                var o = game.objects.objects.find(e => e.id == "text 3");
                o.alpha = 0;
                o.decay = 0;
                game.level.playerControlDelay = 1000;
            },
            passive: function () {
                var o = game.objects.objects.find(e => e.type == "boss");
                o.stunnedTime = 100;
                o.deathAnimation++;
                o.y += Math.min(-3 + o.deathAnimation * 0.04, 5);
                o.y = Math.min(o.y, -300);
                var player = game.objects.objects.find(e => e.type == "player");
                if (player) {
                    o.x = o.x * 0.99 + Math.min(Math.max((player.x + player.w / 2 - o.w / 2), -2450), -2150) * 0.01;
                    if (o.y == -300 && !o.hitGround) {
                        o.hitGround = true;
                        game.cam.screenshake = 40;
                        player.delete = true;
                        game.soundEffects.death();
                    }
                }
            }
        },
        {
            name: "player dead",
            check: function () {
                for (var n = 4; n >= 0; n--) {
                    var o2 = game.objects.objects.find(e => e.id == "player heart " + n);
                    if (!o2) return false;
                    if (o2.full) return false;
                }
                return true;
            },
            trip: function () {
                game.level.levelAnimationTime = 0;
                var o = game.objects.objects.find(e => e.type == "boss");
                o.deathAnimation = 0;
                var o = game.objects.objects.find(e => e.id == "text 1");
                o.alpha = 0;
                o.decay = 0;
                var o = game.objects.objects.find(e => e.id == "text 2");
                o.alpha = 0;
                o.decay = 0;
                for (var o of game.objects.objects.filter(e => e.id == "text 3")) {
                    o.alpha = 0;
                    o.decay = 0;
                }
                for (var o of game.objects.objects.filter(e => e.id == "text 4")) {
                    o.alpha = 0;
                    o.decay = -0.1;
                }
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;

                var a = game.level.levelAnimationTime;
                game.cam.zoom = 0.88 - easeInOut(a / 50) * 0.2;

                var o = game.objects.objects.find(e => e.id == "gate 1");
                o.h = easeInOut(1 - ((a - 50) / 50)) * 330 + 20;
                var o = game.objects.objects.find(e => e.id == "gate 2");
                o.collide = false;
                if (a == 60) game.soundEffects.whoosh();

                if (a < 100) {
                    game.cam.x = -2100;
                }
            }
        },
        {
            name: "player dead animation completed",
            check: function () {
                return game.level.triggers.tripped("player dead");
            }
        }
    ],
    viewportBoundary: { x: -3000, y: -200, w: 3000, h: 0 },
    camFunction: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return;
        if (!game.level.triggers.tripped("animation completed")) return;
        if (game.level.triggers.tripped("player dead animation completed")) return;
        game.cam.zoom = 0.88;
        game.cam.x = -2100;
    },
    levelComplete: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return false;
        return player.x < -3780;
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
    }
}

levels[9] = {
    objects: [
        { type: "text", content: "This isn't the last level", x: 0, y: -250, font: "40px rubik", spawnAnimation: 50, spawnAnimationDuration: 50 },
        { type: "text", content: "and it's completely ordinary.", x: 0, y: -200, font: "40px rubik", spawnAnimation: 50, spawnAnimationDuration: 50 },
        { type: "block", x: 500, y: -500, w: 2000, h: 1000, slippery: true },
        { type: "block", x: -4100, y: 100, w: 5000, h: 1000, illusion3Push: { y: 1 } },
        { type: "block", x: -1150, y: -1600, w: 2050, h: 1000 },
        { type: "block", x: -1200, y: -1000, w: 100, h: 2000, slippery: true },
        { type: "block", x: -1400, y: -1000, w: 100, h: 1000, slippery: true, notIllusion1: true },
        { type: "block", x: -2700, y: -100, w: 1200, h: 100, changeToSlippery: true, illusion3Push: { h: 1 } },
        { type: "block", x: -1600, y: -100, w: 300, h: 100, notIllusion1: true },
        { type: "block", x: -1600, y: -1000, w: 100, h: 800, slippery: true, notIllusion1: true },
        { type: "block", x: -1600, y: -200, w: 100, h: 100, slippery: true, notIllusion1: true, id: "stop jump block", alpha: 0, collide: false },
        { type: "block", x: -1800, y: -1000, w: 100, h: 1000, slippery: true, notIllusion1: true },
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
        { type: "block", x: -800, y: 560, w: 3000, h: 800, collide: false, alpha: 0, t: true },
        { type: "block", x: 113, y: -1000, w: 1000, h: 3000, collide: false, alpha: 0, t: true, slippery: true },
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
        { type: "block", x: -3400, y: 2000, w: 600, h: 600, t: true, id: "planet layer 1" },
        { type: "block", x: -3400, y: 2000, w: 250, h: 50, t: true, id: "layer 1 border" },
        { type: "block", x: -3050, y: 2000, w: 250, h: 50, t: true, id: "layer 1 border" },
        { type: "block", x: -3400, y: 2550, w: 250, h: 50, t: true, id: "layer 1 border" },
        { type: "block", x: -3050, y: 2550, w: 250, h: 50, t: true, id: "layer 1 border" },
        { type: "block", x: -3400, y: 2000, w: 50, h: 250, t: true, id: "layer 1 border" },
        { type: "block", x: -3400, y: 2350, w: 50, h: 250, t: true, id: "layer 1 border" },
        { type: "block", x: -2850, y: 2000, w: 50, h: 250, t: true, id: "layer 1 border" },
        { type: "block", x: -2850, y: 2350, w: 50, h: 250, t: true, id: "layer 1 border" },
        { type: "block", x: -3300, y: 2100, w: 400, h: 400, t: true, id: "planet layer 2" },
        { type: "block", x: -3300, y: 2100, w: 150, h: 50, t: true, id: "layer 2 border" },
        { type: "block", x: -3050, y: 2100, w: 150, h: 50, t: true, id: "layer 2 border" },
        { type: "block", x: -3300, y: 2450, w: 150, h: 50, t: true, id: "layer 2 border" },
        { type: "block", x: -3050, y: 2450, w: 150, h: 50, t: true, id: "layer 2 border" },
        { type: "block", x: -3300, y: 2100, w: 50, h: 150, t: true, id: "layer 2 border" },
        { type: "block", x: -3300, y: 2350, w: 50, h: 150, t: true, id: "layer 2 border" },
        { type: "block", x: -2950, y: 2100, w: 50, h: 150, t: true, id: "layer 2 border" },
        { type: "block", x: -2950, y: 2350, w: 50, h: 150, t: true, id: "layer 2 border" },
        { type: "block", x: -3200, y: 2200, w: 200, h: 200, t: true, id: "planet layer 3" },
        { type: "block", x: -3200, y: 2200, w: 75, h: 30, t: true, id: "layer 3 border" },
        { type: "block", x: -3075, y: 2200, w: 75, h: 30, t: true, id: "layer 3 border" },
        { type: "block", x: -3200, y: 2370, w: 75, h: 30, t: true, id: "layer 3 border" },
        { type: "block", x: -3075, y: 2370, w: 75, h: 30, t: true, id: "layer 3 border" },
        { type: "block", x: -3200, y: 2200, w: 30, h: 75, t: true, id: "layer 3 border" },
        { type: "block", x: -3200, y: 2325, w: 30, h: 75, t: true, id: "layer 3 border" },
        { type: "block", x: -3030, y: 2200, w: 30, h: 75, t: true, id: "layer 3 border" },
        { type: "block", x: -3030, y: 2325, w: 30, h: 75, t: true, id: "layer 3 border" },
        { type: "block", drawType: "glass", x: -3400, y: 1300, w: 600, h: 700, t: true, id: "gravity down", noCollide: true, noAlpha: true },
        { type: "block", drawType: "glass", x: -3400, y: 2600, w: 600, h: 700, t: true, id: "gravity up", noCollide: true, noAlpha: true },
        { type: "block", drawType: "glass", x: -4100, y: 2000, w: 700, h: 600, t: true, id: "gravity right", noCollide: true, noAlpha: true },
        { type: "block", drawType: "glass", x: -2800, y: 2000, w: 700, h: 600, t: true, id: "gravity left", noCollide: true, noAlpha: true },
    ],
    triggers: [
        {
            name: "teleport 1",
            check: function () {
                //return false;
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
            name: "teleport 3",
            check: function () {
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
                        game.objects.objects.push(o);
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
                //return true;
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
                /*
                var player = game.objects.objects.find(e => e.type == "player");
                //game.level.playerFlightMode = true;
                //game.level.showWireframes = true;
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
            name: "falling on planet",
            check: function () {
                if (!game.level.triggers.tripped("false bridge")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y > 1000;
            },
            trip: function () {
                for (var n = 1; n < 4; n++) {
                    var o = { type: "player copy" };
                    o.rotate = { x: -3100, y: 2300, angle: n * 90 };
                    game.objects.objects.push(o);
                }
            }
        },
        {
            name: "fall on planet",
            check: function () {
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
                player.updatePlayer = false;
                player.positionHistory = [];
                player.eyeAngle = player.eyeAngleTarget;
            },
            passive: function () {
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
                game.objects.objects = game.objects.objects.filter(e => e.type != "player copy");
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.explodeAnimation++;
                if (player.explodeAnimation % 4 == 0) game.particles.createEffect("player explode");
                game.cam.screenshake = Math.min(player.explodeAnimation / 50, 8) + 2;
                if (player.explodeAnimation > 500) {
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
        if (game.level.triggers.tripped("explosion")) {
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
            return;
        } else if (game.level.triggers.tripped("falling on planet")) {
            var percent = ((player.y - 1000) / 900) ** 8;
            game.cam.x = game.cam.x * (1 - percent) - 3100 * percent;
            game.cam.y = game.cam.y * (1 - percent) + 2300 * percent;
            game.cam.zoom = 1 - 0.3 * easeInOut((player.y - 1000) / 900);
            return;
        } else if (game.level.triggers.tripped("teleport 6")) {
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
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return false;
        return player.x < -3940;
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
    }
}