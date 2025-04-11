Levels[9] = class {
    constructor() {
        var o = new FillBoard();
        o.x = 500;
        o.y = 500;
        o.w = 6;
        o.h = 6;
        o.scale = 0.7;
        o.addObstacle(1,1);
        o.addObstacle(1,5);
        o.addObstacle(3,4);
        o.addObstacle(4,4);
        o.addObstacle(4,3);
        o.updatePlaceCoordinates();
        this.board = o;
        var o = new TicTacToePlacing("X");
        this.placingObject = o;
    }
    update() {
        var click = this.board.updatePlacing(this.placingObject);
        if (click) {
            this.board.addObject(this.placingObject);
            this.placingObject = new TicTacToePlacing("X");
        }

        this.board.update();
    }
    draw() {
        this.board.draw();

        if (this.won) return;
        if (this.lost) return;
        if (this.placingObject.positioned) {
            ctx.save();
            ctx.globalAlpha = 0.5;
            this.placingObject.draw();
            ctx.restore();
        }
    }
    checkWin() {
        return this.board.checkFill();
    }
    checkLose() {
        return this.board.checkStuck();
    }
    lose() {
    }
    updateLose() {
        this.board.update();
    }
    win() {
        this.board.fillingAnimation = true;
    }
    updateWin() {
        this.board.update();
    }
}