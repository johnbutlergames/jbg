let loads = 0;

let images = {
    "spike": "assets/spike.png",
    "spikeBloody1-1": "assets/spike-bloody-1-1.png",
    "spikeBloody1-2": "assets/spike-bloody-1-2.png",
    "spikeBloody1-3": "assets/spike-bloody-1-3.png",
    "spikeBloody1-4": "assets/spike-bloody-1-4.png",
    "spikeBloody2-1": "assets/spike-bloody-2-1.png",
    "spikeBloody2-2": "assets/spike-bloody-2-2.png",
    "spikeBloody2-3": "assets/spike-bloody-2-3.png",
    "spikeBloody2-4": "assets/spike-bloody-2-4.png",
    "spikeBloody3-1": "assets/spike-bloody-3-1.png",
    "spikeBloody3-2": "assets/spike-bloody-3-2.png",
    "spikeBloody3-3": "assets/spike-bloody-3-3.png",
    "spikeBloody3-4": "assets/spike-bloody-3-4.png",
    "spikeBloody4": "assets/spike-bloody-4.png",
    "stoneTexture": "assets/stone-texture.png",
    "blockTexture": "assets/block-texture.png",
    "skull": "assets/skull.png",
    "door1": "assets/door1.png",
    "door2": "assets/door2.png",
    "door3": "assets/door3.png",
    "skullScreen": "assets/skull-screen.png",
    "checkmarkScreen": "assets/checkmark-screen.png",
    "flagStand": "assets/flag-stand.png",
    "checkeredFlagUnfurled": "assets/checkered-flag-unfurled.png",
    "checkeredFlagFurled": "assets/checkered-flag-furled.png",
    "keybindsImage": "assets/keybinds-image.png",
    "mountain1": "assets/mountain1.png",
    "mountain2": "assets/mountain2.png",
    "mountain3": "assets/mountain3.png",
    "clouds1": "assets/clouds1.png",
    "clouds2": "assets/clouds2.png",
    "restart": "assets/restart.png",
    "exit": "assets/exit.png",
    "volume": "assets/volume.png",
    "volumeMuted": "assets/volume-muted.png",
    "checkpointFlagUnfurled": "assets/checkpoint-flag-unfurled.png",
    "checkpointFlagFurled": "assets/checkpoint-flag-furled.png",
    "saw": "assets/saw.png",
    "sawBloody1": "assets/saw-bloody1.png",
    "sawBloody2": "assets/saw-bloody2.png",
    "sawBloody3": "assets/saw-bloody3.png",
    "sawBloody4": "assets/saw-bloody4.png",
    "spring": "assets/spring.png",
    "springBody": "assets/spring-body.png",
    "springSpring": "assets/spring-spring.png",
    "exclamationMarkScreen": "assets/exclamation-mark-screen.png",
    "turretBody": "assets/turret-body.png",
    "turretGun": "assets/turret-gun.png",
}

let audios = {
    "hit1": "assets/hit1.mp3",
    "hit2": "assets/hit2.mp3",
    "hit3": "assets/hit3.mp3",
    "hit4": "assets/hit4.mp3",
    "hit5": "assets/hit5.mp3",
    "splat1": "assets/splat1.mp3",
    "splat2": "assets/splat2.mp3",
    "splat3": "assets/splat3.mp3",
    "death": "assets/death.mp3",
    "pop1": "assets/pop1.mp3",
    "pop2": "assets/pop2.mp3",
    "pop3": "assets/pop3.mp3",
    "correct": "assets/correct.mp3",
    "screenShutdown": "assets/screen-shutdown.mp3",
    "static": "assets/static.mp3",
    "depressurize": "assets/depressurize.mp3",
    "finish": "assets/finish.mp3",
    "music": "assets/Conduit.mp3",
    "whoosh": "assets/whoosh.mp3",
    "reverseWhoosh": "assets/reverse-whoosh.mp3",
    "checkpoint": "assets/checkpoint.mp3",
    "spring": "assets/spring.mp3",
    "spikeExtend": "assets/spike-extend.mp3",
    "spikeRetract": "assets/spike-retract.mp3"
}

for (let key of Object.keys(images)) {
    let src = images[key];
    let image = new Image();
    image.src = src;
    image.onload = () => {
        loads++;
    }
    images[key] = image;
}

for (let key of Object.keys(audios)) {
    let src = audios[key];
    let audio = new Audio();
    audio.src = src;
    audio.oncanplaythrough = () => {
        loads++;
    }
    audios[key] = audio;
}