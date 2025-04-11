var game = {
    update: function () {
        this.level.update();
    },
    updateEffects: function () {
        var groups = this.objects.generateGroups();

        this.objects.update(groups);
        this.player.update(groups);
        this.player.updateObjectCollisions(groups);
        this.cam.update();
        this.particles.update();
        this.ui.update();
    },
    draw: function () {
        ctx.save();
        this.level.clipGameArea();

        this.drawBackground();

        ctx.save();
        this.cam.alignViewport();

        this.particles.drawBelow();
        this.drawExit();
        this.objects.draw();
        this.particles.drawAbove();

        ctx.restore();

        this.ui.draw();
        this.level.draw();

        ctx.restore();

        this.level.drawLevelIntroAnimation();
    },
    reset: function () {
        this.level.reset();
        this.player.reset();
        this.cam.reset();
        this.player.goldCollected = 0;
        this.player.gemsCollected = 0;
    },
    newGame: function () {
        data = {
            day: 1,
            speedUpgrade: 0,
            healthUpgrade: 0,
            portalUpgrade: 0,
            inventoryUpgrade: 0,
            gems: 0,
            gold: 0,
            inventory: [{}],
            playerInventory: [{}]
        }
        this.reset();
    },
    ui: {
        draw: function () {
            this.drawPlayerHealthBar();
        },
        update: function () {

        },
        drawPlayerHealthBar: function () {
            var sectionWidth = 100;
            ctx.save();
            ctx.translate(20, 20);
            for (var n = 0; n < game.player.maxHealth / 100; n++) {
                var currentPercent = Math.min(100, game.player.maxHealth - n * 100) / 100;
                var healthPercent = Math.max(0, Math.min(100, game.player.health - n * 100)) / 100;
                ctx.save();
                ctx.translate(n * (sectionWidth - 2), 0);

                ctx.fillStyle = "black";
                ctx.roundRect(0, 0, currentPercent * sectionWidth, 30, 6);
                ctx.fill();

                ctx.fillStyle = "rgb(30,30,30)";
                ctx.roundRect(2, 2, currentPercent * sectionWidth - 4, 26, 4);
                ctx.fill();

                ctx.save();
                ctx.roundRect(2, 2, sectionWidth * currentPercent - 4, 26, 4);
                ctx.clip();
                ctx.fillStyle = "red";
                ctx.fillRect(2, 2, (sectionWidth - 4) * healthPercent, 26);
                ctx.restore();

                for (var n2 = 0; n2 < healthPercent; n2 += 0.25) {
                    ctx.strokeStyle = "rgb(150,0,0)";
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(2 + (sectionWidth - 4) * n2, 2);
                    ctx.lineTo(2 + (sectionWidth - 4) * n2, 28);
                    ctx.stroke();
                }
                ctx.restore();
            }
            ctx.restore();
        }
    },
    drawExit: function () {
        var d = this.level.dimensions, x = d.x, y = d.y, w = d.w, h = d.h;

        var a = Math.min(this.level.levelCompleteAnimation / this.level.levelCompleteAnimationCap * 4, 1);
        ctx.fillStyle = "rgba(150,200,150,0.2)";
        ctx.fillStyle = `rgba(${150 - 20 * a},${200 + 20 * a},${150 - 20 * a},${0.2 + 0.2 * a})`;
        ctx.fillRect(x - 2000, y - 2000, w + 4000, 2000);
        ctx.fillRect(x - 2000, y + h, w + 4000, 2000);
        ctx.fillRect(x - 2000, y - 0.1, 2000, h + 0.2);
        ctx.fillRect(x + w, y - 0.1, 2000, h + 0.2);

        ctx.strokeStyle = "lime";
        ctx.lineWidth = 3;
        ctx.strokeRect(x, y, w, h);
        var gradientWidth = 20;
        var grd = ctx.createLinearGradient(x, y, x, y - gradientWidth);
        grd.addColorStop(0, "rgba(0,255,0,0.5)");
        grd.addColorStop(1, "rgba(0,255,0,0)");
        ctx.fillStyle = grd;
        ctx.fillRect(x, y - gradientWidth, w, gradientWidth);
        var grd = ctx.createLinearGradient(x, y + h, x, y + h + gradientWidth);
        grd.addColorStop(0, "rgba(0,255,0,0.5)");
        grd.addColorStop(1, "rgba(0,255,0,0)");
        ctx.fillStyle = grd;
        ctx.fillRect(x, y + h, w, gradientWidth);
        var grd = ctx.createLinearGradient(x, y, x - gradientWidth, y);
        grd.addColorStop(0, "rgba(0,255,0,0.5)");
        grd.addColorStop(1, "rgba(0,255,0,0)");
        ctx.fillStyle = grd;
        ctx.fillRect(x - gradientWidth, y, gradientWidth, h);
        var grd = ctx.createLinearGradient(x + w, y, x + w + gradientWidth, y);
        grd.addColorStop(0, "rgba(0,255,0,0.5)");
        grd.addColorStop(1, "rgba(0,255,0,0)");
        ctx.fillStyle = grd;
        ctx.fillRect(x + w, y, gradientWidth, h);
        var grd = ctx.createRadialGradient(x, y, 0, x, y, gradientWidth);
        grd.addColorStop(0, "rgba(0,255,0,0.5)");
        grd.addColorStop(1, "rgba(0,255,0,0)");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(x, y, gradientWidth, Math.PI, 1.5 * Math.PI);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.fill();
        var grd = ctx.createRadialGradient(x + w, y, 0, x + w, y, gradientWidth);
        grd.addColorStop(0, "rgba(0,255,0,0.5)");
        grd.addColorStop(1, "rgba(0,255,0,0)");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(x + w, y, gradientWidth, Math.PI * 1.5, 2 * Math.PI);
        ctx.lineTo(x + w, y);
        ctx.closePath();
        ctx.fill();
        var grd = ctx.createRadialGradient(x + w, y + h, 0, x + w, y + h, gradientWidth);
        grd.addColorStop(0, "rgba(0,255,0,0.5)");
        grd.addColorStop(1, "rgba(0,255,0,0)");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(x + w, y + h, gradientWidth, 0, 0.5 * Math.PI);
        ctx.lineTo(x + w, y + h);
        ctx.closePath();
        ctx.fill();
        var grd = ctx.createRadialGradient(x, y + h, 0, x, y + h, gradientWidth);
        grd.addColorStop(0, "rgba(0,255,0,0.5)");
        grd.addColorStop(1, "rgba(0,255,0,0)");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(x, y + h, gradientWidth, 0.5 * Math.PI, Math.PI);
        ctx.lineTo(x, y + h);
        ctx.closePath();
        ctx.fill();
    },
    endGame: function () {
    },
    drawBackground: function () {
        ctx.save();
        this.cam.alignViewport();
        var tileSize = 200;
        var xCount = (1000 / tileSize) / this.cam.zoom;
        var yCount = (1000 / tileSize) / this.cam.zoom;
        var xOffset = Math.floor(this.cam.x / (tileSize * 2)) * (tileSize * 2);
        var yOffset = Math.floor(this.cam.y / (tileSize * 2)) * (tileSize * 2);
        for (var x = Math.floor(-xCount / 2 - 2), xNum = 0; x < xCount + 2; x++, xNum++) {
            for (var y = Math.floor(-yCount / 2 - 2), yNum = 0; y < yCount + 2; y++, yNum++) {
                if ((xNum + yNum) % 2 == 0) {
                    continue;
                    ctx.fillStyle = "white";
                } else {
                    ctx.fillStyle = "rgb(240,240,240)";
                }
                ctx.fillRect(x * tileSize + xOffset, y * tileSize + yOffset, tileSize, tileSize);
            }
        }
        ctx.restore();
    },
    level: {
        level: 0,
        levelComplete: false,
        levelCompleteAnimation: 0,
        levelCompleteAnimationCap: 100,
        levelIntro: false,
        levelIntroAnimation: 0,
        levelIntroAnimationCap: 100,
        levelTransition: 0,
        levelTransitionCap: 100,
        zoomedOut: 100,
        playerSpawnCoordinates: { x: 0, y: 0 },
        playerCanMove: true,
        playerZombifiedAnimation: 0,
        dimensions: { x: 0, y: 0, w: 0, h: 0 },
        update: function () {
            this.updateIntro();
            this.updateOutro();
            this.updateGameOverMenu();

            this.playerCanMove = true;
            if (this.levelIntroAnimation > 0) this.playerCanMove = false;
            if (this.levelTransition > this.levelTransitionCap * 0.6 && !this.levelComplete) this.playerCanMove = false;
            if (game.player.zombified && !this.playerZombifiedAnimation) {
                game.endGame();
            }
            if (game.player.zombified) this.playerZombifiedAnimation++;
        },
        draw: function () {
            this.drawNavigation();
            this.drawGameOverMenu();
        },
        reset: function () {
            this.level = 0;
            this.levelComplete = false;
            this.levelCompleteAnimation = 0;
            this.levelIntro = true;
            this.levelTransition = this.levelTransitionCap;
            this.levelIntroAnimation = 1;
            this.playerZombifiedAnimation = 0;
            this.zoomedOut = 100;
            this.generateNewLevel();

            game.player.regularSpeed = calculatePlayerSpeed();
            game.player.maxHealth = calculatePlayerHealth();
            game.player.health = game.player.maxHealth;
        },
        updateGameOverMenu: function () {
            if (this.playerZombifiedAnimation < 140) return;
            if (Mouse.clickInBox(200, 830, 270, 110)) {
                menu.switchPage = "new day";
            }
            if (Mouse.clickInBox(530, 830, 270, 110)) {
                menu.switchPage = "home";
            }
        },
        drawNavigation: function () {
            ctx.save();
            var a = 1 - easeInOut(this.playerZombifiedAnimation / 100);
            ctx.globalAlpha = a;

            this.drawUI();
            this.drawMap();

            ctx.restore();
        },
        drawUI: function () {
        },
        drawMap: function () {
            var x = 805;
            var y = 805;
            var w = 150;
            var h = 150;
            ctx.strokeStyle = "black";
            ctx.fillStyle = "rgb(200,240,200)";
            ctx.lineWidth = 10;
            ctx.strokeRect(x, y, w, h);
            ctx.fillRect(x, y, w, h);
            var mapDimensions = { x: this.dimensions.x - 500, y: this.dimensions.y - 500, w: this.dimensions.w + 1000, h: this.dimensions.h + 1000 };
            var scale = Math.min(w / mapDimensions.w, h / mapDimensions.h);
            var xOffset = -(mapDimensions.w * scale - w) / 2 - mapDimensions.x * scale;
            var yOffset = -(mapDimensions.h * scale - h) / 2 - mapDimensions.y * scale;
            ctx.save();
            ctx.translate(x + xOffset, y + yOffset);
            ctx.scale(scale, scale);
            ctx.fillStyle = "rgb(240,240,240)";
            ctx.fillRect(this.dimensions.x, this.dimensions.y, this.dimensions.w, this.dimensions.h);
            for (var o of game.objects.objects) {
                if (o.type == "block") {
                    ctx.fillStyle = "black";
                    ctx.fillRect(o.x, o.y, o.w, o.h);
                }
                if (o.type == "collectable" && o.collectableType == "gold") {
                    ctx.fillStyle = "rgb(255,215,0)";
                    ctx.fillRect(o.x - 25, o.y - 25, 50, 50);
                }
            }
            for (var o of game.objects.objects) {
                if (o.type == "collectable" && o.collectableType == "gem") {
                    ctx.fillStyle = "rgb(0,200,255)";
                    ctx.fillRect(o.x - 50, o.y - 50, 100, 100);
                }
            }
            ctx.fillStyle = "red";
            ctx.fillRect(game.player.cx - 60, game.player.cy - 60, 120, 120);
            ctx.restore();
        },
        drawGameOverMenu: function () {
            if (!this.playerZombifiedAnimation) return;

            var a = easeInOut((this.playerZombifiedAnimation - 20) / 50);
            ctx.save();
            ctx.globalAlpha = a;

            ctx.save();
            ctx.translate(500, 200);
            ctx.scale(a, a);
            ctx.lineWidth = 20;
            ctx.lineJoin = "round";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "bold 90px Trebuchet MS";
            ctx.fillStyle = "rgb(0,100,0)";
            ctx.strokeStyle = "rgb(0,60,0)";
            ctx.strokeText("YOU GOT ZOMBIFIED!", 0, 0);
            ctx.fillText("YOU GOT ZOMBIFIED!", 0, 0);
            ctx.restore();

            var a2 = easeInOut((this.playerZombifiedAnimation - 120) / 20);
            ctx.globalAlpha = a2;

            ctx.fillStyle = "rgba(255,255,255,0.7)";
            ctx.fillRect(0, 590, 1000, 410);

            ctx.strokeStyle = "black";
            ctx.lineWidth = 5;
            ctx.fillStyle = "white";
            if (Mouse.inBox(200, 830, 270, 110)) {
                ctx.fillStyle = "rgb(235,235,235)";
            }
            ctx.roundRect(200, 830, 270, 110, 25);
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle = "white";
            if (Mouse.inBox(530, 830, 270, 110)) {
                ctx.fillStyle = "rgb(235,235,235)";
            }
            ctx.roundRect(530, 830, 270, 110, 25);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "60px Trebuchet MS";
            ctx.fillText("Next Day", 200 + 270 / 2, 830 + 110 / 2);
            ctx.fillText("Upgrades", 530 + 270 / 2, 830 + 110 / 2);

            ctx.restore();
        },
        updateIntro: function () {
            if (this.levelComplete) return;
            if (this.levelIntroAnimation) {
                this.levelIntroAnimation++;
                if (this.levelIntroAnimation == this.levelIntroAnimationCap) this.levelIntroAnimation = 0;
                return;
            }
            this.levelTransition--;
            this.levelTransition = Math.max(this.levelTransition, 0);
            if (!this.playerCanMove) return;
            var pressedKey = false;
            var movementKeys = [37, 38, 39, 40, 65, 68, 83, 87];
            for (var key of movementKeys) {
                if (Keys.keys[key]) {
                    pressedKey = true;
                    break;
                }
            }
            if (this.levelIntro) this.levelIntro = !pressedKey;
            if (!this.levelIntro) {
                if (this.zoomedOut) this.zoomedOut--;
            }
        },
        updateOutro: function () {
            if (!this.levelComplete) return;
            this.levelCompleteAnimation++;
            if (this.levelCompleteAnimation < this.levelCompleteAnimationCap) return;
            this.levelTransition++;
            if (this.levelTransition >= this.levelTransitionCap) {
                this.newLevel();
            }
        },
        clipGameArea: function () {
            if (!this.levelTransition) return;
            var a = this.levelTransition / this.levelTransitionCap;

            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, 1000, 1000);

            var radius = easeInOut(1 - a) * 1500;
            ctx.translate(500 - game.cam.x * game.cam.zoom, 500 - game.cam.y * game.cam.zoom);
            var x = game.player.x + game.player.w / 2;
            var y = game.player.y + game.player.h / 2;
            ctx.translate(x * game.cam.zoom, y * game.cam.zoom);
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, 2 * Math.PI);
            ctx.clip();
            ctx.translate(-x * game.cam.zoom, -y * game.cam.zoom);
            ctx.translate(game.cam.x * game.cam.zoom - 500, game.cam.y * game.cam.zoom - 500);

            ctx.clearRect(0, 0, 1000, 1000);
        },
        drawLevelIntroAnimation: function () {
            if (!this.levelIntroAnimation) return;

            var a = this.levelIntroAnimation / this.levelIntroAnimationCap;
            ctx.save();
            ctx.globalAlpha = easeInOut(a * 4) * easeInOut((1 - a) * 4);

            this.drawLevelText(a);

            ctx.restore();
        },
        drawLevelText: function (a) {
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            ctx.font = "bold 50px Trebuchet MS";
            ctx.fillText(`Day ${data.day}`, 500, 330);

            ctx.font = "bold 120px Trebuchet MS";
            ctx.fillText(`Level ${this.level + 1}`, 500, 450);
        },
        generateNewLevel: function () {
            generate.generateLevel(this.level);
        },
        newLevel: function () {
            this.level++;
            this.levelComplete = false;
            this.levelCompleteAnimation = 0;
            this.levelIntro = true;
            this.levelIntroAnimation = 1;
            this.zoomedOut = 100;
            game.player.reset();
            this.generateNewLevel();
        }
    },
    objects: {
        objects: [],
        wallMap: [],
        xOffset: -2,
        yOffset: -5,
        update: function (groups) {
            this.updateZombies(groups);
            this.objects = this.objects.filter(e => !e.delete);
        },
        draw: function () {
            this.drawBottomBlocks();
            var objects = [...this.objects, game.player];
            objects = objects.sort((a, b) => a.cx + a.cy + a.z - b.cx - b.cy - b.z);
            for (var o of objects) {
                if (o.type == "player") {
                    o.draw();
                } else {
                    this.drawObject(o);
                }
                o.z = o.z || 0;
                o.cx = o.cx || o.x;
                o.cy = o.cy || o.y;
            }
            this.drawTopBlocks();
        },
        drawBottomBlocks: function () {
            for (var o of this.objects) {
                if (o.type != "block") continue;
                ctx.save();
                ctx.translate(o.x, o.y);
                ctx.fillStyle = "rgb(100,100,100)";
                ctx.fillRect(0, 0, o.w, o.h);
                ctx.beginPath();
                ctx.moveTo(o.w + this.xOffset, this.yOffset);
                ctx.lineTo(o.w, 0);
                ctx.lineTo(0, o.h);
                ctx.lineTo(0 + this.xOffset, o.h + this.yOffset);
                ctx.fill();
                ctx.restore();
            }
        },
        drawTopBlocks: function () {
            for (var o of this.objects) {
                if (o.type != "block") continue;
                ctx.save();
                ctx.translate(o.x, o.y);
                ctx.translate(this.xOffset, this.yOffset);
                ctx.fillStyle = "black";
                ctx.fillRect(-0.1, -0.1, o.w + 0.2, o.h + 0.2);
                ctx.restore();
            }
        },
        generateGroups: function () {
            var groups = { zombie: [], block: [], collectable: [], collidable: [] };
            for (var n = 0; n < this.objects.length; n++) {
                var o = this.objects[n];
                if (o.collidable) {
                    groups.collidable.push(o);
                }
                if (!groups[o.type]) continue;
                groups[o.type].push(o);
            }
            return groups;
        },
        drawObject: function (o) {
            ctx.save();
            ctx.translate(o.x, o.y);

            if (o.type == "zombie") {
                if (o.canLunge) {
                    var xOffset = this.xOffset / 2;
                    var yOffset = this.yOffset / 2;
                    ctx.fillStyle = "rgb(0,130,0)";
                    ctx.fillRect(0, 0, o.w, o.h);
                    ctx.beginPath();
                    ctx.moveTo(o.w + xOffset, yOffset);
                    ctx.lineTo(o.w, 0);
                    ctx.lineTo(0, o.h);
                    ctx.lineTo(0 + xOffset, o.h + yOffset);
                    ctx.fill();
                    ctx.translate(xOffset, yOffset);
                    ctx.fillStyle = "rgb(0,150,0)";
                    ctx.fillRect(0, 0, o.w, o.h);
                } else {
                    var xOffset = this.xOffset / 2;
                    var yOffset = this.yOffset / 2;
                    ctx.fillStyle = "rgb(0,80,0)";
                    ctx.fillRect(0, 0, o.w, o.h);
                    ctx.beginPath();
                    ctx.moveTo(o.w + xOffset, yOffset);
                    ctx.lineTo(o.w, 0);
                    ctx.lineTo(0, o.h);
                    ctx.lineTo(0 + xOffset, o.h + yOffset);
                    ctx.fill();
                    ctx.translate(xOffset, yOffset);
                    ctx.fillStyle = "rgb(0,130,0)";
                    ctx.fillRect(0, 0, o.w, o.h);
                    ctx.strokeStyle = "rgb(0,100,0)";
                    ctx.lineWidth = 4;
                    ctx.strokeRect(2, 2, o.w - 4, o.h - 4);
                }
            } else if (o.type == "collectable") {
                this.drawCollectable(o);
            }

            if (o.type == "tightness") {
                var s = Math.min(1 / o.value * 5, 1);
                ctx.globalAlpha = s;
                ctx.fillStyle = "blue";
                ctx.fillRect(-25, -25, 50, 50);
            }

            ctx.restore();
        },
        drawCollectable: function (o) {
            if (o.collectableType == "gold") {
                var s = Math.abs(Math.sin((t / 50 + o.animationOffset) % Math.PI + Math.PI / 2));
                var s2 = Math.sin((t / 50 + o.animationOffset) % Math.PI + Math.PI / 2);
                var s3 = Math.sin((t / 50 + o.animationOffset) % Math.PI) ** 0.5;
                var s4 = Math.sin(t / 60 + o.animationOffset) * 0.5 + 0.5;
                if (o.noAnimation) {
                    s = Math.abs(Math.sin((0 / 50 + o.animationOffset) % Math.PI + Math.PI / 2));
                    s2 = Math.sin((0 / 50 + o.animationOffset) % Math.PI + Math.PI / 2);
                    s3 = Math.sin((0 / 50 + o.animationOffset) % Math.PI) ** 0.5;
                    s4 = Math.sin(0 / 60 + o.animationOffset) * 0.5 + 0.5;
                }
                if (o.noVerticalMovement) s4 = 0;
                s3 = 1;
                if (o.value == 1) {
                    if (!o.noShadow) {
                        ctx.fillStyle = `rgba(0,0,0,${0.03 + 0.15 * (1 - s4)})`;
                        ctx.beginPath();
                        ctx.arc(this.xOffset, 2, 5 * (1 + 0.2 * s4), 0, 2 * Math.PI);
                        ctx.fill();
                    }
                    ctx.translate(this.xOffset, this.yOffset - s4 * 5);
                    ctx.fillStyle = "rgb(150,120,0)";
                    ctx.fillRect(-3 + s2 * 6 * (1 - s) ** 0.4, -5, 6, 10);
                    ctx.strokeStyle = "rgb(150,120,0)";
                    ctx.lineWidth = 2;
                    ctx.fillStyle = `rgb(255,${235 + (1 - s3) * 20},${(1 - s3) * 255})`;
                    ctx.fillRect(-4 * s, -4, 8 * s, 8);
                    ctx.strokeRect(-4 * s, -4, 8 * s, 8);
                } else if (o.value == 5) {
                    if (!o.noShadow) {
                        ctx.fillStyle = `rgba(0,0,0,${0.03 + 0.15 * (1 - s4)})`;
                        ctx.beginPath();
                        ctx.arc(this.xOffset, 2, 8 * (1 + 0.2 * s4), 0, 2 * Math.PI);
                        ctx.fill();
                    }
                    ctx.translate(this.xOffset, this.yOffset - s4 * 10);
                    ctx.fillStyle = "rgb(150,120,0)";
                    ctx.fillRect(-4 + s2 * 8 * (1 - s) ** 0.2, -9, 8, 18);
                    ctx.fillStyle = `rgb(255,${235 + (1 - s3) * 20},${(1 - s3) * 255})`;
                    ctx.fillRect(-8 * s, -8, 16 * s, 16);
                    ctx.save();
                    ctx.scale(s, 1);
                    ctx.fillStyle = "white";
                    ctx.fillRect(-4, 2, 8, 2);
                    ctx.fillRect(2, -4, 2, 8);
                    ctx.fillStyle = "rgb(195,175,0)";
                    ctx.fillRect(-4, -4, 8, 2);
                    ctx.fillRect(-4, -4, 2, 8);
                    ctx.restore();
                    ctx.strokeStyle = "rgb(150,120,0)";
                    ctx.lineWidth = 2;
                    ctx.strokeRect(-8 * s, -8, 16 * s, 16);
                } else if (o.value == 25) {
                    ctx.drawImage(images.bagOfGold, -25, -25, 50, 50);
                }
            } else if (o.collectableType == "gem") {
                var s4 = Math.sin(t / 60 + o.animationOffset) * 0.5 + 0.5;
                if (o.noVerticalMovement) s4 = 0;
                if (!o.noShadow) {
                    ctx.fillStyle = `rgba(0,0,0,${0.03 + 0.15 * (1 - s4)})`;
                    ctx.beginPath();
                    ctx.arc(this.xOffset, 2, 13 * (1 + 0.1 * s4), 0, 2 * Math.PI);
                    ctx.fill();
                }
                ctx.translate(this.xOffset, this.yOffset - s4 * 5 + 5);
                ctx.scale(1.4, 1.4);
                var a = t / 1000 + o.animationOffset;
                if (o.noAnimation) a = 0;
                var nodes = [];
                for (var n = -1; n < 4; n++) {
                    var p1 = n / 4 + a % 0.25;
                    var p2 = (n + 1) / 4 + a % 0.25;
                    if (p2 > 1.125) continue;
                    if (p1 < -0.125) continue;
                    var node = {
                        x1: Math.sin(p1 * Math.PI + Math.PI * 0.5),
                        x2: Math.sin(p2 * Math.PI + Math.PI * 0.5)
                    };
                    nodes.push(node);
                }
                function height1(x) {
                    return Math.min(Math.sin(x * Math.PI + Math.PI * 0.5) ** 3, 0.1) * 5;
                }
                function height2(x) {
                    return Math.min(Math.sin(x * Math.PI + Math.PI * 0.5) ** 3, 0.1) * 3;
                }
                for (var node of nodes) {
                    var x1 = [0, 16 * node.x1, 12 * node.x1, 12 * -node.x1];
                    var x2 = [0, 16 * node.x2, 12 * node.x2, 12 * -node.x2];
                    var y1 = [10, height1(node.x1), height2(node.x1) - 5, -height2(node.x1) - 11];
                    var y2 = [10, height1(node.x2), height2(node.x2) - 5, -height2(node.x2) - 11];
                    ctx.fillStyle = `rgb(${60 + node.x1 * 20},${180 + node.x1 * 20},${220 + node.x1 * 20})`;
                    ctx.beginPath();
                    ctx.moveTo(x1[0], y1[0]);
                    ctx.lineTo(x1[1], y1[1]);
                    ctx.lineTo(x2[1], y2[1]);
                    ctx.lineTo(x2[0], y2[0]);
                    ctx.closePath();
                    ctx.fill();

                    ctx.fillStyle = `rgb(${100 + node.x1 * 10},${220 + node.x1 * 10},${250 + node.x1 * 10})`;
                    ctx.beginPath();
                    ctx.moveTo(x1[1], y1[1]);
                    ctx.lineTo(x2[1], y2[1]);
                    ctx.lineTo(x2[2], y2[2]);
                    ctx.lineTo(x1[2], y1[2]);
                    ctx.closePath();
                    ctx.fill();

                    ctx.fillStyle = `rgb(150,245,255)`;
                    ctx.beginPath();
                    ctx.moveTo(x1[2], y1[2]);
                    ctx.lineTo(x2[2], y2[2]);
                    ctx.lineTo(x2[3], y2[3]);
                    ctx.lineTo(x1[3], y1[3]);
                    ctx.closePath();
                    ctx.fill();
                }
            }
        },
        updateZombies: function (groups) {
            if (game.level.levelIntro) return;
            for (var o of groups.zombie) {
                o.cx = o.x + o.w / 2;
                o.cy = o.y + o.h / 2;
                var dist = distTo(o.cx, o.cy, game.player.cx, game.player.cy);
                o.distToPlayer = dist;
                if (dist < 500) {
                    o.active = true;
                } else {
                    o.active = false;
                }
                if (game.player.zombified) {
                    if (o.zombifiedPlayer) {
                        o.target = { x: game.player.cx, y: game.player.cy };
                    } else {
                        if (!o.retargeted) {
                            var percent = 0.8 + Math.random() * 0.1;
                            if (!o.target) o.target = { x: o.cx, y: o.cy };
                            o.target = {
                                x: o.x * percent + o.target.x * (1 - percent),
                                y: o.y * percent + o.target.y * (1 - percent)
                            }
                            o.retargeted = true;
                        } else {
                            var dist = distTo(o.x, o.y, o.target.x, o.target.y);
                            var chanceToMove = 0.001 * 100 / groups.zombie.length;
                            if (dist < 100 && Math.random() < chanceToMove) {
                                var x = Math.random() * game.level.dimensions.w + game.level.dimensions.x;
                                var y = Math.random() * game.level.dimensions.h + game.level.dimensions.y;
                                o.target = { x: x, y: y };
                            }
                        }
                    }
                } else {
                    if (!o.active) {
                        o.target = false;
                    } else {
                        o.target = { x: game.player.cx, y: game.player.cy };
                        if (dist < 300 && game.level.level >= 14) {
                            var location = this.predictLocation(game.player.cx, game.player.cy, game.player.move.x, game.player.move.y, o.x, o.y);
                            o.target = { x: location.x, y: location.y };
                        }
                    }
                }
                if (o.target) {
                    var dir = dirTo(o.cx, o.cy, o.target.x, o.target.y);
                    var dist = distTo(o.cx, o.cy, o.target.x, o.target.y);
                    var move = distToMove(Math.min(dist, o.speed), dir);
                    if (o.lungeTime) {
                        var dirToPlayer = dirTo(o.cx, o.cy, game.player.cx, game.player.cy);
                        if (turn(dir, dirToPlayer) > 90) dir = dirToPlayer;
                        var a = o.lungeTime / o.lungeDuration;
                        var scale = 1 + 6 * a;
                        move = distToMove(Math.min(dist, o.speed * scale), dir);
                        game.particles.createEffect("baby zombie lunge", o);
                        o.lungeTime--;
                        o.lungeReload = o.lungeReloadReset;
                    } else if (o.canLunge && !game.player.zombified) {
                        if (o.lungeReload) {
                            o.lungeReload--;
                        } else {
                            if (o.distToPlayer < 150) {
                                o.lungeTime = o.lungeDuration;
                            }
                        }
                    }
                    o.move.x += move.x;
                    o.move.y += move.y;
                }
            }
            for (var n = 0; n < groups.zombie.length; n++) {
                if (game.player.zombified) break;
                if (game.level.level < 14) break;
                var o = groups.zombie[n];
                if (!o.active) continue;
                if (o.lungeTime) continue;
                for (var n2 = n + 1; n2 < groups.zombie.length; n2++) {
                    var o2 = groups.zombie[n2];
                    if (!o2.active) continue;
                    if (o2.lungeTime) continue;
                    var dist = distTo(o.x, o.y, o2.x, o2.y);
                    var maxSpaceRequired = 100;
                    var spaceScaling = 0.2;
                    var spaceRequired = Math.min(o.distToPlayer * spaceScaling + o2.distToPlayer * spaceScaling, maxSpaceRequired);
                    if (dist > spaceRequired) continue;
                    var dir = dirTo(o.x, o.y, o2.x, o2.y);
                    var move = distToMove(spaceRequired - dist, dir);
                    o.direction = dir + 180;
                    o2.direction = dir;
                    var move1 = distToMove(o.speed, o.direction);
                    var move2 = distToMove(o2.speed, o2.direction);
                    var percent = 1 - dist / maxSpaceRequired;
                    o.move.x = o.move.x * (1 - percent) + move1.x * percent;
                    o.move.y = o.move.y * (1 - percent) + move1.y * percent;
                    o2.move.x = o2.move.x * (1 - percent) + move2.x * percent;
                    o2.move.y = o2.move.y * (1 - percent) + move2.y * percent;
                }
            }
            for (var n = 0; n < groups.zombie.length; n++) {
                var o = groups.zombie[n];
                for (var n2 = n + 1; n2 < groups.zombie.length; n2++) {
                    var o2 = groups.zombie[n2];
                    var dist = distTo(o.x, o.y, o2.x, o2.y);
                    if (dist > o.r + o2.r) continue;
                    var dir = dirTo(o.x, o.y, o2.x, o2.y);
                    var move = distToMove(o.r + o2.r - dist, dir);
                    o.move.x -= move.x / 2;
                    o.move.y -= move.y / 2;
                    o2.move.x += move.x / 2;
                    o2.move.y += move.y / 2;
                }
                for (var n2 = 0; n2 < groups.collidable.length; n2++) {
                    var o2 = groups.collidable[n2];
                    var hitboxes;
                    if (Array.isArray(o2.hitbox)) {
                        hitboxes = o2.hitbox;
                    } else {
                        hitboxes = [o2.hitbox];
                    }
                    for (var o3 of hitboxes) {
                        var dist = distTo(o.cx, o.cy, o3.x, o3.y);
                        if (dist > o.r + o3.r) continue;
                        var dir = dirTo(o.cx, o.cy, o3.x, o3.y);
                        var move = distToMove(o.r + o3.r - dist, dir);
                        o.move.x -= move.x;
                        o.move.y -= move.y;
                    }
                }
            }
            for (var o of groups.zombie) {
                if (!o.active) continue;
                var blocks = [];
                var xCor = Math.ceil((o.x + generate.mapSize / 2) / 50);
                var yCor = Math.ceil((o.y + generate.mapSize / 2) / 50);
                for (var x = -2; x <= 1; x++) {
                    for (var y = -2; y <= 1; y++) {
                        if (x + xCor < 0) continue;
                        if (y + yCor < 0) continue;
                        if (x + xCor >= generate.width) continue;
                        if (y + yCor >= generate.height) continue;
                        if (!this.wallMap[y + yCor][x + xCor]) continue;
                        blocks.push({ x: (x + xCor) * 50 - generate.mapSize / 2, y: (y + yCor) * 50 - generate.mapSize / 2, w: 50, h: 50 });
                    }
                }
                o.x += o.move.x;
                for (var o2 of blocks) {
                    if (!blocksColliding(o, o2)) continue;
                    resolveBlockCollision(o, o2, "x");
                }
                if (o.x < game.level.dimensions.x) {
                    o.x = game.level.dimensions.x;
                }
                if (o.x + o.w > game.level.dimensions.x + game.level.dimensions.w) {
                    o.x = game.level.dimensions.x + game.level.dimensions.w - o.w;
                }
            }
            for (var o of groups.zombie) {
                if (!o.active) continue;
                var blocks = [];
                var xCor = Math.ceil((o.x + generate.mapSize / 2) / 50);
                var yCor = Math.ceil((o.y + generate.mapSize / 2) / 50);
                for (var x = -2; x <= 1; x++) {
                    for (var y = -2; y <= 1; y++) {
                        if (x + xCor < 0) continue;
                        if (y + yCor < 0) continue;
                        if (x + xCor >= generate.width) continue;
                        if (y + yCor >= generate.height) continue;
                        if (!this.wallMap[y + yCor][x + xCor]) continue;
                        blocks.push({ x: (x + xCor) * 50 - generate.mapSize / 2, y: (y + yCor) * 50 - generate.mapSize / 2, w: 50, h: 50 });
                    }
                }
                o.y += o.move.y;
                for (var o2 of blocks) {
                    if (!blocksColliding(o, o2)) continue;
                    resolveBlockCollision(o, o2, "y");
                }
                if (o.y < game.level.dimensions.y) {
                    o.y = game.level.dimensions.y;
                }
                if (o.y + o.h > game.level.dimensions.y + game.level.dimensions.h) {
                    o.y = game.level.dimensions.y + game.level.dimensions.h - o.h;
                }
            }
            for (var o of groups.zombie) {
                o.move = { x: 0, y: 0 };
                o.cx = o.x + o.w / 2;
                o.cy = o.y + o.h / 2;
            }
        },
        predictLocation: function (x, y, xmove, ymove, x2, y2) {
            if (xmove == 0 && ymove == 0) return { x: x, y: y };
            var lastDistance = distTo(x, y, x2, y2);
            for (var n = 0; n < 100; n++) {
                x += xmove;
                y += ymove;
                var dist = distTo(x, y, x2, y2);
                if (dist > lastDistance) return { x: x - xmove, y: y - ymove };
                lastDistance = dist;
            }
            return { x: x, y: y }
        }
    },
    particles: {
        objects: [],
        update: function () {
            this.objects = this.objects.sort((a, b) => b.z - a.z);
            for (var o of this.objects) this.updateObject(o);
            this.objects = this.objects.filter(e => !e.delete);
        },
        drawBelow: function () {
            for (var o of this.objects.filter(e => e.z === 0)) this.drawObject(o);
        },
        drawAbove: function () {
            for (var o of this.objects.filter(e => e.z === 1)) this.drawObject(o);
        },
        drawObject: function (o) {
            ctx.save();
            if (o.alpha) ctx.globalAlpha = o.alpha;
            if (o.type == "gold collect particle") {
                if (o.animation < 0) {
                    ctx.globalAlpha *= Math.max(0, (10 + o.animation) / 10);
                }
                var o2 = {};
                o2.x = o.x;
                o2.y = o.y;
                o2.type = "collectable";
                o2.collectableType = "gold";
                o2.value = o.value;
                o2.animationOffset = o.animationOffset;
                o2.noShadow = true;
                var s = 1 + o.animation / 200;
                ctx.translate(o.x, o.y);
                ctx.scale(s, s);
                ctx.translate(-o.x, -o.y);
                game.objects.drawObject(o2);
            }
            if (o.type == "gem collect particle") {
                if (o.animation < 0) {
                    ctx.globalAlpha *= Math.max(0, (10 + o.animation) / 10);
                }
                var o2 = {};
                o2.x = o.x;
                o2.y = o.y;
                o2.type = "collectable";
                o2.collectableType = "gem";
                o2.value = o.value;
                o2.animationOffset = o.animationOffset;
                o2.noShadow = true;
                var s = 1 + o.animation / 200;
                ctx.translate(o.x, o.y);
                ctx.scale(s, s);
                ctx.translate(-o.x, -o.y);
                game.objects.drawObject(o2);
            }
            if (o.type == "empty gold bag particle") {
                ctx.globalAlpha *= 0.7;
                ctx.translate(o.x, o.y);
                ctx.drawImage(images.emptyBag, -25, -25, 50, 50);
            }
            if (o.type == "baby zombie lunge particle") {
                ctx.translate(o.x, o.y);
                ctx.fillStyle = "rgb(0,150,0)";
                ctx.fillRect(0, 0, o.w, o.h);
            }
            ctx.restore();
        },
        updateObject: function (o) {
            if (o.decay) o.alpha -= o.decay;
            if (o.alpha <= 0) o.delete = true;
            if (o.type == "gold collect particle") {
                o.y -= Math.max(o.animation, 0) * 0.05;
                o.animation++;
                o.animationOffset += Math.max(o.animation, 0) * 0.01;
            }
            if (o.type == "gem collect particle") {
                o.y -= Math.max(o.animation, 0) * 0.05;
                o.animation++;
                o.animationOffset += Math.max(o.animation, 0) * 0.01;
            }
        },
        create: function (o) {
            o.delete = false;
            if (o.type == "gold collect particle") {
                o.alpha = o.alpha || 2;
                o.decay = 0.05;
                o.z = 1;
                o.animation = o.animation || 0;
            }
            if (o.type == "gem collect particle") {
                o.alpha = o.alpha || 2;
                o.decay = 0.05;
                o.z = 1;
                o.animation = o.animation || 0;
            }
            if (o.type == "baby zombie lunge particle") {
                o.decay = 0.004;
                o.z = 1;
            }
            if (o.type == "empty gold bag particle") {
                o.alpha = 3;
                o.decay = 0.05;
                o.z = 0;
            }
            this.objects.push(o);
        },
        createEffect: function (effect, o) {
            if (effect == "baby zombie lunge") {
                var particle = {};
                particle.type = "baby zombie lunge particle";
                particle.x = o.x;
                particle.y = o.y;
                particle.w = o.w;
                particle.h = o.h;
                var a = o.lungeTime / o.lungeDuration;
                particle.alpha = 0.01 + 0.09 * a;
                this.create(particle);
            }
            if (effect == "collect gold") {
                if (o.value == 25) {
                    for (var n = 0; n < 10; n++) {
                        var particle = {};
                        particle.x = o.x + Math.random() * 30 - 15 - game.objects.xOffset / 3;
                        particle.y = o.y + Math.random() * 30 - 25 - game.objects.yOffset / 3;
                        particle.value = Math.random() < 0.5 ? 5 : 1;
                        particle.animation = -n * 3;
                        particle.alpha = 2 + n * 0.05 * 3;
                        particle.type = "gold collect particle";
                        particle.animationOffset = Math.random() * 5;
                        game.particles.create(particle);
                    }
                    o.type = "empty gold bag particle";
                    game.particles.create(o);
                } else {
                    o.type = "gold collect particle";
                    game.particles.create(o);
                }
            }
            if (effect == "collect gem") {
                o.type = "gem collect particle";
                game.particles.create(o);
            }
        }
    },
    player: {
        type: "player",
        x: 0,
        y: 0,
        xmove: 0,
        ymove: 0,
        r: 10,
        move: { x: 0, y: 0 },
        lastMove: { x: 0, y: 0 },
        w: 20,
        h: 20,
        cx: 0,
        cy: 0,
        regularSpeed: 0,
        currentSpeed: 0,
        zombified: false,
        direction: 0,
        goldCollected: 0,
        gemsCollected: 0,
        health: 0,
        maxHealth: 0,
        invulnerableTime: 0,
        stunnedTime: 0,
        update: function (groups) {
            if (!game.level.playerCanMove) return;
            this.updateSpeed();
            this.handleInput();
            if (this.checkExit()) game.level.levelComplete = true;
            this.cx = this.x + this.w / 2;
            this.cy = this.y + this.h / 2;
        },
        draw: function () {
            ctx.save();
            ctx.translate(this.x, this.y);

            var color1 = "rgb(180,0,0)";
            var color2 = "rgb(255,0,0)";
            var color3 = "rgb(200,0,0)";
            if (this.zombified) {
                color1 = "rgb(0,60,0)";
                color2 = "rgb(0,100,0)";
                color3 = "rgb(0,80,0)";
            } else if (this.invulnerableTime && this.invulnerableTime % 20 < 10) {
                color1 = "rgb(220,100,100)";
                color2 = "rgb(255,150,150)";
                color3 = "rgb(255,100,100)";
            }

            var xOffset = game.objects.xOffset * 0.8;
            var yOffset = game.objects.yOffset * 0.8;
            ctx.fillStyle = color1;
            ctx.fillRect(0, 0, this.w, this.h);
            ctx.beginPath();
            ctx.moveTo(this.w + xOffset, yOffset);
            ctx.lineTo(this.w, 0);
            ctx.lineTo(0, this.h);
            ctx.lineTo(0 + xOffset, this.h + yOffset);
            ctx.fill();
            ctx.translate(xOffset, yOffset);
            ctx.fillStyle = color2;
            ctx.strokeStyle = color3;
            ctx.lineWidth = 4;
            ctx.fillRect(0, 0, this.w, this.h);
            ctx.strokeRect(2, 2, this.w - 4, this.h - 4);

            ctx.restore();
        },
        reset: function () {
            this.zombified = false;
            this.x = -this.w / 2;
            this.y = -this.h / 2;
            this.cx = 0;
            this.cy = 0;
        },
        handleInput: function () {
            this.move = { x: 0, y: 0 };
            if (this.zombified) return;
            this.handleMovementInput();
        },
        handleMovementInput: function () {
            if (Keys.keys[37] || Keys.keys[65]) {
                this.move.x--;
            }
            if (Keys.keys[39] || Keys.keys[68]) {
                this.move.x++;
            }
            if (Keys.keys[38] || Keys.keys[87]) {
                this.move.y--;
            }
            if (Keys.keys[40] || Keys.keys[83]) {
                this.move.y++;
            }
            if (this.move.x == 0 && this.move.y == 0 && !game.level.levelComplete) return;
            var dir = dirTo(0, 0, this.move.x, this.move.y);
            if (game.level.levelComplete) dir = dirTo(0, 0, this.lastMove.x, this.lastMove.y);
            this.direction = dir;
            this.move = distToMove(this.currentSpeed, this.direction);
            if (this.stunnedTime) this.move = { x: 0, y: 0 };
            this.lastMove = this.move;
        },
        updateSpeed: function () {
            if (game.level.levelComplete) {
                this.currentSpeed = this.regularSpeed / (1 + game.level.levelCompleteAnimation / 40);
                return;
            }
            this.currentSpeed = this.regularSpeed;
        },
        checkExit: function () {
            if (this.zombified) return false;
            var d = game.level.dimensions;
            var box = { x: d.x + this.w, y: d.y + this.h, w: d.w - this.w * 2, h: d.h - this.h * 2 };
            return !blocksColliding(box, this);
        },
        damage: function (o, damage) {
            this.health -= damage;
            this.health = Math.max(this.health, 0);
            if (this.health === 0) {
                this.zombified = true;
                o.zombifiedPlayer = true;
            }
            this.invulnerableTime = 30;
        },
        updateObjectCollisions: function (groups) {
            if (this.invulnerableTime) this.invulnerableTime--;
            if (this.stunnedTime) this.stunnedTime--;

            if (!game.level.playerCanMove) return;
            if (!game.level.levelComplete) {
                for (var o of groups.zombie) {
                    var dist = distTo(o.cx, o.cy, this.cx, this.cy);
                    if (dist > this.r + o.r) continue;
                    var dir = dirTo(this.cx, this.cy, o.cx, o.cy);
                    var move = distToMove(this.r + o.r - dist, dir);
                    this.move.x -= move.x / 2;
                    this.move.y -= move.y / 2;
                    o.move.x += move.x / 2;
                    o.move.y += move.y / 2;
                    if (this.zombified) continue;
                    if (this.invulnerableTime) continue;
                    var move = distToMove(3, dir + 180);
                    this.xmove += move.x;
                    this.ymove += move.y;
                    this.stunnedTime = 15;
                    this.damage(o, 6);
                }
            }

            this.x += this.move.x;
            this.x += this.xmove;
            for (var o of groups.block) {
                if (!blocksColliding(this, o)) continue;
                resolveBlockCollision(this, o, "x");
            }
            this.y += this.move.y;
            this.y += this.ymove;
            for (var o of groups.block) {
                if (!blocksColliding(this, o)) continue;
                resolveBlockCollision(this, o, "y");
            }

            this.xmove *= 0.9;
            this.ymove *= 0.9;

            if (this.zombified) {
                if (this.x < game.level.dimensions.x) {
                    this.x = game.level.dimensions.x;
                }
                if (this.x + this.w > game.level.dimensions.x + game.level.dimensions.w) {
                    this.x = game.level.dimensions.x + game.level.dimensions.w - this.w;
                }
                if (this.y < game.level.dimensions.y) {
                    this.y = game.level.dimensions.y;
                }
                if (this.y + this.h > game.level.dimensions.y + game.level.dimensions.h) {
                    this.y = game.level.dimensions.y + game.level.dimensions.h - this.h;
                }
            } else {
                for (var o of groups.collectable) {
                    if (o.delete) continue;
                    var dist = distTo(this.cx, this.cy, o.x, o.y);
                    if (o.collectableType == "gold") {
                        if (dist > 20) continue;
                        o.delete = true;
                        game.particles.createEffect("collect gold", o);
                        data.gold += o.value;
                        updateSaveData();
                        this.goldCollected += o.value;
                    } else if (o.collectableType == "gem") {
                        if (dist > 25) continue;
                        o.delete = true;
                        game.particles.createEffect("collect gem", o);
                        data.gems += 1;
                        updateSaveData();
                        this.gemsCollected += 1;
                    }
                }
            }
        }
    },
    cam: {
        x: 0,
        y: 0,
        zoom: 1,
        angle: 0,
        viewport: { x: 0, y: 0, w: 0, h: 0 },
        update: function () {
            this.x = this.x * 0.97 + game.player.cx * 0.03;
            this.y = this.y * 0.97 + game.player.cy * 0.03;
            var a0 = easeInOut(game.level.playerZombifiedAnimation / 120 - 0.15);
            var a1 = easeInOut(game.level.playerZombifiedAnimation / 50 - 0.5);
            var a2 = easeInOut(game.level.playerZombifiedAnimation / 50);
            var a3 = easeInOut(game.level.zoomedOut / 100);
            var a = a1 * 0.9 + a2 * 0.1;
            this.zoom = 1 + 1 * a;
            var fullViewZoom = Math.min(800 / Math.max(game.level.dimensions.w, game.level.dimensions.h), 1);
            this.zoom = this.zoom * (1 - a3) + fullViewZoom * a3;
            this.x = this.x * (1 - a * 0.5) + game.player.cx * a * 0.5;
            this.y = this.y * (1 - a * 0.5) + (game.player.cy + 50) * a * 0.5;
            this.angle = this.angle * (1 - a0) + 5 * a0;
        },
        alignViewport: function () {
            ctx.translate(500, 500);
            ctx.rotate(this.angle * Math.PI / 180);
            ctx.scale(this.zoom, this.zoom);
            ctx.translate(-this.x, -this.y);
        },
        reset: function () {
            this.x = 0;
            this.y = 0;
            this.zoom = 1;
            this.angle = 0;
        }
    }
}