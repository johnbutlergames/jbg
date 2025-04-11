NamedLevels["sort1"] = class {
    constructor() {
        var range = [];
        for (var n = 0; n < 9; n++) {
            range.push(n);
        }
        var order = [];
        while (range.length) {
            var index = Math.floor(Math.random() * range.length);
            order.push(range.splice(index, 1)[0]);
        }
        this.objects = [];
        for (var n = 0; n < 9; n++) {
            var o = new TicTacToeObject();
            o.scale = 0.2 + n * 0.07;
            o.order = order[n];
            o.sortedOrder = n;
            o.x = 100 + o.order * 100;
            o.y = 500;
            o.w = 100 * o.scale + 49;
            o.targetX = o.x;
            o.targetY = o.y;
            this.objects.push(o);
        }

        this.pullingObject = false;
    }
    setObjectTargets() {
        this.objects = this.objects.sort((a, b) => a.order - b.order);
        var x = 0;
        for (var o of this.objects) {
            o.x = o.x * 0.9 + o.targetX * 0.1;
            o.y = o.y * 0.9 + o.targetY * 0.1;
            if (!o.beingPulled) {
                o.targetY = 500;
                o.targetX = 100 + x;
            }
            x += o.w;
        }
    }
    update() {
        if (Mouse.downStart) {
            if (!this.pullingObject) {
                for (var o of this.objects) {
                    var dist = distTo(o.x, o.y, Mouse.x, Mouse.y);
                    if (dist > 40) continue;
                    this.pullingObject = o;
                    break;
                }
            }
        } else if (Mouse.down) {
            if (this.pullingObject) {
                var o = this.pullingObject;
                o.beingPulled = true;
                o.x = Mouse.x;
                o.y = Mouse.y;
                o.targetX = Mouse.x;
                o.targetY = Mouse.y;
                var left = this.objects.find(e => e.order === o.order - 1);
                var right = this.objects.find(e => e.order === o.order + 1);
                if (left && o.x < left.x) {
                    [o.order, left.order] = [left.order, o.order];
                }
                if (right && o.x > right.x) {
                    [o.order, right.order] = [right.order, o.order];
                }
            }
        } else {
            if (this.pullingObject) {
                this.pullingObject.beingPulled = false;
                this.pullingObject = false;
            }
        }
        this.setObjectTargets();
    }
    draw() {
        for (var o of this.objects) {
            o.draw();
        }
    }
    checkWin() {
        if (this.pullingObject) return false;
        var incrementing = true;
        var decrementing = true;
        for (var n = 1; n < this.objects.length; n++) {
            var o1 = this.objects[n];
            var o2 = this.objects[n - 1];
            if (o1.sortedOrder > o2.sortedOrder) decrementing = false;
            if (o1.sortedOrder < o2.sortedOrder) incrementing = false;
        }
        if (incrementing || decrementing) return true;
    }
    checkLose() {
    }
    lose() {
    }
    updateLose() {
    }
    win() {
    }
    updateWin() {
        this.setObjectTargets();
    }
}