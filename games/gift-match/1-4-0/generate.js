function bulge(t) {
    return -Math.pow(Math.min(Math.max(t, 0), 1) * 2 - 1, 2) + 1;
}

function bulgeAnimation(t) {
    return Math.sqrt(1 - Math.pow(1 - Math.min(Math.max(t, 0), 1), 2.5));
}

game.generate = {
    boundaries: {
        x1: 50,
        y1: 100,
        x2: 1450,
        y2: 950
    },
    colorSchemes: [
        {
            "name": "red",
            "bodyColor": "hsl(0,70%,50%)",
            "accentColor": "hsl(0,80%,40%)",
            "ribbonColor": "hsl(0,80%,50%)",
            "borderColor": "hsl(0,70%,30%)"
        },
        {
            "name": "orange",
            "bodyColor": "hsl(30,80%,60%)",
            "accentColor": "hsl(30,80%,50%)",
            "ribbonColor": "hsl(30,90%,50%)",
            "borderColor": "hsl(30,70%,30%)",
            "light": true
        },
        {
            "name": "yellow",
            "bodyColor": "hsl(60,80%,70%)",
            "accentColor": "hsl(60,80%,50%)",
            "ribbonColor": "hsl(60,90%,60%)",
            "borderColor": "hsl(60,60%,35%)",
            "light": true
        },
        {
            "name": "lime",
            "bodyColor": "hsl(120,80%,60%)",
            "accentColor": "hsl(120,70%,50%)",
            "ribbonColor": "hsl(120,80%,50%)",
            "borderColor": "hsl(120,50%,35%)",
            "light": true
        },
        {
            "name": "green",
            "bodyColor": "hsl(120,70%,35%)",
            "accentColor": "hsl(120,60%,30%)",
            "ribbonColor": "hsl(120,70%,30%)",
            "borderColor": "hsl(120,40%,20%)"
        },
        {
            "name": "cyan",
            "bodyColor": "hsl(180,80%,60%)",
            "accentColor": "hsl(180,70%,50%)",
            "ribbonColor": "hsl(180,90%,60%)",
            "borderColor": "hsl(180,60%,40%)",
            "light": true
        },
        {
            "name": "blue",
            "bodyColor": "hsl(220,70%,45%)",
            "accentColor": "hsl(220,70%,35%)",
            "ribbonColor": "hsl(220,90%,50%)",
            "borderColor": "hsl(220,70%,30%)"
        },
        {
            "name": "purple",
            "bodyColor": "hsl(270,80%,50%)",
            "accentColor": "hsl(270,70%,40%)",
            "ribbonColor": "hsl(270,80%,50%)",
            "borderColor": "hsl(270,70%,30%)"
        },
        {
            "name": "pink",
            "bodyColor": "hsl(340,80%,80%)",
            "accentColor": "hsl(340,70%,70%)",
            "ribbonColor": "hsl(340,80%,80%)",
            "borderColor": "hsl(340,50%,62%)",
            "light": true
        },
        {
            "name": "white",
            "bodyColor": "hsl(0,0%,100%)",
            "accentColor": "hsl(0,0%,90%)",
            "ribbonColor": "hsl(0,0%,100%)",
            "borderColor": "hsl(0,0%,70%)",
            "light": true
        },
        {
            "name": "black",
            "bodyColor": "hsl(0,0%,30%)",
            "accentColor": "hsl(0,0%,20%)",
            "ribbonColor": "hsl(0,0%,20%)",
            "borderColor": "hsl(0,0%,0%)"
        },
        {
            "name": "gold",
            "bodyColor": "hsl(50,100%,50%)",
            "accentColor": "hsl(50,100%,50%)",
            "ribbonColor": "hsl(50,100%,60%)",
            "borderColor": "hsl(50,90%,40%)"
        }
    ],
    newObjects: [],
    newPresentImages: [],
    bulgeImageCanvases: [],
    possibleColorSchemes: [],
    possibleAccents: [],
    presentsToGenerate: 0,
    correctPresents: 0,
    collisionUpdates: 0,
    goldenPresentNumber: false,
    loaded: false,
    initNewLevelGeneration: function () {
        this.newObjects = [];
        this.newPresentImages = [];
        this.bulgeImageCanvases = [];
        this.presentsToGenerate = Math.min(4 + game.level.level, 14);
        //this.goldenPresentNumber = Math.floor(Math.random() * this.presentsToGenerate);
        this.correctPresents = Math.floor((this.presentsToGenerate + 6) / 10);
        this.collisionUpdates = 10;
        this.loaded = false;

        var numberOfColorSchemes = 3 + Math.floor(this.presentsToGenerate / 14);
        this.possibleColorSchemes = [];
        var possibleIndexes = [...Array(this.colorSchemes.length - 1).keys()];
        for (var n = 0; n < numberOfColorSchemes; n++) {
            var i = Math.floor(Math.random() * possibleIndexes.length);
            this.possibleColorSchemes.push(possibleIndexes[i]);
            possibleIndexes.splice(i, 1);
        }
        this.possibleColorSchemes = this.possibleColorSchemes.map(e => this.colorSchemes[e]);

        this.possibleAccents = [];
        this.possibleAccents.push("stripes");
        this.possibleAccents.push("dots");
        if (Math.random() < 0.1) {
            this.possibleAccents.push("zigzags");
        }
        if (Math.random() < 0.1) {
            this.possibleAccents.push("checkers");
        }
        while (this.possibleAccents.length > 2) this.possibleAccents.shift();
    },
    transferNewLevelGeneration: function () {
        game.objects.objects = [...this.newObjects];
        game.objects.presentImages = [...this.newPresentImages];
        this.newObjects = [];
        this.newPresentImages = [];
    },
    generateDuringFrame: function () {
        if (this.loaded) return;
        if (this.presentsToGenerate > 0) {
            this.generatePresentDuringFrame();
        } else if (this.correctPresents > 0) {
            this.generateCorrectPresentDuringFrame();
        } else if (this.collisionUpdates > 0) {
            this.updateCollisionsDuringFrame();
        } else {
            this.loaded = this.checkImageLoads();
        }
    },
    generatePresentDuringFrame: function () {
        this.presentsToGenerate--;
        while (true) {
            var o = this.generateRandomPresent();
            var duplicate = this.newObjects.find(function (e) {
                if (e.colorScheme.name != o.colorScheme.name) return false;
                if (e.ribbonScheme.name != o.ribbonScheme.name) return false;
                if (e.shape != o.shape) return false;
                if (e.accent.type != o.accent.type) return false;
                return true;
            });
            if (duplicate) continue;
            o.x = Math.random() * 1500;
            o.y = Math.random() * 1000;
            o.angle = Math.random() * 360;
            this.newObjects.push(o);
            break;
        }
    },
    generateCorrectPresentDuringFrame: function () {
        this.correctPresents--;
        var correctPresent = this.newObjects[this.correctPresents];
        correctPresent.needsBulgeImage = true;
        correctPresent.correctPresentNumber = this.correctPresents;
        correctPresent.correctPresentId = 0;
        var secondCorrectPresent = structuredClone(correctPresent);
        secondCorrectPresent.correctPresentId = 1;
        secondCorrectPresent.x = Math.random() * 1500;
        secondCorrectPresent.y = Math.random() * 1000;
        secondCorrectPresent.angle = Math.random() * 360;
        this.newObjects.push(secondCorrectPresent);
    },
    updateCollisionsDuringFrame: function () {
        this.collisionUpdates--;

        var bufferDistance = 5;
        for (var n = 0; n < this.newObjects.length; n++) {
            var o = this.newObjects[n];
            if (!o.bufferDistance) o.bufferDistance = bufferDistance;
            for (var n2 = 0; n2 < this.newObjects.length; n2++) {
                var o2 = this.newObjects[n2];
                if (!o2.bufferDistance) o2.bufferDistance = bufferDistance;
                var dist = distTo(o.x, o.y, o2.x, o2.y);
                var touchingDist = o.radius + o2.radius + o.bufferDistance + o2.bufferDistance;
                if (dist >= touchingDist) continue;
                var penetration = touchingDist - dist;
                var dir = dirTo(o.x, o.y, o2.x, o2.y);
                var move = distToMove(-penetration / 2, dir);
                o.x += move.x;
                o.y += move.y;
                o2.x -= move.x;
                o2.y -= move.y;
                if (o.x - o.radius < this.boundaries.x1) {
                    o.x = o.radius + this.boundaries.x1;
                }
                if (o.y - o.radius < this.boundaries.y1) {
                    o.y = this.boundaries.y1 + o.radius;
                }
                if (o.x + o.radius > this.boundaries.x2) {
                    o.x = this.boundaries.x2 - o.radius;
                }
                if (o.y + o.radius > this.boundaries.y2) {
                    o.y = this.boundaries.y2 - o.radius;
                }
                if (o2.x - o2.radius < this.boundaries.x1) {
                    o2.x = o2.radius + this.boundaries.x1;
                }
                if (o2.y - o2.radius < this.boundaries.y1) {
                    o2.y = this.boundaries.y1 + o2.radius;
                }
                if (o2.x + o2.radius > this.boundaries.x2) {
                    o2.x = this.boundaries.x2 - o2.radius;
                }
                if (o2.y + o2.radius > this.boundaries.y2) {
                    o2.y = this.boundaries.y2 - o2.radius;
                }
            }
        }
    },
    checkImageLoads: function () {
        var loaded = true;
        for (var o of this.newObjects) {
            if (o.type != "present") continue;
            var image = this.newPresentImages[o.imageNumber];
            if (!image.loaded) {
                loaded = false;
                continue;
            }
            if (!o.needsBulgeImage) continue;
            if (o.correctPresentId === 1) {
                var pair = this.newObjects.find(e => e.correctPresentNumber == o.correctPresentNumber);
                o.bulgeImageNumber = pair.bulgeImageNumber;
                o.bulgeImageCoordinates = pair.bulgeImageCoordinates;
                continue;
            }
            if (o.finalizingBulgeImage) {
                if (o.bulgeImageFrameNumber < 15) {
                    this.generateBulgeImageSecondPassOnFrame(o);
                    if (o.bulgeImageFrameNumber == 15) this.finalizeBulgeImageSecondPass(o);
                    loaded = false;
                } else {
                    var image = this.newPresentImages[o.bulgeImageNumber];
                    if (!image.loaded) {
                        loaded = false;
                    }
                }
            } else if (o.loadingBulgeImage) {
                if (o.bulgeImageFrameNumber < 15) {
                    this.generateBulgeImageFirstPassOnFrame(o);
                    if (o.bulgeImageFrameNumber == 15) this.finalizeBulgeImageFirstPass(o);
                    loaded = false;
                } else {
                    var image = this.newPresentImages[o.bulgeImageNumber];
                    if (!image.loaded) {
                        loaded = false;
                    } else if (!o.finalizingBulgeImage) {
                        loaded = false;
                        o.finalizingBulgeImage = true;
                        this.initBulgeImageSecondPass(o);
                    }
                }
            } else {
                loaded = false;
                o.loadingBulgeImage = true;
                this.initBulgeImageFirstPass(o);
            }
        }
        return loaded;
    },
    generateRandomPresent: function () {
        var colorScheme = this.possibleColorSchemes[Math.floor(Math.random() * this.possibleColorSchemes.length)];
        var ribbonScheme = this.possibleColorSchemes[Math.floor(Math.random() * this.possibleColorSchemes.length)];

        var o = {};
        if (this.goldenPresentNumber !== false && this.goldenPresentNumber == this.newObjects.length) {
            o.golden = true;
            colorScheme = this.colorSchemes.find(e => e.name == "gold");
            ribbonScheme = colorScheme;
        }

        o.type = "present";
        o.w = Math.random() * 100 + 100;
        o.h = Math.random() * 100 + 100;
        if (Math.random() < 0.05) o.h *= 2;
        o.colorScheme = colorScheme;
        o.ribbonScheme = ribbonScheme;
        o.size = Math.sqrt(o.w ** 2 + o.h ** 2);
        o.shape = Math.random() < 0.05 ? "circle" : "rectangle";
        if (o.shape == "circle") {
            o.size = Math.min(o.w, o.h);
            o.w = o.size
            o.h = o.size;
        }
        o.radius = o.size / 2;
        o.bodyColor = colorScheme.bodyColor;

        o.accent = {};
        if (o.golden) {
            o.accent = false;
        } else {
            o.accent.type = this.possibleAccents[Math.floor(Math.random() * this.possibleAccents.length)];
            o.accent.color = colorScheme.accentColor;
            if (o.accent.type == "dots") {
                o.accent.sizes = [Math.random() * 5 + 5];
                o.accent.sizes.push(o.accent.sizes[0] * (1.5 + Math.random()));
                o.accent.spacing = Math.random() * 20 + 30;
            } else if (o.accent.type == "stripes") {
                o.accent.angle = Math.random() * 360;
                o.accent.thickness = Math.random() * 30 + 5;
                o.accent.spacing = Math.random() * 5 + 5 + o.accent.thickness * 2;
                o.accent.offset = Math.random() * o.accent.spacing;
            } else if (o.accent.type == "checkers") {
                o.accent.width = Math.random() * 10 + 20;
            } else if (o.accent.type == "zigzags") {
                o.accent.angle = Math.random() * 360;
                o.accent.thickness = Math.random() * 20 + 15;
                o.accent.spacing = Math.random() * 5 + o.accent.thickness * 4;
                o.accent.zigzagSpacing = o.accent.spacing / 5;
                o.accent.zigzagWidth = o.accent.thickness * (Math.random() + 1);
                o.accent.offset = Math.random() * o.accent.spacing;
            }
        }

        o.ribbon = {};
        o.ribbon.directionOrder = ["horizontal", "vertical"];
        if (Math.random() < 0.5) o.ribbon.directionOrder.unshift(o.ribbon.directionOrder.pop());
        o.ribbon.color = ribbonScheme.ribbonColor;
        o.ribbon.borderColor = ribbonScheme.borderColor;
        o.ribbon.thickness = 10 + Math.random() * 10;
        if (Math.random() < 0.05) {
            o.ribbon.thickness = Math.min(o.w, o.h) / 5;
        }
        o.ribbon.bowPosition = ["left", "right", "bottom", "top", "center"][Math.floor(Math.random() * 5)];
        this.createPresentImage(o);
        return o;
    },
    createPresentImage: function (o) {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        var realWidth = o.w + 4;
        var realHeight = o.h + 4;
        var translateX = 2;
        var translateY = 2;
        if (o.ribbon.bowPosition == "left") {
            realWidth += o.ribbon.thickness * 2;
            translateX += o.ribbon.thickness * 2;
        } else if (o.ribbon.bowPosition == "right") {
            realWidth += o.ribbon.thickness * 2;
        } else if (o.ribbon.bowPosition == "top") {
            realHeight += o.ribbon.thickness * 2;
            translateY += o.ribbon.thickness * 2;
        } else if (o.ribbon.bowPosition == "bottom") {
            realHeight += o.ribbon.thickness * 2;
        }
        canvas.width = realWidth;
        canvas.height = realHeight;

        ctx.save();
        ctx.translate(o.w / 2 + translateX, o.h / 2 + translateY);
        this.drawPresent(ctx, o);
        ctx.restore();

        var img = document.createElement("img");
        img.src = canvas.toDataURL();

        this.newPresentImages.push(img);
        o.imageNumber = this.newPresentImages.length - 1;
        img.onload = function () {
            this.loaded = true;
        }
        o.imageCoordinates = {
            x: -translateX,
            y: -translateY,
            w: realWidth,
            h: realHeight
        }
    },
    initBulgeImageFirstPass: function (o) {
        var maxScale = 1.1;
        var frames = 15;
        var canvas = document.createElement("canvas");
        var image = this.newPresentImages[o.imageNumber];
        canvas.width = image.width * maxScale * frames;
        canvas.height = image.height * maxScale;
        o.bulgeImageFrameNumber = 0;
        this.bulgeImageCanvases.push(canvas);
        o.bulgeImageCanvasNumber = this.bulgeImageCanvases.length - 1;

        o.bulgeImageCoordinates = {
            x: o.imageCoordinates.x - image.width * (maxScale - 1) / 2,
            y: o.imageCoordinates.y - image.height * (maxScale - 1) / 2,
            w: image.width * maxScale,
            h: image.height * maxScale
        }
    },
    generateBulgeImageFirstPassOnFrame: function (o) {
        var maxScale = 1.1;
        var frames = 15;
        var canvas = this.bulgeImageCanvases[o.bulgeImageCanvasNumber];
        var ctx = canvas.getContext("2d");
        var n = o.bulgeImageFrameNumber;
        var image = this.newPresentImages[o.imageNumber];
        ctx.save();
        ctx.translate(image.width * maxScale * n, 0);
        ctx.translate(image.width * (maxScale - 1) / 2, image.height * (maxScale - 1) / 2);
        for (var x = 0; x <= canvas.width; x++) {
            var a = bulge((x + o.imageCoordinates.x) / o.w);
            var scale = 1 + a * (maxScale - 1) * n / frames;
            ctx.save();
            ctx.translate(x, 0);
            ctx.translate(0, o.h / 2 - o.imageCoordinates.y);
            ctx.scale(1, scale);
            ctx.translate(0, -o.h / 2 + o.imageCoordinates.y);
            ctx.drawImage(image, x, 0, 1, canvas.height, 0, 0, 1, canvas.height);
            ctx.restore();
        }
        ctx.restore();

        o.bulgeImageFrameNumber++;
    },
    finalizeBulgeImageFirstPass: function (o) {
        var canvas = this.bulgeImageCanvases[o.bulgeImageCanvasNumber];
        var img = document.createElement("img");
        img.src = canvas.toDataURL();
        this.newPresentImages.push(img);
        o.bulgeImageNumber = this.newPresentImages.length - 1;
        img.onload = function () {
            this.loaded = true;
        }
    },
    initBulgeImageSecondPass: function (o) {
        o.bulgeImageFrameNumber = 0;
        var canvas = this.bulgeImageCanvases[o.bulgeImageCanvasNumber];
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    },
    generateBulgeImageSecondPassOnFrame: function (o) {
        var maxScale = 1.1;
        var frames = 15;
        var canvas = this.bulgeImageCanvases[o.bulgeImageCanvasNumber];
        var ctx = canvas.getContext("2d");
        var n = o.bulgeImageFrameNumber;
        var image = this.newPresentImages[o.bulgeImageNumber];
        var w = o.bulgeImageCoordinates.w;
        var h = o.bulgeImageCoordinates.h;
        ctx.save();
        ctx.translate(w * n, 0);
        for (var y = 0; y <= h; y++) {
            var a = bulge((y + o.bulgeImageCoordinates.y) / o.h);
            var scale = 1 + a * (maxScale - 1) * n / frames;
            ctx.save();
            ctx.translate(0, y);
            ctx.translate(o.w / 2 - o.imageCoordinates.x, 0);
            ctx.scale(scale, 1);
            ctx.translate(-o.w / 2 + o.imageCoordinates.x, 0);
            ctx.drawImage(image, w * n, y, w, 1, 0, 0, w, 1);
            ctx.restore();
        }
        ctx.restore();
        o.bulgeImageFrameNumber++;
    },
    finalizeBulgeImageSecondPass: function (o) {
        var canvas = this.bulgeImageCanvases[o.bulgeImageCanvasNumber];
        var img = document.createElement("img");
        img.src = canvas.toDataURL();
        this.newPresentImages[o.bulgeImageNumber] = img;
        img.onload = function () {
            this.loaded = true;
        }
    },
    drawPresent: function (ctx, o) {
        this.drawPresentOutsideBow(ctx, o);
        this.drawPresentBody(ctx, o);
        this.drawPresentAccent(ctx, o);
        this.drawPresentRibbons(ctx, o);
        this.drawPresentBodyBorder(ctx, o);
        this.drawPresentCenterBow(ctx, o);
    },
    drawPresentAccent: function (ctx, o) {
        if (!o.accent) return;
        ctx.save();
        this.drawPresentBodyShape(ctx, o);
        ctx.clip();

        if (o.accent.type == "stripes") {
            this.drawStripesAccent(ctx, o);
        } else if (o.accent.type == "dots") {
            this.drawDotsAccent(ctx, o);
        } else if (o.accent.type == "checkers") {
            this.drawCheckersAccent(ctx, o);
        } else if (o.accent.type == "zigzags") {
            this.drawZigzagsAccent(ctx, o);
        }

        ctx.restore();
    },
    drawStripesAccent: function (ctx, o) {
        var size = Math.max(o.w, o.h);
        var radialSize = size * 2;
        var step = o.accent.spacing;
        var lowerBound = o.accent.offset % (step * 2) - size / 2 - step * 2;
        var upperBound = size / 2 + step;

        ctx.strokeStyle = o.accent.color;
        ctx.lineWidth = o.accent.thickness;
        ctx.rotate(o.accent.angle * Math.PI / 180);
        for (var y = lowerBound; y < upperBound; y += step) {
            ctx.beginPath();
            ctx.moveTo(-radialSize, y);
            ctx.lineTo(radialSize, y);
            ctx.stroke();
        }
    },
    drawZigzagsAccent: function (ctx, o) {
        var size = Math.max(o.w, o.h);
        var radialSize = size * 2;
        var step = o.accent.spacing;
        var lowerBound = o.accent.offset % (step * 2) - size / 2 - step * 2;
        var upperBound = size / 2 + step;

        ctx.strokeStyle = o.accent.color;
        ctx.lineWidth = o.accent.thickness;
        ctx.lineCap = "miter";
        ctx.rotate(o.accent.angle * Math.PI / 180);
        for (var y = lowerBound; y < upperBound; y += step) {
            ctx.beginPath();
            for (var x = -radialSize, xCount = 0; x < radialSize; x += o.accent.zigzagSpacing, xCount++) {
                ctx.lineTo(x, y + ((xCount % 2) ? 0 : o.accent.zigzagWidth));
            }
            ctx.stroke();
        }
    },
    drawDotsAccent: function (ctx, o) {
        ctx.fillStyle = o.accent.color;
        var step = o.accent.spacing;
        for (var x = -o.w / 2, xCount = 0; x < o.w + step; x += step, xCount++) {
            for (var y = -o.h / 2, yCount = 0; y < o.h + step; y += step, yCount++) {
                var size = o.accent.sizes[(xCount + yCount) % 2];
                ctx.beginPath();
                ctx.arc(x, y, size, 0, 2 * Math.PI);
                ctx.fill();
            }
        }
    },
    drawCheckersAccent: function (ctx, o) {
        ctx.fillStyle = o.accent.color;
        var step = o.accent.width;
        for (var x = -o.w / 2, xCount = 0; x < o.w + step; x += step, xCount++) {
            for (var y = -o.h / 2, yCount = 0; y < o.h + step; y += step, yCount++) {
                if ((xCount + yCount) % 2) continue;
                ctx.fillRect(x, y, step, step);
            }
        }
    },
    drawPresentRibbons: function (ctx, o) {
        if (!o.ribbon) return;
        ctx.save();
        this.drawPresentBodyShape(ctx, o);
        ctx.clip();

        var b = o.ribbon.thickness;
        var borderThickness = 3;

        var directions = o.ribbon.directionOrder;
        for (var direction of directions) {
            if (direction == "horizontal") {
                ctx.fillStyle = o.ribbon.borderColor;
                ctx.fillRect(-o.w / 2, - b / 2 - borderThickness, o.w, b + borderThickness * 2);
                ctx.fillStyle = o.ribbon.color;
                ctx.fillRect(-o.w / 2, - b / 2, o.w, b);
            } else if (direction == "vertical") {
                ctx.fillStyle = o.ribbon.borderColor;
                ctx.fillRect(- b / 2 - borderThickness, -o.h / 2, b + borderThickness * 2, o.h);
                ctx.fillStyle = o.ribbon.color;
                ctx.fillRect(- b / 2, -o.h / 2, b, o.h);
            }
        }

        ctx.restore();
    },
    drawPresentOutsideBow: function (ctx, o) {
        if (o.ribbon.bowPosition == "center") return;
        var borderThickness = 300 / o.ribbon.thickness;
        var directionIndex = ["top", "right", "bottom", "left"].indexOf(o.ribbon.bowPosition)
        var rotate = directionIndex * 90;
        dimension = ["h", "w", "h", "w"][directionIndex];
        var size = Math.max(o.w, o.h);
        ctx.save();
        ctx.rotate(rotate * Math.PI / 180);
        ctx.translate(0, -o[dimension] / 2);
        ctx.beginPath();
        ctx.scale(o.ribbon.thickness / 100, o.ribbon.thickness / 100);
        this.drawPresentBowInPosition(ctx, o, borderThickness);
        ctx.restore();
    },
    drawPresentCenterBow: function (ctx, o) {
        if (o.ribbon.bowPosition != "center") return;
        var borderThickness = 300 / o.ribbon.thickness;
        ctx.save();
        ctx.scale(o.ribbon.thickness / 100, o.ribbon.thickness / 100);
        this.drawPresentBowInPosition(ctx, o, borderThickness);
        ctx.restore();
    },
    drawPresentBowInPosition: function (ctx, o, borderThickness) {
        ctx.fillStyle = o.ribbon.color;
        ctx.strokeStyle = o.ribbon.borderColor;
        ctx.lineWidth = borderThickness;
        ctx.lineJoin = "round";

        ctx.beginPath();
        ctx.moveTo(-20, 0);
        ctx.lineTo(-175, -150);
        ctx.lineTo(-50, -200);
        ctx.lineTo(20, 0);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(20, 0);
        ctx.lineTo(175, -150);
        ctx.lineTo(50, -200);
        ctx.lineTo(-20, 0);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, 80, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    },
    drawPresentBody: function (ctx, o) {
        ctx.fillStyle = o.bodyColor;
        this.drawPresentBodyShape(ctx, o);
        ctx.fill();
    },
    drawPresentBodyBorder: function (ctx, o) {
        ctx.strokeStyle = "black";
        if (o.golden) ctx.strokeStyle = o.colorScheme.borderColor;
        ctx.lineWidth = 3;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        this.drawPresentBodyShape(ctx, o);
        ctx.stroke();
    },
    drawPresentBodyShape: function (ctx, o, forClipping) {
        if (forClipping) {
            if (o.shape == "rectangle") {
                ctx.rect(-o.w / 2 - 2, -o.h / 2 - 2, o.w + 4, o.h + 4);
            } else {
                ctx.arc(0, 0, o.size / 2 + 2, 0, 2 * Math.PI);
            }
        } else {
            ctx.beginPath();
            if (o.shape == "rectangle") {
                ctx.rect(-o.w / 2, -o.h / 2, o.w, o.h);
            } else {
                ctx.arc(0, 0, o.size / 2, 0, 2 * Math.PI);
            }
        }
    },
    generateColorSchemes: function () {
        this.colorSchemes = [];
        for (var o of this.colorInfo) {
            var scheme = {};
            scheme.name = o.name;
            var hue = o.hue;
            var saturation = o.saturation || 100;
            var lightness = o.lightness || 100;
            scheme.hue = o.hue;
            scheme.saturation = o.saturation;
            scheme.lightness = o.lightness;
            scheme.bodyColor = `hsl(${hue},${saturation * 0.7}%,${lightness * 0.5}%)`;
            scheme.accentColor = `hsl(${hue},${saturation * 0.8}%,${lightness * 0.5}%)`;
            scheme.borderColor = `hsl(${hue},${saturation * 0.5}%,${lightness * 0.35}%)`;
            this.colorSchemes.push(scheme);
        }
    }
}