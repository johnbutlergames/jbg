game.particles = {
    objects: [],
    update: function () {
        for (var o of this.objects) {
            this.updateObject(o);
        }
        this.objects = this.objects.filter(e => !e.delete);
    },
    draw: function () {
        for (var o of this.objects) {
            this.drawObject(o);
        }
    },
    updateObject: function (o) {
        if (o.xmove) o.x += o.xmove;
        if (o.ymove) o.y += o.ymove;
        if (o.damping) {
            o.xmove *= o.damping;
            o.ymove *= o.damping;
        }
        if (o.type == "player death circle") {
            o.r += 2;
        }
        if (o.type == "boss fireball explosion circle") {
            o.r += 1.5;
        }
        if (o.type == "boss fireball explosion particle") {
            o.ymove += 0.1;
        }
        if (o.type == "heart particle") {
            o.ymove += 0.05;
        }
        if (o.type == "player eye death circle") {
            o.r += 2;
        }
        if (o.type == "cube collect particle") {
            o.r += 4;
        }
        if (o.type == "cube collect ultra particle") {
            o.r += 1;
            o.r *= 1.2;
        }
        if (o.type == "player speed effect particle") {
            o.r++;
            if (game.background.effect.active("magenta")) o.r += 4;
            if (o.image == "magentaSparkle") {
                if (!game.background.effect.active("magenta")) {
                    o.alpha -= 0.02;
                }
            }
            o.r = Math.min(o.r, 10);
        }
        if (o.type == "boss part impact warning particle") {
            o.animation++;
        }
        if (o.type == "boss part impact particle") {
            o.ymove += 0.1;
        }
        if (o.type == "player explode particle") {
            var move = distToMove(15, 180 + o.dir);
            o.length += 7;
            if (game.level.triggers.tripped("ultra shortcut")) {
                o.length += 7;
                move = distToMove(30, 180 + o.dir);
            }
            o.length = Math.min(o.length, 160);
            o.x += move.x;
            o.y += move.y;
        }
        if (o.type == "blob particle") {
            o.r -= 0.1;
            if (o.r <= 0) {
                o.r = 0;
                o.delete = true;
            }
            o.ymove += 0.05;
            o.ymove *= 0.95;
            o.xmove *= 0.95;
        }
        if (o.type == "cube collect ultra lightning") {
            if (!o.strikes) {
                o.strikes = [];
                let colors = [
                    "rgb(255,0,200)",
                    "rgb(255,0,200)",
                    "rgb(255,255,255)",
                    "rgb(255,0,200)",
                    "rgb(255,255,255)",
                    "rgb(255,0,200)",
                    "rgb(255,0,200)",
                    "rgb(255,255,255)",
                    "rgb(255,0,200)",
                    "rgb(255,255,255)"
                ]
                let timeOffsets = [];
                for (let n = 0; n < 10; n++) {
                    timeOffsets.push(n * -1.5);
                }
                timeOffsets = shuffleArray(timeOffsets);
                let offset = Math.random() * 360;
                for (let n = 0; n < 10; n++) {
                    let animation = timeOffsets[n];
                    let points = [];
                    let angle = n / 10 * 360 + offset + Math.random() * 20 - 10;
                    let color = colors[n];
                    let stepDist = distToMove(50, angle);
                    for (let n2 = 0; n2 < 40; n2++) {
                        let point = { x: o.x + stepDist.x * n2, y: o.y + stepDist.y * n2 };
                        if (n2 !== 0) point.x += Math.random() * 80 - 40;
                        if (n2 !== 0) point.y += Math.random() * 80 - 40;
                        points.push(point);
                    }
                    o.strikes.push({ points, color, animation });
                }
            }
            for (let strike of o.strikes) strike.animation++;
            o.animation++;
            if (o.strikes.every(e => e.animation > 20)) o.delete = true;
        }
        if (o.rotate) {
            o.angle += o.rotate;
        }
        if (o.gravity) o.ymove += o.gravity;
        if (o.decay) o.alpha -= o.decay;
        if (o.alpha <= 0) o.delete = true;
    },
    drawObject: function (o) {
        if (o.r <= 0) return;
        ctx.save();
        if (o.alpha) ctx.globalAlpha = o.alpha;
        if (o.drawType == "circle") {
            ctx.translate(o.x, o.y);
            ctx.fillStyle = o.color;
            ctx.beginPath();
            ctx.arc(0, 0, o.r, 0, 2 * Math.PI);
            ctx.fill();
        }
        if (o.drawType == "square") {
            ctx.translate(o.x, o.y);
            ctx.fillStyle = o.color;
            ctx.fillRect(-o.r, -o.r, o.r * 2, o.r * 2);
        }
        if (o.drawType == "image") {
            ctx.translate(o.x, o.y);
            if (o.scale) ctx.scale(o.scale, o.scale);
            if (o.angle) ctx.rotate(o.angle * Math.PI / 180);
            ctx.drawImage(images[o.image], -o.r, -o.r, o.r * 2, o.r * 2);
        }
        if (o.drawType == "line") {
            ctx.translate(o.x, o.y);
            var move = distToMove(o.length, o.dir);
            ctx.strokeStyle = o.color;
            ctx.lineWidth = o.width;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(move.x, move.y);
            ctx.stroke();
        }
        if (o.drawType == "heart particle") {
            ctx.translate(o.x, o.y);
            ctx.rotate(o.angle * Math.PI / 180);
            ctx.scale(1.2, 1.2);
            var x, y;
            if (o.color == "blue") y = 0;
            if (o.color == "black") y = 50;
            if (o.color == "red") y = 100;
            if (o.left) {
                x = 50;
            } else if (o.right) {
                x = 75;
            }
            ctx.drawImage(images.heartsSpritesheet, x, y, 25, 50, - o.w / 2, -o.h / 2, o.w, o.h);
        }
        if (o.drawType == "boss part impact warning particle") {
            ctx.translate(o.x, o.y);
            var a = easeInOut(o.animation / 10);
            ctx.scale(a, a);
            ctx.fillStyle = "rgba(255,0,0,0.25)";
            ctx.beginPath();
            ctx.arc(0, 0, 200, 1 * Math.PI, 2 * Math.PI);
            ctx.fill();
            ctx.translate(0, -70);
            ctx.rotate(Math.sin(o.animation / 2) * easeInBack(o.animation / 50) * 0.2);
            ctx.drawImage(images.warning, -50, -70, 100, 100);
        }
        if (o.drawType == "boss part impact aura") {
            ctx.translate(o.x, o.y);
            ctx.fillStyle = "rgba(255,255,255,0.6)";
            ctx.beginPath();
            ctx.arc(0, 0, 200, 1 * Math.PI, 2 * Math.PI);
            ctx.fill();
        }
        if (o.drawType == "cube collect ultra lightning" && o.strikes) {
            ctx.globalAlpha = a;
            for (let strike of o.strikes) {
                if (strike.animation < 0) continue;
                let a = 1 - easeInOut(strike.animation / 20);
                if (a === 0) continue;
                ctx.save();
                ctx.strokeStyle = strike.color;
                ctx.lineWidth = 10 * a;
                ctx.lineJoin = "miter";
                ctx.beginPath();
                for (let n = 0; n < strike.points.length; n++) {
                    if (n > strike.animation * 5) break;
                    let point = strike.points[n];
                    ctx.lineTo(point.x, point.y);
                }
                ctx.stroke();
                ctx.restore();
            }
        }
        ctx.restore();
    },
    create: function (o) {
        if (o.type == "blob particle") {
            o.color = "rgb(50,50,255)";
            o.drawType = "circle";
            o.r = Math.random() * 2 + 3;
        }
        if (o.type == "boss part impact particle") {
            o.alpha = 2;
            o.decay = 0.02;
            o.drawType = "circle";
            o.r = Math.random() * 3 + 5;
            o.color = "rgba(255,255,255,0.5)";
            var move = distToMove(Math.random() * 5 + 5, o.angle);
            o.xmove = move.x;
            o.ymove = move.y;
            var move = distToMove(20, o.angle);
            o.x += move.x;
            o.y += move.y;
        }
        if (o.type == "boss part impact aura") {
            o.alpha = 1;
            o.decay = 0.05;
            o.drawType = "boss part impact aura";
        }
        if (o.type == "boss part impact warning particle") {
            o.animation = 0;
            o.alpha = 3.5;
            o.decay = 0.05;
            o.drawType = "boss part impact warning particle";
        }
        if (o.type == "player speed effect particle") {
            o.drawType = "image";
            o.image = "greenSparkle";
            if (game.background.effect.active("magenta")) {
                o.image = "magentaSparkle";
            }
            o.scale = Math.random() * 0.5 + 0.5;
            o.r = -5;
            o.rotate = 3;
            if (Math.random() < 0.5) o.rotate *= -1;
            o.angle = Math.random() * 360;
            o.alpha = 1 + Math.random();
            o.gravity = 0.01;
            o.decay = 0.02;
        }
        if (o.type == "player land particle") {
            o.drawType = "circle";
            o.r = 3;
            o.color = "rgba(0,0,255,0.5)";
            if (ppougjgaming) {
                o.color = "rgba(0,128,0,0.5)";
            }
            if (larrythehamster) {
                o.color = "rgba(255,0,0,0.5)";
            }
            if (notobiv) {
                o.color = "rgba(0,0,0,0.5)";
            }
            o.alpha = 1 + Math.random();
            if (game.background.effect.active("green")) {
                o.color = "rgba(0,0,255,0.7)";
                o.r = 4.5;
                if (ppougjgaming) {
                    o.color = "rgba(0,128,0,0.7)";
                }
                if (larrythehamster) {
                    o.color = "rgba(255,0,0,0.7)";
                }
                if (notobiv) {
                    o.color = "rgba(0,0,0,0.7)";
                }
            }
            o.gravity = 0.01;
            o.decay = 0.05;
        }
        if (o.type == "player wall jump particle") {
            o.drawType = "circle";
            o.r = 3;
            o.color = "rgba(0,0,255,0.5)";
            if (ppougjgaming) {
                o.color = "rgba(0,128,0,0.5)";
            }
            if (larrythehamster) {
                o.color = "rgba(255,0,0,0.5)";
            }
            if (notobiv) {
                o.color = "rgba(0,0,0,0.5)";
            }
            if (game.background.effect.active("green")) {
                o.color = "rgba(0,0,255,0.7)";
                o.r = 4.5;
                if (ppougjgaming) {
                    o.color = "rgba(0,128,0,0.7)";
                }
                if (larrythehamster) {
                    o.color = "rgba(255,0,0,0.7)";
                }
                if (notobiv) {
                    o.color = "rgba(0,0,0,0.7)";
                }
            }
            o.alpha = 1 + Math.random();
            o.gravity = 0.03;
            o.decay = 0.05;
        }
        if (o.type == "player run particle") {
            o.drawType = "circle";
            o.r = 3;
            o.color = "rgba(0,0,255,0.1)";
            if (ppougjgaming) {
                o.color = "rgba(0,128,0,0.1)";
            }
            if (larrythehamster) {
                o.color = "rgba(255,0,0,0.1)";
            }
            if (notobiv) {
                o.color = "rgba(0,0,0,0.1)";
            }
            if (game.background.effect.active("green")) {
                o.color = "rgba(0,0,255,0.3)";
                o.r = 4.5;
                if (ppougjgaming) {
                    o.color = "rgba(0,128,0,0.3)";
                }
                if (larrythehamster) {
                    o.color = "rgba(255,0,0,0.3)";
                }
                if (notobiv) {
                    o.color = "rgba(0,0,0,0.3)";
                }
            }
            o.alpha = 3 + Math.random();
            o.decay = 0.05;
        }
        if (o.type == "player death particle") {
            o.drawType = "circle";
            o.r = 3;
            o.damping = 0.99;
            o.color = "rgba(0,0,255,0.5)";
            if (ppougjgaming) {
                o.color = "rgba(0,128,0,0.5)";
            }
            if (larrythehamster) {
                o.color = "rgba(255,0,0,0.5)";
            }
            if (notobiv) {
                o.color = "rgba(0,0,0,0.5)";
            }
            o.alpha = 3 + Math.random() * 3;
            o.decay = 0.05;
        }
        if (o.type == "player eye death particle") {
            o.drawType = "circle";
            o.r = 2;
            o.damping = 0.99;
            o.color = "rgba(0,0,0,0.5)";
            o.alpha = 3 + Math.random() * 3;
            o.decay = 0.05;
        }
        if (o.type == "player death circle") {
            o.drawType = "circle";
            o.r = 10;
            o.color = "rgba(0,0,255,0.3)";
            if (ppougjgaming) {
                o.color = "rgba(0,128,0,0.3)";
            }
            if (larrythehamster) {
                o.color = "rgba(255,0,0,0.3)";
            }
            if (notobiv) {
                o.color = "rgba(0,0,0,0.3)";
            }
            o.alpha = 1.5;
            o.decay = 0.05;
        }
        if (o.type == "player eye death circle") {
            o.drawType = "circle";
            o.r = 3;
            o.color = "rgba(0,0,0,0.1)";
            o.alpha = 1.5;
            o.decay = 0.05;
        }
        if (o.type == "cube collect particle") {
            o.drawType = "circle";
            o.r = 10;
            if (o.red) {
                o.color = "rgba(255,100,100,0.3)";
                if (o.grey) {
                    o.color = "rgba(230,200,200,0.3)";
                }
            } else {
                o.color = "rgba(100,100,255,0.3)";
                if (o.grey) {
                    o.color = "rgba(200,200,230,0.3)";
                }
            }

            o.alpha = 1.5;
            o.decay = 0.05;
        }
        if (o.type == "cube collect ultra particle") {
            o.drawType = "circle";
            o.r = 10;
            o.color = "rgba(255,0,200,0.2)";
            o.alpha = 1.5;
            o.decay = 0.05;
        }
        if (o.type == "cube collect ultra lightning") {
            o.drawType = "cube collect ultra lightning";
            o.animation = 0;
        }
        if (o.type == "jump enemy death particle") {
            o.drawType = "square";
            o.r = 5;
            o.color = "red";
            o.alpha = 1;
            o.decay = 0.05;
            var move = distToMove(1 + Math.random() * 2.5, Math.random() * 360);
            o.xmove = move.x;
            o.ymove = move.y;
        }
        if (o.type == "ping pong player death particle") {
            o.drawType = "square";
            o.r = 5;
            o.color = "blue";
            o.alpha = 50;
            o.decay = 1;
        }
        if (o.type == "boss fireball explosion particle") {
            o.drawType = "circle";
            o.r = 3;
            o.damping = 0.99;
            o.color = "rgba(255,0,0,0.5)";
            o.alpha = 3 + Math.random() * 3;
            o.decay = 0.05;
        }
        if (o.type == "boss fireball explosion circle") {
            o.drawType = "circle";
            o.r = 10;
            o.color = "rgba(255,0,0,0.3)";
            o.alpha = 1.5;
            o.decay = 0.05;
        }
        if (o.type == "heart particle") {
            o.drawType = "heart particle";
            o.alpha = 2;
            o.decay = 0.04;
            o.damping = 0.99;
            o.angle = 0;
            if (o.left) {
                o.xmove = -1;
                o.rotate = -0.8;
            } else if (o.right) {
                o.xmove = 1;
                o.rotate = 0.8;
            }
            o.ymove = 1;
        }
        if (o.type == "player explode particle") {
            o.drawType = "line";
            o.width = 2;
            if (game.level.triggers.tripped("ultra shortcut")) {
                o.color = "rgb(255,50,238)";
            } else {
                o.color = "rgb(50,50,255)";
            }
            o.dir = Math.random() * 360;
            o.length = 0;
            o.alpha = 4;
            o.decay = 0.05;
        }
        this.objects.push(o);
    },
    createEffect: function (effect, data) {
        var player;
        if (effect.includes("player") || effect == "boss fireball explosion") {
            player = game.objects.objects.find(e => e.type == "player");
            if (!player) {
                if (data) {
                    player = data;
                } else {
                    return;
                }
            }
        }
        if (effect == "player speed effect") {
            var o = {};
            o.type = "player speed effect particle";
            o.x = player.x + player.w * Math.random();
            o.y = player.y + player.h * Math.random();
            o.xmove = 0;
            o.ymove = - Math.random() * 1;
            this.create(o);
        }
        if (effect == "player land") {
            var amount = 5;
            if (game.background.effect.active("green")) amount *= 2;
            for (var n = 0; n < amount; n++) {
                var percent = n / (amount - 1);
                var o = {};
                o.type = "player land particle";
                o.x = player.x + player.w * percent;
                o.y = player.y + player.h;
                o.xmove = -2.5 + 5 * percent;
                o.ymove = - Math.random() * 1;
                this.create(o);
            }
        }
        if (effect == "player run") {
            var o = {};
            o.type = "player run particle";
            o.y = player.y + player.h * (0.7 + Math.random() * 0.3);
            o.ymove = -0.2 - Math.random() * 0.3;
            if (player.xmove > 0) {
                o.x = player.x;
                o.xmove = -0.5;
            } else {
                o.x = player.x + player.w;
                o.xmove = 0.5;
            }
            this.create(o);
        }
        if (effect == "player wall jump") {
            var count = 3;
            if (game.background.effect.active("green")) amount *= 2;
            for (var n = 0; n < count; n++) {
                var percent = n / count;
                var o = {};
                o.type = "player wall jump particle";
                o.y = player.y + player.h * percent;
                o.ymove = -3 + 5 * percent;
                if (player.xmove > 0) {
                    o.x = player.x;
                    o.xmove = Math.random() * 0.8 + 0.1;
                } else {
                    o.x = player.x + player.w;
                    o.xmove = -Math.random() * 0.8 - 0.1;
                }
                this.create(o);
            }
        }
        if (effect == "player wall slide") {
            var o = {};
            o.type = "player wall jump particle";
            o.y = player.y;
            o.ymove = -1;
            if (player.wallSlideAnimationDirection == "left") {
                o.x = player.x;
                o.xmove = Math.random() * 1 + 0.3;
            } else {
                o.x = player.x + player.w;
                o.xmove = -Math.random() * 1 - 0.3;
            }
            this.create(o);
        }
        if (effect == "player death") {
            var count = 10;
            for (var n = 0; n < count; n++) {
                var o = {};
                o.type = "player death particle";
                o.y = player.y + player.h / 2;
                o.x = player.x + player.w / 2;
                var dir = Math.random() * 360;
                var speed = 1 + Math.random();
                var move = distToMove(speed, dir);
                o.xmove = move.x;
                o.ymove = move.y;
                this.create(o);
            }
            var o = {};
            o.type = "player death circle";
            o.y = player.y + player.h / 2;
            o.x = player.x + player.w / 2;
            this.create(o);
        }
        if (effect == "eye death") {
            var player = data;
            var count = 5;
            for (var n = 0; n < count; n++) {
                var o = {};
                o.type = "player eye death particle";
                o.y = player.y + player.h / 2;
                o.x = player.x + player.w / 2;
                var dir = Math.random() * 360;
                var speed = 1 + Math.random();
                var move = distToMove(speed, dir);
                o.xmove = move.x;
                o.ymove = move.y;
                this.create(o);
            }
            var o = {};
            o.type = "player eye death circle";
            o.y = player.y + player.h / 2;
            o.x = player.x + player.w / 2;
            this.create(o);
        }
        if (effect == "collect cube") {
            var o = {};
            o.x = data.x;
            o.y = data.y;
            o.grey = data.grey;
            o.red = data.red;
            o.type = "cube collect particle";
            if (game.level.triggers.tripped("blue cube ultra") || game.level.triggers.tripped("red cube ultra")) {
                o.type = "cube collect ultra particle";
            }
            this.create(o);
            if (game.level.triggers.tripped("blue cube ultra") || game.level.triggers.tripped("red cube ultra")) {
                var o = {};
                o.x = data.x;
                o.y = data.y;
                o.type = "cube collect ultra lightning";
                this.create(o);
            }
        }
        if (effect == "jump enemy death") {
            for (var n = 0; n < 40; n++) {
                var o = {};
                o.x = data.x;
                o.y = data.y;
                o.type = "jump enemy death particle";
                this.create(o);
            }
        }
        if (effect == "ping pong death") {
            for (var n = 0; n < 8; n++) {
                var angle = n / 8 * 360;
                var move = distToMove(2, angle);
                var o = {};
                o.x = data.x;
                o.y = data.y;
                o.xmove = move.x;
                o.ymove = move.y;
                o.type = "ping pong player death particle";
                this.create(o);
            }
        }
        if (effect == "boss fireball explosion") {
            var count = 6;
            for (var n = 0; n < count; n++) {
                var o = {};
                o.type = "boss fireball explosion particle";
                o.y = data.y - 15;
                o.x = data.x;
                var dir = Math.random() * 200 - 100;
                var speed = 1 + Math.random();
                var move = distToMove(speed, dir);
                o.xmove = move.x;
                o.ymove = move.y;
                this.create(o);
            }
            var o = {};
            o.type = "boss fireball explosion circle";
            o.y = data.y - 15;
            o.x = data.x;
            this.create(o);
        }
        if (effect == "lose heart") {
            var o = {
                type: "heart particle",
                x: data.x + data.w * 0.25,
                y: data.y + data.h * 0.5,
                w: data.w / 2,
                h: data.h,
                left: true,
                color: data.color
            }
            this.create(o);
            var o = {
                type: "heart particle",
                x: data.x + data.w * 0.75,
                y: data.y + data.h * 0.5,
                w: data.w / 2,
                h: data.h,
                right: true,
                color: data.color
            }
            this.create(o);
        }
        if (effect == "player explode") {
            var o = {
                type: "player explode particle"
            }
            o.x = player.x + player.w / 2;
            o.y = player.y + player.h / 2;
            this.create(o);
        }
        if (effect == "boss part impact warning") {
            var o = {
                type: "boss part impact warning particle"
            }
            o.x = data.x;
            o.y = data.y;
            this.create(o);
        }
        if (effect == "boss part impact") {
            var o = {
                type: "boss part impact aura"
            }
            o.x = data.x;
            o.y = data.y;
            this.create(o);
            var count = 7 + Math.random() * 4;
            for (var n = 0; n < count; n++) {
                var o = {};
                o.type = "boss part impact particle";
                o.x = data.x;
                o.y = data.y;
                o.angle = n / count * 180 - 85 + Math.random() * 10 - 5;
                this.create(o);
            }
            var o = {
                type: "boss part impact animation"
            }
            o.x = data.x;
            o.y = data.y;
            this.create(o);
        }
        if (effect == "blob state start") {
            for (var n = 0; n < 1 + Math.random() * 2; n++) {
                var o = {
                    type: "blob particle"
                }
                var angle = data.blobStateAngle;
                var move = distToMove(Math.random() * 20, angle + 180);
                var move2 = distToMove(Math.random() * 6 - 3, angle + 90);
                o.x = data.x + data.w / 2 + move.x + move2.x;
                o.y = data.y + data.h / 2 + move.y + move2.y;
                var move = distToMove(Math.random() * 5, angle);
                var move2 = distToMove(Math.random() * 2 - 1, angle + 90);
                o.xmove = data.xmove * 0.1 + move.x + move2.x;
                o.ymove = data.ymove * 0.1 + move.y + move2.y;
                this.create(o);
            }
        }
        if (effect == "blob state stop") {
            for (var n = 0; n < 1 + Math.random(); n++) {
                var o = {
                    type: "blob particle"
                }
                var angle = 180 + dirTo(0, 0, data.xmove, data.ymove);
                o.x = data.x + data.w / 2 - data.xmove * 6;
                o.y = data.y + data.h / 2 - data.ymove * 6;
                var move = distToMove(Math.random() * 3, angle);
                var move2 = distToMove(Math.random() * 2 - 1, angle + 90);
                o.xmove = -data.xmove * 0.1 + move.x + move2.x;
                o.ymove = -data.ymove * 0.1 + move.y + move2.y;
                this.create(o);
            }
        }
    }
};