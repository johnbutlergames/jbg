game.background = {
    effect: {
        effects: [],
        start: function (type, origin, noBackground) {
            var effect = {};
            effect.type = type;
            effect.active = true;
            effect.noBackground = noBackground;
            effect.time = 0;
            var color = type;
            if (color == "blue") {
                game.soundEffects.blueCubeClue();
                color = "rgba(50,120,255,0.3)";
            } else if (color == "red") {
                game.soundEffects.redCubeClue();
                color = "rgba(255,100,100,0.4)";
            } else if (color == "green") {
                game.soundEffects.shortcut();
                color = "rgba(0,200,50,0.3)";
            } else if (color == "magenta") {
                game.soundEffects.ultra();
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
                effect.radius *= 1.1;
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
                            if (this.effect.active("red")) {
                                var animateIn = easeInOut(this.effect.time("red") / 40);
                                var time = t + (noise((1000 + xCor + x2 / 2) / 1.05, (1000 + yCor + y2 / 2) / 1.05, 0) - 0.2) * 7 * 600;
                                var s = Math.max((Math.sin((time / 600) % (Math.PI / 2)) - 0.975) * 40, 0);
                                s *= animateIn;
                                ctx.rotate(90 * Math.PI / 180 * s);
                            }
                            ctx.fillRect(-tileSize / 2.5, -tileSize / 2.5, tileSize / 1.25, tileSize / 1.25);
                            if (this.effect.active("red")) {
                                var animateIn = easeInOut(this.effect.time("red") / 40);
                                var time = t + (noise((1000 + xCor + x2 / 2) / 1.05, (1000 + yCor + y2 / 2) / 1.05, 0) - 0.2) * 7 * 600;
                                var s = Math.max((Math.sin((time / 600) % (Math.PI / 2)) - 0.975) * 40, 0);
                                s *= animateIn;
                                ctx.globalAlpha = easeInBack(s);
                                if (!this.effect.active("magenta")) ctx.fillStyle = "rgba(255,100,100,0.4)";
                                ctx.fillRect(-tileSize / 2.5, -tileSize / 2.5, tileSize / 1.25, tileSize / 1.25);
                                ctx.globalAlpha = 1;
                                ctx.fillStyle = "black";
                                ctx.font = "50px Arial";
                            }
                            if (this.effect.active("green")) {
                                var animateIn = easeInOut(this.effect.time("green") / 40);
                                var time = t + x2 * 56 + y2 * 78 + Math.floor(Math.sin(xCor / 3) * 100) + Math.floor(Math.sin(yCor / 3) * 150);
                                var a = Math.min(Math.max(Math.sin(time / 30) - 0.6, 0) * 1.5, 1);
                                a *= animateIn;
                                ctx.globalAlpha *= a;
                                ctx.lineWidth = 20;
                                ctx.strokeStyle = "rgba(0,255,0,0.4)";
                                if (this.effect.active("magenta")) {
                                    ctx.strokeStyle = "rgb(255,0,200)";
                                }
                                ctx.strokeRect(-tileSize / 2.5 - 10, -tileSize / 2.5 - 10, tileSize / 1.25 + 20, tileSize / 1.25 + 20);
                            }
                            if (this.effect.active("blue")) {
                                var animateIn = easeInOut(this.effect.time("blue") / 40);
                                var time = t + x2 * 30 + y2 * 10 + xCor * 60 + yCor * 20;
                                var a = Math.min(Math.max(Math.sin(time / 60) - 0.8, 0) * 5, 1);
                                a *= animateIn;
                                ctx.globalAlpha *= a;
                                ctx.lineWidth = 20;
                                ctx.strokeStyle = "rgba(0,50,255,0.5)";
                                if (this.effect.active("magenta")) {
                                    ctx.strokeStyle = "rgb(255,0,200)";
                                }
                                ctx.strokeRect(-tileSize / 2.5 - 10, -tileSize / 2.5 - 10, tileSize / 1.25 + 20, tileSize / 1.25 + 20);
                                ctx.fillStyle = "rgba(0,50,255,0.1)";
                                if (this.effect.active("magenta")) {
                                    ctx.fillStyle = "rgba(255,0,200,0.1)";
                                }
                                ctx.fillRect(-tileSize / 2.5, -tileSize / 2.5, tileSize / 1.25, tileSize / 1.25);
                            }
                        } else {
                            ctx.scale(0.3, 0.3);
                            if (this.effect.active("red")) {
                                var animateIn = easeInOut(this.effect.time("red") / 40);
                                var time = t + (noise((xCor + x2 / 2) / 1.05, (yCor + y2 / 2) / 1.05, 0) - 0.2) * 7 * 600;
                                var s = Math.max((Math.sin((time / 600) % (Math.PI / 2)) - 0.975) * 40, 0);
                                s *= animateIn;
                                ctx.rotate(-90 * Math.PI / 180 * s);
                            }
                            ctx.fillRect(-tileSize / 2, -tileSize / 2, tileSize, tileSize);
                            if (this.effect.active("red")) {
                                var animateIn = easeInOut(this.effect.time("red") / 40);
                                var time = t + (noise((xCor + x2 / 2) / 1.05, (yCor + y2 / 2) / 1.05, 0) - 0.2) * 7 * 600;
                                var s = Math.max((Math.sin((time / 600) % (Math.PI / 2)) - 0.975) * 40, 0);
                                s *= animateIn;
                                ctx.globalAlpha = easeInBack(s);
                                if (!this.effect.active("magenta")) ctx.fillStyle = "rgba(255,100,100,0.4)";
                                ctx.fillRect(-tileSize / 2, -tileSize / 2, tileSize, tileSize);
                            }
                            if (this.effect.active("green")) {
                                var animateIn = easeInOut(this.effect.time("green") / 40);
                                var time = t + x2 * 56 + y2 * 78 + Math.floor(Math.sin(xCor / 3) * 100) + Math.floor(Math.sin(yCor / 3) * 150);
                                var a = Math.min(Math.max(Math.sin(time / 30) - 0.6, 0) * 1.5, 1);
                                a *= animateIn;
                                ctx.globalAlpha *= a;
                                ctx.lineWidth = 25;
                                ctx.strokeStyle = "rgba(0,255,0,0.4)";
                                if (this.effect.active("magenta")) {
                                    ctx.strokeStyle = "rgb(255,0,200)";
                                }
                                ctx.strokeRect(-tileSize / 2 - 12.5, -tileSize / 2 - 12.5, tileSize + 25, tileSize + 25);
                            }
                            if (this.effect.active("blue")) {
                                var animateIn = easeInOut(this.effect.time("blue") / 40);
                                var time = t + x2 * 30 + y2 * 10 + xCor * 60 + yCor * 20 + 200;
                                var a = Math.min(Math.max(Math.sin(time / 60) - 0.8, 0) * 5, 1);
                                a *= animateIn;
                                ctx.globalAlpha *= a;
                                ctx.lineWidth = 25;
                                ctx.strokeStyle = "rgba(0,50,255,0.5)";
                                if (this.effect.active("magenta")) {
                                    ctx.strokeStyle = "rgb(255,0,200)";
                                }
                                ctx.strokeRect(-tileSize / 2 - 12.5, -tileSize / 2 - 12.5, tileSize + 25, tileSize + 25);
                                ctx.fillStyle = "rgba(0,50,255,0.1)";
                                if (this.effect.active("magenta")) {
                                    ctx.fillStyle = "rgba(255,0,200,0.1)";
                                }
                                ctx.fillRect(-tileSize / 2, -tileSize / 2, tileSize, tileSize);
                            }
                        }
                        ctx.restore();
                    }
                }

                if (this.effect.active("green")) {
                    for (var n = 0; n < 4; n++) {
                        var x3 = n % 2;
                        var y3 = Math.floor(n / 2);
                        ctx.fillStyle = "rgba(0,255,0,0.4)";
                        if (this.effect.active("magenta")) {
                            ctx.fillStyle = "rgb(255,0,200)";
                        }
                        var animateIn = easeInOut(this.effect.time("green") / 40);
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