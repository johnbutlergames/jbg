class Camera {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.zoom = 0.5;
        this.follow = { x: 0.03, y: 0.03 };
        this.target = { x: 0, y: 0 };
        this.deathAnimationOrigin = null;
    }
    update() {
        let player = game.env.objects.find(e => e.type == "player");
        if (player) {
            this.target = { x: player.cx, y: player.cy - 200 };
            let dist = distTo(this.x, this.y, this.target.x, this.target.y);
            let follow = easeInOut((dist - 200) / 300) * 0.07 + 0.03;
            this.follow = { x: follow, y: follow };
        } else if (!game.level.levelTransitionAnimation) {
            if (game.level.deathAnimation === 1 || !this.deathAnimationOrigin) this.deathAnimationOrigin = { x: this.target.x, y: this.target.y };
            let a = easeInOut((game.level.deathAnimation - 110) / 50);
            this.target = {
                x: this.deathAnimationOrigin.x * (1 - a) + game.level.spawnPoint.x * a,
                y: this.deathAnimationOrigin.y * (1 - a) + game.level.spawnPoint.y * a
            }
            this.follow = { x: 0.03 + 0.2 * a, y: 0.03 + 0.2 * a };
        }

        this.x = this.x * (1 - this.follow.x) + this.target.x * this.follow.x;
        this.y = this.y * (1 - this.follow.y) + this.target.y * this.follow.y;
    }
    alignViewport() {
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.scale(this.zoom, this.zoom);
        ctx.translate(-this.x, -this.y);
    }
    localToGlobal(x, y) {
        x -= canvas.width / 2;
        y -= canvas.height / 2;
        x /= this.zoom;
        y /= this.zoom;
        x += this.x;
        y += this.y;
        return { x, y };
    }
    globalToLocal(x, y) {
        x -= this.x;
        y -= this.y;
        x *= this.zoom;
        y *= this.zoom;
        x += canvas.width / 2;
        y += canvas.height / 2;
        return { x, y };
    }
    get viewport() {
        let topLeft = this.localToGlobal(0, 0);
        let bottomRight = this.localToGlobal(canvas.width, canvas.height);
        let rect = { x1: topLeft.x, y1: topLeft.y, x2: bottomRight.x, y2: bottomRight.y };
        rect.x = rect.x1;
        rect.y = rect.y1;
        rect.w = rect.x2 - rect.x1;
        rect.h = rect.y2 - rect.y1;
        return rect;
    }
}