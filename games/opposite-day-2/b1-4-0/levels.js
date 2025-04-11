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
        { type: "block", x: 500, y: 300, w: 200, h: 1000, collide: false, alpha: 0.15},
        { type: "block", x: 1500, y: 100, w: 200, h: 1000, collide: false, alpha: 0.15},
        { type: "block", x: 700, y: 500, w: 800, h: 1000, collide: false, alpha: 0.15},
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
                o.decay = -0.1;
                var o = game.objects.objects.find(e => e.id == "figured text 2");
                o.decay = -0.1;
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
                if(!o.alpha) o.alpha = 1;
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
    levelComplete: function() {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return false;
        if(player.x < -1840) return true;
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
        { type: "block", x: -2000, y: 100, w: 4000, h: 50 },
    ],
    triggers: [
    ],
    viewportBoundary: { x: -1300, y: -10000, w: 2300, h: 20000 },
    camFunction: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return;
    },
    levelComplete: function() {
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