class GardenLevel {
    constructor(data) {
        this.shelves = [
            { x: 100, y: 200, w: 800, h: 20 }
        ];
        this.smoothMouse = { x: 0, y: 0 };
        this.groundLevel = 800;
        this.scale = data.scale;
        this.objects = [];
        var types = data.types;
        for (var n = 0; n < types.length; n++) {
            var plant = new PlantObject(types[n]);
            plant.x = n * 100 + 200;
            this.objects.push(plant);
        }
        this.objects.push(new WateringCan());
        this.objects.push(new Faucet());
        this.pullingObject = false;
        this.maxBounceSpeed = 10;
        this.counts = [];
        for (var n = 0; n < data.counts.length; n++) {
            var o = data.counts[n];
            var count = new ObjectCount(o.count, o.type, 0);
            count.align = "right";
            count.x = 950;
            count.y = 50 + n * 40;
            this.counts.push(count);
        }
    }
    checkWin() {
        return this.counts.every(e => e.count >= e.amount);
    }
    update() {
        for (var o of this.counts) {
            o.update();
            o.count = this.objects.filter(e => e instanceof PlantObject && e.type == o.type).length;
        }

        var mouseX = (Mouse.x - 500) / this.scale + 500;
        var mouseY = (Mouse.y - 500) / this.scale + 500;
        this.smoothMouse.x = this.smoothMouse.x * 0.9 + mouseX * 0.1;
        this.smoothMouse.y = this.smoothMouse.y * 0.9 + mouseY * 0.1;
        for (var o of this.objects) o.beingPulled = false;
        if (Mouse.down) {
            if (this.pullingObject) {
                var o = this.pullingObject;
                o.beingPulled = true;
                var dist = distTo(this.smoothMouse.x, this.smoothMouse.y, o.cx, o.cy);
                var dir = dirTo(o.cx, o.cy, this.smoothMouse.x, this.smoothMouse.y);
                var move = distToMove(dist, dir);
                o.xmove = move.x;
                o.ymove = move.y;
            } else {
                for (var o of this.objects) {
                    if (o instanceof Tree) continue;
                    if (o instanceof Faucet) continue;
                    var dist = distTo(mouseX, mouseY, o.cx, o.cy);
                    if (dist > 40) continue;
                    this.pullingObject = o;
                    this.smoothMouse.x = mouseX;
                    this.smoothMouse.y = mouseY;
                    break;
                }
            }
        } else {
            this.pullingObject = false;
        }
        for (var o of this.objects) {
            if (o instanceof PlantObject) {
                o.update();
            }
            if (o instanceof WaterParticle) {
                o.update();
                continue;
            }
            if (o instanceof Faucet) {
                o.x = (1000 + 500 / this.scale) - 500;
                o.dripping = false;
                for (var o2 of this.objects.filter(e => e instanceof WateringCan)) {
                    if (o2.filling) {
                        o.dripping = true;
                        o.t = 1;
                        continue;
                    }
                    if (o2.hasWater) continue;
                    var xDist = Math.abs((o.x - 70) - o2.x);
                    if (xDist > 50) continue;
                    if (o2.y < o.y) continue;
                    o2.filling = true;
                    o2.fillAnimation = 50;
                    o.dripping = true;
                    o.t = 1;
                }
                o.update();
                if (o.drip) {
                    var particle = new WaterParticle();
                    particle.ymove = 2;
                    particle.x = o.x - 80 + Math.random() * 20;
                    particle.y = o.y + 30;
                    this.objects.push(particle);
                }
                continue;
            }
            if (o.planting) {
                var a = o.plantAnimation / 50;
                var a1 = easeIn(a * 2);
                var a2 = easeInOut((a - 0.5) * 2);
                o.y = this.groundLevel + 20 * a1 + 25 * a2;
                if (o.plantAnimation == 60) {
                    var tree = new Tree(o.type);
                    tree.x = o.x;
                    tree.y = this.groundLevel;
                    this.objects.unshift(tree);
                    o.delete = true;
                }
                o.plantAnimation++;
                continue;
            }
            if (o instanceof Tree) {
                o.update();
                this.objects.push(...o.fruit);
                o.fruit = [];
                continue;
            }
            if (o instanceof WateringCan) {
                o.update();
                o.targetAngle = 0;
                if (o.filling) {
                    o.fillAnimation--;
                    if (o.fillAnimation === 0) {
                        o.hasWater = true;
                        o.filling = false;
                    }
                }
                if (o.waterAnimation) {
                    var particle = new WaterParticle();
                    var cor = { x: o.cx - 75, y: o.cy - 40 };
                    cor = rotate(o.cx, o.cy, cor.x, cor.y, o.angle);
                    particle.x = cor.x + 3;
                    particle.y = cor.y - 7 + Math.random() * 30;
                    particle.xmove = -2 + Math.random() * 0.5;
                    this.objects.push(particle);

                    o.waterAnimation--;
                    o.targetAngle = -45;
                    if (o.waterAnimation === 0) {
                        o.wateringTree.grow();
                    }
                }
                if (o.hasWater) {
                    for (var o2 of this.objects.filter(e => e instanceof Tree)) {
                        var dist = Math.abs(o2.x - (o.cx - 130)) + Math.abs(o2.y - o.cy) * 0.3;
                        if (dist > 50) continue;
                        o.waterAnimation = 50;
                        o.wateringTree = o2;
                        o.hasWater = false;
                    }
                }
            }
            o.x += o.xmove;
            o.y += o.ymove;

            if (!o.beingPulled) {
                for (var shelf of this.shelves) {
                    if (o.ymove < 0) continue;
                    if (!blocksColliding(o.hitbox, shelf)) continue;
                    var oldCor = o.hitbox.y - o.ymove + o.hitbox.h;
                    if (oldCor > shelf.y + 50) continue;
                    o.ymove *= -0.4;
                    o.xmove *= 0.9;
                    o.hitbox = { y: shelf.y - o.hitbox.h };
                }
            }

            var viewport = { x1: -500 / this.scale + 500, y1: -500 / this.scale + 500, x2: 500 / this.scale + 500, y2: this.groundLevel };
            if (o.hitbox.y < viewport.y1) {
                o.hitbox = { y: viewport.y1 };
                o.ymove = Math.min(Math.abs(o.ymove), this.maxBounceSpeed);
            }
            if (o.hitbox.x < viewport.x1) {
                o.hitbox = { x: viewport.x1 };
                o.xmove = Math.min(Math.abs(o.xmove), this.maxBounceSpeed);
            }
            if (o.hitbox.x + o.hitbox.w > viewport.x2) {
                o.hitbox = { x: viewport.x2 - o.hitbox.w };
                o.xmove = -Math.min(Math.abs(o.xmove), this.maxBounceSpeed);
            }
            if (o.hitbox.y + o.hitbox.h > this.groundLevel) {
                var plant = o instanceof PlantObject && !o.unplantable && o.x < viewport.x2 - 150 && o.x > viewport.x1 + 150;
                if (plant) {
                    var trees = this.objects.filter(e => e instanceof Tree || e.planting);
                    var xDists = trees.map(e => Math.abs(e.x - o.x));
                    var minDist = Math.min(...xDists);
                    if (minDist < 270) plant = false;
                }
                if (plant) {
                    o.planting = true;
                    o.plantAnimation = 0;
                } else {
                    o.hitbox = { y: this.groundLevel - o.hitbox.h };
                    o.ymove = -Math.min(Math.abs(o.ymove * 0.4), this.maxBounceSpeed);;
                    o.xmove *= 0.9;
                }
            }

            o.ymove += 0.15;
            o.xmove *= 0.98;
            o.ymove *= 0.98;
        }

        this.objects = this.objects.filter(e => !e.delete);
    }
    draw() {
        ctx.save();
        ctx.translate(500, 500);
        ctx.scale(this.scale, this.scale);
        ctx.translate(-500, -500);

        for (var o of this.shelves) {
            ctx.fillStyle = "rgb(229, 200, 140)";
            ctx.fillRect(o.x, o.y, o.w, o.h);
        }

        for (var o of this.objects) {
            o.draw();
        }

        ctx.fillStyle = "rgb(54, 33, 12)";
        ctx.fillRect(-1000, this.groundLevel, 3000, 2000);

        ctx.restore();

        for (var o of this.counts) o.draw();
    }
}

class PlantObject {
    constructor(type) {
        this.unplantable = false;
        this.spawnAnimation = 0;
        this.type = type || "X";
        this.x = 400;
        this.y = 200;
        this.w = 40;
        this.h = 40;
        this.xmove = 0;
        this.ymove = 0;
    }
    get cx() {
        return this.x;
    }
    get cy() {
        return this.y - this.h / 2;
    }
    get hitbox() {
        return { x: this.x - this.w / 2, y: this.y - this.h, w: this.w, h: this.h };
    }
    set hitbox(hitbox) {
        if (hitbox.x !== undefined) this.x = hitbox.x + this.w / 2;
        if (hitbox.y !== undefined) this.y = hitbox.y + this.h;
    }
    update() {
        if (this.spawnAnimation) this.spawnAnimation--;
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        var s = 1 - easeInOut(this.spawnAnimation / 10);
        ctx.scale(s, s);

        var o = new TicTacToeObject(this.type);
        o.x = 0;
        o.y = -this.h / 2;
        o.scale = 0.35;
        o.draw();

        ctx.restore();
    }
}

class Faucet {
    constructor() {
        this.x = 0;
        this.y = 650;
        this.t = 0;
        this.dripping = false;
        this.drip = false;
    }
    update() {
        this.t++;
        this.drip = this.dripping || this.t % 200 === 0;
    }
    draw() {
        ctx.drawImage(images.faucet, this.x - 100, this.y - 50, 100, 100);
    }
}

class WateringCan {
    constructor() {
        this.x = 650;
        this.y = 100;
        this.w = 70;
        this.h = 100;
        this.angle = 0;
        this.targetAngle = 0;
        this.xmove = 0;
        this.ymove = 0;
        this.waterAnimation = 0;
        this.hasWater = false;
        this.waterLevel = 0;
        this.filling = false;
        this.fillAnimation = 0;
    }
    update() {
        this.angle = this.angle * 0.9 + this.targetAngle * 0.1;
        if (this.hasWater) this.waterLevel = 1;
        if (this.waterAnimation) this.waterLevel = this.waterAnimation / 50;
        if (this.fillAnimation) this.waterLevel = 1 - this.fillAnimation / 50;
        this.waterLevel = Math.min(Math.max(this.waterLevel, 0), 1);
    }
    get cx() {
        return this.x + this.w / 2;
    }
    get cy() {
        return this.y + this.h / 2;
    }
    get hitbox() {
        return { x: this.x, y: this.y, w: this.w, h: this.h };
    }
    set hitbox(hitbox) {
        if (hitbox.x !== undefined) this.x = hitbox.x;
        if (hitbox.y !== undefined) this.y = hitbox.y;
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.translate(this.w / 2, this.h / 2);
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.scale(1.05, 1.05);
        ctx.translate(-this.w / 2, -this.h / 2);
        var n = Math.floor((1 - this.waterLevel) * 7) + 1;
        n = Math.min(n, 7);
        var image = images[`wateringCan` + n];
        ctx.drawImage(image, -50, 0, this.w + 70, this.h);
        ctx.restore();
    }
}

class WaterParticle {
    constructor() {
        this.xmove = 0;
        this.ymove = 0;
        this.alpha = 2;
        this.r = 3 + Math.random() * 2;
    }
    update() {
        this.alpha -= 0.05;
        if (this.alpha <= 0) this.delete = true;
        this.x += this.xmove;
        this.y += this.ymove;
        this.ymove += 0.05;
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = "rgb(145,136,240)";
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(0, 0, this.r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
    }
}

class Tree {
    constructor(type) {
        if (type == "X") return new XTree();
        if (type == "O") return new OTree();
        if (type == "Square") return new SquareTree();
        if (type == "Triangle") return new TriangleTree();
        this.growth = 0;
        this.growthTarget = 0;
        this.fruitCount = 0;
        this.x = 500;
        this.y = 500;
        this.lineCap = "round";
        this.lineWidth = 20;
        this.fruit = [];
        this.t = 0;
    }
    update() {
        this.t++;
        var growthRate = 0.05;
        this.growth = this.growth * (1 - growthRate) + this.growthTarget * growthRate;
    }
    grow() {
        if (this.growthTarget === 1) {
            this.growFruit();
            this.growFruit();
            this.growFruit();
            this.growFruit();
            return;
        }
        this.growthTarget += 0.5;
        this.growthTarget = Math.max(Math.min(this.growthTarget, 1), 0);
    }
    getFruitPosition() {
        return { x: 0, y: 0 };
    }
    growFruit() {
        if (this.fruitCount >= 4) return;
        this.fruitCount++;
        var o = new PlantObject(this.type);
        o.spawnAnimation = 10;
        o.unplantable = true;
        var pos = this.getFruitPosition();
        o.x = pos.x + this.x;
        o.y = pos.y + this.y;
        this.fruit.push(o);
    }
}

class XTree extends Tree {
    constructor() {
        super();
        this.type = "X";
        this.scale = 1;
    }
    getFruitPosition() {
        if (Math.random() < 0.5) {
            return { x: Math.random() * 300 - 150, y: -Math.random() * 100 - 100 };
        } else {
            return { x: Math.random() * 150 - 75, y: -Math.random() * 100 - 200 };
        }
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        var s = 0.5 + this.growth * 0.5;
        ctx.scale(s, s);
        ctx.scale(this.scale, this.scale);

        this.drawBranch(5, this.growth * 6, 0);

        ctx.restore();
    }
    getBranchColor(depth) {
        return `rgb(${230 - depth * 25},0,0)`;
    }
    drawBranch(depth, percent, angle) {
        var a = Math.sin((this.t + 10000) / (100 + depth));
        var p = Math.min(percent, 1);
        ctx.strokeStyle = this.getBranchColor(depth);
        ctx.lineWidth = this.lineWidth * (0.5 + 0.5 * this.growth);
        ctx.lineCap = this.lineCap;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -100 * p);
        ctx.stroke();
        if (depth === 0 || p < 1) return;
        ctx.save();
        ctx.translate(0, -100);

        ctx.save();
        ctx.rotate((20 + 30 * this.growth + angle) * Math.PI / 180);
        ctx.scale(0.6, 0.6);
        this.drawBranch(depth - 1, percent - 1, angle * 0.5 + 0.15 + a * (0.01 - 0.01 * depth));
        ctx.restore();
        ctx.save();
        ctx.rotate(0 * Math.PI / 180 + angle);
        ctx.scale(0.75, 0.75);
        this.drawBranch(depth - 1, percent - 1, angle * 0.8 + a * (0.05 - 0.005 * depth));
        ctx.restore();
        ctx.save();
        ctx.rotate(-(20 + 30 * this.growth + angle) * Math.PI / 180);
        ctx.scale(0.6, 0.6);
        this.drawBranch(depth - 1, percent - 1, angle * 0.5 - 0.15 + a * (0.01 - 0.01 * depth));
        ctx.restore();

        ctx.restore();
    }
}

class OTree extends Tree {
    constructor() {
        super();
        this.type = "O";
        this.scale = 1;
    }
    getFruitPosition() {
        if (Math.random() < 0.5) {
            return { x: Math.random() * 150, y: -60 - Math.random() * 190 };
        } else {
            return { x: -Math.random() * 110, y: -120 - Math.random() * 140 };
        }
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        var s = 0.5 + this.growth * 0.5;
        ctx.scale(s, s);
        ctx.scale(this.scale, this.scale);

        this.drawBranch(10, this.growth * 11, 0);

        ctx.restore();
    }
    getBranchColor(depth) {
        return `rgb(0,0,${200 - depth * 15})`;
    }
    drawBranch(depth, percent, angle) {
        var a = Math.sin((this.t + 10000) / (100 + depth)) * 100;
        var p = Math.min(percent, 1);
        ctx.strokeStyle = this.getBranchColor(depth);
        ctx.lineWidth = this.lineWidth * (0.5 + 0.5 * this.growth);
        ctx.lineCap = this.lineCap;

        if (depth === 10) {
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.quadraticCurveTo(20 * this.growth, -30 * this.growth, 0, -50 * p);
            ctx.stroke();

            if (p === 1) {
                ctx.save();
                ctx.translate(0, -50);
                ctx.rotate(-(2 + 2 * this.growth + angle) * Math.PI / 180);
                ctx.scale(-0.9, 0.9);
                this.drawBranch(depth - 1, percent - 1, angle * 0.8 + a * (0.05 - 0.005 * depth));
                ctx.restore();
            }
            return;
        }

        if (depth === 0) {
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(-40, -55, 70, 0.3 * Math.PI, (0.3 - 1.1 * p) * Math.PI, true);
            ctx.stroke();
        } else {
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.quadraticCurveTo(40 * this.growth, -30 * this.growth, 0, -100 * p);
            ctx.stroke();
        }
        if (depth === 0 || p < 1) return;
        ctx.save();
        ctx.translate(0, -100);

        if (depth > 3) {
            ctx.save();
            ctx.rotate(-(25 + 50 * this.growth + angle) * Math.PI / 180);
            ctx.scale(0.8, 0.8);
            this.drawBranch(depth - 1, percent - 1, angle * 0.8 + a * (0.05 - 0.005 * depth));
            ctx.restore();
        }
        ctx.save();
        if (depth > 3) {
            ctx.rotate((10 + 10 * this.growth + angle) * Math.PI / 180);
            ctx.scale(-0.62, 0.62);
        } else {
            ctx.scale(0.9, 0.9);
            ctx.rotate(-(10 + 70 * this.growth + angle) * Math.PI / 180);
        }
        this.drawBranch(depth - 1, percent - 1, angle * 0.8 + a * (0.05 - 0.005 * depth));
        ctx.restore();

        ctx.restore();
    }
}

class SquareTree extends Tree {
    constructor() {
        super();
        this.type = "Square";
        this.scale = 1;
    }
    getFruitPosition() {
        if (Math.random() < 0.2) {
            return { x: Math.random() * 100 - 30, y: -200 - Math.random() * 50 };
        } else if (Math.random() < 0.4) {
            if (Math.random() < 0.3) {
                return { x: Math.random() * 50 + 110, y: -70 - Math.random() * 20 };
            } else {
                return { x: Math.random() * -120 - 10, y: -50 - Math.random() * 50 };
            }
        } else {
            return { x: Math.random() * 300 - 150, y: -100 - Math.random() * 100 };
        }
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        var s = 0.5 + this.growth * 0.5;
        ctx.scale(s, s);
        ctx.scale(this.scale, this.scale);

        this.drawBranch(7, this.growth * 8, 0, 0);

        ctx.restore();
    }
    getBranchColor(depth) {
        return `rgb(0,${130 - depth * 15},0)`;
    }
    drawBranch(depth, percent, n, angle) {
        var a = Math.sin((this.t + 10000) / (100 + depth)) * 50;
        var p = Math.min(percent, 1);
        ctx.strokeStyle = this.getBranchColor(depth);
        ctx.lineWidth = this.lineWidth * (0.5 + 0.5 * this.growth);
        if (depth === 0) ctx.lineWidth = this.lineWidth * (1 + 0.5 * this.growth);
        ctx.lineCap = this.lineCap;
        ctx.lineJoin = this.lineCap;
        var height = 70 + depth * 5;
        if (n % 2 === 1) height = 90 - depth * 5;
        ctx.beginPath();
        if (depth === 0) {
            ctx.moveTo(0, 0);
            ctx.lineTo(0, -height * Math.min(p * 2, 1));
            if (p > 0.5) ctx.lineTo(-height * 0.5 * ((p - 0.5) * 2), -height);
        } else {
            ctx.moveTo(0, 0);
            ctx.lineTo(0, -height * p);
        }
        ctx.stroke();
        if (depth === 0 || p < 1) return;
        ctx.save();
        ctx.translate(0, -height);

        if (depth === 1) {
            ctx.save();
            ctx.rotate(-(10 + this.growth * 80 + angle) * Math.PI / 180);
            ctx.scale(0.6, 0.6);
            this.drawBranch(depth - 1, percent - 1, n + 1, angle * 0.8 + a * (0.05 - 0.005 * depth));
            ctx.restore();
        } else if ((n + 1) % 4 < 2) {
            ctx.save();
            ctx.rotate(-(10 + this.growth * 80 + angle) * Math.PI / 180);
            if (depth > 1) ctx.scale(0.8, 0.8);
            ctx.scale(0.8, 0.8);
            this.drawBranch(depth - 1, percent - 1, n, angle * 0.8 + a * (0.05 - 0.005 * depth));
            ctx.restore();
            ctx.save();
            ctx.rotate((10 + this.growth * 80 + angle) * Math.PI / 180);
            ctx.scale(0.9, 0.9);
            this.drawBranch(depth - 1, percent - 1, n + 1, angle * 0.8 + a * (0.05 - 0.005 * depth));
            ctx.restore();
        } else {
            ctx.save();
            ctx.rotate(0 * Math.PI / 180);
            ctx.scale(0.7, 0.7);
            this.drawBranch(depth - 1, percent - 1, n + 1, angle * 0.8 + a * (0.05 - 0.005 * depth));
            ctx.restore();
            ctx.save();
            ctx.rotate(-(10 + this.growth * 80 + angle) * Math.PI / 180);
            ctx.scale(0.9, 0.9);
            this.drawBranch(depth - 1, percent - 1, n + 1, angle * 0.8 + a * (0.05 - 0.005 * depth));
            ctx.restore();
        }

        ctx.restore();
    }
}

class TriangleTree extends Tree {
    constructor() {
        super();
        this.type = "Triangle";
        this.scale = 1;
    }
    getFruitPosition() {
        if (Math.random() < 0.3) {
            return { x: 100 - Math.random() * 100, y: -200 - Math.random() * 100 };
        } else if (Math.random() < 0.5) {
            if (Math.random() < 0.5) {
                return { x: 150 - Math.random() * 100, y: -40 - Math.random() * 60 };
            } else {
                return { x: -150 + Math.random() * 100, y: -40 - Math.random() * 60 };
            }
        } else {
            return { x: 150 - Math.random() * 300, y: -100 - Math.random() * 100 };
        }
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        var s = 0.5 + this.growth * 0.5;
        ctx.scale(s, s);
        ctx.scale(this.scale, this.scale);

        this.drawBranch(7, this.growth * 8, 0, 0);

        ctx.restore();
    }
    getBranchColor(depth) {
        return `rgb(${120 - depth * 25},0,${180 - depth * 25})`;
    }
    drawBranch(depth, percent, n, angle) {
        var a = Math.sin((this.t + 10000) / (100 + depth)) * 50;
        var p = Math.min(percent, 1);
        ctx.strokeStyle = this.getBranchColor(depth);
        ctx.lineWidth = this.lineWidth * (0.5 + 0.5 * this.growth);
        ctx.lineCap = this.lineCap;
        var height = 60 + depth * 3;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -height * p);
        ctx.stroke();
        if (depth === 0 || p < 1) return;
        ctx.save();
        ctx.translate(0, -height);

        if (depth === 1) {
            ctx.translate(0, -height * 0.1);
            ctx.save();
            ctx.rotate(-(10 + this.growth * 120 + angle) * Math.PI / 180);
            ctx.scale(0.6, 0.6);
            this.drawBranch(depth - 1, percent - 1, n + 1, angle * 0.8 + a * (0.05 - 0.005 * depth));
            ctx.restore();
            ctx.save();
            ctx.rotate((10 + this.growth * 120 + angle) * Math.PI / 180);
            ctx.scale(0.6, 0.6);
            this.drawBranch(depth - 1, percent - 1, n + 1, angle * 0.8 + a * (0.05 - 0.005 * depth));
            ctx.restore();
        } else if ((n + 1) % 4 < 2) {
            ctx.save();
            ctx.rotate(-(10 + this.growth * 50 + angle) * Math.PI / 180);
            ctx.scale(0.7, 0.7);
            this.drawBranch(depth - 1, percent - 1, n, angle * 0.8 + a * (0.05 - 0.005 * depth));
            ctx.restore();
            ctx.save();
            ctx.rotate((10 + this.growth * 50 + angle) * Math.PI / 180);
            ctx.scale(0.9, 0.9);
            this.drawBranch(depth - 1, percent - 1, n + 1, angle * 0.8 + a * (0.05 - 0.005 * depth));
            ctx.restore();
        } else {
            ctx.save();
            ctx.rotate((10 + this.growth * 50 + angle) * Math.PI / 180);
            ctx.scale(0.6, 0.6);
            this.drawBranch(depth - 1, percent - 1, n + 3, angle * 0.8 + a * (0.05 - 0.005 * depth));
            ctx.restore();
            ctx.save();
            ctx.rotate(-(10 + this.growth * 50 + angle) * Math.PI / 180);
            ctx.scale(0.9, 0.9);
            this.drawBranch(depth - 1, percent - 1, n + 1, angle * 0.8 + a * (0.05 - 0.005 * depth));
            ctx.restore();
        }

        ctx.restore();
    }
}