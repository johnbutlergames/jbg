Levels[14] = class {
    constructor() {
        this.level = new GardenLevel({
            types: ["X"],
            counts: [
                { type: "X", count: 4 }
            ],
            scale: 1
        });
    }
    update() {
        this.level.update();
    }
    draw() {
        this.level.draw();
    }
    checkWin() {
        return this.level.checkWin();
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
        this.level.update();
    }
}