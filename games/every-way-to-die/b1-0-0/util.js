dirTo = (x1, y1, x2, y2) => 90 + (Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI)
distToMove = (distance, direction) => ({ x: distance * Math.sin(direction * Math.PI / 180), y: -distance * Math.cos(direction * Math.PI / 180) })
distTo = (x1, y1, x2, y2) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
rotate = (cx, cy, x, y, a) => ([a = Math.PI / 180 * a, { x: (Math.cos(a) * (x - cx)) + (Math.sin(a) * (y - cy)) + cx, y: (Math.cos(a) * (y - cy)) - (Math.sin(a) * (x - cx)) + cy }][1])
easeInOut = function (a) {
    a = 1.02 / (1 + 2.71828 ** (-10 * (a - 0.5))) - 0.007;
    return Math.min(Math.max(a, 0), 1);
}
blocksColliding = (b1, b2) => r(b1.x + b1.w) > r(b2.x) && r(b1.x) < r(b2.x + b2.w) && r(b1.y + b1.h) > r(b2.y) && r(b1.y) < r(b2.y + b2.h)
blocksCollidingEdge = (b1, b2) => r(b1.x + b1.w) >= r(b2.x) && r(b1.x) <= r(b2.x + b2.w) && r(b1.y + b1.h) >= r(b2.y) && r(b1.y) <= r(b2.y + b2.h)
blocksCollidingCorner = (b1, b2) => (b1.x + b1.w == b2.x || b2.x + b2.w == b1.x) && (b1.y + b1.h == b2.y || b2.y + b2.h == b1.y)
r = n => Math.round(n * 100000) / 100000
easeInBack = function (a) {
    if (a < 0.5) {
        return easeInOut(a * 2);
    } else {
        return easeInOut((1 - a) * 2);
    }
}