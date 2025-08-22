let menu = {
    startAnimation: 20,
    enteringLevel: false,
    init: function () {
        let pageDistance = 3000;
        this.env = new Environment();
        let blocks = [];
        blocks.push(new BlockObject(-5000, -1000, 20000, 1000));
        blocks.push(new BlockObject(-5000, 400, 20000, 1000));
        blocks.forEach(e => e.borders = { left: true, right: true, top: true, bottom: true });
        this.env.objects.push(...blocks);
        let screen = new ImageDisplayScreen(-500, -500, 1000, 400, function () {
            ctx.fillStyle = "lime";
            ctx.font = "80px pressstart";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("Every Way", 0, -80);
            ctx.fillText("To Die", 0, 40);

            ctx.font = "30px pressstart";
            ctx.fillText("By John Butler", 0, 150);
        });
        this.env.objects.push(screen);
        let screen2 = new ImageDisplayScreen(-500, 100, 300, 200, function () {
            ctx.fillStyle = "lime";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "40px pressstart";
            if (blocksColliding({ x: Mouse.x, y: Mouse.y, w: 0, h: 0 }, { x: this.x / 2 + canvas.width / 2, y: this.y / 2 + canvas.height / 2, w: this.w / 2, h: this.h / 2 })) {
                ctx.scale(1.1, 1.1);
                if (Mouse.click && menu.targetCamX === 0 && !this.enteringLevel) {
                    Mouse.click = false;
                    menu.enterLevel(0);
                }
            }
            ctx.fillText("Start", 0, 0);
        });
        this.env.objects.push(screen2);
        let screen3 = new ImageDisplayScreen(200, 100, 300, 200, function () {
            ctx.fillStyle = "lime";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "40px pressstart";
            if (blocksColliding({ x: Mouse.x, y: Mouse.y, w: 0, h: 0 }, { x: this.x / 2 + canvas.width / 2, y: this.y / 2 + canvas.height / 2, w: this.w / 2, h: this.h / 2 })) {
                ctx.scale(1.1, 1.1);
                if (Mouse.click && menu.targetCamX === 0 && !this.enteringLevel) {
                    Mouse.click = false;
                    menu.targetCamX = pageDistance;
                }
            }
            ctx.fillText("Level", 0, -30);
            ctx.fillText("Select", 0, 30);
        });
        this.env.objects.push(screen3);

        let screen4 = new ImageDisplayScreen(pageDistance - 750, -250, 300, 200, function () {
            ctx.fillStyle = "lime";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "30px pressstart";
            if (blocksColliding({ x: Mouse.x + pageDistance / 2, y: Mouse.y, w: 0, h: 0 }, { x: this.x / 2 + canvas.width / 2, y: this.y / 2 + canvas.height / 2, w: this.w / 2, h: this.h / 2 })) {
                ctx.scale(1.1, 1.1);
                if (Mouse.click && menu.targetCamX === pageDistance && !this.enteringLevel) {
                    Mouse.click = false;
                    menu.enterLevel(0);
                }
            }
            ctx.fillText("Tutorial", 0, -40);
            if (saveData[0]) {
                ctx.font = "25px pressstart";
                ctx.fillText(createTimeText(saveData[0].time), 0, 20);
                let deathsText = `${saveData[0].deaths}/${maxDeaths[0]}`;
                ctx.fillText(deathsText, 15, 60);
                let width = ctx.measureText(deathsText).width;
                ctx.drawImage(images.skullScreen, -width / 2 - 25, 43, 30, 30);
            }
        });
        this.env.objects.push(screen4);
        let screen5 = new ImageDisplayScreen(pageDistance - 350, -250, 300, 200, function () {
            ctx.fillStyle = "lime";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "30px pressstart";
            if (blocksColliding({ x: Mouse.x + pageDistance / 2, y: Mouse.y, w: 0, h: 0 }, { x: this.x / 2 + canvas.width / 2, y: this.y / 2 + canvas.height / 2, w: this.w / 2, h: this.h / 2 })) {
                ctx.scale(1.1, 1.1);
                if (Mouse.click && menu.targetCamX === pageDistance && !this.enteringLevel) {
                    Mouse.click = false;
                    menu.enterLevel(1);
                }
            }
            ctx.fillText("Level 1", 0, -40);
            if (saveData[1]) {
                ctx.font = "25px pressstart";
                ctx.fillText(createTimeText(saveData[1].time), 0, 20);
                let deathsText = `${saveData[1].deaths}/${maxDeaths[1]}`;
                ctx.fillText(deathsText, 15, 60);
                let width = ctx.measureText(deathsText).width;
                ctx.drawImage(images.skullScreen, -width / 2 - 25, 43, 30, 30);
            }
        });
        this.env.objects.push(screen5);
        let screen6 = new ImageDisplayScreen(pageDistance + 50, -250, 300, 200, function () {
            ctx.fillStyle = "lime";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "30px pressstart";
            if (blocksColliding({ x: Mouse.x + pageDistance / 2, y: Mouse.y, w: 0, h: 0 }, { x: this.x / 2 + canvas.width / 2, y: this.y / 2 + canvas.height / 2, w: this.w / 2, h: this.h / 2 })) {
                ctx.scale(1.1, 1.1);
                if (Mouse.click && menu.targetCamX === pageDistance && !this.enteringLevel) {
                    Mouse.click = false;
                    menu.enterLevel(2);
                }
            }
            ctx.fillText("Level 2", 0, -40);
            if (saveData[2]) {
                ctx.font = "25px pressstart";
                ctx.fillText(createTimeText(saveData[2].time), 0, 20);
                let deathsText = `${saveData[2].deaths}/${maxDeaths[2]}`;
                ctx.fillText(deathsText, 15, 60);
                let width = ctx.measureText(deathsText).width;
                ctx.drawImage(images.skullScreen, -width / 2 - 25, 43, 30, 30);
            }
        });
        this.env.objects.push(screen6);
        let screen7 = new ImageDisplayScreen(pageDistance + 450, -250, 300, 200, function () {
            ctx.fillStyle = "lime";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "30px pressstart";
            if (blocksColliding({ x: Mouse.x + pageDistance / 2, y: Mouse.y, w: 0, h: 0 }, { x: this.x / 2 + canvas.width / 2, y: this.y / 2 + canvas.height / 2, w: this.w / 2, h: this.h / 2 })) {
                ctx.scale(1.1, 1.1);
                if (Mouse.click && menu.targetCamX === pageDistance && !this.enteringLevel) {
                    Mouse.click = false;
                    menu.enterLevel(3);
                }
            }
            ctx.fillText("Level 3", 0, -40);
            if (saveData[3]) {
                ctx.font = "25px pressstart";
                ctx.fillText(createTimeText(saveData[3].time), 0, 20);
                let deathsText = `${saveData[3].deaths}/${maxDeaths[3]}`;
                ctx.fillText(deathsText, 15, 60);
                let width = ctx.measureText(deathsText).width;
                ctx.drawImage(images.skullScreen, -width / 2 - 25, 43, 30, 30);
            }
        });
        this.env.objects.push(screen7);
        let screen8 = new ImageDisplayScreen(pageDistance - 300, -550, 600, 200, function () {
            ctx.fillStyle = "lime";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "40px pressstart";
            ctx.fillText("Level Select", 0, 0);
        });
        this.env.objects.push(screen8);
        let screen9 = new ImageDisplayScreen(pageDistance - 150, 450, 300, 200, function () {
            ctx.fillStyle = "lime";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "40px pressstart";
            if (blocksColliding({ x: Mouse.x + pageDistance / 2, y: Mouse.y, w: 0, h: 0 }, { x: this.x / 2 + canvas.width / 2, y: this.y / 2 + canvas.height / 2, w: this.w / 2, h: this.h / 2 })) {
                ctx.scale(1.1, 1.1);
                if (Mouse.click && menu.targetCamX === pageDistance && !this.enteringLevel) {
                    Mouse.click = false;
                    menu.targetCamX = 0;
                }
            }
            ctx.fillText("Back", 0, 0);
        });
        this.env.objects.push(screen9);

        game.cam = new Camera();
        game.cam.x = 0;
        game.cam.y = 0;

        this.targetCamX = 0;
        this.enteringLevel = false;
    },
    tick: function () {
        this.update();
        this.draw();
    },
    update: function () {
        if (this.enteringLevel) {
            game.level.update();
            if (game.level.levelTransitionAnimation.animation == 190) page = "game";
        }

        if (this.startAnimation) this.startAnimation--;

        if (!audios.music.paused) {
            audios.music.pause();
        }

        game.cam.x = game.cam.x * 0.9 + this.targetCamX * 0.1;

        this.env.update();
        game.background.loadForeground([{ "x": 100, "y": -150, "w": 500, "h": 150, "borders": { "left": false, "right": false, "top": false, "bottom": false } }, { "x": -600, "y": -150, "w": 500, "h": 150, "borders": { "left": false, "right": false, "top": false, "bottom": false } }, { "x": -600, "y": 300, "w": 500, "h": 150, "borders": { "left": false, "right": false, "top": false, "bottom": false } }, { "x": 100, "y": 0, "w": 450, "h": 150, "borders": { "left": false, "right": false, "top": false, "bottom": false } }, { "x": 150, "y": 200, "w": 450, "h": 150, "borders": { "left": false, "right": false, "top": false, "bottom": false } }, { "x": 100, "y": 350, "w": 500, "h": 100, "borders": { "left": false, "right": false, "top": false, "bottom": false } }, { "x": -550, "y": 0, "w": 450, "h": 100, "borders": { "left": false, "right": false, "top": false, "bottom": false } }, { "x": -600, "y": 150, "w": 450, "h": 150, "borders": { "left": false, "right": false, "top": false, "bottom": false } }, { "x": 100, "y": 150, "w": 500, "h": 50, "borders": { "left": false, "right": false, "top": false, "bottom": false } }, { "x": -600, "y": 100, "w": 500, "h": 50, "borders": { "left": false, "right": false, "top": false, "bottom": false } }]);
    },
    draw: function () {
        game.background.draw();

        ctx.save();
        game.cam.alignViewport();
        this.env.draw();
        ctx.restore();

        let a = easeInOut(this.startAnimation / 20);
        ctx.save();
        ctx.globalAlpha = a;
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();

        if (this.enteringLevel) {
            game.level.drawLevelTransition();
        }
    },
    enterLevel: function (level) {
        this.enteringLevel = true;
        game.init();
        game.cam.x = this.targetCamX;
        game.level.levelNumber = level - 1;
        game.level.levelCompleteAnimation = 0;
        game.level.levelTransitionAnimation = {
            animation: 0,
            animatingOut: true,
            animatingIn: false,
            pauseGame: true
        };
    }
}

let maxDeaths = [30, 111, 260, 225];