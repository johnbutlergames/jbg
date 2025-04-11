class ArchaeologyLevel {
    constructor() {
        this.mouse = { x: 0, y: 0 };
        this.w = 10;
        this.h = 10;
        this.size = 100;
        this.scale = 750 / Math.max(this.w * this.size, this.h * this.size);

        this.tiles = [];
        for (var x = 0; x < this.w; x++) {
            for (var y = 0; y < this.h; y++) {
                var o = new ArchaeologyTile();
                o.x = x * this.size;
                o.y = y * this.size;
                o.w = this.size;
                o.h = this.size;
                this.tiles.push(o);
            }
        }

        this.necessaryHitboxes = [
            { x: 300, y: 100, w: 100, h: 200 },
            { x: 200, y: 300, w: 200, h: 200 },
            { x: 300, y: 500, w: 300, h: 300 },
            { x: 400, y: 400, w: 400, h: 200 },
            { x: 800, y: 300, w: 100, h: 200 },
            { x: 600, y: 100, w: 200, h: 300 },
            { x: 200, y: 700, w: 100, h: 100 },
            { x: 500, y: 200, w: 100, h: 100 },
        ];
    }
    update() {
        this.updateMouse();

        if (Mouse.downStart) {
            for (var o of this.tiles) {
                var dist = distTo(o.x + o.w / 2, o.y + o.h / 2, this.mouse.x, this.mouse.y);
                if (dist > 150) continue;
                o.health--;
            }
        }
        this.tiles = this.tiles.filter(e => e.health > 0);
    }
    updateMouse() {
        this.mouse = {
            x: (Mouse.x - 500) / this.scale + (this.w * this.size) / 2,
            y: (Mouse.y - 500) / this.scale + (this.h * this.size) / 2
        }
    }
    checkWin() {
        return this.tiles.every(e => !this.necessaryHitboxes.some(f => blocksColliding(e, f)));
    }
    draw() {
        ctx.fillStyle = "rgb(211, 202, 192)";
        ctx.fillRect(0, 0, 1000, 1000);

        ctx.save();
        ctx.translate(500, 500);
        ctx.scale(this.scale, this.scale);
        ctx.translate(-this.w * this.size / 2, -this.h * this.size / 2);

        ctx.fillStyle = "rgb(175, 161, 143)";
        ctx.fillRect(0, 0, this.w * this.size, this.h * this.size);
        ctx.strokeStyle = "rgb(157, 142, 121)";
        ctx.lineWidth = 5;
        for (var n = 1; n < Math.max(this.w, this.h); n++) {
            ctx.beginPath();
            ctx.moveTo(n * this.size, 0);
            ctx.lineTo(n * this.size, this.h * this.size);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(0, n * this.size);
            ctx.lineTo(this.w * this.size, n * this.size);
            ctx.stroke();
        }
        ctx.drawImage(images.skeleton, 0, 0, this.w * this.size, this.h * this.size);

        for (var o of this.tiles) {
            o.draw();
        }

        /*for (var o of this.necessaryHitboxes) {
            ctx.fillStyle = "rgba(0,0,255,0.2)";
            ctx.fillRect(o.x, o.y, o.w, o.h);
        }*/

        ctx.restore();
    }
}

class ArchaeologyTile {
    constructor() {
        this.health = 6;
        this.x = 0;
        this.y = 0;
        this.w = 100;
        this.h = 100;
        this.image = "ab"[Math.floor(Math.random() * 2)];
        this.angle = Math.floor(Math.random() * 4) * 90;
    }
    draw() {
        ctx.save();
        ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.translate(-this.w / 2, -this.h / 2);

        var buffer = 3;
        ctx.fillStyle = "rgb(199, 187, 172)";
        ctx.fillRect(-buffer, -buffer, this.w + buffer * 2, this.h + buffer * 2);

        var animatedHealth = Math.ceil(this.health);
        if (animatedHealth < 6) {
            var image = "crack" + this.image + (6 - animatedHealth);
            ctx.globalAlpha = 1;
            ctx.drawImage(images[image], 0, 0, this.w, this.h);
        }

        ctx.restore();
    }
}