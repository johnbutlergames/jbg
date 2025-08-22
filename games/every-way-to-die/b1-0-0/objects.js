class BasicObject {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.dynamic = false;
        this.static = true;
    }
    update() {
    }
    drawBackground() {
    }
    drawForeground() {
    }
    draw() {
        ctx.fillStyle = "black";
        ctx.fillRect(this.x - 1, this.y - 1, this.w + 2, this.h + 2);
    }
    get cx() {
        return this.x + this.w / 2;
    }
    get cy() {
        return this.y + this.h / 2;
    }
    get hitbox() {
        let self = this;
        return {
            get x() {
                return self.x;
            },
            set x(n) {
                self.x = n;
            },
            get y() {
                return self.y;
            },
            set y(n) {
                self.y = n;
            },
            get w() {
                return self.w;
            },
            set w(n) {
                self.w = n;
            },
            get h() {
                return self.h;
            },
            set h(n) {
                self.h = n;
            }
        };
    }
    set hitbox(hitbox) {
        this.x = hitbox.x;
        this.y = hitbox.y;
        this.w = hitbox.w;
        this.h = hitbox.h;
    }
}

class BlockObject extends BasicObject {
    constructor(x, y, w, h) {
        super(x, y, w, h);
        this.type = "block";
    }
    draw() {
        let extraSize = 1;
        let e = extraSize;

        ctx.save();
        ctx.beginPath();
        ctx.rect(this.x - e, this.y - e, this.w + e * 2, this.h + e * 2);
        ctx.clip();

        let textureSize = 800;

        let x = Math.floor(this.x / textureSize) * textureSize;
        let y = Math.floor(this.y / textureSize) * textureSize;
        for (let x2 = x; x2 < this.x + this.w; x2 += textureSize) {
            for (let y2 = y; y2 < this.y + this.h; y2 += textureSize) {
                ctx.drawImage(images.blockTexture, x2, y2, textureSize, textureSize);
            }
        }

        ctx.restore();
    }
    drawForeground() {
        if (!this.borders) return;

        let extraSize = 1;
        let e = extraSize;

        let border = 10;
        ctx.fillStyle = "rgb(60,60,60)";
        if (this.borders.left) {
            let rect = { x: this.x - e, y: this.y - e, w: border + e * 2, h: this.h + e * 2 };
            if (!this.borders.top) {
                rect.y -= border;
                rect.h += border;
            }
            if (!this.borders.bottom) {
                rect.h += border;
            }
            ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
        }
        if (this.borders.right) {
            let rect = { x: this.x + this.w + e - border, y: this.y - e, w: border + e * 2, h: this.h + e * 2 };
            if (!this.borders.top) {
                rect.y -= border;
                rect.h += border;
            }
            if (!this.borders.bottom) {
                rect.h += border;
            }
            ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
        }
        if (this.borders.top) {
            let rect = { x: this.x - e, y: this.y - e, w: this.w + e * 2, h: border + e * 2 };
            if (!this.borders.left) {
                rect.x -= border - e;
                rect.w += border - e;
            }
            if (!this.borders.right) {
                rect.w += border;
            }
            ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
        }
        if (this.borders.bottom) {
            let rect = { x: this.x - e, y: this.y + this.h + e - border, w: this.w + e * 2, h: border + e * 2 };
            if (!this.borders.left) {
                rect.x -= border;
                rect.w += border;
            }
            if (!this.borders.right) {
                rect.w += border;
            }
            ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
        }
    }
}

class ImageDisplayScreen extends BasicObject {
    constructor(x, y, w, h, image) {
        super(x, y, w, h);
        this.type = "image display screen";
        this.ignoreCollisions = true;
        this.zIndex = 1;
        if (typeof image == "function") {
            this.function = image;
        } else {
            this.image = image;
        }
        this.shutdownAnimation = 0;
        this.off = false;
    }
    update() {
        if (this.shutdownAnimation) {
            this.shutdownAnimation++;
            if (this.shutdownAnimation === 2) {
                audios.screenShutdown.currentTime = 0;
                audios.screenShutdown.play();
            }
            if (this.shutdownAnimation == 40) this.off = true;
        }
        this.customUpdate();
    }
    customUpdate() {
    }
    draw() {
        let border = 10;
        ctx.fillStyle = "black";
        ctx.strokeStyle = "rgb(60,60,60)";
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.strokeRect(this.x + border / 2, this.y + border / 2, this.w - border, this.h - border);

        if (this.shutdownAnimation > 40) return;
        this.drawLines();

        if (this.image) {
            ctx.save();
            if (Math.random() < 0.02) {
                ctx.globalAlpha = Math.random() * 0.5;
            }
            if (Math.random() < 0.02) ctx.translate(0, Math.random() * 2 + 5);
            ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
            ctx.restore();
        }

        if (this.function) {
            ctx.save();
            ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
            if (Math.random() < 0.02) {
                ctx.globalAlpha = Math.random() * 0.5;
            }
            if (Math.random() < 0.02) ctx.translate(0, Math.random() * 2 + 5);

            this.function();

            ctx.restore();
        }

        if (this.shutdownAnimation > 0) {
            let a = easeInOut((this.shutdownAnimation - 0) / 20);
            let a2 = easeInOut((this.shutdownAnimation - 25) / 15);
            ctx.fillStyle = "black";
            ctx.fillRect(this.x + border / 2, this.y + border / 2, this.w - border, (this.h - border + 1) * 0.5 * a);
            ctx.fillRect(this.x + border / 2, this.y + this.h * (1 - 0.5 * a), this.w - border, (this.h - border) * 0.5 * a);
            ctx.strokeStyle = "lime";
            ctx.lineWidth = 2;
            let x1 = this.x + border / 2 + (this.w - border) / 2 * a2;
            let x2 = this.x + this.w - border - (this.w - border) / 2 * a2;
            ctx.beginPath();
            ctx.moveTo(x1, this.y + border / 2 + (this.h - border) * 0.5 * a);
            ctx.lineTo(x2, this.y + border / 2 + (this.h - border) * 0.5 * a);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x1, this.y + this.h - border / 2 - (this.h - border) * 0.5 * a);
            ctx.lineTo(x2, this.y + this.h - border / 2 - (this.h - border) * 0.5 * a);
            ctx.stroke();
        }
    }
    drawLines() {
        for (let n = 0; n < 5; n++) {
            ctx.save();
            ctx.globalAlpha = Math.random();
            let y = Math.random() * (this.h - 20);
            ctx.strokeStyle = "lime";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(this.x + 10, this.y + y + 10);
            ctx.lineTo(this.x + this.w - 10, this.y + y + 10);
            ctx.stroke();
            ctx.restore();
        }
    }
}

class KeybindsDisplayScreen extends ImageDisplayScreen {
    constructor(x, y, w, h) {
        super(x, y, w, h, images.keybindsImage);
    }
    update() {
        super.update();
        let player = game.env.objects.find(e => e instanceof Player);
        if (player && !this.shutdownAnimation) {
            let dist = distTo(player.cx, player.cy, this.cx, this.cy);
            if (dist > 700) {
                this.shutdownAnimation = 1;
            }
        }
    }
}

class DoorObjectGroup {
    constructor(x, y, requirement) {
        let objects = [];
        let screen = new DoorScreen(x, y - 180, 200, 130, requirement);
        objects.push(new DoorObject(x + 10, y, requirement, screen));
        objects.push(new DoorSprite(x, y, 200, 200));
        objects.push(new DoorCollider(x, y, 200, 20));
        objects.push(new DoorCollider(x, y + 175, 200, 25));
        objects.push(screen);
        return objects;
    }
}

class DoorCollider extends BasicObject {
    constructor(x, y, w, h) {
        super(x, y, w, h);
        this.type = "door collider";
    }
    draw() {
    }
}

class DoorSprite extends BasicObject {
    constructor(x, y, w, h) {
        super(x, y, w, h);
        this.type = "door sprite";
        this.ignoreCollisions = true;
    }
    draw() {
        ctx.drawImage(images.door1, this.x, this.y, this.w, this.h);
    }
}

class DoorObject extends BasicObject {
    constructor(x, y, requirement, screen) {
        super(x, y, 180, 200);
        this.type = "door";
        this.requirement = requirement;
        this.openAnimation = 0;
        this.screen = screen;
    }
    update() {
        if (this.openAnimation) {
            this.openAnimation++;
            if (this.openAnimation === 90) {
                audios.depressurize.currentTime = 0;
                audios.depressurize.play();
            }
            if (this.openAnimation === 100) {
                this.ignoreCollisions = true;
            }
        }

        this.updateOpening();
    }
    updateOpening() {
        if (this.openAnimation) return;
        let player = game.env.objects.find(e => e instanceof Player);
        if (player) {
            let distToPlayer = distTo(this.cx, this.cy, player.cx, player.cy);
            if (distToPlayer < 250 && this.requirement <= game.level.deaths) {
                this.openAnimation = 1;
                this.screen.openAnimation = 1;
            }
        }
    }
    draw() {
        let a = easeInOut((this.openAnimation - 100) / 40);
        ctx.save();
        ctx.rect(this.x - 10, this.y, this.w + 20, this.h);
        ctx.clip();
        ctx.drawImage(images.door2, this.x - 10, this.y - a * 100, this.w + 20, this.h);
        ctx.drawImage(images.door3, this.x - 10, this.y + a * 100, this.w + 20, this.h);
        ctx.restore();
    }
}

class DoorScreen extends BasicObject {
    constructor(x, y, w, h, requirement) {
        super(x, y, w, h);
        this.openAnimation = 0;
        this.type = "door screen";
        this.ignoreCollisions = true;
        this.zIndex = 1;
        this.requirement = requirement;
        this.off = false;
    }
    update() {
        if (this.openAnimation) {
            this.openAnimation++;
            if (this.openAnimation === 2) {
                audios.correct.currentTime = 0;
                audios.correct.play();
            }
            if (this.openAnimation === 200) {
                audios.screenShutdown.currentTime = 0;
                audios.screenShutdown.play();
            }
            if (this.openAnimation == 240) this.off = true;
        }
    }
    draw() {
        let border = 10;
        ctx.fillStyle = "black";
        ctx.strokeStyle = "rgb(60,60,60)";
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.strokeRect(this.x + border / 2, this.y + border / 2, this.w - border, this.h - border);

        if (this.openAnimation > 240) return;
        this.drawLines();

        if (this.openAnimation) {
            ctx.save();
            if (Math.random() < 0.02) {
                ctx.globalAlpha = Math.random() * 0.5;
            }
            if (Math.random() < 0.02) ctx.translate(0, Math.random() * 2 + 5);
            ctx.drawImage(images.checkmarkScreen, this.x + this.w / 2 - 40, this.y + this.h / 2 - 40, 80, 80);
            ctx.restore();
        } else {
            ctx.save();
            if (Math.random() < 0.02) {
                ctx.globalAlpha = Math.random() * 0.5;
            }
            if (Math.random() < 0.02) ctx.translate(0, Math.random() * 2 + 5);
            ctx.fillStyle = "lime";
            ctx.font = "40px pressstart";
            ctx.textAlign = "right";
            ctx.textBaseline = "middle";
            ctx.fillText(this.requirement, this.x + this.w - 75, this.y + 70);
            ctx.restore();

            ctx.save();
            if (Math.random() < 0.02) {
                ctx.globalAlpha = Math.random() * 0.5;
            }
            if (Math.random() < 0.02) ctx.translate(0, Math.random() * 2 + 5);
            ctx.drawImage(images.skullScreen, this.x + this.w - 65, this.y + this.h / 2 - 18, 40, 40);
            ctx.restore();
        }
        if (this.openAnimation > 200) {
            let a = easeInOut((this.openAnimation - 200) / 20);
            let a2 = easeInOut((this.openAnimation - 225) / 15);
            ctx.fillStyle = "black";
            ctx.fillRect(this.x + border / 2, this.y + border / 2, this.w - border, (this.h - border + 1) * 0.5 * a);
            ctx.fillRect(this.x + border / 2, this.y + this.h * (1 - 0.5 * a), this.w - border, (this.h - border) * 0.5 * a);
            ctx.strokeStyle = "lime";
            ctx.lineWidth = 2;
            let x1 = this.x + border / 2 + (this.w - border) / 2 * a2;
            let x2 = this.x + this.w - border - (this.w - border) / 2 * a2;
            ctx.beginPath();
            ctx.moveTo(x1, this.y + border / 2 + (this.h - border) * 0.5 * a);
            ctx.lineTo(x2, this.y + border / 2 + (this.h - border) * 0.5 * a);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x1, this.y + this.h - border / 2 - (this.h - border) * 0.5 * a);
            ctx.lineTo(x2, this.y + this.h - border / 2 - (this.h - border) * 0.5 * a);
            ctx.stroke();
        }
    }
    drawLines() {
        for (let n = 0; n < 5; n++) {
            ctx.save();
            ctx.globalAlpha = Math.random();
            let y = Math.random() * (this.h - 20);
            ctx.strokeStyle = "lime";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(this.x + 10, this.y + y + 10);
            ctx.lineTo(this.x + this.w - 10, this.y + y + 10);
            ctx.stroke();
            ctx.restore();
        }
    }
}

class SpikeObject extends BasicObject {
    constructor(x, y, w, h, angle = 0, tempo) {
        super(x, y, w, h);
        this.angle = angle;
        this.type = "spike";
        this.ignoreCollisions = true;
        this.bloodyLevel = 0;
        this.tempo = tempo;
        this.engaged = true;
        this.engagedAnimation = 10;
    }
    update() {
        if (this.tempo) {
            if (!this.tempo.time) this.tempo.time = 0;
            this.tempo.time++;
            let offTime = this.tempo.offTime;
            let onTime = this.tempo.onTime;
            let totalDuration = offTime + onTime;
            if (this.tempo.time % totalDuration < offTime) {
                if (this.engaged && this.onSmallScreen) {
                    audios.spikeRetract.currentTime = 0;
                    audios.spikeRetract.play();
                }
                this.engaged = false;
            } else {
                if (!this.engaged && this.onSmallScreen) {
                    audios.spikeExtend.currentTime = 0;
                    audios.spikeExtend.play();
                }
                this.engaged = true;
            }
        }
        if (this.engaged) {
            this.engagedAnimation++;
        } else {
            this.engagedAnimation--;
        }
        this.engagedAnimation = Math.max(Math.min(this.engagedAnimation, 10), 0);
    }
    draw() {
        ctx.save();
        ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
        ctx.rotate(this.angle * Math.PI / 180);

        if (this.engagedAnimation !== 10) {
            ctx.beginPath();
            ctx.rect(-this.w / 2, -this.h / 2, this.w, this.h);
            ctx.clip();

            let a = easeInOut(this.engagedAnimation / 10);
            ctx.translate(0, this.h * (1 - a) * 0.7);
        }

        if (this.bloodyLevel == 0) {
            ctx.drawImage(images.spike, -this.w / 2, -this.h / 2, this.w, this.h);
        } else {
            if (this.flip) {
                ctx.scale(-1, 1);
            }
            let image;
            if (this.bloodyLevel === 4) {
                image = images["spikeBloody4"];
            } else {
                image = images[`spikeBloody${this.bloodyLevel}-${this.bloodyImageNumber}`];
            }
            ctx.drawImage(image, -this.w / 2, -this.h / 2, this.w, this.h);
        }

        ctx.restore();
    }
}

class SawObject extends BasicObject {
    constructor(x, y, w, h) {
        super(x, y, w, h);
        this.angle = 0;
        this.type = "saw";
        this.ignoreCollisions = true;
        this.bloodyLevel = 0;
    }
    update() {
        this.angle += 5;
    }
    draw() {
        ctx.save();
        ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
        ctx.rotate(this.angle * Math.PI / 180);

        if (this.bloodyLevel == 0) {
            ctx.drawImage(images.saw, -this.w / 2, -this.h / 2, this.w, this.h);
        } else {
            if (this.flip) {
                ctx.scale(-1, 1);
            }
            let image = images[`sawBloody${this.bloodyLevel}`];
            ctx.drawImage(image, -this.w / 2, -this.h / 2, this.w, this.h);
        }

        ctx.restore();
    }
}

class SpringObject extends BasicObject {
    constructor(x, y, w, h) {
        super(x, y, w, h);
        this.type = "spring";
        this.ignoreCollisions = true;
        this.springAnimation = 0;
    }
    update() {
        if (this.springAnimation) this.springAnimation--;
    }
    draw() {
        ctx.save();
        ctx.translate(this.x + this.w / 2, this.y + this.h / 2);

        if (this.springAnimation) {
            let a = easeInBack(this.springAnimation / 15);
            ctx.save();
            ctx.translate(0, this.h / 2);
            ctx.scale(1, 1 + a * 2);
            ctx.drawImage(images.springSpring, -this.w / 2, -this.h, this.w, this.h);
            ctx.restore();
            ctx.drawImage(images.springBody, -this.w / 2, -this.h / 2 - this.h * 0.7 * a, this.w, this.h);
        } else {
            ctx.drawImage(images.spring, -this.w / 2, -this.h / 2, this.w, this.h);
        }
        ctx.restore();
    }
}

class TextObject extends BasicObject {
    static font = "Arial"
    constructor(x, y, text, fontSize = 50) {
        super(x, y, 0, 0);
        this.text = text;
        this.fontSize = fontSize;
        this.ignoreCollisions = true;
        this.type = "text";
    }
    draw() {
        ctx.fillStyle = "black";
        ctx.font = `${this.fontSize}px ${TextObject.font}`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.text, this.x, this.y);
    }
}

class FinishFlagObjectGroup {
    constructor(x, y) {
        let objects = [];
        objects.push(new FinishFlag(x, y));
        objects.push(new FlagStandObject(x - 40, y - 25, 80, 25));
        return objects;
    }
}

class FlagStandObject extends BasicObject {
    constructor(x, y, w, h) {
        super(x, y, w, h);
        this.type = "flag stand";
    }
    draw() {
        ctx.drawImage(images.flagStand, this.x, this.y, this.w, this.h);
    }
}

class FinishFlag extends BasicObject {
    constructor(x, y) {
        super(x, y, 0, 0);
        this.type = "finish flag";
        this.ignoreCollisions = true;
        this.collectedAnimation = 0;
        this.animation = 0;
        this.unfurledImage = images.checkeredFlagUnfurled;
        this.furledImage = images.checkeredFlagFurled;
    }
    update() {
        this.animation++;
        if (this.collectedAnimation) this.collectedAnimation++;
        this.checkPlayerCollisions();
    }
    draw() {
        let force = easeInOut(1 - this.collectedAnimation / 100) * 10;
        let sway = Math.sin(this.collectedAnimation / 2.5) * force;
        let target = {
            x: this.x + sway,
            y: this.y - 170
        };
        ctx.strokeStyle = "rgb(60,60,60)";
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(this.x, this.y - 5);
        ctx.quadraticCurveTo(this.x, this.y - 50, target.x, target.y);
        ctx.stroke();

        ctx.save();
        ctx.translate(target.x - 5, target.y - 5 + 50);
        ctx.rotate(sway * 0.5 * Math.PI / 180);
        if (this.collectedAnimation) {
            ctx.drawImage(this.unfurledImage, 0, -50, 100, 100);
        } else {
            ctx.scale(1 + Math.sin(this.animation / 60) * 0.2, 1);
            ctx.drawImage(this.furledImage, 0, -50, 100, 100);
        }
        ctx.restore();
    }
    checkPlayerCollisions() {
        if (this.collectedAnimation) return;
        let player = game.env.objects.find(e => e.type == "player");
        if (!player) return;
        let hitbox = { x: this.x - 5, y: this.y - 170, w: 10, h: 140 };
        if (!blocksColliding(hitbox, player.hitbox)) return;
        this.collectedAnimation = 1;
        game.particles.createEffect("finish confetti", { x: this.x, y: this.y });
        game.level.levelCompleteAnimation = 1;
        audios.finish.currentTime = 0;
        audios.finish.play();
    }
}

class CheckpointFlagObjectGroup {
    constructor(x, y) {
        let objects = [];
        objects.push(new CheckpointFlag(x, y));
        objects.push(new FlagStandObject(x - 40, y - 25, 80, 25));
        return objects;
    }
}

class CheckpointFlag extends FinishFlag {
    constructor(x, y) {
        super(x, y);
        this.type = "checkpoint flag";
        this.unfurledImage = images.checkpointFlagUnfurled;
        this.furledImage = images.checkpointFlagFurled;
    }
    checkPlayerCollisions() {
        if (this.collectedAnimation) return;
        let player = game.env.objects.find(e => e.type == "player");
        if (!player) return;
        let hitbox = { x: this.x - 5, y: this.y - 170, w: 10, h: 140 };
        if (!blocksColliding(hitbox, player.hitbox)) return;
        for (let o of game.env.objects.filter(e => e instanceof CheckpointFlag)) {
            o.collectedAnimation = 0;
        }

        this.collectedAnimation = 1;
        game.level.spawnPoint = { x: this.x, y: this.y - 100 };

        game.particles.createEffect("checkpoint confetti", { x: this.x, y: this.y });

        audios.checkpoint.currentTime = 0;
        audios.checkpoint.play();
    }
}

class TurretObjectGroup {
    constructor(x, y, angle = 0, fireRate = 300, fireOffset = 0) {
        let turret = new TurretObject(x, y, angle, fireRate, fireOffset);
        let collider;
        if (angle == 0) {
            collider = new TurretCollider(x, y + 40, 100, 60);
        } else if (angle == 90) {
            collider = new TurretCollider(x, y, 60, 100);
        } else if (angle == 180) {
            collider = new TurretCollider(x, y, 100, 60);
        } else if (angle == 270) {
            collider = new TurretCollider(x + 40, y, 60, 100);
        }
        return [turret, collider];
    }
}

class TurretCollider extends BasicObject {
    constructor(x, y, w, h) {
        super(x, y, w, h);
    }
    draw() {
    }
}

class TurretObject extends BasicObject {
    constructor(x, y, angle = 0, fireRate = 300, fireOffset = 0) {
        super(x, y, 100, 100);
        this.type = "turret";
        this.angle = angle;
        this.fireRate = 100;
        this.fireTime = fireOffset;
        this.ignoreCollisions = true;
        this.fireAnimation = 0;
    }
    update() {
        if (this.fireAnimation) this.fireAnimation--;
        this.fireTime++;
        if (this.fireTime >= this.fireRate) {
            this.fireAnimation = 10;
            this.fireTime = 0;
            let move = distToMove(30, this.angle);
            let bullet = new TurretBullet(this.cx + move.x, this.cy + move.y, move.x * 0.2, move.y * 0.2);
            game.env.objects.push(bullet);
        }
    }
    draw() {
        ctx.save();
        ctx.translate(this.cx, this.cy);
        ctx.rotate(this.angle * Math.PI / 180);

        let a = easeInOut(this.fireAnimation / 10);
        ctx.drawImage(images.turretGun, -this.w / 2, -this.h / 2 + a * this.h * 0.05, this.w, this.h);
        ctx.drawImage(images.turretBody, -this.w / 2, -this.h / 2, this.w, this.h);

        ctx.restore();
    }
}

class TurretBullet extends BasicObject {
    constructor(x, y, xmove, ymove) {
        super(x, y, 0, 0);
        this.type = "turret bullet";
        this.dynamic = true;
        this.static = false;
        this.ignoreCollisions = true;
        this.move = {};
        this.move.x = xmove;
        this.move.y = ymove;
    }
    update() {
        this.x += this.move.x;
        this.y += this.move.y;
    }
    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x - 10, this.y - 10, 20, 20);
    }
}