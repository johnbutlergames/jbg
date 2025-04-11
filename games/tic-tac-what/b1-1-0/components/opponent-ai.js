class OpponentAI {
    constructor(board, type, winLength) {
        this.type = type || "O";
        this.opponent = this.type == "O" ? "X" : "O";
        this.winLength = winLength || 3;
        this.board = board;
        this.selfMoves = [];
        this.opponentMoves = [];
    }
    finalizeMove(x, y) {
        var o = new TicTacToePlacing(this.type);
        o.relativeX = x;
        o.relativeY = y;
        this.board.addObject(o);
    }
    makeMove() {
        this.calculatePossibleMoves();
        if (this.tryWinningMove()) return;
        if (this.tryBlockingMove()) return;
        if (this.tryRandomMove()) return;
    }
    calculatePossibleMoves() {
        this.selfMoves = this.board.possibleMoves(this.type);
        this.opponentMoves = this.board.possibleMoves(this.opponent);
    }
    tryWinningMove() {
        var winArr = this.board.calculateWinsForMoves(this.selfMoves, this.winLength);
        winArr = winArr.filter(e => e.wins.length);
        if (winArr.length) {
            var move = winArr[Math.floor(Math.random() * winArr.length)];
            this.finalizeMove(move.x, move.y);
            return true;
        }
        return false;
    }
    tryBlockingMove() {
        var loseArr = this.board.calculateWinsForMoves(this.opponentMoves, this.winLength);
        loseArr = loseArr.filter(e => e.wins.length);
        if (loseArr.length) {
            var move = loseArr[Math.floor(Math.random() * loseArr.length)];
            this.finalizeMove(move.x, move.y);
            return true;
        }
        return false;
    }
    tryRandomMove() {
        if (!this.selfMoves.length) return false;
        var move = this.selfMoves[Math.floor(Math.random() * this.selfMoves.length)];
        this.finalizeMove(move.x, move.y);
        return true;
    }
}

class ScoreFourOpponentAI extends OpponentAI {
    constructor(board, type, winLength) {
        super(board, type, winLength);
        if (!winLength) this.winLength = 4;
    }
    finalizeMove(x, y) {
        var o = new TicTacToePlacing(this.type);
        o.relativeX = x;
        o.relativeY = Math.max(y - Math.floor(Math.random() * 4), 0);
        this.board.addObject(o);
    }
}

class RandomOpponentAI extends OpponentAI {
    makeMove() {
        this.calculatePossibleMoves();
        if (this.tryRandomMove()) return;
    }
}