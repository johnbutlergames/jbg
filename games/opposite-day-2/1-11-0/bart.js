function updateBart(o) {
    if (!o.t) o.t = 0;
    o.t += 1;
    if (o.phase == 0) {
        if (o.t > 40) o.y -= 100 / (100 + o.t - 40);
    }
}
function drawBart(o) {
    var a = o.t;
    if (isNaN(a)) a = 0;
    if (o.phase == 0) {
        var s = 650;
        var litOpacity = easeInOut((a - 40) / 10);
        var translateAnimation = 1 - easeInOut(a / 10);
        var clipAnimation = easeInOut(a / 12);
        var clipSize = 400 + 250 * clipAnimation;
        ctx.save();
        ctx.beginPath();
        ctx.rect(o.x - clipSize / 2, o.y - clipSize / 2, clipSize, clipSize);
        ctx.clip();
        if (litOpacity === 0) {
            ctx.drawImage(images.bartPhase1TransformationSpritesheet, 0, 0, 800, 800, o.x - s / 2, o.y - s / 2, s, s);
        } else if (litOpacity === 1) {
            ctx.drawImage(images.bartPhase1TransformationSpritesheet, 0, 800, 800, 800, o.x - s / 2, o.y - s / 2, s, s);
        } else {
            ctx.drawImage(images.bartPhase1TransformationSpritesheet, 0, 0, 800, 800, o.x - s / 2, o.y - s / 2, s, s);
            ctx.save();
            ctx.globalAlpha = litOpacity;
            ctx.drawImage(images.bartPhase1TransformationSpritesheet, 0, 800, 800, 800, o.x - s / 2, o.y - s / 2, s, s);
            ctx.restore();
        }
        ctx.restore();
        if (a < 50 || true) {
            for (var n = 0; n < 4; n++) {
                var quadrant = {
                    x: (n % 2) * 400,
                    y: Math.floor(n / 2) * 400
                }
                quadrant.x2 = quadrant.x / 400 * 650 / 2;
                quadrant.y2 = quadrant.y / 400 * 650 / 2;
                var translate = {
                    x: 230 / 800 * 650 / 2,
                    y: 230 / 800 * 650 / 2
                }
                if (n === 1) {
                    translate.x *= -1;
                }
                if (n === 2) {
                    translate.y *= -1;
                }
                if (n === 3) {
                    translate.x *= -1;
                    translate.y *= -1;
                }
                translate.x *= translateAnimation;
                translate.y *= translateAnimation;
                ctx.save();
                ctx.translate(translate.x, translate.y);
                ctx.drawImage(images.bartPhase1TransformationSpritesheet, 800 + quadrant.x, quadrant.y, 400, 400, o.x - s / 2 + quadrant.x2, o.y - s / 2 + quadrant.y2, s / 2, s / 2);
                ctx.save();
                ctx.globalAlpha = litOpacity;
                ctx.drawImage(images.bartPhase1TransformationSpritesheet, 800 + quadrant.x, 800 + quadrant.y, 400, 400, o.x - s / 2 + quadrant.x2, o.y - s / 2 + quadrant.y2, s / 2, s / 2);
                ctx.restore();
                ctx.restore();
            }
        } else {
            ctx.drawImage(images.bartPhase1TransformationSpritesheet, 800, 800, 800, 800, o.x - s / 2, o.y - s / 2, s, s);
        }
    }
}