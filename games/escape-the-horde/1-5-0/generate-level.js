function sfc32(a, b, c, d) {
    return function () {
        a |= 0; b |= 0; c |= 0; d |= 0;
        let t = (a + b | 0) + d | 0;
        d = d + 1 | 0;
        a = b ^ b >>> 9;
        b = c + (c << 3) | 0;
        c = (c << 21 | c >>> 11);
        c = c + t | 0;
        return (t >>> 0) / 4294967296;
    }
}
function cyrb128(str) {
    let h1 = 1779033703, h2 = 3144134277,
        h3 = 1013904242, h4 = 2773480762;
    for (let i = 0, k; i < str.length; i++) {
        k = str.charCodeAt(i);
        h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
        h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
        h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
        h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
    }
    h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
    h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
    h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
    h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
    h1 ^= (h2 ^ h3 ^ h4), h2 ^= h1, h3 ^= h1, h4 ^= h1;
    return [h1 >>> 0, h2 >>> 0, h3 >>> 0, h4 >>> 0];
}
function random(seed) {
    var [a, b, c, d] = cyrb128(seed);
    return sfc32(a, b, c, d);
}
var generate = {
    level: 0,
    mapSize: 0,
    width: 0,
    height: 0,
    random: 0,
    seed: "",
    generateLevel: function (level, seed) {
        seed = seed || level + "-" + Math.floor(Math.random() * 10 ** 16);
        this.seed = seed;
        this.level = level;
        this.random = random(seed);
        game.objects.objects = [];
        this.computeMapSize();
        var nodes = this.generateNodes();
        var blocks = this.generateWalls(nodes);
        this.generateWallMap(blocks);
        var [groupMap, sizes] = this.generateGroupMap();
        blocks = this.pathfindGroups(blocks, groupMap, sizes);
        if (level > 3) {
            this.generateTightnessMap();
            this.smoothTightnessMap();
            this.generateSeclusionMap();
            this.generateTreasureMap();
            var treasureSpots = this.generateTreasureSpots();
            this.generateTreasure(treasureSpots);
        }
        this.generateBlocks(blocks);
        this.generateZombies();
    },
    computeMapSize: function () {
        if (this.level < 3) {
            this.mapSize = 550 + this.level * 150;
        } else if (this.level < 30) {
            this.mapSize = 1000 + this.level * 50;
        } else {
            this.mapSize = 2500 + (this.level - 30) * 10;
        }
        this.mapSize = Math.round(this.mapSize / 100) * 100;
        this.width = this.mapSize / 50;
        this.height = this.mapSize / 50;
        game.level.dimensions = {
            x: -this.mapSize / 2,
            y: -this.mapSize / 2,
            w: this.mapSize,
            h: this.mapSize
        }
    },
    generateNodes: function () {
        //if (this.level > 25 && this.random() < 0.01) return [];
        var nodeCount = Math.max(this.level - 3, 0);
        var nodes = [];
        for (var n = 0; n < nodeCount; n++) {
            var node = {};
            node.type = "cluster";
            if (this.level > 10 && this.random() < 0.15) node.type = "room cluster";
            if (this.level > 10 && this.random() < 0.15) node.type = "room";
            if (this.level > 10 && this.random() < 0.2) node.type = "snake delete";
            if (this.level > 15 && this.random() < 0.2) node.type = "snake";
            if (this.level > 20 && this.random() < 0.05) node.type = "arc";
            if (this.level > 25 && this.random() < 0.05) node.type = "diagonal";
            if (this.level > 25 && this.random() < 0.01) node.type = "cavern";
            if (node.type == "cluster") {
                node.x = this.random() * this.mapSize - this.mapSize / 2;
                node.y = this.random() * this.mapSize - this.mapSize / 2;
                node.count = this.random() * 5 + 5;
                node.range = 1000 + this.random() * 1000;
            }
            if (node.type == "room cluster") {
                node.x = this.random() * this.mapSize - this.mapSize / 2;
                node.y = this.random() * this.mapSize - this.mapSize / 2;
                node.count = this.random() * 5 + 5;
                node.range = 1000 + this.random() * 1000;
            }
            if (node.type == "room") {
                node.w = 250 + this.random() * 100;
                node.h = 250 + this.random() * 100;
                node.x = this.random() * (this.mapSize - node.w) - this.mapSize / 2;
                node.y = this.random() * (this.mapSize - node.h) - this.mapSize / 2;
            }
            if (node.type == "snake" || node.type == "snake delete") {
                node.x = this.random() * this.mapSize - this.mapSize / 2;
                node.y = this.random() * this.mapSize - this.mapSize / 2;
                var dir = dirTo(node.x, node.y, 0, 0);
                node.direction = Math.round(dir / 90) * 90;
                node.lengthLeft = this.random() * 3000 + 3000;
                node.width = 50 + this.random() * 100;
            }
            if (node.type == "arc") {
                var angle = this.random() * 360;
                var dist = this.mapSize * 1.2;
                var move = distToMove(dist, angle);
                node.x = move.x;
                node.y = move.y;
                node.angle = angle + 180;
                node.radius = this.mapSize * (1.2 + this.random() * 0.4);
                node.width = 2 + this.random() * 2;
            }
            if (node.type == "diagonal") {
                node.x = this.random() * this.mapSize - this.mapSize / 2;
                node.y = this.random() * this.mapSize - this.mapSize / 2;
                var dir = dirTo(node.x, node.y, 0, 0);
                dir = Math.round((dir - 45) / 90) * 90 + 45;
                node.move = distToMove(Math.sqrt(2), dir);
                node.length = this.random() * 10 + 10;
            }
            if (node.type == "cavern") {
                node.w = 800 + this.random() * 400;
                node.h = 800 + this.random() * 400;
                node.x = this.random() * (this.mapSize - node.w) - this.mapSize / 2;
                node.y = this.random() * (this.mapSize - node.h) - this.mapSize / 2;
            }
            nodes.push(node);
        }
        return nodes;
    },
    generateWalls: function (nodes) {
        var rounding = 50;
        var blocks = [];
        for (var node of nodes) {
            if (node.type == "cluster") {
                for (var n = 0; n < node.count; n++) {
                    var size = 50 + n * 25;
                    var w = this.random() * size / 2 + size / 2;
                    var h = this.random() * size / 2 + size / 2;
                    var moveX = node.range - w * 2;
                    var moveY = node.range - h * 2;
                    var x = node.x + this.random() * moveX - moveX / 2;
                    var y = node.y + this.random() * moveY - moveY / 2;
                    x = Math.round(x / rounding) * rounding;
                    y = Math.round(y / rounding) * rounding;
                    w = Math.round(w / rounding) * rounding;
                    h = Math.round(h / rounding) * rounding;
                    blocks.push({ x: x, y: y, w: w, h: h });
                }
            } else if (node.type == "room cluster") {
                for (var n = 0; n < node.count; n++) {
                    var size = 200 + n * 25;
                    var w = this.random() * size / 2 + size / 2;
                    var h = this.random() * size / 2 + size / 2;
                    var moveX = node.range - w * 2;
                    var moveY = node.range - h * 2;
                    var x = node.x + this.random() * moveX - moveX / 2;
                    var y = node.y + this.random() * moveY - moveY / 2;
                    x = Math.round(x / rounding) * rounding;
                    y = Math.round(y / rounding) * rounding;
                    w = Math.round(w / rounding) * rounding;
                    h = Math.round(h / rounding) * rounding;
                    blocks.push({ x: x, y: y, w: w, h: h });
                }
                for (var n = 0; n < node.count / 3; n++) {
                    var size = 200;
                    var w = this.random() * size / 2 + size / 2;
                    var h = this.random() * size / 2 + size / 2;
                    var moveX = node.range - w * 2;
                    var moveY = node.range - h * 2;
                    var x = node.x + this.random() * moveX - moveX / 2;
                    var y = node.y + this.random() * moveY - moveY / 2;
                    x = Math.round(x / rounding) * rounding;
                    y = Math.round(y / rounding) * rounding;
                    w = Math.round(w / rounding) * rounding;
                    h = Math.round(h / rounding) * rounding;
                    blocks.push({ x: x, y: y, w: w, h: h, delete: true });
                }
            } else if (node.type == "snake" || node.type == "snake delete") {
                while (node.lengthLeft > 0) {
                    var distance = this.random() * 500 + 50;
                    var block = {};
                    if (node.direction == 0) {
                        block.x = node.x;
                        block.y = node.y - distance + node.width;
                        block.w = node.width;
                        block.h = distance;
                    } else if (node.direction == 90) {
                        block.x = node.x;
                        block.y = node.y;
                        block.w = distance;
                        block.h = node.width;
                    } else if (node.direction == 180) {
                        block.x = node.x;
                        block.y = node.y;
                        block.w = node.width;
                        block.h = distance;
                    } else if (node.direction == 270) {
                        block.x = node.x - distance + node.width;
                        block.y = node.y;
                        block.w = distance;
                        block.h = node.width;
                    }
                    var move = distToMove(distance, node.direction);
                    node.x += move.x;
                    node.y += move.y;
                    node.direction += Math.floor(this.random() * 3 - 1) * 90;
                    if (node.direction >= 360) node.direction -= 360;
                    if (node.direction < 0) node.direction += 360;
                    if (node.type == "snake delete") block.delete = true;
                    block.x = Math.round(block.x / rounding) * rounding;
                    block.y = Math.round(block.y / rounding) * rounding;
                    block.w = Math.round(block.w / rounding) * rounding;
                    block.h = Math.round(block.h / rounding) * rounding;
                    blocks.push(block);
                    node.lengthLeft -= distance;
                }
            } else if (node.type == "room") {
                var block = { x: node.x, y: node.y, w: node.w, h: node.h };
                block.x = Math.round(block.x / rounding) * rounding;
                block.y = Math.round(block.y / rounding) * rounding;
                block.w = Math.round(block.w / rounding) * rounding;
                block.h = Math.round(block.h / rounding) * rounding;
                blocks.push(block);
                var block = { x: node.x + 50, y: node.y + 50, w: node.w - 100, h: node.h - 100, delete: true };
                block.x = Math.round(block.x / rounding) * rounding;
                block.y = Math.round(block.y / rounding) * rounding;
                block.w = Math.round(block.w / rounding) * rounding;
                block.h = Math.round(block.h / rounding) * rounding;
                blocks.push(block);
            } else if (node.type == "arc") {
                for (var angle = node.angle - 90; angle < node.angle + 90; angle += 2) {
                    var move = distToMove(node.radius, angle);
                    var block = { x: node.x + move.x, y: node.y + move.y, w: node.width * 50, h: node.width * 50 };
                    block.x = Math.round(block.x / rounding) * rounding;
                    block.y = Math.round(block.y / rounding) * rounding;
                    block.w = Math.round(block.w / rounding) * rounding;
                    block.h = Math.round(block.h / rounding) * rounding;
                    if (this.random() < 0.05) block.delete = true;
                    blocks.push(block);
                }
            } else if (node.type == "diagonal") {
                var x = node.x, y = node.y;
                for (var n = 0; n < node.length; n++) {
                    var block = { x: x, y: y, w: 50, h: 50 };
                    block.x = Math.round(block.x / rounding) * rounding;
                    block.y = Math.round(block.y / rounding) * rounding;
                    blocks.push(block);
                    if (this.random() < 0.1) {
                        if (this.random() < 0.5) {
                            node.move.y *= -1;
                        } else {
                            node.move.x *= -1;
                        }
                    }
                    x += node.move.x * 50;
                    y += node.move.y * 50;
                }
            }
        }
        var clearance = 10000;
        blocks.push({ x: -this.mapSize / 2 - clearance, y: -this.mapSize / 2 - clearance, w: clearance, h: this.mapSize + clearance * 2, delete: true });
        blocks.push({ x: this.mapSize / 2, y: -this.mapSize / 2 - clearance, w: clearance, h: this.mapSize + clearance * 2, delete: true });
        blocks.push({ x: -this.mapSize / 2 - clearance, y: -this.mapSize / 2 - clearance, w: this.mapSize + clearance * 2, h: clearance, delete: true });
        blocks.push({ x: -this.mapSize / 2 - clearance, y: this.mapSize / 2, w: this.mapSize + clearance * 2, h: clearance, delete: true });
        mergeBlocks(blocks);
        blocks = blocks.filter(e => !e.delete);
        for (var node of nodes) {
            if (node.type != "cavern") continue;
            var block = { x: node.x, y: node.y, w: node.w, h: node.h };
            block.x = Math.round(block.x / rounding) * rounding;
            block.y = Math.round(block.y / rounding) * rounding;
            block.w = Math.round(block.w / rounding) * rounding;
            block.h = Math.round(block.h / rounding) * rounding;
            blocks.push(block);
            var block = { x: node.x + 100, y: node.y + 100, w: node.w - 200, h: node.h - 200, delete: true };
            block.x = Math.round(block.x / rounding) * rounding;
            block.y = Math.round(block.y / rounding) * rounding;
            block.w = Math.round(block.w / rounding) * rounding;
            block.h = Math.round(block.h / rounding) * rounding;
            blocks.push(block);
        }
        blocks.push({ x: -100, y: -100, w: 200, h: 200, delete: true });
        mergeBlocks(blocks);
        blocks = blocks.filter(e => !e.delete);
        return blocks;
    },
    generateWallMap: function (blocks) {
        game.objects.wallMap = [];
        for (var y = 0; y < this.height; y++) {
            game.objects.wallMap.push([]);
            for (var x = 0; x < this.width; x++) {
                var box = {};
                box.x = -this.mapSize / 2 + x * 50;
                box.y = -this.mapSize / 2 + y * 50;
                box.w = 50;
                box.h = 50;
                if (!blocks.some(e => blocksColliding(e, box))) {
                    game.objects.wallMap[y].push(0);
                } else {
                    game.objects.wallMap[y].push(1);
                }
            }
        }
    },
    generateGroupMap: function () {
        var groupMap = structuredClone(game.objects.wallMap);
        var count = 2;
        var sizes = [];
        while (groupMap.some(e => e.includes(0))) {
            var y = groupMap.findIndex(e => e.includes(0));
            var x = groupMap[y].indexOf(0);
            sizes.push({ id: count, amount: 0 });
            var search = [{ x: x, y: y }];
            var n = 0;
            while (search.length > 0) {
                var node = search.shift();
                groupMap[node.y][node.x] = count;
                var neighbors = [];
                neighbors.push({ x: node.x - 1, y: node.y });
                neighbors.push({ x: node.x + 1, y: node.y });
                neighbors.push({ x: node.x, y: node.y - 1 });
                neighbors.push({ x: node.x, y: node.y + 1 });
                neighbors = neighbors.filter(function (e) {
                    if (e.x < 0) return false;
                    if (e.x >= generate.width) return false;
                    if (e.y < 0) return false;
                    if (e.y >= generate.height) return false;
                    if (groupMap[e.y][e.x] !== 0) return false;
                    if (search.find(e2 => e2.x == e.x && e2.y == e.y)) return false;
                    return true;
                });
                search.push(...neighbors);
                n++;
            }
            sizes[sizes.length - 1].amount = n;
            count++;
        }
        sizes = sizes.sort((a, b) => a.amount - b.amount);
        return [groupMap, sizes];
    },
    pathfindGroups: function (blocks, groupMap, sizes) {
        for (var n = 0; n < sizes.length - 1; n++) {
            var id = sizes[n].id;
            var pathAmount = 1;
            var pathWidth = 1;
            if (sizes[n].count > 40) pathAmount = 2;
            if (sizes[n].count > 200) {
                pathAmount = 3;
                pathWidth = 2;
            }
            var searched = [];
            var nodes = [];
            for (var y = 0; y < groupMap.length; y++) {
                for (var x = 0; x < groupMap.length; x++) {
                    if (groupMap[y][x] != id) continue;
                    nodes.push({ x: x, y: y, parent: { x: x, y: y } });
                }
            }
            while (nodes.length > 0) {
                var node = nodes.shift();
                searched.push(node);
                if (node.reachedGoal) {
                    var reachedGoals = searched.filter(e => e.reachedGoal);
                    if (reachedGoals.length > pathAmount * 4) break;
                    continue;
                }
                var neighbors = [];
                neighbors.push({ x: node.x - 1, y: node.y });
                neighbors.push({ x: node.x + 1, y: node.y });
                neighbors.push({ x: node.x, y: node.y - 1 });
                neighbors.push({ x: node.x, y: node.y + 1 });
                neighbors = neighbors.filter(function (e) {
                    if (e.x < 0) return false;
                    if (e.x >= generate.width) return false;
                    if (e.y < 0) return false;
                    if (e.y >= generate.height) return false;
                    if (groupMap[e.y][e.x] === id) return false;
                    if (groupMap[e.y][e.x] !== 1) {
                        var index = sizes.findIndex(e2 => e2.id == groupMap[e.y][e.x]);
                        if (index <= n) return false;
                        e.reachedGoal = true;
                    }
                    if (nodes.find(e2 => e2.x == e.x && e2.y == e.y)) return false;
                    if (searched.find(e2 => e2.x == e.x && e2.y == e.y)) return false;
                    return true;
                });
                neighbors.forEach(function (e) {
                    e.parent = { x: node.x, y: node.y };
                });
                nodes.push(...neighbors);
            }
            var reachedGoals = searched.filter(e => e.reachedGoal);
            var paths = [];
            while (pathAmount > 0) {
                pathAmount--;
                var index = Math.floor(this.random() * reachedGoals.length);
                paths.push(reachedGoals.splice(index, 1));
            }
            for (var path of paths) {
                while (true) {
                    var node = path[path.length - 1];
                    if (!node.parent) break;
                    if (node.x == node.parent.x && node.y == node.parent.y) break;
                    var parent = searched.find(e => e.x == node.parent.x && e.y == node.parent.y);
                    path.push(parent);
                }
            }
            for (var path of paths) {
                for (var n2 = 1; n2 < path.length - 1; n2++) {
                    var o = path[n2];
                    var block = {};
                    block.x = o.x * 50 - this.mapSize / 2;
                    block.y = o.y * 50 - this.mapSize / 2;
                    block.w = 50;
                    block.h = 50;
                    block.delete = true;
                    game.objects.wallMap[o.y][o.x] = 0;
                    blocks.push(block);
                    if (pathWidth == 2) {
                        var block = {};
                        block.x = o.x * 50 - this.mapSize / 2 + 50;
                        block.y = o.y * 50 - this.mapSize / 2 + 50;
                        if (o.y < this.height - 1) game.objects.wallMap[o.y + 1][o.x + 1] = 0;
                        block.w = 50;
                        block.h = 50;
                        block.delete = true;
                        blocks.push(block);
                    }
                }
            }
        }
        mergeBlocks(blocks);
        blocks = blocks.filter(e => !e.delete);
        return blocks;
    },
    generateTightnessMap: function () {
        game.objects.tightnessMap = [];
        for (var y = 0; y < this.height; y++) {
            game.objects.tightnessMap.push([]);
            for (var x = 0; x < this.width; x++) {
                if (game.objects.wallMap[y][x]) {
                    game.objects.tightnessMap[y].push(0);
                    continue;
                }
                var rayLengths = [];
                for (var dir of [{ x: -1, y: 0 }, { x: 1, y: 0 }, { x: 0, y: -1 }, { x: 0, y: 1 }]) {
                    var x2 = x + dir.x;
                    var y2 = y + dir.y;
                    var length = 0;
                    while (true) {
                        length++;
                        if (x2 < 0) break;
                        if (y2 < 0) break;
                        if (x2 >= this.width) break;
                        if (y2 >= this.height) break;
                        if (game.objects.wallMap[y2][x2]) break;
                        x2 += dir.x;
                        y2 += dir.y;
                    }
                    rayLengths.push(length);
                }
                var tightness = rayLengths.reduce((a, b) => a + b);
                if (rayLengths[0] < 2 && rayLengths[1] < 2) tightness = 15;
                if (rayLengths[2] < 2 && rayLengths[3] < 2) tightness = 15;
                if (rayLengths.filter(e => e < 2).length > 2) tightness = 10;
                game.objects.tightnessMap[y].push(tightness);
            }
        }
    },
    smoothTightnessMap: function () {
        var smoothStrength = 2;
        var oldTightnessMap = structuredClone(game.objects.tightnessMap);
        game.objects.tightnessMap = [];
        for (var y = 0; y < this.height; y++) {
            game.objects.tightnessMap.push([]);
            for (var x = 0; x < this.width; x++) {
                if (game.objects.wallMap[y][x]) {
                    game.objects.tightnessMap[y].push(0);
                    continue;
                }
                var value = oldTightnessMap[y][x];
                var neighbors = [];
                for (var x2 = -smoothStrength; x2 <= smoothStrength; x2++) {
                    for (var y2 = -smoothStrength; y2 <= smoothStrength; y2++) {
                        if (x2 == 0 && y2 == 0) continue;
                        neighbors.push({ x: x2, y: y2 });
                    }
                }
                neighbors = neighbors.map(function (e) {
                    if (e.x < 0) return value;
                    if (e.y < 0) return value;
                    if (e.x >= this.width) return value;
                    if (e.y >= this.height) return value;
                    if (game.objects.wallMap[y][x]) return value;
                    return oldTightnessMap[y][x];
                });
                var tightness = [value, ...neighbors].reduce((a, b) => a + b) / (neighbors.length + 1);
                game.objects.tightnessMap[y].push(tightness);
                /*
                var o = {};
                o.x = x * 50 - this.mapSize / 2 + 25;
                o.y = y * 50 - this.mapSize / 2 + 25;
                o.type = "tightness";
                o.value = tightness;
                game.objects.objects.push(o);
                /**/
            }
        }
    },
    generateSeclusionMap: function () {
        game.objects.seclusionMap = structuredClone(game.objects.wallMap).map(e => e.map(e2 => e2 === 0 ? 0 : -1));
        var x = Math.round(this.width / 2);
        var y = Math.round(this.height / 2);
        var nodes = [{ x: x, y: y, distance: 1 }];
        while (nodes.length > 0) {
            var node = nodes.shift();
            game.objects.seclusionMap[node.y][node.x] = 500 / node.distance;
            /*
            var o = {};
            o.x = node.x * 50 - this.mapSize / 2 + 25;
            o.y = node.y * 50 - this.mapSize / 2 + 25;
            o.type = "tightness";
            o.value = 500/node.distance;
            game.objects.objects.push(o);
            /**/
            var neighbors = [];
            neighbors.push({ x: node.x - 1, y: node.y });
            neighbors.push({ x: node.x + 1, y: node.y });
            neighbors.push({ x: node.x, y: node.y - 1 });
            neighbors.push({ x: node.x, y: node.y + 1 });
            neighbors = neighbors.filter(function (e) {
                if (e.x < 0) return false;
                if (e.x >= generate.width) return false;
                if (e.y < 0) return false;
                if (e.y >= generate.height) return false;
                if (game.objects.seclusionMap[e.y][e.x] !== 0) return false;
                if (nodes.find(e2 => e2.x == e.x && e2.y == e.y)) return false;
                return true;
            });
            neighbors.forEach(function (e) {
                e.distance = node.distance + 1;
            });
            nodes.push(...neighbors);
        }
    },
    generateTreasureMap: function () {
        game.objects.treasureMap = [];
        for (var y = 0; y < this.height; y++) {
            game.objects.treasureMap.push([]);
            for (var x = 0; x < this.width; x++) {
                if (game.objects.wallMap[y][x]) {
                    game.objects.treasureMap[y].push(0);
                    continue;
                }
                var value = game.objects.tightnessMap[y][x] * 0.3 + game.objects.seclusionMap[y][x] * 0.7;
                game.objects.treasureMap[y].push(value);
                /*
                var o = {};
                o.x = x * 50 - this.mapSize / 2 + 25;
                o.y = y * 50 - this.mapSize / 2 + 25;
                o.type = "tightness";
                o.value = value;
                game.objects.objects.push(o);
                /**/
            }
        }
    },
    generateTreasureSpots: function () {
        var treasureSpots = [];
        for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
                var value = game.objects.treasureMap[y][x];
                if (value === 0) continue;
                var dist = distTo(x, y, this.width / 2, this.height / 2);
                if (dist < 4) continue;
                treasureSpots.push({ x: x, y: y, value: value });
            }
        }
        treasureSpots = treasureSpots.sort((a, b) => a.value - b.value);
        treasureSpots = treasureSpots.slice(0, treasureSpots.length * 0.2);
        for (var n = 0; n < treasureSpots.length; n++) {
            var o = treasureSpots[n];
            for (var n2 = n + 1; n2 < treasureSpots.length; n2++) {
                var o2 = treasureSpots[n2];
                var dist = distTo(o.x, o.y, o2.x, o2.y);
                if (dist > 8) continue;
                treasureSpots.splice(n2, 1);
                n2--;
            }
        }
        var goldSpots = [];
        for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
                var tightness = game.objects.tightnessMap[y][x];
                if (tightness === 0) continue;
                if (tightness > 22) continue;
                var dist = distTo(x, y, this.width / 2, this.height / 2);
                if (dist < 4) continue;
                if (treasureSpots.some(e => e.x == x && e.y == y)) continue;
                goldSpots.push({ x: x, y: y, tightness: tightness + this.random() * 10 });
            }
        }
        goldSpots = goldSpots.sort((a, b) => a.tightness - b.tightness + generate.random());
        return { treasureSpots: treasureSpots, goldSpots: goldSpots };
    },
    generateTreasure: function ({ treasureSpots: treasureSpots, goldSpots: goldSpots }) {
        var goldAmount = this.level * 2 - 7 + this.random() * this.level;
        if (this.level > 15) goldAmount += this.level * 2;
        var treasureAmount = 0;
        if (this.level > 13) treasureAmount = 1 + (Math.random() < 0.2);
        if (this.level > 17) {
            treasureAmount = 2 + (this.level - 17) / 7 + Math.random();
        }
        for (var n = 0; n < goldAmount && n < goldSpots.length; n++) {
            var o = {};
            o.type = "collectable";
            o.collectableType = "gold";
            o.animationOffset = this.random() * 5;
            var spot = goldSpots[n];
            o.x = spot.x * 50 - this.mapSize / 2 + 25;
            o.y = spot.y * 50 - this.mapSize / 2 + 25;
            o.value = 1;
            if (this.level > 15 && Math.random() < Math.min(0.7, (this.level - 14) * 0.02)) o.value = 5;
            if (this.level > 20 && Math.random() < Math.min(0.3, (this.level - 20) * 0.02)) {
                o.value = 25;
                o.collidable = true;
                o.hitbox = [
                    {
                        x: o.x,
                        y: o.y + 1,
                        r: 21
                    },
                    {
                        x: o.x,
                        y: o.y - 1,
                        r: 21
                    }
                ];
            }
            if (o.value != 25) o.z = 1;
            game.objects.objects.push(o);
        }
        for (var n = 0; n < treasureAmount && n < treasureSpots.length; n++) {
            var o = {};
            o.type = "collectable";
            o.collectableType = "gem";
            var spot = treasureSpots[n];
            o.x = spot.x * 50 - this.mapSize / 2 + 25;
            o.y = spot.y * 50 - this.mapSize / 2 + 25;
            o.animationOffset = this.random() * 5;
            game.objects.objects.push(o);
        }
    },
    generateBlocks: function (blocks) {
        blocks.forEach(function (o) {
            o.type = "block";
        });
        game.objects.objects.push(...blocks);
    },
    generateZombies: function () {
        var zombieCount = this.mapSize * (5 + this.level * 4) * 0.001;
        var startAngle = this.random() * 360;
        for (var n = 0; n < zombieCount; n++) {
            var angle = n / zombieCount * 360 + this.random() * 20 - 10 + startAngle;
            var maxDist = this.mapSize / 2 - 15 / 2 + Math.max(Math.sin((angle - 23) * 4 * Math.PI / 180), 0) * this.mapSize * 0.12;
            var dist = 200 + (maxDist - 200) * this.random();
            var move = distToMove(dist, angle);
            var o = this.createZombie(move.x, move.y);
            if (game.objects.objects.filter(e => e.type == "block").some(e => blocksColliding(e, o))) continue;
            game.objects.objects.push(o);
        }
    },
    createZombie: function (x, y) {
        var o = {};
        o.type = "zombie";
        o.w = 15;
        o.h = 15;
        o.canLunge = false;
        if (game.level.level >= 19) {
            o.canLunge = this.random() < Math.min(0.2, 0.1 + (game.level.level - 19) * 0.01);
        }
        if (o.canLunge) {
            o.w = 10;
            o.h = 10;
            o.lungeTime = 0;
            o.lungeDuration = 50;
            o.lungeReload = 0;
            o.lungeReloadReset = 300;
        }
        o.x = x - o.w / 2;
        o.y = y - o.h / 2;
        o.cx = o.x + o.w / 2;
        o.cy = o.y + o.h / 2;
        o.originalPosition = { x: o.x, y: o.y };
        o.target = { x: o.x, y: o.y };
        o.move = { x: 0, y: 0 };
        o.speed = Math.min(0.4 + game.level.level / 200, 0.8);
        o.r = Math.sqrt(o.w ** 2 + o.h ** 2) / 2 * 0.76;
        return o;
    },
}