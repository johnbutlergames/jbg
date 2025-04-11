var levels = [];
levels[0] = {
    objects: [
        { type: "text", content: "It's Opposite Day!", x: 0, y: -600, font: "80px rubikbold", spawnAnimation: 80, spawnAnimationDuration: 50, collide: false },
        { type: "text", content: "(again)", x: 0, y: -520, font: "50px rubik", spawnAnimation: 150, spawnAnimationDuration: 50, collide: false },
        { type: "image", image: "arrows", x: -200, y: -420, w: 140, h: 100, spawnAnimation: 200, spawnAnimationDuration: 50, collide: false },
        { type: "text", content: "or", x: 0, y: -370, font: "50px rubik", spawnAnimation: 210, spawnAnimationDuration: 50, collide: false },
        { type: "image", image: "wasd", x: 60, y: -420, w: 140, h: 100, spawnAnimation: 220, spawnAnimationDuration: 50, collide: false },
        { type: "text", content: "Go this way to win", x: 0, y: -200, font: "60px rubik", spawnAnimation: 300, spawnAnimationDuration: 50, collide: false },
        { type: "text", content: "You sure figured", x: -1100, y: -200, font: "40px rubik", alpha: 0, collide: false, id: "figured text 1" },
        { type: "text", content: "that out quick...", x: -1100, y: -150, font: "40px rubik", alpha: 0, collide: false, id: "figured text 2" },
        { type: "arrow", x: 0, y: -100, spawnAnimation: 300, spawnAnimationDuration: 50, collide: false },
        { type: "text", content: "It's Opposite Day by the way...", x: 1000, y: 440, font: "34px rubikbold" },
        { type: "text", content: "Not many people find this.", x: 1000, y: 1000, font: "34px rubik" },
        { type: "text", content: "This way's faster.", x: -1100, y: 200, font: "34px rubik" },
        { type: "lava", x: 660, y: 500, w: 800, h: 350 },
        { type: "block", x: 600, y: 100, w: 800, h: 2000, id: "false block" },
        { type: "block", x: 600, y: 100, w: 800, h: 50, id: "bridge", alpha: 0, collide: false },
        { type: "block", x: -2000, y: 100, w: 1600, h: 200, id: "shortcut passage" },
        { type: "clue", x: -550, y: 150, collide: false, proximity: 1, radius: 0, id: "shortcut passage clue" },
        { type: "block", x: -2000, y: 100, w: 1400, h: 50 },
        { type: "block", x: -2000, y: 250, w: 1600, h: 50 },
        { type: "block", x: -500, y: 100, w: 1200, h: 250 },
        { type: "block", x: -2000, y: 300, w: 2500, h: 1300 },
        { type: "block", x: 600, y: 450, w: 100, h: 500 },
        { type: "block", x: 600, y: 850, w: 800, h: 100 },
        { type: "block", x: 400, y: 1050, w: 1300, h: 1000 },
        { type: "block", x: 1650, y: -1000, w: 100, h: 3000 },
        { type: "block", x: 1300, y: 100, w: 200, h: 850 },
        { type: "cube", x: 1400, y: 0, collide: false, collected: false },
        { type: "block", x: 500, y: 300, w: 200, h: 500, collide: false, id: "secret passage" },
        { type: "block", x: 500, y: 300, w: 200, h: 1000, collide: false, alpha: 0.15 },
        { type: "block", x: 1500, y: 100, w: 200, h: 1000, collide: false, alpha: 0.15 },
        { type: "block", x: 700, y: 500, w: 800, h: 1000, collide: false, alpha: 0.15 },
        { type: "clue", x: 640, y: 400, collide: false, proximity: 50, radius: 75, id: "secret passage clue" }
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
                if (!o.alpha) o.alpha = 1;
                o.alpha = Math.min(Math.max(1 - easeInOut((player.y - 60) / 170), 0.15), o.alpha);
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
        { type: "text", content: "How smart of you.", x: -925, y: 115, font: "40px rubik", alpha: 0, collide: false, id: "jump1" },
        { type: "text", content: "You think it works the second time?", x: -1200, y: 0, font: "40px rubik", alpha: 0, collide: false, id: "jump2" },
        { type: "text", content: "That was embarrassing.", x: -1200, y: 300, font: "40px rubik", alpha: 0, collide: false, id: "jump3" },
        { type: "text", content: "I'm stunned at your level of skill...", x: 0, y: -250, font: "40px rubik", spawnAnimation: 120, spawnAnimationDuration: 50, collide: false },
        { type: "block", x: 500, y: -1000, w: 2000, h: 3000 },
        { type: "block", x: -600, y: 100, w: 2000, h: 2000 },
        { type: "block", x: -3250, y: 100, w: 1500, h: 2000, id: "platform3" },
        { type: "block", x: -1050, y: 100, w: 200, h: 25, id: "platform1" },
        { type: "block", x: -1500, y: 100, w: 200, h: 25, id: "platform2" },
        { type: "block", x: -1850, y: 425, w: 1350, h: 1000 },
        { type: "lava", x: -1750, y: 400, w: 1150, h: 1000, id: "platform4" },
        { type: "clue", x: 260, y: -180, collide: false, proximity: 100, radius: 0, id: "secret passage clue", air: true },
        { type: "block", drawType: "glass", x: 150, y: -100, w: 200, h: 25, alpha: 0, collide: false, id: "secret passage" },
        { type: "block", drawType: "glass", x: -300, y: -150, w: 100, h: 25, alpha: 0, collide: false, id: "secret passage" },
        { type: "block", drawType: "glass", x: -500, y: -320, w: 100, h: 25, alpha: 0, collide: false, id: "secret passage" },
        { type: "block", drawType: "glass", x: 0, y: -400, w: 50, h: 25, alpha: 0, collide: false, id: "secret passage" },
        { type: "block", drawType: "glass", x: 100, y: -570, w: 50, h: 25, alpha: 0, collide: false, id: "secret passage" },
        { type: "block", drawType: "glass", x: -300, y: -630, w: 50, h: 25, alpha: 0, collide: false, id: "secret passage" },
        { type: "block", drawType: "glass", x: -500, y: -800, w: 25, h: 25, alpha: 0, collide: false, id: "secret passage" },
        { type: "block", drawType: "glass", x: -100, y: -900, w: 25, h: 25, alpha: 0, collide: false, id: "secret passage" },
        { type: "lava", drawType: "lava glass", x: -600, y: -2900, w: 25, h: 3000, alpha: 0, collide: false, id: "secret passage" },
        { type: "text", content: "This should be easy for you.", font: "40px Rubik", x: 0, y: -470, alpha: 0, collide: false, id: "secret passage text" },
        { type: "cube", x: -87.5, y: -1100, collide: false, collected: false },
        { type: "clue", x: -750, y: 150, collide: false, proximity: 0, radius: 0, alpha: 0, id: "shortcut clue", air: true },
        { type: "text", content: "Wheeeeeeeeeeeeeeee!!!", x: -1200, y: -250, font: "40px rubik", alpha: 0, collide: false, id: "shortcut text" }
    ],
    triggers: [
        {
            name: "jump first",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (game.level.triggers.tripped("fall first")) return false;
                if (player.x > -600) return false;
                if (player.ymove >= 0) return false;
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
                o.x = -1050 + 225 * easeInOut(o.time / 50);
                var o = game.objects.objects.find(e => e.id == "platform2");
                o.time++;
                o.x = -1500 + 450 * easeInOut(o.time / 50);
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
                if(game.input.upStart!==1) return false;
                if (distTo(player.x + player.w / 2, player.y + player.h / 2, o.x, o.y) < 30) return true;
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
                //player.ymove = -1;
            }
        }
    ],
    viewportBoundary: { x: -1700, y: -10000, w: 1700, h: 20000 },
    camFunction: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return;
        if (game.level.triggers.tripped("secret passage")) return;
        var p = easeInOut(1 - (player.x + 600) / 400);
        var p2 = easeInOut(1 - (player.x + 400) / 400);
        if (p != 0) {
            game.cam.x = (player.x + player.w / 2) * (1 - p) - 1175 * p;
        }
        if (p2 != 0) {
            game.cam.zoom = 1 * (1 - p2) + 0.7 * p2;
        }
    },
    levelComplete: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return false;
        return player.x < -1940;
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
        { type: "text", content: "Behold!", x: 0, y: -250, font: "40px rubik", spawnAnimation: 120, spawnAnimationDuration: 50, collide: false },
        { type: "text", content: "The Mountain of Persistence!", x: 0, y: -180, font: "40px rubik", spawnAnimation: 250, spawnAnimationDuration: 50, collide: false },
        { type: "arrow", x: 0, y: -100, spawnAnimation: 250, spawnAnimationDuration: 50, collide: false, angle: 180, lineWidth: 8, totalWidth: 130, height: 20 },
        { type: "block", x: -2000, y: 100, w: 4000, h: 2000 }
    ],
    triggers: [
    ],
    viewportBoundary: { x: -1300, y: -10000, w: 2300, h: 20000 },
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
        x: -20,
        y: 0
    }
}