class FlappyBirdPlayer extends TicTacToeObject {
    constructor() {
        super();
        this.x = 200;
        this.y = 500;
        this.r = 70;
        this.ymove = 0;
        this.scale = 0.6;
        this.flapAnimation = 0;
        this.moved = false;
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(this.scale, this.scale);
        ctx.rotate(this.angle * Math.PI / 180);

        var s = 1 - this.flapAnimation * 0.035;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.lineCap = this.lineCap;
        ctx.beginPath();
        if (this.type == "X") {
            ctx.moveTo(-50, -50 * s);
            ctx.lineTo(50, 50 * s);
            ctx.moveTo(50, -50 * s);
            ctx.lineTo(-50, 50 * s);
        } else if (this.type == "O") {
            ctx.arc(0, 0, 50, 0, 2 * Math.PI)
        }
        ctx.stroke();

        ctx.restore();
    }
    update() {
        if (this.flapAnimation) this.flapAnimation--;
        if (Mouse.down) this.moved = true;
        if (!this.moved) return;
        this.x += 3;
        if (Mouse.downStart) {
            this.ymove = -5;
            this.flapAnimation = 20;
        }
        this.ymove += 0.2;
        this.y += this.ymove;
        this.y = Math.max(Math.min(this.y, 1000 - this.r / 2), this.r / 2);
        if (this.y === this.r / 2) this.ymove = 1;
    }
    checkPipeCollisions(pipes) {
        for (var o of pipes) {
            var xDist = Math.abs(this.x - o.x);
            if (xDist > this.r) continue;
            var bottomCor = o.y + o.gap / 2;
            var topCor = o.y - o.gap / 2;
            if (this.y + this.r > bottomCor) return true;
            if (this.y - this.r < topCor) return true;
        }
        return false;
    }
}

class FlappyBirdCam {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.player = false;
    }
    update() {
        if (!this.player) return;
        this.x = this.player.x - 200;
        this.y = 0;
    }
    alignViewport() {
        ctx.translate(-this.x, -this.y);
    }
}

class PipeLevel {
    constructor() {
        this.pipes = [];
    }
    setPipes(data) {
        for (var o of data) {
            var pipe = new Pipe();
            pipe.x = o.x;
            pipe.y = o.y;
            pipe.gap = o.gap;
            this.pipes.push(pipe);
        }
    }
    update() {
    }
    draw() {
        for (var o of this.pipes) {
            o.draw();
        }
    }
}

class Pipe {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.gap = 0;
        this.blockSize = 100;
        this.blockCount = 10;
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);

        ctx.save();
        ctx.translate(0, this.gap / 2);
        for (var n = 0; n < this.blockCount; n++) {
            var o = new TicTacToeObject("O");
            o.scale = 0.4 * this.blockSize / 50;
            o.x = 0;
            o.y = n * this.blockSize;
            o.draw();
        }
        ctx.restore();

        ctx.save();
        ctx.translate(0, -this.gap / 2);
        for (var n = 0; n < this.blockCount; n++) {
            var o = new TicTacToeObject("O");
            o.scale = 0.4 * this.blockSize / 50;
            o.x = 0;
            o.y = -n * this.blockSize;
            o.draw();
        }
        ctx.restore();

        ctx.restore();
    }
}