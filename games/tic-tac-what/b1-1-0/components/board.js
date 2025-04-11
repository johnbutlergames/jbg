class Board {
    constructor(w, h) {
        this.w = w || 3;
        this.h = h || 3;
        this.color = "black";
        this.lineCap = "round";
        this.lineWidth = 15;
        this.scale = 1;
        this.x = 0;
        this.y = 0;
        this.angle = 0;
        this.cellSize = 160;
        this.objects = [];
        this.winCoordinates = [];
        this.winLines = [];
    }
    draw() {
        this.drawBackground();

        var w = this.w * this.cellSize;
        var h = this.h * this.cellSize;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(this.scale, this.scale);
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.translate(-w / 2, -h / 2);

        ctx.save();
        ctx.scale(this.cellSize, this.cellSize);
        for (var o of this.winCoordinates) {
            o.draw();
        }
        ctx.restore();

        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.lineCap = this.lineCap;
        for (var x = 1; x < this.w; x++) {
            ctx.beginPath();
            ctx.moveTo(x * this.cellSize, 0);
            ctx.lineTo(x * this.cellSize, h);
            ctx.stroke();
        }
        for (var y = 1; y < this.h; y++) {
            ctx.beginPath();
            ctx.moveTo(0, y * this.cellSize);
            ctx.lineTo(w, y * this.cellSize);
            ctx.stroke();
        }

        ctx.restore();

        this.drawBehindObjects();

        for (var o of this.objects) {
            o.draw();
        }
        for (var o of this.winLines) {
            o.draw();
        }

        this.drawForeground();
    }
    alignCanvasToCells() {
        var w = this.w * this.cellSize;
        var h = this.h * this.cellSize;
        ctx.translate(this.x, this.y);
        ctx.scale(this.scale, this.scale);
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.translate(-w / 2, -h / 2);
        ctx.scale(this.cellSize, this.cellSize);
    }
    drawBackground() {
    }
    drawBehindObjects() {
    }
    drawForeground() {
    }
    setGridAlignedTicTacToeObjects(objects) {
        this.objects = [];
        for (var o of objects) {
            var o2 = new TicTacToeObject(o.type);
            o2.relativeX = o.x;
            o2.relativeY = o.y;
            this.addObject(o2);
        }
    }
    update() {
        this.alignObjectsToGrid();
        for (var o of this.objects) {
            if (o.update) o.update();
        }
        for (var o of this.winLines) {
            o.update();
        }
    }
    alignObjectsToGrid() {
        for (var o of this.objects) {
            this.alignObjectToGrid(o);
        }
    }
    alignObjectToGrid(o) {
        o.scale = this.scale;
        if (o.relativeX === undefined || o.relativeY === undefined) {
            var cor = this.globalCoordinatesToCell(o.x, o.y);
            o.relativeX = cor.x;
            o.relativeY = cor.y;
        }
        var cor = this.cellCoordinatesToGlobal(o.relativeX, o.relativeY);
        o.x = cor.x + cor.w / 2;
        o.y = cor.y + cor.h / 2;
    }
    coordinateOnGrid(x, y) {
        return x >= 0 && x < this.w && y >= 0 && y < this.h;
    }
    surroundingCoordinates(x, y) {
        var cors = [
            { x: x - 1, y: y - 1 },
            { x: x, y: y - 1 },
            { x: x + 1, y: y - 1 },
            { x: x + 1, y: y },
            { x: x + 1, y: y + 1 },
            { x: x, y: y + 1 },
            { x: x - 1, y: y + 1 },
            { x: x - 1, y: y },
        ];
        return cors.filter(e => this.coordinateOnGrid(e.x, e.y));
    }
    surroundingOrthogonalCoordinates(x, y) {
        var cors = [
            { x: x, y: y - 1 },
            { x: x + 1, y: y },
            { x: x, y: y + 1 },
            { x: x - 1, y: y },
        ];
        return cors.filter(e => this.coordinateOnGrid(e.x, e.y));
    }
    findObject(x, y) {
        return this.objects.find(e => e.relativeX === x && e.relativeY === y);
    }
    addObject(o) {
        var cor = this.globalCoordinatesToCell(o.x, o.y);
        if (o.relativeX === undefined) o.relativeX = cor.x;
        if (o.relativeY === undefined) o.relativeY = cor.y;
        if (o.x === undefined || o.y === undefined) {
            var cor = this.cellCoordinatesToGlobal(o.relativeX, o.relativeY);
            o.x = cor.x + cor.w / 2;
            o.y = cor.y + cor.h / 2;
        }
        if (o.place) o.place();
        this.objects.push(o);
    }
    cellCoordinatesToGlobal(x, y) {
        var cor = {};
        cor.x = ((x - this.w / 2) * this.cellSize) * this.scale + this.x;
        cor.y = ((y - this.h / 2) * this.cellSize) * this.scale + this.y;
        cor.w = this.cellSize * this.scale;
        cor.h = this.cellSize * this.scale;
        return cor;
    }
    globalCoordinatesToCell(x, y) {
        var cor = {};
        x -= this.x;
        y -= this.y;
        x /= this.scale * this.cellSize;
        y /= this.scale * this.cellSize;
        x += this.w / 2;
        y += this.h / 2;
        x = Math.floor(x);
        y = Math.floor(y);
        cor.x = x;
        cor.y = y;
        return cor;
    }
    createObjectGrid() {
        var grid = [];
        for (var y = 0; y < this.h; y++) {
            grid.push([]);
            for (var x = 0; x < this.w; x++) {
                var o = this.findObject(x, y);
                grid[y][x] = o;
            }
        }
        return grid;
    }
    possibleMoves(type) {
        var grid = this.createObjectGrid();
        var possibleSpots = [];
        for (var y = 0; y < this.h; y++) {
            for (var x = 0; x < this.w; x++) {
                if (grid[y][x]) continue;
                possibleSpots.push({ x: x, y: y, type: type });
            }
        }
        return possibleSpots;
    }
    calculateWinsForMoves(moves, length) {
        var arr = [];
        for (var n = 0; n < moves.length; n++) {
            var grid = this.createObjectGrid();
            var move = moves[n];
            grid[move.y][move.x] = { type: move.type };
            arr.push({ x: move.x, y: move.y, wins: this.detectWins(length, grid) });
        }
        return arr;
    }
    detectWins(length, grid) {
        var grid = grid || this.createObjectGrid();
        var wins = [
            ...this.detectHorizontalWins(grid),
            ...this.detectVerticalWins(grid),
            ...this.detectDiagonalWins(grid)
        ];
        return wins.filter(e => e.length >= length);
    }
    detectHorizontalWins(grid) {
        var wins = [];
        for (var y = 0; y < this.h; y++) {
            var currentWin = false;
            for (var x = 0; x < this.w; x++) {
                var o = grid[y][x];
                if (!o || (currentWin && o.type !== currentWin.type)) {
                    if (currentWin) {
                        wins.push(currentWin);
                        currentWin = false;
                    }
                    if (!o) continue;
                }
                if (!currentWin) {
                    currentWin = { type: o.type, start: { x: x, y: y }, end: { x: x, y: y }, length: 1, alignment: "horizontal" };
                } else {
                    currentWin.length++;
                    currentWin.end = { x: x, y: y };
                }
            }
            if (currentWin) wins.push(currentWin);
        }
        return wins;
    }
    detectVerticalWins(grid) {
        var wins = [];
        for (var x = 0; x < this.w; x++) {
            var currentWin = false;
            for (var y = 0; y < this.h; y++) {
                var o = grid[y][x];
                if (!o || (currentWin && o.type !== currentWin.type)) {
                    if (currentWin) {
                        wins.push(currentWin);
                        currentWin = false;
                    }
                    if (!o) continue;
                }
                if (!currentWin) {
                    currentWin = { type: o.type, start: { x: x, y: y }, end: { x: x, y: y }, length: 1, alignment: "vertical" };
                } else {
                    currentWin.length++;
                    currentWin.end = { x: x, y: y };
                }
            }
            if (currentWin) wins.push(currentWin);
        }
        return wins;
    }
    detectDiagonalWins(grid) {
        var wins = [];
        var starts = [];
        for (var x = 0; x < this.w; x++) {
            starts.push({ x: x, y: 0 });
        }
        for (var y = 1; y < this.h; y++) {
            starts.push({ x: 0, y: y });
        }
        for (var start of starts) {
            var x = start.x;
            var y = start.y;
            var currentWin = false;
            while (x < this.w && y < this.h) {
                var o = grid[y][x];
                if (!o || (currentWin && o.type !== currentWin.type)) {
                    if (currentWin) {
                        wins.push(currentWin);
                        currentWin = false;
                    }
                    if (!o) {
                        x++;
                        y++;
                        continue;
                    }
                }
                if (!currentWin) {
                    currentWin = { type: o.type, start: { x: x, y: y }, end: { x: x, y: y }, length: 1, alignment: "diagonal" };
                } else {
                    currentWin.length++;
                    currentWin.end = { x: x, y: y };
                }
                x++;
                y++;
            }
            if (currentWin) wins.push(currentWin);
        }
        var starts = [];
        for (var x = 0; x < this.w; x++) {
            starts.push({ x: x, y: 0 });
        }
        for (var y = 1; y < this.h; y++) {
            starts.push({ x: this.w - 1, y: y });
        }
        for (var start of starts) {
            var x = start.x;
            var y = start.y;
            var currentWin = false;
            while (x < this.w && y < this.h) {
                var o = grid[y][x];
                if (!o || (currentWin && o.type !== currentWin.type)) {
                    if (currentWin) {
                        wins.push(currentWin);
                        currentWin = false;
                    }
                    if (!o) {
                        x--;
                        y++;
                        continue;
                    }
                }
                if (!currentWin) {
                    currentWin = { type: o.type, start: { x: x, y: y }, end: { x: x, y: y }, length: 1, alignment: "diagonal" };
                } else {
                    currentWin.length++;
                    currentWin.end = { x: x, y: y };
                }
                x--;
                y++;
            }
            if (currentWin) wins.push(currentWin);
        }
        return wins;
    }
    findWinCoordinates(wins) {
        var grid = [];
        for (var y = 0; y < this.h; y++) {
            grid.push([]);
            for (var x = 0; x < this.w; x++) {
                grid[y].push(0);
            }
        }
        for (var win of wins) {
            var xStep = (win.end.x - win.start.x) / (win.length - 1);
            var yStep = (win.end.y - win.start.y) / (win.length - 1);
            var x = win.start.x;
            var y = win.start.y;
            for (var n = 0; n < win.length; n++) {
                grid[y][x] = 1;
                x += xStep;
                y += yStep;
            }
        }
        return grid;
    }
    plotWinCoordinates(grid, type) {
        for (var y = 0; y < this.h; y++) {
            for (var x = 0; x < this.w; x++) {
                if (!grid[y][x]) continue;
                this.winCoordinates.push(new WinCoordinate(type, x, y));
            }
        }
    }
    plotWinLines(wins) {
        for (var win of wins) {
            var line = new WinLine(win.start.x, win.start.y, win.end.x, win.end.y);
            line.start = this.cellCoordinatesToGlobal(line.start.x, line.start.y);
            line.end = this.cellCoordinatesToGlobal(line.end.x, line.end.y);
            line.start.x += line.start.w / 2;
            line.start.y += line.start.h / 2;
            line.end.x += line.end.w / 2;
            line.end.y += line.end.h / 2;
            var move = distToMove(line.start.w * 0.3, dirTo(line.start.x, line.start.y, line.end.x, line.end.y));
            line.start.x -= move.x;
            line.start.y -= move.y;
            line.end.x += move.x;
            line.end.y += move.y;
            line.animatedEnd.x = line.end.x;
            line.animatedEnd.y = line.end.y;
            line.scale = this.scale;
            this.winLines.push(line);
        }
    }
    globalCoordinateOnGrid(x, y) {
        var cor = this.globalCoordinatesToCell(x, y);
        return this.coordinateOnGrid(cor.x, cor.y);
    }
    updatePlacing(o) {
        o.update();
        o.x = Mouse.x;
        o.y = Mouse.y;
        o.relativeX = undefined;
        o.relativeY = undefined;
        this.alignObjectToGrid(o);
        o.positioned = this.coordinateOnGrid(o.relativeX, o.relativeY) && !this.findObject(o.relativeX, o.relativeY);
        if (o.positioned && Mouse.click) return true;
        return false;
    }
}

class TicTacToeObject {
    constructor(type) {
        this.type = type || "X";
        this.color = "black";
        this.backgroundColor = "black";
        if (this.type == "X") {
            this.color = "red";
            this.backgroundColor = "rgb(255,200,200)";
        }
        if (this.type == "O") {
            this.color = "blue";
            this.backgroundColor = "rgb(200,200,255)";
        }
        if (this.type == "Square") {
            this.color = "green";
            this.backgroundColor = "rgb(200,255,200)";
        }
        if (this.type == "Triangle") {
            this.color = "rgb(95,0,155)";
            this.backgroundColor = "rgb(230,200,255)";
        }
        this.lineWidth = 20;
        this.lineCap = "round";
        this.lineJoin = "round";
        this.scale = 1;
        this.angle = 0;
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(this.scale, this.scale);
        ctx.rotate(this.angle * Math.PI / 180);

        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.lineCap = this.lineCap;
        ctx.lineJoin = this.lineJoin;
        ctx.beginPath();
        if (this.type == "X") {
            ctx.moveTo(-50, -50);
            ctx.lineTo(50, 50);
            ctx.moveTo(50, -50);
            ctx.lineTo(-50, 50);
        } else if (this.type == "O") {
            ctx.arc(0, 0, 50, 0, 2 * Math.PI);
        } else if (this.type == "Square") {
            ctx.moveTo(-50, -50);
            ctx.lineTo(50, -50);
            ctx.lineTo(50, 50);
            ctx.lineTo(-50, 50);
            ctx.closePath();
        } else if (this.type == "Triangle") {
            ctx.moveTo(0, -50);
            ctx.lineTo(50, 50);
            ctx.lineTo(-50, 50);
            ctx.closePath();
        }
        ctx.stroke();

        ctx.restore();
    }
}

class TicTacToePlacing extends TicTacToeObject {
    constructor(type) {
        super(type);
        this.placingAnimation = 0;
        this.placed = false;
        this.animationLength = 8;
        this.minScale = 0.8;
        this.maxScale = 1;
        this.realScale = 1;
        this.animatedScale = 1;
        this.particles = [];
    }
    update() {
        if (this.placed) this.placingAnimation++;
        var a = bounceIn(this.placingAnimation / this.animationLength);
        this.animatedScale = this.minScale + a * (this.maxScale - this.minScale);

        for (var o of this.particles) {
            o.alpha -= o.decay;
            o.x += o.xmove;
            o.y += o.ymove;
            o.xmove *= 0.98;
            o.ymove *= 0.98;
            o.ymove += 0.05;
            if (o.alpha <= 0) o.delete = true;
        }
        this.particles = this.particles.filter(e => !e.delete);
    }
    set scale(scale) {
        this.realScale = scale;
    }
    get scale() {
        return this.animatedScale * this.realScale;
    }
    place() {
        this.placed = true;
        var box = { x: this.x, y: this.y };
        var w = 100 * this.scale;
        var h = 100 * this.scale;
        box.x -= w / 2;
        box.y -= h / 2;
        box.w = w;
        box.h = h;
        for (var n = 0; n < 5; n++) {
            var o = {};
            o.x = box.x + Math.random() * box.w;
            o.y = box.y + Math.random() * box.h;
            o.color = this.color;
            o.alpha = 1 + Math.random() * 3;
            o.decay = 0.05;
            o.xmove = Math.random() * 2 - 1;
            o.ymove = Math.random() * 2 - 2.5;
            o.size = Math.random() * 3 + 3;
            this.particles.push(o);
        }
    }
    draw() {
        super.draw();

        for (var o of this.particles) {
            ctx.save();
            ctx.translate(o.x, o.y);
            ctx.globalAlpha = Math.min(1, o.alpha) * 0.4;
            ctx.fillStyle = o.color;
            ctx.beginPath();
            ctx.arc(0, 0, o.size, 0, 2 * Math.PI);
            ctx.fill();
            ctx.restore();
        }
    }
}

class WinLine {
    constructor(x1, y1, x2, y2) {
        this.start = { x: x1, y: y1 };
        this.animatedEnd = { x: x1, y: y1 };
        this.end = { x: x2, y: y2 };
        this.time = 0;
        this.animationLength = 10;
        this.color = "black";
        this.lineCap = "round";
        this.lineWidth = 30;
        this.scale = 1;
    }
    update() {
        this.time++;
        var a = easeInOut(this.time / this.animationLength);
        this.animatedEnd.x = this.end.x * a + this.start.x * (1 - a);
        this.animatedEnd.y = this.end.y * a + this.start.y * (1 - a);
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = easeInOut(this.time / (this.animationLength * 0.3));
        ctx.strokeStyle = this.color;
        ctx.lineCap = this.lineCap;
        ctx.lineWidth = this.lineWidth * this.scale;
        ctx.beginPath();
        ctx.moveTo(this.start.x, this.start.y);
        ctx.lineTo(this.animatedEnd.x, this.animatedEnd.y);
        ctx.stroke();
        ctx.restore();
    }
}

class WinCoordinate {
    constructor(type, x, y) {
        this.x = x;
        this.y = y;
        this.type = type || "X";
        this.color = this.type == "X" ? "red" : "blue";
    }
    draw() {
        if (this.color == "red") {
            ctx.fillStyle = "rgba(255,0,0,0.2)";
        } else if (this.color == "blue") {
            ctx.fillStyle = "rgba(0,0,255,0.2)";
        }
        ctx.fillRect(this.x, this.y, 1, 1);
    }
}