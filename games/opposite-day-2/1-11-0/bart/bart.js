function smoothCap(n, start, stop) {
    if (n > -start && n < start) return n;
    if (n < 0) return (stop - start) * Math.tanh((n + start) / (stop - start)) - start;
    return (stop - start) * Math.tanh((n - start) / (stop - start)) + start;
}

function updateBart(o, player) {
    if (!o.t) o.t = 0;
    o.t += 1;
    if (o.phase === 0) {
        updateBartPhase0(o, player);
    }
    if (o.phase === 1) {
        updateBartPhase1(o, player);
    }
    if (o.phase === 2) {
        updateBartPhase2(o, player);
    }
    if (o.phase === 3) {
        updateBartPhase3(o, player);
    }
    if (o.phase === 4) {
        updateBartPhase4(o.player);
    }
    if (o.phase === 5) {
        updateBartPhase5(o, player);
    }
}

function drawBart(o) {
    var a = o.t;
    if (isNaN(a)) a = 0;
    if (o.phase === 0) {
        drawBartPhase0(o, a);
    }
    if (o.phase === 1) {
        drawBartPhase1(o, a);
    }
    if (o.phase === 2) {
        drawBartPhase2(o, a);
    }
    if (o.phase === 3) {
        drawBartPhase3(o, a);
    }
    if (o.phase === 4) {
        drawBartPhase4(o, a);
    }
    if (o.phase === 5) {
        drawBartPhase5(o, a);
    }
}

function updateBossObject(o, player) {
    if (o.type == "bart fireball") {
        o.x += o.xmove;
        o.y += o.ymove;
        game.particles.createEffect("boss fireball trail", o);
        if (o.y > 80) {
            o.delete = true;
            game.particles.createEffect("bart fireball explosion", o);
        } else if (player) {
            var distToPlayer = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
            if (distToPlayer < 40) {
                if (!game.level.playerInvincible) {
                    player.delete = true;
                    game.soundEffects.death();
                }
                o.delete = true;
                game.particles.createEffect("bart fireball explosion", o);
            }
        }
    } else if (o.type == "bart bomb") {
        o.x += o.xmove;
        o.y += o.ymove;
        o.angle += o.turn;
        o.xmove *= 0.99;
        o.ymove *= 0.99;
        o.ymove += 0.3;
        if (o.y > 80) {
            if (player) {
                let distToPlayer = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (distToPlayer < 130) {
                    if (!game.level.playerInvincible) {
                        player.delete = true;
                        game.soundEffects.death();
                    }
                }
            }
            o.delete = true;
            game.particles.createEffect("bart bomb explosion", o);
            game.cam.screenshake = 20;
            game.cam.screenshakeStrength = 1.5;
        } else if (player) {
            let distToPlayer = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
            if (distToPlayer < 40) {
                if (!game.level.playerInvincible) {
                    player.delete = true;
                    game.soundEffects.death();
                }
                o.delete = true;
                game.particles.createEffect("bart bomb explosion", o);
            }
        }
    } else if (o.type == "bart mega bomb") {
        o.detonationTime--;
        o.x += o.xmove;
        o.y += o.ymove;
        o.angle += o.turn;
        o.ymove += 0.15;
        if (/*o.y > 80 ||*/o.detonationTime <= 0) {
            o.delete = true;
            game.particles.createEffect("bart bomb explosion", o);
            game.cam.screenshake = 20;
            game.cam.screenshakeStrength = 1.5;
        } else if (player) {
            var distToPlayer = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
            if (distToPlayer < 40) {
                if (!game.level.playerInvincible) {
                    player.delete = true;
                    game.soundEffects.death();
                }
                o.delete = true;
                game.particles.createEffect("bart bomb explosion", o);
            }
        }
    } else if (o.type == "bart part impact spikes") {
        if (o.deleteAnimation) {
            o.deleteAnimation++;
            if (o.deleteAnimation >= 30) o.delete = true;
        }
        if (player && !game.level.playerInvincible && (!o.deleteAnimation || o.deleteAnimation < 10)) {
            let hitbox = { x: o.x + 5, y: o.y + 5, w: o.w - 10, h: o.h - 5 };
            if (blocksColliding(player, hitbox)) {
                player.delete = true;
                game.soundEffects.death();
            }
        }
    } else if (o.type == "star layer") {
        updateStars();
    } else if (o.type == "bart formation lightning") {
        if (!o.initialized) {
            o.initialized = true;
            o.animation = 0;
            o.strikes = [];
            let colors = [
                "rgb(255,0,0)",
                "rgb(255,200,200)",
                "rgb(255,0,0)",
                "rgb(255,200,200)",
                "rgb(255,0,0)",
                "rgb(255,200,200)",
                "rgb(255,0,0)",
                "rgb(255,200,200)",
                "rgb(255,0,0)",
                "rgb(255,200,200)"
            ];
            let timeOffsets = [];
            for (let n = 0; n < 10; n++) {
                timeOffsets.push(0);
            }
            timeOffsets = shuffleArray(timeOffsets);
            let offset = o.angle + Math.floor(Math.random() * 10) * 36;
            for (let n = 0; n < 10; n++) {
                let animation = timeOffsets[n];
                let points = [];
                let angle = n / 10 * 360 + offset + Math.random() * 20 - 10;
                let color = colors[n];
                let stepDist = distToMove(100, angle);
                for (let n2 = 0; n2 < 20; n2++) {
                    let point = { x: o.x + stepDist.x * n2, y: o.y + stepDist.y * n2 };
                    point.originX = point.x;
                    point.originY = point.y;
                    if (n2 !== 0) point.x += Math.random() * 200 - 100;
                    if (n2 !== 0) point.y += Math.random() * 200 - 100;
                    points.push(point);
                }
                points = points.reverse();
                o.strikes.push({ points, color, animation });
            }
        }
        for (let strike of o.strikes) {
            strike.animation++;
            if (t % 10 == 0) {
                for (n = 1; n < strike.points.length; n++) {
                    let point = strike.points[n];
                    point.x = point.originX + Math.random() * 200 - 100;
                    point.y = point.originY + Math.random() * 200 - 100;
                }
            }
        }
        o.animation++;
        if (o.strikes.every(e => e.animation > 45)) o.delete = true;
        if (o.animation > 50) o.delete = true;
    }
}

function drawBossObject(o, player) {
    if (o.type == "bart fireball") {
        ctx.save();
        ctx.translate(o.x, o.y);
        ctx.rotate(o.angle * Math.PI / 180);
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgb(220,32,32)";
        ctx.fillStyle = "rgb(220,32,32)";
        ctx.fillRect(-8, -16, 25, 50);
        ctx.restore();
    } else if (o.type == "bart bomb") {
        ctx.save();
        ctx.translate(o.x, o.y);
        ctx.rotate(o.angle * Math.PI / 180);
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgb(220,32,32)";
        ctx.fillStyle = "rgb(220,32,32)";
        if (t % 20 < 5) {
            ctx.shadowColor = "rgb(220,180,180)";
            ctx.fillStyle = "rgb(220,180,180)";
        }
        ctx.fillRect(-15, -15, 30, 30);
        ctx.restore();
    } else if (o.type == "bart mega bomb") {
        ctx.save();
        ctx.translate(o.x, o.y);
        ctx.rotate(o.angle * Math.PI / 180);
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgb(220,32,32)";
        ctx.fillStyle = "rgb(220,32,32)";
        if (t % 20 < 5) {
            ctx.shadowColor = "rgb(220,180,180)";
            ctx.fillStyle = "rgb(220,180,180)";
        }
        ctx.fillRect(-30, -30, 60, 60);
        ctx.restore();
    } else if (o.type == "bart part impact spikes") {
        ctx.save();
        if (o.deleteAnimation) {
            let a = easeInOut(o.deleteAnimation / 30);
            ctx.translate(0, o.h * a);
        }
        ctx.drawImage(images.bartPartImpactSpikes, o.spriteNumber * 400, 0, 400, 200, o.x, o.y, o.w, o.h);
        ctx.restore();
    } else if (o.type == "star layer") {
        if (!game.level.triggers.tripped("phase 0")) return;
        drawStarBackground();
    } else if (o.type == "bart formation lightning") {
        if (!o.strikes) return;
        ctx.save();
        for (let strike of o.strikes) {
            if (strike.animation < 0) continue;
            let a = 1 - easeInOut((strike.animation - 10) / 35);
            ctx.save();
            ctx.globalAlpha = a;
            ctx.strokeStyle = strike.color;
            ctx.lineWidth = 20 * a;
            ctx.lineJoin = "miter";
            ctx.beginPath();
            for (let n = 0; n < strike.points.length; n++) {
                if (n > strike.animation * 5) break;
                let point = strike.points[n];
                ctx.lineTo(point.x, point.y);
            }
            ctx.stroke();
            ctx.restore();
        }
        ctx.restore();
    }
}

/*let stars = [
];

function initializeStars() {
    stars = [];
    for (let n = 0; n < 50; n++) {
        let o = {
        }
        o.group = n * 100;
        o.r = 12;
        o.x = Math.random() * 2500 - 1250;
        o.y = Math.random() * 2000 - 1250;
        o.z = Math.random() * 0.4 + 0.1;
        o.x /= o.z;
        o.y /= o.z;
        o.angle = Math.random() * 360;
        o.turn = (Math.random() * 2 + 1) * (Math.random() < 0.5 ? 1 : -1);
        stars.push(o);
    }
}
initializeStars();*/

function drawStarBackground() {
    let a = game.level.levelAnimationTime;
    let flyIn = (1 - easeInOut(a / 900 * 0.9 + 0.1)) * 4000;
    let flyInOpacity = clamp(a / 400) * 0.2 + clamp(a / 800) * 0.8;

    ctx.save();
    ctx.translate(game.cam.realX - game.cam.shakeX, game.cam.realY - game.cam.shakeY);
    ctx.scale(1 / game.cam.realZoom, 1 / game.cam.realZoom);
    ctx.rotate(-game.cam.realAngle * Math.PI / 180);

    for (let o of stars) {
        let pulse = easeInBack(((a + 5) % 50) / 20);
        let scale = 1 + pulse * 0.5;
        let opacity = 0.6 + pulse * 0.2;
        scale = 1;
        opacity = 1;

        ctx.save();
        ctx.scale(game.cam.realZoom * o.z, game.cam.realZoom * o.z);
        ctx.translate(-game.cam.realX + game.cam.shakeX * o.z, -game.cam.realY + flyIn + game.cam.shakeY * o.z);
        ctx.translate(o.x, o.y);
        ctx.rotate(o.angle * Math.PI / 180);
        ctx.scale(scale, scale);
        ctx.globalAlpha = opacity * flyInOpacity;

        ctx.fillStyle = "white";
        ctx.fillRect(-o.r, -o.r, o.r * 2, o.r * 2);

        ctx.restore();
    }

    ctx.restore();
}

function updateStars() {
    for (let o of stars) {
        o.angle += o.turn;
    }
}