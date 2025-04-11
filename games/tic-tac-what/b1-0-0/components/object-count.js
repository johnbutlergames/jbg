class ObjectCount {
    constructor(amount, type, count) {
        this.amount = amount || 6;
        this.realAmount = this.amount;
        this.type = type || "X";
        this.count = count || 0;
        this.scale = 1;
        this.x = 0;
        this.y = 0;
        this.breakAmount = 8;
        this.align = "center";
        this.countAnimations = [];
        for (var n = 0; n < this.amount; n++) {
            this.countAnimations.push(0);
        }
        this.animationLength = 10;
    }
    update() {
        this.width = Math.min(this.amount - 1, this.breakAmount) * 50;
        for (var n = 0; n < this.countAnimations.length; n++) {
            if (this.count > n) {
                this.countAnimations[n]++;
            } else {
                this.countAnimations[n]--;
            }
            this.countAnimations[n] = Math.max(Math.min(this.countAnimations[n], this.animationLength), 0);
        }
    }
    set amount(n) {
        this.realAmount = n;
        this.countAnimations = [];
        for (var n = 0; n < this.amount; n++) {
            if (this.count > n) {
                this.countAnimations.push(this.animationLength);
            } else {
                this.countAnimations.push(0);
            }
        }
    }
    get amount() {
        return this.realAmount;
    }
    draw() {
        var background = new TicTacToeObject(this.type);
        background.scale = 0.2;
        background.lineWidth = 30;
        background.color = "rgba(0,0,0,0.3)";
        var fill = new TicTacToeObject(this.type);
        fill.scale = 0.2;
        fill.lineWidth = 30;

        ctx.save();
        ctx.translate(this.x, this.y);
        if (this.align == "center") ctx.translate(-this.width / 2, 0);
        if (this.align == "right") ctx.translate(-this.width, 0);
        ctx.scale(this.scale, this.scale);
        for (var n = 0; n < this.amount; n++) {
            ctx.save();
            ctx.translate((n % this.breakAmount) * 50, Math.floor(n / this.breakAmount) * 50);

            background.draw();

            var a = easeInOut(this.countAnimations[n] / this.animationLength);
            if (a === 0) {
                ctx.restore();
                continue;
            }
            ctx.scale(a, a);
            fill.draw();

            ctx.restore();
        }
        ctx.restore();
    }
}