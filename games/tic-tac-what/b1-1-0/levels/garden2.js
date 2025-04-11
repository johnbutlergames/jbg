NamedLevels["garden2"] = class {
    constructor() {
        this.level = new GardenLevel({
            types: ["X", "O", "Square", "Triangle"],
            counts: [
                { type: "X", count: 4 },
                { type: "O", count: 4 },
                { type: "Square", count: 4 },
                { type: "Triangle", count: 4 },
            ],
            scale: 0.55
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