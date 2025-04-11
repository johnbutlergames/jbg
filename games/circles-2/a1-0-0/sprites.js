class Sprite {
    constructor() {
        this.ctx = false;
        this.object = false;
        this.defaultData = {};
    }
    linkObject(data) {
        this.object = data;
        for (var key of Object.keys(this.defaultData)) {
            if (this.object[key] === undefined) this.object[key] = this.defaultData[key];
        }
    }
    loadCanvas(ctx) {
        this.ctx = ctx;
    }
    draw() {
    }
}

class CircleSprite extends Sprite {
    constructor() {
        super();
        this.defaultData = {
            x: 0,
            y: 0,
            r: 100,
            color: "black",
            strokeWidth: 5,
            strokeColor: "red"
        };
    }
    draw() {
        if (!this.ctx) return;
        var ctx = this.ctx;
        if (!this.object) return;
        var o = this.object;

        ctx.save();
        ctx.translate(o.x, o.y);
        ctx.beginPath();
        ctx.arc(0, 0, o.r, 0, 2 * Math.PI);
        ctx.fillStyle = o.color;
        ctx.fill();
        if (o.strokeWidth) {
            ctx.beginPath();
            ctx.arc(0, 0, o.r - o.strokeWidth / 2 + 1, 0, 2 * Math.PI);
            ctx.lineWidth = o.strokeWidth;
            ctx.strokeStyle = o.strokeColor;
            ctx.stroke();
        }
        ctx.restore();
    }
}

class PlayerSprite extends CircleSprite {
    constructor() {
        super();
        this.defaultData.strokeWidth = 0;
    }
}