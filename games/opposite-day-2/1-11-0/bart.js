function smoothCap(n, start, stop) {
    if (n > -start && n < start) return n;
    if (n < 0) return (stop - start) * Math.tanh((n + start) / (stop - start)) - start;
    return (stop - start) * Math.tanh((n - start) / (stop - start)) + start;
}

function updateBart(o, player) {
    if (!o.t) o.t = 0;
    o.t += 1;
    //o.phase = 1;
    if (o.phase === 0) {
        if (o.t > 40) o.y -= 100 / (100 + o.t - 40);
        if (o.t === 80) {
            o.t = -19;
            o.phase = 1;
        }
    }
    if (o.phase === 1) {
        if (o.t === -19) {
            o.ymove = -0.714;
            o.xmove = 0;
            o.eyePositions = [
                {
                    cx: 236,
                    cy: 283,
                    x: 236,
                    y: 283,
                    w: 38,
                    h: 38
                },
                {
                    cx: 373,
                    cy: 283,
                    x: 373,
                    y: 283,
                    w: 38,
                    h: 38
                }
            ];
        }
        var target = { x: o.x, y: o.y };
        if (o.t < 1400) {
            target.x = Math.sin(o.t / 200) * 200;
            target.y = -850 + Math.sin(o.t / 100) * 100;
        } else {
            var a = easeInOut((o.t - 1400) / 200);
            target.x = Math.sin(o.t / 200) * 200;
            if (player) {
                target.x = target.x * (1 - a) + (Math.sin(o.t / 300) * 100 + player.x + player.w / 2) * a;
            }
            target.y = -800 + Math.sin(o.t / 100) * 150;
        }

        target.x = Math.max(Math.min(target.x, 350), -350);
        var dist = distTo(o.x, o.y, target.x, target.y);
        var dir = dirTo(o.x, o.y, target.x, target.y);
        var move = distToMove(dist, dir);
        o.xmove += move.x * 0.001;
        o.ymove += move.y * 0.001;

        o.xmove *= 0.95;
        o.ymove *= 0.95;
        o.x += o.xmove;
        o.y += o.ymove;

        if (player) {
            var dir = dirTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
            var move = distToMove(10, dir);
            o.eyePositions[0].x = o.eyePositions[0].x * 0.95 + (o.eyePositions[0].cx + move.x) * 0.05;
            o.eyePositions[1].x = o.eyePositions[1].x * 0.95 + (o.eyePositions[1].cx + move.x) * 0.05;
        }

        var shootTimes = [];
        for (var n = 0; n < 44; n++) {
            if ([14, 15, 16, 22, 23, 28, 29, 30, 31].includes(n)) continue;
            var e = {};
            e.gun = n % 2 + 1;
            e.t = -10 + n * 50;
            e.shootPower = 3;
            e.energy = 0.3;
            e.buildup = 60;
            e.release = 40;
            shootTimes.push(e);
        }
        for (var n = 48; n < 56; n += 0.5) {
            var e = {};
            e.gun = Math.floor(n * 2) % 2 + 1;
            e.t = -10 + n * 50;
            e.shootPower = 3;
            e.energy = 0.3;
            e.buildup = 30;
            e.release = 20;
            shootTimes.push(e);
        }
        for (var n = 56; n < 61; n++) {
            for (var n2 = 0; n2 < 2; n2++) {
                var e = {};
                e.gun = n2 + 1;
                e.t = -10 + n * 50;
                e.shootPower = 10;
                e.energy = 0.3;
                e.startEnergy = e.energy;
                e.endEnergy = e.energy - 0.12;
                e.buildup = 0;
                if (n === 56) {
                    e.buildup = 20;
                    e.startEnergy = 0;
                }
                e.release = 50;
                e.triple = true;
                shootTimes.push(e);
            }
        }
        shootTimes[0].buildup = 10;
        var tripleTimes = [14, 22];
        for (var time of tripleTimes) {
            for (var n = 0; n < 3; n++) {
                for (var n2 = 0; n2 < 2; n2++) {
                    var e = {};
                    e.gun = n2 + 1;
                    e.t = -10 + time * 50 + n * 33;
                    e.shootPower = 3;
                    e.energy = 0.55 - n * 0.12;
                    e.startEnergy = e.energy;
                    e.endEnergy = e.energy - 0.12;
                    e.buildup = 16;
                    if (n === 0) {
                        e.startEnergy = 0;
                        e.buildup = 33;
                    }
                    e.barrelRelease = 33;
                    e.release = 16;
                    shootTimes.push(e);
                }
            }
        }
        var eightShotTimes = [28, 44];
        for (var time of eightShotTimes) {
            shootTimes.push(...[
                { gun: 1, t: 0, energy: 0.9, buildup: 25, release: 12, barrelRelease: 25, endEnergy: 0.85 },
                { gun: 1, t: 12, energy: 0.85, buildup: 0, release: 25, barrelRelease: 25, endEnergy: 0.78 },
                { gun: 1, t: 37, energy: 0.78, buildup: 0, release: 37, barrelRelease: 25, endEnergy: 0.73 },
                { gun: 1, t: 75, energy: 0.73, buildup: 0, release: 25, barrelRelease: 25, endEnergy: 0.66 },
                { gun: 1, t: 100, energy: 0.66, buildup: 0, release: 25, barrelRelease: 25, endEnergy: 0.54 },
                { gun: 1, t: 125, energy: 0.54, buildup: 0, release: 25, barrelRelease: 25, endEnergy: 0.42 },
                { gun: 1, t: 150, energy: 0.42, buildup: 0, release: 12, barrelRelease: 12, endEnergy: 0.3 },
                { gun: 1, t: 162, energy: 0.3, buildup: 0, release: 25, barrelRelease: 25, endEnergy: 0.18 },
                { gun: 2, t: 0, energy: 0.9, buildup: 25, release: 12, barrelRelease: 25, endEnergy: 0.85 },
                { gun: 2, t: 12, energy: 0.85, buildup: 0, release: 25, barrelRelease: 25, endEnergy: 0.78 },
                { gun: 2, t: 37, energy: 0.78, buildup: 0, release: 37, barrelRelease: 25, endEnergy: 0.73 },
                { gun: 2, t: 75, energy: 0.73, buildup: 0, release: 25, barrelRelease: 25, endEnergy: 0.66 },
                { gun: 2, t: 100, energy: 0.66, buildup: 0, release: 25, barrelRelease: 25, endEnergy: 0.54 },
                { gun: 2, t: 125, energy: 0.54, buildup: 0, release: 25, barrelRelease: 25, endEnergy: 0.42 },
                { gun: 2, t: 150, energy: 0.42, buildup: 0, release: 12, barrelRelease: 12, endEnergy: 0.3 },
                { gun: 2, t: 162, energy: 0.3, buildup: 0, release: 25, barrelRelease: 25, endEnergy: 0.18 },
            ].map(function (e) {
                e.t += -12 + time * 50;
                e.shootPower = 3;
                return e;
            }));
        }

        var a = easeInOut((o.t + 19) / 100);
        o.gun1 = { x: o.x - (440 + 40 * a), y: o.y + 70, flip: false, angle: 0, energy: 0, shoot: 0, shootPower: 10 };
        o.gun2 = { x: o.x + (440 + 40 * a), y: o.y + 70, flip: true, angle: 0, energy: 0, shoot: 0, shootPower: 10 };
        if (player) {
            var dir = dirTo(o.gun1.x, o.gun1.y, player.x + player.w / 2, player.y + player.h / 2);
            dir = turn(180, dir);
            dir = smoothCap(dir, 15, 30);
            o.gun1.angle = dir * a;
            o.gun1.x -= Math.sin(Math.abs(dir) * Math.PI / 180) * 80 * a;
            var dir = dirTo(o.gun2.x, o.gun2.y, player.x + player.w / 2, player.y + player.h / 2);
            dir = turn(180, dir);
            dir = smoothCap(dir, 15, 30);
            o.gun2.angle = dir * a;
            o.gun2.x += Math.sin(Math.abs(dir) * Math.PI / 180) * 80 * a;
        }
        for (var gunNumber = 1; gunNumber <= 2; gunNumber++) {
            var shootTimesForGun = shootTimes.filter(e => e.gun === gunNumber);
            for (var n = 0; n < shootTimesForGun.length; n++) {
                var e = shootTimesForGun[n];
                var delay = e.delay || 0;
                var barrelRelease = e.barrelRelease || 40;
                if (o.t < e.t - e.buildup - delay) continue;
                if (o.t > e.t + Math.max(e.release, barrelRelease)) continue;
                var gun = e.gun === 1 ? o.gun1 : o.gun2;
                if (o.t < e.t) {
                    var a = easeInOut((o.t - (e.t - e.buildup - delay)) / e.buildup);
                    gun.shootPower = e.shootPower;
                    if (e.startEnergy) {
                        gun.energy = e.startEnergy * (1 - a) + e.energy * a;
                    } else {
                        gun.energy = a * e.energy;
                    }
                } else {
                    var a = easeInOut((e.t + e.release - o.t) / e.release);
                    var a2 = easeInOut((e.t + barrelRelease - o.t) / barrelRelease);
                    gun.shootPower = e.shootPower;
                    gun.shoot = easeInBack(1 - a2);
                    if (e.endEnergy) {
                        gun.energy = e.endEnergy * (1 - a) + e.energy * a;
                    } else {
                        gun.energy = a * e.energy;
                    }
                    if (o.t === e.t + Math.floor(barrelRelease / 2)) {
                        var angles = [0];
                        if (e.triple) angles = [-15, 0, 15];
                        for (var angle of angles) {
                            var o2 = {
                                type: "bart fireball",
                                bossObject: true,
                                x: gun.x,
                                y: gun.y
                            }
                            if (gun.flip) {
                                o2.x -= 15;
                            } else {
                                o2.x += 15;
                            }
                            var move = distToMove(180, gun.angle + 180);
                            o2.x += move.x;
                            o2.y += move.y;
                            var move = distToMove(15, gun.angle + 180 + angle);
                            o2.xmove = move.x;
                            o2.ymove = move.y;
                            game.objects.spawnObjects.push({ object: o2, location: 4 });
                        }
                    }
                }
                continue;
            }
        }
    }
}
function drawBart(o) {
    var a = o.t;
    if (isNaN(a)) a = 0;
    if (o.phase === 0) {
        var s = 650;
        var gunAnimation = easeInOut(a / 10) * 0.47 + easeInOut((a - 40) / 10) * 0.53;
        var litOpacity = easeInOut((a - 40) / 10);
        var translateAnimation = 1 - easeInOut(a / 10) * 0.7 - easeInOut((a - 40) / 10) * 0.3;
        var clipAnimation = easeInOut(a / 12);
        var clipSize = 400 + 250 * clipAnimation;

        drawPhase1Gun({ x: o.x - 440 * gunAnimation, y: o.y + 20 + 50 * gunAnimation, flip: false, angle: 0, energy: 0, shoot: 0, shootPower: 10 });
        drawPhase1Gun({ x: o.x + 440 * gunAnimation, y: o.y + 20 + 50 * gunAnimation, flip: true, angle: 0, energy: 0, shoot: 0, shootPower: 10 });

        ctx.save();
        ctx.beginPath();
        ctx.rect(o.x - clipSize / 2, o.y - clipSize / 2, clipSize, clipSize);
        ctx.clip();
        if (litOpacity === 0) {
            ctx.drawImage(images.bartPhase1TransformationSpritesheet, 0, 0, 800, 800, o.x - s / 2, o.y - s / 2, s, s);
        } else if (litOpacity === 1) {
            ctx.drawImage(images.bartPhase1TransformationSpritesheet, 0, 800, 800, 800, o.x - s / 2, o.y - s / 2, s, s);
        } else {
            ctx.drawImage(images.bartPhase1TransformationSpritesheet, 0, 0, 800, 800, o.x - s / 2, o.y - s / 2, s, s);
            ctx.save();
            ctx.globalAlpha = litOpacity;
            ctx.drawImage(images.bartPhase1TransformationSpritesheet, 0, 800, 800, 800, o.x - s / 2, o.y - s / 2, s, s);
            ctx.restore();
        }
        ctx.restore();
        for (var n = 0; n < 4; n++) {
            var quadrant = {
                x: (n % 2) * 400,
                y: Math.floor(n / 2) * 400
            }
            quadrant.x2 = quadrant.x / 400 * 650 / 2;
            quadrant.y2 = quadrant.y / 400 * 650 / 2;
            var translate = {
                x: 230 / 800 * 650 / 2,
                y: 230 / 800 * 650 / 2
            }
            if (n === 1) {
                translate.x *= -1;
            }
            if (n === 2) {
                translate.y *= -1;
            }
            if (n === 3) {
                translate.x *= -1;
                translate.y *= -1;
            }
            translate.x *= translateAnimation;
            translate.y *= translateAnimation;
            ctx.save();
            ctx.translate(translate.x, translate.y);
            ctx.drawImage(images.bartPhase1TransformationSpritesheet, 800 + quadrant.x, quadrant.y, 400, 400, o.x - s / 2 + quadrant.x2, o.y - s / 2 + quadrant.y2, s / 2, s / 2);
            ctx.save();
            ctx.globalAlpha = litOpacity;
            ctx.drawImage(images.bartPhase1TransformationSpritesheet, 800 + quadrant.x, 800 + quadrant.y, 400, 400, o.x - s / 2 + quadrant.x2, o.y - s / 2 + quadrant.y2, s / 2, s / 2);
            ctx.restore();
            ctx.restore();
        }
    }
    if (o.phase === 1) {
        var s = 650;
        ctx.drawImage(images.bartPhase1Spritesheet, 0, 0, 800, 800, o.x - s / 2, o.y - s / 2, s, s);
        ctx.save();
        ctx.beginPath();
        ctx.rect(o.x - s / 2, o.y - s / 2, s, s * 0.468);
        ctx.clip();
        var pos = o.eyePositions[0];
        ctx.drawImage(images.bartPhase1Spritesheet, 800, 0, 50, 50, o.x - s / 2 + pos.x, o.y - s / 2 + pos.y, pos.w, pos.h);
        var pos = o.eyePositions[1];
        ctx.drawImage(images.bartPhase1Spritesheet, 800, 0, 50, 50, o.x - s / 2 + pos.x, o.y - s / 2 + pos.y, pos.w, pos.h);
        ctx.restore();

        drawPhase1Gun(o.gun1);
        drawPhase1Gun(o.gun2);
    }
}

function drawPhase1Gun({ x, y, flip, angle, energy, shoot, shootPower }) {
    shoot = Math.min(Math.max(shoot, 0), 1);
    ctx.save();
    ctx.translate(x, y - shootPower * shoot);
    ctx.rotate(angle * Math.PI / 180);
    if (flip) ctx.scale(-1, 1);
    ctx.drawImage(images.bartPhase1WeaponsSpritesheet, 400, 0, 200, 400, -110, -220 - 20 * shoot, 220, 440);
    ctx.drawImage(images.bartPhase1WeaponsSpritesheet, 0, 0, 200, 400, -110, -220, 220, 440);
    ctx.save();
    ctx.beginPath();
    ctx.rect(-110, 220 - 440 * energy, 220, 440 * energy);
    ctx.clip();
    ctx.drawImage(images.bartPhase1WeaponsSpritesheet, 200, 0, 200, 400, -110, -220, 220, 440);
    ctx.restore();
    ctx.restore();
}

function drawBossObject(o, player) {
    if (o.type == "bart fireball") {
        ctx.save();
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgb(220,32,32)";
        ctx.fillStyle = "rgb(220,32,32)";
        ctx.fillRect(o.x - 15, o.y - 20, 30, 40);
        ctx.restore();
    }
}

function updateBossObject(o, player) {
    if (o.type == "bart fireball") {
        o.x += o.xmove;
        o.y += o.ymove;
        if (o.y > 80) {
            o.delete = true;
            game.particles.createEffect("boss fireball explosion", o);
        } else if (player) {
            var distToPlayer = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
            if (distToPlayer < 40) {
                if (!game.level.playerInvincible) {
                    player.delete = true;
                    game.soundEffects.death();
                }
                o.delete = true;
                game.particles.createEffect("boss fireball explosion", o);
            }
        }
    }
}