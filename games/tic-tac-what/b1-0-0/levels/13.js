Levels[12] = class {
    constructor() {
        this.maze = new RotateMaze();
        this.maze.setObjects([
            { type: "line", x1: -150, y1: -50, x2: 150, y2: -50 },
            { type: "line", x1: -150, y1: 50, x2: 150, y2: 50 },
            { type: "line", x1: -50, y1: -150, x2: -50, y2: 150 },
            { type: "line", x1: 50, y1: -150, x2: 50, y2: 150 },
            { type: "line", x1: -300, y1: -300, x2: 300, y2: -300 },
            { type: "line", x1: -300, y1: -300, x2: -300, y2: 300 },
            { type: "line", x1: 300, y1: -300, x2: 300, y2: 300 },
            { type: "line", x1: -300, y1: 300, x2: -100, y2: 300 },
            { type: "line", x1: 100, y1: 300, x2: 300, y2: 300 },
            { type: "line", x1: -400, y1: 400, x2: 400, y2: 400 },
            { type: "line", x1: -400, y1: -400, x2: -400, y2: 400 },
            { type: "line", x1: 400, y1: -400, x2: 400, y2: 400 },
            { type: "line", x1: -400, y1: -400, x2: -100, y2: -400 },
            { type: "line", x1: 100, y1: -400, x2: 400, y2: -400 },
        ]);
        this.maze.player.y -= 100;
    }
    update() {
        this.maze.update();
    }
    draw() {
        this.maze.draw();
    }
    checkWin() {
        return this.maze.checkWin();
    }
    checkLose() {
    }
    lose() {
    }
    updateLose() {
        this.maze.update();
    }
    win() {
    }
    updateWin() {
        this.maze.update();
    }
}