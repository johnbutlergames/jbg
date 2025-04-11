NamedLevels["maze2"] = class {
    constructor() {
        this.level = new MazeLevel();
        this.level.setMaze([
            "OOOOOOOOOOOOO OOOOOOOOOOOOO",
            "O O         O   O   O     O",
            "O O O OOOOO O O OOO O OOO O",
            "O   O O   O   O   O O   O O",
            "O OOO O O OOOOOOO O OOOOO O",
            "O   O   O       O   O     O",
            "OOO OOOOOOO O OOOOOOO OOO O",
            "O O O   O   O O     O   O O",
            "O O O O O OOOOO OOO O O OOO",
            "O     O O   O     O   O   O",
            "OOOOOOOOO OOO O OOOOOOOOO O",
            "O       O   O O     O   O O",
            "O OOOOO O O O OOOOOOO O O O",
            "O O     O O O O     O O O O",
            "O O OOOOO OOO O OOO O O O O",
            "O O       O   O O     O   O",
            "OOO O OOOOO OOO O OOO OOOOO",
            "O   O O     OX  O   O O   O",
            "O OOO OOO OOO OOOOO O O O O",
            "O   O     O   O   O O O O O",
            "OOO OOOOOOO OOOOO O OOO O O",
            "O   O     O O   O O     O O",
            "O OOOOOOO O O O O OOOOOOO O",
            "O O       O   O O O       O",
            "O O OOOOO OOOOO O O O O OOO",
            "O   O       O   O   O O   O",
            "OOOOOOOOOOOOOOOOOOOOOOOOOOO",
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