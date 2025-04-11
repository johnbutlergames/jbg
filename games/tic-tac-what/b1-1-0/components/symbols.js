class BoardGroup {
    constructor() {
        this.boards = [];
        this.placedBoard = false;
        this.placedBoardIndex = false;
    }
    update() {
        for (var o of this.boards) o.update();
    }
    draw() {
        for (var o of this.boards) o.draw();
    }
    updatePlacing(o) {
        o.update();
        o.x = Mouse.x;
        o.y = Mouse.y;
        o.positioned = false;
        for (var n = 0; n < this.boards.length; n++) {
            var board = this.boards[n];
            if (board.locked) continue;
            if (!board.globalCoordinateOnGrid(o.x, o.y)) continue;
            var click = board.updatePlacing(o);
            if (click) {
                this.placedBoard = board;
                this.placedBoardIndex = n;
                return true;
            }
        }
        return false;
    }
    addObject(o) {
        this.placedBoard.addObject(o);
        this.placingObject = new TicTacToePlacing("X");
    }
}

class Symbol {
    constructor(arr) {
        this.connectionLength = 3;
        this.lines = [];
        this.type = "X";
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.size = 20;
        this.scale = 1;
        this.animatedScale = 1;
        this.clickTime = 0;
        this.lineWidth = 10;
        this.color = "black";
        this.calculateLines(arr);
    }
    calculateLines(arr) {
        this.arr = this.translateArr(arr);
        this.width = arr[0]?.length || 0;
        this.height = arr.length;
        var board = new Board();
        this.lines = board.detectWins(this.connectionLength, this.arr);
    }
    translateArr(arr) {
        for (var y = 0; y < arr.length; y++) {
            for (var x = 0; x < arr[y].length; x++) {
                if (arr[y][x]) arr[y][x] = { type: this.type };
            }
        }
        return arr;
    }
    equivalentBoard(grid) {
        if (grid.length != this.arr.length) return false;
        if (grid[0]?.length != this.arr[0]?.length) return false;
        for (var y = 0; y < grid.length; y++) {
            for (var x = 0; x < grid.length; x++) {
                if (Boolean(grid[y][x]) != Boolean(this.arr[y][x])) return false;
            }
        }
        return true;
    }
    update() {
        if (this.clickTime) this.clickTime--;
        this.animatedScale = 1 + this.clickTime * 0.003;
    }
    click() {
        this.clickTime = 30;
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(this.scale * this.animatedScale, this.scale * this.animatedScale);
        ctx.scale(this.size, this.size);
        ctx.translate(-this.width / 2, -this.height / 2);

        for (var line of this.lines) {
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.lineWidth / this.size;
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(line.start.x, line.start.y);
            ctx.lineTo(line.end.x, line.end.y);
            ctx.stroke();
        }

        ctx.restore();
    }
}