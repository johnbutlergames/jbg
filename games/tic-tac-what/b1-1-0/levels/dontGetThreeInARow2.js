NamedLevels["dontGetThreeInARow2"] = class {
    constructor() {
        this.buttons = [];
        var o = new ChoosePieceTypeButton("X");
        o.selected = true;
        o.x = 420;
        o.y = 100;
        this.buttons.push(o);
        var o = new ChoosePieceTypeButton("O");
        o.x = 580;
        o.y = 100;
        this.buttons.push(o);

        this.placingType = "X";

        var o = new Board();
        o.x = 500;
        o.y = 500;
        o.w = 6;
        o.h = 6;
        o.scale = 0.6;
        o.setGridAlignedTicTacToeObjects([
            { x: 0, y: 0, type: "X" },
            { x: 1, y: 0, type: "X" },
            { x: 3, y: 0, type: "X" },
            { x: 3, y: 1, type: "X" },
            { x: 2, y: 2, type: "X" },
            { x: 5, y: 0, type: "X" },
            { x: 5, y: 1, type: "X" },
            { x: 4, y: 3, type: "X" },
            { x: 3, y: 4, type: "X" },
            { x: 4, y: 5, type: "X" },
            { x: 1, y: 5, type: "X" },
            { x: 0, y: 2, type: "X" },
            { x: 4, y: 0, type: "O" },
            { x: 0, y: 1, type: "O" },
            { x: 1, y: 1, type: "O" },
            { x: 3, y: 2, type: "O" },
            { x: 3, y: 3, type: "O" },
            { x: 5, y: 3, type: "O" },
            { x: 3, y: 5, type: "O" },
            { x: 5, y: 5, type: "O" },
            { x: 2, y: 4, type: "O" },
            { x: 1, y: 4, type: "O" },
            { x: 0, y: 5, type: "O" },
            { x: 0, y: 3, type: "O" }
        ]);
        this.board = o;
        var o = new TicTacToePlacing("X");
        this.placingObject = o;

        this.counts = [];
        var o = new ObjectCount();
        o.type = "X";
        o.amount = 4;
        o.x = 500;
        o.y = 850;
        this.counts.push(o);
        var o = new ObjectCount();
        o.type = "O";
        o.amount = 4;
        o.x = 500;
        o.y = 900;
        this.counts.push(o);
    }
    update() {
        for (var o of this.buttons) o.update();
        for (var o of this.counts) o.update();
        if (this.buttons[0].clicked) {
            this.buttons[1].selected = false;
            this.placingType = "X";
            this.placingObject.color = "red";
            this.placingObject.type = this.placingType;
        }
        if (this.buttons[1].clicked) {
            this.buttons[0].selected = false;
            this.placingType = "O";
            this.placingObject.color = "blue";
            this.placingObject.type = this.placingType;
        }

        var click = this.board.updatePlacing(this.placingObject);
        if (click) {
            this.board.addObject(this.placingObject);
            this.placingObject = new TicTacToePlacing(this.placingType);
            if (this.placingType == "X") {
                this.counts[0].count++;
            } else if (this.placingType == "O") {
                this.counts[1].count++;
            }
        }

        this.board.update();
    }
    draw() {
        this.board.draw();
        for (var o of this.buttons) o.draw();
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
        for (var o of this.buttons) o.update();
        for (var o of this.counts) o.update();
        this.board.update();
    }
}