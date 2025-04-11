class RotateMaze {
    constructor() {
        this.angle = 0;
        this.targetAngle = 0;
        this.changingAngle = false;
        this.initialAngle = 0;
        this.x = 500;
        this.y = 500;
        this.scale = 1;
        this.targetScale = 1;
        this.animationScale = 2;
        this.objects = [];
        this.player = new RotateMazePlayer();
        this.player.maze = this;
        this.animation = 0;
        this.radius = 0;
    }
    setObjects(objects) {
        for (var o of objects) {
            if (o.type == "line") {
                this.objects.push(new RotateMazeLine(o.x1, o.y1, o.x2, o.y2));
            }
        }

        this.radius = Math.max(...this.objects.map(e => e.distToCenter));
        this.targetScale = 900 / (this.radius * 2);
    }
    update() {
        if (!this.animation) {
            if (Mouse.down) this.animation = 1;
            return;
        }
        this.animation++;
        var a = easeInOut(this.animation / 100);
        this.animationScale = 2 - a;
        this.scale = 1 * (1 - a) + this.targetScale * a;
        for (var o of this.objects) {
            o.update();
        }
        this.player.update();

        this.updateAngle();
    }
    updateAngle() {
        if (Mouse.down) {
            if (!this.changingAngle) {
                this.changingAngle = dirTo(500, 500, Mouse.x, Mouse.y);
                this.initialAngle = this.targetAngle;
            }
            var dist = distTo(500, 500, Mouse.x, Mouse.y);
            if (dist > 5) {
                this.targetAngle = dirTo(500, 500, Mouse.x, Mouse.y) - this.changingAngle + this.initialAngle;
            }
        } else {
            this.changingAngle = false;
        }
        this.angle += turn(this.angle, this.targetAngle) * 0.1;
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.scale(this.scale, this.scale);
        ctx.scale(this.animationScale, this.animationScale);

        for (var o of this.objects) {
            o.draw();
        }
        this.player.draw();

        ctx.restore();
    }
    checkWin() {
        return distTo(0, 0, this.player.x, this.player.y) > this.radius;
    }
}

class RotateMazePlayer extends TicTacToeObject {
    constructor() {
        super();
        this.maze = false;
        this.x = 0;
        this.y = 0;
        this.xmove = 0;
        this.ymove = 0;
        this.angle = 0;
        this.damping = 0.95;
        this.scale = 0.5;
        this.collideRadius = 20;
        this.turn = 0;
    }
    update() {
        if (!this.maze) return;
        this.angle += this.turn;
        this.turn *= 0.999;
        this.updateMovement();
        this.updateCollisions();
    }
    updateMovement() {
        this.x += this.xmove;
        this.y += this.ymove;
        var gravity = distToMove(0.4, 180 - this.maze.angle);
        this.xmove += gravity.x;
        this.ymove += gravity.y;
        this.xmove *= this.damping;
        this.ymove *= this.damping;
    }
    updateCollisions() {
        var collisions = this.findCollisions();
        this.resolveCollisions(collisions);
    }
    resolveCollisions(collisions) {
        if (!collisions.length) return;
        var resolutions = [];
        for (var o of collisions) {
            var angle = dirTo(o.x1, o.y1, o.x2, o.y2);
            var width = distTo(o.x1, o.y1, o.x2, o.y2);
            var height = o.collideWidth;
            var newPlayer = { r: this.collideRadius };
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
                    newPlayer.y = o.cy - height - this.collideRadius;
                    newPlayer.ymove = -Math.abs(newPlayer.ymove * energy);
                } else {
                    newPlayer.y = o.cy + height + this.collideRadius;
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
    findCollisions() {
        var collisions = [];
        for (var o of this.maze.objects) {
            if (o.type == "line") {
                var dist = distTo(o.cx, o.cy, this.x, this.y);
                if (dist > this.collideRadius + o.r) continue;
                dist = distToSeg(this.x, this.y, o.x1, o.y1, o.x2, o.y2);
                if (dist > this.collideRadius + o.collideWidth) continue;
                collisions.push(o);
            }
        }
        return collisions;
    }
}

class RotateMazeLine {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.cx = (x1 + x2) / 2;
        this.cy = (y1 + y2) / 2;
        this.distToCenter = Math.max(distTo(this.x1, this.y1, 0, 0), distTo(this.x2, this.y2, 0, 0));
        this.r = distTo(x1, y1, x2, y2) / 2;
        this.type = "line";
        this.color = "black";
        this.lineCap = "round";
        this.lineWidth = 8;
        this.collideWidth = 8;
    }
    update() {
    }
    draw() {
        ctx.strokeStyle = this.color;
        ctx.lineCap = this.lineCap;
        ctx.lineWidth = this.lineWidth;
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
    }
}