levels[8] = {
    objects: [
        { type: "block", x: -6000, y: 100, w: 12680, h: 2000, id: "ground" },
        { type: "block", x: 501, y: -1000, w: 1000, h: 3000, slippery: true, id: "right wall" },
        { type: "unstable", x: 500, y: -1000, w: 500, h: 2000, decayValue: 0.1, id: "red cube wall" },
        { type: "unstable", x: 50, y: -250, w: 50, h: 50, decayValue: 0.1, id: "red cube block", alpha: 0 },
        { type: "clue", x: 350, y: -370, proximity: 1, radius: 0, id: "red cube clue", air: true, color: { r: 255, g: 100, b: 100 }, down: true, angle: 180 },
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
        { type: "clue", x: -1500, y: -150, proximity: 1, radius: 0, id: "blue cube clue", alpha: 0 },
        { type: "text", content: "Who said that door", x: -1200, y: -175, font: "40px rubik", id: "blue cube text", alpha: 0 },
        { type: "text", content: "was still locked?", x: -1200, y: -125, font: "40px rubik", id: "blue cube text", alpha: 0 },
        { type: "cube", x: -900, y: -70, collide: false, collected: false, id: "blue cube", alpha: 0, noCollect: true },
        { type: "clue", x: -700, y: 140, proximity: 1, radius: 0, id: "pre shortcut clue", down: true, color: { r: 0, g: 230, b: 0 } },
        { type: "clue", x: -1500, y: -80, proximity: 1, radius: 0, id: "shortcut clue", air: true, down: true, color: { r: 0, g: 230, b: 0 }, angle: 180, alpha: 0 },
        { type: "portal", x: -1450, y: -200, length: 100, angle: 180, pair: 1, portalNumber: 0, color: { r: 0, g: 255, b: 0 }, direction: "in", id: "portal1", alpha: 0 },
        { type: "portal", drawType: "portal", x: 0, y: -200, length: 100, angle: 180, pair: 0, color: { r: 0, g: 255, b: 0 }, direction: "out", id: "portal2", alpha: 0 },
        { type: "text", content: "No time for boss fights?", x: -3140, y: -150, font: "40px rubik", id: "shortcut text", alpha: 0 },
        { type: "spike", x: -800, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -840, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -880, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -920, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -960, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -1080, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -1200, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -1240, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -1280, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -1320, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -1360, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -1400, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -1440, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -1480, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -1570, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -1610, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -2670, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -2710, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -2750, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -2850, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -2890, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -2930, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -2970, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -3010, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -3095, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -3180, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -3265, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -3350, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "spike", x: -3435, y: 60, w: 40, h: 40, alpha: 0, collide: false, id: "shortcut spike" },
        { type: "block", x: -2000, y: -2000, w: 4000, h: 4000, collide: false, alpha: 0, b: true, noCollide: true, show: true },
        { type: "block", x: -1500, y: -2000, w: 1000, h: 4000, collide: false, alpha: 0, b: true, slippery: true, show: true, id: "bossfight left wall" },
        { type: "block", x: 500, y: -2000, w: 1000, h: 4000, collide: false, alpha: 0, b: true, slippery: true, show: true, id: "bossfight right wall" },
        { type: "boss part", x: 0, y: 0, b: true, alpha: 0, id: "boss part 1" },
        { type: "boss part", x: 0, y: 0, b: true, alpha: 0, id: "boss part 2" },
        { type: "boss part", x: 0, y: 0, b: true, alpha: 0, id: "boss part 3" },
        { type: "boss part", x: 0, y: 0, b: true, alpha: 0, id: "boss part 4" },
        { type: "boss part", x: 0, y: 0, b: true, alpha: 0, id: "boss part 5" },
        { type: "boss part", x: 0, y: 0, b: true, alpha: 0, id: "boss part 6" },
        { type: "boss part", x: 0, y: 0, b: true, alpha: 0, id: "boss part 7" },
        { type: "boss part", x: 0, y: 0, b: true, alpha: 0, id: "boss part 8" },
        { type: "boss part", x: 0, y: 0, b: true, alpha: 0, id: "boss part 9" },
        { type: "block", color: "white", x: -2000, y: 100, w: 4000, h: 4000, collide: false, alpha: 0, b: true, show: true },
        { type: "text", content: "johnbutlergames", x: 0, y: -300, font: "60px rubik", color: "white", id: "text0", alpha: 0, b: true },
        { type: "text", content: "-  unpresents  -", x: 0, y: -220, font: "40px rubik", color: "white", id: "text1", alpha: 0, b: true },
        { type: "text", content: "Not The Real Bossfight", x: 0, y: -280, font: "bold 60px rubik", color: "white", id: "text2", alpha: 0, b: true }
    ],
    triggers: [
        {
            name: "text 1",
            check: function () {
                if (game.level.triggers.tripped("red cube")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x < 0) return true;
                return false;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "text 1");
                o.alpha = 0;
                o.decay = -0.1;
                var o = game.objects.objects.find(e => e.id == "red cube wall");
                o.collide = false;
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.alpha = 1;
                o.decay = 0.1;
                var o = game.objects.objects.find(e => e.id == "red cube block");
                o.alpha = Math.min(o.alpha, 1);
                o.decay = 0.1;
                o.touched = false;
                o.collide = true;
            }
        },
        {
            name: "text 2",
            check: function () {
                if (game.level.triggers.tripped("red cube")) return false;
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
                if (game.level.triggers.tripped("red cube")) return false;
                if (game.level.triggers.tripped("pre shortcut")) return false;
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
            name: "animate hearts",
            check: function () {
                return game.level.triggers.tripped("animation") && game.level.levelAnimationTime > 310;
            },
            passive: function () {
                for (var n = 0; n < 5; n++) {
                    var bossHeart = game.objects.objects.find(e => e.id == "boss heart " + n);
                    var boss = game.objects.objects.find(e => e.type == "boss");
                    bossHeart.y = boss.y + boss.h + 20;
                    bossHeart.x = boss.x + boss.w / 2 + (n - 2.5) * 50;
                }
                for (var n = 0; n < 5; n++) {
                    var playerHeart = game.objects.objects.find(e => e.id == "player heart " + n);
                    var player = game.objects.objects.find(e => e.type == "player");
                    if (!player) break;
                    playerHeart.scale = 0.7;
                    playerHeart.y = player.y - 40;
                    playerHeart.x = player.x + player.w / 2 + (n - 2.5) * 50 * 0.7;
                }
            }
        },
        {
            name: "animation",
            check: function () {
                if (game.level.triggers.tripped("red cube")) return false;
                if (game.level.triggers.tripped("animation completed")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x > -1600) return false;
                if (player.x < -2650) return false;
                return true;
            },
            stop: function () {
                return game.level.levelAnimationTime > 350;
            },
            trip: function () {
                game.background.effect.end("green");
                game.level.playerControlDelay = 350;
                game.level.levelAnimationTime = 0;
                var o = game.objects.objects.find(e => e.id == "pre shortcut clue");
                o.alpha = Math.min(o.alpha, 1);
                o.decay = 0.1;
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.alpha = Math.min(o.alpha, 1);
                o.decay = 0.1;
                var o = game.objects.objects.find(e => e.id == "portal1");
                o.alpha = Math.min(o.alpha, 1);
                o.decay = 0.1;
                var o = game.objects.objects.find(e => e.id == "portal2");
                o.alpha = Math.min(o.alpha, 1);
                o.decay = 0.1;
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
                            y: -650,
                            w: 40,
                            h: 40,
                            color: "blue",
                            full: true,
                            id: "player heart " + n,
                            alpha: 0,
                            collide: false
                        }
                        game.objects.objects.push(o);
                        var o = {
                            type: "heart",
                            x: -2600 + n * 50,
                            y: -600,
                            w: 40,
                            h: 40,
                            color: "black",
                            full: true,
                            id: "boss heart " + n,
                            alpha: 0,
                            decay: -0.05,
                            collide: false
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
                if (!o) return false;
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
                    o2.blink = 100;
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
                if (!game.level.triggers.tripped("animation completed") && !game.level.triggers.tripped("animation")) return false;
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
                if (!game.level.playerInvincible) game.level.playerControlDelay = 1000;
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
                        if (!game.level.playerInvincible) player.delete = true;
                        if (!game.level.playerInvincible) game.soundEffects.death();
                        game.soundEffects.bossDeathSlam();
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
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                o.alpha = 0;
                o.decay = -0.1;
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
        },
        {
            name: "blue cube",
            check: function () {
                if (!game.level.triggers.tripped("player dead")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.x > -1530;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return player.x < -1530;
            },
            trip: function () {
                game.level.discoverBlueCube();
                game.background.effect.start("blue");
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                o.activated = true;
                for (var o of game.objects.objects.filter(e => e.id == "blue cube text")) {
                    o.alpha = 0;
                    o.decay = -0.1;
                }
                var o = game.objects.objects.find(e => e.id == "blue cube");
                o.alpha = 0;
                o.decay = -0.1;
                o.noCollect = false;
            },
            untrip: function () {
                game.background.effect.end("blue");
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                o.activated = false;
                for (var o of game.objects.objects.filter(e => e.id == "blue cube text")) {
                    o.alpha = 1;
                    o.decay = 0.1;
                }
                var o = game.objects.objects.find(e => e.id == "blue cube");
                o.alpha = 1;
                o.decay = 0.1;
                o.noCollect = true;
            }
        },
        {
            name: "hide shortcut",
            check: function () {
                if (game.level.triggers.tripped("red cube")) return false;
                if (game.level.triggers.tripped("pre shortcut")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.x < -900;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "pre shortcut clue");
                o.alpha = 1;
                o.decay = 0.1;
            }
        },
        {
            name: "pre shortcut",
            check: function () {
                if (game.level.triggers.tripped("hide shortcut")) return false;
                if (game.level.triggers.tripped("animation completed")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "pre shortcut clue");
                if (!o) return false;
                var dist = Math.abs(player.x + player.w / 2 - o.x);
                if (dist > 30) return false;
                if (!game.input.down || game.input.downStart > 10) return false;
                if (player.y != 60) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return game.level.triggers.tripped("animation");
            },
            trip: function () {
                game.background.effect.start("green");
                game.level.discoverShortcut();
                var o = game.objects.objects.find(e => e.id == "pre shortcut clue");
                o.activated = true;
                game.soundEffects.preShortcut();
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.alpha = 1;
                var o = game.objects.objects.find(e => e.id == "portal1");
                o.alpha = 1;
                for (var o of game.objects.objects.filter(e => e.id == "shortcut spike")) {
                    o.alpha = 0;
                    o.decay = -0.1;
                    o.collide = true;
                }
            },
            untrip: function () {
                game.background.effect.end("green");
                var o = game.objects.objects.find(e => e.id == "text 1");
                o.alpha = Math.min(o.alpha, 1);
                o.decay = 0.1;
                var o = game.objects.objects.find(e => e.id == "text 2");
                o.alpha = Math.min(o.alpha, 1);
                o.decay = 0.1;
                for (var o of game.objects.objects.filter(e => e.id == "text 3")) {
                    o.alpha = Math.min(o.alpha, 1);
                    o.decay = 0.1;
                }
                for (var o of game.objects.objects.filter(e => e.id == "text 4")) {
                    o.alpha = Math.min(o.alpha, 1);
                    o.decay = 0.1;
                }
            }
        },
        {
            name: "end shortcut",
            check: function () {
                return game.level.triggers.tripped("pre shortcut") && game.level.triggers.tripped("animation");
            },
            trip: function () {
                for (var o of game.objects.objects.filter(e => e.id == "shortcut spike")) {
                    o.alpha = 1;
                    o.decay = 0.1;
                    o.collide = false;
                }
            }
        },
        {
            name: "shortcut",
            check: function () {
                if (game.level.triggers.tripped("animation completed")) return false;
                if (!game.level.triggers.tripped("pre shortcut")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                var dist = distTo(player.x + player.w / 2, player.y + player.h / 2, o.x, o.y);
                if (dist > 40) return false;
                return game.input.up && game.input.upHold < 10;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return game.level.triggers.tripped("animation");
            },
            trip: function () {
                game.soundEffects.preShortcut();
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.activated = true;
                var player = game.objects.objects.find(e => e.type == "player");
                player.ymove = -12;
                player.xmove = 0;
            },
            passive: function () {
                if (game.level.playerInPortal) return;
                if (game.objects.objects.find(e => e.id == "portal2").portalNumber !== undefined) return;
                var player = game.objects.objects.find(e => e.type == "player");
                player.x = player.x * 0.9 - 1520 * 0.1;
                player.ymove = Math.min(player.ymove, -12);
            }
        },
        {
            name: "shortcut teleport",
            check: function () {
                if (!game.level.triggers.tripped("shortcut")) return false;
                return game.level.playerInPortal;
            },
            stop: function () {
                if (game.level.triggers.tripped("animation")) return true;
                return game.level.levelAnimationTime > 300;
            },
            trip: function () {
                game.level.levelAnimationTime = 0;
            },
            untrip: function () {
                var o = game.objects.objects.find(e => e.id == "pre shortcut clue");
                o.alpha = 0;
            },
            passive: function () {
                var a = game.level.levelAnimationTime;
                if (a == 0 && game.level.triggers.tripped("animation")) {
                    var o = game.objects.objects.find(e => e.id == "portal1");
                    o.alpha = 0;
                    var o2 = game.objects.objects.find(e => e.id == "portal2");
                    o2.alpha = 1;
                    o2.decay = 0.1;
                    return;
                }
                var o = game.objects.objects.find(e => e.id == "portal1");
                var o2 = game.objects.objects.find(e => e.id == "portal2");
                var a1 = easeInOut((a - 90) / 50);
                var a2 = 1 - easeInOut((a - 250) / 50);
                o.x = -1450 - 50 * (1 - a2);
                o.length = 100 - 100 * (1 - a2);
                o2.x = -2700 + 50 * a1 * a2;
                o2.length = 100 * a1 * a2;
                o2.alpha = 1;
                if (a == 140) {
                    o2.portalNumber = 1;
                    game.soundEffects.switchGravity();
                }
            }
        },
        {
            name: "shortcut text",
            check: function () {
                if (!game.level.triggers.tripped("shortcut")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.x < -2980;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "shortcut text");
                o.alpha = 0;
                o.decay = -0.1;
            }
        },
        {
            name: "reload pre red cube",
            check: function () {
                if (game.level.triggers.tripped("red cube")) return false;
                //return true;
                if (game.level.triggers.tripped("text 1")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return player.y == 60;
            },
            stop: function () {
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube block");
                o.alpha = Math.min(o.alpha, 1);
                o.decay = 0.1;
                o.touched = false;
                o.collide = true;
                var o = game.objects.objects.find(e => e.id == "red cube wall");
                o.alpha = 0;
                o.decay = 0;
                o.touched = false;
                o.collide = true;
            }
        },
        {
            name: "pre red cube phase 2",
            check: function () {
                //return true;
                if (game.level.triggers.tripped("red cube")) return false;
                if (game.level.triggers.tripped("text 1")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y < -170;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return player.y == 60;
            },
            trip: function () {
                //return;
                var o = game.objects.objects.find(e => e.id == "red cube block");
                o.alpha = 0;
                o.decay = -0.1;
            }
        },
        {
            name: "red cube",
            check: function () {
                //return true;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                var dist = distTo(player.x + player.w / 2, player.y + player.h / 2, o.x, o.y);
                if (dist > 40) return false;
                return game.input.upStart < 10 && game.input.up;
            },
            trip: function () {
                game.background.effect.start("red", false, true);
                game.level.discoverRedCube();
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.activated = true;
                var player = game.objects.objects.find(e => e.type == "player");
                player.ymove = -7;
                player.xmove /= 3;
                game.level.playerControlDelay = 1000;
                var o = game.objects.objects.find(e => e.id == "ground");
                o.collide = false;
                game.cam.viewportBoundary.h += 1000;
                var o = game.objects.objects.find(e => e.id == "right wall");
                o.alpha = 0;
                game.level.levelAnimationTime = 0;
            },
            passive: function () {
                if (game.level.triggers.tripped("red cube teleport")) return;
                var player = game.objects.objects.find(e => e.type == "player");
                if (player.y > 40) {
                    if (player.ymove > 1) {
                        player.ymove += 0.125;
                    } else if (player.ymove > 0) {
                        player.ymove += 0.05;
                    } else if (player.ymove < -1) {
                        player.ymove -= 0.05;
                    }
                } else {
                    if (player.ymove < 0) {
                        player.ymove -= 0.12;
                    } else if (player.ymove < 2) {
                        player.ymove -= 0.05;
                    } else if (player.ymove > 3) {
                        player.ymove += 0.1;
                    } else if (player.ymove > 2) {
                        player.ymove += 0.05;
                    }
                }
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                player.x = player.x * 0.99 + (o.x - player.w / 2) * 0.01;
            }
        },
        {
            name: "red cube animation",
            check: function () {
                if (!game.level.triggers.tripped("red cube")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y > -350;
            },
            trip: function () {
                game.level.levelAnimationTime = 0;
            },
            passive: function () {
                if (game.level.triggers.tripped("red cube teleport")) return;
                var a = game.level.levelAnimationTime;
                var a2 = easeInOut((a - 50) / 70);
                game.backgroundOpacity = 1 - a2;
                var player = game.objects.objects.find(e => e.type == "player");
                if (player.y > 40) {
                    var o = game.objects.objects.find(e => e.id == "ground");
                    if (player.updateAngle != 180) {
                        player.updateAngle = 180;
                        player.eyeAngleTarget = 180;
                        o.drawType = "wave";
                        o.animation = 0;
                    }
                    o.animation++;
                }
            }
        },
        {
            name: "red cube teleport",
            check: function () {
                if (!game.level.triggers.tripped("red cube animation")) return false;
                if (game.level.levelAnimationTime > 150) return true;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 0;
                player.eyeAngleTarget = 0;
                player.eyeAngle = 0;
                player.eyeAngle = 0;
                player.x -= 350;
                var offset = (160 - player.y) - player.y;
                var oldPlayerY = player.y;
                player.y += offset;
                player.ymove *= -1;
                for (var o of player.positionHistory) {
                    o.x -= 350;
                    o.y = oldPlayerY + player.h / 2 - (o.y - oldPlayerY - player.h / 2);
                    o.y += offset;
                }
                for (var o of game.objects.objects) {
                    if (o.type == "player") continue;
                    if (o.b) {
                        if (o.show) {
                            o.alpha = 1;
                            o.collide = true;
                            if (o.noCollide) o.collide = false;
                        }
                    } else {
                        o.delete = true;
                        o.collide = false;
                        o.alpha = 0;
                    }
                }
                game.cam.offset.y = -300;
                game.cam.y = -200;
                game.cam.x -= 350;
                game.cam.angle = 0;
                game.cam.viewportBoundary = { x: 0, y: -200, w: 0, h: 0 };
                game.level.levelAnimationTime = 0;
            }
        },
        {
            name: "phase 0",
            noDoublePassive: true,
            check: function () {
                if (!game.level.triggers.tripped("red cube teleport")) return false;
                if (game.level.levelAnimationTime < 20) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                return player.y > 0;
            },
            trip: function () {
                audios.notTheRealBossfight.currentTime = 0;
                audios.notTheRealBossfight.play();
                game.level.playerControlDelay = 0;
                game.level.levelAnimationTime = 0;

                var angles = [30, 64, 70, 33, 10, -10, 300, 200, 150];
                var n = 0;
                for (var o of game.objects.objects.filter(e => e.type == "boss part")) {
                    o.turn = 0;
                    o.angle = angles[n];
                    n++;
                }
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                var a = game.level.levelAnimationTime;// + 700 + 1200 + 300;
                if (a >= 2300) return;
                var alpha = easeInOut(a / 20) - easeInOut((a - 280) / 80);
                var scale = easeInOut(a / 20) + easeInBack((Math.min(a, 300) - 100) % 100 / 20) * 0.03 + Math.max(a - 300, 0) / 180 + a / 2000;
                var o = game.objects.objects.find(e => e.id == "text0");
                o.alpha = alpha;
                o.scale = scale;
                var o = game.objects.objects.find(e => e.id == "text1");
                o.alpha = alpha;
                o.scale = scale;

                a -= 400;
                var alpha = easeInOut(a / 20) - easeInOut((a - 280) / 80);
                var scale = easeInOut(a / 15) + easeInBack((Math.min(a, 300) - 100) % 100 / 20) * 0.02 + Math.max(a - 300, 0) / 230 + a / 2000;
                var o = game.objects.objects.find(e => e.id == "text2");
                o.alpha = alpha;
                o.scale = scale;

                game.cam.zoom = 1 - 0.5 * easeInOut((a - 300) / 30);
                game.cam.y = -200 - 400 * easeInOut((a - 300) / 30);
                if (a == 300) {
                    var o = game.objects.objects.find(e => e.id == "bossfight right wall");
                    o.x += 500;
                    var o = game.objects.objects.find(e => e.id == "bossfight left wall");
                    o.x -= 500;
                }

                a -= 400;
                var spins = [-0.13, -0.04, 0.07, 0.1, -0.11, -0.08, 0.12, -0.14, 0.02];
                var delays = [0, 200, 300, 400, 600, 700, 800, 1000, 1100];
                var fallTime = 30;
                var xPositions = [-900, -620, -440, -170, -10, 220, 410, 700, 900];
                var paths = [
                    { x1: xPositions[4] * 1.5, y1: -2000, x2: xPositions[4], y2: 100 },
                    { x1: xPositions[8] * 1.5, y1: -2000, x2: xPositions[8], y2: 100 },
                    { x1: xPositions[5] * 1.5, y1: -2000, x2: xPositions[5], y2: 100 },
                    { x1: xPositions[0] * 1.5, y1: -2000, x2: xPositions[0], y2: 100 },
                    { x1: xPositions[2] * 1.5, y1: -2000, x2: xPositions[2], y2: 100 },
                    { x1: xPositions[3] * 1.5, y1: -2000, x2: xPositions[3], y2: 100 },
                    { x1: xPositions[7] * 1.5, y1: -2000, x2: xPositions[7], y2: 100 },
                    { x1: xPositions[6] * 1.5, y1: -2000, x2: xPositions[6], y2: 100 },
                    { x1: xPositions[1] * 1.5, y1: -2000, x2: xPositions[1], y2: 100 }
                ];
                var createBossPositions = [
                    [
                        { x: paths[0].x2, y: paths[0].y2 },
                        { x: 0, y: -800 },
                        { x: 0, y: -800 },
                        { x: 0, y: -800 },
                        { x: 0, y: -800 },
                        { x: 0, y: -800 }
                    ],
                    [
                        { x: paths[1].x2, y: paths[1].y2 },
                        { x: paths[1].x2, y: paths[1].y2 },
                        { x: paths[1].x2 * 0.7, y: -950 },
                        { x: paths[1].x2 * 0.7, y: -950 },
                        { x: paths[1].x2 * 0.7, y: -950 },
                        { x: 150, y: -800 }
                    ],
                    [
                        { x: paths[2].x2, y: paths[2].y2 },
                        { x: paths[2].x2, y: paths[2].y2 },
                        { x: 200, y: -1100 },
                        { x: 200, y: -1100 },
                        { x: 200, y: -1100 },
                        { x: 150, y: -950 }
                    ],
                    [
                        { x: paths[3].x2, y: paths[3].y2 },
                        { x: paths[3].x2, y: paths[3].y2 },
                        { x: paths[3].x2 * 0.7, y: -1000 },
                        { x: paths[3].x2 * 0.7, y: -1000 },
                        { x: paths[3].x2 * 0.7, y: -1000 },
                        { x: -150, y: -950 }
                    ],
                    [
                        { x: paths[4].x2, y: paths[4].y2 },
                        { x: paths[4].x2, y: paths[4].y2 },
                        { x: paths[4].x2, y: paths[4].y2 },
                        { x: -150, y: -1200 },
                        { x: -150, y: -1200 },
                        { x: 0, y: -950 }
                    ],
                    [
                        { x: paths[5].x2, y: paths[5].y2 },
                        { x: paths[5].x2, y: paths[5].y2 },
                        { x: paths[5].x2, y: paths[5].y2 },
                        { x: paths[5].x2 * 0.7, y: -500 },
                        { x: paths[5].x2 * 0.7, y: -500 },
                        { x: -150, y: -650 }
                    ],
                    [
                        { x: paths[6].x2, y: paths[6].y2 },
                        { x: paths[6].x2, y: paths[6].y2 },
                        { x: paths[6].x2, y: paths[6].y2 },
                        { x: paths[6].x2, y: paths[6].y2 },
                        { x: 500, y: -650 },
                        { x: 150, y: -650 }
                    ],
                    [
                        { x: paths[7].x2, y: paths[7].y2 },
                        { x: paths[7].x2, y: paths[7].y2 },
                        { x: paths[7].x2, y: paths[7].y2 },
                        { x: paths[7].x2, y: paths[7].y2 },
                        { x: 200, y: -550 },
                        { x: 0, y: -650 }
                    ],
                    [
                        { x: paths[8].x2, y: paths[8].y2 },
                        { x: paths[8].x2, y: paths[8].y2 },
                        { x: paths[8].x2, y: paths[8].y2 },
                        { x: paths[8].x2, y: paths[8].y2 },
                        { x: -400, y: -600 },
                        { x: -150, y: -800 }
                    ]
                ];
                for (var n = 0; n < 9; n++) {
                    var a2 = Math.min(Math.max(a + fallTime - delays[n], 0) / fallTime, 1);
                    var o = game.objects.objects.find(e => e.id == ("boss part " + (n + 1)));
                    var path = paths[n];
                    if (a2 > 0 && a2 < 1) {
                        o.falling = true;
                        o.fallOpacity = 1;
                        o.fallAngle = dirTo(path.x1, path.y1, path.x2, path.y2);
                    } else {
                        o.fallOpacity -= 0.05;
                        o.falling = false;
                    }
                    o.x = path.x1 * (1 - a2) + path.x2 * a2;
                    o.y = path.y1 * (1 - a2) + path.y2 * a2;
                    o.alpha = 1;
                    if (a === delays[n] - 70) {
                        game.particles.createEffect("boss part impact warning", { x: path.x2, y: path.y2 });
                    }
                    var killDist = 70;
                    if (a === delays[n]) {
                        game.cam.screenshake = 40;
                        game.cam.screenshakeStrength = 2;
                        killDist = 160;
                        var dist = distTo(path.x2, path.y2, player?.x + player?.w / 2, player?.y + player?.h / 2);
                        var bounceCutoff = 500;
                        var bounceArea = bounceCutoff - killDist;
                        if (player && dist < bounceCutoff) {
                            var strength = Math.min((bounceArea - (dist - killDist)) / bounceArea + 0.5, 1);
                            var dir = dirTo(path.x2, path.y2, player.x + player.w / 2, player.y + player.h / 2);
                            var move = distToMove(10 * strength, dir);
                            player.xmove += move.x;
                            player.ymove += move.y - 5 * strength;
                        }
                        game.particles.createEffect("boss part impact", { x: path.x2, y: path.y2 });
                    }
                    var positions = createBossPositions[n];
                    var i = (a - 1200) / 50;
                    if (i > 0) {
                        var last = positions[Math.floor(Math.min(i, 4))];
                        var next = positions[Math.floor(Math.min(i, 4) + 1)];
                        var drift = 0;
                        var spin = spins[n];
                        if (n === 0) {
                            drift = Math.max(0, i);
                        } else if (n < 4) {
                            drift = Math.max(0, i - 1);
                        } else if (n < 6) {
                            drift = Math.max(0, i - 2);
                        } else {
                            drift = Math.max(0, i - 3);
                        }
                        if (drift === 0) spin = 0;
                        if (i > 3) {
                            spin *= 1 - Math.min(Math.max((i - 3), 0), 1);
                            o.angle += turn(o.angle, 0) * easeInOut((i - 3.4) * 0.6);
                        }
                        o.angle += spin;
                        drift **= 0.7;
                        drift *= 10;
                        drift *= 1 - easeInOut((i - 4) * 5);
                        var drift2 = (Math.max(0, i - 4) + 1) ** 0.2 * 300 - 300;
                        var percent = i % 1;
                        if (i >= 5) percent = 1;
                        var a2 = easeInOut(percent * 5);
                        o.x = last.x * (1 - a2) + next.x * a2;
                        o.y = last.y * (1 - a2) + next.y * a2 - drift + drift2;
                    }
                    if (player) {
                        var distToPlayer = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                        if (distToPlayer < killDist && !game.level.playerInvincible) {
                            game.soundEffects.death();
                            player.delete = true;
                        }
                    }
                }
            }
        },
        {
            name: "phase 1",
            check: function () {
                return game.level.triggers.tripped("phase 0") && game.level.levelAnimationTime/* + 700 + 1200 + 300/**/ >= 2300;
            },
            trip: function () {
                //audios.notTheRealBossfight.currentTime = 23;
                //audios.notTheRealBossfight.play();
                var innerPart = game.objects.objects.find(e => e.id == "boss part 1");
                var o = {
                    type: "bart",
                    x: innerPart.x,
                    y: innerPart.y,
                    phase: 0
                }
                game.objects.objects.push(o);
                game.objects.objects = game.objects.objects.filter(e => e.type != "boss part");
            },
            passive: function () {
                game.cam.zoom = 0.5;
                game.cam.y = -600;
            }
        }
    ],
    viewportBoundary: { x: -3000, y: -200, w: 3000, h: 0 },
    camFunction: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return;
        if (game.level.triggers.tripped("red cube teleport")) {
            return false;
        }
        if (game.level.triggers.tripped("red cube animation")) {
            var a = game.level.levelAnimationTime;
            var a2 = easeInOut(a / 100);
            var a3 = easeInOut((a - 40) / 60);
            game.cam.angle = 180 * a2;
            game.cam.offset.y = 200 * (1 - a2) + 0 * a2;
            game.cam.y = game.cam.y * (1 - a2) + 400 * a3;
            return;
        }
        if (game.level.triggers.tripped("red cube")) {
            var a = game.level.levelAnimationTime;
            var a3 = easeInOut(a / 50);
            game.cam.viewportBoundary.w = 3000 + 500 * a3;
            return;
        }
        if (game.level.triggers.tripped("shortcut teleport")) {
            var a = game.level.levelAnimationTime;
            if (a < 140) {
                var target = -1500 - 1200 * easeInOut((a - 70) / 50);
                var percent = easeInOut((a - 70) / 50);
                game.cam.x = game.cam.x * (1 - percent) + target * percent;
            }
        }
        if (!game.level.triggers.tripped("animation completed")) return;
        if (game.level.triggers.tripped("player dead animation completed")) return;
        game.cam.zoom = 0.88;
        game.cam.x = -2100;
    },
    levelComplete: function () {
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return false;
        if (game.level.triggers.tripped("shortcut")) return player.x < -3550;
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