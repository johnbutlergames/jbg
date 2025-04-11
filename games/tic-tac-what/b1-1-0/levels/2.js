NamedLevels["2"] = class {
    constructor() {
        var o = new Board();
        o.x = 500;
        o.y = 500;
        this.board = o;
        var o = new TicTacToePlacing("X");
        this.placingObject = o;
        this.won = false;
        this.wins = [];
        this.aiTime = 0;
    }
    update() {
        if (this.aiTime) {
            this.aiTime--;
            if (this.aiTime === 0) {
                this.updateAI();
            }
        } else {
            this.updatePlacing();
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
        if (this.board.objects.length === 1) {
            var grid = this.board.createObjectGrid();
            var cors = [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 2 }];
            cors = cors.filter(e => !grid[e.y][e.x]);
            var o = new TicTacToePlacing("O");
            var cor = cors[Math.floor(Math.random() * cors.length)];
            o.relativeX = cor.x;
            o.relativeY = cor.y;
            this.board.addObject(o);
        } else {
            var ai = new OpponentAI(this.board);
            ai.makeMove();
        }
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