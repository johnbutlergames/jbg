function updateBartPhase0(o, player) {
    if (o.t > 40) o.y -= 100 / (100 + o.t - 40);
    if (o.t === 80) {
        o.t = -19;
        o.phase = 1;
    }
}

function drawBartPhase0(o, a) {
    var s = 650;
    let s2 = 280;
    var gunAnimation = easeInOut(a / 10) * 0.47 + easeInOut((a - 40) / 10) * 0.53;
    var litOpacity = easeInOut((a - 40) / 10);
    var translateAnimation = 1 - easeInOut(a / 10) * 0.7 - easeInOut((a - 40) / 10) * 0.3;
    var clipAnimation = easeInOut(a / 12);
    var clipSize = 400 + 250 * clipAnimation;

    drawPhase1Gun({ x: o.x - 440 * gunAnimation, y: o.y + 20 + 100 * gunAnimation, flip: false, angle: 0, energy: 0, shoot: 0, shootPower: 10 });
    drawPhase1Gun({ x: o.x + 440 * gunAnimation, y: o.y + 20 + 100 * gunAnimation, flip: true, angle: 0, energy: 0, shoot: 0, shootPower: 10 });

    ctx.save();
    ctx.beginPath();
    ctx.rect(o.x - clipSize / 2, o.y - clipSize / 2, clipSize, clipSize);
    ctx.clip();
    if (litOpacity === 0) {
        ctx.drawImage(images.bartPhase1Spritesheet, 0, 0, 800, 800, o.x - s / 2, o.y - s / 2, s, s);
        ctx.drawImage(images.bartFaceSpritesheet, 0, 0, 200, 200, o.x - s2 / 2, o.y - s2 / 2, s2, s2);
        ctx.drawImage(images.bartFaceSpritesheet, 0, 200, 200, 200, o.x - s2 / 2, o.y - s2 / 2, s2, s2);
    } else if (litOpacity === 1) {
        ctx.drawImage(images.bartPhase1Spritesheet, 0, 800, 800, 800, o.x - s / 2, o.y - s / 2, s, s);
        ctx.drawImage(images.bartFaceSpritesheet, 200, 0, 200, 200, o.x - s2 / 2, o.y - s2 / 2, s2, s2);
        ctx.drawImage(images.bartFaceSpritesheet, 200, 200, 200, 200, o.x - s2 / 2, o.y - s2 / 2, s2, s2);
        ctx.drawImage(images.bartFaceSpritesheet, 0, 400, 200, 200, o.x - s2 / 2, o.y - s2 / 2, s2, s2);
    } else {
        ctx.drawImage(images.bartPhase1Spritesheet, 0, 0, 800, 800, o.x - s / 2, o.y - s / 2, s, s);
        ctx.drawImage(images.bartFaceSpritesheet, 0, 0, 200, 200, o.x - s2 / 2, o.y - s2 / 2, s2, s2);
        ctx.drawImage(images.bartFaceSpritesheet, 0, 200, 200, 200, o.x - s2 / 2, o.y - s2 / 2, s2, s2);
        ctx.save();
        ctx.globalAlpha = litOpacity;
        ctx.drawImage(images.bartPhase1Spritesheet, 0, 800, 800, 800, o.x - s / 2, o.y - s / 2, s, s);
        ctx.drawImage(images.bartFaceSpritesheet, 200, 0, 200, 200, o.x - s2 / 2, o.y - s2 / 2, s2, s2);
        ctx.drawImage(images.bartFaceSpritesheet, 200, 200, 200, 200, o.x - s2 / 2, o.y - s2 / 2, s2, s2);
        ctx.drawImage(images.bartFaceSpritesheet, 0, 400, 200, 200, o.x - s2 / 2, o.y - s2 / 2, s2, s2);
        ctx.restore();
    }
    ctx.restore();
    drawLayer2Quadrants(o, 1 - translateAnimation, litOpacity);
}