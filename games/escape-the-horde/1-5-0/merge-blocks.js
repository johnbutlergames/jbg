function updateBlockCollisions(blocks) {
    var change = true;
    while (change) {
        blocks = blocks.sort((a, b) => (b.w * b.h) - (a.w * a.h));
        blocks = blocks.sort((a, b) => (b.delete ? 1 : 0) - (a.delete ? 1 : 0));
        change = false;
        for (var n = 0; n < blocks.length; n++) {
            var o = blocks[n];
            for (var n2 = blocks.length - 1; n2 > n; n2--) {
                var o2 = blocks[n2];
                if (o.delete && o2.delete) continue;
                if (!blocksColliding(o, o2)) continue;
                var blocksToAdd = remainingParts(o, o2);
                for (var block of blocksToAdd) {
                    var block = createBlock(block.x, block.y, block.w, block.h);
                    blocks.push(block);
                }
                blocks.splice(n2, 1);
                change = true;
                break;
            }
            if (change) break;
        }
    }
    blocks = blocks.filter(e => !e.delete);
}
function breakBlocksOnEdges(blocks) {
    var change = true;
    while (change) {
        change = false;
        for (var n = 0; n < blocks.length; n++) {
            var o = blocks[n];
            for (var n2 = blocks.length - 1; n2 > n; n2--) {
                var o2 = blocks[n2];
                if (blocksCollidingCorner(o, o2)) continue;
                if (!blocksCollidingEdge(o, o2)) continue;
                if (o.x == o2.x && o.w == o2.w) continue;
                if (o.y == o2.y && o.h == o2.h) continue;
                var blocksToAdd = remainingParts(o, o2);
                var blocksToAdd2 = remainingParts(o2, o);
                for (var block of blocksToAdd) {
                    var block = createBlock(block.x, block.y, block.w, block.h);
                    blocks.push(block);
                }
                for (var block of blocksToAdd2) {
                    var block = createBlock(block.x, block.y, block.w, block.h);
                    blocks.push(block);
                }
                blocks.splice(n2, 1);
                blocks.splice(n, 1);
                change = true;
                break;
            }
            if (change) break;
        }
    }
}
function detectEdges(blocks) {
    var change = true;
    while (change) {
        change = false;
        var add = [];
        for (var n = 0; n < blocks.length; n++) {
            var o = blocks[n];
            o.borders = {
                left: true,
                right: true,
                top: true,
                bottom: true
            }
            for (var n2 = 0; n2 < blocks.length; n2++) {
                var o2 = blocks[n2];
                if (n == n2) continue;
                if (blocksCollidingCorner(o, o2)) continue;
                if (!blocksCollidingEdge(o, o2)) continue;
                if (o2.x + o2.w == o.x) {
                    o.borders.left = false;
                }
                if (o2.y + o2.h == o.y) {
                    o.borders.top = false;
                }
                if (o.x + o.w == o2.x) {
                    o.borders.right = false;
                }
                if (o.y + o.h == o2.y) {
                    o.borders.bottom = false;
                }
            }
        }
        blocks = blocks.concat(add);
    }
}
function combineBlocks(blocks) {
    var change = true;
    while (change) {
        change = false;
        for (var n = 0; n < blocks.length; n++) {
            var o = blocks[n];
            for (var n2 = n + 1; n2 < blocks.length; n2++) {
                var o2 = blocks[n2];
                if (o2.y != o.y) continue;
                if (o2.h != o.h) continue;
                if (o2.borders?.top != o.borders?.top) continue;
                if (o2.borders?.bottom != o.borders?.bottom) continue;
                if (!blocksCollidingEdge(o, o2)) continue;
                var x = Math.min(o.x, o2.x);
                var w = Math.max(o.x + o.w, o2.x + o2.w) - x;
                o.x = x;
                o.w = w;
                o.borders = o.borders || {};
                o.borders.left = o.borders?.left || o2.borders?.left;
                o.borders.right = o.borders?.right || o2.borders?.right;
                blocks.splice(n2, 1);
                n2--;
                change = true;
            }
        }
    }
    var change = true;
    while (change) {
        change = false;
        for (var n = 0; n < blocks.length; n++) {
            var o = blocks[n];
            for (var n2 = n + 1; n2 < blocks.length; n2++) {
                var o2 = blocks[n2];
                if (o2.x != o.x) continue;
                if (o2.w != o.w) continue;
                if (o2.borders?.left != o.borders?.left) continue;
                if (o2.borders?.right != o.borders?.right) continue;
                if (!blocksCollidingEdge(o, o2)) continue;
                var y = Math.min(o.y, o2.y);
                var h = Math.max(o.y + o.h, o2.y + o2.h) - y;
                o.y = y;
                o.h = h;
                o.borders = o.borders || {};
                o.borders.top = o.borders?.top || o2.borders?.top;
                o.borders.bottom = o.borders?.bottom || o2.borders?.bottom;
                blocks.splice(n2, 1);
                n2--;
                change = true;
            }
        }
    }
}
function remainingParts(o, o2) {
    var blocks = [];
    blocks.push({ x: o2.x, y: o2.y, w: o.x - o2.x, h: o.y - o2.y });
    blocks.push({ x: o.x + o.w, y: o2.y, w: o2.x + o2.w - o.x - o.w, h: o.y - o2.y });
    blocks.push({ x: o2.x, y: o.y + o.h, w: o.x - o2.x, h: o2.y + o2.h - o.y - o.h });
    blocks.push({ x: o.x + o.w, y: o.y + o.h, w: o2.x + o2.w - o.x - o.w, h: o2.y + o2.h - o.y - o.h });
    //corner blocks

    blocks.push({ x: o2.x, y: Math.max(o.y, o2.y), w: o.x - o2.x, h: Math.min(o.y + o.h, o2.y + o2.h) - Math.max(o.y, o2.y) });
    blocks.push({ x: Math.max(o.x, o2.x), y: o2.y, w: (Math.min(o.x + o.w, o2.x + o2.w) - Math.max(o.x, o2.x)), h: o.y - o2.y });
    blocks.push({ x: o.x + o.w, y: Math.max(o.y, o2.y), w: o2.x + o2.w - o.x - o.w, h: Math.min(o.y + o.h, o2.y + o2.h) - Math.max(o.y, o2.y) });
    blocks.push({ x: Math.max(o.x, o2.x), y: o.y + o.h, w: Math.min(o.x + o.w, o2.x + o2.w) - Math.max(o.x, o2.x), h: o2.y + o2.h - o.y - o.h });
    //side blocks

    for (var block of blocks) {
        if (block.w <= 2) block.delete = true;
        if (block.h <= 2) block.delete = true;
    }
    blocks = blocks.filter(e => !e.delete);

    return blocks;
}
function center(o, o2) {
    var x = Math.max(o.x, o2.x);
    var y = Math.max(o.y, o2.y)
    return { x: x, y: y, w: Math.min(o.x + o.w, o2.x + o2.w) - x, h: Math.min(o.y + o.h, o2.y + o2.h) - y };
}
function createBlock(x, y, w, h) {
    x = Math.round(x);
    y = Math.round(y);
    w = Math.round(w);
    h = Math.round(h);
    if (w < 0) {
        x += w;
        w *= -1;
    }
    if (h < 0) {
        y += h;
        h *= -1;
    }

    if (w == 0 || h == 0) return false;
    var o = {};
    o.x = x;
    o.y = y;
    o.w = w;
    o.h = h;
    o.borders = {
        left: true,
        right: true,
        top: true,
        bottom: true
    };
    return o;
}
function mergeBlocks(blocks) {
    updateBlockCollisions(blocks);
    //breakBlocksOnEdges(blocks);
    //detectEdges(blocks);
    combineBlocks(blocks);
}