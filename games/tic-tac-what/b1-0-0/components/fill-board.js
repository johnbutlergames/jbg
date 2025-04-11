class FillBoard extends Board {
    constructor() {
        super();
        this.validPlaceCoordinates = [];
        this.lastPlace = false;
        this.placeHistory = [];
        this.fillAnimation = 0;
        this.fillingAnimation = false;
        this.animationLength = 50;
        this.firstPlace = true;
        this.updatePlaceCoordinates();
    }
    update() {
        super.update();

        if (this.fillingAnimation) {
            this.fillAnimation++;
        }
    }
    updatePlaceCoordinates() {
        if (this.firstPlace) {
            this.validPlaceCoordinates = [];
            for (var x = 0; x < this.w; x++) {
                for (var y = 0; y < this.h; y++) {
                    if (this.findObject(x, y)) continue;
                    this.validPlaceCoordinates.push({ x: x, y: y });
                }
            }
        } else {
            var cors = this.surroundingOrthogonalCoordinates(this.lastPlace.x, this.lastPlace.y);
            cors = cors.filter(e => !this.findObject(e.x, e.y));
            this.validPlaceCoordinates = cors;
        }
    }
    updatePlacing(o) {
        o.update();
        o.x = Mouse.x;
        o.y = Mouse.y;
        o.relativeX = undefined;
        o.relativeY = undefined;
        this.alignObjectToGrid(o);
        o.positioned = this.coordinateOnGrid(o.relativeX, o.relativeY) && !this.findObject(o.relativeX, o.relativeY);
        o.positioned = o.positioned && this.validPlaceCoordinates.find(e => e.x === o.relativeX && e.y === o.relativeY);
        if (o.positioned && Mouse.click) return true;
        return false;
    }
    addObject(o, notPlacing) {
        super.addObject(o);
        if (!notPlacing) {
            this.lastPlace = { x: o.relativeX, y: o.relativeY };
            this.placeHistory.push(structuredClone(this.lastPlace));
            this.firstPlace = false;
            this.updatePlaceCoordinates();
        }
    }
    drawBackground() {
        ctx.save();
        this.alignCanvasToCells();
        for (var o of this.validPlaceCoordinates) {
            ctx.save();
            ctx.translate(o.x, o.y);
            ctx.fillStyle = "rgba(255,0,0,0.1)";
            ctx.fillRect(0, 0, 1, 1);
            ctx.restore();
        }
        ctx.restore();
    }
    drawForeground() {
        if (!this.fillingAnimation) return;
        ctx.save();
        this.alignCanvasToCells();

        var a = easeInOut(this.fillAnimation / this.animationLength);
        ctx.strokeStyle = "black";
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.lineWidth = 0.2;
        ctx.beginPath();
        ctx.moveTo(this.placeHistory[0].x + 0.5, this.placeHistory[0].y + 0.5);
        for (var n = 1; n < this.placeHistory.length; n++) {
            var percent = n / this.placeHistory.length;
            var step = 1 / this.placeHistory.length;
            if (a < percent) break;
            var o = this.placeHistory[n];
            if (a >= percent + step || a === 1) {
                ctx.lineTo(o.x + 0.5, o.y + 0.5);
            } else {
                var subPercent = (a % step) / step;
                var last = this.placeHistory[n - 1];
                var x = o.x * subPercent + last.x * (1 - subPercent);
                var y = o.y * subPercent + last.y * (1 - subPercent);
                ctx.lineTo(x + 0.5, y + 0.5);
            }
        }
        ctx.stroke();

        ctx.restore();
    }
    checkFill() {
        return this.objects.length === this.w * this.h;
    }
    checkStuck() {
        return this.validPlaceCoordinates.length === 0;
    }
    addObstacle(x, y) {
        var o = new TicTacToeObject("O");
        o.relativeX = x;
        o.relativeY = y;
        this.addObject(o, true);
    }
}