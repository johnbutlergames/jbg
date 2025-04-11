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
    drawBackground() {
    }
    drawForeground() {
    }
}

class CircleSprite extends Sprite {
    constructor() {
        super();
        this.defaultData = {
            x: 0,
            y: 0,
            r: 100,
            angle: 0,
            color: "black",
            strokeWidth: 5,
            strokeColor: "red"
        };
    }
    drawBackground() {
        if (!this.ctx) return;
        var ctx = this.ctx;
        if (!this.object) return;
        var o = this.object;
        if (!o.strokeWidth) return;
        ctx.save();
        ctx.translate(o.x, o.y);
        ctx.beginPath();
        ctx.arc(0, 0, o.r, 0, 2 * Math.PI);
        ctx.fillStyle = o.strokeColor;
        ctx.fill();
        ctx.restore();
    }
    draw() {
        if (!this.ctx) return;
        var ctx = this.ctx;
        if (!this.object) return;
        var o = this.object;

        ctx.save();
        ctx.translate(o.x, o.y);
        ctx.beginPath();
        ctx.arc(0, 0, o.r - o.strokeWidth, 0, 2 * Math.PI);
        ctx.fillStyle = o.color;
        ctx.fill();
        ctx.restore();
    }
}

class RectangleSprite extends Sprite {
    constructor() {
        super();
        this.defaultData = {
            x: 0,
            y: 0,
            r: 100,
            angle: 0,
            color: "black",
            strokeWidth: 5,
            strokeColor: "red"
        };
    }
    drawBackground() {
        if (!this.ctx) return;
        var ctx = this.ctx;
        if (!this.object) return;
        var o = this.object;
        if (!o.strokeWidth) return;

        ctx.save();
        ctx.translate(o.x, o.y);
        ctx.rotate(o.angle * Math.PI / 180);
        ctx.fillStyle = o.strokeColor;
        ctx.fillRect(-o.w / 2, -o.h / 2, o.w, o.h);
        ctx.restore();
    }
    draw() {
        if (!this.ctx) return;
        var ctx = this.ctx;
        if (!this.object) return;
        var o = this.object;

        ctx.save();
        ctx.translate(o.x, o.y);
        ctx.rotate(o.angle * Math.PI / 180);
        ctx.fillStyle = o.fillColor;
        ctx.fillRect(-o.w / 2 + o.strokeWidth, -o.h / 2 + o.strokeWidth, o.w - o.strokeWidth * 2, o.h - o.strokeWidth * 2);
        ctx.restore();
    }
}

class PlayerSprite extends CircleSprite {
    constructor() {
        super();
        this.defaultData.strokeWidth = 0;
        this.defaultData.color = "red";
    }
}