class InputTracker {
    constructor() {
        this.inputs = [];
        this.inputs.push(new KeyTracker("left", [37, 65]));
        this.inputs.push(new KeyTracker("right", [39, 68]));
        this.inputs.push(new KeyTracker("up", [38, 87]));
        this.inputs.push(new KeyTracker("down", [40, 83]));
    }
    update() {
        for (var o of this.inputs) o.update();
    }
    down(action) {
        var input = this.inputs.find(e => e.name == action);
        if (!input) return false;
        return input.down;
    }
    last(action) {
        var input = this.inputs.find(e => e.name == action);
        if (!input) return Infinity;
        return input.last;
    }
    hold(action) {
        var input = this.inputs.find(e => e.name == action);
        if (!input) return 0;
        return input.hold;
    }
    lastHold(action) {
        var input = this.inputs.find(e => e.name == action);
        if (!input) return 0;
        return input.lastHold;
    }
}

class KeyTracker {
    constructor(name, keys) {
        this.name = name;
        this.keys = keys;
        this.down = false;
        this.last = Infinity;
        this.hold = 0;
        this.lastHold = 0;
    }
    update() {
        var pressing = this.keys.some(e => Keys.keys[e]);
        if (pressing) {
            this.down = true;
            this.last = 0;
            this.hold++;
            this.lastHold = Math.max(this.lastHold, this.hold);
        } else {
            this.down = false;
            this.last++;
            this.lastHold = this.hold;
            this.hold = 0;
        }
    }
}