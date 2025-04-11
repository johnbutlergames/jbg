NamedLevels["sortWords1"] = class {
    constructor() {
        var xWords = [
            "axe",
            "box",
            "axel",
            "apex",
            "axis",
            "exam",
            "exit",
            "annex",
            "exact",
            "excel",
            "fixed",
            "exempted",
            "xylophone",
            "example",
            "exceeded",
            "excited",
            "axolotl",
            "experiment",
            "perplexed",
            "xinoaphobia",
            "exhausted",
            "affixation",
            "hyperextension",
            "detoxification",
            "oxyphenbutazone",
            "semiexclusivity",
            "contextualising",
            "ambidexterities",
            "andromedotoxins",
            "circumfixations"
        ];
        var noXWords = [
            "hat",
            "bus",
            "comb",
            "find",
            "boss",
            "home",
            "adapt",
            "frill",
            "quack",
            "flint",
            "steal",
            "crazy",
            "zebra",
            "update",
            "eminent",
            "unequaled",
            "wiggly",
            "enchanted",
            "cumbersome",
            "wilderness",
            "sinusoidal",
            "gorgeous",
            "neighborly",
            "lackadaisical",
            "neurophysiological",
            "ephemeromorph",
            "pneumatophilosophy",
            "electrodynamometer",
            "theologicophobia",
            "incircumscriptable"
        ];
        xWords = xWords.sort((a, b) => a.length - b.length);
        noXWords = noXWords.sort((a, b) => a.length - b.length);
        var xWords1 = xWords.slice(0, 10);
        var xWords2 = xWords.slice(10, 20);
        var xWords3 = xWords.slice(20);
        var noXWords1 = noXWords.slice(0, 10);
        var noXWords2 = noXWords.slice(10, 20);
        var noXWords3 = noXWords.slice(20);
        var words1 = [];
        var words2 = [];
        var words3 = [];
        for (var n = 0; n < 3; n++) {
            var index = Math.floor(Math.random() * xWords1.length);
            words1.push(xWords1.splice(index, 1)[0]);
            var index = Math.floor(Math.random() * noXWords1.length);
            words1.push(noXWords1.splice(index, 1)[0]);
        }
        for (var n = 0; n < 3; n++) {
            var index = Math.floor(Math.random() * xWords2.length);
            words2.push(xWords2.splice(index, 1)[0]);
            var index = Math.floor(Math.random() * noXWords2.length);
            words2.push(noXWords2.splice(index, 1)[0]);
        }
        for (var n = 0; n < 3; n++) {
            var index = Math.floor(Math.random() * xWords3.length);
            words3.push(xWords3.splice(index, 1)[0]);
            var index = Math.floor(Math.random() * noXWords3.length);
            words3.push(noXWords3.splice(index, 1)[0]);
        }
        words1 = this.shuffle(words1);
        if (Math.random() < 0.5) {
            if (Math.random() < 0.5) {
                var index = Math.floor(Math.random() * xWords1.length);
                words1.push(xWords1.splice(index, 1)[0]);
            } else {
                var index = Math.floor(Math.random() * noXWords1.length);
                words1.push(noXWords1.splice(index, 1)[0]);
            }
        }
        words2 = this.shuffle(words2);
        if (Math.random() < 0.5) {
            if (Math.random() < 0.5) {
                var index = Math.floor(Math.random() * xWords2.length);
                words1.push(xWords2.splice(index, 1)[0]);
            } else {
                var index = Math.floor(Math.random() * noXWords2.length);
                words1.push(noXWords2.splice(index, 1)[0]);
            }
        }
        words3 = this.shuffle(words3);
        if (Math.random() < 0.5) {
            if (Math.random() < 0.5) {
                var index = Math.floor(Math.random() * xWords3.length);
                words1.push(xWords3.splice(index, 1)[0]);
            } else {
                var index = Math.floor(Math.random() * noXWords3.length);
                words1.push(noXWords3.splice(index, 1)[0]);
            }
        }
        if (Math.random() < 0.01) {
            words3.push("johnbutlergames");
        }
        var words = [...words1, ...words2, ...words3];
        words = words.map(function (e) {
            var o = { word: e, hasX: e.includes("x"), x: 500, y: -200 };
            o.fontSize = 50;
            o.animatedFontSize = 80;
            return o;
        });
        this.words = words;
        this.rightWords = [];
        this.leftWords = [];
        this.currentWord = this.words.shift();
        this.lost = false;
    }
    shuffle(arr) {
        var newArr = [];
        while (arr.length > 0) {
            var index = Math.floor(Math.random() * arr.length);
            newArr.push(arr.splice(index, 1)[0]);
        }
        return newArr;
    }
    update() {
        if (this.currentWord) {
            this.currentWord.x = this.currentWord.x * 0.9 + 500 * 0.1;
            this.currentWord.y = this.currentWord.y * 0.9 + 200 * 0.1;

            if (Mouse.click) {
                if (Mouse.x > 500) {
                    if (this.rightWords.length && this.rightWords[0].hasX !== this.currentWord.hasX) {
                        this.lost = true;
                    } else {
                        this.currentWord.targetX = 750;
                        this.currentWord.targetY = 900 - 60 * this.rightWords.length;
                        this.rightWords.push(this.currentWord);
                        this.currentWord = this.words.shift();
                    }
                } else {
                    if (this.leftWords.length && this.leftWords[0].hasX !== this.currentWord.hasX) {
                        this.lost = true;
                    } else {
                        this.currentWord.targetX = 250;
                        this.currentWord.targetY = 900 - 60 * this.leftWords.length;
                        this.leftWords.push(this.currentWord);
                        this.currentWord = this.words.shift();
                    }
                }
            }
        }

        for (var o of [...this.leftWords, ...this.rightWords]) {
            o.x = o.x * 0.9 + o.targetX * 0.1;
            o.y = o.y * 0.9 + o.targetY * 0.1;
            o.animatedFontSize = o.animatedFontSize * 0.9 + o.fontSize * 0.1;
        }
    }
    draw() {
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        if (this.currentWord) {
            ctx.font = this.currentWord.animatedFontSize + "px Arial";
            ctx.fillText(this.currentWord.word, this.currentWord.x, this.currentWord.y);
        }

        for (var o of [...this.leftWords, ...this.rightWords]) {
            ctx.font = o.animatedFontSize + "px Arial";
            ctx.fillText(o.word, o.x, o.y);
        }

        ctx.strokeStyle = "black";
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(500, 300);
        ctx.lineTo(500, 1000);
        ctx.stroke();
    }
    checkWin() {
        return !this.currentWord;
    }
    checkLose() {
        return this.lost;
    }
    lose() {
    }
    updateLose() {
    }
    win() {
    }
    updateWin() {
        for (var o of [...this.leftWords, ...this.rightWords]) {
            o.x = o.x * 0.9 + o.targetX * 0.1;
            o.y = o.y * 0.9 + o.targetY * 0.1;
            o.animatedFontSize = o.animatedFontSize * 0.9 + o.fontSize * 0.1;
        }
    }
}