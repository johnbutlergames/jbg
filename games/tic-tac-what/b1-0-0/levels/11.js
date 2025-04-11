Levels[10] = class {
    constructor() {
        var boards = [];
        for (var x = 0; x < 3; x++) {
            var o = new Board();
            o.x = 500 + (x - 1) * 300;
            o.y = 450;
            o.scale = 0.5;
            boards.push(o);
        }
        var o = new BoardGroup();
        o.boards = boards;
        this.boardGroup = o;

        var o = new TicTacToePlacing("X");
        this.placingObject = o;

        this.symbols = [
            [
                [1, 1, 1],
                [0, 1, 0],
                [0, 1, 0]
            ],
            [
                [1, 0, 0],
                [1, 0, 0],
                [1, 1, 1]
            ],
            [
                [1, 0, 1],
                [0, 1, 0],
                [1, 0, 1]
            ],
        ].map(function (e, i) {
            var symbol = new Symbol(e);
            symbol.x = (i - 1) * 100 + 500;
            symbol.y = 800;
            symbol.scale = 1.5;
            return symbol;
        })
    }
    update() {
        for (var o of this.symbols) o.update();

        var click = this.boardGroup.updatePlacing(this.placingObject);
        if (click) {
            this.boardGroup.addObject(this.placingObject);
            this.placingObject = new TicTacToePlacing("X");
        }

        for (var n = 0; n < this.boardGroup.boards.length; n++) {
            var board = this.boardGroup.boards[n];
            if (board.locked) continue;
            var wins = board.detectWins(3);
            if (wins.length) {
                board.locked = true;
                board.plotWinCoordinates(board.findWinCoordinates(wins), "X");
                board.plotWinLines(wins);
                this.symbols[n].click();
                if (!this.symbols[n].equivalentBoard(board.createObjectGrid())) {
                    this.lost = true;
                }
            }
        }
        if (!this.lost) {
            if (this.boardGroup.boards.every(e => e.locked)) this.won = true;
        }

        this.boardGroup.update();
    }
    draw() {
        for (var o of this.symbols) o.draw();
        this.boardGroup.draw();

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
        return this.won;
    }
    checkLose() {
        return this.lost;
    }
    lose() {
    }
    updateLose() {
        for (var o of this.symbols) o.update();
        this.boardGroup.update();
    }
    win() {
    }
    updateWin() {
        for (var o of this.symbols) o.update();
        this.boardGroup.update();
    }
}