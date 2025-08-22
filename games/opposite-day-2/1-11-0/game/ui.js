game.ui = {
    icons: [],
    yTranslate: 0,
    alerts: {
        alerts: [],
        update: function () {
            for (var n in this.alerts) {
                var o = this.alerts[n];
                o.animation++;
                o.startAnimation = easeInOut(o.animation / o.startAnimationLength);
                o.textAnimation = easeInOut((o.animation - o.startAnimationLength) / (o.startAnimationLength * 2));
                o.iconAnimation = easeInOut((o.animation - o.startAnimationLength * 0.7) / (o.startAnimationLength * 2));
                o.endAnimation = easeInOut((o.animation - (o.lifespan - o.endAnimationLength)) / o.endAnimationLength);

                o.targetY = (this.alerts.length - n - 1) * -70 - 70;
                o.y = o.y * 0.9 + o.targetY * 0.1;
                if (o.animation > o.lifespan) o.delete = true;

                if (o.updated) {
                    o.updateAnimation++;
                    o.changeWidthAnimation = easeInOut(o.updateAnimation / 20);
                    o.changeTextBounceAnimation = easeOut(o.updateAnimation / 15);
                    o.changeTextAnimation = easeInOut((o.updateAnimation - 23) / 20);
                    o.changeIconAnimation = easeInOut(o.updateAnimation / 40);
                    o.changeIconSizeAnimation = easeInBack(o.updateAnimation / 40);
                    o.changeIconBounceAnimation = easeInBack((o.updateAnimation - 25) / 30);
                    o.width = o.oldWidth * (1 - o.changeWidthAnimation) + o.newWidth * o.changeWidthAnimation;
                    if (o.changeTextAnimation === 1) {
                        o.text = o.newText;
                    }
                    if (o.changeIconAnimation === 1) {
                        o.icon = o.newIcon;
                    }
                }
                if (o.textWiggle) {
                    o.textWiggleAnimation++;
                }
            }
            this.alerts = this.alerts.filter(e => !e.delete);
        },
        draw: function () {
            if (!menu.settings.discoveryAlerts) return;
            ctx.save();
            ctx.translate(1000, 1000);

            for (var o of this.alerts) {
                var a = o.startAnimation * (1 - o.endAnimation);
                var a2 = o.textAnimation;
                var a3 = o.iconAnimation;
                ctx.save();
                ctx.translate((-o.width - 50) * a, o.y);
                ctx.globalAlpha = a;

                ctx.strokeStyle = "rgb(230,230,230)";
                ctx.lineWidth = 10;
                ctx.save();
                ctx.globalAlpha = a2 * a;
                ctx.roundRect(-30, 0, (o.width + 50) * a2, 40, 10);
                ctx.stroke();
                ctx.restore();
                ctx.roundRect(-48, 0, 40, 40, 17);
                ctx.stroke();

                ctx.fillStyle = "white";
                ctx.save();
                ctx.globalAlpha = a2 * a;
                ctx.roundRect(-30, 0, (o.width + 50) * a2, 40, 10);
                ctx.fill();
                ctx.restore();
                ctx.roundRect(-48, 0, 40, 40, 17);
                ctx.fill();

                ctx.save();
                ctx.rect(-30, 0, (o.width + 50) * a2, 40, 10);
                ctx.clip();
                ctx.globalAlpha = a2 * a;
                if (o.updated && o.updateAnimation < 75) {
                    var a = o.changeTextAnimation;
                    var a2 = o.changeTextBounceAnimation;
                    var y = 53 * a - 3 * a2;
                    ctx.save();
                    ctx.translate(5, 21 + y);
                    ctx.globalAlpha = 1 - a;
                    this.drawText(o.oldText, o.textWiggle, o.textWiggleAnimation, o.ultraGlowEffect);
                    ctx.restore();

                    ctx.save();
                    ctx.translate(5, 21 - 50 + y);
                    ctx.globalAlpha = a;
                    this.drawText(o.newText, o.textWiggle, o.textWiggleAnimation, o.ultraGlowEffect);
                    ctx.restore();
                } else {
                    ctx.save();
                    ctx.translate(5, 21);
                    this.drawText(o.text, o.textWiggle, o.textWiggleAnimation, o.ultraGlowEffect);
                    ctx.restore();
                }
                ctx.restore();

                ctx.save();
                ctx.translate(-45 + 35 / 2, 2.5 + 35 / 2);
                if (o.updated && o.updateAnimation < 75) {
                    var s = 1 - o.changeIconSizeAnimation * 0.7 + o.changeIconBounceAnimation * 0.2;
                    ctx.scale(s, s);
                    if (o.changeIconAnimation < 0.5) {
                        ctx.drawImage(o.oldIcon, -35 / 2, -35 / 2, 35, 35);
                    } else {
                        ctx.drawImage(o.newIcon, -35 / 2, -35 / 2, 35, 35);
                    }
                } else {
                    ctx.rotate((1 - a3) * 100 * Math.PI / 180);
                    var s = 0.7 + a3 * 0.3;
                    ctx.scale(s, s);
                    ctx.drawImage(o.icon, -35 / 2, -35 / 2, 35, 35);
                }
                ctx.restore();

                ctx.restore();
            }

            ctx.restore();
        },
        drawText: function (text, wiggle, wiggleAnimation, ultraGlowEffect) {
            ctx.fillStyle = "black";
            ctx.font = "25px rubik";
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            if (wiggle && wiggleAnimation < text.length * 2 + 30) {
                var chars = text.split("");
                for (var n = 0; n < chars.length; n++) {
                    var char = chars[n];
                    var width = ctx.measureText(char).width;
                    var a = easeInBack((wiggleAnimation - n * 2) / 20);
                    var a2 = easeInBack((wiggleAnimation - n * 2 - 10) / 30);
                    if (ultraGlowEffect) {
                        ctx.shadowColor = `rgb(255,80,200)`;
                        ctx.shadowBlur = a * 2;
                        ctx.fillStyle = `rgb(${255 * a},${80 * a},${200 * a})`;
                    }
                    ctx.fillText(char, 0, a * -10 + a2 * 5);
                    ctx.translate(width, 0);
                    ctx.shadowBlur = 0;
                }
            } else {
                ctx.fillText(text, 0, 0);
            }
        },
        shortenAlerts: function () {
            for (var o of this.alerts) {
                o.animation = Math.max(o.animation, o.lifespan - 220);
            }
        },
        shortenAlertsForMenu: function () {
            for (var o of this.alerts) {
                o.animation = Math.max(o.animation, o.lifespan - 100);
            }
        },
        alertOnScreen: function (id) {
            var alert = this.alerts.find(e => e.id == id);
            if (!alert) return false;
            if (alert.endAnimation) return false;
            return alert;
        },
        alert: function (type) {
            if (type == "blue cube discovered") {
                this.createAlert({
                    level: game.level.level,
                    id: "blue cube discovered",
                    icon: images.uncollectedCube,
                    text: "Blue Cube Undiscovered!"
                });
            } else if (type == "blue cube collected") {
                var alert = this.alertOnScreen("blue cube discovered");
                if (alert) {
                    this.updateAlert({
                        level: game.level.level,
                        originalId: "blue cube discovered",
                        newId: "blue cube collected",
                        newIcon: images.blueCube,
                        newText: "Blue Cube Uncollected!",
                        textWiggle: true
                    });
                } else {
                    this.createAlert({
                        level: game.level.level,
                        id: "blue cube collected",
                        icon: images.blueCube,
                        text: "Blue Cube Uncollected!",
                        textWiggle: true
                    });
                }
            } else if (type == "ultra blue cube discovered") {
                var alert = this.alertOnScreen("blue cube discovered");
                if (alert) {
                    this.updateAlert({
                        level: game.level.level,
                        originalId: "blue cube discovered",
                        newId: "ultra blue cube discovered",
                        newIcon: images.uncollectedCube,
                        newText: "Ultra Blue Cube Undiscovered!"
                    });
                } else {
                    this.createAlert({
                        level: game.level.level,
                        id: "ultra blue cube discovered",
                        icon: images.uncollectedCube,
                        text: "Ultra Blue Cube Undiscovered!"
                    });
                }
            } else if (type == "ultra blue cube taken") {
                var alert = this.alertOnScreen("ultra blue cube discovered");
                if (alert) {
                    this.updateAlert({
                        level: game.level.level,
                        originalId: "ultra blue cube discovered",
                        newId: "ultra blue cube taken",
                        newIcon: images.ultraBlueCube,
                        newText: "Ultra Blue Cube Uncollected!",
                        ultraGlowEffect: true,
                        textWiggle: true
                    });
                } else {
                    this.createAlert({
                        level: game.level.level,
                        id: "ultra blue cube taken",
                        icon: images.ultraBlueCube,
                        text: "Ultra Blue Cube Uncollected!",
                        ultraGlowEffect: true,
                        textWiggle: true
                    });
                }
            } else if (type == "red cube discovered") {
                this.createAlert({
                    level: game.level.level,
                    id: "red cube discovered",
                    icon: images.uncollectedCube,
                    text: "Red Cube Undiscovered!"
                });
            } else if (type == "red cube collected") {
                var alert = this.alertOnScreen("red cube discovered");
                if (alert) {
                    this.updateAlert({
                        level: game.level.level,
                        originalId: "red cube discovered",
                        newId: "red cube collected",
                        newIcon: images.redCube,
                        newText: "Red Cube Uncollected!",
                        textWiggle: true
                    });
                } else {
                    this.createAlert({
                        level: game.level.level,
                        id: "red cube collected",
                        icon: images.redCube,
                        text: "Red Cube Uncollected!",
                        textWiggle: true
                    });
                }
            } else if (type == "ultra red cube discovered") {
                var alert = this.alertOnScreen("red cube discovered");
                if (alert) {
                    this.updateAlert({
                        level: game.level.level,
                        originalId: "red cube discovered",
                        newId: "ultra red cube discovered",
                        newIcon: images.uncollectedCube,
                        newText: "Ultra Red Cube Undiscovered!"
                    });
                } else {
                    this.createAlert({
                        level: game.level.level,
                        id: "ultra red cube discovered",
                        icon: images.uncollectedCube,
                        text: "Ultra Red Cube Undiscovered!"
                    });
                }
            } else if (type == "ultra red cube taken") {
                var alert = this.alertOnScreen("ultra red cube discovered");
                if (alert) {
                    this.updateAlert({
                        level: game.level.level,
                        originalId: "ultra red cube discovered",
                        newId: "ultra red cube collected",
                        newIcon: images.ultraRedCube,
                        newText: "Ultra Red Cube Uncollected!",
                        ultraGlowEffect: true,
                        textWiggle: true
                    });
                } else {
                    this.createAlert({
                        level: game.level.level,
                        id: "ultra red cube taken",
                        icon: images.ultraRedCube,
                        text: "Ultra Red Cube Uncollected!",
                        ultraGlowEffect: true,
                        textWiggle: true
                    });
                }
            } else if (type == "shortcut discovered") {
                this.createAlert({
                    level: game.level.level,
                    id: "shortcut discovered",
                    icon: images.shortcutDiscoveredAlertIcon,
                    text: "Shortcut Undiscovered!"
                });
            } else if (type == "shortcut taken") {
                var alert = this.alertOnScreen("shortcut discovered");
                if (alert) {
                    this.updateAlert({
                        level: game.level.level,
                        originalId: "shortcut discovered",
                        newId: "shortcut taken",
                        newIcon: images.shortcutTakenAlertIcon,
                        newText: "Shortcut Uncompleted!",
                        textWiggle: true
                    });
                } else {
                    this.createAlert({
                        level: game.level.level,
                        id: "shortcut taken",
                        icon: images.shortcutTakenAlertIcon,
                        text: "Shortcut Uncompleted!",
                        textWiggle: true
                    });
                }
            } else if (type == "ultra shortcut discovered") {
                var alert = this.alertOnScreen("shortcut discovered");
                if (alert) {
                    this.updateAlert({
                        level: game.level.level,
                        originalId: "shortcut discovered",
                        newId: "ultra shortcut discovered",
                        newIcon: images.ultraShortcutDiscoveredAlertIcon,
                        newText: "Ultra Shortcut Undiscovered!"
                    });
                } else {
                    this.createAlert({
                        level: game.level.level,
                        id: "ultra shortcut discovered",
                        icon: images.ultraShortcutDiscoveredAlertIcon,
                        text: "Ultra Shortcut Undiscovered!"
                    });
                }
            } else if (type == "ultra shortcut taken") {
                var alert = this.alertOnScreen("ultra shortcut discovered");
                if (alert) {
                    this.updateAlert({
                        level: game.level.level,
                        originalId: "ultra shortcut discovered",
                        newId: "ultra shortcut taken",
                        newIcon: images.ultraShortcutTakenAlertIcon,
                        newText: "Ultra Shortcut Uncompleted!",
                        ultraGlowEffect: true,
                        textWiggle: true
                    });
                } else {
                    this.createAlert({
                        level: game.level.level,
                        id: "ultra shortcut taken",
                        icon: images.ultraShortcutTakenAlertIcon,
                        text: "Ultra Shortcut Uncompleted!",
                        ultraGlowEffect: true,
                        textWiggle: true
                    });
                }
            }
        },
        updateAlert: function (data) {
            var alert = this.alerts.find(e => e.id == data.originalId && e.level == data.level);
            if (!alert) return;
            alert.oldWidth = alert.width;
            alert.oldIcon = alert.icon;
            alert.oldText = alert.text;
            alert.newIcon = data.newIcon;
            alert.newText = data.newText;
            ctx.font = "25px rubik";
            alert.newWidth = Math.max(ctx.measureText(alert.newText).width, alert.oldWidth);
            alert.id = data.newId;
            alert.animation = alert.startAnimationLength * 3;
            alert.lifespan += alert.startAnimationLength * 3;
            alert.updated = true;
            alert.updateAnimation = 0;
            if (data.ultraGlowEffect) {
                alert.ultraGlowEffect = true;
            }
            if (data.textWiggle) {
                alert.textWiggle = true;
                alert.textWiggleAnimation = -50;
            }
        },
        createAlert: function (data) {
            var o = {};
            o.startAnimationLength = 20;
            o.endAnimationLength = 20;
            o.startAnimation = 0;
            o.endAnimation = 0;
            o.animation = 0;
            o.lifespan = 500;
            o.y = 0;
            o.id = data.id;
            o.text = data.text;
            o.icon = data.icon;
            o.level = data.level;
            if (data.ultraGlowEffect) {
                o.ultraGlowEffect = true;
            }
            if (data.textWiggle) {
                o.textWiggle = true;
                o.textWiggleAnimation = -50;
            }
            ctx.font = "25px rubik";
            o.width = ctx.measureText(o.text).width;
            this.alerts.push(o);
        }
    },
    timer: {
        opacity: 0,
        gameTime: -1,
        levelTime: -1,
        newBestTime: false,
        update: function () {
            var transitionPercent = game.level.levelTransition / game.level.levelTransitionCap;
            if (!game.level.levelComplete && transitionPercent < 0.5 || transitionPercent === 0) {
                if (saveData.levelsBeaten < 10) this.gameTime++;
                this.levelTime++;
            }
        },
        updateOpacity: function () {
            if (menu.titleScreen || menu.creditsScreen) {
                this.opacity -= 0.1;
            } else {
                this.opacity += 0.1;
            }
            this.opacity = Math.max(Math.min(this.opacity, 1), 0);
        },
        draw: function () {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = "black";
            ctx.strokeStyle = "white";
            ctx.lineWidth = 5;
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            ctx.font = "40px rubik";
            var timeText = createTimeText(Math.max(0, this.gameTime));
            var chars = timeText.split("");
            var x = 980;
            if (menu.settings.gameTimer) {
                for (var n = chars.length - 1; n >= 0; n--) {
                    var char = chars[n];
                    if (char == "." || char == ":") {
                        x -= 12;
                    } else {
                        x -= 25;
                    }
                    ctx.strokeText(char, x, 40);
                    ctx.fillText(char, x, 40);
                }
            }

            if (!menu.settings.splitsTimer) {
                ctx.restore();
                return;
            }
            if (menu.settings.gameTimer) x -= 50;
            var timeText = createTimeText(Math.max(0, this.levelTime));
            var chars = timeText.split("");
            for (var n = chars.length - 1; n >= 0; n--) {
                var char = chars[n];
                if (char == "." || char == ":") {
                    x -= 12;
                } else {
                    x -= 25;
                }
                ctx.strokeText(char, x, 40);
                ctx.fillText(char, x, 40);
            }
            x -= 155;
            ctx.strokeText("Unsplit: ", x, 40);
            ctx.fillText("Unsplit: ", x, 40);
            ctx.restore();
        },
        updateBestLevelSplit: function (level) {
            var previousLevelTime = saveData.bestLevelSplits[level];
            previousLevelTime = previousLevelTime || Infinity;
            if (this.levelTime < previousLevelTime) {
                saveData.bestLevelSplits[level] = this.levelTime;
            }
        },
        newLevel: function () {
            this.levelTime = 0;
        },
        newGame: function () {
            this.levelTime = -1;
            this.gameTime = -1;
        }
    },
    update: function () {
        if (!menu.settings.autoHideUI || (menu.titleScreen && !(menu.loadingLevelAnimation || menu.newGameAnimation)) || Mouse.y < 200) {
            this.yTranslate += 15;
        } else {
            this.yTranslate -= 15;
        }
        this.yTranslate = Math.max(Math.min(this.yTranslate, 1000), -200);

        this.timer.updateOpacity();
        this.alerts.update();

        while (this.icons.length < 4) {
            this.icons.push({
                visible: true,
                opacity: 0,
                hoverAnimation: 0,
                clickTargetAnimation: 0,
                clickAnimation: 0,
                image: [images.gear, images.exit, images.restart, images.fullRestart][this.icons.length]
            });
        }

        if (!menu.creditsScreen && !menu.titleScreen) this.timer.update();

        this.icons[0].visible = true;
        this.icons[1].visible = true;
        this.icons[2].visible = true;
        this.icons[3].visible = true;
        if (menu.creditsScreen) {
            this.icons[0].visible = false;
        }
        if (menu.titleScreen || menu.creditsScreen) {
            this.icons[1].visible = false;
            this.icons[2].visible = false;
            this.icons[3].visible = false;
            if (menu.settingsScreen && menu.settingsScreenAnimation > 30) {
                this.icons[0].visible = false;
            }
        }
        if (!menu.settings.restartGameKeybind) this.icons[3].visible = false;

        var iconSize = 45;
        for (var n = 0; n < this.icons.length; n++) {
            var icon = this.icons[n];
            if (icon.visible) {
                icon.opacity += 0.1;
            } else {
                icon.opacity -= 0.1;
            }
            icon.opacity = Math.max(Math.min(icon.opacity, 1), 0);

            if (Mouse.inBox(20 + 60 * n, 15, iconSize, iconSize) && icon.visible && !icon.clickAnimation) {
                icon.hoverAnimation++;
                if (Mouse.click) {
                    icon.clickTargetAnimation = 20;
                    game.soundEffects.menuClick();
                    if (n === 0) {
                        if (!menu.titleScreen) {
                            menu.exitToMenu();
                            menu.settingsScreenAnimation = 40;
                            menu.levelSelectScreen = false;
                            menu.levelSelectAnimation = 0;
                            menu.wipeSaveScreen = false;
                            menu.wipeSaveAnimation = 0;
                        }
                        menu.settingsScreen = true;
                        game.ui.alerts.shortenAlertsForMenu();
                    } else if (n === 1) {
                        menu.exitToMenu();
                        game.ui.alerts.shortenAlertsForMenu();
                    } else if (n === 2 && !game.level.restartLevelTransition && !game.level.restartGameTransition) {
                        game.level.restartLevel();
                    } else if (n == 3 && !game.level.restartLevelTransition && !game.level.restartGameTransition) {
                        game.level.restartGame();
                    }
                }
            } else {
                icon.hoverAnimation--;
            }
            icon.hoverAnimation = Math.max(Math.min(icon.hoverAnimation, 20), 0);

            icon.clickTargetAnimation--;
            icon.clickTargetAnimation = Math.max(icon.clickTargetAnimation, 0);
            if (icon.clickTargetAnimation) {
                icon.clickAnimation++;
            } else {
                icon.clickAnimation--;
            }
            icon.clickAnimation = Math.max(Math.min(icon.clickAnimation, 20), 0);
        }

        if (game.input.settings && !menu.settingsScreen) {
            if (!menu.titleScreen) {
                menu.exitToMenu();
                menu.settingsScreenAnimation = 40;
                menu.levelSelectScreen = false;
                menu.levelSelectAnimation = 0;
                menu.wipeSaveScreen = false;
                menu.wipeSaveAnimatsion = 0;
            }
            game.soundEffects.menuClick();
            menu.navigatingWithKeys = true;
            menu.settingsScreen = true;
            game.ui.alerts.shortenAlertsForMenu();
        }
    },
    draw: function () {
        this.timer.draw();
        this.alerts.draw();

        ctx.save();
        ctx.translate(0, Math.min(this.yTranslate, 0));

        var actions = ["settings", "exit", "restartLevel", "restartGame"];
        var iconSize = 45;
        for (var n = 0; n < this.icons.length; n++) {
            var icon = this.icons[n];
            ctx.save();
            ctx.translate(20 + 60 * n + iconSize / 2, 15 + iconSize / 2);
            ctx.globalAlpha = icon.opacity;
            ctx.save();
            ctx.scale(0.7, 0.7);
            menu.drawKeybindPrompt(actions[n], true);
            ctx.restore();
            var a = easeInOut(icon.hoverAnimation / 20);
            var a2 = easeInOut(icon.clickAnimation / 20);
            var s = 1 + a * 0.1 * (1 - a2) - a2 * 0.3;
            ctx.scale(s, s);
            if (n === 0) {
                ctx.rotate((20 * a) * Math.PI / 180);
            }
            if (n === 2) {
                ctx.rotate((20 * a - 20) * Math.PI / 180);
            }
            if (n === 3) {
                ctx.rotate(20 * a * Math.PI / 180);
            }
            ctx.drawImage(icon.image, -iconSize / 2, -iconSize / 2, iconSize, iconSize);
            ctx.restore();
        }

        ctx.restore();
    }
};