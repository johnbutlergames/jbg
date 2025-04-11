NamedLevels["speed1"] = class {
    constructor() {
        var o = new Board();
        o.w = 5;
        o.h = 5;
        o.x = 500;
        o.y = 500;
        o.scale = 0.8;
        this.board = o;
        var o = new TicTacToePlacing("X");
        this.placingObject = o;
        this.won = false;
        this.wins = [];
        this.nextAIPlacement = 50;
        this.AIReload = 100;
        this.placedDuringAITurn = 0;
    }
    update() {
        this.updatePlacing();
        if (this.board.objects.length > 0) {
            this.nextAIPlacement--;
            if (this.nextAIPlacement <= 0) {
                if (this.placedDuringAITurn === 1) this.AIReload += 10;
                if (this.placedDuringAITurn === 0) this.AIReload += 20;
                this.placedDuringAITurn = 0;
                this.nextAIPlacement = this.AIReload;
                this.updateAI();
            }
        }

        this.board.update();
    }
    updatePlacing() {
        var click = this.board.updatePlacing(this.placingObject);
        if (click) {
            this.board.addObject(this.placingObject);
            this.placingObject = new TicTacToePlacing("X");
            this.placedDuringAITurn++;
            if (this.placedDuringAITurn >= 3) this.AIReload -= 20;
            this.nextAIPlacement -= this.placedDuringAITurn * 10;
        }
    }
    updateAI() {
        var ai = new OpponentAI(this.board);
        ai.winLength = 5;
        ai.makeMove();
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
        var wins = this.board.detectWins(5);
        wins = wins.filter(e => e.type == "X");
        this.wins = wins;
        if (wins.length) {
            return true;
        }
        return false;
    }
    checkLose() {
        var losses = this.board.detectWins(5);
        losses = losses.filter(e => e.type == "O");
        this.losses = losses;
        if (losses.length) {
            return true;
        }
        for (var x = 0; x < 5; x++) {
            for (var y = 0; y < 5; y++) {
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