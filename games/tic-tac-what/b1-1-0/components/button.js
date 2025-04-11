class Button {
    constructor() {
        this.lineWidth = 7;
        this.strokeStyle = "black";
        this.backgroundColor = "white";
        this.hoverColor = "white";
        this.selectColor = "white";
        this.borderRadius = 12;
        this.x = 500;
        this.y = 500;
        this.w = 100;
        this.h = 100;
        this.scale = 1;
        this.hovered = false;
        this.selected = false;
        this.selectAnimation = 0;
        this.hoverAnimation = 0;
        this.clicked = false;
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(this.scale, this.scale);
        ctx.translate(-this.w / 2, -this.h / 2);
        this.drawBackground();
        ctx.save();
        ctx.translate(this.w / 2, this.h / 2);
        var s = 0.7 + easeInOut(this.hoverAnimation / 10) * 0.1 + easeInOut(this.selectAnimation / 10) * 0.2;
        ctx.scale(s, s);
        ctx.translate(-this.w / 2, -this.h / 2);
        var a = 0.5 + easeInOut(this.selectAnimation / 10) * 0.5;
        ctx.globalAlpha = a;
        this.drawForeground();
        ctx.restore();
        ctx.restore();
    }
    drawBackground() {
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.strokeStyle;
        ctx.fillStyle = this.backgroundColor;
        if (this.hovered) ctx.fillStyle = this.hoverColor;
        if (this.selected) ctx.fillStyle = this.selectColor;
        ctx.roundRect(0, 0, this.w, this.h, this.borderRadius);
        ctx.fill();
        ctx.stroke();
    }
    drawForeground() {
    }
    update() {
        this.updateAnimations();
        this.updateClick();
    }
    updateAnimations() {
        if (this.hovered || this.selected) {
            this.hoverAnimation++;
        } else {
            this.hoverAnimation--;
        }
        if (this.selected) {
            this.selectAnimation++;
        } else {
            this.selectAnimation--;
        }
        this.hoverAnimation = Math.max(Math.min(this.hoverAnimation, 10), 0);
        this.selectAnimation = Math.max(Math.min(this.selectAnimation, 10), 0);
    }
    updateClick() {
        this.clicked = false;
        if (Mouse.inBox(this.x - this.w / 2, this.y - this.h / 2, this.w, this.h)) {
            this.hovered = true;
            if (Mouse.downStart) {
                this.selected = true;
                this.clicked = true;
                this.click();
            }
        } else {
            this.hovered = false;
        }
    }
    click() {
    }
}

class ChoosePieceTypeButton extends Button {
    constructor(type) {
        super();
        this.type = type;
        if (this.type == "X") this.selectColor = "rgb(255,225,225)";
        if (this.type == "O") this.selectColor = "rgb(230,230,255)";
    }
    drawForeground() {
        var o = new TicTacToeObject(this.type);
        o.x = this.w / 2;
        o.y = this.h / 2;
        o.scale = 0.6;
        o.draw();
    }
}