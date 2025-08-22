let game = {
    tick: function () {
        this.update();
        this.draw();
    },
    init: function () {
        this.env = new Environment();
        this.cam = new Camera();
    },
    update: function () {
        this.input.update();
        this.env.update();
        this.level.update();
        this.particles.update();
        this.cam.update();

        if (ui.musicMuted) {
            if (!audios.music.paused) {
                audios.music.pause();
                audios.music.currentTime = 0;
            }
        } else {
            audios.music.play();
            audios.music.volume = 0.4;
        }
    },
    draw: function () {
        this.background.draw();

        ctx.save();
        this.cam.alignViewport();

        this.env.draw();
        this.particles.draw();

        ctx.restore();

        this.level.draw();
    },
    input: {
        leftLast: Infinity,
        rightLast: Infinity,
        upLast: Infinity,
        downLast: Infinity,
        leftHold: 0,
        rightHold: 0,
        upHold: 0,
        downHold: 0,
        update: function () {
            this.left = Keys.held.arrowleft || Keys.held.a;
            this.right = Keys.held.arrowright || Keys.held.d;
            this.up = Keys.held.arrowup || Keys.held.w;
            this.down = Keys.held.arrowdown || Keys.held.s;
            if (game.level.levelCompleteAnimation || game.level.levelTransitionAnimation?.pauseGame) {
                this.left = false;
                this.right = false;
                this.up = false;
                this.down = false;
            }

            if (this.left) {
                this.leftLast = 0;
                this.leftHold++;
            } else {
                this.leftLast++;
                this.leftHold = 0;
            }
            if (this.right) {
                this.rightLast = 0;
                this.rightHold++;
            } else {
                this.rightLast++;
                this.rightHold = 0;
            }
            if (this.up) {
                this.upLast = 0;
                this.upHold++;
            } else {
                this.upLast++;
                this.upHold = 0;
            }
            if (this.down) {
                this.downLast = 0;
                this.downHold++;
            } else {
                this.downLast++;
                this.downHold = 0;
            }
        }
    }
}