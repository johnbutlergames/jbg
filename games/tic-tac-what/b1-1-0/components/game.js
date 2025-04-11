class Game {
    level = 0;
    currentLevel = false;
    wonLevel = false;
    lostLevel = false;
    loseAnimation = 0;
    winAnimation = 0;
    switchLevelAnimation = 0;
    switchingLevel = false;
    confetti = [];
    screenshake = 0;
    update() {
        if (this.screenshake) this.screenshake--;
        if (this.switchingLevel) {
            this.switchLevelAnimation++;
            if (this.switchLevelAnimation == 30) {
                this.switchingLevel = false;
                if (this.wonLevel) {
                    this.nextLevel();
                }
            }
        } else if (this.switchLevelAnimation) {
            this.switchLevelAnimation--;
        }
        if (this.wonLevel) {
            if (this.currentLevel.updateWin) this.currentLevel.updateWin();
            this.winAnimation++;
            if (this.winAnimation == 40) {
                this.createConfetti();
                this.screenshake = 10;
            }
            if (this.winAnimation == 140) {
                this.switchingLevel = true;
            }
        } else if (this.lostLevel) {
            if (this.currentLevel.updateLose) this.currentLevel.updateLose();
            this.loseAnimation++;
            if (this.loseAnimation == 10) {
                this.screenshake = 30;
            }
            if (this.loseAnimation == 100) {
                this.reloadLevel();
            }
        } else {
            this.currentLevel.update();
            this.wonLevel = this.currentLevel.checkWin && this.currentLevel.checkWin();
            this.lostLevel = this.currentLevel.checkLose && this.currentLevel.checkLose();
            if (this.wonLevel) {
                if (this.currentLevel.win) this.currentLevel.win();
            }
            if (this.lostLevel) {
                if (this.currentLevel.lose) this.currentLevel.lose();
            }
        }
        this.updateConfetti();
    }
    draw() {
        ctx.save();
        var x = Math.random() * this.screenshake - this.screenshake / 2;
        var y = Math.random() * this.screenshake - this.screenshake / 2;
        ctx.translate(x, y);

        this.currentLevel.draw();

        ctx.fillStyle = "black";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.font = "bold 50px Arial";
        ctx.fillText(`${this.level + 1}.`, 30, 50);

        this.drawConfetti();

        ctx.restore();

        if (this.switchLevelAnimation) {
            var a = easeInOut(this.switchLevelAnimation / 20);
            ctx.save();
            if (this.switchingLevel) {
                ctx.translate(-1300 + a * 1550, 0);
            } else {
                ctx.translate((1 - a) * 1550, 0);
            }
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.moveTo(-300, 0);
            ctx.lineTo(1300, 0);
            ctx.lineTo(1100, 1000);
            ctx.lineTo(-500, 1000);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
    }
    createConfetti() {
        for (var n = 0; n < 40; n++) {
            var o = this.createConfettiParticle();
            o.x = -100 + Math.random() * 100;
            o.y = 800 + Math.random() * 500;
            o.xmove = 5 + Math.random() * 12;
            o.ymove = -13 - Math.random() * 13;
            this.confetti.push(o);
        }
        for (var n = 0; n < 40; n++) {
            var o = this.createConfettiParticle();
            o.x = 1100 - Math.random() * 100;
            o.y = 800 + Math.random() * 500;
            o.xmove = -5 - Math.random() * 12;
            o.ymove = -13 - Math.random() * 13;
            this.confetti.push(o);
        }
    }
    createConfettiParticle() {
        var o = {};
        o.alpha = 2 + Math.random() * 2;
        o.decay = 0.03;
        o.color = `hsl(${Math.random() * 360},100%,50%)`;
        o.angle = Math.random() * 360;
        o.rotate = Math.random() * Math.PI * 2;
        o.turn = Math.random() * 50 - 25;
        o.spin = Math.random() * 0.1 + 0.02;
        return o;
    }
    updateConfetti() {
        for (var o of this.confetti) {
            o.angle += o.turn;
            o.rotate += o.spin;
            o.x += o.xmove;
            o.y += o.ymove;
            o.xmove *= 0.99;
            o.ymove *= 0.99;
            o.ymove += 0.2;
            o.alpha -= o.decay;
            if (o.alpha <= 0) o.delete = true;
        }
        this.confetti = this.confetti.filter(e => !e.delete);
    }
    drawConfetti() {
        for (var o of this.confetti) {
            ctx.save();
            ctx.translate(o.x, o.y);
            ctx.rotate(o.angle * Math.PI / 180);
            ctx.scale(Math.sin(o.rotate), 1);
            ctx.globalAlpha = o.alpha;
            ctx.fillStyle = o.color;
            ctx.fillRect(-10, -10, 20, 20);
            ctx.restore();
        }
    }
    nextLevel() {
        this.level++;
        this.loadLevel(this.level);
        this.confetti = [];
        this.wonLevel = false;
        this.lostLevel = false;
        this.winAnimation = 0;
        this.loseAnimation = 0;
    }
    reloadLevel() {
        this.loadLevel(this.level);
        this.confetti = [];
        this.wonLevel = false;
        this.lostLevel = false;
        this.winAnimation = 0;
        this.loseAnimation = 0;
    }
    loadLevel(n) {
        this.currentLevel = new Levels[n];
        this.wonLevel = false;
    }
    init() {
        this.loadLevel(0);
    }
}