function boxOutline(x, y, w, h) {
    ctx.fillStyle = "black";
    ctx.roundRect(x, y, w, h, 6);
    ctx.fill();
    ctx.fillStyle = "grey";
    ctx.roundRect(x + 5, y + 5, w - 10, h - 10, 4);
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.roundRect(x + 8, y + 8, w - 16, h - 16, 4);
    ctx.fill();
}
function insetOutline(x, y, w, h) {
    ctx.fillStyle = "rgb(200,200,200)";
    ctx.roundRect(x, y, w, h, 4);
    ctx.fill();
    ctx.fillStyle = "rgb(240,240,240)";
    ctx.roundRect(x + 5, y + 5, w - 10, h - 10, 4);
    ctx.fill();
}
function buttonOutline(x, y, w, h) {
    ctx.fillStyle = "rgb(170,170,170)";
    ctx.roundRect(x, y, w, h, 5);
    ctx.fill();
    ctx.fillStyle = "rgb(230,230,230)";
    ctx.roundRect(x + 5, y + 5, w - 10, h - 10, 4);
    ctx.fill();
}
function buttonHoverOutline(x, y, w, h) {
    ctx.fillStyle = "rgb(170,170,170)";
    ctx.roundRect(x, y, w, h, 5);
    ctx.fill();
    ctx.fillStyle = "rgb(220,220,220)";
    ctx.roundRect(x + 5, y + 5, w - 10, h - 10, 4);
    ctx.fill();
}
function upgradeBar(x, y, w, h, n, filled) {
    ctx.fillStyle = "rgb(150,150,150)";
    ctx.roundRect(x, y, w, h, 4);
    ctx.fill();
    ctx.fillStyle = "rgb(170,170,170)";
    ctx.roundRect(x + 2, y + 2, w - 4, h - 4, 4);
    ctx.fill();
    var width = (w - 6) / n;
    for (var n2 = 0; n2 < n; n2++) {
        if (filled > n2) {
            ctx.fillStyle = "rgb(0,230,0)";
            ctx.shadowBlur = 4;
            ctx.shadowColor = "rgb(0,230,0)";
            ctx.roundRect(x + n2 * width + 6, y + 6, width - 6, h - 12, 4);
            ctx.fill();
            ctx.shadowBlur = 0;
        } else {
            ctx.fillStyle = "rgb(90,90,90)";
            ctx.roundRect(x + n2 * width + 5, y + 5, width - 5, h - 10, 4);
            ctx.fill();
            ctx.fillStyle = "rgb(100,100,100)";
            ctx.roundRect(x + n2 * width + 8, y + 8, width - 11, h - 16, 4);
            ctx.fill();
        }
    }
}

var home = {
    update: function () {
        for (var n = 0; n < 6; n++) {
            var x = n % 2 * 160;
            var y = Math.floor(n / 2) * 160;
            if (n === 0) {
                if (Mouse.clickInBox(40 + x, 520 + y, 150, 150)) {
                    menu.switchPage = "new day";
                    data.day++;
                    updateSaveData();
                }
            }
        }

        for (var n = 0; n < 3; n++) {
            if (Mouse.clickInBox(390 + 300, 520 + n * 160 + 15, 270, 60)) {
                var upgrades;
                if (n === 0) upgrades = speedUpgrades;
                if (n === 1) upgrades = healthUpgrades;
                if (n === 2) upgrades = inventoryUpgrades;
                var stat = ["speedUpgrade", "healthUpgrade", "inventoryUpgrade"][n]
                var nextUpgrade = upgrades[data[stat]];
                if (!nextUpgrade) continue;
                if (nextUpgrade.cost.gold > data.gold) continue;
                if (nextUpgrade.cost.gems > data.gems) continue;
                data.gold -= nextUpgrade.cost.gold;
                data.gems -= nextUpgrade.cost.gems;
                data[stat]++;
                updateSaveData();
            }
        }
    },
    updateEffects: function () {

    },
    draw: function () {
        this.drawPlayerWindow();
        this.drawPlayerInventory();
        this.drawNewDaySelection();
        this.drawInventory();
        this.drawCurrency();
        this.drawUpgrades();
    },
    drawPlayerWindow: function () {
        ctx.save();
        ctx.translate(20, 60);
        boxOutline(0, 0, 350, 240);
        ctx.clip();

        game.player.x = 0;
        game.player.y = 0;
        game.player.zombified = false;
        ctx.save();
        ctx.translate(175, 120);

        ctx.fillStyle = "rgb(240,240,240)";
        ctx.fillRect(-1000, -1000, 1000, 1000);
        ctx.fillRect(0, 0, 1000, 1000);

        ctx.scale(3, 3);
        ctx.translate(-10, -10);
        game.player.draw();
        ctx.restore();

        ctx.fillStyle = "black";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.font = "bold 20px Trebuchet MS";
        ctx.fillText(`Speed: ${calculatePlayerSpeed() * 10}`, 20, 30);
        ctx.fillText(`Health: ${calculatePlayerHealth()}`, 20, 55);
        ctx.restore();
    },
    drawPlayerInventory: function () {
        ctx.save();
        ctx.translate(20, 290);

        for (var n = 0; n < Math.min(3, data.inventoryUpgrade); n++) {
            insetOutline(n * 120, 20, 110, 110);
        }

        ctx.restore();

        if (data.inventoryUpgrade === 0) {
            ctx.fillStyle = "rgb(150,150,150)";
            ctx.font = "bold 30px Trebuchet MS";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("No Inventory Slots", 200, 360);
        }
    },
    drawNewDaySelection: function () {
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "bold 50px Trebuchet MS";
        ctx.fillText("Day " + data.day, 20 + 350 / 2, 470);

        for (var n = 0; n < 6; n++) {
            ctx.save();
            var x = n % 2 * 160;
            var y = Math.floor(n / 2) * 160;
            ctx.translate(40 + x, 520 + y);
            if (n === 0) {
                if (Mouse.inBox(40 + x, 520 + y, 150, 150)) {
                    buttonHoverOutline(0, 0, 150, 150);
                } else {
                    buttonOutline(0, 0, 150, 150);
                }
                ctx.fillStyle = "black";
                ctx.font = "bold 40px Trebuchet MS";
                ctx.fillText("New", 75, 50);
                ctx.fillText("Day", 75, 100);
            }

            ctx.restore();
        }
    },
    drawInventory: function () {
        ctx.save();
        ctx.translate(390, 60);

        boxOutline(0, 0, 590, 360);
        for (var y = 0; y < 3; y++) {
            for (var x = 0; x < 5; x++) {
                insetOutline(15 + x * 110, 20 + y * 112, 100, 100);
            }
        }

        ctx.restore();
    },
    drawCurrency: function () {
        ctx.fillStyle = "black";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.font = "bold 40px Trebuchet MS";

        ctx.fillText(data.gold, 500, 470);
        var o = { collectableType: "gold", value: 5, animationOffset: 0, noVerticalMovement: true, noShadow: true };
        ctx.save();
        ctx.translate(475, 478);
        ctx.scale(2, 2);
        game.objects.drawCollectable(o);
        ctx.restore();
        var width = ctx.measureText(data.gold).width;

        ctx.save();
        ctx.translate(width + 100, 0);
        ctx.fillText(data.gems, 500, 470);
        var o = { collectableType: "gem", animationOffset: t / 700, noVerticalMovement: true, noShadow: true };
        ctx.translate(467, 468);
        ctx.scale(1.2, 1.2);
        game.objects.drawCollectable(o);
        ctx.restore();
    },
    drawUpgrades: function () {
        var texts = ["Speed", "Health", "Inventory"];
        var upgradeAmounts = [
            15,
            15,
            4
        ];
        for (var n = 0; n < 3; n++) {
            ctx.save();
            ctx.translate(390, 520 + n * 160);

            boxOutline(0, 0, 590, 140);

            upgradeBar(12, 88, 566, 40, upgradeAmounts[n], [data.speedUpgrade, data.healthUpgrade, data.inventoryUpgrade][n]);

            ctx.fillStyle = "black";
            ctx.font = "bold 40px Trebuchet MS";
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";

            ctx.fillText(texts[n], 20, 45);

            var nextUpgrade;
            if (n === 0) nextUpgrade = speedUpgrades[data.speedUpgrade];
            if (n === 1) nextUpgrade = healthUpgrades[data.healthUpgrade];
            if (n === 2) nextUpgrade = inventoryUpgrades[data.inventoryUpgrade];
            if (!nextUpgrade) {
                ctx.restore();
                continue;
            }
            if (Mouse.inBox(390 + 300, 520 + n * 160 + 15, 270, 60)) {
                buttonHoverOutline(300, 15, 270, 60);
            } else {
                buttonOutline(300, 15, 270, 60);
            }
            ctx.font = "bold 30px Trebuchet MS";
            ctx.fillStyle = "black";
            ctx.fillText("Upgrade", 320, 45);

            ctx.textAlign = "right";
            ctx.font = "bold 20px Trebuchet MS";
            ctx.fillStyle = "black";

            if (nextUpgrade.cost.gold !== 0) {
                ctx.fillText(nextUpgrade.cost.gold, 555, 35);
                var width = ctx.measureText(nextUpgrade.cost.gold).width;
                ctx.save();
                ctx.translate(545 - width - 10, 38);
                var o = { collectableType: "gold", value: 5, animationOffset: 0, noVerticalMovement: true, noShadow: true, noAnimation: true };
                game.objects.drawCollectable(o);
                ctx.restore();
            }

            if (nextUpgrade.cost.gems !== 0) {
                ctx.fillText(nextUpgrade.cost.gems, 555, 57);
                var width = ctx.measureText(nextUpgrade.cost.gems).width;
                ctx.save();
                ctx.translate(545 - width - 10, 57);
                ctx.scale(0.6, 0.6);
                var o = { collectableType: "gem", animationOffset: 0, noVerticalMovement: true, noShadow: true, noAnimation: true };
                game.objects.drawCollectable(o);
                ctx.restore();
            }

            ctx.restore();
        }
    }
}

var speedUpgrades = [
    { tooltip: "+1 Speed", speed: 1.6, cost: { gold: 10, gems: 0 } },
    { tooltip: "+1 Speed", speed: 1.7, cost: { gold: 10, gems: 0 } },
    { tooltip: "+1 Speed", speed: 1.8, cost: { gold: 10, gems: 0 } },
    { tooltip: "+1 Speed", speed: 1.9, cost: { gold: 10, gems: 0 } },
    { tooltip: "+1 Speed", speed: 2, cost: { gold: 10, gems: 0 } },
    { tooltip: "+1 Speed", speed: 2.1, cost: { gold: 10, gems: 0 } },
    { tooltip: "+1 Speed", speed: 2.2, cost: { gold: 10, gems: 0 } },
    { tooltip: "+1 Speed", speed: 2.3, cost: { gold: 10, gems: 0 } },
    { tooltip: "+1 Speed", speed: 2.4, cost: { gold: 10, gems: 0 } },
    { tooltip: "+1 Speed", speed: 2.5, cost: { gold: 10, gems: 0 } },
    { tooltip: "+1 Speed", speed: 2.6, cost: { gold: 10, gems: 0 } },
    { tooltip: "+1 Speed", speed: 2.7, cost: { gold: 10, gems: 0 } },
    { tooltip: "+1 Speed", speed: 2.8, cost: { gold: 10, gems: 0 } },
    { tooltip: "+1 Speed", speed: 2.9, cost: { gold: 10, gems: 0 } },
    { tooltip: "+1 Speed", speed: 3, cost: { gold: 10, gems: 0 } }
];
var healthUpgrades = [
    { tooltip: "+5 Health", health: 15, cost: { gold: 10, gems: 0 } },
    { tooltip: "+5 Health", health: 20, cost: { gold: 10, gems: 0 } },
    { tooltip: "+5 Health", health: 25, cost: { gold: 10, gems: 0 } },
    { tooltip: "+10 Health", health: 35, cost: { gold: 10, gems: 0 } },
    { tooltip: "+10 Health", health: 45, cost: { gold: 10, gems: 0 } },
    { tooltip: "+10 Health", health: 55, cost: { gold: 10, gems: 0 } },
    { tooltip: "+20 Health", health: 75, cost: { gold: 10, gems: 0 } },
    { tooltip: "+25 Health", health: 100, cost: { gold: 10, gems: 0 } },
    { tooltip: "+25 Health", health: 125, cost: { gold: 10, gems: 0 } },
    { tooltip: "+25 Health", health: 150, cost: { gold: 10, gems: 0 } },
    { tooltip: "+50 Health", health: 200, cost: { gold: 10, gems: 0 } },
    { tooltip: "+50 Health", health: 250, cost: { gold: 10, gems: 0 } },
    { tooltip: "+50 Health", health: 300, cost: { gold: 10, gems: 0 } },
    { tooltip: "+100 Health", health: 400, cost: { gold: 10, gems: 0 } },
    { tooltip: "+100 Health", health: 500, cost: { gold: 10, gems: 0 } },
];
var inventoryUpgrades = [
    { tooltip: "+1 Inventory Slot", cost: { gold: 10, gems: 0 } },
    { tooltip: "+1 Inventory Slot", cost: { gold: 100, gems: 0 } },
    { tooltip: "+1 Inventory Slot", cost: { gold: 1000, gems: 0 } },
    { tooltip: "+1 Passive Slot", cost: { gold: 10000, gems: 0 } }
];

function calculatePlayerSpeed() {
    var speed = 1.5;
    if (data.speedUpgrade) {
        speed = speedUpgrades[data.speedUpgrade - 1].speed;
    }
    return speed;
}
function calculatePlayerHealth() {
    var health = 10;
    if (data.healthUpgrade) {
        health = healthUpgrades[data.healthUpgrade - 1].health;
    }
    return health;
}