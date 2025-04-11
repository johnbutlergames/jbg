NamedLevels["fillSort1"] = class {
    constructor() {
        this.level = new FillSortLevel([
            "XOOXO ",
            "OXXX  ",
            "OXO   "
        ]);
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
        this.level.won = true;
    }
    updateWin() {
        this.level.update();
    }
}