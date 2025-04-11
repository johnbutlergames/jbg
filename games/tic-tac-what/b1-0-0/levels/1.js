Levels[0] = class {
    constructor() {
        var o = new Board();
        o.x = 500;
        o.y = 500;
        this.board = o;
        var o = new TicTacToePlacing("X");
        this.placingObject = o;
        this.won = false;
        this.wins = [];
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
        if (this.placingObject.positioned) {
            ctx.save();
            ctx.globalAlpha = 0.5;
            this.placingObject.draw();
            ctx.restore();
        }
    }
    checkWin() {
        var wins = this.board.detectWins(3);
        this.wins = wins;
        if (wins.length) {
            return true;
        }
        return false;
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