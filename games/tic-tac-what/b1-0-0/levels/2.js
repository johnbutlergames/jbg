Levels[1] = class {
    constructor() {
        var o = new Board();
        o.x = 500;
        o.y = 500;
        this.board = o;
        var o = new TicTacToePlacing("X");
        this.placingObject = o;
        this.placeCount = 1;
        this.won = false;
        this.wins = [];
    }
    update() {
        var click = this.board.updatePlacing(this.placingObject);
        if (click) {
            this.board.addObject(this.placingObject);
            this.placeCount++;
            if (this.placeCount % 2 === 1) {
                this.placingObject = new TicTacToePlacing("X");
            } else {
                this.placingObject = new TicTacToePlacing("O");
            }
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
        var wins = this.board.detectWins(3);
        wins = wins.filter(e => e.type == "X");
        this.wins = wins;
        if (wins.length) {
            return true;
        }
        return false;
    }
    checkLose() {
        var losses = this.board.detectWins(3);
        losses = losses.filter(e => e.type == "O");
        this.losses = losses;
        if (losses.length) {
            return true;
        }
        for (var x = 0; x < 3; x++) {
            for (var y = 0; y < 3; y++) {
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