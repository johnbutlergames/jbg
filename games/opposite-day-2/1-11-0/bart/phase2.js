function updateBartPhase2(o, player) {
    if (o.t === -99) {
        o.gun1.x = o.x - 480;
        o.gun1.y = o.y + 70;
        o.gun1.angle = 0;
        o.gun2.x = o.x + 480;
        o.gun2.y = o.y + 70;
        o.gun2.angle = 0;
    }
    if (o.t < 0) {
        o.x = 0;
        o.y = -950;
        let a = easeInOut((o.t + 95) / 25) - easeInOut((o.t + 60) / 25);
        o.gun1.x = o.x - 480 + 400 * a;
        o.gun1.y = o.y + 70 - 70 * a;
        o.gun2.x = o.x + 480 - 400 * a;
        o.gun2.y = o.y + 70 - 70 * a;
    }
    updateBartPhase2Position(o, player);
    if (o.t > -40) {
        updateBartPhase2GunPositions(o, player);
        updateBartPhase2GunShooting(o, player);
    }
}

function updateBartPhase2GunPositions(o, player) {
    let a = easeInOut((o.t + 40) / 40);
    let move = distToMove(480 + 40 * a, o.angle + 90);
    let move2 = distToMove(70, o.angle + 180);
    o.gun1.x = o.x - move.x + move2.x;
    o.gun1.y = o.y - move.y + move2.y;
    o.gun2.x = o.x + move.x + move2.x;
    o.gun2.y = o.y + move.y + move2.y;

    if (player) {
        let gunTarget = { x: player.x + player.w / 2, y: player.y + player.h / 2 };
        gunTarget.x += player.xmove * 20;

        let targetAngle1 = dirTo(o.gun1.x, o.gun1.y, gunTarget.x, gunTarget.y) + 180;
        let targetAngle2 = dirTo(o.gun2.x, o.gun2.y, gunTarget.x, gunTarget.y) + 180;

        let shootingBombs = 0;
        if (o.t > 180 && o.t < 400) shootingBombs = easeInOut((o.t - 180) / 30) - easeInOut((o.t - 370) / 30);
        if (o.t > 580 && o.t < 700) shootingBombs = easeInOut((o.t - 580) / 30) - easeInOut((o.t - 670) / 30);
        if (o.t > 1180 && o.t < 1400) shootingBombs = easeInOut((o.t - 1180) / 30) - easeInOut((o.t - 1380) / 30);
        if (o.t > 1480) shootingBombs = easeInOut((o.t - 1480) / 30);
        if (shootingBombs > 0) {
            targetAngle1 += turn(targetAngle1, o.angle) * shootingBombs * 0.8;
            targetAngle2 += turn(targetAngle2, o.angle) * shootingBombs * 0.8;
        }

        dir = turn(o.gun1.angle, targetAngle1);
        o.gun1.angle += dir * 0.1 * a;
        o.gun1.angle = smoothCap(o.gun1.angle - o.angle, 15, 50) + o.angle;
        dir = turn(o.gun2.angle, targetAngle2);
        o.gun2.angle += dir * 0.1 * a;
        o.gun2.angle = smoothCap(o.gun2.angle - o.angle, 15, 50) + o.angle;
    }

    let a2 = easeInOut((o.t - 3000) / 75);
    let a3 = easeInOut((o.t - 3020) / 75);
    o.gun1.angle = o.gun1.angle * (1 - a2);
    o.gun2.angle = o.gun2.angle * (1 - a2);
    o.gun1.y -= 50 * a3;
    o.gun2.y -= 50 * a3;
}

function updateBartPhase2GunShooting(o, player) {
    let shootTimes = [];
    for (let n = 0; n < 48; n++) {
        if ([14, 15, 16, 22, 23, 28, 29, 30, 31].includes(n)) continue;
        let e = {};
        e.gun = n % 2 + 1;
        e.t = -10 + n * 50;
        e.shootPower = 3;
        e.energy = 0.3;
        e.buildup = 60;
        e.release = 40;
        if ([4, 5, 6, 7, 12, 13, 24, 25, 26, 27].includes(n)) e.bomb = true;
        shootTimes.push(e);
        if (n > 32) {
            let e2 = structuredClone(e);
            e2.bomb = true;
            e2.gun = e.gun === 1 ? 2 : 1;
            shootTimes.push(e2);
        }
    }
    for (let n = 48; n < 53; n += 0.5) {
        let e = {};
        e.gun = Math.floor(n * 2) % 2 + 1;
        e.t = -10 + n * 50;
        e.shootPower = 3;
        e.energy = 0.3;
        e.buildup = 30;
        e.release = 20;
        let e2 = structuredClone(e);
        e2.bomb = true;
        e2.gun = e.gun === 1 ? 2 : 1;
        shootTimes.push(e2);
        shootTimes.push(e);
    }
    let megaBombNumber = 0;
    for (let n = 53.5; n < 56; n += 0.5) {
        let e = {};
        e.gun = Math.floor(n * 2) % 2 + 1;
        e.t = -10 + n * 50;
        e.shootPower = 3;
        e.energy = 0.3;
        e.buildup = 30;
        e.release = 20;
        e.bomb = true;
        e.megaBomb = true;
        e.megaBombNumber = megaBombNumber;
        megaBombNumber++;
        shootTimes.push(e);
    }
    shootTimes[0].buildup = 10;
    let tripleTimes = [14, 22];
    for (let time of tripleTimes) {
        for (let n = 0; n < 3; n++) {
            for (let n2 = 0; n2 < 2; n2++) {
                let e = {};
                e.gun = n2 + 1;
                e.t = -10 + time * 50 + n * 33;
                e.shootPower = 3;
                e.energy = 0.5 - n * 0.1;
                e.startEnergy = e.energy;
                e.endEnergy = e.energy - 0.1;
                if (e.endEnergy < 0.3) e.endEnergy = 0.1;
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
    let eightShotTimes = [28];
    for (let time of eightShotTimes) {
        shootTimes.push(...[
            { gun: 1, t: 0, energy: 0.6, buildup: 25, release: 12, barrelRelease: 25, endEnergy: 0.5 },
            { gun: 1, t: 12, energy: 0.5, buildup: 0, release: 25, barrelRelease: 25, endEnergy: 0.4 },
            { gun: 1, t: 37, energy: 0.4, buildup: 0, release: 37, barrelRelease: 25, endEnergy: 0.3 },
            { gun: 1, t: 75, energy: 0.3, buildup: 0, release: 25, barrelRelease: 25, endEnergy: 0.1 },
            { gun: 1, t: 100, energy: 0.3, buildup: 0, release: 25, barrelRelease: 25, bomb: true },
            { gun: 1, t: 125, energy: 0.3, buildup: 0, release: 25, barrelRelease: 25, bomb: true },
            { gun: 1, t: 150, energy: 0.3, buildup: 0, release: 12, barrelRelease: 12, bomb: true },
            { gun: 1, t: 162, energy: 0.3, buildup: 0, release: 25, barrelRelease: 25, bomb: true },
            { gun: 2, t: 0, energy: 0.6, buildup: 25, release: 12, barrelRelease: 25, endEnergy: 0.5 },
            { gun: 2, t: 12, energy: 0.5, buildup: 0, release: 25, barrelRelease: 25, endEnergy: 0.4 },
            { gun: 2, t: 37, energy: 0.4, buildup: 0, release: 37, barrelRelease: 25, endEnergy: 0.3 },
            { gun: 2, t: 75, energy: 0.3, buildup: 0, release: 25, barrelRelease: 25, endEnergy: 0.1 },
            { gun: 2, t: 100, energy: 0.3, buildup: 0, release: 25, barrelRelease: 25, bomb: true },
            { gun: 2, t: 125, energy: 0.3, buildup: 0, release: 25, barrelRelease: 25, bomb: true },
            { gun: 2, t: 150, energy: 0.3, buildup: 0, release: 12, barrelRelease: 12, bomb: true },
            { gun: 2, t: 162, energy: 0.3, buildup: 0, release: 25, barrelRelease: 25, bomb: true },
        ].map(function (e) {
            e.t += -12 + time * 50;
            e.shootPower = 3;
            return e;
        }));
    }
    for (let gunNumber = 1; gunNumber <= 2; gunNumber++) {
        let shootTimesForGun = shootTimes.filter(e => e.gun === gunNumber && !e.bomb);
        let bombTimesForGun = shootTimes.filter(e => e.gun === gunNumber && e.bomb);
        for (let n = 0; n < shootTimesForGun.length; n++) {
            let e = shootTimesForGun[n];
            let delay = e.delay || 0;
            let barrelRelease = e.barrelRelease || 40;
            if (o.t < e.t - e.buildup - delay) continue;
            if (o.t > e.t + Math.max(e.release, barrelRelease)) continue;
            let gun = e.gun === 1 ? o.gun1 : o.gun2;
            if (o.t < e.t) {
                let a = easeInOut((o.t - (e.t - e.buildup - delay)) / e.buildup);
                gun.shootPower = e.shootPower;
                if (e.startEnergy) {
                    gun.energy = e.startEnergy * (1 - a) + e.energy * a;
                } else {
                    gun.energy = a * e.energy;
                }
            } else {
                let a = easeInOut((e.t + e.release - o.t) / e.release);
                let a2 = easeInOut((e.t + barrelRelease - o.t) / barrelRelease);
                gun.shootPower = e.shootPower;
                gun.shoot = easeInBack(1 - a2);
                if (e.endEnergy) {
                    gun.energy = e.endEnergy * (1 - a) + e.energy * a;
                } else {
                    gun.energy = a * e.energy;
                }
                if (o.t === e.t + Math.floor(barrelRelease / 2)) {
                    for (let n2 = 0; n2 < 2; n2++) {
                        let o2 = {
                            type: "bart fireball",
                            bossObject: true,
                            x: gun.x,
                            y: gun.y,
                            angle: gun.angle
                        }
                        let move = distToMove(200, gun.angle + 180);
                        o2.x += move.x;
                        o2.y += move.y;
                        let move2 = distToMove(n2 == 0 ? -50 : 50, gun.angle + 90);
                        o2.x += move2.x;
                        o2.y += move2.y;
                        let move3 = distToMove(15, gun.angle + 180);
                        o2.xmove = move3.x;
                        o2.ymove = move3.y;
                        game.objects.spawnObjects.push({ object: o2, location: 4 });
                    }
                }
            }
            continue;
        }
        for (let n = 0; n < bombTimesForGun.length; n++) {
            let e = bombTimesForGun[n];
            let delay = e.delay || 0;
            let barrelRelease = e.barrelRelease || 40;
            if (o.t < e.t - e.buildup - delay) continue;
            if (o.t > e.t + Math.max(e.release, barrelRelease)) continue;
            let gun = e.gun === 1 ? o.gun1 : o.gun2;
            if (o.t < e.t) {
                let a = easeInOut((o.t - (e.t - e.buildup - delay)) / e.buildup);
                gun.bombShootPower = e.shootPower;
                if (e.startEnergy) {
                    gun.bombEnergy = e.startEnergy * (1 - a) + e.energy * a;
                } else {
                    gun.bombEnergy = a * e.energy;
                }
            } else {
                let a = easeInOut((e.t + e.release - o.t) / e.release);
                let a2 = easeInOut((e.t + barrelRelease - o.t) / barrelRelease);
                gun.bombShootPower = e.shootPower;
                gun.bombShoot = easeInBack(1 - a2);
                if (e.endEnergy) {
                    gun.bombEnergy = e.endEnergy * (1 - a) + e.energy * a;
                } else {
                    gun.bombEnergy = a * e.energy;
                }
                if (o.t === e.t + Math.floor(barrelRelease / 2)) {
                    let o2 = {
                        type: "bart bomb",
                        bossObject: true,
                        x: gun.x,
                        y: gun.y,
                        angle: gun.angle,
                        turn: (Math.random() * 5 + 5) * (Math.random() < 0.5 ? -1 : 1)
                    }
                    let move = distToMove(200, gun.angle);
                    o2.x += move.x;
                    o2.y += move.y;
                    let angleToPlayer = 0;
                    let distToPlayer = 0;
                    if (player) {
                        distToPlayer = distTo(o2.x, o2.y, player.x + player.w / 2, player.y + player.h / 2);
                        angleToPlayer = dirTo(o2.x, o2.y, player.x + player.w / 2, player.y + player.h / 2);
                    }
                    let move2 = distToMove(distToPlayer * 0.009, angleToPlayer);
                    o2.xmove = move2.x;
                    o2.ymove = -15;
                    if(e.megaBomb) {
                        o2.megaBombNumber = e.megaBombNumber;
                        o2.detonationTime = o2.megaBombNumber * 25 + 125;
                        o2.target = o2.megaBombNumber * 300 - 750;
                        o2.type = "bart mega bomb";
                        o2.ymove = -10;
                        o2.xmove = (o2.target - o2.x) / o2.detonationTime;
                    }
                    game.objects.spawnObjects.push({ object: o2, location: game.objects.objects.length });
                }
            }
            continue;
        }
    }
}

function drawBartPhase2(o, a) {
    let s = 650;
    let s2 = 280;
    let mouthSprite = 2;

    if (a > 700 && a < 800) mouthSprite = 3;
    if (a > 1100 && a < 1200) mouthSprite = 3;
    if (a > 1400 && a < 1600) mouthSprite = 3;
    if (a > 2400 && a < 2800) mouthSprite = 3;

    if (o.t < 0) {
        if (o.t > -70) {
            drawPhase2Gun(o.gun1);
            drawPhase2Gun(o.gun2);
        } else {
            drawPhase1Gun(o.gun1);
            drawPhase1Gun(o.gun2);
        }

        ctx.save();
        ctx.translate(o.x, o.y);
        ctx.rotate(o.angle * Math.PI / 180);
        ctx.drawImage(images.bartPhase1Spritesheet, 0, 800, 800, 800, - s / 2, - s / 2, s, s);

        ctx.save();
        ctx.translate(o.faceOffset.x, o.faceOffset.y);
        if (a > -90) {
            ctx.drawImage(images.bartFaceSpritesheet, 400, 200, 200, 200, - s2 / 2, - s2 / 2, s2, s2);
        } else {
            ctx.drawImage(images.bartFaceSpritesheet, 200, 200, 200, 200, - s2 / 2, - s2 / 2, s2, s2);
        }
        ctx.save();
        ctx.translate(o.faceOffset.x * 0.2, 0);
        ctx.rotate(o.mouthAngle * Math.PI / 180);
        ctx.drawImage(images.bartFaceSpritesheet, mouthSprite * 200, 0, 200, 200, - s2 / 2, - s2 / 2, s2, s2);
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        if (a > -90) {
            ctx.rect(- s / 2, - s / 2, s, s * 0.475);
        } else {
            ctx.rect(- s / 2, - s / 2, s, s * 0.473);
        }
        ctx.clip();
        let pos = o.eyePositions[0];
        ctx.drawImage(images.bartFaceSpritesheet, 0, 400, 100, 200, - s2 / 2 + pos.x, - s2 / 2 + pos.y, s2 / 2, s2);
        pos = o.eyePositions[1];
        ctx.drawImage(images.bartFaceSpritesheet, 100, 400, 100, 200, pos.x, - s2 / 2 + pos.y, s2 / 2, s2);
        ctx.restore();
        ctx.restore();

        ctx.restore();

        let a2 = easeInOut((a + 95) / 25) - easeInOut((a + 60) / 25);
        drawLayer2Quadrants(o, 1 - a2 * 0.2);
    } else {
        let s = 650;
        let s2 = 280;

        ctx.save();
        ctx.translate(o.x, o.y);
        ctx.rotate(o.angle * Math.PI / 180);
        ctx.drawImage(images.bartPhase1Spritesheet, 0, 800, 800, 800, - s / 2, - s / 2, s, s);

        ctx.save();
        ctx.translate(o.faceOffset.x, o.faceOffset.y);
        let eyeSprite = 2;
        if (o.t > 3050) eyeSprite = 3;
        ctx.drawImage(images.bartFaceSpritesheet, 200 * eyeSprite, 200, 200, 200, - s2 / 2, - s2 / 2, s2, s2);
        ctx.save();
        ctx.translate(o.faceOffset.x * 0.2, 0);
        ctx.rotate(o.mouthAngle * Math.PI / 180);
        ctx.drawImage(images.bartFaceSpritesheet, mouthSprite * 200, 0, 200, 200, - s2 / 2, - s2 / 2, s2, s2);
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.rect(- s / 2, - s / 2, s, s * 0.475);
        ctx.clip();
        let pos = o.eyePositions[0];
        ctx.drawImage(images.bartFaceSpritesheet, 0, 400, 100, 200, - s2 / 2 + pos.x, - s2 / 2 + pos.y, s2 / 2, s2);
        pos = o.eyePositions[1];
        ctx.drawImage(images.bartFaceSpritesheet, 100, 400, 100, 200, pos.x, - s2 / 2 + pos.y, s2 / 2, s2);
        ctx.restore();
        ctx.restore();

        ctx.drawImage(images.bartPhase1Spritesheet, 800, 800, 800, 800, - s / 2, - s / 2, s, s);
        ctx.restore();

        drawPhase2Gun(o.gun1);
        drawPhase2Gun(o.gun2);
    }
}

function updateBartPhase2Position(o, player) {
    let target = { x: o.y, y: o.y };
    let angleFollow = 0.4;
    o.targetFaceOffset.y = 0;

    if (player) target.x = player.x;
    target.y = -950;

    let a = easeInOut((o.t - 675) / 25) - easeInOut((o.t - 775) / 25);
    let a_2 = easeInOut((o.t - 675) / 50) - easeInOut((o.t - 775) / 50);
    target.y += a * 300;
    angleFollow += a * 0.6;
    o.targetFaceOffset.y += a_2 * 15;

    let a2 = easeInBack((o.t - 1050) / 200);
    let a2_2 = easeInOut((o.t - 1075) / 50) - easeInOut((o.t - 1175) / 50);
    target.y += a2 * 300;
    angleFollow += a2 * 0.6;
    o.targetFaceOffset.y += a2_2 * 15;

    let a3 = easeInOut((o.t - 1375) / 50) - easeInOut((o.t - 1475) / 100);
    let a3_2 = easeInOut((o.t - 1375) / 50) - easeInOut((o.t - 1525) / 100);
    target.y += a3 * 400;
    angleFollow += a3 * 0.8;
    o.targetFaceOffset.y += a3_2 * 25;

    target.x = Math.max(Math.min(target.x, 350), -350);
    if (o.t < 0) {
        let a = easeInOut((o.t + 100) / 100);
        target.x = target.x * (1 - a) + 0 * a;
        target.y = target.y * (1 - a) + (-950) * a;
        o.xmove *= a;
        o.ymove *= a;
    }
    let dist = distTo(o.x, o.y, target.x, target.y);
    let dir = dirTo(o.x, o.y, target.x, target.y);
    let move = distToMove(dist, dir);
    o.xmove += move.x * 0.001;
    o.ymove += move.y * 0.001;

    o.xmove *= 0.95;
    o.ymove *= 0.95;
    o.x += o.xmove;
    o.y += o.ymove;

    if (player && o.t > 0) {
        let dir = dirTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
        let targetAngle = (dir - 180) * angleFollow;
        targetAngle = Math.max(Math.min(targetAngle, 20), -20);
        o.angle += turn(o.angle, targetAngle) * 0.01;
    }

    updateBartFace(o, player);
    if (o.t > -90) {
        o.eyePositions[0].y = o.eyePositions[0].y * 0.9 + 5 * 0.1;
        o.eyePositions[1].y = o.eyePositions[1].y * 0.9 + 5 * 0.1;
    }
}

function drawPhase2Gun({ x, y, flip, angle, energy, shoot, shootPower, bombEnergy = 0, bombShoot = 0, bombShootPower = 0 }) {
    shoot = Math.min(Math.max(shoot, 0), 1);
    bombShoot = Math.min(Math.max(bombShoot, 0), 1);
    ctx.save();
    ctx.translate(x, y - shootPower * shoot + bombShootPower * bombShoot);
    ctx.rotate(angle * Math.PI / 180);
    if (flip) ctx.scale(-1, 1);
    ctx.drawImage(images.bartWeaponsSpritesheet, 400, 600, 200, 200, -110, - 15 * shoot, 220, 220);
    ctx.drawImage(images.bartWeaponsSpritesheet, 400, 400, 200, 200, -110, -220 + 20 * bombShoot, 220, 220);
    ctx.drawImage(images.bartWeaponsSpritesheet, 0, 400, 200, 400, -110, -220, 220, 440);

    ctx.save();
    ctx.beginPath();
    ctx.rect(-110, 220 - 440 * energy, 220, 440 * energy);
    ctx.clip();
    ctx.drawImage(images.bartWeaponsSpritesheet, 200, 400, 200, 400, -110, -220, 220, 440);
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.rect(-110, -220, 220, 440 * bombEnergy);
    ctx.clip();
    ctx.drawImage(images.bartWeaponsSpritesheet, 200, 400, 200, 400, -110, -220, 220, 440);
    ctx.restore();

    ctx.restore();
}