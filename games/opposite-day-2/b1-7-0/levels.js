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
        { type: "block", x: 1650, y: -1000, w: 100, h: 1000, slippery: true },
        { type: "block", x: 1300, y: 100, w: 50, h: 850, slippery: true },
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
                if (!player) return true;
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
        { type: "text", content: "How smart of you.", x: -925, y: 115, font: "40px rubik", alpha: 0, id: "jump1" },
        { type: "text", content: "You think jumping works the second time?", x: -1200, y: 0, font: "40px rubik", alpha: 0, id: "jump2" },
        { type: "text", content: "That was embarrassing.", x: -1200, y: 300, font: "40px rubik", alpha: 0, id: "jump3" },
        { type: "text", content: "I'm stunned at your level of skill...", x: 0, y: -250, font: "40px rubik", spawnAnimation: 90, spawnAnimationDuration: 50 },
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
            },
            passive: function () {
                var o = game.objects.objects.find(e => e.id == "platform1");
                o.time++;
                o.x = -1050 - 450 * easeInOut(o.time / 50);
                var o = game.objects.objects.find(e => e.id == "platform2");
                o.time++;
                o.x = -1500 - 225 * easeInOut(o.time / 50);
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
                if (distTo(player.x, player.y, 260, -180) < 30) return true;
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
                var arr = game.objects.objects.filter(e => e.id == "secret passage");
                for (var o of arr) {
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
                    o.alpha = 1;
                    o.decay = 0.1;
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
                return game.level.triggers.tripped("red cube");
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.x > -600) return false;
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
        x: -20,
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
        { type: "block", x: 900, y: -200, w: 25, h: 150, id: "cube wall jump", alpha: 0 },
        { type: "block", x: 900, y: -500, w: 25, h: 300, id: "cube wall jump", alpha: 0, slippery: true },
        { type: "clue", x: 650, y: -165, collide: false, alpha: 0, proximity: 100, radius: 0, id: "cube clue", air: true },
        { type: "arrow", x: 650, y: -85, collide: false, alpha: 0, angle: 180, lineWidth: 8, totalWidth: 130, height: 20, id: "cube arrow" },
        { type: "text", content: "Second time's the charm", x: 650, y: -235, font: "35px rubik", alpha: 0, id: "cube text" },
        { type: "clue", x: -1350, y: -450, collide: false, proximity: 1, radius: 0, id: "red cube jump clue", down: true, angle: 225, color: { r: 255, g: 100, b: 100 } },
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
                var o = game.objects.objects.find(e => e.id == "first shortcut passage clue");
                o.activated = true;
                o.alpha = 1.5;
                o.decay = 0.02;
                var o = game.objects.objects.find(e => e.id == "shortcut passage clue");
                o.alpha = 1;
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
                if (dist < 70 && game.input.down) return true;
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
                var dist = distTo(player.x, player.y, o.x - 20, o.y - 20);
                if (dist < 30) return true;
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
                if (player.y != -540 && !(player.againstBottom.last < 10 && player.y < -530)) return false;
                if (player.xmove <= 0) return false;
                if (!game.input.up) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.y > -450) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube jump clue");
                o.activated = true;
                var player = game.objects.objects.find(e => e.type == "player");
                player.ymove = -14;
                player.y--;
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
            },
            trip: function () {
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
        if (game.level.levelAnimationTime > 500) {
            game.backgroundOpacity = easeInOut((game.level.levelAnimationTime - 540) / 50);
            this.zoom = 0.1 + easeInOut((game.level.levelAnimationTime - 500) / 50) * 0.9;
        }
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
        x: -20,
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
        { type: "text", x: 400, y: 2770, content: "Curiosity is key.", font: "25px rubik", color: "white" },
        { type: "block", x: 500, y: 1800, w: 500, h: 1100, collide: false, eyeCollide: true, alpha: 0, hidden: true, drawType: "glass" },
        { type: "block", x: 300, y: 1700, w: 200, h: 1100, collide: false, eyeCollide: true, alpha: 0, hidden: true, drawType: "glass" },
        { type: "clue", x: 1290, y: 50, collide: false, id: "shortcut clue", air: true, alpha: 0, color: { r: 0, g: 230, b: 0 }, down: true, angle: 180, radius: 0, proximity: 1 },
        { type: "text", content: "Good luck.", x: 1290, y: -50, font: "40px rubik", alpha: 0, shortcut: true },
        { type: "lava", x: 1400, y: 75, w: 5000, h: 25, collide: false, alpha: 0, shortcut: true },
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
                playerEye1.controlDelay = 130;
                var playerEye2 = {};
                playerEye2.type = "player eye";
                playerEye2.id = "player eye 2";
                playerEye2.x = player.eyePositions[1].x - 3.7;
                playerEye2.y = player.eyePositions[1].y - 3.7;
                playerEye2.w = 10;
                playerEye2.h = 10;
                playerEye2.controlDelay = 130;
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
                for (var o of game.objects.objects) {
                    if (!o.blue) continue;
                    o.blueAnimation++;
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
                player.x = Math.max(player.x, 1500);
                player.a = 0;
                player.updatePlayer = false;
                game.objects.objects.push(player);
                for (var o of game.objects.objects) {
                    if (!o.blue) continue;
                    o.blueAnimation = 60;
                    o.blueAnimationOrigin = { x: o1.x - o.x, y: 100 - o.y };
                }
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
                player.a++;
                if (player.y <= 60) {
                    player.updatePlayer = true;
                } else if (player.a > 60 && game.input.up) {
                    player.y--;
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
        { type: "text", content: "Don't press the button...", x: 0, y: -250, font: "40px rubik", spawnAnimation: 120, spawnAnimationDuration: 50 },
        { type: "text", content: "Better run!!!", x: 0, y: -180, font: "40px rubik", spawnAnimation: 50, spawnAnimationDuration: 50, alpha: 0, id: "run text" },
        { type: "block", x: -1000, y: -1000, w: 500, h: 2000, id: "left barrier", slippery: true },
        { type: "block", x: 500, y: -1000, w: 50, h: 2000, id: "right barrier", slippery: true },
        { type: "block", x: -2000, y: 100, w: 8000, h: 2000 },
        { type: "button", x: -50, y: 70, w: 100, h: 30, originalHeight: 30, pushBack: false, id: "button" },
        { type: "lava", x: -3550, y: -1000, w: 3000, h: 900, id: "lava chase" },
        { type: "lava", x: -3550, y: -100, w: 3000, h: 200, id: "lava chase 2", collide: false },
        { type: "lava", x: 100, y: -1000, w: 0, h: 1100, id: "lava chase 3", collide: false },
        { type: "text", content: "It wasn't as hard as you thought.", x: -1000, y: 0, font: "40px rubik", alpha: 0, id: "figured out text" },
        { type: "clue", x: 3300, y: -50, collide: false, proximity: 1, radius: 0, air: true, id: "red cube clue", down: true, angle: 180, color: { r: 255, g: 100, b: 100 } },
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
                game.cam.viewportBoundary.w += 5000;
                game.cam.viewportBoundary.x -= 1000;
            },
            passive: function () {
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
                o.alpha = 1;
                var o = game.objects.objects.find(e => e.id == "lava chase");
                o.decay = 0.05;
                o.alpha = 1;
                var o = game.objects.objects.find(e => e.id == "lava chase 2");
                o.decay = 0.05;
                if (o.alpha === undefined) o.alpha = 1;
                o.maxAlpha = 0;
                var o = game.objects.objects.find(e => e.id == "lava chase 3");
                o.decay = 0.05;
                o.alpha = 1;
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
            },
            trip: function () {
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
    viewportBoundary: { x: 0, y: -10000, w: 0, h: 20000 },
    camFunction: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return;
    },
    levelComplete: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return false;
        return player.x < -1550;
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

levels[5] = {
    objects: [
        { type: "text", content: "0", x: -1850, y: -400, font: "150px rubikbold", id: "digit 1" },
        { type: "text", content: "0", x: -2000, y: -400, font: "150px rubikbold", id: "digit 2" },
        { type: "text", content: "0", x: -2150, y: -400, font: "150px rubikbold", id: "digit 3" },
        { type: "image", image: "circuitBlack", x: -3070, y: -923, w: 1430, h: 1430, collide: false, alpha: 0.2 },
        { type: "image", image: "circuitRed", x: -3070, y: -923, w: 1430, h: 1430, collide: false, alpha: 0, id: "red circuit" },
        { type: "text", content: "a\u00B2 + b\u00B2 = c\u00B2", x: -1250, y: -800, font: "40px rubik" },
        { type: "text", content: "e^i\u03C0 = -1", x: -900, y: -750, font: "40px rubik" },
        { type: "text", content: "\u03C0 = 3.14159265859", x: -700, y: -650, font: "40px rubik" },
        { type: "text", content: "x = 4i + y", x: -1000, y: -430, font: "40px rubik" },
        { type: "text", content: "2i + 2y - x = x", x: -700, y: -480, font: "40px rubik" },
        { type: "text", content: "i = \u221A-1", x: -1300, y: -400, font: "40px rubik" },
        { type: "text", content: "y = 3z + 2z + 4ix", x: -800, y: -250, font: "40px rubik" },
        { type: "text", content: "2 + 3 = 4", x: -1150, y: -600, font: "40px rubik" },
        { type: "text", content: "Solve for z.", x: -1200, y: -200, font: "40px rubik" },
        { type: "block", x: -3010, y: -550, w: 80, h: 0, collide: false, id: "gate" },
        { type: "block", x: 500, y: -1000, w: 500, h: 2000, slippery: true },
        { type: "block", x: -7000, y: 100, w: 8000, h: 2000 },
        { type: "button", x: -1900, y: 70, w: 100, h: 30, originalHeight: 30, id: "button", id: "button 1" },
        { type: "button", x: -2050, y: 70, w: 100, h: 30, originalHeight: 30, id: "button", id: "button 2" },
        { type: "button", x: -2200, y: 70, w: 100, h: 30, originalHeight: 30, id: "button", id: "button 3" },
        { type: "button", x: -2400, y: 70, w: 100, h: 30, originalHeight: 30, id: "button", color: "rgb(70,180,70)", id: "check button" },
        { type: "text", content: "I hope your math skills are good.", x: -2000, y: -200, font: "40px rubik", id: "math text 1", alpha: 0 },
        { type: "text", content: "You'll need them.", x: -2000, y: -150, font: "40px rubik", id: "math text 2", alpha: 0 },
        { type: "block", x: -3020, y: -2500, w: 100, h: 2000, slippery: true },
        { type: "block", x: -4890, y: -350, w: 2000, h: 1000, slippery: true },
        { type: "block", x: -2950, y: -300, w: 110, h: 1000, slippery: true },
        { type: "block", x: -2900, y: -250, w: 110, h: 1000, slippery: true },
        { type: "block", x: -2850, y: -200, w: 110, h: 1000, slippery: true },
        { type: "block", x: -2800, y: -150, w: 110, h: 1000, slippery: true },
        { type: "block", x: -2750, y: -100, w: 110, h: 1000, slippery: true },
        { type: "block", x: -2700, y: -50, w: 110, h: 1000, slippery: true },
        { type: "block", x: -2650, y: 0, w: 110, h: 1000, slippery: true },
        { type: "block", x: -2600, y: 50, w: 110, h: 1000, slippery: true },
        { type: "text", content: "Yeah, you could've gone through", x: -3400, y: -550, font: "40px rubik", id: "figured out text", alpha: 0 },
        { type: "text", content: "there the entire time...", x: -3400, y: -500, font: "40px rubik", id: "figured out text", alpha: 0 },
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
                var o = game.objects.objects.find(e => e.id == "digit 1");
                o.redTime = 100;
                var o = game.objects.objects.find(e => e.id == "digit 2");
                o.redTime = 100;
                var o = game.objects.objects.find(e => e.id == "digit 3");
                o.redTime = 100;
                var o = game.objects.objects.find(e => e.id == "red circuit");
                o.redTime = 100;
                game.cam.screenshake = 40;
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
                return o.redTime === 0;
            },
            passive: function () {
                var o = game.objects.objects.find(e => e.id == "digit 1");
                o.redTime--;
                o.redTime = Math.max(o.redTime, 0);
                o.color = `rgb(${o.redTime / 50 * 255},0,0)`;
                var o = game.objects.objects.find(e => e.id == "digit 2");
                o.redTime--;
                o.redTime = Math.max(o.redTime, 0);
                o.color = `rgb(${o.redTime / 50 * 255},0,0)`;
                var o = game.objects.objects.find(e => e.id == "digit 3");
                o.redTime--;
                o.redTime = Math.max(o.redTime, 0);
                o.color = `rgb(${o.redTime / 50 * 255},0,0)`;
                var o = game.objects.objects.find(e => e.id == "red circuit");
                o.redTime--;
                o.redTime = Math.max(o.redTime, 0);
                o.alpha = o.redTime / 50 * 0.2;
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
                }
                if (a == 160) {
                    game.cam.screenshake = 50;
                }
                if (a > 200) {
                    game.cam.offset.x = -430 - easeInOut(1 - (a - 200) / 100) * 230;
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
        }
    ],
    viewportBoundary: { x: -3400, y: -200, w: 3400, h: 0 },
    camFunction: function () {
        if (!game.level.triggers.tripped("animation completed")) return false;
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return;
        game.cam.zoom = 1 - easeInOut((-player.x) / 500) * 0.3;
        if (player.x < -3000) {
            game.cam.zoom = 0.7 + easeInOut(1 - (player.x + 3500) / 500) * 0.3;
        }
        var percent = 1 - Math.min(Math.abs(player.x + 1800) / 1000, 1);
        percent = percent * 0.1;
        game.cam.x = game.cam.x * (1 - percent) - 2430 * percent;
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
        { type: "text", content: "Level 7 coming soon...", x: 0, y: 0, font: "40px rubikbold" },
        { type: "text", content: "Level 8 will start in 5 seconds", x: 0, y: 200, font: "40px rubikbold" },
    ],
    triggers: [
    ],
    viewportBoundary: { x: 0, y: 0, w: 0, h: 0 },
    camFunction: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return;
    },
    levelComplete: function () {
        return game.level.levelAnimationTime > 500;
        return false;
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return false;
        return player.x < -3940;
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
        x: -20,
        y: 0
    }
}

levels[7] = {
    objects: [
        { type: "text", content: "This level is", x: 0, y: -230, font: "50px rubik", spawnAnimation: 90, spawnAnimationDuration: 50, room0: true },
        { type: "text", content: "short and simple.", x: 0, y: -160, font: "50px rubik", spawnAnimation: 90, spawnAnimationDuration: 50, room0: true },
        { type: "block", x: -500, y: 200, w: 1000, h: 1000, room0: true },
        { type: "block", x: -1000, y: -1000, w: 500, h: 2000, slippery: true, room0: true },
        { type: "block", x: 500, y: 200, w: 1000, h: 1000, room1: true },
        { type: "block", x: 1400, y: -500, w: 1000, h: 1000, room1: true },
        { type: "block", x: 800, y: -1500, w: 1000, h: 1100, room1: true },
        { type: "block", x: 500, y: -150, w: 700, h: 50, room1: true },
        { type: "block", x: 450, y: -500, w: 100, h: 400, room1: true, alpha: 0 },
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
        { type: "block", x: 500, y: -4500, w: 40, h: 440, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 500, y: -3940, w: 40, h: 440, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 500, y: -4500, w: 1000, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 1460, y: -4500, w: 40, h: 1000, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 500, y: -3540, w: 440, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 1060, y: -3540, w: 440, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 580, y: -4420, w: 40, h: 200, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 580, y: -4180, w: 40, h: 360, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 580, y: -3780, w: 40, h: 200, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 580, y: -4420, w: 200, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 820, y: -4420, w: 360, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 1220, y: -4420, w: 200, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 1380, y: -4420, w: 40, h: 200, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 1380, y: -4180, w: 40, h: 360, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 1380, y: -3780, w: 40, h: 200, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 580, y: -3620, w: 200, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 820, y: -3620, w: 360, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 1220, y: -3620, w: 200, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 660, y: -4340, w: 40, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 660, y: -4260, w: 40, h: 240, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 660, y: -3980, w: 40, h: 240, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 660, y: -3700, w: 40, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 1300, y: -4340, w: 40, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 1300, y: -4260, w: 40, h: 240, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 1300, y: -3980, w: 40, h: 240, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 1300, y: -3700, w: 40, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 740, y: -4340, w: 240, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 1020, y: -4340, w: 240, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 740, y: -3700, w: 240, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 1020, y: -3700, w: 240, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 740, y: -4340, w: 40, h: 120, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 1220, y: -4340, w: 40, h: 120, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 740, y: -3780, w: 40, h: 120, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 1220, y: -3780, w: 40, h: 120, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 660, y: -4260, w: 120, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 1220, y: -4260, w: 120, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 660, y: -3780, w: 120, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 1220, y: -3780, w: 120, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 820, y: -4260, w: 40, h: 120, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 1140, y: -4260, w: 40, h: 120, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 820, y: -3860, w: 40, h: 120, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 1140, y: -3860, w: 40, h: 120, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 740, y: -4180, w: 120, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 1140, y: -4180, w: 120, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 740, y: -3860, w: 120, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 1140, y: -3860, w: 120, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 740, y: -4100, w: 40, h: 200, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 820, y: -4100, w: 40, h: 200, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 1140, y: -4100, w: 40, h: 200, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 1220, y: -4100, w: 40, h: 200, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 900, y: -4260, w: 200, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 900, y: -4180, w: 200, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 900, y: -3860, w: 200, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 900, y: -3780, w: 200, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 900, y: -4100, w: 200, h: 200, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 900, y: -3500, w: 40, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 1060, y: -3500, w: 40, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 460, y: -4100, w: 40, h: 40, room5: true, collide: false, pacmanCollide: true },
        { type: "block", x: 460, y: -3940, w: 40, h: 40, room5: true, collide: false, pacmanCollide: true },
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
    ],
    triggers: [
        {
            name: "room 0",
            check: function () {
                //return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.x < 480 && player.y > -480;
            },
            trip: function () {
                console.log("room 0");
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
                return player.x > 480 || player.y < -480;
            },
            passive: function () {
                game.cam.x = 0;
                game.backgroundOpacity = 1;
            }
        },
        {
            name: "room 1",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                if (player.y < -480) return false;
                if (player.x > 480) return true;
            },
            trip: function () {
                console.log("room 1");
                for (var o of game.objects.objects) {
                    if (o.room1) {
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
                if (player.y < -480) return true;
                if (player.x < 480) return true;
            },
            passive: function () {
                game.cam.x = 1000;
                game.backgroundOpacity = 1;
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
                console.log("room 2");
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
                console.log("room 3");
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
                    if (o.x == 500) o.x += 40;
                    if (o.x == 1460) o.x -= 40;
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
                console.log("cube room");
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
                console.log("room 4");
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
                console.log("room 5");
                for (var o of game.objects.objects) {
                    if (o.room5) {
                        o.alpha = 1;
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

                //var o = game.objects.objects.find(e => e.type == "player");
                //o.delete = true;
                //o.noDeathEffect = true;

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

                for (var o of game.objects.objects) {
                    if (o.type == "pacman dot") o.delete = true;
                }
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
                        game.objects.objects.splice(game.objects.objects.length - 1, 0, dot);
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
            name: "red cube",
            check: function () {
                if (!game.level.triggers.tripped("room 5")) return false;
                if (!game.objects.objects.find(e => e.type == "pacman dot" && e.clue && !e.collected)) return true;
                return false;
            },
            trip: function () {
                console.log("red cube");
                for (var o of game.objects.objects) {
                    if (!o.type == "pacman dot") continue;
                    if (o.clue) continue;
                    o.alpha = 1;
                    o.collected = false;
                    o.red = true;
                }
            },
            stop: function () {
            },
            untrip: function () {
            },
            passive: function () {
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
                console.log("room 6");
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
                        o.y += 2.5;
                    }
                    if (player.y < o.y + o.h / 2) {
                        o.y -= 2.5;
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
                console.log("room 7");
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
                console.log("secret circles room");
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
                console.log("room 8");
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
        x: 0,
        y: 0
    },
    spawnPoint: {
        x: -20,
        y: 0
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
        { type: "text", content: "Levels 9 & 10 coming soon...", x: 0, y: 0, font: "40px rubikbold" },
    ],
    triggers: [
    ],
    viewportBoundary: { x: 0, y: 0, w: 0, h: 0 },
    camFunction: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return;
    },
    levelComplete: function () {
        return false;
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return false;
        return player.x < -3940;
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
        x: -20,
        y: 0
    }
}

levels[9] = {
    objects: [
    ],
    triggers: [
    ],
    viewportBoundary: { x: 0, y: 0, w: 0, h: 0 },
    camFunction: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return;
    },
    levelComplete: function () {
        return false;
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return false;
        return player.x < -3940;
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
        x: -20,
        y: 0
    }
}