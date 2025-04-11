class Game {
    constructor() {
        this.ctx = false;
        this.level = false;
        this.input = new InputTracker();
    }
    loadLevel(data) {
        this.level = new Level(data);
        this.level.loadInput(this.input);
        if (this.ctx) this.level.loadCanvas(this.ctx);
    }
    loadCanvas(ctx) {
        this.ctx = ctx;
        this.level.loadCanvas(ctx);
    }
    tick() {
        this.input.update();
        this.update();
        this.draw();
    }
    update() {
        if (this.level) this.level.update();
    }
    draw() {
        if (this.level) this.level.draw();
    }
}

class Level {
    constructor(data) {
        this.objects = [];
        var objects = data.objects || [];
        for (var o of objects) {
            this.objects.push(new GameObject(o));
        }
        this.ctx = false;
        this.cam = new Cam();
        this.input = false;
    }
    loadCanvas(ctx) {
        this.ctx = ctx;
        this.cam.loadCanvas(ctx);
        for (var o of this.objects) o.loadCanvas(ctx);
    }
    loadInput(input) {
        this.input = input;
        for (var o of this.objects) o.loadInput(input);
    }
    update() {
        for (var o of this.objects) {
            if (o.update) o.update();
        }
        this.updateCollisions();

        var players = this.objects.filter(e => e.type == "player");
        this.cam.setFocus(players);
        this.cam.update();
    }
    updateCollisions() {
        for (var o of this.objects) {
            o.collisions = [];
            o.residualCollisionStrength = 0;
            if (o.xmove) o.x += o.xmove;
            if (o.ymove) o.y += o.ymove;
        }
        var dynamicObjects = this.objects.filter(e => e.dynamic);
        var staticObjects = this.objects.filter(e => !e.dynamic);
        for (var n = 0; n < dynamicObjects.length; n++) {
            var o = dynamicObjects[n];
            for (var n2 = n + 1; n2 < dynamicObjects.length; n2++) {
                var o2 = dynamicObjects[n2];
                var dist = distTo(o.x, o.y, o2.x, o2.y);
                if (dist > o.r + o2.r) continue;
                this.resolveDynamicDynamicCollision(o, o2);
            }
        }
        for (var o of dynamicObjects) {
            var collisions = [];
            for (var o2 of staticObjects) {
                var dist = distTo(o.x, o.y, o2.x, o2.y);
                if (dist > o.r + o2.r) continue;
                collisions.push(o2);
            }
            this.resolveStaticDynamicCollisions(o, collisions);
        }
    }
    resolveStaticDynamicCollisions(o, collisions) {
        if (collisions.length == 0) return;
        var results = [];
        for (var o2 of collisions) {
            results.push(this.resolveStaticDynamicCollision(o, o2));
        }
        var x = results.reduce((a, b) => a + b.x, 0) / results.length;
        var y = results.reduce((a, b) => a + b.y, 0) / results.length;
        var xmove = results.reduce((a, b) => a + b.xmove, 0) / results.length;
        var ymove = results.reduce((a, b) => a + b.ymove, 0) / results.length;
        o.x = x;
        o.y = y;
        o.xmove = xmove;
        o.ymove = ymove;

        for (var o2 of collisions) {
            var dist = distTo(o.x, o.y, o2.x, o2.y);
            if (dist > o.r + o2.r) continue;
            o.residualCollisionStrength += o.r + o2.r - dist;
        }
    }
    resolveStaticDynamicCollision(o1, o2) {
        var bounceEnergy = 0.3;
        o1.collisions.push(o2);
        o2.collisions.push(o1);

        var dist = distTo(o1.x, o1.y, o2.x, o2.y);
        var dir = dirTo(o1.x, o1.y, o2.x, o2.y);
        var collideDist = o1.r + o2.r - dist;
        var speed = distTo(0, 0, o1.xmove, o1.ymove);
        var resultingSpeed = speed * bounceEnergy;
        if (speed < 5) resultingSpeed = collideDist;
        var move = distToMove(resultingSpeed, dir);

        var o = { x: o1.x, y: o1.y, xmove: o1.xmove, ymove: o1.ymove };
        o.xmove -= move.x * 2;
        o.ymove -= move.y * 2;

        var move = distToMove(collideDist, dir);
        o.x -= move.x;
        o.y -= move.y;

        return o;
    }
    resolveDynamicDynamicCollision(o1, o2) {
        var energy = 1;
        o1.collisions.push(o2);
        o2.collisions.push(o1);

        var dist = distTo(o1.x, o1.y, o2.x, o2.y);
        var dir = dirTo(o1.x, o1.y, o2.x, o2.y);
        var collideDist = o1.r + o2.r - dist;
        var move = distToMove(collideDist, dir);
        o1.xmove -= move.x * energy;
        o1.ymove -= move.y * energy;
        o2.xmove += move.x * energy;
        o2.ymove += move.y * energy;
        o1.x -= move.x / 2;
        o1.y -= move.y / 2;
        o2.x += move.x / 2;
        o2.y += move.y / 2;
    }
    draw() {
        if (!this.ctx) return;
        var ctx = this.ctx;

        ctx.save();
        this.cam.alignViewport();

        for (var o of this.objects) {
            if (o.draw) o.draw();
        }

        ctx.restore();
    }
}

class Cam {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.zoom = 1;
        this.target = { x: 0, y: 0, zoom: 1 };
        this.smoothing = 0.95;
        this.ctx = false;
        this.focus = [];
    }
    loadCanvas(ctx) {
        this.ctx = ctx;
    }
    alignViewport() {
        if (!this.ctx) return;
        var ctx = this.ctx;

        ctx.translate(500, 500);
        ctx.scale(this.zoom, this.zoom);
        ctx.translate(-this.x, -this.y);
    }
    update() {
        this.x = this.x * this.smoothing + this.target.x * (1 - this.smoothing);
        this.y = this.y * this.smoothing + this.target.y * (1 - this.smoothing);
        this.zoom = this.zoom * this.smoothing + this.target.zoom * (1 - this.smoothing);

        if (this.focus.length > 0) {
            this.target.x = this.focus.reduce((a, b) => a + b.x, 0) / this.focus.length;
            this.target.y = this.focus.reduce((a, b) => a + b.y, 0) / this.focus.length;
        }
    }
    setFocus(objects) {
        this.focus = objects;
    }
}