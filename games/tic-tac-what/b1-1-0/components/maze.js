class MazeLevel {
    constructor() {
        this.walls = [];
        this.objects = [];
        this.w = 0;
        this.h = 0;
        this.scale = 1;
        this.won = false;
        this.winTime = 0;
        this.mouse = { x: 0, y: 0 };
    }
    setMaze(layout) {
        this.walls = [];
        this.objects = [];
        this.h = layout.length / 2;
        if (this.h == 0) {
            this.w = 0;
            return;
        }
        this.w = layout[0].length / 2;
        this.scale = 600 / Math.max(this.w, this.h);

        var w = this.w * 2;
        var h = this.h * 2;
        function getChar(x, y) {
            if (x < 0) return " ";
            if (y < 0) return " ";
            if (x >= w) return " ";
            if (y >= h) return " ";
            return layout[y][x];
        }
        var cornerWalls = [];
        for (var x = 0; x < this.w * 2; x += 2) {
            for (var y = 0; y < this.h * 2; y += 2) {
                var char = getChar(x, y);
                if (char !== "O") continue;
                cornerWalls.push({ x: x, y: y });
            }
        }
        for (var o of cornerWalls) {
            if (getChar(o.x - 2, o.y) === "O" && getChar(o.x - 1, o.y) === "O") {
                this.walls.push({ x1: o.x, y1: o.y, x2: o.x - 2, y2: o.y });
            }
            if (getChar(o.x, o.y - 2) === "O" && getChar(o.x, o.y - 1) === "O") {
                this.walls.push({ x1: o.x, y1: o.y, x2: o.x, y2: o.y - 2 });
            }
        }
        for (var o of this.walls) {
            o.x1 /= 2;
            o.y1 /= 2;
            o.x2 /= 2;
            o.y2 /= 2;
        }
        for (var n = 0; n < this.walls.length; n++) {
            var o = this.walls[n];
            for (var n2 = n + 1; n2 < this.walls.length; n2++) {
                var o2 = this.walls[n2];
                if (o.y1 === o.y2 && o2.y1 === o2.y2 && o.y1 === o2.y1) {
                    if (o.x1 === o2.x2) {
                        o.x1 = o2.x1;
                        this.walls.splice(n2, 1);
                        n2--;
                    } else if (o.x2 === o2.x1) {
                        o.x2 = o2.x2;
                        this.walls.splice(n2, 1);
                        n2--;
                    }
                } else if (o.x1 === o.x2 && o2.x1 === o2.x2 && o.x1 === o2.x1) {
                    if (o.y1 === o2.y2) {
                        o.y1 = o2.y1;
                        this.walls.splice(n2, 1);
                        n2--;
                    } else if (o.y2 === o2.y1) {
                        o.y2 = o2.y2;
                        this.walls.splice(n2, 1);
                        n2--;
                    }
                }
            }
        }
        for (var o of this.walls) {
            var w = 0.05;
            var minX = Math.min(o.x1, o.x2);
            var maxX = Math.max(o.x1, o.x2);
            var minY = Math.min(o.y1, o.y2);
            var maxY = Math.max(o.y1, o.y2);
            o.hitbox = { x: minX - w, y: minY - w, w: maxX - minX + w * 2, h: maxY - minY + w * 2 };
        }
        for (var x = 0; x < this.w * 2; x++) {
            for (var y = 0; y < this.h * 2; y++) {
                var char = layout[y][x];
                if (char == "X") {
                    var player = new MazePlayer();
                    this.objects.push(player);
                    player.x = x / 2;
                    player.y = y / 2;
                }
            }
        }
    }
    update() {
        if (this.won) {
            if (!this.winTime) {
                for (var o of this.objects.filter(e => e instanceof MazePlayer)) {
                    var dir = dirTo(0, 0, o.xmove, o.ymove);
                    var speed = 0.03;
                    var move = distToMove(speed, dir);
                    o.xmove = move.x;
                    o.ymove = move.y;
                    o.damping = 0.99;
                }
            }
            this.winTime++;
            for (var o of this.objects.filter(e => e instanceof MazePlayer)) {
                o.damping -= 0.0005;
                o.damping = Math.max(o.damping, 0);
            }
        }

        for (var o of this.objects) {
            if (o.update) o.update(this.walls);
        }

        this.updateMouse();
        if (Mouse.down && !this.won) {
            for (var o of this.objects.filter(e => e instanceof MazePlayer)) {
                var dir = dirTo(o.x, o.y, this.mouse.x, this.mouse.y);
                var dist = distTo(o.x, o.y, this.mouse.x, this.mouse.y);
                var speedCap = 0.2;
                var move = distToMove(Math.min(dist * 0.05, speedCap), dir);
                o.xmove += move.x;
                o.ymove += move.y;
            }
        }
    }
    updateMouse() {
        this.mouse = {
            x: (Mouse.x - 500) / this.scale + this.w / 2 - 0.25,
            y: (Mouse.y - 500) / this.scale + this.h / 2 - 0.25
        }
    }
    checkWin() {
        for (var o of this.objects.filter(e => e instanceof MazePlayer)) {
            var padding = 0.6;
            var hitbox = {
                x: padding,
                y: padding,
                w: this.w - padding * 2,
                h: this.h - padding * 2
            };
            if (blocksColliding(hitbox, o.hitbox)) return false;
        }
        return true;
    }
    draw() {
        ctx.save();
        ctx.translate(500, 500);
        var s = this.scale * (1.7 - 1 * ((this.winTime + 10) / 1000) ** 0.1);
        ctx.scale(s, s);
        ctx.translate(-this.w / 2 + 0.25, -this.h / 2 + 0.25);

        this.drawWalls();
        this.drawObjects();

        ctx.restore();
    }
    drawWalls() {
        for (var o of this.walls) {
            ctx.lineCap = "round";
            ctx.strokeStyle = "black";
            ctx.lineWidth = 0.1;
            ctx.beginPath();
            ctx.moveTo(o.x1, o.y1);
            ctx.lineTo(o.x2, o.y2);
            ctx.stroke();
        }
    }
    drawObjects() {
        for (var o of this.objects) {
            o.draw();
        }
    }
}

class MazePlayer extends TicTacToeObject {
    constructor() {
        super();
        this.scale = 0.005;
        this.xmove = 0;
        this.ymove = 0;
        this.damping = 0.7;
        this.radius = 0.3;
        this.maxSpeed = 0.3;
    }
    get hitbox() {
        var self = this;
        return {
            _x: this.x - this.radius,
            _y: this.y - this.radius,
            w: this.radius * 2,
            h: this.radius * 2,
            set x(n) {
                self.x = n + self.radius;
            },
            set y(n) {
                self.y = n + self.radius;
            },
            get x() {
                return this._x;
            },
            get y() {
                return this._y;
            }
        };
    }
    set hitbox(hitbox) {
        if (hitbox.x !== undefined) this.x = hitbox.x + this.radius;
        if (hitbox.y !== undefined) this.y = hitbox.y + this.radius;
    }
    update(walls) {
        var speed = distTo(0, 0, this.xmove, this.ymove);
        if (speed > this.maxSpeed) {
            var dir = dirTo(0, 0, this.xmove, this.ymove);
            var move = distToMove(this.maxSpeed, dir);
            this.xmove = move.x;
            this.ymove = move.y;
        }

        this.x += this.xmove;
        for (var o of walls) {
            if (!blocksColliding(this.hitbox, o.hitbox)) continue;
            o.collide = true;
            if (this.x < o.hitbox.x + o.hitbox.w / 2) {
                this.hitbox.x = o.hitbox.x - this.hitbox.w;
                this.xmove *= 0.3;
            } else {
                this.hitbox.x = o.hitbox.x + o.hitbox.w;
                this.xmove *= 0.3;
            }
        }

        this.y += this.ymove;
        for (var o of walls) {
            if (!blocksColliding(this.hitbox, o.hitbox)) continue;
            o.collide = true;
            if (this.y < o.hitbox.y + o.hitbox.h / 2) {
                this.hitbox.y = o.hitbox.y - this.hitbox.h;
                this.ymove *= 0.3;
            } else {
                this.hitbox.y = o.hitbox.y + o.hitbox.h;
                this.ymove *= 0.3;
            }
        }

        this.xmove *= this.damping;
        this.ymove *= this.damping;
    }
}