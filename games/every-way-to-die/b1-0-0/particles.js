game.particles = {
    objects: [],
    update: function () {
        for (let o of this.objects) {
            o.update();
        }
        this.objects = this.objects.filter(e => !e.delete);
    },
    draw: function () {
        for (let o of this.objects) {
            o.draw();
        }
    },
    createEffect: function (effect, data) {
        let player = null;
        if (effect.includes("player")) {
            player = game.env.objects.find(e => e instanceof Player);
        }
        if (effect == "player death") {
            this.objects.push(new PlayerDeathAura(player.x + player.w / 2, player.y + player.h / 2));
            for (let n = 0; n < 10; n++) {
                this.objects.push(new PlayerDeathSplatter(player.x + player.w / 2, player.y + player.h / 2));
            }
        }
        if (effect == "finish confetti") {
            for (let n = 0; n < 20; n++) {
                this.objects.push(new ConfettiParticle(data.x, data.y, Math.random() * 10 - 5, Math.random() * -10 - 5))
            }
        }
        if (effect == "checkpoint confetti") {
            for (let n = 0; n < 5; n++) {
                let o = new ConfettiParticle(data.x, data.y, Math.random() * 6 - 3, Math.random() * -7 - 3);
                o.color = "red";
                this.objects.push(o);
            }
            this.objects.push(new CheckpointTextParticle(data.x, data.y - 200));
        }
    }
}

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.move = { x: 0, y: 0 };
        this.damping = { x: 0.98, y: 0.98 };
        this.gravity = { x: 0, y: 0 };
        this.color = "black";
        this.alpha = 1;
        this.decay = 0;
    }
    update() {
        this.x += this.move.x;
        this.y += this.move.y;
        this.move.x *= this.damping.x;
        this.move.y *= this.damping.y;
        this.move.x += this.gravity.x;
        this.move.y += this.gravity.y;
        this.alpha -= this.decay;
        if (this.alpha <= 0) this.delete = true;
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;

        ctx.fillStyle = this.color;
        ctx.fillRect(this.x - 10, this.y - 5, 10, 10);

        ctx.restore();
    }
}

class CircleParticle extends Particle {
    constructor(x, y, r) {
        super(x, y);
        this.r = r;
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fill();

        ctx.restore();
    }
}

class PlayerDeathAura extends CircleParticle {
    constructor(x, y) {
        super(x, y, 10);
        this.type = "player death aura";
        this.color = "rgba(255,0,0,0.5)";
        this.decay = 0.07;
    }
    update() {
        super.update();
        this.r += 20;
        this.r *= 0.85;
    }
}

class PlayerDeathSplatter extends CircleParticle {
    constructor(x, y) {
        super(x, y, Math.random() * 2 + 1);
        this.type = "player death splatter";
        this.color = "rgba(255,0,0,0.8)";
        this.decay = 0.07;
        this.alpha = 2;
        this.move = {
            x: Math.random() * 10 - 5,
            y: Math.random() * 10 - 7
        }
        this.gravity.y = 0.1;
    }
    update() {
        super.update();
    }
}

class ConfettiParticle extends Particle {
    constructor(x, y, xmove, ymove) {
        super(x, y);
        this.move = { x: xmove, y: ymove };
        this.angle = Math.random() * 360;
        this.turn = Math.random() * 10 - 5;
        this.flip = Math.random() * 10 - 5;
        this.spin = Math.random() * 0.5 - 0.25;
        this.alpha = 2 + Math.random();
        this.decay = 0.015;
        this.damping = { x: 0.98, y: 0.98 };
        this.gravity = { x: 0, y: 0.08 };
        this.color = `hsl(${Math.random() * 360},100%,50%)`;
    }
    update() {
        super.update();
        this.angle += this.turn;
        this.flip += this.spin;
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.scale(Math.sin(this.flip), 1);
        ctx.fillStyle = this.color;
        ctx.fillRect(-10, -10, 20, 20);
        ctx.restore();
    }
}

class TextParticle extends Particle {
    constructor(text, x, y) {
        super(x, y);
        this.text = text;
        this.font = "20px pressstart";
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.fillText(this.text, this.x, this.y);
        ctx.restore();
    }
}

class CheckpointTextParticle extends TextParticle {
    constructor(x, y) {
        super("Checkpoint!", x, y);
        this.color = "red";
        this.move = { x: 0, y: -1 };
        this.damping = { x: 1, y: 0.98 };
        this.alpha = 5;
        this.decay = 0.05;
    }
}