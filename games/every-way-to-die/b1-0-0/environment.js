class Environment {
    constructor() {
        this.objects = [];
    }
    update() {
        let viewport = game.cam.viewport;
        let viewportHitbox = { x: viewport.x - 200, y: viewport.y - 200, w: viewport.w + 400, h: viewport.h + 400 };
        let viewportHitboxSmall = { x: viewport.x + 200, y: viewport.y + 200, w: viewport.w - 400, h: viewport.h - 400 };
        for (let o of this.objects) {
            o.onScreen = blocksColliding(o.hitbox, viewportHitbox);
            o.onSmallScreen = blocksColliding(o.hitbox, viewportHitboxSmall);
            o.update();
        }
        updateCollisions(this.objects);
        this.objects = this.objects.filter(e => !e.delete);
    }
    draw() {
        for (let o of this.objects) {
            if (!o.onScreen) continue;
            o.drawBackground();
        }
        for (let o of this.objects) {
            if (!o.onScreen) continue;
            o.draw();
        }
        for (let o of this.objects) {
            if (!o.onScreen) continue;
            o.drawForeground();
        }
    }
}