game.objects = {
    objects: [],
    spawnObjects: [],
    ghostNodes: [],
    update: function () {
        if (game.level.ultraCubeCollectPause) return;

        var player = this.objects.find(e => e.type == "player");
        for (var o of this.objects) {
            if (o.type == "player") {
                continue;
            }
            this.updateObject(o, player);
        }
        if (player) this.updatePlayer(player);
        while (this.spawnObjects.length) {
            var o = this.spawnObjects.pop();
            this.objects.splice(o.location, 0, o.object);
        }
        this.objects = this.objects.filter(e => !e.delete);
    },
    draw: function () {
        if (game.level.level === 3) {
            ctx.save();
            ctx.beginPath();
            ctx.rect(-100000, -100000, 200000, 200000);
            for (var o of this.objects.filter(e => e.drawType == "cutout")) {
                if (o.alpha === 0) continue;
                ctx.rect(o.x, o.y, o.w, o.h);
            }
            ctx.clip("evenodd");
            for (var o of this.objects.filter(e => e.blue && e.type != "clue")) {
                this.drawObject(o);
            }
            ctx.restore();
        }
        if (game.level.level === 9) {
            ctx.save();
            ctx.beginPath();
            ctx.rect(-100000, -100000, 200000, 200000);
            for (var o of this.objects.filter(e => e.cutout)) {
                if (o.alpha === 0) continue;
                if (!o.animation) continue;
                var s = easeInOut(o.animation.a / o.animation.max);
                if (!s) continue;
                var turn = o.turn || 90;
                var turnAngle = turn * s;
                var speed = o.speed || 1;
                var angle = o.angle || 0;
                if (!o.animation.current) turnAngle = turn + turn * (1 - s);
                ctx.save();
                ctx.translate(o.x + o.w / 2, o.y + o.h / 2);
                ctx.scale(s, s);
                ctx.rotate((angle + speed * game.level.levelAnimationTime + turnAngle) * Math.PI / 180);

                ctx.rect(-o.w / 2, -o.h / 2, o.w, o.h);

                ctx.restore();
            }
            ctx.clip("evenodd");
            for (var o of this.objects.filter(e => e.cutout2)) {
                if (o.alpha === 0) continue;
                if (!o.animation) continue;
                var s = easeInOut(o.animation.a / o.animation.max);
                if (!s) continue;
                ctx.beginPath();
                ctx.rect(-100000, -100000, 200000, 200000);
                var turn = o.turn || 90;
                var turnAngle = turn * s;
                var speed = o.speed || 1;
                var angle = o.angle || 0;
                if (!o.animation.current) turnAngle = turn + turn * (1 - s);
                ctx.save();
                ctx.translate(o.x + o.w / 2, o.y + o.h / 2);
                ctx.scale(s, s);
                ctx.rotate((angle + speed * game.level.levelAnimationTime + turnAngle) * Math.PI / 180);

                ctx.rect(-o.w / 2, -o.h / 2, o.w, o.h);

                ctx.restore();
                ctx.clip("evenodd");
            }
            for (var o of this.objects.filter(e => e.cutoutEligible)) {
                this.drawObject(o);
            }
            ctx.restore();

            ctx.save();
            for (var o of this.objects.filter(e => e.lavaCutout)) {
                if (o.alpha === 0) continue;
                if (!o.animation) continue;
                var s = easeInOut(o.animation.a / o.animation.max);
                if (!s) continue;
                ctx.beginPath();
                ctx.rect(-100000, -100000, 200000, 200000);
                var turn = o.turn || 90;
                var turnAngle = turn * s;
                var speed = o.speed || 1;
                var angle = o.angle || 0;
                if (!o.animation.current) turnAngle = turn + turn * (1 - s);
                ctx.save();
                ctx.translate(o.x + o.w / 2, o.y + o.h / 2);
                ctx.scale(s, s);
                ctx.rotate((angle + speed * game.level.levelAnimationTime + turnAngle) * Math.PI / 180);

                ctx.rect(-o.w / 2, -o.h / 2, o.w, o.h);

                ctx.restore();
                ctx.clip("evenodd");
            }
            ctx.beginPath();
            for (var o of this.objects.filter(e => e.cutout3)) {
                if (o.alpha === 0) continue;
                if (!o.animation) continue;
                var s = easeInOut(o.animation.a / o.animation.max);
                if (!s) continue;
                var turn = o.turn || 90;
                var turnAngle = turn * s;
                var speed = o.speed || 1;
                var angle = o.angle || 0;
                if (!o.animation.current) turnAngle = turn + turn * (1 - s);
                ctx.save();
                ctx.translate(o.x + o.w / 2, o.y + o.h / 2);
                ctx.scale(s, s);
                ctx.rotate((angle + speed * game.level.levelAnimationTime + turnAngle) * Math.PI / 180);

                ctx.rect(-o.w / 2, -o.h / 2, o.w, o.h);

                ctx.restore();
            }
            ctx.clip("evenodd");
            for (var o of this.objects.filter(e => e.cutout3)) {
                this.drawObject(o);
            }
            ctx.restore();
        }

        var player = game.objects.objects.find(e => e.type == "player");
        if (game.level.playerInPortal) {
            var o = game.objects.objects.find(e => e.portalNumber == game.level.portalNumber);
            ctx.save();
            ctx.translate(o.x, o.y);
            ctx.rotate(o.angle * Math.PI / 180);
            ctx.beginPath();
            ctx.rect(0, 0, o.length, -100);
            ctx.clip();
            ctx.rotate(-o.angle * Math.PI / 180);
            ctx.translate(-o.x, -o.y);
            this.drawPlayer(player);
            ctx.restore();
        }
        for (var o of this.objects) {
            if (game.level.level === 9 && o.lavaCutout) continue;
            if (game.level.level === 9 && o.cutoutEligible) continue;
            if (game.level.level === 9 && o.cutout3) continue;
            if (game.level.level === 3 && o.blue && o.type != "clue") continue;
            if (game.level.level === 3 && o.drawType == "cutout") continue;
            if (o.type == "player") {
                if (game.level.playerInPortal) continue;
                if (o.explodeAnimation) {
                    this.drawPlayerExplosion(o);
                    continue;
                }
                this.drawPlayer(o);
                continue;
            }
            if (o.type == "player copy") {
                if (!player) continue;
                if (o.rotate) {
                    var dist = distTo(player.x + player.w / 2, player.y + player.h / 2, o.rotate.x, o.rotate.y);
                    var dir = dirTo(player.x + player.w / 2, player.y + player.h / 2, o.rotate.x, o.rotate.y);
                    ctx.save();
                    ctx.translate(o.rotate.x, o.rotate.y);
                    ctx.rotate((o.rotate.angle + dir) * Math.PI / 180);
                    ctx.translate(0, dist);
                    ctx.rotate(-dir * Math.PI / 180);
                    ctx.translate(-player.w / 2, - player.h / 2);
                    this.drawPlayer(player, true, o.onlyDrawTrail);
                    ctx.restore();
                } else {
                    ctx.save();
                    ctx.translate(o.offsetX, o.offsetY);
                    this.drawPlayer(player, false, o.onlyDrawTrail);
                    ctx.restore();
                }
            }
            this.drawObject(o, player);
        }

        if (!game.level.showWireframes) return;
        ctx.strokeStyle = "lime";
        ctx.lineWidth = 3;
        for (var o of this.objects) {
            if (o.w !== undefined && o.h !== undefined) {
                ctx.strokeRect(o.x, o.y, o.w, o.h);
            } else {
                if (o.type == "cube") {
                    ctx.beginPath();
                    ctx.arc(o.x, o.y, 40, 0, 2 * Math.PI);
                    ctx.stroke();
                } else if (o.type == "clue") {
                    ctx.save();
                    ctx.translate(o.x, o.y);
                    ctx.rotate(45 * Math.PI / 180);
                    ctx.strokeRect(-15, -15, 30, 30);
                    ctx.restore();
                } else if (o.type == "text") {
                    ctx.font = o.font;
                    var width = ctx.measureText(o.content).width;
                    var height = o.font.split("px")[0];
                    if (height.includes(" ")) {
                        height = height.split(" ");
                        height = height[height.length - 1];
                    }
                    height = Number(height);
                    if (isNaN(height)) {
                        ctx.beginPath();
                        ctx.arc(o.x, o.y, 20, 0, 2 * Math.PI);
                        ctx.stroke();
                    } else {
                        ctx.save();
                        ctx.translate(o.x, o.y);
                        if (o.textAlign == "left") {
                            ctx.translate(width / 2, 0);
                        }
                        if (o.textAlign == "right") {
                            ctx.translate(-width / 2, 0);
                        }
                        if (o.textBaseline == "top") {
                            ctx.translate(0, height / 2);
                        }
                        if (o.textBaseline == "bottom") {
                            ctx.translate(0, -height / 2);
                        }
                        ctx.strokeRect(-width / 2, -height / 2, width, height);
                        ctx.restore();
                    }
                } else if (o.type == "circle") {
                    ctx.beginPath();
                    ctx.arc(o.x, o.y, o.r, 0, 2 * Math.PI);
                    ctx.stroke();
                } else {
                    ctx.beginPath();
                    ctx.arc(o.x, o.y, 20, 0, 2 * Math.PI);
                    ctx.stroke();
                }
            }
            if (o.type == "player") {
                ctx.beginPath();
                ctx.arc(o.x + o.w / 2, o.y + o.h / 2, 30, 0, 2 * Math.PI);
                ctx.stroke();
            }
        }
    },
    switchGravity: function (angle) {
        if (game.level.levelComplete) return;
        game.soundEffects.switchGravity();
        for (var o of game.objects.objects) {
            o.targetAngle = angle;
        }
        var player = game.objects.objects.find(e => e.type == "player");
        if (player) {
            player.updateAngle = angle;
            player.eyeAngleTarget = angle;
            player.swapControls = false;
        }
        var o = {
            type: "image",
            image: "gravitySwitch",
            collide: false,
            alpha: 0,
            animation: 0,
            angle: (angle + 180) % 360,
            x: game.cam.x - 500,
            y: game.cam.y - 700,
            w: 1400,
            h: 1400
        }
        if (angle == 270) {
            o.x += o.w - 400;
        }
        if (angle == 0) {
            o.x += o.w;
            o.y += o.h - 400;
        }
        if (angle == 90) {
            o.y += o.h;
            o.x += 400;
        }
        if (angle == 180) {
            o.y += 500;
        }
        game.objects.objects.push(o);
        var o = {
            type: "image",
            image: "gravitySwitch2",
            collide: false,
            alpha: 0,
            animation: 0,
            angle: (angle + 180) % 360,
            x: game.cam.x - 500,
            y: game.cam.y - 700,
            w: 1000,
            h: 1000
        }
        if (angle == 270) {
            o.x += o.w - 200;
        }
        if (angle == 0) {
            o.x += o.w;
            o.y += o.h - 200;
        }
        if (angle == 90) {
            o.y += o.h;
            o.x += 200;
        }
        if (angle == 180) {
            o.y += 300;
        }
        game.objects.objects.push(o);
    },
    updatePlayerEye: function (o) {
        if (o.spawnAnimation) o.spawnAnimation--;
        if (o.controlDelay) {
            o.controlDelay--;
            return;
        }
        if (game.level.autoSkipCutscenes) o.controlDelay = 0;
        var o2;
        if (o.id == "player eye 1") {
            o2 = game.objects.objects.find(e => e.id == "player eye 2");
        }
        if (o.id == "player eye 2") {
            o2 = game.objects.objects.find(e => e.id == "player eye 1");
        }
        if (!o2) return;
        if (!o.xmove) o.xmove = 0;
        if (!o.ymove) o.ymove = 0;

        var dir = dirTo(o.x, o.y, o2.x, o2.y);
        var dist = distTo(o.x, o.y, o2.x, o2.y);
        if (!o.blobStateAnimation) o.blobStateAnimation = 0;
        if (!o.speedBoost) o.speedBoost = 0;
        o.speedBoost *= 0.997;
        if (o.blobState) {
            this.updatePlayerEyeBlobState(o, o2, dir, dist);
        } else {
            this.updatePlayerEyeNormalState(o, o2, dir, dist);
        }
        o.blobStateAnimation = Math.min(Math.max(o.blobStateAnimation, 0), 30);
    },
    updatePlayerEyeBlobState: function (o, o2, dir, dist) {
        if (!o.blobStateTime) o.blobStateTime = 0;
        o.blobStateTime++;
        o.blobStateAnimation++;

        if (o.collidingEnterable.exitBlock && o.blobStateTime > 10 && o.id == "player eye 1") {
            var a = easeInOut((o.blobStateTime - 10) / 20);
            var avgY = (o.y + o2.y) / 2;
            o.y = o.y * (1 - a) + avgY * a;
            o2.y = o2.y * (1 - a) + avgY * a;
            var move = distToMove(14 - dist, dir);
            o.x -= move.x / 2 * a;
            o.y -= move.y / 2 * a;
            o2.x += move.x / 2 * a;
            o2.y += move.y / 2 * a;
            if (o.y > 2850) {
                o.ymove -= 0.2;
            }
            if (o2.y > 2850) {
                o.ymove -= 0.2;
            }
            if (o.y > 2700 || o2.y > 2700) {
                o.ymove -= 0.2;
                o2.ymove -= 0.2;
            }
        }

        if (!o.collidingEnterable?.exitBlock) this.updateRandomPlayerEyeMovement(o, o2, dir, dist);

        var a = easeOut(o.blobStateTime / 10);
        var xmove, ymove;
        if (a < 1) {
            if (o.blobStateTime === 1 && o.id == "player eye 1") game.soundEffects.blobStart();
            xmove = o.xMoveTarget * (a * 4 + 1);
            ymove = o.yMoveTarget * (a * 4 + 1);
        } else {
            if (o.blobStateTime == 10) {
                o.xmove = o.xMoveTarget * 5;
                o.ymove = o.yMoveTarget * 5;
                if (!o.collidingEnterable.exitBlock) {
                    game.particles.createEffect("blob state start", o);
                }
            }

            this.updatePlayerEyeControls(o);

            o.ymove += 0.1;

            xmove = o.xmove;
            ymove = o.ymove;
            o.xmove *= 0.98;
            o.ymove *= 0.98;
        }
        if (o.collidingEnterable.exitBlock && o.blobStateTime > 10) {
            o.x += o.xmove;
            o.y += o.ymove;
            return;
        }

        this.updateAllPlayerEyeCollisions(o, xmove, ymove);
        this.updatePlayerEyeCubeCollection(o);

        o.collidingEnterable = false;
        for (var block of game.objects.objects) {
            if (!block.eyeCollide) continue;
            if (block.nonEnterable) continue;
            var hitbox = {
                x: block.x - 25,
                y: block.y - 25,
                w: block.w + 50,
                h: block.h + 50
            }
            if (!blocksCollidingEdge(o, hitbox)) continue;
            o.collidingEnterable = block;
            break;
        }
        if (!o.collidingEnterable && !o2.collidingEnterable) {
            o.blobState = false;
            o2.blobState = false;
            o.blobStateAnimation = 0;
            o2.blobStateAnimation = 0;
            game.particles.createEffect("blob state stop", o);
            game.particles.createEffect("blob state stop", o2);
            game.soundEffects.blobEnd();
        } else if (o.id == "player eye 1") {
            var avgX = (o.x + o2.x) / 2;
            var avgY = (o.y + o2.y) / 2;
            var playerHitbox = { x: avgX - 20, y: avgY - 20, w: 40, h: 40 };
            var b = 50;
            var h = o.collidingEnterable;
            var sideHitboxes = [
                { xmove: -1, ymove: 0, x: h.x - b, y: h.y - b, w: b, h: h.h + b * 2 },
                { xmove: 1, ymove: 0, x: h.x + h.w, y: h.y - b, w: b, h: h.h + b * 2 },
                { xmove: 0, ymove: -1, x: h.x - b, y: h.y - b, w: h.w + b * 2, h: b },
                { xmove: 0, ymove: 1, x: h.x - b, y: h.y + h.h, w: h.w + b * 2, h: b }
            ]
            sideHitboxes = sideHitboxes.filter(e => blocksColliding(e, playerHitbox));
            var xmove = sideHitboxes.reduce((a, b) => a + b.xmove, 0);
            var ymove = sideHitboxes.reduce((a, b) => a + b.ymove, 0);
            o.xmove += xmove * 0.4;
            o.ymove += ymove * 0.4;
            o2.xmove += xmove * 0.4;
            o2.ymove += ymove * 0.4;
        }

        this.updatePlayerEyeBlobOptimalDistance(o, o2, dir, dist);
    },
    updatePlayerEyeBlobOptimalDistance: function (o, o2, dir, dist) {
        var distance = 15;
        var speed = dist - distance;

        var move = distToMove(speed, dir);
        o.xmove += move.x / 200;
        o.ymove += move.y / 200;
    },
    checkForPlayerEyeBlobState: function (o, o2, dir, dist) {
        o.blobStateAnimation--;
        if (o.x != o2.x && o.y != o2.y) return;
        if (dist > 100) return;
        if (!o.collidingEnterable) return;
        if (!o2.collidingEnterable) return;
        if (o.y + o.h <= o.collidingEnterable.y) {
            o.blobStateAngle = 180;
        } else if (o.y >= o.collidingEnterable.y + o.collidingEnterable.h) {
            o.blobStateAngle = 0;
        } else if (o.x + o.w <= o.collidingEnterable.x) {
            o.blobStateAngle = 90;
        } else if (o.x >= o.collidingEnterable.x + o.collidingEnterable.w) {
            o.blobStateAngle = 270;
        }
        o.blobStateAnimation += 2;
        if (dist > 30) return;
        if (o.blobStateAnimation < 10) return;
        if (!o.blobState) {
            var moveDir = { x: 0, y: 0 };
            if (game.input.left) moveDir.x--;
            if (game.input.right) moveDir.x++;
            if (game.input.up) moveDir.y--;
            if (game.input.down) moveDir.y++;
            var move2 = distToMove(1, dirTo(0, 0, moveDir.x, moveDir.y));
            if (moveDir.x === 0 && moveDir.y === 0) move2 = { x: 0, y: 0 };
            if (o.collidingEnterable.exitBlock && o.y > 2700) move2.y = Math.min(move2.y, 0);
            if (o.collidingEnterable.exitBlock && o.y > 2700) move2.x = 0;

            var dir;
            if (o.y + o.h <= o.collidingEnterable.y) {
                dir = 180;
                move2.y = 0;
            } else if (o.y >= o.collidingEnterable.y + o.collidingEnterable.h) {
                dir = 0;
                move2.y = 0;
            } else if (o.x + o.w <= o.collidingEnterable.x) {
                dir = 90;
                move2.x = 0;
            } else if (o.x >= o.collidingEnterable.x + o.collidingEnterable.w) {
                dir = 270;
                move2.x = 0;
            }
            var move = distToMove(1, dir);

            o.enterDir = dir;
            o2.enterDir = dir;
            o.blobStateTime = 0;
            o2.blobStateTime = 0;
            o.xMoveTarget = move.x + move2.x;
            o.yMoveTarget = move.y + move2.y;
            o2.xMoveTarget = move.x + move2.x;
            o2.yMoveTarget = move.y + move2.y;
        }
        o.blobState = true;
        o2.blobState = true;
        o.speedBoost += 0.2;
        o2.speedBoost += 0.2;
        o.speedBoost = Math.min(o.speedBoost, 0.25);
        o2.speedBoost = Math.min(o2.speedBoost, 0.25);
    },
    updatePlayerEyeNormalState: function (o, o2, dir, dist) {
        var leftImpulse = Math.max(0, 300 - o.y) * Math.max(0, o.x - 2200);
        o.xmove -= leftImpulse * 0.0001;

        this.updatePlayerEyeControls(o);

        this.updatePlayerEyeOptimalDistance(o, o2, dir, dist);
        this.updateRandomPlayerEyeMovement(o, o2, dir, dist);

        o.xmove *= 0.9;
        o.ymove *= 0.9;

        this.updateAllPlayerEyeCollisions(o);
        this.updatePlayerEyeCubeCollection(o);
        this.checkForPlayerEyeBlobState(o, o2, dir, dist);
    },
    updatePlayerEyeControls: function (o) {
        var speed = (0.4 + o.speedBoost) * game.level.playerSpeedMultiplier;
        if (o.blobState) speed *= 0.1;
        if (game.input.left) {
            o.xmove -= speed;
            game.soundEffects.bubbles();
        }
        if (game.input.right) {
            o.xmove += speed;
            game.soundEffects.bubbles();
        }
        if (game.input.up) {
            o.ymove -= speed;
            game.soundEffects.bubbles();
        }
        if (game.input.down) {
            o.ymove += speed;
            game.soundEffects.bubbles();
        }
    },
    updatePlayerEyeOptimalDistance: function (o, o2, dir, dist) {
        var damping = 1000;
        var distance = 200;
        if (o.x == o2.x || o.y == o2.y) {
            if (o.collidingEnterable || o2.collidingEnterable) distance = 40;
            if (o.collidingEnterable && o2.collidingEnterable) {
                distance = 20;
                damping = 200;
            }
        }

        var speed = dist - distance;
        if (speed < 0) {
            speed *= 0.5;
            speed = Math.max(speed, -30);
        }
        if (dist < 3 && game.level.triggers.tripped("red cube")) speed *= 0.2;
        if (dist === 0 && o.id == "player eye 1") {
            speed *= -1;
        }
        var move = distToMove(speed, dir);
        o.xmove += move.x / damping;
        o.ymove += move.y / damping;
    },
    updateRandomPlayerEyeMovement: function (o, o2, dir, dist) {
        if (game.level.triggers.tripped("red cube")) return;
        var a1 = game.level.levelAnimationTime;
        var a2 = game.level.levelAnimationTime + 10000;
        if (o.id == "player eye 2") {
            a1 = game.level.levelAnimationTime + 847634;
            a2 = game.level.levelAnimationTime + 857634;
        }
        var a3 = t + 20000;

        o.xmove += Math.sin(a1 / 100) / 90 + Math.sin(a1 / 435) / 90 + Math.sin(a1 / 34) / 90;
        o.ymove += Math.sin(a2 / 100) / 90 + Math.sin(a2 / 435) / 90 + Math.sin(a2 / 34) / 90;
        var rotation = Math.sin(a3 / 100) / 90 + Math.sin(a3 / 435) / 90 + Math.sin(a3 / 34) / 90;
        var move = distToMove(rotation, dir + 90);
        o.xmove += move.x;
        o.ymove += move.y;
    },
    updateAllPlayerEyeCollisions: function (player, xmove = player.xmove, ymove = player.ymove) {
        var move = { x: xmove, y: ymove };
        player.collidingEnterable = false;
        var axises = ["x", "y"];
        var dims = ["w", "h"];
        for (var n = 0; n < 2; n++) {
            if (game.level.playerFlightMode) break;
            var axis = axises[n];
            var dim = dims[n];
            player[axis] += move[axis];
            this.updatePlayerEyeCollisions(player, axis, dim);
        }
    },
    updatePlayerEyeCollisions: function (player, axis, dim) {
        for (var o of game.objects.objects) {
            if (!o.eyeCollide) continue;
            if (!blocksCollidingEdge(player, o)) continue;
            if (o.type == "lava" && !game.level.playerInvincible) {
                player.delete = true;
                var otherId = "player eye 2";
                if (player.id == "player eye 2") otherId = "player eye 1";
                var other = game.objects.objects.find(e => e.id == otherId);
                if (other) {
                    other.delete = true;
                    game.particles.createEffect("eye death", other);
                }
                game.particles.createEffect("eye death", player);
                game.cam.screenshake = 20;
                game.soundEffects.death();
            }
            if (player.blobState && !o.nonEnterable) continue;
            if (!blocksColliding(player, o)) continue;
            if (player[axis] + player[dim] / 2 < o[axis] + o[dim] / 2) {
                player[axis] = o[axis] - player[dim];
                if (!o.nonEnterable) player.collidingEnterable = o;
            } else {
                player[axis] = o[axis] + o[dim];
                if (!o.nonEnterable) player.collidingEnterable = o;
            }
            player[`${axis}move`] = 0;
        }
    },
    updatePlayerEyeCubeCollection(player) {
        for (var o of game.objects.objects) {
            if (o.type != "cube") continue;
            if (o.collected) continue;
            if (o.noCollect === true) continue;
            var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
            if (dist > 50) continue;

            game.level.collectCube(o);
        }
    },
    updateOldPlayer: function (o) {
        var level8SpeedMultiplier = (game.level.level === 7 && game.level.triggers.tripped("shortcut")) ? 10 : 1;
        var level8JumpMultiplier = (game.level.level === 7 && game.level.triggers.tripped("shortcut")) ? 5 : 1;
        if (game.level.level === 8 && game.level.triggers.tripped("ultra shortcut")) level8JumpMultiplier = 8;
        var level8FallMultiplier = (game.level.level === 7 && game.level.triggers.tripped("shortcut")) ? 5 : 1;
        if (game.level.levelComplete) {
            o.x--;
            return;
        }
        if (o.delete) return;
        for (var o2 of game.objects.objects) {
            if (game.level.playerInvincible || game.level.playerFlightMode) break;
            if (!o2.collide) continue;
            if (o2.type != "lava") continue;
            if (!blocksColliding(o, o2)) continue;
            o.delete = true;
            game.soundEffects.death();
            game.particles.createEffect("player death", o);
            game.cam.screenshake = 20;
        }

        if (game.level.playerFlightMode) {
            if (game.input.left) {
                o.xmove -= 0.15 * game.level.playerSpeedMultiplier * level8SpeedMultiplier;
            }
            if (game.input.right) {
                o.xmove += 0.15 * game.level.playerSpeedMultiplier * level8SpeedMultiplier;
            }
            if (game.input.up) {
                o.ymove -= 0.15 * game.level.playerSpeedMultiplier * level8SpeedMultiplier;
            }
            if (game.input.down) {
                o.ymove += 0.15 * game.level.playerSpeedMultiplier * level8SpeedMultiplier;
            }
            o.xmove *= 0.96;
            o.ymove *= 0.96;
            o.x += o.xmove;
            o.y += o.ymove;
            return;
        }

        o.x += o.xmove;
        for (var o2 of game.objects.objects) {
            if (!o2.collide) continue;
            if (o2.type != "block") continue;
            if (!blocksColliding(o, o2)) continue;
            if (o.x + o.w / 2 < o2.x + o2.w / 2) {
                o.x = o2.x - o.w;
            } else {
                o.x = o2.x + o2.w;
            }
            o.xmove = 0;
        }
        var touchingGround = false;
        o.y += o.ymove;
        for (var o2 of game.objects.objects) {
            if (!o2.collide) continue;
            if (o2.type != "block") continue;
            if (!blocksColliding(o, o2)) continue;
            if (o.y + o.h / 2 < o2.y + o2.h / 2) {
                touchingGround = true;
                o.y = o2.y - o.h;
            } else {
                o.y = o2.y + o2.h;
            }
            o.ymove = 0;
        }

        if (game.input.left) {
            o.xmove += 0.15 * game.level.playerSpeedMultiplier * level8SpeedMultiplier;
        }
        if (game.input.right) {
            o.xmove -= 0.15 * game.level.playerSpeedMultiplier * level8SpeedMultiplier;
        }
        if (game.input.down && touchingGround) {
            o.ymove = -6 * game.level.playerJumpMultiplier * level8JumpMultiplier;
        }
        o.ymove += 0.08 * level8FallMultiplier;

        o.xmove *= 0.96;
        o.ymove *= 0.98;
    },
    updateCirclesPlayer: function (o) {
        var level8SpeedMultiplier = (game.level.level === 7 && game.level.triggers.tripped("shortcut")) ? 10 : 1;
        var level8JumpMultiplier = (game.level.level === 7 && game.level.triggers.tripped("shortcut")) ? 3 : 1;
        var level8FallMultiplier = (game.level.level === 7 && game.level.triggers.tripped("shortcut")) ? 4 : 1;
        if (game.level.playerFlightMode) {
            if (game.input.left) {
                o.xmove -= 0.12 * game.level.playerSpeedMultiplier * level8SpeedMultiplier;
            }
            if (game.input.right) {
                o.xmove += 0.12 * game.level.playerSpeedMultiplier * level8SpeedMultiplier;
            }
            if (game.input.up) {
                o.ymove -= 0.12 * game.level.playerSpeedMultiplier * level8SpeedMultiplier;
            }
            if (game.input.down) {
                o.ymove += 0.12 * game.level.playerSpeedMultiplier * level8SpeedMultiplier;
            }
            o.x += o.xmove;
            o.y += o.ymove;
            o.xmove *= 0.98;
            o.ymove *= 0.98;
            return;
        }

        if (game.input.left) {
            o.xmove -= 0.12 * game.level.playerSpeedMultiplier * level8SpeedMultiplier;
        }
        if (game.input.right) {
            o.xmove += 0.12 * game.level.playerSpeedMultiplier * level8SpeedMultiplier;
        }
        o.turn *= 0.95;
        o.turn += o.xmove * 0.05;
        o.angle += o.turn;

        var collide = false;
        for (var o2 of game.objects.objects) {
            if (o2.type != "circle") continue;
            if (o2.circlesCollide === false) continue;
            var dist = distTo(o.x, o.y, o2.x, o2.y);
            if (dist > o.r + o2.r) continue;
            collide = true;

            var energy = 1.6;
            var distX = o2.x - o.x;
            var distY = o2.y - o.y;
            var nx = distX / dist;
            var ny = distY / dist;
            var penetration = o.r + o2.r - dist;
            var k = o.xmove * nx + o.ymove * ny;
            o.xmove -= k * nx * energy;
            o.turn += k * nx * 5;
            o.ymove -= k * ny * energy;
            o.x -= nx * penetration;
            o.y -= ny * penetration;
        }

        if (game.input.up && collide) {
            o.ymove = -6 * game.level.playerJumpMultiplier * level8JumpMultiplier;
        }

        o.ymove += 0.15 * level8FallMultiplier;
        o.xmove *= 0.98;
        o.ymove *= 0.98;

        o.x += o.xmove;
        o.y += o.ymove;
    },
    updatePingPongPlayer: function (o) {
        var level8SpeedMultiplier = game.level.triggers.tripped("shortcut") ? 4 : 0;
        if (game.level.playerFlightMode) {
            if (game.input.left) {
                o.x -= 4 * game.level.playerSpeedMultiplier * level8SpeedMultiplier;
            }
            if (game.input.right) {
                o.x += 4 * game.level.playerSpeedMultiplier * level8SpeedMultiplier;
            }
            if (game.input.up) {
                o.y -= 4 * game.level.playerSpeedMultiplier * level8SpeedMultiplier;
            }
            if (game.input.down) {
                o.y += 4 * game.level.playerSpeedMultiplier * level8SpeedMultiplier;
            }
            return;
        }
        o.x += o.xmove * game.level.playerSpeedMultiplier;
        o.y += o.ymove * game.level.playerSpeedMultiplier;
        if (o.y <= -4500) {
            o.y = -4500;
            o.ymove *= -1;
            game.soundEffects.pingPongHit();
        }
        if (o.y >= -3500 - o.h) {
            o.y = -3500 - o.h;
            o.ymove *= -1;
            game.soundEffects.pingPongHit();
        }
        var o2 = game.objects.objects.find(e => e.id == "player score");
        if (o2.scoreTime) o2.scoreTime--;
        var o2 = game.objects.objects.find(e => e.id == "opponent score");
        if (o2.scoreTime) o2.scoreTime--;
        if (o.x < -500) {
            var o2 = game.objects.objects.find(e => e.id == "player score");
            if (!o2.scoreTime) {
                o2.content = String(Number(o2.content) + 1);
                o2.scoreTime = 10;
            }
        }
        var playerPaddle = game.objects.objects.find(e => e.id == "player paddle");
        if (o.xmove > 0 && blocksColliding(o, playerPaddle)) {
            o.xmove *= -1.1;
            o.ymove *= 1.1;
            o.x = playerPaddle.x - o.w;
            game.soundEffects.pingPongHit();
        }
        var opponentPaddle = game.objects.objects.find(e => e.id == "opponent paddle");
        if (o.xmove < 0 && blocksColliding(o, opponentPaddle)) {
            o.xmove *= -1.1;
            o.ymove *= 1.1;
            o.x = opponentPaddle.x + opponentPaddle.w;
            game.soundEffects.pingPongHit();
        }
        if (o.x > 500 - o.w) {
            if (game.level.playerInvincible) {
                o.xmove *= -1.1;
                o.ymove *= 1.1;
                o.x = 500 - o.w;
                game.soundEffects.pingPongHit();
            } else {
                game.particles.createEffect("ping pong death", o);
                o.delete = true;
                game.soundEffects.death();
                game.cam.screenshake = 20;
                var o2 = game.objects.objects.find(e => e.id == "opponent score");
                if (!o2.scoreTime) {
                    o2.content = String(Number(o2.content) + 1);
                    o2.scoreTime = 10;
                }
            }
        }
    },
    updatePacmanGhost: function (o) {
        if (!game.level.triggers.tripped("room 5")) return;
        if (!o.color) o.color = "cyan";
        if (!o.direction) o.direction = 0;
        if (!o.animation) o.animation = 0;
        o.animation++;
        var player = game.objects.objects.find(e => e.type == "pacman player");
        if (!player) return;
        if (player.dead) return;
        if (!game.level.triggers.tripped("red cube")) {
            var move = distToMove(0.5, o.direction);
            o.x += move.x;
            o.y += move.y;
            if (o.animation % 80 == 0) {
                o.direction += 180;
                o.direction %= 360;
            }
        } else {
            o.animation++;
            if (!o.targetNode) {
                var smallestDist = Infinity;
                for (var n = 0; n < game.objects.ghostNodes.length; n++) {
                    var node = game.objects.ghostNodes[n];
                    var dist = distTo(o.x, o.y, node.x, node.y);
                    if (dist < smallestDist) {
                        o.targetNode = node;
                        smallestDist = dist;
                    }
                }
            }
            if (o.targetNode) {
                var speedMultiplier = 0.4;
                if (o.color == "red") speed = 7;
                if (o.color == "orange") speed = 10;
                if (o.color == "cyan") speed = 10;
                if (o.color == "pink") speed = 10;
                speed *= speedMultiplier;
                var dir = dirTo(o.x, o.y, o.targetNode.x, o.targetNode.y);
                var dist = distTo(o.x, o.y, o.targetNode.x, o.targetNode.y);
                var move = distToMove(speed, dir);
                o.x += move.x;
                o.y += move.y;
                if (dist < speed) {
                    o.x = o.targetNode.x;
                    o.y = o.targetNode.y;
                    this.pathfindForGhost(o);
                }
                if (o.color == "cyan") {
                    if (!o.targetAngle) o.targetAngle = 0;
                    if (!o.targetDistTime) o.targetDistTime = 0;
                    if (o.targetDistTime % 2000 < 1000) {
                        o.targetAngle += 0.7 * speedMultiplier;
                    } else {
                        o.targetAngle -= 0.7 * speedMultiplier;
                    }
                    o.targetDistTime += 1 * speedMultiplier;
                    o.targetDist = 550;
                    var move = distToMove(o.targetDist, o.targetAngle);
                    o.targetX = 1000 + move.x;
                    o.targetY = -4000 + move.y;
                }
                if (o.color == "pink") {
                    if (!o.targetAngle) o.targetAngle = 0;
                    if (!o.targetDistTime) o.targetDistTime = 0;
                    if (o.targetDistTime % 1400 < 900) {
                        o.targetAngle += 0.5 * speedMultiplier;
                    } else {
                        o.targetAngle -= 0.5 * speedMultiplier;
                    }
                    o.targetDistTime += 1 * speedMultiplier;
                    o.targetDist = Math.sin(o.targetDistTime / 20) * 100 + 350;
                    var move = distToMove(o.targetDist, o.targetAngle);
                    o.targetX = 1000 + move.x;
                    o.targetY = -4000 + move.y;
                }
                if (o.color == "orange") {
                    if (!o.targetAngle) o.targetAngle = 0;
                    if (!o.targetDistTime) o.targetDistTime = 0;
                    o.targetAngle += 0.05 * speedMultiplier;
                    o.targetDistTime += 1 * speedMultiplier;
                    o.targetDist = Math.sin(o.targetDistTime / 50) * 700;
                    var move = distToMove(o.targetDist, o.targetAngle);
                    o.targetX = 1000 + move.x;
                    o.targetY = -4000 + move.y;
                }
            }
        }
    },
    pathfindForGhost: function (o) {
        var player = game.objects.objects.find(e => e.type == "pacman player");
        if (!player) return;
        var directions = [];
        if (o.targetNode.left !== undefined && o.direction != 90) directions.push("left");
        if (o.targetNode.right !== undefined && o.direction != 270) directions.push("right");
        if (o.targetNode.top !== undefined && o.direction != 180) directions.push("top");
        if (o.targetNode.bottom !== undefined && o.direction != 0) directions.push("bottom");
        var direction = directions[0];
        if (o.color == "red") {
            var minDist = Infinity;
            for (var n = 0; n < directions.length; n++) {
                var node = game.objects.ghostNodes[o.targetNode[directions[n]].id];
                var dist = node.distToPlayer + distTo(node.x, node.y, player.x, player.y) / 100;
                if (dist < minDist) {
                    minDist = dist;
                    direction = directions[n];
                }
            }
        } else if (o.color == "cyan" || o.color == "pink" || o.color == "orange") {
            var minDist = Infinity;
            for (var n = 0; n < directions.length; n++) {
                var node = game.objects.ghostNodes[o.targetNode[directions[n]].id];
                var dist = distTo(node.x + node.w / 2, node.y + node.h / 2, o.targetX, o.targetY);
                if (o.color == "cyan") {
                    var ghostDistToCenter = distTo(o.x + o.w / 2, o.y + o.h / 2, 1000, -4000);
                    if (ghostDistToCenter < 350) {
                        var nodeDistToCenter = distTo(node.x + node.w / 2, node.y + node.h / 2, 1000, -4000);
                        dist = -nodeDistToCenter;
                    }
                }
                if (dist < minDist) {
                    minDist = dist;
                    direction = directions[n];
                }
            }
        }
        o.direction = [270, 0, 90, 180][["left", "top", "right", "bottom"].indexOf(direction)];
        o.targetNode = game.objects.ghostNodes[o.targetNode[direction].id];
    },
    updateBoss: function (o) {
        if (o.unstunnedTime === undefined) o.unstunnedTime = 0;
        if (o.leftFireTime === undefined) o.leftFireTime = 500;
        if (o.rightFireTime === undefined) o.rightFireTime = 1000;
        if (o.leftFireAnimation === undefined) o.leftFireAnimation = 0;
        if (o.rightFireAnimation === undefined) o.rightFireAnimation = 0;
        if (o.idle) return;
        if (o.leftFireAnimation) o.leftFireAnimation--;
        if (o.rightFireAnimation) o.rightFireAnimation--;
        if (o.leftFireAnimation == 29) game.soundEffects.bossShootFireball();
        if (o.rightFireAnimation == 29) game.soundEffects.bossShootFireball();
        if (o.rightFireAnimation === 1) {
            var o2 = {
                type: "boss fireball",
                x: o.x + o.w + o.w * 0.25,
                y: o.y + o.h * 0.95
            }
            game.objects.objects.unshift(o2);
        }
        if (o.leftFireAnimation === 1) {
            var o2 = {
                type: "boss fireball",
                x: o.x - o.w * 0.25,
                y: o.y + o.h * 0.95
            }
            game.objects.objects.unshift(o2);
        }
        if (o.stunnedTime) {
            o.unstunnedTime = 0;
            o.stunnedTime--;
            if (!game.level.triggers.tripped("boss dead")) {
                if (o.xOrigin + o.w / 2 > -2100) {
                    o.x = o.x * 0.99 + -2450 * 0.01;
                } else {
                    o.x = o.x * 0.99 + -2150 * 0.01;
                }
                o.y += Math.min(-1 + (200 - o.stunnedTime) * 0.01, 0);
            }
        } else {
            o.unstunnedTime++;
            o.y = Math.max(o.y, -699.5 + 49.5 * easeInOut(o.unstunnedTime / 50));
            o.rightFireTime--;
            o.leftFireTime--;
            if (o.rightFireTime == 0) {
                o.rightFireTime = 1000;
                o.rightFireAnimation = 30;
            }
            if (o.leftFireTime == 0) {
                o.leftFireTime = 1000;
                o.leftFireAnimation = 30;
            }
            o.x += o.direction / 2;
            if (o.x > -2150) o.direction = -1;
            if (o.x < -2450) o.direction = 1;
        }
    },
    updatePacmanPlayer: function (o) {
        if (o.dead) {
            if (o.deathAnimation === undefined) o.deathAnimation = 0;
            if (o.deathAnimation == 60) {
                game.soundEffects.pacmanDeath();
            }
            o.deathAnimation++;
            o.animation = 0;
            return;
        }
        if (game.level.triggers.tripped("red cube") && !(game.level.playerInvincible || game.level.playerFlightMode) && !o.dead) {
            var ghosts = game.objects.objects.filter(e => e.type == "pacman ghost");
            for (var o2 of ghosts) {
                var dist = distTo(o2.x + o2.w / 2, o2.y + o2.h / 2, o.x + o.w / 2, o.y + o.h / 2);
                if (dist > 30) continue;
                game.soundEffects.death();
                o.dead = true;
                game.cam.screenshake = 20;
                break;
            }
        }
        o.animation = ((o.x + o.y) / 40 * Math.PI + Math.PI * 0.2) * 2;
        var move = distToMove(2, o.angle);
        if (game.level.triggers.tripped("shortcut")) {
            move = distToMove(10, o.angle);
        }
        if (game.level.triggers.tripped("ultra shortcut")) {
            move = distToMove(20, o.angle);
        }
        if (game.level.triggers.tripped("red cube")) {
            move = distToMove(4, o.angle);
        }
        if (game.level.playerSpeedMultiplier !== 1) {
            var move = distToMove(game.level.playerSpeedMultiplier, o.angle);
        }
        o.touchingLeft = false;
        o.touchingRight = false;
        o.touchingTop = false;
        o.touchingBottom = false;
        o.x += move.x;
        o.x = Math.round(o.x);
        for (var o2 of game.objects.objects) {
            if (game.level.playerFlightMode) break;
            if (o2.type == "cube" && o2.red && !o2.collected) {
                var dist = distTo(o.x + o.w / 2, o.y + o.h / 2, o2.x, o2.y);
                if (dist < 70) {
                    game.level.collectCube(o2);
                }
            }
            if (!o2.pacmanCollide) continue;
            if (!blocksCollidingEdge(o, o2)) continue;
            if (o.y == o2.y + o2.h || o.y == o2.y - o.h) continue;
            if (o.x + o.w / 2 < o2.x + o2.w / 2) {
                o.touchingRight = true;
            } else {
                o.touchingLeft = true;
            }
            if (!blocksColliding(o, o2)) continue;
            if (o.x + o.w / 2 < o2.x + o2.w / 2) {
                o.x = o2.x - o.w;
                o.y = Math.round((o.y - 20) / 40) * 40 + 20;
            } else {
                o.x = o2.x + o2.w;
                o.y = Math.round((o.y - 20) / 40) * 40 + 20;
            }
        }
        o.y += move.y;
        o.y = Math.round(o.y);
        for (var o2 of game.objects.objects) {
            if (game.level.playerFlightMode) break;
            if (!o2.pacmanCollide) continue;
            if (!blocksCollidingEdge(o, o2)) continue;
            if (o.x == o2.x + o2.w || o.x == o2.x - o.w) continue;
            if (o.y + o.h / 2 < o2.y + o2.h / 2) {
                o.touchingBottom = true;
            } else {
                o.touchingTop = true;
            }
            if (!blocksColliding(o, o2)) continue;
            if (o.y + o.h / 2 < o2.y + o2.h / 2) {
                o.y = o2.y - o.h;
                o.x = Math.round((o.x - 20) / 40) * 40 + 20;
            } else {
                o.y = o2.y + o2.h;
                o.x = Math.round((o.x - 20) / 40) * 40 + 20;
            }
        }
        if (o.nextDirection == 0 && !o.touchingTop) o.angle = 0;
        if (o.nextDirection == 90 && !o.touchingRight) o.angle = 90;
        if (o.nextDirection == 180 && !o.touchingBottom) o.angle = 180;
        if (o.nextDirection == 270 && !o.touchingLeft) o.angle = 270;
        if (game.input.upHold === 1) {
            o.nextDirection = 0;
        }
        if (game.input.downHold === 1) {
            o.nextDirection = 180;
        }
        if (game.input.rightHold === 1) {
            o.nextDirection = 90;
        }
        if (game.input.leftHold === 1) {
            o.nextDirection = 270;
        }
        for (var o2 of game.objects.objects) {
            if (o2.type != "pacman dot") continue;
            if (o2.collected) continue;
            if (!blocksColliding(o, o2)) continue;
            var n = -Math.round((o2.x + o2.y) / 40) % 2 + 1;
            game.soundEffects.eatDot(n);
            o2.collected = true;
            o2.alpha = 0;
        }
    },
    updateSnakePlayer: function (o) {
        if (o.deathAnimation) {
            o.deathAnimation++;
            return;
        }
        var speed = Math.round(Math.max(15 - o.length / 12, 8)) / game.level.playerSpeedMultiplier;
        if (game.level.level === 7 && game.level.triggers.tripped("shortcut")) speed = 4;
        if (game.level.level === 7 && game.level.triggers.tripped("ultra shortcut")) speed = 2;
        o.move.time++;
        var p = o.move.time / speed;
        o.x = o.move.origin.x + o.move.direction.x * p;
        o.y = o.move.origin.y + o.move.direction.y * p;
        if (o.move.time > speed * 0.6) {
            for (var o2 of game.objects.objects) {
                if (o2.type != "apple") continue;
                if (!blocksColliding(o, o2)) continue;
                o2.delete = true;
                o.length += 4;
                for (var o3 of game.objects.objects) {
                    if (o3.type != "snake body") continue;
                    o3.time += speed * 4;
                    game.soundEffects.eatApple();
                }
            }
            var collide = false;
            for (var o2 of game.objects.objects) {
                if (!o2.snakeCollide) continue;
                if (o2.noCollideTime) continue;
                if (!blocksColliding(o, o2)) continue;
                collide = true;
                break;
            }
            if (collide && !game.level.playerInvincible && !game.level.playerFlightMode) {
                for (var o2 of game.objects.objects) {
                    if (o2.type != "snake body" && o2.type != "snake player") continue;
                    o2.deathAnimation = 1;
                    game.soundEffects.death();
                }
                game.cam.screenshake = 20;
            }
        }
        if (o.move.time >= speed) {
            o.move.lastDirection.x = o.move.direction.x;
            o.move.lastDirection.y = o.move.direction.y;
            var body = {
                x: o.x,
                y: o.y,
                w: 40,
                h: 40,
                type: "snake body",
                time: o.length * speed - speed,
                snakeCollide: true,
                noCollideTime: speed,
                move: {
                    direction: {
                        x: o.move.direction.x,
                        y: o.move.direction.y
                    },
                    origin: {
                        x: o.move.origin.x,
                        y: o.move.origin.y
                    },
                    speed: speed
                }
            };
            game.objects.objects.splice(game.objects.objects.length - 1, 0, body);
            o.move.origin.x = o.x;
            o.move.origin.y = o.y;
            o.move.time = 0;
            o.turned = false;
            if (o.preserveTurnedStatus) {
                o.preserveTurnedStatus = false;
                o.turned = true;
            }

            if (o.move.directionQueue.length > 0) {
                var direction = o.move.directionQueue.shift();
                var opposed = o.move.lastDirection.x == -direction.x || o.move.lastDirection.y == -direction.y;
                if (!opposed) {
                    o.move.direction = direction;
                    if (direction.x == 40) {
                        game.soundEffects.sokobanCubeBox(1);
                    }
                    if (direction.x == -40) {
                        game.soundEffects.sokobanCubeBox(2);
                    }
                    if (direction.y == 40) {
                        game.soundEffects.sokobanCubeBox(3);
                    }
                    if (direction.y == -40) {
                        game.soundEffects.sokobanCubeBox(4);
                    }
                }
            }
        }
        o.angle = dirTo(0, 0, o.move.direction.x, o.move.direction.y);
        var move = false;
        if (game.input.leftHold === 1) {
            move = { x: -40, y: 0 }
        }
        if (game.input.rightHold === 1) {
            move = { x: 40, y: 0 }
        }
        if (game.input.upHold === 1) {
            move = { x: 0, y: -40 }
        }
        if (game.input.downHold === 1) {
            move = { x: 0, y: 40 }
        }
        if (!move) return;
        if (o.turned) {
            if (o.move.directionQueue.length < 4) o.move.directionQueue.push(move);
        } else {
            o.turned = true;
            if (o.move.time > speed * 0.6) {
                if (o.move.directionQueue.length < 4) {
                    o.move.directionQueue.push(move);
                    o.preserveTurnedStatus = true;
                }
            } else {
                var opposedX = o.move.lastDirection.x && o.move.lastDirection.x == -move.x;
                var opposedY = o.move.lastDirection.y && o.move.lastDirection.y == -move.y;
                var opposed = opposedX || opposedY;
                if (!opposed) {
                    o.move.direction = move;
                    if (move.x == 40) {
                        game.soundEffects.sokobanCubeBox(1);
                    }
                    if (move.x == -40) {
                        game.soundEffects.sokobanCubeBox(2);
                    }
                    if (move.y == 40) {
                        game.soundEffects.sokobanCubeBox(3);
                    }
                    if (move.y == -40) {
                        game.soundEffects.sokobanCubeBox(4);
                    }
                }
            }
        }
    },
    updateSokobanPlayer: function (o) {
        var delay = 17;
        var time = 5 / game.level.playerSpeedMultiplier;
        var instantMove = game.level.level === 7 && game.level.triggers.tripped("shortcut");
        if (game.level.triggers.tripped("cube room")) instantMove = false;
        if (instantMove) {
            time = 1;
            delay = 0;
        }
        if (o.move) {
            o.move.time++;
            var p = o.move.time / time;
            o.x = o.move.origin.x + o.move.direction.x * p;
            o.y = o.move.origin.y + o.move.direction.y * p;
            if (o.move.time >= time) {
                o.x = o.move.origin.x + o.move.direction.x;
                o.y = o.move.origin.y + o.move.direction.y;
                o.move = false;
            }
        } else {
            if (game.input.leftStart === 1 || game.input.leftHold > delay) {
                o.move = {
                    direction: { x: -40, y: 0 },
                    origin: { x: o.x, y: o.y },
                    time: 0
                }
            }
            if (game.input.rightStart === 1 || game.input.rightHold > delay) {
                o.move = {
                    direction: { x: 40, y: 0 },
                    origin: { x: o.x, y: o.y },
                    time: 0
                }
            }
            if (game.input.upStart === 1 || game.input.upHold > delay) {
                o.move = {
                    direction: { x: 0, y: -40 },
                    origin: { x: o.x, y: o.y },
                    time: 0
                }
            }
            if (game.input.downStart === 1 || game.input.downHold > delay) {
                o.move = {
                    direction: { x: 0, y: 40 },
                    origin: { x: o.x, y: o.y },
                    time: 0
                }
            }
            if (o.move && !game.level.playerFlightMode) {
                var newPos = {
                    x: o.move.origin.x + o.move.direction.x,
                    y: o.move.origin.y + o.move.direction.y,
                    w: 40,
                    h: 40
                }
                var cor = newPos;
                var moveBox = false;
                while (game.objects.objects.find(function (e) {
                    if (e.type !== "sokoban box") return false;
                    if (e.x != cor.x) return false;
                    if (e.y != cor.y) return false;
                    return true;
                })) {
                    var box = game.objects.objects.find(function (e) {
                        if (e.type !== "sokoban box") return false;
                        if (e.x != cor.x) return false;
                        if (e.y != cor.y) return false;
                        return true;
                    });
                    box.move = structuredClone(o.move);
                    box.move.origin.x = box.x;
                    box.move.origin.y = box.y;
                    cor.x += o.move.direction.x;
                    cor.y += o.move.direction.y;
                    cor.x = Math.round(cor.x);
                    cor.y = Math.round(cor.y);
                    moveBox = true;
                }
                var collide = game.objects.objects.some(function (e) {
                    if (!e.sokobanCollide && !(moveBox && e.sokobanBoxCollide)) return false;
                    if (blocksColliding(e, cor)) return true;
                });
                if (collide) {
                    o.move = false;
                    for (var box of game.objects.objects) {
                        if (box.type != "sokoban box") continue;
                        box.move = false;
                    }
                }
            }
        }

        var player = o;
        for (var o of game.objects.objects) {
            if (o.type != "cube") continue;
            if (!o.collide) continue;
            if (o.collected) continue;
            var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
            if (dist > 50) continue;
            game.level.collectCube(o);
        }
    },
    updatePlayer: function (o) {
        this.updatePlayerAnimations(o);
        if (o.updatePlayer === false) return;
        if (game.level.playerInPortal) {
            this.updatePlayerInPortal(o);
        } else if (o.updateMovement !== false) {
            this.updateControlsForUpdateAngle(o);
            this.updatePlayerMovement(o);
            this.revertControlsForUpdateAngle(o);
            this.updatePlayerCollisions(o);
            this.updatePlayerPortalCollisions(o);
        }
        this.updatePlayerCubeCollection(o);
        this.updatePlayerCoyoteTime(o);
        this.updatePlayerDeathAnimation(o);
    },
    updatePlayerInPortal: function (player) {
        var portal = game.objects.objects.find(e => e.portalNumber == game.level.portalNumber);
        var box = { x: portal.collideX, y: portal.collideY, w: portal.collideW, h: portal.collideH };
        player.againstBottom = { current: false, last: 10000, time: 0 };
        player.againstLeft = { current: false, last: 10000, time: 0 };
        player.againstRight = { current: false, last: 10000, time: 0 };
        player.againstTop = { current: false, last: 10000, time: 0 };
        if (game.level.playerExitingPortal) {
            var move = distToMove(5, portal.angle);
            player.xmove = move.x;
            player.ymove = move.y;
            player.x += player.xmove;
            player.y += player.ymove;
            if (!blocksCollidingEdge(box, player)) {
                game.level.playerInPortal = false;
                game.level.playerExitingPortal = false;
                game.level.portalNumber = false;
                portal.teleportTime = 50;
            }
        } else if (blocksCollidingEdge(box, player)) {
            var move = distToMove(5, 180 + portal.angle);
            player.xmove = player.xmove * 0.9 + move.x * 0.1;
            player.ymove = player.ymove * 0.9 + move.y * 0.1;
            player.x += player.xmove;
            player.y += player.ymove;
        } else {
            var pair = game.objects.objects.find(e => e.portalNumber == portal.pair);
            if (pair) {
                player.positionHistory = [];
                game.level.playerExitingPortal = true;
                game.level.portalNumber = pair.portalNumber;
                var playerSize = player.w / 2 + player.h / 2;
                var cor = rotate(pair.x, pair.y, pair.x + pair.length / 2, pair.y + playerSize / 2, -pair.angle);
                player.x = cor.x - playerSize / 2;
                player.y = cor.y - playerSize / 2;
            }
        }
    },
    swapPlayerAttributes: function (o, swap, swapControls) {
        swapControls = swapControls || swap;
        if (swap.left != "left" || swap.right != "right" || swap.top != "top" || swap.bottom != "bottom") {
            var dirs = {
                left: structuredClone(o.againstLeft),
                right: structuredClone(o.againstRight),
                top: structuredClone(o.againstTop),
                bottom: structuredClone(o.againstBottom)
            }
            o.againstLeft = dirs[swap.left];
            o.againstRight = dirs[swap.right];
            o.againstTop = dirs[swap.top];
            o.againstBottom = dirs[swap.bottom];
            var dirs = {
                left: structuredClone(o.touchingLeft),
                right: structuredClone(o.touchingRight),
                top: structuredClone(o.touchingTop),
                bottom: structuredClone(o.touchingBottom)
            }
            o.touchingLeft = dirs[swap.left];
            o.touchingRight = dirs[swap.right];
            o.touchingTop = dirs[swap.top];
            o.touchingBottom = dirs[swap.bottom];
        }
        if (swapControls.left != "left" || swapControls.right != "right" || swapControls.top != "top" || swapControls.bottom != "bottom") {
            var dirs = {
                left: game.input.left,
                right: game.input.right,
                top: game.input.up,
                bottom: game.input.down
            }
            game.input.left = dirs[swapControls.left];
            game.input.right = dirs[swapControls.right];
            game.input.up = dirs[swapControls.top];
            game.input.down = dirs[swapControls.bottom];
            var dirs = {
                left: game.input.leftHold,
                right: game.input.rightHold,
                top: game.input.upHold,
                bottom: game.input.downHold
            }
            game.input.leftHold = dirs[swapControls.left];
            game.input.rightHold = dirs[swapControls.right];
            game.input.upHold = dirs[swapControls.top];
            game.input.downHold = dirs[swapControls.bottom];
            var dirs = {
                left: game.input.leftStart,
                right: game.input.rightStart,
                top: game.input.upStart,
                bottom: game.input.downStart
            }
            game.input.leftStart = dirs[swapControls.left];
            game.input.rightStart = dirs[swapControls.right];
            game.input.upStart = dirs[swapControls.top];
            game.input.downStart = dirs[swapControls.bottom];
        }
    },
    updateControlsForUpdateAngle: function (o) {
        var swap = {
            left: "left",
            right: "right",
            top: "top",
            bottom: "bottom"
        };
        if (o.updateAngle == 270) {
            var xmove = o.xmove;
            var ymove = o.ymove;
            o.ymove = xmove;
            o.xmove = -ymove;
            swap = {
                left: "bottom",
                right: "top",
                top: "left",
                bottom: "right"
            }
        }
        if (o.updateAngle == 180) {
            var xmove = o.xmove;
            var ymove = o.ymove;
            o.ymove = -ymove;
            o.xmove = -xmove;
            swap = {
                left: "right",
                right: "left",
                top: "bottom",
                bottom: "top"
            }
        }
        if (o.updateAngle == 90) {
            var xmove = o.xmove;
            var ymove = o.ymove;
            o.ymove = -xmove;
            o.xmove = ymove;
            swap = {
                left: "top",
                right: "bottom",
                top: "right",
                bottom: "left"
            }
        }
        this.swapPlayerAttributes(o, swap, o.swapControls);
    },
    revertControlsForUpdateAngle: function (o) {
        var swap = {
            left: "left",
            right: "right",
            top: "top",
            bottom: "bottom"
        };
        if (o.updateAngle == 270) {
            var xmove = o.xmove;
            var ymove = o.ymove;
            o.xmove = ymove;
            o.ymove = -xmove;
            swap = {
                left: "top",
                right: "bottom",
                top: "right",
                bottom: "left"
            }
        }
        if (o.updateAngle == 180) {
            var xmove = o.xmove;
            var ymove = o.ymove;
            o.xmove = -xmove;
            o.ymove = -ymove;
            swap = {
                left: "right",
                right: "left",
                top: "bottom",
                bottom: "top"
            }
        }
        if (o.updateAngle == 90) {
            var xmove = o.xmove;
            var ymove = o.ymove;
            o.xmove = -ymove;
            o.ymove = xmove;
            swap = {
                left: "bottom",
                right: "top",
                top: "left",
                bottom: "right"
            }
        }
        this.swapPlayerAttributes(o, swap, o.swapControls);
    },
    updatePlayerDeathAnimation: function (o) {
        if (o.delete && !o.noDeathEffect) {
            game.particles.createEffect("player death");
            game.cam.screenshake = 20;
        }
    },
    updatePlayerAnimations: function (o) {
        var angle = 0;
        var x = o.x + o.w / 2;
        var y = o.y + o.h / 2;
        if (o.positionHistory.length > 0) {
            angle = dirTo(o.positionHistory[0].x, o.positionHistory[0].y, x, y);
        }
        o.positionHistory.unshift({ x: x, y: y, angle: angle });
        if (game.background.effect.active("green")) {
            while (o.positionHistory.length > 30) o.positionHistory.pop();
        } else {
            if (o.positionHistory.length > 11) o.positionHistory.pop();
            if (o.positionHistory.length > 10) o.positionHistory.pop();
        }
        if (o.spawnTime > 0) o.spawnTime--;
        if (o.spawnAnimation > 0) o.spawnAnimation--;
        if (!o.eyeAngle) o.eyeAngle = 0;
        var turnAmount = turn(o.eyeAngle, o.eyeAngleTarget);
        if (turnAmount) o.eyeAngle += turnAmount / 4;

        if (o.updateAngle) {
            o.targetEyeHeight = 0;
            o.eyeHeight = 0;
            o.wallSlideAnimation = 0;
            o.targetStretch = 0;
            o.stretchAnimation = 0;
            o.eyeDirection = 0;
            o.runSkew = 0;
            o.eyePositions[0] = { x: o.x + o.w / 2 + o.eyeDirection * 1.5 - 7, y: o.y + o.h / 2 + o.eyeHeight - 7 };
            o.eyePositions[1] = { x: o.x + o.w / 2 + o.eyeDirection * 1.5 + 7, y: o.y + o.h / 2 + o.eyeHeight - 7 };
            return;
        }
        if (game.input.up) {
            o.targetEyeHeight--;
            o.targetEyeHeight = Math.max(o.targetEyeHeight, -5);
        } else {
            o.targetEyeHeight++;
            o.targetEyeHeight = Math.min(o.targetEyeHeight, 5);
            if (o.ymove <= 0) {
                if (o.targetEyeHeight > 0) o.targetEyeHeight -= 2;
            }
        }
        o.eyeHeight = o.eyeHeight * 0.9 + o.targetEyeHeight * 0.1;
        if (o.againstLeft.current && game.input.left && !o.againstBottom.current) {
            o.wallSlideAnimation++;
            o.wallSlideAnimationDirection = "left";
            if (game.background.effect.active("green")) {
                if (Math.random() < 0.06 && o.emitParticles !== false) game.particles.createEffect("player wall slide");
            } else {
                if (Math.random() < 0.03 && o.emitParticles !== false) game.particles.createEffect("player wall slide");
            }
        } else if (o.againstRight.current && game.input.right && !o.againstBottom.current) {
            o.wallSlideAnimation++;
            o.wallSlideAnimationDirection = "right";
            if (game.background.effect.active("green")) {
                if (Math.random() < 0.06 && o.emitParticles !== false) game.particles.createEffect("player wall slide");
            } else {
                if (Math.random() < 0.03 && o.emitParticles !== false) game.particles.createEffect("player wall slide");
            }
        } else {
            o.wallSlideAnimation--;
        }
        o.wallSlideAnimation = Math.max(Math.min(o.wallSlideAnimation, 15), 0);
        var targetStretch = Math.max(o.ymove, 0) * 2;
        o.stretchAnimation = o.stretchAnimation * 0.8 + targetStretch * 0.2;
        if (o.againstBottom.current) {
            o.splatAnimation++;
        } else {
            o.splatAnimation = 0;
        }
        if (o.againstBottom.current) {
            o.runSkew = o.runSkew * 0.9 + (-o.xmove / 50) * 0.05;
        } else {
            o.runSkew *= 0.9;
        }
        var target = o.xmove * 0.9;
        if (o.wallSlideAnimation) {
            if (o.wallSlideAnimationDirection == "right") {
                target = 5;
            } else {
                target = -5;
            }
        }
        target = Math.min(Math.max(target, -5), 5);
        o.eyeDirection = o.eyeDirection * 0.9 + target * 0.1;

        if (o.againstBottom.time == 1 && o.emitParticles !== false) game.particles.createEffect("player land");

        if (game.background.effect.active("magenta")) {
            var speed = distTo(0, 0, o.xmove, o.ymove);
            if (speed > 2 && o.emitParticles !== false) game.particles.createEffect("player speed effect");
        } else if (game.background.effect.active("green") && !game.level.playerInPortal) {
            var speed = distTo(0, 0, o.xmove, o.ymove);
            if (t % 10 == 0 && speed > 2 && o.emitParticles !== false) game.particles.createEffect("player speed effect");
            if ((t + 5) % 10 == 0 && speed > 8 && o.emitParticles !== false) game.particles.createEffect("player speed effect");
        }

        o.eyePositions[0] = { x: o.x + o.w / 2 + o.eyeDirection * 1.5 - 7, y: o.y + o.h / 2 + o.eyeHeight - 7 };
        o.eyePositions[1] = { x: o.x + o.w / 2 + o.eyeDirection * 1.5 + 7, y: o.y + o.h / 2 + o.eyeHeight - 7 };
    },
    updatePlayerCoyoteTime: function (o) {
        var properties = ["againstLeft", "againstRight", "againstTop", "againstBottom", "touchingLeft", "touchingRight", "touchingTop", "touchingBottom"]
        for (var p of properties) {
            if (o[p].current) {
                o[p].last = 0;
                o[p].time++;
            } else {
                o[p].last++;
                o[p].time = 0;
            }
        }
    },
    updatePlayerMovement: function (o) {
        if (game.level.levelComplete) {
            if (game.level.level === 1 && game.level.triggers.tripped("ultra shortcut")) return;
            if (game.level.level === 2 && game.level.triggers.tripped("ultra shortcut")) return;
            if (game.level.level === 4 && game.level.triggers.tripped("ultra shortcut")) return;
            if (game.level.level === 5 && game.level.triggers.tripped("ultra shortcut")) return;
            o.ymove = 0;
            return;
        }
        var level8SpeedMultiplier = (game.level.level === 7 && game.level.triggers.tripped("shortcut")) ? 5 : 1;
        var level8JumpMultiplier = (game.level.level === 7 && game.level.triggers.tripped("shortcut")) ? 3 : 1;
        if (game.level.level === 7 && game.level.triggers.tripped("ultra shortcut")) level8JumpMultiplier = 3.5;
        var level8FallMultiplier = (game.level.level === 7 && game.level.triggers.tripped("shortcut")) ? 2 : 1;
        var speedMultiplier = game.level.playerSpeedMultiplier * level8SpeedMultiplier;
        var jumpMultiplier = game.level.playerJumpMultiplier * level8JumpMultiplier;
        var fallMultiplier = game.level.playerFallMultiplier * level8FallMultiplier;
        var againstWall = o.againstLeft.current || o.againstRight.current;
        if (game.input.left) {
            o.xmove -= 0.4 * speedMultiplier;
            if (game.input.leftHold > 15) o.xmove -= 0.1 * speedMultiplier;
            if (game.background.effect.active("green")) {
                if (o.againstBottom.current && !againstWall && Math.random() < 0.3 && !o.updateAngle && o.emitParticles !== false) game.particles.createEffect("player run");
            } else {
                if (o.againstBottom.current && !againstWall && Math.random() < 0.1 && !o.updateAngle && o.emitParticles !== false) game.particles.createEffect("player run");
            }
        }
        if (game.input.right) {
            o.xmove += 0.4 * speedMultiplier;
            if (game.input.rightHold > 15) o.xmove += 0.1 * speedMultiplier;
            if (game.background.effect.active("green")) {
                if (o.againstBottom.current && !againstWall && Math.random() < 0.3 && !o.updateAngle && o.emitParticles !== false) game.particles.createEffect("player run");
            } else {
                if (o.againstBottom.current && !againstWall && Math.random() < 0.1 && !o.updateAngle && o.emitParticles !== false) game.particles.createEffect("player run");
            }
        }
        if (o.againstTop.current) {
            o.againstLeft.last = 10;
            o.againstRight.last = 10;
        }

        if (game.level.playerFlightMode) {
            if (game.input.up) {
                o.ymove -= 0.4 * speedMultiplier;
            }
            if (game.input.down) {
                o.ymove += 0.4 * speedMultiplier;
            }
            o.xmove *= 0.95;
            o.ymove *= 0.95;
            return;
        }

        if (game.input.up && o.ymove >= 0 && !o.touchingTop.current && o.roomToJump && !o.jumpDisabled) {
            if (o.againstBottom.last < 5) {
                o.ymove = -10 * jumpMultiplier;
                o.lastJumpType = "ground";
                o.xmove *= 1.1 * jumpMultiplier;
                game.soundEffects.jump();
            } else if (o.againstRight.last < 10 && (!o.wallJumpDisabled || game.level.playerGlobalWallJump)) {
                o.ymove = -10 * jumpMultiplier;
                o.xmove = -10 * jumpMultiplier;
                o.lastJumpType = "wall";
                if (!o.updateAngle && o.emitParticles !== false) game.particles.createEffect("player wall jump");
                game.soundEffects.wallJump();
            } else if (o.againstLeft.last < 10 && (!o.wallJumpDisabled || game.level.playerGlobalWallJump)) {
                o.ymove = -10 * jumpMultiplier;
                o.xmove = 10 * jumpMultiplier;
                o.lastJumpType = "wall";
                if (!o.updateAngle && o.emitParticles !== false) game.particles.createEffect("player wall jump");
                game.soundEffects.wallJump();
            }
        }

        if (o.againstBottom.current) {
            if (game.input.right || game.input.left) {
                o.xmove *= 0.9;
            } else {
                o.xmove *= 0.8;
            }
        } else {
            o.xmove *= 0.93;
        }
        o.ymove *= 0.98;

        if (o.againstRight.current && game.input.right && (!o.wallJumpDisabled || game.level.playerGlobalWallJump)) {
            o.ymove *= 0.8;
        }
        if (o.againstLeft.current && game.input.left && (!o.wallJumpDisabled || game.level.playerGlobalWallJump)) {
            o.ymove *= 0.8;
        }


        if (o.ymove >= 0) {
            o.ymove += 0.3 * fallMultiplier;
            if (game.input.up) {
                o.ymove -= 0.05;
            }
        } else {
            if (o.againstBottom.last < 20) {
                o.ymove += 0.5 * fallMultiplier;
                if (game.input.up) o.ymove -= 0.3;
            } else {
                o.ymove += 0.3 * fallMultiplier;
                if (game.input.up) o.ymove -= 0.15;
            }
        }
        if (game.input.down) {
            if (!o.againstBottom.current) {
                o.xmove *= 1.005;
            }
            if (o.ymove < 0 && o.againstBottom.last > 20) {
                o.ymove *= 0.5;
                o.ymove += 0.2 * speedMultiplier;
            } else {
                o.ymove += 0.2 * speedMultiplier;
            }
        }
    },
    updatePlayerCollisions: function (o) {
        if (game.level.playerFlightMode) {
            o.x += o.xmove;
            o.y += o.ymove;
            return;
        }
        var player = o;
        player.touchingObjects = [];
        player.againstLeft.current = false;
        player.againstRight.current = false;
        player.againstTop.current = false;
        player.againstBottom.current = false;
        player.touchingLeft.current = false;
        player.touchingRight.current = false;
        player.touchingTop.current = false;
        player.touchingBottom.current = false;
        player.roomToJump = true;
        player.touchingSurfaces = {};
        var oldX = player.x;
        var oldY = player.y;
        var oldXmove = player.xmove;
        var oldYmove = player.ymove;
        var axises = ["x", "y"];
        var dims = ["w", "h"];
        var directions = [["Left", "Right"], ["Top", "Bottom"]];
        for (var n = 0; n < 2; n++) {
            var axis = axises[n];
            var altAxis = axises[(n + 1) % 2];
            var dim = dims[n];
            var altDim = dims[(n + 1) % 2];
            player[axis] += player[`${axis}move`];
            for (var o of game.objects.objects) {
                if (o.collide === false) continue;
                if (o.type == "player") continue;
                var enlargedPlayer = { x: player.x, y: player.y, w: player.w, h: player.h };
                enlargedPlayer[altAxis] += 1;
                enlargedPlayer[altDim] -= 2;
                if (o.type != "spike") {
                    this.checkForPlayerRoomToJump(player, o);
                }
                if (blocksCollidingEdge(enlargedPlayer, o) && o.type != "spike") {
                    player.touchingObjects.push(o);
                    player.touchingSurfaces[o.type] = true;
                    player.touchingSurfaces[o.drawType] = true;
                    if (player[axis] + player[dim] / 2 < o[axis] + o[dim] / 2) {
                        player[`touching${directions[n][1]}`].current = true;
                    } else {
                        player[`touching${directions[n][0]}`].current = true;
                    }
                }
                if (!blocksCollidingEdge(player, o)) continue;
                if (o.type == "lava" && !game.level.levelComplete && !game.level.playerInvincible) {
                    if (o.drawType == "lava glass") o.proximity = 1.5;
                    if (o.level6redCubeLava) {
                        o.alpha = 0.2;
                        o.decay = 0.01;
                    }
                    game.soundEffects.death();
                    player.delete = true;
                }
                if (o.type == "spike" && !game.level.levelComplete && !game.level.playerInvincible) {
                    var segments1 = [
                        { x1: player.x, y1: player.y, x2: player.x + player.w, y2: player.y },
                        { x1: player.x + player.w, y1: player.y, x2: player.x + player.w, y2: player.y + player.h },
                        { x1: player.x, y1: player.y + player.h, x2: player.x + player.w, y2: player.y + player.h },
                        { x1: player.x, y1: player.y, x2: player.x, y2: player.y + player.h },
                    ];
                    var segments2 = [
                        { x1: o.x + o.w / 2, y1: o.y, x2: o.x + o.w - 5, y2: o.y + o.h },
                        { x1: o.x + o.w - 5, y1: o.y + o.h, x2: o.x + 5, y2: o.y + o.h },
                        { x1: o.x + 5, y1: o.y + o.h, x2: o.x + o.w / 2, y2: o.y, }
                    ];
                    if (segments1.some(e => segments2.some(f => segmentsIntersect(e.x1, e.y1, e.x2, e.y2, f.x1, f.y1, f.x2, f.y2)))) {
                        game.soundEffects.death();
                        player.delete = true;
                    }
                }
                if (o.type == "unstable" && !o.touched) {
                    o.touched = true;
                    o.alpha = 1;
                }
                if (o.type == "button") {
                    if (axis == "x" && player.y + player.h == o.y) {
                        if (o.h == 30 && !o.pressing) {
                            game.soundEffects.pressButton();
                            o.pressing = true;
                            continue;
                        }
                    }
                    if (axis == "y" && o.pressing) {
                        player.y = o.y - player.h;
                        player.ymove = 3;
                        continue;
                    }
                }
                var level8JumpMultiplier = (game.level.level === 7 && game.level.triggers.tripped("shortcut")) ? 3 : 1;
                if (game.level.level === 7 && game.level.triggers.tripped("ultra shortcut")) level8JumpMultiplier = 5;
                if (o.type == "platform") {
                    if (axis == "y") {
                        if (player.ymove > 0 && player.y + player.h - player.ymove < o.y + o.h && !game.input.down) {
                            player[axis] = o[axis] - player[dim];
                            player[`against${directions[n][1]}`].current = true;
                            player.ymove = 0;
                        } else {
                            if (game.input.up) {
                                if (!o.noDoubleJump) {
                                    player.ymove = -9 * game.level.playerJumpMultiplier * level8JumpMultiplier;
                                    if (player.y + player.ymove + player.h < o.y) game.soundEffects.jump();
                                } else if (player.y == o.y - player.h) {
                                    player.ymove = -9 * game.level.playerJumpMultiplier * level8JumpMultiplier;
                                    game.soundEffects.jump();
                                }
                            }
                            player[`against${directions[n][1]}`].current = true;
                        }
                    }
                    continue;
                }
                if (o.type == "spike") continue;
                if (!blocksColliding(player, o)) continue;
                if (o.level6redCubeHiddenBlock && player.againstBottom.time === 1) {
                    o.alpha = 0.2;
                    o.decay = 0.01;
                }
                if (player[axis] + player[dim] / 2 < o[axis] + o[dim] / 2) {
                    player[axis] = o[axis] - player[dim];
                    player[`against${directions[n][1]}`].current = true;
                    if (o.slippery && !player.updateAngle && !game.level.playerGlobalWallJump && axis == "x") {
                        player[`against${directions[n][1]}`].current = false;
                    }
                } else {
                    player[axis] = o[axis] + o[dim];
                    player[`against${directions[n][0]}`].current = true;
                    if (o.slippery && !player.updateAngle && !game.level.playerGlobalWallJump && axis == "x") {
                        player[`against${directions[n][0]}`].current = false;
                    }
                }
                if (o.type != "portal") player[`${axis}move`] = 0;
            }
        }

        if (player.againstBottom.current && !player.againstBottom.time) {
            if (player.touchingSurfaces.glass) {
                game.soundEffects.landGlass();
            } else {
                if (player.againstBottom.last > 200 && oldYmove > 9) {
                    game.soundEffects.heaviestLand();
                } else if (oldYmove > 8) {
                    game.soundEffects.heavyLand();
                } else {
                    game.soundEffects.land();
                }
            }
        }
        if (player.touchingLeft.current && !player.touchingLeft.time) {
            if (player.touchingSurfaces.glass) {
                game.soundEffects.landGlass();
            } else {
                game.soundEffects.wallHit();
            }
        }
        if (player.touchingRight.current && !player.touchingRight.time) {
            if (player.touchingSurfaces.glass) {
                game.soundEffects.landGlass();
            } else {
                game.soundEffects.wallHit();
            }
        }
        if (player.againstTop.current && !player.againstTop.time) {
            if (player.touchingSurfaces.glass) {
                game.soundEffects.landGlass();
            } else {
                game.soundEffects.wallHit();
            }
        }
    },
    updatePlayerPortalCollisions: function (player) {
        for (var o of game.objects.objects.filter(e => e.type == "portal")) {
            var box = { x: o.collideX, y: o.collideY, w: o.collideW, h: o.collideH };
            if (!blocksCollidingEdge(box, player)) continue;
            var playerPoints = [
                { x: player.x, y: player.y },
                { x: player.x + player.w, y: player.y },
                { x: player.x + player.w, y: player.y + player.h },
                { x: player.x, y: player.y + player.h }
            ];
            var count = playerPoints.filter(function (e) {
                return pointInBox(e.x, e.y, box);
            }).length;
            if (count < 2) continue;
            o.teleportTime = 50;
            game.soundEffects.switchGravity();
            game.level.playerInPortal = true;
            game.level.portalNumber = o.portalNumber;
        }
    },
    checkForPlayerRoomToJump: function (player, o) {
        var dist = 4;
        var edgeSpace = 1;

        var hitbox = { x: player.x + edgeSpace, y: player.y - dist, w: player.w - edgeSpace * 2, h: dist };
        if (player.updateAngle == 270) {
            hitbox = { x: player.x - dist, y: player.y + edgeSpace, w: dist, h: player.h - edgeSpace * 2 };
        }
        if (player.updateAngle == 180) {
            hitbox = { x: player.x + edgeSpace, y: player.y + player.h, w: player.w - edgeSpace * 2, h: dist };
        }
        if (player.updateAngle == 90) {
            hitbox = { x: player.x + player.w, y: player.y + edgeSpace, w: dist, h: player.h - edgeSpace * 2 };
        }
        if (blocksColliding(hitbox, o)) {
            player.roomToJump = false;
        }
    },
    updatePlayerCubeCollection: function (o) {
        var player = o;
        for (var o of game.objects.objects) {
            if (o.type != "cube") continue;
            if (o.collected) continue;
            if (o.noCollect === true) continue;
            var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
            if (dist > 70) continue;
            game.level.collectCube(o);
        }
    },
    drawPlayerExplosion: function (o) {
        this.drawPlayerTrail(o);

        var dir = o.explodeAnimation * 0.7;
        if (game.level.triggers.tripped("ultra shortuct")) dir /= 2;
        ctx.save();
        ctx.translate(o.x + o.w / 2, o.y + o.h / 2);
        ctx.rotate((o.eyeAngleTarget - dir) * Math.PI / 180);
        var directions = [0, 5, 2, 6, 1, 3, 7, 4];
        for (var n = 0; n < 8; n++) {
            if (o.explodeAnimation < n * 30 + 20) break;
            var a = easeInOut((o.explodeAnimation - (n * 30 + 20)) / 50);
            var dir = directions[n] * 360 / 8;
            ctx.save();
            ctx.rotate(dir * Math.PI / 180);
            if (game.level.triggers.tripped("ultra shortcut")) {
                if (directions[n] % 2) {
                    ctx.fillStyle = "rgb(255,70,230)";
                } else {
                    ctx.fillStyle = "rgb(255,193,250)";
                }
            } else {
                if (directions[n] % 2) {
                    ctx.fillStyle = "rgb(70,100,255)";
                } else {
                    ctx.fillStyle = "rgb(220,230,255)";
                }
            }
            ctx.beginPath();
            ctx.lineTo(-6 * a, 0);
            ctx.lineTo(-100 * a, -700);
            ctx.lineTo(100 * a, -700);
            ctx.lineTo(6 * a, 0);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
        if (game.level.triggers.tripped("ultra shortcut")) {
            var a = Math.min(o.explodeAnimation / 50, 1);
            ctx.fillStyle = `rgb(${50 * (1 - a) + 255 * a},${50 * (1 - a) + 50 * a},${255 * (1 - a) + 238 * a})`;
        } else {
            ctx.fillStyle = "rgb(50,50,255)";
        }
        ctx.beginPath();
        ctx.roundRect(-20, -20, 40, 40, 2);
        ctx.fill();
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(-7, -7, 3.7, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(7, -7, 3.7, 0, 2 * Math.PI);
        ctx.fill();
        if (o.explodeAnimation > 200) {
            var a = easeInOut((o.explodeAnimation - 350) / 100) * 0.96 + easeInOut((o.explodeAnimation - 200) / 100) * 0.02 + Math.max((o.explodeAnimation - 250) / 100, 0) * 0.06;
            var r1 = a * 2000;
            var r2 = Math.max(a * 1000 - 1, 0);
            ctx.beginPath();
            ctx.fillStyle = "white";
            ctx.arc(0, 0, r1, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            if (game.level.triggers.tripped("ultra shortcut")) {
                ctx.fillStyle = "rgb(255,50,238)";
            } else {
                ctx.fillStyle = "rgb(50,50,255)";
            }
            ctx.arc(0, 0, r2, 0, 2 * Math.PI);
            ctx.fill();
        }
        ctx.restore();
    },
    drawPlayerTrail: function (o, noTranslate) {
        ctx.fillStyle = "rgba(200,200,255,0.1)";
        if (ppougjgaming) {
            ctx.fillStyle = "rgba(200,255,200,0.1)";
        }
        if (larrythehamster) {
            ctx.fillStyle = "rgba(255,200,200,0.1)"
        }
        if (notobiv) {
            ctx.fillStyle = "rgba(0,0,0,0.1)";
        }
        if (game.background.effect.active("green")) {
            ctx.fillStyle = "rgba(100,100,255,0.3)";
            if (ppougjgaming) {
                ctx.fillStyle = "rgba(100,255,100,0.3)";
            }
            if (larrythehamster) {
                ctx.fillStyle = "rgba(255,100,100,0.3)";
            }
            if (notobiv) {
                ctx.fillStyle = "rgba(0,0,0,0.3)";
            }
        }
        if (game.background.effect.active("magenta")) {
            ctx.fillStyle = "rgba(255,100,255,0.3)";
        }
        ctx.beginPath();
        for (var n = 0; n < o.positionHistory.length; n++) {
            var p = o.positionHistory[n];
            var percent = (n + 1) / o.positionHistory.length;
            ctx.save();
            ctx.translate(p.x, p.y);
            if (noTranslate) ctx.translate(-o.x, -o.y);
            ctx.rotate(p.angle * Math.PI / 180);
            ctx.lineTo(-(1 - percent) * o.w / 2, 0);
            ctx.restore();
        }
        for (var n = o.positionHistory.length - 1; n >= 0; n--) {
            var p = o.positionHistory[n];
            var percent = (n + 1) / o.positionHistory.length;
            ctx.save();
            ctx.translate(p.x, p.y);
            if (noTranslate) ctx.translate(-o.x, -o.y);
            ctx.rotate(p.angle * Math.PI / 180);
            ctx.lineTo((1 - percent) * o.w / 2, 0);
            ctx.restore();
        }
        ctx.closePath();
        ctx.fill();
    },
    drawPlayer: function (o, noTranslate, onlyDrawTrail) {
        this.drawPlayerTrail(o, noTranslate);
        if (onlyDrawTrail) return;

        ctx.save();
        if (!noTranslate) ctx.translate(o.x, o.y);
        if (o.angle) {
            ctx.translate(o.w / 2, o.h / 2);
            ctx.rotate(o.angle * Math.PI / 180);
            ctx.translate(-o.w / 2, -o.h / 2);
        }
        if (o.spawnTime) {
            ctx.globalAlpha = t % 20 < 10 ? 1 : 0.7;
        }
        if (o.spawnAnimation) {
            var s = easeInOut((20 - o.spawnAnimation) / 20);
            ctx.translate(o.w / 2, o.h / 2);
            ctx.scale(s, s);
            ctx.translate(-o.w / 2, -o.h / 2);
        }

        var skew = o.wallSlideAnimation / 500;
        if (o.wallSlideAnimationDirection == "right") skew = -skew;
        if (skew) ctx.transform(1, skew, 0, 1, 0, 0);
        ctx.transform(1, 0, o.runSkew, 1, 0, 0);
        var stretch = o.stretchAnimation / 100;
        if (stretch) {
            ctx.translate(o.w / 2, 0);
            ctx.scale(1, 1 + stretch);
            ctx.translate(-o.w / 2, 0);
        }
        var splat = easeInBack(o.splatAnimation / 15) / 15;
        if (splat) {
            ctx.translate(o.w / 2, o.h);
            ctx.scale(1 + splat, 1 - splat);
            ctx.translate(-o.w / 2, -o.h);
        }
        ctx.fillStyle = "rgb(50,50,255)";
        if (ppougjgaming) ctx.fillStyle = "green";
        if (larrythehamster) ctx.fillStyle = "red";
        if (notobiv) ctx.fillStyle = "black";
        if (kribit) {
            ctx.drawImage(images.botBody, 0, 0, o.w, o.h);
        } else {
            ctx.roundRect(0, 0, o.w, o.h, 2);
            ctx.fill();
        }

        ctx.translate(o.w / 2, o.h / 2);
        if (o.eyeAngle) {
            ctx.rotate(o.eyeAngle * Math.PI / 180);
        }

        if (!notobiv) {
            ctx.fillStyle = "black";
            if (ppougjgaming) ctx.fillStyle = "blue";
            ctx.beginPath();
            ctx.arc(o.eyeDirection * 1.5 - 7, o.eyeHeight - 7, 3.7, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(o.eyeDirection * 1.5 + 7, o.eyeHeight - 7, 3.7, 0, 2 * Math.PI);
            ctx.fill();
        } else {
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(0, 0, 16, 0, 2 * Math.PI);
            ctx.fill();

            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.arc(o.eyeDirection * 1.5, o.eyeHeight * 1.3 + 1, 8, 0, 2 * Math.PI);
            ctx.fill();
        }

        ctx.restore();
    },
    updateObject: function (o, player) {
        if (!o.drawType) o.drawType = o.type;
        if (o.bossObject) return updateBossObject(o, player);
        if (o.type == "bart") {
            updateBart(o, player);
            return;
        }
        if (o.update) o.update();
        if (o.spawnAnimation) o.spawnAnimation--;
        if (o.decay) {
            o.alpha -= o.decay;
            o.alpha = Math.max(o.alpha, 0);
            if (o.maxAlpha) o.alpha = Math.max(o.alpha, o.maxAlpha);
        }
        if (o.invisibleUntilTouched) {
            if (o.lastTouchedTime === undefined) o.lastTouchedTime = 1000;
            var player = game.objects.objects.find(e => e.type == "player");
            if (player && blocksCollidingEdge(o, player)) {
                o.lastTouchedTime = 0;
            } else {
                o.lastTouchedTime++;
            }
        }
        if (o.type == "cube") {
            if (!o.animationSpeed) o.animationSpeed = 1;
            if (!o.animation) o.animation = 0;
            if (o.collected) {
                o.animationSpeed *= 0.99;
                o.animationSpeed += 0.002;
            }
            if (o.collectedAnimation) o.collectedAnimation--;
            o.animation += o.animationSpeed;
            if (game.level.triggers.tripped("blue cube ultra") || game.level.triggers.tripped("red cube ultra")) {
                updateCubeUltraLightningAnimation(o);
            }
        }
        if (o.type == "coin dash coin") {
            if (o.alpha <= 0) return;
            var player = game.objects.objects.find(e => e.type == "player");
            if (player && !o.collected) {
                var dist = distTo(player.x + player.w / 2, player.y + player.h / 2, o.x, o.y);
                if (dist < 40) {
                    o.collected = true;
                    o.collectTime = 1;
                    o.alpha = 1.5;
                    game.soundEffects.collectCoin();
                }
            }
            if (o.collected) {
                o.alpha -= 0.03;
                o.y += (1 - easeInOut(o.collectTime / 15) - easeInOut((o.collectTime - 15) / 20) * 2) * 2;
                o.animation += Math.max(1, Math.min(o.collectTime / 3, 12));
                o.collectTime++;
            } else {
                o.animation++;
            }
        }
        if (o.type == "button") {
            if (o.pressing) {
                o.h -= 3;
                o.y += 3;
            }
            o.firstPress = false;
            if (o.h >= o.originalHeight) {
                o.pressed = false;
                return;
            }
            if (o.h == 12) {
                o.pressing = false;
                if (!o.pressed) {
                    o.firstPress = true;
                }
                o.pressed = true;
            }
            if (o.pushBack === false || o.pressing) return;
            var player = game.objects.objects.find(e => e.type == "player");
            if (!player) {
                o.h += 3;
                o.y -= 3;
                return;
            }
            if (blocksCollidingEdge(o, player)) return;
            o.h += 3;
            o.y -= 3;
            if (blocksColliding(o, player)) {
                o.h -= 3;
                o.y += 3;
            }
        }
        if (o.type == "unstable") {
            if (o.touched) {
                o.decay = 0.02;
                if (o.decayValue) o.decay = o.decayValue;
                if (o.alpha <= 0) o.collide = false;
            }
        }
        if (o.drawType == "phase in out") {
            if (!o.animation) {
                o.animation = { current: false, a: 0, max: 40 };
            }
            if (o.period) {
                var time = o.period.time === undefined ? 200 : o.period.time;
                var offset = o.period.offset === undefined ? 0 : o.period.offset;
                var offTime = o.period.offTime === undefined ? 50 : o.period.offTime;
                var changeRange = o.period.changeRange === undefined ? 20 : o.period.changeRange;
                var a = (game.level.levelAnimationTime + offset) % time;
                if ((a > changeRange + offTime && a < time - changeRange || o.period.alwaysOn) && !o.period.alwaysOff) {
                    if (!o.deactivated) o.animation.current = true;
                } else {
                    o.animation.current = false;
                }
            } else {
                var startRange = o.startRange || 100;
                var endRange = o.endRange || 200;
                if (player && o.playerDistCheck !== false) {
                    var xDist = Math.max(player.x - o.x - o.w, o.x - player.x - player.w, 0);
                    if (xDist < startRange) {
                        o.animation.current = true;
                    }
                    if (xDist > endRange) o.animation.current = false;
                }
            }
            if (o.animation.current) {
                o.animation.a++;
                o.animation.a = Math.min(o.animation.a, o.animation.max);
            } else {
                o.animation.a--;
                o.animation.a = Math.max(o.animation.a, 0);
            }
        }
        if (o.drawType == "phase in out ornament") {
            if (!o.animation) {
                o.animation = { current: false, a: 0, max: 50 };
            }
            if (o.period) {
                var time = o.period.time === undefined ? 200 : o.period.time;
                var offset = o.period.offset === undefined ? 0 : o.period.offset;
                var offTime = o.period.offTime === undefined ? 50 : o.period.offTime;
                var changeRange = o.period.changeRange === undefined ? 20 : o.period.changeRange;
                var a = (game.level.levelAnimationTime + offset) % time;
                if ((a > changeRange + offTime && a < time - changeRange || o.period.alwaysOn) && !o.period.alwaysOff) {
                    o.animation.current = true;
                } else {
                    o.animation.current = false;
                }
            } else {
                var startRange = o.startRange || 100;
                var endRange = o.endRange || 200;
                var offset = o.offset || 0;
                if (player && o.playerDistCheck !== false) {
                    var xDist = Math.max((player.x + offset) - o.x - o.w, o.x - (player.x + offset) - player.w, 0);
                    if (xDist < startRange) {
                        o.animation.current = true;
                    }
                    if (xDist > endRange) o.animation.current = false;
                }
            }
            if (o.animation.current) {
                o.animation.a++;
                o.animation.a = Math.min(o.animation.a, o.animation.max);
            } else {
                o.animation.a--;
                o.animation.a = Math.max(o.animation.a, 0);
            }
        }
        if (o.type == "player eye") {
            this.updatePlayerEye(o);
        }
        if (o.type == "sokoban player") {
            this.updateSokobanPlayer(o);
        }
        if (o.type == "snake player") {
            this.updateSnakePlayer(o);
        }
        if (o.type == "pacman player") {
            this.updatePacmanPlayer(o);
        }
        if (o.type == "ping pong player") {
            this.updatePingPongPlayer(o);
        }
        if (o.type == "circles player") {
            this.updateCirclesPlayer(o);
        }
        if (o.type == "old player") {
            this.updateOldPlayer(o);
        }
        if (o.type == "snake body") {
            if (o.deathAnimation) {
                o.deathAnimation++;
                return;
            }
            if (o.noCollideTime >= 0) {
                o.noCollideTime--;
            } else {
                o.noCollideTime = 0;
            }
            o.time--;
            if (o.time < o.move.speed) {
                o.moving = true;
                var percent = 1 - (o.time / o.move.speed);
                o.x = o.move.origin.x + o.move.direction.x * percent;
                o.y = o.move.origin.y + o.move.direction.y * percent;
            }
            if (o.time <= 0) o.delete = true;
        }
        if (o.type == "sokoban box") {
            var time = 5 / game.level.playerSpeedMultiplier;
            var instantMove = game.level.level === 7 && game.level.triggers.tripped("shortcut");
            if (game.level.triggers.tripped("cube room")) instantMove = false;
            if (instantMove) {
                time = 1;
            }
            if (o.move) {
                o.move.time++;
                var p = o.move.time / time;
                o.x = o.move.origin.x + o.move.direction.x * p;
                o.y = o.move.origin.y + o.move.direction.y * p;
                if (o.move.time >= time) {
                    o.move = false;
                }
            }
            var count = game.objects.objects.filter(e => e.type == "sokoban box" && e.blue).map(e => e.lit).reduce((a, b) => a + b);
            if (o.blue) {
                var lit = game.objects.objects.some(e => e.type == "clue" && e.x == o.x + 20 && e.y == o.y + 20);
                if (!o.lit && lit) {
                    o.lit = lit;
                    game.soundEffects.sokobanCubeBox(count + 1);
                }
                o.lit = lit
            }
        }
        if (o.type == "jump enemy") {
            o.x += o.xmove;
            if (o.x > 1460) {
                o.xmove *= -1;
                o.x = 1460;
            }
            if (o.x < 1310) {
                o.xmove *= -1;
                o.x = 1310;
            }
            var player = game.objects.objects.find(e => e.type == "player");
            if (player && blocksCollidingEdge(o, player)) {
                if (player.y + player.h < o.y + o.h / 2) {
                    o.delete = true;
                    game.particles.createEffect("jump enemy death", o);
                    player.ymove = -20;
                    game.soundEffects.killJumpEnemy();
                } else {
                    if (!game.level.playerInvincible) {
                        player.delete = true;
                        game.soundEffects.death();
                    }
                }
            }
        }
        if (o.drawType == "glass" || o.drawType == "lava glass" && o.collide) {
            if (!o.proximity) o.proximity = 0;
            var player = game.objects.objects.find(e => e.type == "player");
            if (player) {
                if (blocksCollidingEdge(o, player)) {
                    o.proximity = 1.5;
                } else {
                    o.proximity -= 0.01;
                }
                o.proximity = Math.max(Math.min(o.proximity, 1.5), 0);
            }
        }
        if (o.type == "image" && o.image == "gravitySwitch") {
            var move = distToMove(40, o.angle);
            o.x += move.x;
            o.y += move.y;
            o.animation++;
            o.alpha = easeInBack(o.animation / 30) * 0.3;
            if (o.animation == 30) o.delete = true;
        }
        if (o.type == "image" && o.image == "gravitySwitch2") {
            var move = distToMove(10, o.angle);
            o.x += move.x;
            o.y += move.y;
            o.animation++;
            o.alpha = easeInBack(o.animation / 30) * 0.3;
            if (o.animation == 30) o.delete = true;
        }
        if (o.type == "pacman dot") {
            if (o.redTime) {
                o.redTime--;
                if (o.redTime < 10) {
                    o.alpha = 1;
                    o.collected = false;
                    o.red = true;
                    var p = o.redTime / 3;
                    o.x = o.originalX - p;
                    o.y = o.originalY - p;
                    o.w = o.originalW + p * 2;
                    o.h = o.originalH + p * 2;
                }
            }
        }
        if (o.type == "pacman ghost") {
            this.updatePacmanGhost(o);
        }
        if (o.type == "boss") {
            this.updateBoss(o);
        }
        if (o.type == "boss fireball") {
            o.y++;
            var player = game.objects.objects.find(e => e.type == "player");
            if (player) {
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist < 30) {
                    player.spawnTime = 200;
                    game.cam.screenshake = 30;
                    o.delete = true;
                    for (var n = 0; n < 5; n++) {
                        var o2 = game.objects.objects.find(e => e.id == "player heart " + n);
                        o2.alpha = 10;
                        o2.decay = 0.05;
                    }
                    for (var n = 4; n >= 0; n--) {
                        var o2 = game.objects.objects.find(e => e.id == "player heart " + n);
                        if (!o2.full) continue;
                        o2.full = false;
                        o2.blink = 100;
                        break;
                    }
                }
            }
            if (o.y >= 95) o.delete = true;
            if (o.delete) {
                game.particles.createEffect("boss fireball explosion", o);
                game.soundEffects.bossFireballExplosion();
            }
        }
        if (o.type == "heart") {
            if (o.blink) o.blink--;
        }
        if (o.type == "portal") {
            var coordinates = [{ x: o.x, y: o.y }, { x: o.x + o.length, y: o.y }, { x: o.x + o.length, y: o.y + 5 }, { x: o.x, y: o.y + 5 }];
            coordinates = coordinates.map(function (e) {
                return rotate(o.x, o.y, e.x, e.y, -o.angle);
            });
            o.collideX = Math.min(...coordinates.map(e => e.x));
            o.collideY = Math.min(...coordinates.map(e => e.y));
            o.collideW = Math.max(...coordinates.map(e => e.x)) - o.collideX;
            o.collideH = Math.max(...coordinates.map(e => e.y)) - o.collideY;
            if (o.teleportTime) {
                o.teleportTime--;
            }
        }
        if (o.type == "circles collectable") {
            if (!o.collected) {
                var player = game.objects.objects.find(e => e.type == "circles player");
                if (player) {
                    var dist = distTo(o.x, o.y, player.x, player.y);
                    if (dist < 25 + player.r) o.collected = true;
                }
            }
        }
    },
    drawObject: function (o, player) {
        if (!o.drawType) o.drawType = o.type;
        if (o.bossObject) return drawBossObject(o, player);
        if (o.type == "bart") {
            drawBart(o, player);
            return;
        }
        if (o.alpha <= 0 && !game.level.forceVisibility) return;
        ctx.save();
        ctx.translate(o.x, o.y);
        if (o.rotate) {
            ctx.translate(-o.x, -o.y);
            ctx.translate(o.rotate.x, o.rotate.y);
            ctx.rotate(o.rotate.angle * Math.PI / 180);
            ctx.scale(o.rotate.scale, o.rotate.scale);
            ctx.translate(-o.rotate.x, -o.rotate.y);
            ctx.translate(o.x, o.y);
        }
        if (o.drawType == "snake player" || o.drawType == "pacman player") ctx.translate(o.w / 2, o.h / 2);
        if (o.angle) ctx.rotate(o.angle * Math.PI / 180);
        if (o.alpha && !game.level.forceVisibility) ctx.globalAlpha = o.alpha;
        if (game.level.forceVisibility) {
            if (o.type == "clue") {
                ctx.globalAlpha = 1;
            } else {
                ctx.globalAlpha = 0.4;
            }
        }
        if (o.scale) ctx.scale(o.scale, o.scale);
        if (o.spawnAnimation && !game.level.forceVisibility) {
            var a = 1 - easeInOut(o.spawnAnimation / o.spawnAnimationDuration);
            ctx.globalAlpha = a;
            ctx.scale(a, a);
        }
        if (o.invisibleUntilTouched && !game.level.forceVisibility) {
            var a = Math.min(1, Math.max(0, 1.1 - o.lastTouchedTime / 100)) * 0.2;
            ctx.globalAlpha = a;
        }
        if (o.drawType == "clue") {
            var color = { r: 30, g: 30, b: 30, a: 1 };
            if (o.lava) {
                color = { r: 245, g: 0, b: 0, a: 1 };
            }
            if (o.air) {
                color = { r: 0, g: 0, b: 0, a: 0.05 };
                if (game.level.forceVisibility) color.a = 1;
            }
            if (o.blue) {
                color = { r: 0, g: 0, b: 0, a: 0.1 };
                if (game.level.forceVisibility) color.a = 1;
            }
            if (o.white) {
                color = { r: 255, g: 255, b: 255, a: 1 };
            }
            if (!o.proximity) o.proximity = 1;
            if (!o.radius) o.radius = 0;
            if (o.proximity) {
                var distToPlayer;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) {
                    player = game.objects.objects.find(e => e.type.includes("player") && e.type != "player copy");
                }
                var distToPlayer;
                if (player) {
                    distToPlayer = distTo(o.x, o.y, player.x, player.y);
                } else {
                    distToPlayer = 10000;
                }
                var a = Math.max(Math.min((distToPlayer - o.radius) / o.proximity, 1), 0);
                if (o.activated) a = 0;
                var blue = { r: 50, g: 120, b: 255, a: 1 };
                if (o.ultra) {
                    blue = { r: 255, g: 80, b: 200, a: 1 };
                }
                if (o.color) {
                    blue = o.color;
                    blue.a = 1;
                }
                if (color.a == 1 || a == 1) {
                    color.r = color.r * a + blue.r * (1 - a);
                    color.g = color.g * a + blue.g * (1 - a);
                    color.b = color.b * a + blue.b * (1 - a);
                } else {
                    color.r = blue.r;
                    color.g = blue.g;
                    color.b = blue.b;
                }
                color.a = color.a * a + blue.a * (1 - a);
                ctx.shadowColor = `rgba(${color.r},${color.g},${color.b},${color.a})`;
                ctx.shadowBlur = (1 - a) * 40;
            }
            ctx.fillStyle = `rgba(${color.r},${color.g},${color.b},${color.a})`;
            if (o.ultra) {
                ctx.beginPath();
                ctx.moveTo(-20, -14);
                ctx.lineTo(20, -14);
                ctx.lineTo(0, 8);
                ctx.closePath();
                ctx.moveTo(-20, 0);
                ctx.lineTo(20, 0);
                ctx.lineTo(0, 22);
                ctx.closePath();
                ctx.fill();
            } else if (o.down) {
                ctx.beginPath();
                ctx.moveTo(-20, -7);
                ctx.lineTo(20, -7);
                ctx.lineTo(0, 15);
                ctx.closePath();
                ctx.fill();
            } else {
                ctx.rotate(45 * Math.PI / 180);
                ctx.fillRect(-15, -15, 30, 30);
            }
        } else if (o.drawType == "cube") {
            if (o.collected) {
                var colorFunction = function (x, y, z, n) {
                    return `rgba(200,200,200,0.5)`;
                }
                if (o.onBlue) {
                    colorFunction = function (x, y, z, n) {
                        return `rgba(0,0,0,0.1)`;
                    }
                }
                if (o.onRed) {
                    colorFunction = function (x, y, z, n) {
                        return `rgba(100,100,100,0.1)`;
                    }
                }
                drawRotatingCube({
                    size: 30,
                    xAngle: o.animation / 150,
                    yAngle: o.animation / 170,
                    zAngle: o.animation / 180,
                    border: false,
                    colorFunction: colorFunction
                });
            }
            if ((!o.collected || o.collectedAnimation) && !o.grey) {
                if (o.collectedAnimation) {
                    ctx.globalAlpha *= o.collectedAnimation / 20;
                }
                var s = 1 + Math.sin(o.animation / 40) * 0.1;
                ctx.scale(s, s);
                var grd = ctx.createRadialGradient(0, 0, 30, 0, 0, 150);
                if (o.red) {
                    grd.addColorStop(0, "rgba(255,0,0,0.24)");
                    grd.addColorStop(0.33, "rgba(255,0,0,0.12)");
                    grd.addColorStop(0.66, "rgba(255,0,0,0.036)");
                    grd.addColorStop(1, "rgba(255,0,0,0)");
                } else {
                    grd.addColorStop(0, "rgba(0,0,255,0.24)");
                    grd.addColorStop(0.33, "rgba(0,0,255,0.12)");
                    grd.addColorStop(0.66, "rgba(0,0,255,0.036)");
                    grd.addColorStop(1, "rgba(0,0,255,0)");
                }
                ctx.fillStyle = grd;
                ctx.beginPath();
                ctx.arc(0, 0, 150, 0, 2 * Math.PI);
                ctx.fill();
                ctx.globalAlpha = 1;
            }
            if (!o.collected) {
                if (game.level.triggers.tripped("blue cube ultra") || game.level.triggers.tripped("red cube ultra")) {
                    drawUltraCubeLightningBack(o);
                }
                var s = easeInOut(o.alpha);
                if (game.level.forceVisibility) s = 1;
                ctx.scale(s, s);
                if (o.grey) {
                    if (o.red) {
                        drawRotatingCube({
                            size: 30,
                            xAngle: o.animation / 150,
                            yAngle: o.animation / 170,
                            zAngle: o.animation / 180,
                            dashedBorder: true,
                            grey: true,
                            red: true,
                            colorFunction: function (x, y, z, n) {
                                var l = (1 - y) * 150 + x * 50;
                                var r = 200 + l;
                                var g = 70 + l;
                                var b = 70 + l;
                                return `rgb(${r},${g},${b})`;
                            }
                        });
                    } else {
                        drawRotatingCube({
                            size: 30,
                            xAngle: o.animation / 150,
                            yAngle: o.animation / 170,
                            zAngle: o.animation / 180,
                            dashedBorder: true,
                            grey: true,
                            colorFunction: function (x, y, z, n) {
                                var l = (1 - y) * 150 + x * 50;
                                var r = 70 + l;
                                var g = 70 + l;
                                var b = 200 + l;
                                return `rgb(${r},${g},${b})`;
                            }
                        });
                    }
                } else if (o.red) {
                    drawRotatingCube({
                        size: 30,
                        xAngle: o.animation / 150,
                        yAngle: o.animation / 170,
                        zAngle: o.animation / 180,
                        red: true,
                        colorFunction: function (x, y, z, n) {
                            var l = (1 - y) * 150 + x * 50;
                            var r = 220 + l / 3;
                            var g = 20 + l;
                            var b = 20 + l;
                            return `rgb(${r},${g},${b})`;
                        }
                    });
                } else {
                    drawRotatingCube({
                        size: 30,
                        xAngle: o.animation / 150,
                        yAngle: o.animation / 170,
                        zAngle: o.animation / 180,
                        colorFunction: function (x, y, z, n) {
                            var l = (1 - y) * 150 + x * 50;
                            var r = 20 + l;
                            var g = 20 + l * 1.2;
                            var b = 220 + l / 3;
                            return `rgb(${r},${g},${b})`;
                        }
                    });
                }
                if (game.level.triggers.tripped("blue cube ultra") || game.level.triggers.tripped("red cube ultra")) {
                    drawUltraCubeLightningFront(o);
                }
            }
        } else if (o.drawType == "text") {
            ctx.fillStyle = o.color || "black";
            ctx.font = o.font || "50px rubik";
            ctx.textAlign = o.textAlign || "center";
            ctx.textBaseline = o.textBaseline || "middle";
            ctx.fillText(o.content, 0, 0);
        } else if (o.drawType == "image") {
            ctx.drawImage(images[o.image], 0, 0, o.w, o.h);
        } else if (o.drawType == "jump enemy") {
            ctx.drawImage(images.jumpEnemy, 0, 0, o.w, o.h);
        } else if (o.drawType == "arrow") {
            ctx.strokeStyle = o.color || "black";
            ctx.lineWidth = o.lineWidth || 12;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            var totalWidth = o.totalWidth || 200;
            var height = o.height || 25;
            var headWidth = o.headWidth || 40;
            ctx.beginPath();
            ctx.moveTo(-totalWidth / 2, 0);
            ctx.lineTo(totalWidth / 2, 0);
            ctx.lineTo(totalWidth / 2 - headWidth, height);
            ctx.moveTo(totalWidth / 2, 0);
            ctx.lineTo(totalWidth / 2 - headWidth, -height);
            ctx.stroke();
        } else if (o.drawType == "block") {
            ctx.fillStyle = "black";
            if (o.color) ctx.fillStyle = o.color;
            if (o.blueAnimation && o.blueAnimation > 0) {
                var x = o.blueAnimationOrigin.x;
                var y = o.blueAnimationOrigin.y;
                var r1 = o.blueAnimation ** 1.8 - 500;
                var r2 = r1 + 500;
                r1 = Math.max(r1, 0);
                var grd = ctx.createRadialGradient(x, y, r1, x, y, r2);
                if (game.level.triggers.tripped("ultra blue cube")) {
                    grd.addColorStop(0, "rgb(255, 50, 231)");
                } else {
                    grd.addColorStop(0, "rgb(50,50,255)");
                }
                grd.addColorStop(1, "black");
                ctx.fillStyle = grd;
            }
            ctx.fillRect(0, 0, o.w, o.h);
        } else if (o.drawType == "phase in out ornament") {
            if (!o.animation || o.cutout || o.cutout2) {
                ctx.restore();
                return;
            }
            var s = easeInOut(o.animation.a / o.animation.max);
            var turn = o.turn || 90;
            var turnAngle = turn * s;
            var speed = o.speed || 1;
            var angle = o.angle || 0;
            if (!o.animation.current) turnAngle = turn + turn * (1 - s);
            ctx.rotate(-o.angle * Math.PI / 180);
            ctx.translate(o.w / 2, o.h / 2);
            ctx.scale(s, s);
            ctx.rotate((angle + speed * game.level.levelAnimationTime + turnAngle) * Math.PI / 180);
            ctx.fillStyle = "black";
            if (o.lava) {
                ctx.fillStyle = "red";
            }
            ctx.fillRect(-o.w / 2, -o.h / 2, o.w, o.h);
        } else if (o.drawType == "coin dash block") {
            ctx.fillStyle = "rgb(40,20,0)";
            ctx.fillRect(0, 0, o.w, o.h);
            ctx.fillStyle = "rgb(0,255,0)";
            ctx.fillRect(0, -1, o.w, 5);
        } else if (o.drawType == "platform") {
            ctx.fillStyle = "black";
            if (o.color) ctx.fillStyle = o.color;
            ctx.fillRect(0, 0, o.w, o.h);
        } else if (o.drawType == "sokoban box") {
            if (o.blue) {
                if (o.lit) {
                    ctx.shadowColor = "rgb(50,120,255)";
                    ctx.shadowBlur = 40;
                    ctx.drawImage(images.sokobanBlueBoxLit, 0, 0, o.w, o.h);
                } else {
                    ctx.drawImage(images.sokobanBlueBox, 0, 0, o.w, o.h);
                }
            } else {
                ctx.drawImage(images.sokobanBox, 0, 0, o.w, o.h);
            }
        } else if (o.drawType == "unstable") {
            ctx.strokeStyle = "black";
            if (o.color) ctx.strokeStyle = o.color;
            ctx.lineWidth = 5;
            ctx.strokeRect(2.5, 2.5, o.w - 5, o.h - 5);
        } else if (o.drawType == "lava") {
            ctx.shadowBlur = 10;
            if (o.noGlow) ctx.shadowBlur = 0;
            ctx.shadowColor = "red";
            ctx.fillStyle = "red";
            if (game.background.effect.active("magenta")) {
                ctx.shadowColor = "rgb(255,0,238)";
                ctx.fillStyle = "rgb(255,0,238)";
            } else if (johnbutlergames) {
                ctx.shadowColor = "blue";
                ctx.fillStyle = "blue";
            }
            ctx.fillRect(0, 0, o.w, o.h);
        } else if (o.drawType == "glass") {
            var p = Math.min(o.proximity, 1);
            ctx.fillStyle = `rgba(${p ** 0.2 * 150},${p ** 0.2 * 180},${p ** 0.2 * 255},${0.04 + p * 0.6})`;
            if (game.level.forceVisibility) {
                ctx.fillStyle = `rgba(${p ** 0.2 * 150},${p ** 0.2 * 180},${p ** 0.2 * 255},1)`;
            }
            ctx.fillRect(0, 0, o.w, o.h);
        } else if (o.drawType == "thick glass") {
            ctx.fillStyle = `rgba(0,0,0,0.08)`;
            if (game.level.forceVisibility) {
                ctx.fillStyle = "black";
            }
            ctx.fillRect(0, 0, o.w, o.h);
        } else if (o.drawType == "lava glass") {
            var p = Math.min(o.proximity, 1);
            if (game.level.forceVisibility) {
                ctx.fillStyle = `rgba(255,0,0,1)`;
                if (johnbutlergames) {
                    ctx.fillStyle = `rgba(0,0,255,1)`;
                }
            } else {
                ctx.fillStyle = `rgba(255,0,0,${0.04 + p * 0.3})`;
                if (johnbutlergames) {
                    ctx.fillStyle = `rgba(0,0,255,${0.04 + p * 0.3})`;
                }
            }

            ctx.fillRect(0, 0, o.w, o.h);
        } else if (o.drawType == "button") {
            ctx.fillStyle = "rgb(255,120,100)";
            if (o.color) ctx.fillStyle = o.color;
            if (o.lava && game.level.triggers.tripped("ultra shortcut")) ctx.fillStyle = "rgb(255,0,238)";
            if (o.glowing) {
                ctx.shadowColor = "rgb(255,120,100)";
                if (o.color) ctx.shadowColor = o.color;
                if (o.lava && game.level.triggers.tripped("ultra shortcut")) ctx.shadowColor = "rgb(255,0,238)";
                ctx.shadowBlur = 5;
            }
            ctx.fillRect(0, 0, o.w, o.h - (o.glowing ? 5 : 0));
            ctx.shadowBlur = 0;
            ctx.fillStyle = "rgb(50,50,50)";
            ctx.fillRect(-10, o.h - 5, o.w + 20, 6);
        } else if (o.drawType == "eye blob") {
            var o1 = game.objects.objects.find(e => e.id == "player eye 1");
            var o2 = game.objects.objects.find(e => e.id == "player eye 2");
            var player = game.objects.objects.find(e => e.type == "player");
            if (o1 && o2 && o1.blobStateAnimation && !player) {
                var avgX = (o1.x + o2.x) / 2 + 4;
                var avgY = (o1.y + o2.y) / 2 + 4;
                var dist = distTo(o1.x, o1.y, o2.x, o2.y);
                var dir = o1.blobStateAngle;
                var block = o1.collidingEnterable;

                ctx.save();
                if (!o1.blobState && block) {
                    ctx.beginPath();
                    ctx.rect(block.x - 1, block.y - 1, block.w + 2, block.h + 2);
                    ctx.clip();
                }
                ctx.translate(avgX, avgY);
                ctx.rotate(dir * Math.PI / 180);
                var stretch = Math.sin(t / 10) * 0.05;
                var a1 = easeOutPartialIn(o1.blobStateAnimation / 20);
                var a2 = easeInOut((o1.blobStateAnimation - 10) / 10);
                var a3 = easeInOut(o1.blobStateAnimation / 10);
                var a4 = easeInOut((o1.blobStateAngle - 15) / 5);
                if (block.exitBlock && o1.blobStateTime > 10) a4 = 0;
                ctx.scale(3 - a1 * 2 - stretch * a4, (a3 * 0.3 + a2 * 0.7) * (1 + stretch * a4));

                ctx.fillStyle = "rgb(50,50,255)";
                if (block.exitBlock && o1.blobStateTime > 10 && o1.blobState) {
                    var a = easeInOut((o1.blobStateTime - 10) / 20);
                    ctx.rotate(-dir * Math.PI / 180);
                    var r = 15 + dist * 0.3;
                    ctx.roundRect(-r, -r + 3.5 * a, r * 2, r * 2, r * (1 - a) + 2 * a);
                    ctx.fill();
                } else {
                    ctx.beginPath();
                    ctx.arc(0, 0, 15 + dist * 0.3, 0, 2 * Math.PI);
                    ctx.fill();
                }

                ctx.restore();
            }
        } else if (o.drawType == "player eye") {
            ctx.fillStyle = "black";
            var r = 3.7;
            if (o.spawnAnimation) {
                r = 3.7 * 1 - easeInOut(o.spawnAnimation / 100);
                ctx.globalAlpha = 1 - easeInOut(o.spawnAnimation / 100);
            }
            ctx.beginPath();
            ctx.arc(3.7, 3.7, r, 0, 2 * Math.PI);
            ctx.fill();
        } else if (o.drawType == "sokoban player") {
            ctx.scale(o.w / 40, o.h / 40);
            ctx.fillStyle = "rgb(50,50,255)";
            ctx.fillRect(0, 0, 40, 40);
            ctx.fillStyle = "black";
            ctx.fillRect(9, 7, 7, 7);
            ctx.fillRect(24, 7, 7, 7);
        } else if (o.drawType == "snake player") {
            ctx.scale(o.w / 40, o.h / 40);
            ctx.translate(-20, -20);
            ctx.fillStyle = "rgb(50,50,255)";
            if (o.deathAnimation) {
                if ((o.deathAnimation + 15) % 40 > 15) {
                    ctx.fillStyle = "rgb(50,50,200)";
                }
            }
            ctx.fillRect(0, 0, 40, 40);
            ctx.fillStyle = "black";
            if (o.deathAnimation) {
                ctx.save();
                ctx.translate(9 + 7 / 2, 7 + 7 / 2);
                ctx.rotate(45 * Math.PI / 180);
                ctx.fillRect(-6, -1, 12, 2);
                ctx.fillRect(-1, -6, 2, 12);
                ctx.restore();
                ctx.save();
                ctx.translate(24 + 7 / 2, 7 + 7 / 2);
                ctx.rotate(45 * Math.PI / 180);
                ctx.fillRect(-6, -1, 12, 2);
                ctx.fillRect(-1, -6, 2, 12);
                ctx.restore();
            } else {
                ctx.fillRect(9, 7, 7, 7);
                ctx.fillRect(24, 7, 7, 7);
            }
        } else if (o.drawType == "snake body") {
            ctx.fillStyle = "rgb(50,50,255)";
            if (o.deathAnimation) {
                if ((o.deathAnimation + 15) % 40 > 15) {
                    ctx.fillStyle = "rgb(50,50,200)";
                }
            }
            ctx.fillRect(0, 0, o.w, o.h);
            if (o.moving) {
                var percent = o.time / o.move.speed;
                percent = Math.min(percent, 1);
                var x = o.move.direction.x * percent;
                var y = o.move.direction.y * percent;
                ctx.fillRect(x, y, o.w, o.h);
            }
        } else if (o.drawType == "apple") {
            ctx.fillStyle = "rgb(255,50,50)";
            ctx.fillRect(0, 0, o.w, o.h);
        } else if (o.drawType == "pacman player") {
            var openDistance = Math.round((Math.sin(o.animation) * 0.5 + 0.5) * 2) / 2 * 30;
            ctx.fillStyle = "rgb(50,50,255)";
            ctx.translate(-o.w / 2, -o.h / 2);
            ctx.scale(o.w / 40, o.h / 40);
            if (o.deathAnimation) {
                var angle = Math.floor(Math.max(o.deathAnimation - 50, 0) / 10) * 90;
                var scale = Math.max(1 - Math.floor(Math.max(o.deathAnimation - 70, 0) / 10) ** 1.2 * 0.08, 0);
                if (scale == 0 && o.deathAnimation < 180) {
                    ctx.drawImage(images.pacmanDeath, 0, 0, 40, 40);
                }
                ctx.translate(o.w / 2, o.h / 2);
                ctx.rotate(angle * Math.PI / 180);
                ctx.scale(scale, scale);
                ctx.translate(-o.w / 2, -o.h / 2);
            }
            ctx.beginPath();
            ctx.moveTo(2 - openDistance / 5, 0);
            ctx.lineTo(20 - openDistance / 2, 0);
            ctx.lineTo(20, 25);
            ctx.lineTo(20 + openDistance / 2, 0);
            ctx.lineTo(38 + openDistance / 5, 0);
            ctx.lineTo(40, 40);
            ctx.lineTo(0, 40);
            ctx.closePath();
            ctx.fill();
            if (o.angle == 270) {
                ctx.translate(o.w / 2, o.h / 2);
                ctx.scale(-1, 1);
                ctx.translate(-o.w / 2, -o.h / 2);
            }
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.arc(10 - openDistance / 3.7, 8, 3.5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(11 - openDistance / 7, 20, 3.5, 0, 2 * Math.PI);
            ctx.fill();
        } else if (o.type == "pacman dot") {
            ctx.fillStyle = "rgb(200,200,200)";
            if (o.red) ctx.fillStyle = "rgb(255,150,150)";
            if (o.clue) {
                var dist = 200;
                var player = game.objects.objects.find(e => e.type == "pacman player");
                if (player) {
                    dist = distTo(o.x, o.y, player.x, player.y);
                }
                var p = easeInOut(1.2 - dist / 200);
                ctx.fillStyle = `rgb(${200 + 55 * p},${200 - 150 * p},${200 - 150 * p})`;
                ctx.translate(o.w / 2, o.h / 2);
                ctx.rotate(45 * Math.PI / 180);
                ctx.translate(-o.w / 2, -o.h / 2);
                ctx.fillRect(0, 0, o.w, o.h);
            } else {
                ctx.fillRect(0, 0, o.w, o.h);
            }
        } else if (o.drawType == "ping pong player") {
            ctx.scale(o.w / 40, o.h / 40);
            ctx.fillStyle = "rgb(50,50,255)";
            ctx.fillRect(0, 0, 40, 40);
            ctx.fillStyle = "black";
            ctx.fillRect(9, 7, 7, 7);
            ctx.fillRect(24, 7, 7, 7);
        } else if (o.drawType == "circles player") {
            ctx.scale(o.r / 40, o.r / 40);
            ctx.fillStyle = "rgb(50,50,255)";
            ctx.beginPath();
            ctx.arc(0, 0, 40, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.arc(-14, -12, 7, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(14, -12, 7, 0, 2 * Math.PI);
            ctx.fill();
        } else if (o.drawType == "circle") {
            ctx.fillStyle = o.color;
            ctx.strokeStyle = "black";
            ctx.lineWidth = 10;
            ctx.beginPath();
            ctx.arc(0, 0, o.r - 5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        } else if (o.drawType == "circles collectable") {
            ctx.lineWidth = 8;
            ctx.strokeStyle = "rgba(100,100,200,0.5)";
            ctx.fillStyle = "rgba(100,100,200,0.3)";
            ctx.beginPath();
            ctx.arc(0, 0, 25 - 4, 0, 2 * Math.PI);
            ctx.stroke();
            if (!o.collected) ctx.fill();
        } else if (o.drawType == "old player") {
            ctx.fillStyle = "blue";
            ctx.fillRect(0, 0, o.w, o.h);

            ctx.fillStyle = "black";
            var dir = dirTo(0, 0, o.xmove, o.ymove);
            var speed = distTo(0, 0, o.xmove, o.ymove);
            speed = Math.min(speed, 5);
            var move = distToMove(speed, dir);
            ctx.beginPath();
            ctx.arc(move.x * 1.5 + o.w / 2 - 7, move.y * 2 + o.h / 2 - 7, 3.7, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(move.x * 1.5 + o.w / 2 + 7, move.y * 2 + o.h / 2 - 7, 3.7, 0, 2 * Math.PI);
            ctx.fill();
        } else if (o.drawType == "pacman ghost") {
            var x = o.direction / 90 * 200 + Math.floor(o.animation % 40 / 20) * 100;
            var y = ["cyan", "red", "orange", "pink"].indexOf(o.color) * 100;
            ctx.drawImage(images.ghostSpritesheet, x, y, 100, 100, -5, -5, o.w + 10, o.h + 10);
            //ctx.restore();
            //ctx.fillStyle = "lime";
            //ctx.fillRect(o.targetX - 15, o.targetY - 15, 30, 30);
            //return;
        } else if (o.drawType == "ghost node") {
            ctx.restore();
            return;
            ctx.fillStyle = "blue";
            ctx.globalAlpha = Math.max(0, 1 - o.distToPlayer / 1000);
            ctx.fillRect(-10, -10, 20, 20)
        } else if (o.drawType == "coin dash coin") {
            if (!o.animation) o.animation = 0;
            ctx.scale(Math.abs(Math.sin(o.animation / 50)), 1);

            ctx.strokeStyle = "black";
            ctx.lineWidth = 3;
            ctx.fillStyle = "rgb(255,255,0)";
            ctx.beginPath();
            ctx.arc(0, 0, 20, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        } else if (o.drawType == "boss") {
            var leftFireAnimation = easeInBack(o.leftFireAnimation / 30) || 0;
            var rightFireAnimation = easeInBack(o.rightFireAnimation / 30) || 0;
            ctx.save();
            ctx.translate(o.w / 2, o.h / 2);
            if (o.stunnedTime) {
                ctx.drawImage(images.bossSpritesheet, 500, 0, 500, 500, - o.w / 2, -o.h / 2, o.w, o.h);
                var move = distToMove(7, t * 5);
                ctx.save();
                ctx.translate(move.x, move.y);
                ctx.drawImage(images.bossSpritesheet, 0, 500, 250, 500, - o.w / 2, -o.h / 2, o.w / 2, o.h);
                ctx.restore();
                var move = distToMove(7, -t * 5 + 180);
                ctx.save();
                ctx.translate(move.x, move.y);
                ctx.drawImage(images.bossSpritesheet, 250, 500, 250, 500, 0, -o.h / 2, o.w / 2, o.h);
                ctx.restore();
            } else {
                ctx.drawImage(images.bossSpritesheet, 0, 0, 500, 500, - o.w / 2, -o.h / 2, o.w, o.h);
            }
            ctx.drawImage(images.bossSpritesheet, 500, 700, 150, 200, -o.w * 0.9, o.h * (0.18 - leftFireAnimation * 0.05), o.w * 0.3, o.h * 0.4);
            ctx.drawImage(images.bossSpritesheet, 500, 500, 150, 200, -o.w * 0.9, o.h * (-leftFireAnimation * 0.01), o.w * 0.3, o.h * 0.4);
            ctx.drawImage(images.bossSpritesheet, 500, 700, 150, 200, o.w * 0.6, o.h * (0.18 - rightFireAnimation * 0.05), o.w * 0.3, o.h * 0.4);
            ctx.drawImage(images.bossSpritesheet, 500, 500, 150, 200, o.w * 0.6, o.h * (-rightFireAnimation * 0.01), o.w * 0.3, o.h * 0.4);
            ctx.restore();
        } else if (o.drawType == "boss fireball") {
            ctx.shadowBlur = 10;
            ctx.shadowColor = "rgb(220,32,32)";
            ctx.fillStyle = "rgb(220,32,32)";
            if (johnbutlergames) {
                ctx.shadowColor = "rgb(32,32,255)";
                ctx.fillStyle = "rgb(32,32,255)";
            }
            ctx.fillRect(-15, -15, 30, 30);
        } else if (o.drawType == "heart") {
            var x, y;
            if (o.color == "blue") y = 0;
            if (o.color == "black") y = 50;
            if (o.color == "red") y = 100;
            if (o.full) {
                x = 0;
            } else {
                x = 100;
            }
            ctx.drawImage(images.heartsSpritesheet, x, y, 50, 50, 0, 0, o.w, o.h);
            if (o.blink % 30 > 15) {
                ctx.globalAlpha = 0.5;
                ctx.drawImage(images.heartsSpritesheet, 0, y, 50, 50, 0, 0, o.w, o.h);
            }
        } else if (o.drawType == "phase in out") {
            if (!o.animation) {
                ctx.restore();
                return;
            }
            var turn = o.turn || 180;
            var a = o.animation.a / o.animation.max;
            if (o.reverse) a = 1 - a;
            var scale = easeInOut(a);
            var angle = easeInOut(a) * turn;
            if (o.period && !o.animation.current) angle = easeInOut(a) * -turn;
            ctx.translate(o.w / 2, o.h / 2);
            ctx.rotate(angle * Math.PI / 180);
            ctx.scale(scale, scale);
            ctx.fillStyle = "black";
            ctx.fillRect(-o.w / 2, -o.h / 2, o.w, o.h);
        } else if (o.drawType == "portal") {
            ctx.fillStyle = `rgb(${o.color.r},${o.color.g},${o.color.b})`;
            ctx.fillRect(0, 0, o.length, 5);
            var a = o.teleportTime || 0;
            var alpha = 0.2 + a / 100;
            var grd = ctx.createLinearGradient(0, 0, 0, -100 - a);
            grd.addColorStop(0, `rgba(${o.color.r},${o.color.g},${o.color.b},${alpha})`);
            grd.addColorStop(1, `rgba(${o.color.r},${o.color.g},${o.color.b},0)`);
            ctx.fillStyle = grd;
            ctx.fillRect(0, -200, o.length, 200);
            var grd = ctx.createLinearGradient(0, 0, 0, -100 - a);
            grd.addColorStop(0, `rgba(${o.color.r},${o.color.g},${o.color.b},${alpha / 2})`);
            grd.addColorStop(1, `rgba(${o.color.r},${o.color.g},${o.color.b},0)`);
            ctx.fillStyle = grd;
            if (o.direction == "in") {
                ctx.fillRect(0, -100 + 100 * easeInOut(t % 100 / 100), o.length, 10);
            } else {
                ctx.fillRect(0, -100 * easeInOut(t % 100 / 100), o.length, 10);
            }
        } else if (o.drawType == "spike") {
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.moveTo(o.w / 2, 0);
            ctx.lineTo(o.w, o.h);
            ctx.lineTo(0, o.h);
            ctx.closePath();
            ctx.fill();
        } else if (o.drawType == "wave") {
            var dist = easeInBack(o.animation / 200) * 400 + easeInOut(o.animation / 200 - 0.5) * 400;
            var height = easeInOut(1 - o.animation / 200) * 30 * easeInOut(o.animation / 20) + 2 * easeInBack(o.animation / 200 - 0.3);
            var space = 50 + easeInOut(o.animation / 200) * 200 + 200 * easeInOut(1 - o.animation / 50);
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, o.h);
            ctx.lineTo(o.w, o.h);
            ctx.lineTo(o.w, 0);
            ctx.lineTo(o.w / 2 + dist, 0);
            for (var n = dist; n > -dist; n -= 5) {
                var amplitude = 1 - Math.sin(Math.abs(n) / dist * Math.PI / 2);
                var x = o.w / 2 + n;
                var sign = n < 0 ? -1 : 1;
                var y = Math.sin(Math.abs(n) ** 1.3 * sign / space + o.animation / 5 + 10) * height * amplitude;
                ctx.lineTo(x, y);
            }
            ctx.lineTo(o.w / 2 - dist, 0);
            ctx.closePath();
            ctx.fill();
        } else if (o.type == "boss part") {
            var n = Number(o.id.split("boss part ")[1]) - 1;
            n = [4, 5, 2, 0, 1, 6, 8, 7, 3][n];
            var x = n % 3;
            var y = Math.floor(n / 3);
            x *= 800 / 3;
            y *= 800 / 3;
            if (o.fallOpacity > 0) {
                var frame = 5 - Math.floor(o.fallOpacity * 5);

                ctx.save();
                ctx.globalAlpha = 0.6 * o.fallOpacity;
                ctx.rotate(-o.angle * Math.PI / 180);
                ctx.rotate(o.fallAngle * Math.PI / 180);
                ctx.fillStyle = "white";
                ctx.drawImage(images.bartPartTrail, frame * 160, 0, 160, 800, -100, -100, 200, 1000);
                ctx.restore();
            }
            ctx.drawImage(images.bartPhase0Spritesheet, x, y, 800 / 3, 800 / 3, -75, -75, 150, 150);

            if (o.heatOpacity > 0) {
                ctx.save();
                ctx.globalAlpha = 0.5 * o.heatOpacity;
                ctx.drawImage(images.bartPhase0Spritesheet, x + 800, y, 800 / 3, 800 / 3, -75, -75, 150, 150);
                ctx.restore();
            }
        }
        ctx.restore();
    }
}