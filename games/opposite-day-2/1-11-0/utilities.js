function easeOut(n) {
    return Math.min(Math.max(n, 0), 1) ** 4;
}

function easeOutPartialIn(a) {
    a = 1.02 / (1 + 2.76 ** (-10 * (a - 0.6))) - 0.0026;
    return Math.min(Math.max(a, 0), 1);
}

function clamp(n) {
    return Math.min(Math.max(n, 0), 1);
}

function drawRotatingCube(data) {
    var s = data.size || 30;
    var vertices = [
        { x: -s, y: -s, z: -s },
        { x: s, y: -s, z: -s },
        { x: s, y: s, z: -s },
        { x: -s, y: s, z: -s },
        { x: -s, y: -s, z: s },
        { x: s, y: -s, z: s },
        { x: s, y: s, z: s },
        { x: -s, y: s, z: s }
    ];
    var angle = data.zAngle || 0;
    for (var o of vertices) {
        var x = o.x * Math.cos(angle) - o.y * Math.sin(angle);
        var y = o.x * Math.sin(angle) + o.y * Math.cos(angle);
        o.x = x;
        o.y = y;
    }
    var angle = data.xAngle || 0;
    for (var o of vertices) {
        var y = o.y * Math.cos(angle) - o.z * Math.sin(angle);
        var z = o.y * Math.sin(angle) + o.z * Math.cos(angle);
        o.y = y;
        o.z = z;
    }
    var angle = data.yAngle || 0;
    for (var o of vertices) {
        var x = o.z * Math.sin(angle) + o.x * Math.cos(angle);
        var z = o.z * Math.cos(angle) - o.x * Math.sin(angle);
        o.x = x;
        o.z = z;
    }
    var edges = [
        [0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]
    ];
    var faces = [
        [0, 1, 2, 3], [4, 5, 6, 7], [2, 3, 7, 6], [0, 1, 5, 4], [1, 2, 6, 5], [0, 3, 7, 4]
    ];
    var faceCoordinates = [];
    var faceZValues = [];
    for (var face of faces) {
        var point1 = vertices[face[0]];
        var point2 = vertices[face[1]];
        var point3 = vertices[face[2]];
        var point4 = vertices[face[3]];
        var avgX = (point1.x + point2.x + point3.x + point4.x) / 4;
        var avgY = (point1.y + point2.y + point3.y + point4.y) / 4;
        var avgZ = (point1.z + point2.z + point3.z + point4.z) / 4;
        faceZValues.push(avgZ);
        faceCoordinates.push({ x: avgX, y: avgY, z: avgZ });
    }
    var sortedZValues = [...faceZValues].sort((a, b) => b - a);
    var faceOrder = [];
    for (var n = 0; n < faceZValues.length; n++) {
        var e = faceZValues[n];
        var order = sortedZValues.indexOf(e);
        while (faceOrder.includes(order)) order++;
        faceOrder.push(order);
    }
    ctx.strokeStyle = "black";
    if (data.grey) {
        if (data.red) {
            ctx.strokeStyle = "rgb(220,130,130)";
        } else {
            ctx.strokeStyle = "rgb(150,150,255)";
        }
    }
    if (game.background.effect.active("magenta") && !menu.creditsScreen) {
        ctx.strokeStyle = "rgb(255,0,200)"
    }
    ctx.lineWidth = 8;
    ctx.lineCap = "round";

    for (var edge of edges) {
        if (data.border === false) break;
        ctx.beginPath();
        ctx.moveTo(vertices[edge[0]].x, vertices[edge[0]].y);
        ctx.lineTo(vertices[edge[1]].x, vertices[edge[1]].y);
        if (data.dashedBorder) {
            ctx.lineWidth = 4;
            var dist = distTo(vertices[edge[0]].x, vertices[edge[0]].y, vertices[edge[1]].x, vertices[edge[1]].y);
            ctx.setLineDash([dist * 0.2, dist * 0.6]);
        }
        ctx.stroke();
    }
    if (data.grey) {
        ctx.globalAlpha = 0.3;
    }
    for (var n = faceOrder.length - 3; n < faceOrder.length; n++) {
        var index = faceOrder.indexOf(n);
        var face = faces[index];
        var position = faceCoordinates[index];
        var x = (position.x + 50) / 100;
        var y = (position.y + 50) / 100;
        var z = (position.z + 50) / 100;
        ctx.fillStyle = data.colorFunction(x, y, z, n);
        ctx.beginPath();
        ctx.moveTo(vertices[face[0]].x, vertices[face[0]].y);
        ctx.lineTo(vertices[face[1]].x, vertices[face[1]].y);
        ctx.lineTo(vertices[face[2]].x, vertices[face[2]].y);
        ctx.lineTo(vertices[face[3]].x, vertices[face[3]].y);
        ctx.fill();
    }
}

function shuffleArray(arr) {
    let newArr = [];
    while (arr.length) {
        let index = Math.floor(Math.random() * arr.length);
        newArr.push(arr[index]);
        arr.splice(index, 1);
    }
    return newArr;
}

function updateCubeUltraLightningAnimation(o) {
    if (!game.level.triggers.tripped("blue cube ultra") && !game.level.triggers.tripped("red cube ultra")) {
        o.ultraLightningAnimation = [];
        return;
    }
    if (!o.ultraLightningAnimation) o.ultraLightningAnimation = [];
    if (o.animation % 2 == 0) {
        let a = {};
        a.yOffset = Math.random() * 20 - 10;
        a.angle = Math.random() * 60 - 30;
        a.color = "rgb(255,0,200)";
        if (Math.random() < 0.4) a.color = `rgb(255,${Math.random() * 100},200)`;
        if (Math.random() < 0.2) a.color = "rgb(255,200,230)";
        a.lineWidth = Math.random() * 2 + 2;
        a.alpha = 1;
        a.front = [];
        for (let n = 0; n < 11; n++) {
            let point = {};
            point.x = n / 10 * 120 - 60;
            point.y = Math.random() * 40 - 20;
            a.front.push(point);
        }
        a.back = [a.front[0]];
        for (let n = 1; n < 10; n++) {
            let point = {};
            point.x = n / 10 * 120 - 60;
            point.y = Math.random() * 40 - 20;
            a.back.push(point);
        }
        a.back.push(a.front[a.front.length - 1]);
        o.ultraLightningAnimation.push(a);
    }
    for (let a of o.ultraLightningAnimation) {
        a.alpha -= 0.1;
        if (a.alpha <= 0) a.delete = true;
    }
    o.ultraLightningAnimation = o.ultraLightningAnimation.filter(e => !e.delete);
}

function drawUltraCubeLightningBack(o) {
    if (!o.ultraLightningAnimation) return;
    for (let a of o.ultraLightningAnimation) {
        ctx.save();
        ctx.translate(0, a.yOffset);
        ctx.rotate(a.angle * Math.PI / 180);
        ctx.strokeStyle = a.color;
        ctx.lineWidth = a.lineWidth;
        ctx.globalAlpha = a.alpha;
        ctx.lineJoin = "miter";
        ctx.beginPath();
        for (let point of a.back) {
            ctx.lineTo(point.x, point.y);
        }
        ctx.stroke();
        ctx.restore();
    }
}

function drawUltraCubeLightningFront(o) {
    if (!o.ultraLightningAnimation) return;
    for (let a of o.ultraLightningAnimation) {
        ctx.save();
        ctx.translate(0, a.yOffset);
        ctx.rotate(a.angle * Math.PI / 180);
        ctx.strokeStyle = a.color;
        ctx.lineWidth = a.lineWidth;
        ctx.globalAlpha = a.alpha;
        ctx.lineJoin = "miter";
        ctx.beginPath();
        for (let point of a.front) {
            ctx.lineTo(point.x, point.y);
        }
        ctx.stroke();
        ctx.restore();
    }
}

var noise = function (x, y, z) {
    function fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
    function lerp(t, a, b) { return a + t * (b - a); }
    function grad(hash, x, y, z) {
        var h = hash & 15;
        var u = h < 8 ? x : y,
            v = h < 4 ? y : h == 12 || h == 14 ? x : z;
        return ((h & 1) == 0 ? u : -u) + ((h & 2) == 0 ? v : -v);
    }
    function scale(n) { return (1 + n) / 2; }

    var p = new Array(512)
    var permutation = [151, 160, 137, 91, 90, 15,
        131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23,
        190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33,
        88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166,
        77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244,
        102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196,
        135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123,
        5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42,
        223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9,
        129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228,
        251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107,
        49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254,
        138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180
    ];
    for (var i = 0; i < 256; i++)
        p[256 + i] = p[i] = permutation[i];

    var X = Math.floor(x) & 255,
        Y = Math.floor(y) & 255,
        Z = Math.floor(z) & 255;
    x -= Math.floor(x);
    y -= Math.floor(y);
    z -= Math.floor(z);
    var u = fade(x),
        v = fade(y),
        w = fade(z);
    var A = p[X] + Y, AA = p[A] + Z, AB = p[A + 1] + Z,
        B = p[X + 1] + Y, BA = p[B] + Z, BB = p[B + 1] + Z;

    return scale(lerp(w, lerp(v, lerp(u, grad(p[AA], x, y, z),
        grad(p[BA], x - 1, y, z)),
        lerp(u, grad(p[AB], x, y - 1, z),
            grad(p[BB], x - 1, y - 1, z))),
        lerp(v, lerp(u, grad(p[AA + 1], x, y, z - 1),
            grad(p[BA + 1], x - 1, y, z - 1)),
            lerp(u, grad(p[AB + 1], x, y - 1, z - 1),
                grad(p[BB + 1], x - 1, y - 1, z - 1)))));
}

function createTimeText(time) {
    var milliseconds = time % 100 + "";
    if (milliseconds.length < 2) milliseconds = "0" + milliseconds;
    var seconds = Math.floor(time / 100) % 60 + "";
    if (seconds.length < 2 && time >= 6000) seconds = "0" + seconds;
    if (time < 6000) return `${seconds}.${milliseconds}`;
    var minutes = Math.floor(time / 6000) % 60 + "";
    if (minutes.length < 2 && time >= 360000) minutes = "0" + minutes;
    if (time < 360000) return `${minutes}:${seconds}.${milliseconds}`;
    var hours = Math.floor(time / 360000);
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function pointInBox(x, y, box) {
    return x >= box.x && y >= box.y && x <= box.x + box.w && y <= box.y + box.h;
}

function segmentsIntersect(a, b, c, d, p, q, r, s) {
    var det, gamma, lambda;
    det = (c - a) * (s - q) - (r - p) * (d - b);
    if (det === 0) {
        return false;
    } else {
        lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
        gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
        return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
    }
}

function pointInPolygon(x, y, o) {
    var response = false;
    var crossCount = 0;
    for (var n = 0; n < o.length; n++) {
        var line = o[n];
        var intersection = linesIntersection(x, y, x + 1, y, line.p1.x, line.p1.y, line.p2.x, line.p2.y);
        if (!intersection) continue;
        if (intersection === true) continue;
        if (intersection.x < x) continue;
        if (intersection.y < Math.min(line.p1.y, line.p2.y)) continue;
        if (intersection.y > Math.max(line.p1.y, line.p2.y)) continue;
        crossCount++;
    }
    return crossCount % 2 === 1;
}

function linesIntersection(x1, y1, x2, y2, x3, y3, x4, y4) {
    if (x1 === x3 && y1 === y3 && x2 === x4 && y2 === y4) return true;
    var m1 = (y2 - y1) / (x2 - x1);
    var b1 = y1 - x1 * m1;
    var m2 = (y4 - y3) / (x4 - x3);
    var b2 = y3 - x3 * m2;

    if ((!isFinite(m1) && !isFinite(m2))) {
        if (x1 === x3) {
            return true;
        } else {
            return false;
        }
    }
    if (m1 === m2) {
        if (b1 === b2) {
            return true;
        } else {
            return false;
        }
    }
    if (!isFinite(m1)) {
        return { x: x1, y: m2 * x1 + b2 };
    }
    if (!isFinite(m2)) {
        return { x: x3, y: m1 * x3 + b1 };
    }
    return { x: (b1 - b2) / (m2 - m1), y: m1 * (b1 - b2) / (m2 - m1) + b1 };
}