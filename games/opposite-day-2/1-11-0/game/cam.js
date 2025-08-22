game.cam = {
    screenshake: 0,
    screenshakeStrength: 1,
    x: 0,
    y: 0,
    zoom: 1,
    angle: 0,
    realX: 0,
    realY: 0,
    realZoom: 1,
    realAngle: 0,
    viewBox: false,
    origin: { x: 0, y: 0 },
    offset: { x: 0, y: 0 },
    shakeX: 0,
    shakeY: 0,
    viewportBoundary: false,
    followX: 0,
    followY: 0,
    updateRealCoordinates: function () {
        if (game.level.lockedCamera) return;
        if (game.level.lockedPlayerCamera) {
            var player = game.objects.objects.find(e => e.type == "player");
            if (!player) player = game.objects.objects.find(e => e.type.includes("player") && e.type != "player copy");
            if (player) {
                this.realX = player.x;
                this.realY = player.y;
            }
            return;
        }
        this.realX = this.x;
        this.realY = this.y;
        this.realZoom = this.zoom;
        this.realAngle = this.angle;
    },
    update: function () {
        if (this.screenshake) this.screenshake--;
        this.screenshake = Math.max(this.screenshake, 0);
        var shake = this.screenshake * this.screenshakeStrength;
        this.shakeX = Math.random() * shake - shake / 2;
        this.shakeY = Math.random() * shake - shake / 2;
        if (!menu.settings.screenshake) {
            this.shakeX = 0;
            this.shakeY = 0;
        }
        var o = game.objects.objects.find(e => e.type == "player");
        var eye1 = game.objects.objects.find(e => e.id == "player eye 1");
        var eye2 = game.objects.objects.find(e => e.id == "player eye 2");
        if (!o && eye1 && eye2) {
            var o = { x: eye1.x / 2 + eye2.x / 2, y: eye1.y / 2 + eye2.y / 2, w: 0, h: 0 };
        } else if (!o) {
            o = game.objects.objects.find(e => e.type.includes("player") && e.type != "player copy");
        }
        if (o) {
            var distToPlayer = distTo(this.x, this.y, o.x + this.offset.x, o.y + this.offset.y);
            var followX = this.followX;
            var followY = this.followY;
            if (distToPlayer > 100) {
                followX += (distToPlayer - 100) / 5000;
                followY += (distToPlayer - 100) / 5000;
            }
            followX = Math.max(Math.min(followX, 1), 0);
            followY = Math.max(Math.min(followY, 1), 0);
            if (this.speedModifiers) {
                if (this.speedModifiers.x !== undefined) {
                    followX *= this.speedModifiers.x;
                }
                if (this.speedModifiers.y !== undefined) {
                    followY *= this.speedModifiers.y;
                }
            }
            this.x = this.x * (1 - followX) + (o.x + this.offset.x + o.w / 2) * followX;
            this.y = this.y * (1 - followY) + (o.y + this.offset.y + o.h / 2) * followY;
        }

        if (this.viewportBoundary) {
            var o = this.viewportBoundary;
            if (o.x !== undefined) this.x = Math.max(Math.min(this.x, o.x + o.w), o.x);
            if (o.y !== undefined) this.y = Math.max(Math.min(this.y, o.y + o.h), o.y);
        }

        if (this.levelFunction) this.levelFunction();

        this.updateViewBox();
    },
    levelFunction: false,
    alignViewport: function () {
        ctx.translate(500, 500);
        ctx.rotate(this.realAngle * Math.PI / 180);
        ctx.scale(this.realZoom, this.realZoom);
        ctx.translate(-this.realX + this.shakeX, -this.realY + this.shakeY);
    },
    alignCoordinates: function (x, y) {
        x = (x - this.realX + this.shakeX) * this.realZoom + 500;
        y = (y - this.realY + this.shakeY) * this.realZoom + 500;
        return { x: x, y: y };
    },
    updateViewBox() {
        this.viewBox = {
            cx: this.x + this.shakeX,
            cy: this.y + this.shakeY,
            w: 1000 / this.zoom,
            h: 1000 / this.zoom,
            angle: -this.angle
        }
        this.viewBox.x = this.viewBox.cx - this.viewBox.w / 2;
        this.viewBox.y = this.viewBox.cy - this.viewBox.h / 2;
    },
    drawViewBox() {
        ctx.save();
        ctx.translate(this.viewBox.cx, this.viewBox.cy);
        ctx.strokeStyle = "rgb(100,0,100)";
        ctx.lineWidth = 3;
        ctx.strokeRect(-this.viewBox.w / 2 - 1.5, -this.viewBox.h / 2 - 1.5, this.viewBox.w + 3, this.viewBox.h + 3);
        ctx.rotate(this.viewBox.angle * Math.PI / 180);
        ctx.strokeStyle = "rgb(255,0,255)";
        ctx.strokeRect(-this.viewBox.w / 2 - 1.5, -this.viewBox.h / 2 - 1.5, this.viewBox.w + 3, this.viewBox.h + 3);
        ctx.restore();
    }
};