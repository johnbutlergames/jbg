class GravityBoard extends Board {
    constructor() {
        super();
        this.initAnimateFall = false;
        this.animateFall = false;
    }
    update() {
        super.update();
        if (this.initAnimateFall) {
            this.initAnimateFall = false;
            this.objects = this.objects.sort((a, b) => b.relativeY - a.relativeY);
            var stackHeights = [];
            for (var x = 0; x < this.w; x++) {
                stackHeights.push(0);
            }
            for (var o of this.objects) {
                o.targetY = this.h - stackHeights[o.relativeX] - 1;
                if (o.targetY === o.relativeY) {
                    o.falling = false;
                } else {
                    o.falling = true;
                    o.ymove = 0;
                }
                stackHeights[o.relativeX]++;
            }
            this.animateFall = true;
        }
        if (this.animateFall) {
            for (var o of this.objects) {
                if (!o.falling) continue;
                o.ymove += 0.005;
                o.relativeY += o.ymove;
                if (o.relativeY >= o.targetY) {
                    o.ymove = 0;
                    o.relativeY = o.targetY;
                    o.falling = false;
                }
            }
            if (!this.objects.some(e => e.falling)) this.animateFall = false;
        }
    }
    possibleMoves(type) {
        var grid = this.createObjectGrid();
        var possibleSpots = [];
        for (var x = 0; x < this.w; x++) {
            for (var y = this.h - 1; y >= 0; y--) {
                if (grid[y][x]) continue;
                possibleSpots.push({ x: x, y: y, type: type });
                break;
            }
        }
        return possibleSpots;
    }
    addObject(o) {
        super.addObject(o);
        this.initAnimateFall = true;
    }
}