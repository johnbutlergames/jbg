game.background = {
    effect: {
        effects: [],
        start: function (type, origin, noBackground, noSoundEffect) {
            var effect = {};
            effect.type = type;
            effect.active = true;
            effect.noBackground = noBackground;
            effect.time = 0;
            var color = type;
            if (color == "blue") {
                if(!noSoundEffect) game.soundEffects.blueCubeClue();
                color = "rgba(50,120,255,0.3)";
            } else if (color == "red") {
                if(!noSoundEffect) game.soundEffects.redCubeClue();
                color = "rgba(255,100,100,0.4)";
            } else if (color == "green") {
                if(!noSoundEffect) game.soundEffects.shortcut();
                color = "rgba(0,200,50,0.3)";
            } else if (color == "magenta") {
                if(!noSoundEffect) game.soundEffects.ultra();
                color = "rgba(255,80,200,0.5)";
            }
            effect.color = color;
            effect.alpha = 1;
            effect.radius = 20;
            if (origin) {
                effect.origin = { x: origin.x, y: origin.y };
            } else {
                var player = game.objects.objects.find(e => e.type == "player");
                if (player) {
                    var x = player.x + player.w / 2;
                    var y = player.y + player.h / 2;
                    effect.origin = { x: x, y: y };
                } else {
                    effect.origin = { x: 0, y: 0 };
                }
            }
            this.effects.push(effect);
        },
        end: function (type) {
            if (type == "all") {
                this.effects = [];
                return;
            }
            var effects = this.effects.filter(e => e.type == type);
            effects.forEach(function (e) {
                e.active = false;
            });
        },
        active: function (type) {
            return Boolean(this.effects.find(e => e.type == type && !e.noBackground));
        },
        time: function (type) {
            return this.effects.find(e => e.type == type)?.time || 0;
        }
    },
    update: function () {
        for (var effect of this.effect.effects) {
            if (effect.active) {
                if (effect.type == "magenta") {
                    effect.radius *= 1.3;
                } else {
                    effect.radius *= 1.1;
                }
                effect.radius = Math.min(effect.radius, 5000);
                effect.alpha -= 0.02;
                effect.alpha = Math.max(effect.alpha, 0);
                effect.time = Math.max(effect.time, 0);
                effect.time++;
            } else {
                effect.time = Math.min(effect.time, 40);
                effect.time--;
            }
            if (!effect.active && !effect.time) effect.delete = true;
        }
        this.effect.effects = this.effect.effects.filter(e => !e.delete);
    },
    drawColorMatte: function () {
        ctx.fillStyle = "white";
        if (this.effect.active("magenta") && game.backgroundOpacity > 0) {
            ctx.fillStyle = "rgb(255,150,210)";
        }
        ctx.fillRect(0, 0, 1000, 1000);
    },
    draw: function () {
        if (game.backgroundOpacity === 0) return;

        var distance = 0.2;
        var tileSize = 700;
        var viewportSize = 1000 / game.cam.realZoom;
        var tileCount = Math.ceil(viewportSize / tileSize) * 2;
        var xOffsetDigit = Math.floor((game.cam.realX * (1 - distance)) / (tileSize * 2)) - tileCount / 4 + game.backgroundPatternOffset.x;
        var yOffsetDigit = Math.floor((game.cam.realY * (1 - distance)) / (tileSize * 2)) - tileCount / 4 + game.backgroundPatternOffset.y;
        var xOffset = Math.floor(game.cam.realX * (1 - distance) / (tileSize * 2)) * tileSize * 2 + game.cam.realX * distance + game.backgroundOffset.x;
        var yOffset = Math.floor(game.cam.realY * (1 - distance) / (tileSize * 2)) * tileSize * 2 + game.cam.realY * distance + game.backgroundOffset.y;

        ctx.save();
        ctx.translate(xOffset, yOffset);
        ctx.translate(-tileCount / 2 * tileSize, -tileCount / 2 * tileSize);
        ctx.globalAlpha = game.backgroundOpacity;

        let greenActive = this.effect.active("green");
        let redActive = this.effect.active("red");
        let blueActive = this.effect.active("blue");
        let magentaActive = this.effect.active("magenta");
        let effectActive = greenActive || redActive || blueActive || magentaActive;
        let topEffect = null;
        if (greenActive) topEffect = "green";
        if (blueActive) topEffect = "blue";
        if (redActive) topEffect = "red";
        if (magentaActive) topEffect = "magenta";
        let maxTime = Math.max(this.effect.time("green"), this.effect.time("red"), this.effect.time("blue"), this.effect.time("magenta"));
        let effectColor = null;
        if (topEffect == "green") {
            effectColor = "rgba(0,255,0,0.4)";
        } else if (topEffect == "blue") {
            effectColor = "rgba(0,80,255,0.4)";
        } else if (topEffect == "red") {
            effectColor = "rgba(255,0,0,0.4)";
        } else if (topEffect == "magenta") {
            effectColor = "rgb(255,0,200)";
        }
        for (var x = -2; x < tileCount + 2; x++) {
            for (var y = -2; y < tileCount + 2; y++) {
                var xCor = x + xOffsetDigit * 2;
                var yCor = y + yOffsetDigit * 2;

                ctx.save();
                ctx.translate(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2);

                for (var x2 = 0; x2 < 2; x2++) {
                    for (var y2 = 0; y2 < 2; y2++) {
                        ctx.fillStyle = "rgb(245,245,245)";
                        if (this.effect.active("magenta")) {
                            ctx.fillStyle = "rgb(255,130,200)";
                        }

                        ctx.save();
                        ctx.translate(x2 * tileSize / 2, y2 * tileSize / 2);
                        if ((x2 + y2) % 2 == 0) {
                            ctx.scale(0.4, 0.4);
                            ctx.rotate(45 * Math.PI / 180);
                            ctx.fillRect(-tileSize / 2.5, -tileSize / 2.5, tileSize / 1.25, tileSize / 1.25);
                            if (effectActive) {
                                var animateIn = easeInOut(maxTime / 40);
                                var time = t + x2 * 56 + y2 * 78 + Math.floor(Math.sin(xCor / 3) * 100) + Math.floor(Math.sin(yCor / 3) * 150);
                                var a = Math.min(Math.max(Math.sin(time / 30) - 0.6, 0) * 1.5, 1);
                                a *= animateIn;
                                ctx.globalAlpha *= a;
                                ctx.lineWidth = 20;
                                ctx.strokeStyle = effectColor;
                                ctx.strokeRect(-tileSize / 2.5 - 10, -tileSize / 2.5 - 10, tileSize / 1.25 + 20, tileSize / 1.25 + 20);
                            }
                        } else {
                            ctx.scale(0.3, 0.3);
                            ctx.fillRect(-tileSize / 2, -tileSize / 2, tileSize, tileSize);
                            if (effectActive) {
                                var animateIn = easeInOut(maxTime / 40);
                                var time = t + x2 * 56 + y2 * 78 + Math.floor(Math.sin(xCor / 3) * 100) + Math.floor(Math.sin(yCor / 3) * 150);
                                var a = Math.min(Math.max(Math.sin(time / 30) - 0.6, 0) * 1.5, 1);
                                a *= animateIn;
                                ctx.globalAlpha *= a;
                                ctx.lineWidth = 25;
                                ctx.strokeStyle = effectColor;
                                ctx.strokeRect(-tileSize / 2 - 12.5, -tileSize / 2 - 12.5, tileSize + 25, tileSize + 25);
                            }
                        }
                        ctx.restore();
                    }
                }

                if (effectActive) {
                    for (var n = 0; n < 4; n++) {
                        var x3 = n % 2;
                        var y3 = Math.floor(n / 2);
                        ctx.fillStyle = effectColor;
                        var animateIn = easeInOut(maxTime / 40);
                        var time = t + x3 * 56 + y3 * 78 + Math.floor(Math.sin(xCor / 3) * 100) + Math.floor(Math.sin(yCor / 3) * 150);
                        var s = 0.7 + Math.max(Math.sin(time / 10) - 0.6, 0) * 1.5;
                        s *= animateIn;
                        ctx.save();
                        ctx.translate(175 + x3 * 350, 175 + y3 * 350);
                        ctx.scale(s, s);
                        ctx.rotate(time * Math.PI / 180);
                        ctx.fillRect(-10, -10, 20, 20);
                        ctx.restore();
                    }
                }

                ctx.restore();
            }
        }

        ctx.restore();

        for (var effect of this.effect.effects) {
            if (!effect.active) continue;
            ctx.save();
            ctx.globalAlpha = effect.alpha;
            ctx.beginPath();
            ctx.fillStyle = effect.color;
            ctx.arc(effect.origin.x, effect.origin.y, effect.radius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.restore();
        }
    }
};