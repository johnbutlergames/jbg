NamedLevels["dontGetThreeInARow1"] = class {
    constructor() {
        var o = new Board();
        o.x = 500;
        o.y = 500;
        this.board = o;
        var o = new TicTacToePlacing("X");
        this.placingObject = o;
        var o = new ObjectCount();
        o.x = 500;
        o.y = 850;
        this.objectCount = o;
    }
    update() {
        var click = this.board.updatePlacing(this.placingObject);
        if (click) {
            this.board.addObject(this.placingObject);
            this.placingObject = new TicTacToePlacing("X");
            this.objectCount.count++;
        }

        this.board.update();
        this.objectCount.update();
    }
    draw() {
        this.board.draw();
        this.objectCount.draw();

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
        var losses = this.board.detectWins(3);
        losses = losses.filter(e => e.type == "X");
        if (!losses.length && this.board.objects.length === 6) return true;
        return false;
    }
    checkLose() {
        var losses = this.board.detectWins(3);
        losses = losses.filter(e => e.type == "X");
        this.losses = losses;
        if (losses.length) {
            return true;
        }
        return false;
    }
    lose() {
        this.board.plotWinCoordinates(this.board.findWinCoordinates(this.losses), "X");
        this.board.plotWinLines(this.losses);
        this.lost = true;
    }
    updateLose() {
        this.board.update();
    }
    win() {
    }
    updateWin() {
        this.board.update();
        this.objectCount.update();
    }
}