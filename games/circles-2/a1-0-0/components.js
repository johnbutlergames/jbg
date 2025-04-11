class GameObject {
    constructor(data, exit) {
        if(exit) return;
        if (data && data.type == "circle platform") {
            return new CirclePlatform(data);
        } else if (data && data.type == "player") {
            return new Player(data);
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
}

class CirclePlatform extends GameObject {
    constructor(data) {
        super(false, true);
        this.type = "circle platform";
        this.shape = "circle";
        this.x = data.x;
        this.y = data.y;
        this.r = data.r;
        this.dynamic = false;
        this.sprite = new CircleSprite();
        this.sprite.linkObject(this);
    }
}