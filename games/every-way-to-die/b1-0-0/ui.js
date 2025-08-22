let ui = {
    iconAnimations: [],
    musicMuted: false,
    tick: function () {
        this.update();
        this.draw();
    },
    update: function () {
        for (let n = 0; n < 3; n++) {
            if (n > 0 && page == "menu") continue;
            let coordinate = { x: n * 60 + 40, y: 40 };
            let mouseClick = Mouse.click && blocksColliding({ x: Mouse.x, y: Mouse.y, w: 0, h: 0 }, { x: coordinate.x - 25, y: coordinate.y - 25, w: 50, h: 50 });
            if (mouseClick) {
                if (n === 0) {
                    this.musicMuted = !this.musicMuted;
                }
                if (n === 1) {
                    this.escape();
                }
                if (n === 2) {
                    this.restart();
                }
            }
        }
        if (page == "game" && Keys.down.escape) {
            this.escape();
        }
        if (page == "game" && Keys.down.r) {
            this.restart();
        }
    },
    escape: function () {
        page = "menu";
        menu.init();
    },
    restart: function () {
        let player = game.env.objects.find(e => e instanceof Player);
        if (player) {
            player.delete = true;
            game.env.objects = game.env.objects.filter(e => !e.delete);
            player = new Player(game.level.spawnPoint.x, game.level.spawnPoint.y);
            game.env.objects.push(player);
        }
    },
    draw: function () {
        for (let n = 0; n < 3; n++) {
            if (n > 0 && page == "menu") continue;
            ctx.save();
            ctx.translate(n * 60 + 40, 40);
            if (n === 0) {
                let image = this.musicMuted ? images.volumeMuted : images.volume;
                ctx.drawImage(image, -25, -25, 50, 50);
            }
            if (n === 1) {
                let image = images.exit;
                ctx.drawImage(image, -25, -25, 50, 50);
            }
            if (n === 2) {
                let image = images.restart;
                ctx.drawImage(image, -25, -25, 50, 50);
            }
            ctx.restore();
        }
        if (page == "game") {
            ctx.fillStyle = "black";
            ctx.strokeStyle = "white";
            ctx.lineWidth = 4;
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            ctx.font = "bold 40px Trebuchet MS";
            ctx.strokeText(createTimeText(game.level.levelTime), 220, 40);
            ctx.fillText(createTimeText(game.level.levelTime), 220, 40);
        }
    }
}

function createTimeText(time) {
    var milliseconds = time % 100 + "";
    if (milliseconds.length < 2) milliseconds = "0" + milliseconds;
    var seconds = Math.floor(time / 100) % 60 + "";
    if (seconds.length < 2 && time >= 6000) seconds = "0" + seconds;
    if (time < 6000) return `${seconds}.${milliseconds}`;
    var minutes = Math.floor(time / 6000) % 60 + "";
    if (minutes.length < 2 && time >= 360000) minutes = "0" + minutes;
    if (time < 360000) return `${minutes}:${seconds}.${milliseconds}`;
    var hours = Math.floor(time / 360000);
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}