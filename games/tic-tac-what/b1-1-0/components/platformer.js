class PlatformingLevel {
    constructor(data) {
        this.objects = [];
        this.cam = new PlatformingLevelCamera();
        var player = new TicTacToePlayer();
        var controller = new TicTacToePlayerController();
        controller.player = player;
        controller.cam = this.cam;
        player.controller = controller;
        this.cam.player = player;
        this.objects.push(player);

        if (data.objects) {
            for (var o of data.objects) {
                this.objects.push(new PlatformingObject(o));
            }
        }
    }
    update() {
        this.cam.update();

        for (var o of this.objects) {
            if (o.update) o.update();
            o.collisions = [];
        }
        var staticObjects = this.objects.filter(e => e.static);
        var dynamicObjects = this.objects.filter(e => e.dynamic);
        for (var o of dynamicObjects) {
            o.resolveCollisions(staticObjects);
        }
    }
    draw() {
        ctx.save();
        this.cam.alignViewport();
        for (var o of this.objects) {
            o.draw();
        }
        ctx.restore();
    }
    checkWin() {
        var player = this.objects.find(e => e.player);
        if (!player) return false;
        return player.inFinish;
    }
}

class PlatformingLevelCamera {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.follow = 0.05;
        this.zoom = 1;
        this.player = false;
    }
    update() {
        if (!this.player) return;
        this.x = this.x * (1 - this.follow) + this.player.x * this.follow;
        this.y = this.y * (1 - this.follow) + this.player.y * this.follow;
        this.zoom = 1;
    }
    alignViewport() {
        ctx.translate(500, 500);
        ctx.scale(this.zoom, this.zoom);
        ctx.translate(-this.x, -this.y);
    }
}

class dynamicPlatformingObject {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xmove = 0;
        this.ymove = 0;
        this.damping = 1;
        this.gravity = { x: 0, y: 0 };
        this.angle = 0;
        this.turn = 0;
        this.r = 0;
        this.static = false;
        this.dynamic = true;
    }
    update() {
        this.x += this.xmove;
        this.y += this.ymove;
        this.xmove += this.gravity.x;
        this.ymove += this.gravity.y;
        this.xmove *= this.damping;
        this.ymove *= this.damping;
        this.angle += this.turn;
    }
    findCollisions(staticObjects) {
        var collisions = [];
        for (var o of staticObjects) {
            if (o.type == "line") {
                var dist = distTo(o.cx, o.cy, this.x, this.y);
                if (dist > this.r + o.r) continue;
                dist = distToSeg(this.x, this.y, o.x1, o.y1, o.x2, o.y2);
                if (dist > this.r + o.width) continue;
                collisions.push(o);
            }
            if (o.type == "finish") {
                var move = distToMove(90, o.angle);
                var o1 = { width: 30, r: 30, finish: true };
                o1.x1 = o.x + move.x;
                o1.y1 = o.y + move.y;
                o1.x2 = o1.x1 + 1;
                o1.y2 = o1.y1;
                o1.cx = o1.x1;
                o1.cy = o1.y1;
                var dist = distTo(o1.x1, o1.y1, this.x, this.y);
                if (dist < this.r + o1.width) {
                    collisions.push(o1);
                }
                var o2 = { width: 30, r: 30, finish: true };
                o2.x1 = o.x - move.x;
                o2.y1 = o.y - move.y;
                o2.x2 = o2.x1 + 1;
                o2.y2 = o2.y1;
                o2.cx = o2.x1;
                o2.cy = o2.y1;
                var dist = distTo(o2.x1, o2.y1, this.x, this.y);
                if (dist < this.r + o2.width) {
                    collisions.push(o2);
                }
            }
        }
        return collisions;
    }
    resolveCollisions(staticObjects) {
        var collisions = this.findCollisions(staticObjects);
        this.collisions = collisions;
        if (collisions.length === 0) return;
        var resolutions = [];
        for (var o of collisions) {
            var angle = dirTo(o.x1, o.y1, o.x2, o.y2);
            var width = distTo(o.x1, o.y1, o.x2, o.y2);
            var height = o.width;
            var newPlayer = { r: this.r };
            var newCoordinate = rotate(o.cx, o.cy, this.x, this.y, -90 - angle);
            var newMove = rotate(0, 0, this.xmove, this.ymove, -90 - angle);
            newPlayer.x = newCoordinate.x;
            newPlayer.y = newCoordinate.y;
            newPlayer.xmove = newMove.x;
            newPlayer.ymove = newMove.y;
            var oldY = newPlayer.y - newPlayer.ymove;
            var energy = 0.5;
            var turn;
            if (oldY < o.cy) {
                turn = -newPlayer.xmove;
            } else {
                turn = newPlayer.xmove;
            }
            if (newPlayer.x >= o.cx - width / 2 && newPlayer.x <= o.cx + width / 2) {
                if (oldY < o.cy) {
                    newPlayer.y = o.cy - height - this.r;
                    newPlayer.ymove = -Math.abs(newPlayer.ymove * energy);
                } else {
                    newPlayer.y = o.cy + height + this.r;
                    newPlayer.ymove = Math.abs(newPlayer.ymove * energy);
                }
            } else {
                var circle;
                if (newPlayer.x < o.cx) {
                    circle = { x: o.cx - width / 2, y: o.cy, r: height };
                } else if (newPlayer.x > o.cx) {
                    circle = { x: o.cx + width / 2, y: o.cy, r: height };
                }
                var dist = distTo(newPlayer.x, newPlayer.y, circle.x, circle.y);
                var dir = dirTo(newPlayer.x, newPlayer.y, circle.x, circle.y);
                var collideDist = newPlayer.r + circle.r - dist;
                var speed = distTo(0, 0, newPlayer.xmove, newPlayer.ymove);
                var move = distToMove(speed * energy, dir);
                newPlayer.xmove -= move.x * 2;
                newPlayer.ymove -= move.y * 2;
                var move = distToMove(collideDist, dir);
                newPlayer.x -= move.x;
                newPlayer.y -= move.y;
            }

            var resolution = {};
            resolution.turn = turn;
            var newCoordinate = rotate(o.cx, o.cy, newPlayer.x, newPlayer.y, 90 + angle);
            var newMove = rotate(0, 0, newPlayer.xmove, newPlayer.ymove, 90 + angle);
            resolution.x = newCoordinate.x;
            resolution.y = newCoordinate.y;
            resolution.xmove = newMove.x;
            resolution.ymove = newMove.y;
            resolution.turn = turn;
            resolutions.push(resolution);
        }

        var x = resolutions.reduce((a, b) => a + b.x, 0) / resolutions.length;
        var y = resolutions.reduce((a, b) => a + b.y, 0) / resolutions.length;
        var xmove = resolutions.reduce((a, b) => a + b.xmove, 0) / resolutions.length;
        var ymove = resolutions.reduce((a, b) => a + b.ymove, 0) / resolutions.length;
        var newTurn = -resolutions.reduce((a, b) => a + b.turn, 0) / resolutions.length;
        this.turn = this.turn * 0.8 + newTurn * 0.2;
        this.x = x;
        this.y = y;
        this.xmove = xmove;
        this.ymove = ymove;
    }
}

class TicTacToePlayer extends dynamicPlatformingObject {
    constructor() {
        super();
        this.player = true;
        this.color = "red";
        this.r = 30;
        this.lineWidth = 5;
        this.gravity = { x: 0, y: 0.1 };
        this.damping = 0.98;
        this.rotateDamping = 0.999;
        this.movingToFinish = false;
        this.movingToFinishTime = 0;
        this.coyoteTime = 0;
        this.onGround = false;
    }
    draw() {
        var o = new TicTacToeObject();
        o.x = this.x;
        o.y = this.y;
        o.angle = this.angle;
        o.scale = 0.6;
        o.draw();
    }
    update() {
        if (this.movingToFinish) {
            this.movingToFinishTime++;
            var a = easeInOut(this.movingToFinishTime / 100);
            var a2 = easeInOut(this.movingToFinishTime / 130);
            var dir = dirTo(this.x, this.y, this.movingToFinish.x, this.movingToFinish.y);
            var dist = distTo(this.x, this.y, this.movingToFinish.x, this.movingToFinish.y);
            var move = distToMove(dist, dir);
            this.xmove = this.origin.xmove * (1 - a) + move.x * a;
            this.ymove = this.origin.ymove * (1 - a) + move.y * a;
            this.origin.xmove *= 0.95;
            this.origin.ymove *= 0.95;
            var closestFlatAngle = this.angle % 90;
            if (closestFlatAngle > 45) closestFlatAngle -= 90;
            this.turn += turn(this.turn, turn(closestFlatAngle, 0)) * a * (0.1 + 0.9 * a2);
            this.x += this.xmove;
            this.y += this.ymove;
            this.angle += this.turn;
            if (this.movingToFinishTime === 50) this.inFinish = true;
        } else {
            super.update();
            this.controller.update();
            this.turn *= this.rotateDamping;

            this.updateJumping();
        }
    }
    updateJumping() {
        this.onGround = false;
        if (!this.collisions) return;
        for (var o of this.collisions) {
            var intersection = linesIntersection(o.x1, o.y1, o.x2, o.y2, this.x, this.y, this.x, this.y + 1);
            if (!intersection) continue;
            if (intersection.y < this.y) continue;
            if (intersection.y > this.y + 200) continue;
            this.onGround = true;
            break;
        }
        if (this.onGround) {
            this.coyoteTime = 20;
        } else {
            if (this.coyoteTime) this.coyoteTime--;
        }
    }
    resolveCollisions(staticObjects) {
        if (this.movingToFinish) return;
        for (var o of staticObjects) {
            if (o.type != "finish") continue;
            var dist = distTo(this.x, this.y, o.x, o.y);
            if (dist > this.r * 2) continue;
            o.playerInFinish = true;
            this.movingToFinish = o;
            this.origin = { x: this.x, y: this.y, xmove: this.xmove, ymove: this.ymove, angle: this.angle, turn: this.turn };
            this.movingToFinishTime = 0;
        }
        if (this.movingToFinish) return;
        super.resolveCollisions(staticObjects);
    }
}

class TicTacToePlayerController {
    constructor() {
        this.player = false;
        this.cam = false;
        this.speedCap = 10;
        this.distRamp = 10;
    }
    update() {
        if (!this.player) return;
        if (!this.cam) return;
        var mouseX = Mouse.x + this.cam.x - 500;
        var mouseY = Mouse.y + this.cam.y - 500;
        if (!Mouse.click) return;
        if (!this.player.onGround && !this.player.coyoteTime) return;
        this.coyoteTime = 0;
        var dist = distTo(mouseX, mouseY, this.player.x, this.player.y);
        var dir = dirTo(this.player.x, this.player.y, mouseX, mouseY);
        var move = distToMove(Math.min(this.speedCap, dist / this.distRamp), dir);
        this.player.xmove += move.x * 0.7;
        this.player.ymove += move.y - 1;
        this.player.turn += move.x * 0.1;
    }
}

class PlatformingObject {
    constructor(o) {
        if (o.type == "line") return new PlatformingLine(o);
        if (o.type == "finish") return new PlatformingFinish(o);
    }
}

class PlatformingLine {
    constructor(o) {
        this.width = 5;
        this.color = "black";
        this.type = "line";
        this.x1 = o.x1;
        this.y1 = o.y1;
        this.x2 = o.x2;
        this.y2 = o.y2;
        this.static = true;
        this.dynamic = false;
        this.cx = (this.x1 + this.x2) / 2;
        this.cy = (this.y1 + this.y2) / 2;
        this.r = distTo(this.x1, this.y1, this.x2, this.y2) / 2 + this.width;
    }
    draw() {
        ctx.lineCap = "round";
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.width * 2;
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
    }
}

class PlatformingFinish {
    constructor(o) {
        this.x = o.x;
        this.y = o.y;
        this.angle = o.angle;
        this.static = true;
        this.dynamic = false;
        this.type = "finish";
        this.playerInFinish = false;
        this.playerInFinishTime = 0;
    }
    update() {
        if (this.playerInFinish) {
            this.playerInFinishTime++;
        }
    }
    draw() {
        var move = distToMove(90, this.angle);
        var o1 = new TicTacToeObject();
        o1.x = this.x + move.x;
        o1.y = this.y + move.y;
        o1.scale = 0.6;
        var o2 = new TicTacToeObject();
        o2.x = this.x - move.x;
        o2.y = this.y - move.y;
        o2.scale = 0.6;
        o1.draw();
        o2.draw();

        if (this.playerInFinish && this.playerInFinishTime > 50) {
            var a = easeInOut((this.playerInFinishTime - 50) / 30);
            ctx.strokeStyle = "black";
            ctx.lineWidth = 18;
            ctx.lineCap = "round";
            var start = { x: this.x + move.x * 1.3, y: this.y + move.y * 1.3 };
            var end = { x: this.x - move.x * 1.3, y: this.y - move.y * 1.3 };
            ctx.beginPath();
            ctx.moveTo(start.x, start.y);
            ctx.lineTo(start.x * (1 - a) + end.x * a, start.y * (1 - a) + end.y * a);
            ctx.stroke();
        }
    }
}

function linesIntersection(x1, y1, x2, y2, x3, y3, x4, y4) {
    if (x1 === x3 && y1 === y3 && x2 === x4 && y2 === y4) return true;
    var m1 = (y2 - y1) / (x2 - x1);
    var b1 = y1 - x1 * m1;
    var m2 = (y4 - y3) / (x4 - x3);
    var b2 = y3 - x3 * m2;

    if ((!isFinite(m1) && !isFinite(m2))) {
        if (x1 === x3) {
            return true;
        } else {
            return false;
        }
    }
    if (m1 === m2) {
        if (b1 === b2) {
            return true;
        } else {
            return false;
        }
    }
    if (!isFinite(m1)) {
        return { x: x1, y: m2 * x1 + b2 };
    }
    if (!isFinite(m2)) {
        return { x: x3, y: m1 * x3 + b1 };
    }
    return { x: (b1 - b2) / (m2 - m1), y: m1 * (b1 - b2) / (m2 - m1) + b1 };
}