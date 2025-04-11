NamedLevels["flappyBird1"] = class {
    constructor() {
        this.player = new FlappyBirdPlayer();
        this.cam = new FlappyBirdCam();
        this.cam.player = this.player;
        this.level = new PipeLevel();
        this.level.setPipes([
            { x: 700, y: 500, gap: 700 },
            { x: 1200, y: 400, gap: 600 },
            { x: 1700, y: 700, gap: 500 },
            { x: 2200, y: 400, gap: 500 },
            { x: 2700, y: 500, gap: 500 },
            { x: 3200, y: 200, gap: 400 },
            { x: 3800, y: 800, gap: 400 },
        ]);
    }
    update() {
        this.player.update();
        this.cam.update();
        this.level.update();
    }
    draw() {
        ctx.save();
        this.cam.alignViewport();

        this.player.draw();
        this.level.draw();

        ctx.restore();
    }
    checkWin() {
        return this.player.x > 4100;
    }
    checkLose() {
        return this.player.checkPipeCollisions(this.level.pipes);
    }
    lose() {
    }
    updateLose() {
    }
    win() {
    }
    updateWin() {
        this.player.update();
    }
}