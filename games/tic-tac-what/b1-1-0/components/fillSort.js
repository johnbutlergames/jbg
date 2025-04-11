class FillSortLevel {
    constructor(setup) {
        this.vials = [];
        var spacing = 70;
        var width = 70;
        var xOffset = 500 - (spacing + width) * (setup.length - 1) / 2 - width / 2;
        for (var n = 0; n < setup.length; n++) {
            var o = new FillSortVial();
            o.x = (spacing + width) * n + xOffset;
            o.y = 500;
            o.setContainment(setup[n]);
            this.vials.push(o);
        }

        this.carrying = false;
        this.carryParentVial = false;
        this.mouse = { x: 0, y: 0 };
        this.scale = 1;
        this.won = false;
    }
    update() {
        this.updateMouse();

        if (this.carrying) {
            var followDist = 30;
            var linkDist = 80;
            for (var n = 0; n < this.carrying.length; n++) {
                var o = this.carrying[n];
                o.held = true;
                o.updateAnimations();
                if (n == 0) {
                    o.targetX = this.mouse.x;
                    o.targetY = this.mouse.y;
                } else {
                    var last = this.carrying[n - 1];
                    var dir = dirTo(last.x, last.y, o.x, o.y);
                    var dist = distTo(last.x, last.y, o.x, o.y);
                    var move = distToMove(Math.max(0, dist - linkDist), dir);
                    o.x -= move.x;
                    o.y -= move.y;
                    var move = distToMove(followDist, dir);
                    o.targetX = last.x + move.x;
                    o.targetY = last.y + move.y;
                }
                o.x = o.x * 0.9 + o.targetX * 0.1;
                o.y = o.y * 0.9 + o.targetY * 0.1;
            }
            if (!Mouse.down) {
                var hovered = false;
                for (var o of this.vials) {
                    if (!o.hovered) continue;
                    hovered = o;
                    break;
                }
                if (hovered) {
                    hovered.addObjects(this.carrying);
                } else {
                    this.carryParentVial.addObjects(this.carrying);
                }
                this.carrying = false;
            }
        } else if (Mouse.downStart && !this.won) {
            if (!this.carrying) {
                for (var o of this.vials) {
                    if (!o.hovered) continue;
                    this.carrying = o.getTopObjects();
                    this.carryParentVial = o;
                    o.removeTopObjects();
                }
            }
        }

        for (var o of this.vials) {
            if (this.won) {
                o.updateHovering({ x: -100, y: -100 });
            } else {
                o.updateHovering(this.mouse);
            }
            o.updateObjects();
            o.hoverCandidate = true;
            if (this.carrying) {
                if (this.carrying.length + o.liquids.length > o.capacity) o.hoverCandidate = false;
                if (o.liquids.length) {
                    if (this.carrying[0].type != o.liquids[0].type) o.hoverCandidate = false;
                }
                if (this.carryParentVial === o) o.hoverCandidate = false;
            }
        }
    }
    checkWin() {
        return this.vials.every(function (e) {
            if (e.liquids.length === 0) return true;
            if (e.liquids.length !== e.capacity) return false;
            return e.liquids.every(f => f.type == e.liquids[0].type);
        });
    }
    updateMouse() {
        this.mouse = {
            x: (Mouse.x - 500) / this.scale + 500,
            y: (Mouse.y - 500) / this.scale + 500
        }
    }
    draw() {
        ctx.save();
        ctx.translate(500, 500);
        ctx.scale(this.scale, this.scale);
        ctx.translate(-500, -500);

        for (var o of this.vials) {
            o.draw();
        }
        if (this.carrying) {
            for (var o of this.carrying) {
                o.drawBackground();
            }
            for (var o of this.carrying) {
                o.drawForeground();
            }
        }

        ctx.restore();
    }
}

class FillSortVial {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.setCapacity(4);
        this.w = 70;
        this.hover = 0;
        this.hovered = false;
        this.hoverCandidate = true;
        this.liquids = [];
    }
    updateObjects() {
        for (var o of this.liquids) {
            o.x = o.x * 0.8 + o.targetX * 0.2;
            o.y = o.y * 0.8 + o.targetY * 0.2;
            o.held = false;
            o.updateAnimations();
        }
    }
    updateHovering(mouse) {
        if (this.isHovered(mouse, 20, 300) && this.hoverCandidate) {
            this.hover++;
            this.hovered = true;
        } else {
            this.hover--;
            this.hovered = false;
        }
        this.hover = Math.min(Math.max(this.hover, 0), 10);
    }
    isHovered(mouse, xBuffer, yBuffer) {
        if (mouse.x < this.x - xBuffer) return false;
        if (mouse.y < this.y - yBuffer) return false;
        if (mouse.x > this.x + this.w + xBuffer * 2) return false;
        if (mouse.y > this.y + this.h + yBuffer * 2) return false;
        return true;
    }
    setCapacity(n) {
        this.capacity = n;
        this.h = this.capacity * 50 + 20;
    }
    getHeightForChild(n) {
        return this.y + 40 + 50 * n;
    }
    getTopObjects() {
        if (this.liquids.length === 0) return [];
        var objects = [this.liquids[0]];
        for (var n = 1; n < this.liquids.length; n++) {
            if (this.liquids[n].type != objects[0].type) break;
            objects.push(this.liquids[n]);
        }
        return objects;
    }
    removeTopObjects() {
        if (this.liquids.length === 0) return;
        var topType = this.liquids.shift().type;
        for (var n = 0; n < this.liquids.length; n++) {
            if (this.liquids[n].type != topType) break;
            this.liquids.splice(n, 1);
            n--;
        }
    }
    addObjects(objects) {
        for (var o of objects) {
            o.targetX = this.x + this.w / 2;
            o.targetY = this.getHeightForChild(this.capacity - this.liquids.length - 1);
            this.liquids.unshift(o);
        }
    }
    setContainment(str) {
        this.liquids = [];
        for (var n = 0; n < str.length; n++) {
            var char = str[str.length - 1 - n];
            if (char == " ") continue;
            var type = char;
            if (type == "S") type = "Square";
            if (type == "T") type = "Triangle";
            var o = new FillSortLiquid(type);
            o.x = this.x + this.w / 2;
            o.y = this.getHeightForChild(n);
            o.targetX = o.x;
            o.targetY = o.y;
            this.liquids.push(o);
        }
        this.setCapacity(str.length);
    }
    draw() {
        ctx.save();
        ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
        var s = 1 + 0.05 * easeInOut(this.hover / 10);
        ctx.scale(s, s);
        ctx.translate(-this.x - this.w / 2, -this.y - this.h / 2);

        ctx.save();
        ctx.roundRect(this.x, this.y, this.w, this.h, 10);
        ctx.clip();

        for (var o of this.liquids) {
            o.drawBackground();
        }
        for (var o of this.liquids) {
            o.drawMidground();
        }
        for (var o of this.liquids) {
            o.drawForeground();
        }

        ctx.restore();

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.lineWidth = 4;
        ctx.strokeStyle = "black";
        ctx.fillStyle = "rgba(240,240,240,0.5)";

        ctx.save();
        ctx.beginPath();
        ctx.rect(-5, 10, this.w + 10, this.h);
        ctx.clip();
        ctx.roundRect(0, 0, this.w, this.h, 10);
        ctx.stroke();
        if (!this.hoverCandidate) {
            ctx.roundRect(-2, -2, this.w + 4, this.h + 4, 10);
            ctx.fill();
        }
        ctx.restore();

        ctx.roundRect(-5, -5, this.w + 10, 15, 5);
        ctx.stroke();
        if (!this.hoverCandidate) {
            ctx.roundRect(-7, -7, this.w + 14, 19, 5);
            ctx.fill();
        }

        ctx.restore();

        ctx.restore();
    }
}

class FillSortLiquid extends TicTacToeObject {
    constructor(type) {
        super(type);
        this.type = type || "X";
        this.scale = 0.3;
        this.targetX = 0;
        this.targetY = 0;
        this.held = false;
        this.holdTime = 0;
    }
    updateAnimations() {
        if (this.held) {
            this.holdTime += 0.5;
        } else {
            this.holdTime--;
        }
        this.holdTime = Math.max(Math.min(this.holdTime, 10), 0);
    }
    drawBackground() {
        ctx.save();
        ctx.translate(this.x, this.y);

        ctx.fillStyle = this.backgroundColor;
        ctx.beginPath();
        ctx.arc(0, 0, 45 * (1 - 0.3 * easeInOut(this.holdTime / 10)), 0, 2 * Math.PI);
        ctx.fill();

        ctx.restore();
    }
    drawMidground() {
        ctx.save();
        ctx.translate(this.x, this.y);
        var s = 1 - easeInOut(this.holdTime / 10);
        ctx.scale(s, s);

        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(-35, -25, 70, 50);

        ctx.restore();
    }
    drawForeground() {
        super.draw();
    }
}