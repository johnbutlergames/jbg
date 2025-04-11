NamedLevels["fillSort2"] = class {
    constructor() {
        this.level = new FillSortLevel([
            "STOX  ",
            "OXST  ",
            "XXOOT ",
            "SSTSO ",
            "XSTT  ",
            "XO    "
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