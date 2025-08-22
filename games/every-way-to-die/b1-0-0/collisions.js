const MAX_COLLISIONS = 100;

function updateCollisions(objects) {
    for (let o of objects) {
        if (!o.initialized) {
            o.move = o.move || { x: 0, y: 0 };
            o.dynamic = o.dynamic === undefined ? false : o.dynamic;
            o.static = o.static === undefined ? true : o.static;
            o.last = o.last || { x: 0, y: 0 };
            o.initialized = true;
        }

        o.collided = false;
        o.resting = { x: false, y: false, left: false, right: false, up: false, down: false };
        o.colliding = { left: false, right: false, up: false, down: false };
        o.last.x = o.hitbox.x;
        o.last.y = o.hitbox.y;
    }

    updateAxis(objects, "x");
    updateAxis(objects, "y");
}

function updateAxis(objects, axis) {
    for (let o of objects) o.hitbox[axis] += o.move[axis];

    let collisionFrameCount = 0;
    while (collisionFrameCount < MAX_COLLISIONS) {
        let collisionsOccured = false;

        for (let n = 0; n < objects.length; n++) {
            let o1 = objects[n];
            if (o1.ignoreCollisions) continue;
            for (let n2 = n + 1; n2 < objects.length; n2++) {
                let o2 = objects[n2];
                if (o2.ignoreCollisions) continue;
                if (!blocksColliding(o1, o2)) continue;
                let collision = resolveCollision(o1, o2, axis);
                collisionsOccured |= collision;
            }
        }

        if (!collisionsOccured) break;
        collisionFrameCount++;
    }
}

function resolveCollision(o1, o2, axis) {
    const dimension = axis == "x" ? "w" : "h";
    const directions = axis == "x" ? ["left", "right"] : ["up", "down"];

    if ((o1.static || o1.resting[axis]) && (o2.static || o2.resting[axis])) return false;
    //don't collide if both objects can't move

    if (!(o2.static || o2.resting[axis]) && (o1.static || o1.resting[axis])) return resolveCollision(o2, o1, axis);
    //if it's a static-dynamic collision, o1 is always the dynamic object

    o1.collided = true;
    o2.collided = true;
    //objects have collided

    let center1 = { x: o1.last.x + o1.hitbox.w / 2, y: o1.last.y + o1.hitbox.h / 2 };
    let center2 = { x: o2.last.x + o2.hitbox.w / 2, y: o2.last.y + o2.hitbox.h / 2 };
    //calculate centers

    if (o2.static || o2.resting[axis]) {
        //static-dynamic collision

        if (center1[axis] > center2[axis]) {
            o1.hitbox[axis] = o2.hitbox[axis] + o2.hitbox[dimension];

            o1.resting[directions[0]] = o2;
            o1.colliding[directions[0]] = o2;
        } else {
            o1.hitbox[axis] = o2.hitbox[axis] - o1.hitbox[dimension];

            o1.resting[directions[1]] = o2;
            o1.colliding[directions[1]] = o2;
        }

        let averageMovement = (o1.move[axis] + o2.move[axis]) / 2;
        o1.move[axis] = averageMovement;
        o1.resting[axis] = true;
    } else {
        //dynamic-dynamic collision

        if (center1[axis] > center2[axis]) {
            let collisionDistance = o2.hitbox[axis] + o2.hitbox[dimension] - o1.hitbox[axis];
            o1.hitbox[axis] += collisionDistance / 2;
            o2.hitbox[axis] -= collisionDistance / 2;

            o1.colliding[directions[0]] = o2;
            o2.colliding[directions[1]] = o1;
        } else {
            let collisionDistance = o2.hitbox[axis] - o1.hitbox[axis] - o1.hitbox[dimension];
            o1.hitbox[axis] += collisionDistance / 2;
            o2.hitbox[axis] -= collisionDistance / 2;

            o1.colliding[directions[1]] = o2;
            o2.colliding[directions[0]] = o1;
        }

        let averageMovement = (o1.move[axis] + o2.move[axis]) / 2;
        o1.move[axis] = averageMovement;
        o2.move[axis] = averageMovement;
    }
    return true;
}