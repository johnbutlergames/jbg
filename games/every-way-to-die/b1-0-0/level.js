game.level = {
    levelNumber: 0,
    levelTime: 0,
    level: null,
    deathAnimation: null,
    objectsNearPlayer: null,
    splatters: [],
    skulls: [],
    deaths: 0,
    deathCounterAddAnimation: 0,
    deathCounterAngle: 0,
    ghost: null,
    lastPlayerPosition: null,
    lastPlayerSpeed: null,
    levelTransitionAnimation: null,
    levelCompleteAnimation: 0,
    splatNumber: 0,
    popNumber: 0,
    distToScreen: 0,
    lastPlayerPosition: { x: 0, y: 0 },
    update: function () {
        if (!this.levelTransitionAnimation?.pauseGame && !this.levelCompleteAnimation) this.levelTime++;
        let player = game.env.objects.find(e => e instanceof Player);
        if (!this.levelTransitionAnimation) {
            if (!player) {
                if (!this.deathAnimation) {
                    this.ghost = new PlayerGhost(this.lastPlayerPosition.x, this.lastPlayerPosition.y);
                    this.deathAnimation = 0;
                }
                this.deathAnimation++;
                if (this.deathAnimation == 160) {
                    game.env.objects.push(new Player(this.spawnPoint.x - 20, this.spawnPoint.y - 20));
                    this.deathAnimation = null;
                    this.objectsNearPlayer = null;
                    this.ghost = null;
                }
            } else {
                this.lastPlayerPosition = { x: player.x, y: player.y };
                this.lastPlayerSpeed = { x: player.move.x, y: player.move.y };
            }
        }

        this.updateSkulls();
        this.updateDeathCounter();

        this.ghost?.update();

        if (this.levelCompleteAnimation) {
            this.levelCompleteAnimation++;
            if (this.levelCompleteAnimation === 2) {
                let time = this.levelTime;
                let deaths = this.deaths;
                if (!saveData[this.levelNumber]) saveData[this.levelNumber] = { time: Infinity, deaths: 0 };
                saveData[this.levelNumber].time = Math.min(saveData[this.levelNumber].time, time);
                saveData[this.levelNumber].deaths = Math.max(saveData[this.levelNumber].deaths, deaths);
                updateSaveData();
            }
            if (this.levelCompleteAnimation === 100) {
                if(this.levelNumber==3) ui.escape();
                this.levelCompleteAnimation = 0;
                this.levelTransitionAnimation = {
                    animation: 0,
                    animatingOut: true,
                    animatingIn: false,
                    pauseGame: true
                };
            }
        }
        if (this.levelTransitionAnimation) {
            if (this.levelTransitionAnimation.animatingOut) {
                this.levelTransitionAnimation.animation++;
                if (this.levelTransitionAnimation.animation === 2) {
                    audios.reverseWhoosh.currentTime = 0;
                    audios.reverseWhoosh.play();
                }
                if (this.levelTransitionAnimation.animation == 200) {
                    this.levelTransitionAnimation.animation = 100;
                    this.nextLevel();
                    this.levelTransitionAnimation.animatingOut = false;
                    this.levelTransitionAnimation.animatingIn = true;
                }
            } else if (this.levelTransitionAnimation.animatingIn) {
                if (this.levelTransitionAnimation.animation === 40) {
                    audios.whoosh.currentTime = 0;
                    audios.whoosh.play();
                }
                this.levelTransitionAnimation.animation--;
                if (this.levelTransitionAnimation.animation == 0) this.levelTransitionAnimation = null;
            }
        }

        this.distToScreen = Infinity;
        if (player) {
            for (let screen of game.env.objects.filter(e => e instanceof DoorScreen || e instanceof ImageDisplayScreen)) {
                if (screen.off) continue;
                let dist = distTo(screen.cx, screen.cy, player.cx, player.cy);
                this.distToScreen = Math.min(this.distToScreen, dist);
            }
            let percent = 1 - easeInOut((this.distToScreen - 300) / 300);
            if (percent > 0) {
                audios.static.play();
                audios.static.volume = percent;
            } else {
                audios.static.volume = 0;
            }
        }
    },
    drawLevelTransition: function () {
        if (!this.levelTransitionAnimation) return;

        let levelNames = ["Tutorial", "Level 1", "Level 2", "Level 3"];
        if (this.levelTransitionAnimation.animatingOut) {
            let levelName = levelNames[this.levelNumber + 1];
            let a = easeInOut(this.levelTransitionAnimation.animation / 30);
            ctx.fillStyle = "black";
            ctx.save();
            ctx.translate((-canvas.width - 200) * (1 - a), 0);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(canvas.width + 200, 0);
            ctx.lineTo(canvas.width, canvas.height);
            ctx.lineTo(-200, canvas.height);
            ctx.closePath();
            ctx.fill();
            ctx.restore();

            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            a = easeInOut((this.levelTransitionAnimation.animation - 40) / 20);
            ctx.globalAlpha = a;
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "bold 70px Trebuchet MS";
            ctx.fillText(levelName, 0, 0);
            ctx.restore();
        } else if (this.levelTransitionAnimation.animatingIn) {
            let levelName = levelNames[this.levelNumber];
            let a = easeInOut(this.levelTransitionAnimation.animation / 30);
            ctx.fillStyle = "black";
            ctx.save();
            ctx.translate((canvas.width + 200) * (1 - a), 0);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(canvas.width + 200, 0);
            ctx.lineTo(canvas.width, canvas.height);
            ctx.lineTo(-200, canvas.height);
            ctx.closePath();
            ctx.fill();
            ctx.restore();

            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            a = easeInOut((this.levelTransitionAnimation.animation - 40) / 20);
            ctx.globalAlpha = a;
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "bold 70px Trebuchet MS";
            ctx.fillText(levelName, 0, 0);
            ctx.restore();
        }
    },
    nextLevel: function () {
        this.levelNumber++;
        this.load(levels[this.levelNumber]);
    },
    draw: function () {
        ctx.save();
        game.cam.alignViewport();

        if (this.level?.boundary && false) {
            for (let o of this.level.boundary) {
                ctx.strokeStyle = "red";
                ctx.lineWidth = 1;
                ctx.strokeRect(o.x, o.y, o.w, o.h);
            }
        }

        this.drawSplatters();

        ctx.restore();

        this.drawSkulls();
        this.drawDeathCounter();

        ctx.save();
        game.cam.alignViewport();
        this.ghost?.draw();
        ctx.restore();

        this.drawLevelTransition();
    },
    updateSkulls: function () {
        for (let o of this.skulls) {
            o.animation++;
            o.scale = easeInOut(o.animation / 20);
            o.realX += o.move.x;
            o.realY += o.move.y;

            o.angle += o.turn;
            o.turn *= 0.99;

            o.alpha = 1 - easeInOut((o.animation - 60) / 10);

            let percent = easeInOut((o.animation - 30) / 50);
            let target = { x: canvas.width - 50, y: 50 };

            let coordinate = game.cam.globalToLocal(o.realX, o.realY);
            o.x = coordinate.x * (1 - percent) + target.x * percent;
            o.y = coordinate.y * (1 - percent) + target.y * percent;

            if (o.alpha == 0) {
                o.delete = true;
                this.addDeath();

                let audio = audios[`pop${this.popNumber + 1}`];
                audio.currentTime = 0;
                audio.play();
                this.popNumber++;
                this.popNumber %= 3;
            }
        }
        for (let n = 1; n < this.skulls.length; n++) {
            let o = this.skulls[n];
            let last = this.skulls[n - 1];
            if (o.animation > last.animation - 5) {
                o.animation--;
            } else if (o.animation < last.animation - 8) {
                o.animation++;
            }
        }
        this.skulls = this.skulls.filter(e => !e.delete);
    },
    drawSkulls: function () {
        for (let o of this.skulls) {
            ctx.save();
            ctx.globalAlpha = o.alpha;
            ctx.translate(o.x, o.y);
            ctx.rotate(o.angle * Math.PI / 180);
            ctx.scale(o.scale, o.scale);
            ctx.drawImage(images.skull, -15, -15, 30, 30);
            ctx.restore();
        }
    },
    updateDeathCounter: function () {
        if (this.deathCounterAddAnimation) this.deathCounterAddAnimation--;
        this.deathCounterAngle *= 0.95;
    },
    drawDeathCounter: function () {
        ctx.save();
        ctx.translate(canvas.width - 50, 50);
        let s = 1 + this.deathCounterAddAnimation / 10 * 0.3;
        ctx.scale(s, s);
        ctx.rotate(this.deathCounterAngle * Math.PI / 180);
        ctx.drawImage(images.skull, -25, -25, 50, 50);
        ctx.restore();

        ctx.fillStyle = "black";
        ctx.strokeStyle = "white";
        ctx.lineWidth = 5;
        ctx.font = "bold 60px Trebuchet MS";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        let width = ctx.measureText(this.deaths).width;
        ctx.save();
        ctx.translate(canvas.width - 95 - width / 2, 55);
        ctx.scale(s, s);
        ctx.strokeText(this.deaths, 0, 0);
        ctx.fillText(this.deaths, 0, 0);

        ctx.lineWidth = 2;
        ctx.font = "bold 20px Trebuchet MS";
        let maxDeathsText = `/ ${this.maxDeaths}`;
        ctx.strokeText(maxDeathsText, 0, 35);
        ctx.fillText(maxDeathsText, 0, 35);

        ctx.restore();
    },
    addDeath: function () {
        this.deaths++;
        this.deathCounterAddAnimation = 10;
        this.deathCounterAngle = (Math.random() * 10 + 10) * (Math.floor(Math.random() * 2) * 2 - 1);
    },
    drawSplatters: function () {
        ctx.save();

        ctx.beginPath();
        for (let o of game.env.objects.filter(e => e instanceof BlockObject)) {
            ctx.rect(o.x, o.y, o.w, o.h);
        }
        ctx.clip();

        for (let o of this.splatters) {
            ctx.fillStyle = "rgba(150,20,20,0.3)";
            ctx.beginPath();
            ctx.arc(o.x, o.y, o.r, 0, 2 * Math.PI);
            ctx.fill();
        }

        ctx.restore();
    },
    load: function (level) {
        this.level = new level();
        this.levelTime = 0;
        this.maxDeaths = this.level.maxDeaths;
        this.deaths = 0;
        this.splatters = [];
        game.env.objects = this.level.objects;

        for (let o of game.env.objects) {
            if (!(o instanceof SpikeObject)) continue;
            o.bloodyImageNumber = Math.floor(Math.random() * 3) + 1;
            o.flip = Math.random() < 0.5;
        }
        for (let o of game.env.objects) {
            if (!(o instanceof SawObject)) continue;
            o.flip = Math.random() < 0.5;
        }

        this.spawnPoint = this.level.spawnPoint;
        game.background.loadForeground(this.level.background);
        game.cam.x = this.level.spawnPoint.x;
        game.cam.y = this.level.spawnPoint.y;

        game.env.objects = game.env.objects.sort((a, b) => (a.zIndex || 0) - (b.zIndex || 0));

        game.env.objects.push(new Player(this.spawnPoint.x - 20, this.spawnPoint.y - 20));
    },
    createBlobSplatter: function (x, y) {
        let o = { x: x, y: y };
        o.r = 15 + Math.random() * 10;
        let tooClose = this.splatters.some(e => distTo(e.x, e.y, x, y) < 15);
        if (!tooClose) this.splatters.push(o);

        let spikes = game.env.objects.filter(e => (e instanceof SpikeObject && distTo(e.cx, e.cy, x, y) < 100) || (e instanceof SawObject && distTo(e.cx, e.cy, x, y) < 200));
        for (let o of spikes) {
            if (o.bloodyLevel == 0) continue;
            if (Math.random() < 0.5) continue;
            if (Math.random() < 0.8 && o.bloodyLevel >= 2) continue;
            o.bloodyLevel++;
            o.bloodyLevel = Math.min(o.bloodyLevel, 4);
        }
    },
    playerDiedOnObject: function (o) {
        if (!o.playerDiedOn) {
            o.playerDiedOn = true;
            this.createSkull(o.cx, o.y - 40);
        }
        if (o instanceof SpikeObject || o instanceof SawObject) {
            o.bloodyLevel++;
            o.bloodyLevel = Math.min(o.bloodyLevel, 4);
        }
    },
    createSkull: function (x, y) {
        let coordinate = game.cam.globalToLocal(x, y);
        let skull = {
            realX: x,
            realY: y,
            x: coordinate.x,
            y: coordinate.y,
            move: { x: 0, y: -1 },
            animation: 0,
            scale: 0,
            angle: 0,
            turn: Math.random() * 6 - 3
        };
        skull.angle -= skull.turn * 40;
        this.skulls.push(skull);
    }
}

let levels = [];

class Level {
    constructor() {
        this.objects = [];
        this.spawnPoint = { x: 0, y: 0 };
        this.boundary = [{ x: -1000, y: -1000, w: 2000, h: 2000 }];
    }
}