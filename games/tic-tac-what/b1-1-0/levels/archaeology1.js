NamedLevels["archaeology1"] = class {
    constructor() {
        this.level = new ArchaeologyLevel();
        this.winTime = 0;
    }
    update() {
        if (!this.winTime) this.level.update();
        if (this.level.checkWin()) {
            this.winTime++;
        }
    }
    draw() {
        this.level.draw();
    }
    checkWin() {
        return this.winTime == 100;
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
    }
}