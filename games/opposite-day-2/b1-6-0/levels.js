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
        { type: "text", content: "Not many people find this.", x: 1000, y: 1000, font: "34px rubik" },
        { type: "text", content: "This way's faster.", x: -1100, y: 200, font: "34px rubik" },
        { type: "lava", x: 660, y: 500, w: 800, h: 350 },
        { type: "block", x: 600, y: 100, w: 800, h: 2000, id: "false block" },
        { type: "block", x: 600, y: 100, w: 800, h: 50, id: "bridge", alpha: 0, collide: false },
        { type: "block", x: -2000, y: 100, w: 1600, h: 200, id: "shortcut passage" },
        { type: "clue", x: -550, y: 150, collide: false, proximity: 1, radius: 0, id: "shortcut passage clue", down: true, color: { r: 0, g: 200, b: 50 } },
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
        { type: "block", x: 500, y: 300, w: 200, h: 500, collide: false, id: "secret passage" },
        { type: "block", x: 500, y: 300, w: 200, h: 1000, collide: false, alpha: 0.15 },
        { type: "block", x: 1500, y: 100, w: 200, h: 1000, collide: false, alpha: 0.15 },
        { type: "block", x: 700, y: 500, w: 800, h: 1000, collide: false, alpha: 0.15 },
        { type: "clue", x: 640, y: 400, collide: false, proximity: 50, radius: 75, id: "secret passage clue" },
        { type: "cube", x: -500, y: -400, collide: false, collected: false, red: true, alpha: 0 },
        { type: "block", x: -1900, y: -450, w: 100, h: 300, slippery: true },
        { type: "block", x: -1900, y: -150, w: 100, h: 100 },
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
                if (!player) return false;
                if (player.x < 0 && player.y < 100) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "secret passage");
                o.alpha = 1;
                o.decay = 0.1;
                var o = game.objects.objects.find(e => e.id == "secret passage clue");
                o.activated = true;
                var o = game.objects.objects.find(e => e.id == "bridge");
                o.collide = true;
                game.cam.offset = { x: 0, y: 0 };
                game.cam.viewportBoundary.w += 200;
            },
            passive: function () {
                var o = game.objects.objects.find(e => e.id == "bridge");
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                o.alpha = Math.min(1, Math.max(0, 1 - (player.y - 60) / 50));

                if (player.y < 100) {
                    var a = easeInOut((player.x - 200) / 400);
                    game.cam.y = game.cam.y * a - 200 * (1 - a);
                }
            },
            untrip: function () {
                var o = game.objects.objects.find(e => e.id == "secret passage");
                o.alpha = 0;
                o.decay = -0.1;
                var o = game.objects.objects.find(e => e.id == "secret passage clue");
                o.activated = false;
                var o = game.objects.objects.find(e => e.id == "bridge");
                o.decay = 0.1;
                o.alpha = 1;
                o.collide = false;
                game.cam.offset = { x: 0, y: -200 };
                game.cam.viewportBoundary.w -= 200;
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
                if (!player) return false;
                var dist = distTo(player.x, player.y, -550 - 20, 60);
                if (dist < 50 && game.input.down) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "shortcut passage");
                o.collide = false;
                o.alpha = 1;
                o.decay = 0.1;
                var o = game.objects.objects.find(e => e.id == "shortcut passage clue");
                o.activated = true;
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                if (player.y > 60) {
                    player.xmove *= 1.05;
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
                var dist = distTo(o.x, o.y, player.x, player.y);
                if (dist > 40) return false;
                if (game.input.upStart == 0 || game.input.upStart > 10) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.y > -100) return true;
                return false;
            },
            trip: function () {
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
        if (!game.level.triggers.tripped("secret passage")) {
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
        { type: "text", content: "How smart of you.", x: -925, y: 115, font: "40px rubik", alpha: 0, id: "jump1" },
        { type: "text", content: "You think it works the second time?", x: -1200, y: 0, font: "40px rubik", alpha: 0, id: "jump2" },
        { type: "text", content: "That was embarrassing.", x: -1200, y: 300, font: "40px rubik", alpha: 0, id: "jump3" },
        { type: "text", content: "I'm stunned at your level of skill...", x: 0, y: -250, font: "40px rubik", spawnAnimation: 120, spawnAnimationDuration: 50 },
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
        { type: "lava", drawType: "lava glass", x: -600, y: -2900, w: 25, h: 3000, alpha: 0, collide: false, id: "secret passage" },
        { type: "text", content: "This should be easy for you.", font: "40px Rubik", x: 0, y: -470, alpha: 0, collide: false, id: "secret passage text" },
        { type: "cube", x: -87.5, y: -1100, collide: false, collected: false },
        { type: "clue", x: -750, y: -50, collide: false, proximity: 0, radius: 0, alpha: 0, id: "shortcut clue", air: true, color: { r: 0, g: 200, b: 50 } },
        { type: "text", content: "Wheeeeeeeeeeeeeeee!!!", x: -1200, y: -250, font: "40px rubik", alpha: 0, id: "shortcut text" },
        { type: "text", content: "Admit it, that one got you.", x: -2000, y: 200, font: "40px rubik", alpha: 0, id: "figured out text" },
        { type: "block", x: -600, y: 300, w: 200, h: 2000, id: "red cube cover" },
        { type: "block", x: -1850, y: 425, w: 1400, h: 2000, id: "red cube cover" },
        { type: "clue", x: -560, y: 375, collide: false, proximity: 100, radius: 50, alpha: 0, id: "red cube clue", color: { r: 255, g: 100, b: 100 } },
        { type: "block", x: -1850, y: 2000, w: 1400, h: 2000, alpha: 0, collide: false, redCube: true },
        { type: "block", x: -1800, y: 500, w: 100, h: 5000, alpha: 0, collide: false, redCube: true },
        { type: "block", x: -650, y: 500, w: 50, h: 1425, alpha: 0, collide: false, redCube: true },
        { type: "lava", x: -1200, y: 1700, w: 550, h: 50, alpha: 0, collide: false, redCube: true },
        { type: "lava", x: -1700, y: 1700, w: 50, h: 300, alpha: 0, collide: false, redCube: true },
        { type: "block", x: -1200, y: 1830, w: 200, h: 50, alpha: 0, collide: false, redCube: true, slippery: true },
        { type: "lava", x: -1750, y: 400, w: 1150, h: 1000, id: "platform4" }
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
                if (distTo(player.x + player.w / 2, player.y + player.h / 2, o.x, o.y) < 40) return true;
                return false;
            },
            trip: function () {
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
                if (player.x < -600) return false;
                if (player.y < 200) return false;
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.activated = true;
                for (var o of game.objects.objects.filter(e => e.redCube)) {
                    o.alpha = 1;
                    o.collide = true;
                }
                for (var o of game.objects.objects.filter(e => e.id == "red cube cover")) {
                    o.alpha = 1;
                    o.decay = 0.1;
                }
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
        { type: "text", content: "The Mountain of Persistence!", x: 0, y: -180, font: "40px rubik", spawnAnimation: 250, spawnAnimationDuration: 50, id: "first text" },
        { type: "arrow", x: 0, y: -100, spawnAnimation: 250, spawnAnimationDuration: 50, angle: 180, lineWidth: 8, totalWidth: 130, height: 20, id: "first text" },
        { type: "text", content: "Sorry if that took you a while...", x: 0, y: -180, font: "40px rubik", alpha: 0, id: "second text" },
        { type: "text", content: "Fast but dangerous.", x: -500, y: 250, font: "35px rubik" },
        { type: "block", x: -700, y: 100, w: 3000, h: 100 },
        { type: "block", x: -5000, y: 300, w: 10000, h: 5000 },
        { type: "block", x: 500, y: -1000, w: 4000, h: 2000, id: "barrier", alpha: 0, slippery: true },
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
        { type: "block", x: -5010, y: -3700, w: 510, h: 6000, collide: false, fake: true },
        { type: "block", x: -2710, y: -1500, w: 410, h: 2000, alpha: 0, hidden: true },
        { type: "cube", x: -2400, y: -1600, collide: false, collected: false, alpha: 0, hidden: true },
        { type: "block", x: -3110, y: -3000, w: 600, h: 4000, alpha: 0, hidden: true, slippery: true },
        { type: "lava", x: -300, y: 290, w: 100, h: 1010 },
        { type: "lava", x: 0, y: 290, w: 100, h: 1010 },
        { type: "lava", x: 320, y: 290, w: 100, h: 1010 },
        { type: "lava", x: 640, y: 290, w: 100, h: 1010 },
        { type: "block", x: -900, y: 100, w: 10000, h: 2000, id: "shortcut passage" },
        { type: "clue", x: -750, y: 150, collide: false, proximity: 1, radius: 0, id: "shortcut passage clue", down: true, color: { r: 0, g: 200, b: 50 } },
        { type: "block", x: 900, y: -200, w: 25, h: 150, id: "cube wall jump", alpha: 0 },
        { type: "block", x: 900, y: -500, w: 25, h: 300, id: "cube wall jump", alpha: 0, slippery: true },
        { type: "clue", x: 650, y: -165, collide: false, alpha: 0, proximity: 100, radius: 0, id: "cube clue", air: true },
        { type: "arrow", x: 650, y: -85, collide: false, alpha: 0, angle: 180, lineWidth: 8, totalWidth: 130, height: 20, id: "cube arrow" },
        { type: "text", content: "Second time's the charm", x: 650, y: -235, font: "35px rubik", alpha: 0, id: "cube text" }
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
                for (var o of game.objects.objects.filter(e => e.id == "first text")) {
                    o.alpha = 0;
                }
                for (var o of game.objects.objects.filter(e => e.id == "second text")) {
                    o.alpha = 1;
                }
                var o = game.objects.objects.find(e => e.id == "shortcut passage clue");
                o.alpha = 0;
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
            name: "shortcut",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (game.level.triggers.tripped("first mountain illusion") && !game.level.triggers.tripped("cube")) return false;
                var dist = distTo(player.x, player.y, -780 - 20, 60);
                if (dist < 50 && game.input.down) return true;
                return false;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                if (player.y <= 60) return true;
                return false;
            },
            trip: function () {
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
                    player.xmove *= 1.05;
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
                var o = game.objects.objects.find(e => e.id == "cube clue");
                o.activated = true;
                var o = game.objects.objects.find(e => e.id == "cube arrow");
                o.decay = -0.1;
                var o = game.objects.objects.find(e => e.id == "cube text");
                o.decay = -0.1;
                var o = game.objects.objects.find(e => e.id == "shortcut passage clue");
                o.alpha = 1;
            }
        }
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
        { type: "block", x: 1500, y: 100, w: 1000, h: 2760, slippery: true, blue: true },
        { type: "block", x: 1540, y: 2850, w: 500, h: 200, blue: true },
        { type: "block", x: 1500, y: 2859, w: 1000, h: 1000, id: "push block", blue: true },
        { type: "block", x: 400, y: 2900, w: 2000, h: 3000, blue: true },
        { type: "text", content: "These walls are", x: 1250, y: 2500, font: "40px rubik", id: "fall in pit text", alpha: 0 },
        { type: "text", content: "your prison.", x: 1250, y: 2550, font: "40px rubik", id: "fall in pit text 2", alpha: 0 },
        { type: "block", x: 1000, y: 100, w: 500, h: 2800, collide: false, alpha: 0, eyeCollide: true },
        { type: "block", x: -600, y: 3000, w: 5000, h: 2800, collide: false, alpha: 0, eyeCollide: true },
        { type: "block", x: -600, y: 0, w: 5000, h: 100, collide: false, alpha: 0, eyeCollide: true },
        { type: "block", x: 200, y: 100, w: 100, h: 3000, collide: false, alpha: 0, eyeCollide: true },
        { type: "block", x: 2400, y: 100, w: 100, h: 3000, collide: false, alpha: 0, eyeCollide: true },
        { type: "block", x: 1700, y: 2600, w: 100, h: 100, collide: false, eyeCollide: true },
        { type: "block", x: 2130, y: 2500, w: 100, h: 100, collide: false, eyeCollide: true },
        { type: "block", x: 1650, y: 2100, w: 100, h: 100, collide: false, eyeCollide: true },
        { type: "block", x: 1950, y: 2000, w: 250, h: 250, collide: false, eyeCollide: true },
        { type: "block", x: 2000, y: 1700, w: 100, h: 100, collide: false, eyeCollide: true },
        { type: "block", x: 1750, y: 1500, w: 100, h: 100, collide: false, eyeCollide: true },
        { type: "block", x: 2150, y: 1100, w: 100, h: 100, collide: false, eyeCollide: true },
        { type: "block", x: 1700, y: 1000, w: 300, h: 300, collide: false, eyeCollide: true },
        { type: "block", x: 1800, y: 550, w: 1000, h: 200, collide: false, eyeCollide: true },
        { type: "cube", x: 400, y: 2900, collide: false, collected: false, alpha: 0, hidden: true, onBlue: true },
        { type: "clue", x: 1250, y: 2950, collide: false, blue: true, collected: false, alpha: 0, hidden: true },
        { type: "block", x: 500, y: 1800, w: 500, h: 1100, collide: false, eyeCollide: true, alpha: 0, hidden: true, drawType: "glass" },
        { type: "block", x: 300, y: 1700, w: 200, h: 1100, collide: false, eyeCollide: true, alpha: 0, hidden: true, drawType: "glass" },
        { type: "clue", x: 1290, y: 50, collide: false, id: "shortcut clue", air: true, alpha: 0, color: { r: 0, g: 200, b: 50 }, down: true, angle: 180, radius: 0, proximity: 1 },
        { type: "text", content: "Good luck.", x: 1290, y: -50, font: "40px rubik", alpha: 0, shortcut: true },
        { type: "lava", x: 1400, y: 75, w: 5000, h: 25, collide: false, alpha: 0, shortcut: true },
        { type: "unstable", x: 1400, y: 25, w: 100, h: 50, collide: false, alpha: 0, shortcut: true },
        { type: "unstable", x: 1700, y: 25, w: 50, h: 50, collide: false, alpha: 0, shortcut: true },
        { type: "unstable", x: 1600, y: -180, w: 50, h: 50, collide: false, alpha: 0, shortcut: true },
        { type: "unstable", x: 2100, y: -230, w: 50, h: 50, collide: false, alpha: 0, shortcut: true }
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
                if (o.y < 200) o.xmove *= 0.95;
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
                o2.delete = true;
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
            stop: function() {
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
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.activated = true;
                for (var o of game.objects.objects.filter(e => e.shortcut)) {
                    o.decay = -0.1;
                    o.collide = true;
                }
                var player = game.objects.objects.find(e => e.type == "player");
                player.ymove = -10;
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
        { type: "block", x: -1000, y: -1000, w: 500, h: 2000 },
        { type: "block", x: -1000, y: 100, w: 3000, h: 2000 },
        { type: "button", x: -50, y: 70, w: 100, h: 30, originalHeight: 30, pushBack: false, id: "button" },
        { type: "block", x: 500, y: -1000, w: 50, h: 2000, id: "barrier" },
        { type: "lava", x: -3550, y: -1000, w: 3000, h: 1100, id: "lava chase" }
    ],
    triggers: [
        {
            name: "button",
            check: function () {
                var o = game.objects.objects.find(e => e.id == "button");
                return o.pressed;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "barrier");
                o.delete = true;
                var o = game.objects.objects.find(e => e.id == "run text");
                o.spawnAnimation = 50;
                o.alpha = 1;
                game.cam.viewportBoundary.w += 1000;
            },
            passive: function () {
                var o = game.objects.objects.find(e => e.id == "lava chase");
                o.x++;
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

levels[5] = {
    objects: [
        { type: "block", x: -1000, y: 100, w: 3000, h: 2000 },
        { type: "block", x: 200, y: -1000, w: 3000, h: 2000 },
        { type: "block", x: -200, y: -1200, w: 100, h: 1000 }
    ],
    triggers: [
    ],
    viewportBoundary: { x: 0, y: -10000, w: 0, h: 20000 },
    camFunction: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return;
    },
    levelComplete: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return false;
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
        x: 0,
        y: 0
    }
}