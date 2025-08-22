game.background = {
    foreground: null,
    clouds: null,
    draw: function () {
        let grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
        grd.addColorStop(0, "rgb(235,255,255)");
        grd.addColorStop(1, "rgb(210,255,255)");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        let x = -game.cam.x * 0.025;
        let y = -game.cam.y * 0.025;
        x = (x % 2000 + 2000) % 2000;
        for (let x1 = x - 2000; x1 < canvas.width; x1 += 2000) {
            ctx.drawImage(images.mountain3, x1, y + canvas.height * 0.4, 2000, 500);
        }

        x = -game.cam.x * 0.02;
        y = -game.cam.y * 0.02;
        x = (x % 2000 + 2000) % 2000;
        for (let x1 = x - 2000; x1 < canvas.width; x1 += 2000) {
            ctx.drawImage(images.mountain2, x1, y + canvas.height * 0.47, 2000, 500);
        }

        x = -game.cam.x * 0.01;
        y = -game.cam.y * 0.01;
        x = (x % 2000 + 2000) % 2000;
        for (let x1 = x - 2000; x1 < canvas.width; x1 += 2000) {
            ctx.drawImage(images.mountain1, x1, y + canvas.height * 0.54, 2000, 500);
        }

        x = -game.cam.x * 0.03;
        y = -game.cam.y * 0.03;
        x = (x % 2000 + 2000) % 2000;
        for (let x1 = x - 2000; x1 < canvas.width; x1 += 2000) {
            ctx.save();
            ctx.globalAlpha = 0.5;
            ctx.drawImage(images.clouds2, x1, y + canvas.height * 0.2, 2000, 500);
            ctx.restore();
        }

        x = -game.cam.x * 0.05;
        y = -game.cam.y * 0.05;
        x = (x % 1000 + 1000) % 1000;
        for (let x1 = x - 1000; x1 < canvas.width; x1 += 1000) {
            ctx.save();
            ctx.globalAlpha = 0.7;
            ctx.drawImage(images.clouds1, x1, y + canvas.height * 0.2, 1000, 250);
            ctx.restore();
        }

        for (let o of this.clouds) {
            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.scale(game.cam.zoom * o.z, game.cam.zoom * o.z);
            ctx.translate(-game.cam.x, -game.cam.y);

            ctx.fillStyle = "white";
            ctx.strokeStyle = "black";
            // ctx.fillRect(o.x, o.y, o.w, o.h);
            //ctx.strokeRect(o.x, o.y, o.w, o.h);

            ctx.restore();
        }

        let extraWidth = 1;
        let e = extraWidth;
        ctx.save();
        game.cam.alignViewport();
        for (let o of this.foreground) {
            ctx.save();
            ctx.beginPath();
            ctx.rect(o.x - e, o.y - e, o.w + e * 2, o.h + e * 2);
            ctx.clip();

            let x = Math.floor(o.x / 400) * 400;
            let y = Math.floor(o.y / 400) * 400;
            for (let x2 = x; x2 < o.x + o.w; x2 += 400) {
                for (let y2 = y; y2 < o.y + o.h; y2 += 400) {
                    ctx.drawImage(images.stoneTexture, x2, y2, 400, 400);
                }
            }

            ctx.restore();
        }
        ctx.restore();
    },
    loadForeground: function (foreground) {
        this.foreground = foreground;
        this.clouds = [];

        for (let n = 0; n < 40; n++) {
            this.clouds.push({
                type: "cloud",
                x: n / 20 * 15000 - 7500,
                y: Math.random() * -7000,
                w: 1000,
                h: 1000,
                z: 0.2 + Math.random() * 0.3
            });
        }
        this.clouds.sort((a, b) => a.z - b.z);
    }
}