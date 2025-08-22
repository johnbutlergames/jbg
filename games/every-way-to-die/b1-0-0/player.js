class Player extends BasicObject {
    constructor(x, y) {
        super(x, y, 50, 50);
        this.type = "player";
        this.move = { x: 0, y: 0 };
        this.dynamic = true;
        this.static = false;
        this.groundTouchTime = 0;
        this.leftWallTouchTime = 0;
        this.rightWallTouchTime = 0;
        this.lastGroundTouch = Infinity;
        this.lastLeftWallTouch = Infinity;
        this.lastRightWallTouch = Infinity;
        this.moveTime = 0;
        this.cachedSpeeds = [];
        this.cachedFallSpeeds = [];
        this.resting = {};
        this.squish = 0;
        this.squishChange = 0;
        this.eyeDirection = { x: 0, y: 0, target: { x: 0, y: 0 } };
        this.spawnAnimation = 0;
        this.hitSoundEffectNumber = 0;
    }
    update() {
        this.updateSoundEffects();
        this.updateAnimation();
        this.updateCoyoteTime();
        this.updateMovement();
        this.updateSpringCollisions();
        this.updateDeathCollisions();
        this.checkOutOfBounds();
        this.calculateObjectsNear();
        this.createDeathBlobs();
    }
    updateSoundEffects() {
        if (this.groundTouchTime === 1 || this.leftWallTouchTime === 1 || this.rightWallTouchTime === 1) {
            let speed = Math.max(...this.cachedSpeeds) + Math.max(...this.cachedFallSpeeds);
            let volume = Math.max(Math.min((speed - 5) / 15, 1), 0);
            let audio = audios[`hit${this.hitSoundEffectNumber + 1}`];
            audio.volume = volume * 0.5;
            audio.currentTime = 0;
            audio.play();
            this.hitSoundEffectNumber++;
            this.hitSoundEffectNumber %= 5;
        }
    }
    updateAnimation() {
        this.spawnAnimation++;
        if (this.groundTouchTime === 1) {
            this.squishChange = Math.abs(this.move.y) * -0.01;
            this.squish = -0.1;
        }
        if (this.rightWallTouchTime === 1 || this.leftWallTouchTime === 1) {
            this.squishChange = Math.abs(this.move.x) * 0.01;
            this.squish = 0.1;
        }
        this.squish += this.squishChange;
        this.squishChange += this.squish * -0.05;
        this.squishChange *= 0.95;
        this.squish *= 0.98;

        if (this.move.y < -5) {
            this.squishChange -= 0.005;
        }

        if (game.input.left && !game.input.right) {
            this.eyeDirection.target.x = -1;
        } else if (game.input.right && !game.input.left) {
            this.eyeDirection.target.x = 1;
        } else {
            this.eyeDirection.target.x = 0;
        }
        if (this.move.y > 1) {
            this.eyeDirection.target.y = 1.5;
            if (this.move.y > 5) {
                this.eyeDirection.y += 0.05;
            }
        } else if (game.input.up && !game.input.down) {
            this.eyeDirection.target.y = -1;
        } else {
            this.eyeDirection.target.y = 0;
        }
        this.eyeDirection.x = this.eyeDirection.x * 0.95 + this.eyeDirection.target.x * 0.05;
        this.eyeDirection.y = this.eyeDirection.y * 0.95 + this.eyeDirection.target.y * 0.05;
    }
    updateCoyoteTime() {
        this.lastGroundTouch++;
        this.lastLeftWallTouch++;
        this.lastRightWallTouch++;
        if (this.resting.down) this.lastGroundTouch = 0;
        if (this.resting.left) this.lastLeftWallTouch = 0;
        if (this.resting.right) this.lastRightWallTouch = 0;

        if (this.resting.down) {
            this.groundTouchTime++;
        } else {
            this.groundTouchTime = 0;
        }
        if (this.resting.left) {
            this.leftWallTouchTime++;
        } else {
            this.leftWallTouchTime = 0;
        }
        if (this.resting.right) {
            this.rightWallTouchTime++;
        } else {
            this.rightWallTouchTime = 0;
        }
    }
    updateMovement() {
        let speed = 0.35;
        if (this.moveTime < 7) speed = 0.3;
        if (this.moveTime < 3) speed = 0.07;
        if (this.moveTime > 60) speed = 0.4;
        if (game.input.left) {
            this.move.x -= speed;
        }
        if (game.input.right) {
            this.move.x += speed;
        }
        if ((game.input.left || game.input.right) && !(game.input.left && game.input.right)) {
            this.moveTime++;
        } else {
            this.moveTime = 0;
        }

        if (game.input.up) {
            if (this.lastGroundTouch < 5) {
                let fallSpeed = Math.max(...this.cachedFallSpeeds, 0);

                this.move.y = -9;
                if (fallSpeed > 3) this.move.y = -12;
                this.squishChange = 0.01;
                this.squish = 0.1;
                this.lastGroundTouch = 5;
            } else {
                let speed = 5;
                let jumpHeight = 6;
                let directionHold = game.input.rightLast < 5 || game.input.leftLast < 5;
                if (directionHold) {
                    if (this.lastRightWallTouch < 5) {
                        if (game.input.leftLast < 5) {
                            speed = Math.max(...this.cachedSpeeds, 6);
                            if (speed > 10.3) {
                                jumpHeight = 9;
                                speed += 0.5;
                                this.moveTime = 60;
                            }
                        }
                        this.move.x = -speed;
                        this.move.y = -jumpHeight;
                        this.squishChange = 0.01;
                        this.squish = 0.1;
                    } else if (this.lastLeftWallTouch < 5) {
                        if (game.input.rightLast < 5) {
                            speed = Math.max(...this.cachedSpeeds, 6);
                            if (speed > 10.3) {
                                jumpHeight = 9;
                                speed += 0.5;
                                this.moveTime = 60;
                            }
                        }
                        this.move.x = speed;
                        this.move.y = -jumpHeight;
                        this.squishChange = 0.01;
                        this.squish = 0.1;
                    }
                }

            }
        }
        let leftWallHug = game.input.left && this.resting.left;
        let rightWallHug = game.input.right && this.resting.right;
        if (leftWallHug || rightWallHug) {
            if (game.input.up) {
                this.move.y += 0.05;
            } else if (game.input.down) {
                this.move.y += 0.05;
            } else {
                this.move.y += 0.05;
            }
        } else if (game.input.down) {
            if (this.move.y < 0) {
                this.move.y += 1.5;
            } else {
                this.move.y += 1;
            }
        } else if (game.input.up) {
            this.move.y += 0.2;
        } else {
            this.move.y += 0.4;
        }

        if (!this.resting.down) {
            if (this.moveTime) {
                this.move.x *= 0.97;
            } else {
                this.move.x *= 0.95;
            }
        } else {
            if (this.moveTime) {
                this.move.x *= 0.96;
            } else {
                this.move.x *= 0.85;
            }
        }
        if (leftWallHug || rightWallHug) {
            if (this.move.y < 0) this.move.y *= 0.9;
            if (Math.abs(this.move.y) > 3) this.move.y *= 0.9;
            this.move.y *= 0.95;
        } else {
            this.move.y *= 0.99;
        }

        this.cachedSpeeds.push(Math.abs(this.move.x));
        while (this.cachedSpeeds.length > 5) this.cachedSpeeds.shift();

        this.cachedFallSpeeds.push(Math.abs(this.move.y));
        while (this.cachedFallSpeeds.length > 10) this.cachedFallSpeeds.shift();
    }
    updateSpringCollisions() {
        for (let o of game.level.level.objects) {
            if (!(o instanceof SpringObject)) continue;
            if (!blocksColliding(o.hitbox, this.hitbox)) continue;
            if (o.springAnimation) continue;
            this.move.y = Math.max(Math.min(-this.move.y, -15), -25);
            o.springAnimation = 15;
            audios.spring.currentTime = 0;
            audios.spring.play();
        }
    }
    updateDeathCollisions() {
        let collidingObjects = [];
        let hitbox = { x: this.x + 10, y: this.y + 10, w: this.w - 20, h: this.h - 20 };
        for (let o of game.level.level.objects) {
            if (!(o instanceof SpikeObject)) continue;
            if(!o.engaged || o.engagedAnimation < 6) continue;
            if (!blocksColliding(o.hitbox, hitbox)) continue;
            collidingObjects.push(o);
        }
        for (let o of game.level.level.objects) {
            if (!(o instanceof SawObject)) continue;
            if (!blocksColliding(o.hitbox, this.hitbox)) continue;
            let dist = distTo(this.cx, this.cy, o.cx, o.cy);
            if (dist > o.w / 2) continue;
            collidingObjects.push(o);
        }

        if (collidingObjects.length) {
            for (let o of collidingObjects) {
                game.level.playerDiedOnObject(o);
            }
            this.delete = true;
            game.particles.createEffect("player death");
            audios.death.currentTime = 0;
            audios.death.play();
        }
    }
    checkOutOfBounds() {
        let inBounds = false;
        for (let o of game.level.level.boundary) {
            if (blocksColliding(o, this.hitbox)) {
                inBounds = true;
                break;
            }
        }
        if (!inBounds) {
            this.delete = true;
            game.particles.createEffect("player death");
            return;
        }
    }
    calculateObjectsNear() {
        if (!this.delete) return;
        let hitbox = { x: this.x - 400, y: this.y - 400, w: 800, h: 800 };
        game.level.objectsNearPlayer = game.env.objects.filter(e => blocksColliding(e.hitbox, hitbox));
    }
    createDeathBlobs() {
        if (!this.delete) return;
        this.ignoreCollisions = true;
        for (let n = 0; n < 10; n++) {
            let angle = n / 10 * 360;
            angle += Math.random() * 40 - 20;
            let move = distToMove(5 + Math.random() * 18, angle);
            let x = this.cx + move.x;
            let y = this.cy + move.y;
            let xmove = move.x * 0.2;
            let ymove = move.y * 0.2 - 3;
            game.env.objects.push(new PlayerDeathBlob(x, y, xmove, ymove));
        }
    }
    draw() {
        let tilt = this.move.x * -0.005;
        let squish = this.squish + Math.max(this.move.y, 0) * 0.01;
        squish = Math.min(Math.max(squish, -0.3), 0.3);
        let width = 1 - squish;
        let height = 1 + squish;

        ctx.save();
        ctx.translate(this.cx, this.y + this.h);
        ctx.scale(width, height);
        let s = easeInOut(this.spawnAnimation / 20);
        ctx.scale(s, s);
        ctx.transform(1, 0, tilt, 1, 0, 0);

        ctx.fillStyle = "rgba(255,0,0,0.7)";
        ctx.roundRect(-this.w / 2, -this.h, this.w, this.h, 6);
        ctx.fill();

        ctx.save();
        ctx.translate(0, -this.h + 23);
        ctx.translate(this.eyeDirection.x * 6, this.eyeDirection.y * 2);
        ctx.fillStyle = "white";
        ctx.roundRect(-12, -12, 24, 24, 6);
        ctx.fill();
        ctx.translate(this.eyeDirection.x * 6, this.eyeDirection.y * 4);
        ctx.fillStyle = "black";
        ctx.roundRect(-5, -5, 10, 10, 3);
        ctx.fill();
        ctx.restore();

        ctx.restore();
    }
}

class PlayerGhost extends Player {
    constructor(x, y) {
        super(x, y);
        let dir = dirTo(x + 25, y + 25, game.level.spawnPoint.x, game.level.spawnPoint.y);
        let move = distToMove(5, dir - 55);
        if (this.x > game.level.spawnPoint.x) {
            move = distToMove(5, dir + 55);
        }
        this.move.x = move.x;
        this.move.y = move.y;
        this.animation = 0;
        this.trail = [];
        for (let n = 0; n < 30; n++) {
            this.trail.push({ x: this.cx, y: this.cy });
        }
    }
    update() {
        this.trail[0] = { x: this.cx, y: this.cy };
        for (let n = 1; n < this.trail.length; n++) {
            let current = this.trail[n];
            let last = this.trail[n - 1];
            let percent = 0.3;
            let r = (1 - n / this.trail.length) * 20;
            current.x = current.x * (1 - percent) + last.x * percent;
            current.y = current.y * (1 - percent) + last.y * percent;
            let dist = distTo(current.x, current.y, last.x, last.y);
            let dir = dirTo(current.x, current.y, last.x, last.y);
            if (dist > r) {
                let move = distToMove(dist - r, dir);
                current.x += move.x;
                current.y += move.y;
            }
        }

        this.animation++;

        if (this.animation < 90) {
            this.alpha = easeInOut((this.animation - 50) / 10);
            if (this.animation > 50) {
                this.x += this.move.x;
                this.y += this.move.y;
                this.move.x *= 0.98;
                this.move.y *= 0.98;

                let dir = dirTo(this.cx, this.cy, game.level.lastPlayerPosition.x + 25, game.level.lastPlayerPosition.y + 25);
                let move = distToMove(1, dir);
                this.eyeDirection.x = move.x;
                this.eyeDirection.y = move.y * 1.5;
            }
        } else {
            let a = easeInOut((this.animation - 90) / 10) * 0.02 + easeInOut((this.animation - 110) / 50) * 0.1;
            this.x += this.move.x;
            this.y += this.move.y;
            this.move.x *= 1.01;
            this.move.y *= 1.01;

            let dir = dirTo(this.cx, this.cy, game.level.spawnPoint.x, game.level.spawnPoint.y);
            let dist = distTo(this.cx, this.cy, game.level.spawnPoint.x, game.level.spawnPoint.y);
            let move = distToMove(1, dir);
            let move2 = distToMove(dist * 0.001, dir);

            this.move.x += move2.x * 15 * a;
            this.move.y += move2.y * 15 * a;
            this.eyeDirection.x = this.eyeDirection.x * 0.9 + (move.x) * 0.1;
            this.eyeDirection.y = this.eyeDirection.y * 0.9 + (move.y * 1.5) * 0.1;

            this.alpha = 1 - easeInOut((this.animation - 140) / 20);
        }
    }
    draw() {
        let positions = [{ x: this.cx, y: this.cy }, ...this.trail];

        ctx.save();
        ctx.globalAlpha = this.alpha;

        ctx.fillStyle = "rgba(255,0,0,0.4)";
        ctx.beginPath();
        for (let n = 0; n < positions.length; n++) {
            ctx.save();
            ctx.translate(positions[n].x, positions[n].y);
            let r = (1 - n / positions.length) * 30;
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, r, 0, 2 * Math.PI);
            ctx.restore();
        }
        ctx.fill();

        ctx.save();
        ctx.translate(this.cx, this.cy);
        ctx.translate(0, -2);
        ctx.translate(this.eyeDirection.x * 6, this.eyeDirection.y * 2);
        ctx.fillStyle = "white";
        ctx.roundRect(-12, -12, 24, 24, 6);
        ctx.fill();
        ctx.translate(this.eyeDirection.x * 6, this.eyeDirection.y * 4);
        ctx.fillStyle = "black";
        ctx.roundRect(-5, -5, 10, 10, 3);
        ctx.fill();
        ctx.restore();

        ctx.restore();
    }
}

class PlayerDeathBlob extends BasicObject {
    constructor(x, y, xmove, ymove) {
        super(x - 0.5, y - 0.5, 1, 1);
        this.type = "player death blob";
        this.move = { x: xmove, y: ymove };
        this.dynamic = true;
        this.static = false;
        this.ignoreCollisions = true;
        this.lifespan = 100;
        this.r = Math.random() * 5 + 1;
        this.updateCollisions();
        this.updateSoundEffects();
    }
    update() {
        this.move.y += 0.2;
        this.move.y *= 0.995;
        this.move.x *= 0.995;

        this.updateCollisions();
        this.updateSoundEffects();

        this.lifespan--;
        if (this.lifespan <= 0) this.delete = true;
    }
    updateSoundEffects() {
        if (!this.delete) return;
        let audio = audios[`splat${game.level.splatNumber + 1}`];
        audio.currentTime = 0;
        audio.play();
        game.level.splatNumber++;
        game.level.splatNumber %= 3;
    }
    updateCollisions() {
        if (!game.level.objectsNearPlayer) return;
        let spikes = game.level.objectsNearPlayer.filter(e => e instanceof SpikeObject || e instanceof SawObject);
        let blocks = game.level.objectsNearPlayer.filter(e => e instanceof BlockObject);
        for (let spike of spikes) {
            if (spike.playerDiedOn) continue;
            let dist = distTo(spike.cx, spike.cy, this.cx, this.cy);
            if (dist < 200 && this.lifespan < 20) {
                let dir = dirTo(this.cx, this.cy, spike.cx, spike.cy);
                let speed = 2 / dist;
                if (dist < 100) speed = 5 / dist;
                let move = distToMove(speed, dir);
                this.move.x += move.x;
                this.move.y += move.y;
                this.move.y -= 0.15;
            }
            if (!blocksColliding(this.hitbox, spike.hitbox)) continue;
            game.level.playerDiedOnObject(spike);
            this.delete = true;
            game.level.createBlobSplatter(this.cx + this.move.x * 2, this.cy + this.move.y * 2);
            return;
        }

        for (let block of blocks) {
            if (!blocksCollidingEdge(this.hitbox, block.hitbox)) continue;
            this.delete = true;
            game.level.createBlobSplatter(this.cx + this.move.x * 2, this.cy + this.move.y * 2);
            return;
        }
    }
    draw() {
        ctx.fillStyle = "red";
        ctx.beginPath();
        let r = this.r - (1 - easeInOut(this.lifespan / 40)) * this.r;
        ctx.arc(this.x + this.w / 2, this.y + this.h / 2, r, 0, 2 * Math.PI);
        ctx.fill();
    }
}