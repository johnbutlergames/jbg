NamedLevels["maze1"] = class {
    constructor() {
        this.level = new MazeLevel();
        this.level.setMaze([
            "OOOOOOOOO",
            "OX      O",
            "OOOOOOO O",
            "    O O O",
            "OOO O O O",
            "O   O O O",
            "O OOO O O",
            "O       O",
            "OOOOOOOOO",
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