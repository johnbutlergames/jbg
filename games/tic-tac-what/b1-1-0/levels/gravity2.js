NamedLevels["gravity2"] = class {
    constructor() {
        var o = new GravityBoard();
        o.x = 500;
        o.y = 500;
        o.w = 7;
        o.h = 6;
        o.scale = 0.6;
        this.board = o;
        var o = new TicTacToePlacing("X");
        this.placingObject = o;
        this.won = false;
        this.wins = [];
        this.aiTime = 0;
    }
    update() {
        if (!this.board.animateFall) {
            if (this.aiTime) {
                this.aiTime--;
                if (this.aiTime === 0) {
                    this.updateAI();
                }
            } else {
                this.updatePlacing();
            }
        }

        this.board.update();
    }
    updatePlacing() {
        var click = this.board.updatePlacing(this.placingObject);
        if (click) {
            this.board.addObject(this.placingObject);
            this.placingObject = new TicTacToePlacing("X");
            this.aiTime = 50;
        }
    }
    updateAI() {
        var ai = new ScoreFourOpponentAI(this.board);
        ai.makeMove();
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
        var wins = this.board.detectWins(4);
        wins = wins.filter(e => e.type == "X");
        this.wins = wins;
        if (wins.length) {
            return true;
        }
        return false;
    }
    checkLose() {
        var losses = this.board.detectWins(4);
        losses = losses.filter(e => e.type == "O");
        this.losses = losses;
        if (losses.length) {
            return true;
        }
        for (var x = 0; x < this.board.w; x++) {
            for (var y = 0; y < this.board.h; y++) {
                if (this.board.findObject(x, y) === undefined) return false;
            }
        }
        return true;
    }
    lose() {
        this.lost = true;
        this.board.plotWinCoordinates(this.board.findWinCoordinates(this.losses), "O");
        this.board.plotWinLines(this.losses);
    }
    updateLose() {
        this.board.update();
    }
    win() {
        this.won = true;
        this.board.plotWinCoordinates(this.board.findWinCoordinates(this.wins), "X");
        this.board.plotWinLines(this.wins);
    }
    updateWin() {
        this.board.update();
    }
}