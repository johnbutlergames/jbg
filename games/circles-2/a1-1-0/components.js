class GameObject {
    constructor(data, exit) {
        if (exit) return;
        if (data && data.type == "circle platform") {
            return new CirclePlatform(data);
        } else if (data && data.type == "rectangle platform") {
            return new RectanglePlatform(data);
        } else if (data && data.type == "player") {
            return new Player(data);
        } else if (data && data.type == "dynamic circle") {
            return new DynamicCircle(data);
        }
        this.sprite = new Sprite();
        this.sprite.linkObject(this);
    }
    loadCanvas(ctx) {
        this.ctx = ctx;
        this.sprite.loadCanvas(ctx);
    }
    loadInput() {
    }
    update() {
    }
    draw() {
        this.sprite.draw();
    }
    drawBackground() {
        this.sprite.drawBackground();
    }
    drawForeground() {
        this.sprite.drawForeground();
    }
}

class CirclePlatform extends GameObject {
    constructor(data) {
        super(false, true);
        this.type = "circle platform";
        this.shape = "circle";
        this.x = 0;
        this.y = 0;
        this.r = 0;
        this.dynamic = false;
        this.angle = 0;

        for (var key of Object.keys(data)) {
            this[key] = data[key];
        }

        this.sprite = new CircleSprite();
        this.sprite.linkObject(this);
    }
}

class DynamicCircle extends GameObject {
    constructor(data) {
        super(false, true);
        this.type = "dynamic circle";
        this.shape = "circle";
        this.x = 0;
        this.y = 0;
        this.r = 0;
        this.xmove = 0;
        this.ymove = 0;
        this.dynamic = true;
        this.angle = 0;

        for (var key of Object.keys(data)) {
            this[key] = data[key];
        }

        this.sprite = new CircleSprite();
        this.sprite.linkObject(this);
    }
}

class RectanglePlatform extends GameObject {
    constructor(data) {
        super(false, true);
        this.type = "rectangle platform";
        this.shape = "rectangle";
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
        this.dynamic = false;
        this.angle = 0;
        this.bounceEnergy = 0;
        //this.jumpable = false;
        this.slippery = true;

        console.log(Object.keys(data));
        for (var key of Object.keys(data)) {
            this[key] = data[key];
        }

        this.r = distTo(0, 0, this.w / 2, this.h / 2);
        this.sprite = new RectangleSprite();
        this.sprite.linkObject(this);
    }
}