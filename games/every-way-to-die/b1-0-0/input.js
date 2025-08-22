let Keys = {
    held: {},
    down: {},
    up: {}
}

window.addEventListener("keydown", e => {
    Keys.held[e.key.toLowerCase()] = true;
    Keys.down[e.key.toLowerCase()] = true;
});

window.addEventListener("keyup", e => {
    Keys.held[e.key.toLowerCase()] = false;
    Keys.up[e.key.toLowerCase()] = true;
});

let Mouse = {
    x: 0,
    y: 0,
    xmove: 0,
    ymove: 0,
    down: false,
    downStart: false,
    click: false
}

window.addEventListener("mousemove", e => {
    let rect = canvas.getBoundingClientRect();
    Mouse.x = Math.min(Math.max((e.pageX - rect.x) / rect.width, 0), 1) * canvas.width;
    Mouse.y = Math.min(Math.max((e.pageY - rect.y) / rect.height, 0), 1) * canvas.height;
    Mouse.xmove += e.movementX * canvas.width / rect.width;
    Mouse.ymove += e.movementY * canvas.height / rect.height;
});

window.addEventListener("click", e => {
    Mouse.click = true;
});

window.addEventListener("mousedown", e => {
    Mouse.down = true;
    Mouse.downStart = true;
});

window.addEventListener("mouseup", e => {
    Mouse.down = false;
    Mouse.click = true;
});