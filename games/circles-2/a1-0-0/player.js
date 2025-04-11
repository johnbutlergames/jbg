class Player extends GameObject {
    constructor(data) {
        super(false, true);
        this.type = "player";
        this.shape = "circle";
        this.dynamic = true;
        this.x = data.x;
        this.y = data.y;
        this.r = data.r;
        this.collisions = [];
        this.residualCollisionStrength = 0;
        this.xmove = data.xmove || 0;
        this.ymove = data.ymove || 0;
        this.verticalSpeedLog = [];
        this.coyoteTime = data.coyoteTime || 0;
        this.sprite = new PlayerSprite();
        this.sprite.linkObject(this);
        this.controller = new PlayerMovementController();
        this.controller.linkObject(this);
    }
    loadInput(input) {
        this.controller.loadInput(input);
    }
    update() {
        this.controller.update();
    }
}

class PlayerMovementController {
    constructor() {
        this.controller = new PlayerInputController();
        this.object = false;
    }
    loadInput(input) {
        this.controller.loadInput(input);
    }
    linkObject(data) {
        this.object = data;
    }
    update() {
        this.controller.update();

        if (!this.object) return;
        var o = this.object;

        var left = this.controller.left;
        var right = this.controller.right;
        var up = this.controller.up;
        var down = this.controller.down;
        if (left) {
            o.xmove -= 0.3;
        }
        if (right) {
            o.xmove += 0.3;
        }

        if (o.collisions.length > 0) {
            o.coyoteTime = 15;
        } else {
            o.coyoteTime--;
            o.coyoteTime = Math.max(o.coyoteTime, 0);
            if (!o.coyoteTime) this.lastDownwardsSpeed = 0;
        }

        var maxVerticalSpeed = Math.max(...o.verticalSpeedLog);
        var downwardsJumpBoost = maxVerticalSpeed > 9 ? maxVerticalSpeed * 0.2 : 0;
        var jumpStrength = -7 - downwardsJumpBoost;
        var downStrength = 1;
        if (o.ymove > 20) {
            downStrength /= 1 + (o.ymove - 20) * 0.5;
        }
        if (o.collisions.length > 1) {
            jumpStrength /= Math.max(o.residualCollisionStrength * 0.3, 1);
            downStrength /= Math.max(o.residualCollisionStrength, 1);
        }
        if (up) {
            if (o.collisions.length > 0) {
                o.ymove = jumpStrength;
                o.coyoteTime = 0;
                var circle = o.collisions[0];
                var dir = dirTo(o.x, o.y, circle.x, circle.y);
                var move = distToMove(0, dir);
                o.xmove += move.x;
                o.ymove += move.y;
            } else if (o.coyoteTime) {
                o.ymove = jumpStrength;
                o.coyoteTime = 0;
            } else {
                if (o.ymove < 0) {
                    o.ymove -= 0.05;
                } else {
                    o.ymove -= 0.02;
                }
            }
        }
        if (down && !up) {
            if (o.ymove < 0) {
                o.ymove += downStrength;
            } else {
                o.ymove += downStrength * 0.5;
            }
        } else if (down && up) {
            if (o.ymove < 0) {
                o.ymove += downStrength * 0.2;
            } else {
                o.ymove += downStrength * 0.1;
            }
        }
        o.ymove += 0.17;
        o.xmove *= 0.95;
        o.ymove *= 0.98;
        o.verticalSpeedLog.unshift(o.ymove);
        if (o.verticalSpeedLog.length > 20) o.verticalSpeedLog.pop();
    }
}

class PlayerInputController {
    constructor() {
        this.input = false;
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
    }
    loadInput(input) {
        this.input = input;
    }
    update() {
        this.left = this.input.down("left");
        this.right = this.input.down("right");
        this.up = this.input.down("up");
        this.down = this.input.down("down");
    }
}