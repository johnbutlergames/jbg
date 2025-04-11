NamedLevels["platformer1"] = class {
    constructor() {
        this.level = new PlatformingLevel({
            objects: [
                { type: "line", x1: -600, y1: -300, x2: -600, y2: -2000 },
                { type: "line", x1: -600, y1: -300, x2: -500, y2: -50 },
                { type: "line", x1: -300, y1: 150, x2: -500, y2: -50 },
                { type: "line", x1: -300, y1: 150, x2: 500, y2: 150 },
                { type: "line", x1: 700, y1: 50, x2: 500, y2: 150 },
                { type: "line", x1: 700, y1: 50, x2: 850, y2: 100 },
                { type: "line", x1: 900, y1: 90, x2: 850, y2: 100 },
                { type: "line", x1: 900, y1: 90, x2: 1000, y2: 130 },
                { type: "line", x1: 1400, y1: 130, x2: 1000, y2: 130 },
                { type: "line", x1: 1400, y1: 130, x2: 1600, y2: 0 },
                { type: "line", x1: 1900, y1: 300, x2: 1600, y2: 0 },
                { type: "line", x1: 1900, y1: 300, x2: 2400, y2: 300 },
                { type: "line", x1: 2400, y1: 200, x2: 2400, y2: 300 },
                { type: "line", x1: 2400, y1: 200, x2: 3000, y2: 200 },
                { type: "line", x1: 3000, y1: -1200, x2: 3000, y2: 200 },
                { type: "finish", x: 2950, y: 60, angle: 0 }
            ]
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