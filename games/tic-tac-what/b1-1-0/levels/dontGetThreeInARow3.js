NamedLevels["dontGetThreeInARow3"] = class {
    constructor() {
        var o = new Board();
        o.x = 500;
        o.y = 500;
        o.w = 10;
        o.h = 10;
        o.scale = 0.4;
        o.setGridAlignedTicTacToeObjects([{ x: 8, y: 9 }, { x: 8, y: 8 }, { x: 9, y: 8 }, { x: 9, y: 9 }, { x: 9, y: 6 }, { x: 9, y: 5 }, { x: 8, y: 5 }, { x: 8, y: 4 }, { x: 9, y: 3 }, { x: 9, y: 2 }, { x: 7, y: 6 }, { x: 4, y: 7 }, { x: 5, y: 7 }, { x: 5, y: 8 }, { x: 3, y: 8 }, { x: 3, y: 9 }, { x: 4, y: 9 }, { x: 6, y: 5 }, { x: 5, y: 5 }, { x: 6, y: 4 }, { x: 5, y: 3 }, { x: 5, y: 2 }, { x: 6, y: 2 }, { x: 8, y: 2 }, { x: 8, y: 1 }, { x: 9, y: 0 }, { x: 6, y: 1 }, { x: 4, y: 0 }, { x: 3, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 2, y: 1 }, { x: 0, y: 2 }, { x: 2, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 3, y: 4 }, { x: 3, y: 5 }, { x: 2, y: 8 }, { x: 1, y: 9 }, { x: 0, y: 9 }, { x: 0, y: 8 }, { x: 6, y: 8 }, { x: 0, y: 3 }]);
        for (var n = 0; n < 2; n++) {
            o.objects.splice(Math.floor(Math.random() * o.objects.length), 1);
        }
        this.board = o;
        var o = new TicTacToePlacing("X");
        this.placingObject = o;

        this.counts = [];
        var o = new ObjectCount();
        o.type = "X";
        o.amount = 1;
        o.x = 500;
        o.y = 900;
        this.counts.push(o);
    }
    update() {
        for (var o of this.counts) o.update();

        var click = this.board.updatePlacing(this.placingObject);
        if (click) {
            this.board.addObject(this.placingObject);
            this.placingObject = new TicTacToePlacing("X");
            this.counts[0].count++;
        }

        this.board.update();
    }
    draw() {
        this.board.draw();
        for (var o of this.counts) o.draw();

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
        if (losses.length) return false;
        for (var count of this.counts) {
            if (count.amount !== count.count) return false;
        }
        return true;
    }
    checkLose() {
        var losses = this.board.detectWins(3);
        this.losses = losses;
        if (losses.length) {
            return true;
        }
        return false;
    }
    lose() {
        this.board.plotWinCoordinates(this.board.findWinCoordinates(this.losses), this.placingType);
        this.board.plotWinLines(this.losses);
        this.lost = true;
    }
    updateLose() {
        this.board.update();
    }
    win() {
    }
    updateWin() {
        for (var o of this.counts) o.update();
        this.board.update();
    }
}