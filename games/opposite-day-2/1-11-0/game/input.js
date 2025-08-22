game.input = {
    keys: {
        left: [37, 65],
        right: [39, 68],
        up: [38, 87],
        down: [40, 83],
        restartLevel: [82],
        restartGame: [89],
        exit: [27],
        select: [13],
        settings: [80],
    },
    update: function () {
        this.left = this.keys.left.some(e => Keys.keys[e]);
        this.right = this.keys.right.some(e => Keys.keys[e]);
        this.up = this.keys.up.some(e => Keys.keys[e]);
        this.down = this.keys.down.some(e => Keys.keys[e]);
        if (bot) {
            this.left = bot[frame * 5] == "1";
            this.right = bot[frame * 5 + 1] == "1";
            this.up = bot[frame * 5 + 2] == "1";
            this.down = bot[frame * 5 + 3] == "1";
            if (bot[frame * 5 + 4] != " " && bot[frame * 5 + 4]) {
                frameRate = Number(bot[frame * 5 + 4]);
            }
        } else {
            movementRecord += `${this.left ? 1 : 0}${this.right ? 1 : 0}${this.up ? 1 : 0}${this.down ? 1 : 0} `;
        }
        this.restartLevel = this.keys.restartLevel.some(e => Keys.keys[e]);
        this.restartGame = this.keys.restartGame.some(e => Keys.keys[e]);
        this.exit = this.keys.exit.some(e => Keys.keys[e]);
        this.select = this.keys.select.some(e => Keys.keys[e]);
        this.settings = this.keys.settings.some(e => Keys.keys[e]);
        if (menu.acceptingKeybindInput) {
            this.left = false;
            this.right = false;
            this.up = false;
            this.down = false;
            this.restartLevel = false;
            this.restartGame = false;
            this.exit = false;
            this.select = false;
            this.settings = false;
        }
        if (game.level.playerControlDelay) {
            this.left = false;
            this.right = false;
            this.up = false;
            this.down = false;
        }
        var directions = ["left", "right", "up", "down", "exit", "select"];
        for (var n = 0; n < directions.length; n++) {
            var dir = directions[n];
            if (this[`${dir}Start`]) {
                this[`${dir}Start`]++;
            } else if (this[dir]) {
                this[`${dir}Start`] = 1;
            }
            if (this[dir]) {
                this[`${dir}Hold`]++;
            } else {
                this[`${dir}Hold`] = 0;
                this[`${dir}Start`] = 0;
            }
        }
    },
    updateKeybinds: function () {
        for (var o of menu.settings.keybinds) {
            this.keys[o.name] = o.keys.map(e => e.key);
        }
    }
}