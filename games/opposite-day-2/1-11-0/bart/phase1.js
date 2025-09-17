function updateBartPhase1(o, player) {
    if (o.t === -19) {
        o.ymove = -0.714;
        o.xmove = 0;
        o.eyePositions = [
            { x: 0, y: 0 },
            { x: 0, y: 0 }
        ];
        //
        //o.t = 2800;
        //o.t = 2500;
        //o.phase = 2;
        //
    }
    if (o.t === 3100) {
        o.t = -99;
        o.phase = 2;
    }
    updateBartPhase1Position(o, player);
    updateBartPhase1Guns(o, player);
}

function updateBartPhase1Position(o, player) {
    var target = { x: o.x, y: o.y };
    let angleFollow = 0.4;

    if (!o.faceOffset) o.faceOffset = { x: 0, y: 0 };
    if (!o.targetFaceOffset) o.targetFaceOffset = { x: 0, y: 0 };
    o.targetFaceOffset.y = 0;

    if (o.t < 1400) {
        target.x = Math.sin(o.t / 70) * 300;
        target.y = -950;

        let a = easeInBack((o.t - 625) / 200);
        let a_2 = easeInOut((o.t - 675) / 50) - easeInOut((o.t - 775) / 50);
        target.y += a * 200;
        angleFollow += a * 0.4;
        o.targetFaceOffset.y += a_2 * 25;

        let a2 = easeInBack((o.t - 1050) / 200);
        let a2_2 = easeInOut((o.t - 1075) / 50) - easeInOut((o.t - 1175) / 50);
        target.y += a2 * 300;
        angleFollow += a2 * 0.4;
        o.targetFaceOffset.y += a2_2 * 25;

        let a3 = easeInOut((o.t - 1375) / 50) - easeInOut((o.t - 1475) / 100);
        let a3_2 = easeInOut((o.t - 1375) / 50) - easeInOut((o.t - 1525) / 100);
        target.y += a3 * 400;
        angleFollow += a3 * 0.8;
        o.targetFaceOffset.y += a3_2 * 50;
    } else {
        var a = easeInOut((o.t - 1400) / 200);
        target.x = Math.sin(o.t / 70) * 300;
        if (player) {
            target.x = target.x * (1 - a) + (Math.sin(o.t / 300) * 100 + player.x + player.w / 2) * a;
        }
        target.y = -950;

        let a3 = easeInOut((o.t - 1375) / 50) - easeInOut((o.t - 1475) / 100);
        let a3_2 = easeInOut((o.t - 1375) / 50) - easeInOut((o.t - 1525) / 100);
        target.y += a3 * 400;
        angleFollow += a3 * 0.8;
        o.targetFaceOffset.y += a3_2 * 50;

        let a4 = easeInOut((o.t - 2175) / 50) - easeInOut((o.t - 2275) / 100);
        target.y += a4 * 400;
        angleFollow += a4 * 0.8;
        o.targetFaceOffset.y += a4 * 50;

        let a5 = easeInOut((o.t - 2900) / 260);
        angleFollow -= a5 * 0.4;
        o.angle = o.angle * (1 - a5) + 0 * a5;
    }

    if (player) {
        let dir = dirTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
        let targetAngle = (dir - 180) * angleFollow;
        targetAngle = Math.max(Math.min(targetAngle, 20), -20);
        o.angle += turn(o.angle, targetAngle) * 0.01;
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

    let a5 = easeInOut((o.t - 2900) / 200);
    o.x = o.x * (1 - a5) + 0 * a5;
    o.y = o.y * (1 - a5) + -950 * a5;

    if (player) {
        updateBartFace(o, player);
    }
}

function updateBartFace(o, player) {
    if (player) {
        var dir = dirTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2) - o.angle;
        var move = distToMove(10, dir);
        o.eyePositions[0].x = o.eyePositions[0].x * 0.95 + move.x * 0.05;
        o.eyePositions[1].x = o.eyePositions[1].x * 0.95 + move.x * 0.05;

        o.targetFaceOffset.x = move.x * 2;
    }
    o.faceOffset.x = o.faceOffset.x * 0.95 + o.targetFaceOffset.x * 0.05;
    o.faceOffset.y = o.faceOffset.y * 0.95 + o.targetFaceOffset.y * 0.05;

    o.mouthAngle = Math.min(Math.max(o.angle * 0.4, -5), 5);
}

function updateBartPhase1Guns(o, player) {
    updateBartPhase1GunPositions(o, player);
    updateBartPhase1GunShooting(o, player);
}

function updateBartPhase1GunPositions(o, player) {
    var a = easeInOut((o.t + 19) / 100);
    if (!o.gun1) o.gun1 = { x: o.x - (440 + 40 * a), y: o.y + 120, flip: false, angle: 0, energy: 0, shoot: 0, shootPower: 10 };
    if (!o.gun2) o.gun2 = { x: o.x + (440 + 40 * a), y: o.y + 120, flip: true, angle: 0, energy: 0, shoot: 0, shootPower: 10 };
    let move = distToMove(440 + 40 * a, o.angle + 90);
    let move2 = distToMove(120, o.angle + 180);
    o.gun1.x = o.x - move.x + move2.x;
    o.gun1.y = o.y - move.y + move2.y;
    o.gun2.x = o.x + move.x + move2.x;
    o.gun2.y = o.y + move.y + move2.y;

    if (player) {
        let gunTarget = { x: player.x + player.w / 2, y: player.y + player.h / 2 };
        gunTarget.x += player.xmove * 40;
        var targetAngle = dirTo(o.gun1.x, o.gun1.y, gunTarget.x, gunTarget.y) + 180;
        dir = turn(o.gun1.angle, targetAngle);
        o.gun1.angle += dir * 0.1;
        o.gun1.angle = smoothCap(o.gun1.angle - o.angle, 15, 50) + o.angle;
        var targetAngle = dirTo(o.gun2.x, o.gun2.y, gunTarget.x, gunTarget.y) + 180;
        dir = turn(o.gun2.angle, targetAngle);
        o.gun2.angle += dir * 0.1;
        o.gun2.angle = smoothCap(o.gun2.angle - o.angle, 15, 50) + o.angle;
    }

    let a2 = easeInOut((o.t - 3000) / 75);
    let a3 = easeInOut((o.t - 3020) / 75);
    o.gun1.angle = o.gun1.angle * (1 - a2);
    o.gun2.angle = o.gun2.angle * (1 - a2);
    o.gun1.y -= 50 * a3;
    o.gun2.y -= 50 * a3;
}

function updateBartPhase1GunShooting(o, player) {
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
            e.energy = 0.3 + 0.24;
            e.startEnergy = e.energy;
            e.endEnergy = e.energy - 0.12 * 3;
            e.buildup = 20;
            if (n === 56) {
                e.buildup = 20;
                e.startEnergy = 0;
            }
            e.release = 20;
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
                            y: gun.y,
                            angle: gun.angle
                        }
                        var move = distToMove(190, gun.angle + 180);
                        o2.x += move.x;
                        o2.y += move.y;
                        var move = distToMove(gun.flip ? -15 : 15, gun.angle + 90);
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

function drawLayer2Quadrants(o, a, litOpacity = 1) {
    a = 1 - a;
    var s = 650;
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
        translate.x *= a;
        translate.y *= a;
        ctx.save();
        ctx.translate(translate.x, translate.y);
        ctx.drawImage(images.bartPhase1Spritesheet, 800 + quadrant.x, quadrant.y, 400, 400, o.x - s / 2 + quadrant.x2, o.y - s / 2 + quadrant.y2, s / 2, s / 2);
        ctx.save();
        ctx.globalAlpha = litOpacity;
        ctx.drawImage(images.bartPhase1Spritesheet, 800 + quadrant.x, 800 + quadrant.y, 400, 400, o.x - s / 2 + quadrant.x2, o.y - s / 2 + quadrant.y2, s / 2, s / 2);
        ctx.restore();
        ctx.restore();
    }
}

function drawBartPhase1(o, a) {
    var s = 650;
    let s2 = 280;
    let mouthSprite = 1;
    if (a > 1400) mouthSprite = 2;
    if (a > 700 && a < 800) mouthSprite = 2;
    if (a > 1100 && a < 1200) mouthSprite = 2;
    if (a > 1400 && a < 1590) mouthSprite = 3;
    if (a > 2200 && a < 2390) mouthSprite = 3;
    if (a > 2800 && a < 3050) mouthSprite = 3;

    ctx.save();
    ctx.translate(o.x, o.y);
    ctx.rotate(o.angle * Math.PI / 180);
    ctx.drawImage(images.bartPhase1Spritesheet, 0, 800, 800, 800, - s / 2, - s / 2, s, s);

    ctx.save();
    ctx.translate(o.faceOffset.x, o.faceOffset.y);
    ctx.drawImage(images.bartFaceSpritesheet, 200, 200, 200, 200, - s2 / 2, - s2 / 2, s2, s2);
    ctx.save();
    ctx.translate(o.faceOffset.x * 0.2, 0);
    ctx.rotate(o.mouthAngle * Math.PI / 180);
    ctx.drawImage(images.bartFaceSpritesheet, mouthSprite * 200, 0, 200, 200, - s2 / 2, - s2 / 2, s2, s2);
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.rect(- s / 2, - s / 2, s, s * 0.473);
    ctx.clip();
    let pos = o.eyePositions[0];
    ctx.drawImage(images.bartFaceSpritesheet, 0, 400, 100, 200, - s2 / 2 + pos.x, - s2 / 2 + pos.y, s2 / 2, s2);
    pos = o.eyePositions[1];
    ctx.drawImage(images.bartFaceSpritesheet, 100, 400, 100, 200, pos.x, - s2 / 2 + pos.y, s2 / 2, s2);
    ctx.restore();
    ctx.restore();

    ctx.drawImage(images.bartPhase1Spritesheet, 800, 800, 800, 800, - s / 2, - s / 2, s, s);
    ctx.restore();

    drawPhase1Gun(o.gun1);
    drawPhase1Gun(o.gun2);
}

function drawPhase1Gun({ x, y, flip, angle, energy, shoot, shootPower }) {
    shoot = Math.min(Math.max(shoot, 0), 1);
    ctx.save();
    ctx.translate(x, y - shootPower * shoot);
    ctx.rotate(angle * Math.PI / 180);
    if (flip) ctx.scale(-1, 1);
    ctx.drawImage(images.bartWeaponsSpritesheet, 400, 0, 200, 400, -110, -220 - 20 * shoot, 220, 440);
    ctx.drawImage(images.bartWeaponsSpritesheet, 0, 0, 200, 400, -110, -220, 220, 440);
    ctx.save();
    ctx.beginPath();
    ctx.rect(-110, 220 - 440 * energy, 220, 440 * energy);
    ctx.clip();
    ctx.drawImage(images.bartWeaponsSpritesheet, 200, 0, 200, 400, -110, -220, 220, 440);
    ctx.restore();
    ctx.restore();
}