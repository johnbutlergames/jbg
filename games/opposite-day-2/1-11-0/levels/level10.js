levels[9] = {
    objects: [
        { type: "text", content: "This isn't the final level", x: 0, y: -250, font: "40px rubik", spawnAnimation: 50, spawnAnimationDuration: 50 },
        { type: "text", content: "and it's completely ordinary.", x: 0, y: -200, font: "40px rubik", spawnAnimation: 50, spawnAnimationDuration: 50 },
        { type: "clue", x: -1250, y: -200, id: "shortcut clue", proximity: 1, radius: 1, color: { r: 0, g: 230, b: 0 }, air: true, down: true, angle: 180, alpha: 0 },
        { type: "clue", x: -1250, y: -1750, id: "ultra shortcut clue 1", proximity: 1, radius: 1, ultra: true, air: true, angle: 180, alpha: 0 },
        { type: "block", x: 500, y: -500, w: 2000, h: 1000, slippery: true },
        { type: "block", x: -4100, y: 100, w: 5000, h: 1000, illusion3Push: { y: 1 } },
        { type: "lava", x: -1100, y: -2600, w: 2100, h: 1800 },
        { type: "lava", x: -1300, y: -1300, w: 100, h: 100 },
        { type: "lava", x: -1400, y: -1800, w: 100, h: 100 },
        { type: "lava", x: -1200, y: -1800, w: 100, h: 100 },
        { type: "lava", x: -1300, y: -2300, w: 100, h: 100 },
        { type: "lava", x: -3500, y: -2600, w: 2100, h: 1800 },
        { type: "block", x: -1200, y: -800, w: 2050, h: 200 },
        { type: "block", x: -1200, y: -700, w: 100, h: 1000, slippery: true },
        { type: "block", x: -1400, y: -1000, w: 100, h: 300, slippery: true, notIllusion1: true, alpha: 0 },
        { type: "block", x: -1400, y: -750, w: 100, h: 750, slippery: true, notIllusion1: true },
        { type: "block", x: -2700, y: -100, w: 1200, h: 100, changeToSlippery: true, illusion3Push: { h: 1 } },
        { type: "block", x: -1600, y: -100, w: 300, h: 100, notIllusion1: true },
        { type: "block", x: -1600, y: -1000, w: 100, h: 300, slippery: true, notIllusion1: true, alpha: 0 },
        { type: "block", x: -1600, y: -750, w: 100, h: 550, slippery: true, notIllusion1: true },
        { type: "block", x: -1600, y: -200, w: 100, h: 100, slippery: true, notIllusion1: true, id: "stop jump block", alpha: 0, collide: false },
        { type: "block", x: -1800, y: -1000, w: 100, h: 300, slippery: true, notIllusion1: true, alpha: 0 },
        { type: "block", x: -1800, y: -750, w: 100, h: 750, slippery: true, notIllusion1: true },
        { type: "block", x: -1800, y: -800, w: 500, h: 100.1, collide: false, notIllusion1: true },
        { type: "block", x: -3900, y: -1000, w: 2000, h: 800, slippery: true, illusion3Push: { y: -1 } },
        { type: "block", x: -3800, y: -500, w: 1000, h: 900, changeToSlippery: true, illusion3Push: { x: -1 } },
        { type: "block", x: -2900, y: -1000, w: 2000, h: 800, alpha: 0, collide: false, illusion1: true },
        { type: "block", x: -1400, y: -1000, w: 2000, h: 2000, alpha: 0, collide: false, illusion1: true },
        { type: "block", x: -2600, y: 3700, w: 400, h: 3800, illusion3: true },
        { type: "block", x: -3400, y: 5700, w: 400, h: 1800, illusion3: true },
        { type: "block", x: -4200, y: 7700, w: 2100, h: 2000, illusion3: true, slippery: true },
        { type: "block", x: -4300, y: 7000, w: 200, h: 3000, illusion3: true, slippery: true },
        { type: "block", x: -2700, y: 7400, w: 2000, h: 1000, illusion3: true, slippery: true },
        { type: "block", x: -3800, y: 6000, w: 600, h: 1500, illusion3: true },
        { type: "block", x: -10000, y: 5800, w: 7000, h: 1000, illusion3: true },
        { type: "block", x: -4900, y: 6600, w: 400, h: 1300, illusion3: true },
        { type: "block", x: -6700, y: 6600, w: 1000, h: 1700, illusion3: true },
        { type: "block", x: -5500, y: 7000, w: 400, h: 900, illusion3: true },
        { type: "block", x: -6200, y: 8100, w: 1100, h: 4000, illusion3: true },
        { type: "block", x: -4900, y: 8100, w: 700, h: 2000, illusion3: true },
        { type: "block", x: -5200, y: 8100, w: 400, h: 1300, illusion3: true, id: "crossroad block 1" },
        { type: "block", x: -5150, y: 6000, w: 350, h: 1900, illusion3: true, id: "crossroad block 1" },
        { type: "block", x: -5500, y: 7300, w: 400, h: 1000, collide: false, alpha: 0, id: "crossroad block 2" },
        { type: "block", x: -4900, y: 7300, w: 400, h: 1000, collide: false, alpha: 0, id: "crossroad block 2" },
        { type: "block", x: -5800, y: 7500, w: 400, h: 800, collide: false, alpha: 0, id: "crossroad block 2" },
        { type: "block", x: -4600, y: 7300, w: 400, h: 800, collide: false, alpha: 0, id: "crossroad block 2" },
        { type: "block", x: 113, y: -1000, w: 1000, h: 3000, collide: false, alpha: 0, t: true, slippery: true, id: "wall" },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, x: -3760, y: -86, w: 502, h: 502, speed: 1, turn: 72, angle: 2933, period: { alwaysOn: true } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, x: -3300, y: 100, w: 180, h: 180, speed: -1, turn: -145, angle: 11, period: { time: 268, changeRange: 20, offset: 100, offTime: 66 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, x: -3400, y: 230, w: 200, h: 200, speed: 1.574, turn: 145, angle: 11, period: { time: 268, changeRange: 20, offset: 278, offTime: 66 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, x: -3150, y: -50, w: 280, h: 280, speed: 1.074, turn: 96, angle: 166, period: { time: 370, changeRange: 20, offset: 373, offTime: 117 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, id: "red cube delayed lava", x: -3100, y: -320, w: 406, h: 406, speed: -0.769, turn: -69, angle: 34, period: { time: 310, changeRange: 20, offset: 213, offTime: 75 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, x: -2950, y: 220, w: 90, h: 90, speed: -1.906, turn: -171, angle: 342, period: { time: 383, changeRange: 20, offset: 32, offTime: 99 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, id: "red cube absent lava", x: -2680, y: 173, w: 157, h: 157, speed: 1.806, turn: 171, angle: 100, period: { time: 383, changeRange: 20, offset: 180, offTime: 99 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, x: -2580, y: 133, w: 180, h: 180, speed: -1, turn: -171, angle: 100, period: { time: 383, changeRange: 20, offset: 150, offTime: 99 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, x: -2400, y: 0, w: 110, h: 110, speed: -1.33, turn: -141, angle: 202, period: { time: 217, changeRange: 20, offset: 106, offTime: 53 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, x: -2460, y: 171, w: 100, h: 100, speed: 1.573, turn: 141, angle: 202, period: { time: 217, changeRange: 20, offset: 206, offTime: 53 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, x: -2100, y: 0, w: 300, h: 300, speed: -1, turn: -100, angle: 351, period: { time: 500, changeRange: 20, offset: 20, offTime: 87 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, x: -2240, y: 127, w: 160, h: 160, speed: 0.688, turn: 61, angle: 351, period: { time: 354, changeRange: 20, offset: 20, offTime: 87 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, x: -2000, y: 140, w: 50, h: 50, speed: 0.98, turn: 100, angle: 301, period: { time: 304, changeRange: 20, offset: 100, offTime: 80 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, x: -2050, y: 240, w: 60, h: 60, speed: 0.98, turn: 100, angle: 301, period: { time: 304, changeRange: 20, offset: 200, offTime: 80 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, x: -1900, y: 136, w: 186, h: 186, speed: -1.22, turn: -110, angle: 29, period: { time: 378, changeRange: 20, offset: 188, offTime: 101 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, x: -1700, y: -106, w: 186, h: 186, speed: 1, turn: 110, angle: 29, period: { time: 300, changeRange: 20, offset: 100, offTime: 90 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, x: -2200, y: -230, w: 276, h: 276, speed: -0.9, turn: -130, angle: 0, period: { time: 350, changeRange: 20, offset: 150, offTime: 110 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, x: -1680, y: 150, w: 100, h: 100, speed: -0.603, turn: -54, angle: 38, period: { time: 355, changeRange: 20, offset: 295, offTime: 100 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, x: -1500, y: 206, w: 105, h: 105, speed: 0.801, turn: 72, angle: 115, period: { time: 275, changeRange: 20, offset: 328, offTime: 100 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, x: -1360, y: 119, w: 78, h: 78, speed: 1.415, turn: 127, angle: 112, period: { time: 357, changeRange: 20, offset: 95, offTime: 118 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, x: -1140, y: 250, w: 65, h: 65, speed: -1.6854, turn: -151, angle: 160, period: { time: 345, changeRange: 20, offset: 267, offTime: 70 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, x: -920, y: 125, w: 54, h: 54, speed: 0.543, turn: 180, angle: 156, period: { time: 246, changeRange: 20, offset: 304, offTime: 54 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout: true, x: -3740, y: 650, w: 130, h: 130, speed: -0.8, turn: -80, angle: 202, period: { time: 202, changeRange: 20, offset: 195, offTime: 40 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout: true, x: -3650, y: 900, w: 150, h: 150, speed: 1.193, turn: 107, angle: 202, period: { time: 202, changeRange: 20, offset: 50, offTime: 40 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout: true, x: -3600, y: 629, w: 300, h: 300, speed: 1.09, turn: 98, angle: 142, period: { time: 350, changeRange: 20, offset: 56, offTime: 50 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout: true, x: -3440, y: 832, w: 133, h: 133, speed: -1.193, turn: -107, angle: 202, period: { time: 302, changeRange: 20, offset: 195, offTime: 73 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout2: true, x: -3230, y: 908, w: 300, h: 300, speed: -1.42, turn: -66, angle: 98, period: { alwaysOn: true } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout: true, x: -2700, y: 1108, w: 200, h: 200, speed: -1.42, turn: -66, angle: 98, period: { alwaysOn: true } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout: true, x: -2800, y: 1008, w: 170, h: 170, speed: 1.32, turn: -66, angle: 98, period: { alwaysOn: true } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout: true, x: -2570, y: 1208, w: 250, h: 250, speed: 1.32, turn: -66, angle: 98, period: { alwaysOn: true } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout: true, x: -3600, y: 1108, w: 200, h: 200, speed: -1.42, turn: -66, angle: 98, period: { alwaysOn: true } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout: true, x: -3500, y: 1008, w: 170, h: 170, speed: 1.32, turn: -66, angle: 98, period: { alwaysOn: true } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout: true, x: -3770, y: 1208, w: 250, h: 250, speed: 1.32, turn: -66, angle: 98, period: { alwaysOn: true } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout2: true, x: -3210, y: 458, w: 250, h: 250, speed: -1.42, turn: -66, angle: 98, startRange: -1000, endRange: 1000, id: "hole in floor" },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout2: true, x: -3230, y: 658, w: 300, h: 300, speed: 1.42, turn: 66, angle: 98, startRange: -1000, endRange: 1000, id: "hole in floor 2" },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout: true, x: -2770, y: 654, w: 250, h: 250, speed: 0.66, turn: 59, angle: 185, period: { time: 399, changeRange: 20, offset: 16, offTime: 92 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout: true, x: -2900, y: 864, w: 180, h: 180, speed: 0.66, turn: 59, angle: 185, period: { time: 399, changeRange: 20, offset: 200, offTime: 92 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout: true, x: -2820, y: 600, w: 90, h: 90, speed: -1.936, turn: -174, angle: 31, period: { time: 180, changeRange: 20, offset: 50, offTime: 40 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout: true, x: -2790, y: 800, w: 69, h: 69, speed: -1.936, turn: -174, angle: 31, period: { time: 214, changeRange: 20, offset: 228, offTime: 83 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout: true, x: -2680, y: 882, w: 128, h: 128, speed: -1.7192, turn: -154, angle: 35, period: { time: 255, changeRange: 20, offset: 206, offTime: 68 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout: true, x: -2570, y: 644, w: 120, h: 120, speed: -1.496, turn: -134, angle: 309, period: { time: 262, changeRange: 20, offset: 173, offTime: 53 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout: true, x: -2460, y: 699, w: 73, h: 73, speed: 1.201, turn: 108, angle: 162, period: { time: 391, changeRange: 20, offset: 11, offTime: 137 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout: true, x: -2380, y: 870, w: 120, h: 120, speed: -1, turn: -100, angle: 313, period: { time: 222, changeRange: 20, offset: 280, offTime: 51 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout: true, x: -2300, y: 900, w: 200, h: 200, speed: 0.833, turn: 75, angle: 313, period: { time: 222, changeRange: 20, offset: 338, offTime: 51 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout: true, x: -2240, y: 784, w: 62, h: 62, speed: 2.2, turn: 170, angle: 176, period: { time: 292, changeRange: 20, offset: 160, offTime: 64 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout: true, x: -2130, y: 614, w: 120, h: 120, speed: -1.214, turn: -109, angle: 20, period: { time: 326, changeRange: 20, offset: 387, offTime: 93 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout: true, x: -2020, y: 787, w: 140, h: 140, speed: 1.992, turn: 179, angle: 357, period: { time: 258, changeRange: 20, offset: 130, offTime: 77 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout: true, x: -1910, y: 749, w: 150, h: 150, speed: 1.375, turn: 123, angle: 21, period: { time: 258, changeRange: 20, offset: 165, offTime: 77 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout: true, x: -1700, y: 802, w: 73, h: 73, speed: -0.932, turn: -83, angle: 331, period: { time: 343, changeRange: 20, offset: 99, offTime: 70 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutout: true, x: -1500, y: 675, w: 90, h: 90, speed: 1.5, turn: 100, angle: 137, period: { time: 328, changeRange: 20, offset: 92, offTime: 30 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutoutEligible: true, x: -2965, y: 1060, w: 180, h: 180, speed: 0.8, turn: 180, angle: 156, period: { alwaysOn: true } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutoutEligible: true, x: -2825, y: 1120, w: 220, h: 220, speed: -0.9, turn: 180, angle: 156, period: { alwaysOn: true } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutoutEligible: true, x: -2725, y: 1320, w: 150, h: 150, speed: 1.2, turn: 180, angle: 156, period: { alwaysOn: true } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutoutEligible: true, x: -2645, y: 1350, w: 190, h: 190, speed: -0.9, turn: 180, angle: 156, period: { alwaysOn: true } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutoutEligible: true, x: -2545, y: 1380, w: 190, h: 190, speed: 0.7, turn: 180, angle: 156, period: { alwaysOn: true } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutoutEligible: true, x: -3365, y: 1100, w: 180, h: 180, speed: -0.8, turn: 180, angle: 156, period: { alwaysOn: true } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutoutEligible: true, x: -3550, y: 1130, w: 250, h: 250, speed: 1, turn: 180, angle: 156, period: { alwaysOn: true } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutoutEligible: true, x: -3700, y: 1280, w: 250, h: 250, speed: -0.8, turn: 180, angle: 156, period: { alwaysOn: true } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, cutoutEligible: true, x: -3850, y: 1300, w: 250, h: 250, speed: 0.5, turn: 180, angle: 156, period: { alwaysOn: true } },
        { type: "clue", x: -2780, y: 380, down: true, angle: 180, id: "red cube clue", color: { r: 255, g: 100, b: 100 }, t: true, air: true },
        { type: "phase in out", x: -2840, y: 220, w: 120, h: 120, t: true, alpha: 0, collide: false, noCollide: true, playerDistCheck: false, id: "red cube stable platform" },
        { type: "phase in out", x: -2630, y: 100, w: 50, h: 50, t: true, alpha: 0, collide: false, noCollide: true, deactivated: true, period: { time: 320, changeRange: 20, initialOffset: 120, offset: 0, offTime: 120 }, id: "red cube platform" },
        { type: "phase in out", x: -2500, y: 0, w: 50, h: 50, t: true, alpha: 0, collide: false, noCollide: true, deactivated: true, period: { time: 320, changeRange: 20, initialOffset: 80, offset: 0, offTime: 120 }, id: "red cube platform" },
        { type: "phase in out", x: -2300, y: -50, w: 50, h: 50, t: true, alpha: 0, collide: false, noCollide: true, deactivated: true, period: { time: 320, changeRange: 20, initialOffset: 40, offset: 0, offTime: 120 }, id: "red cube platform" },
        { type: "phase in out", x: -2500, y: -250, w: 50, h: 50, t: true, alpha: 0, collide: false, noCollide: true, deactivated: true, period: { time: 320, changeRange: 20, initialOffset: 0, offset: 0, offTime: 120 }, id: "red cube platform" },
        { type: "phase in out", x: -2700, y: -500, w: 120, h: 120, t: true, alpha: 0, collide: false, noCollide: true, playerDistCheck: false, id: "red cube stable platform" },
        { type: "phase in out ornament", lava: true, alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, id: "red cube extra lava", x: -3300, y: -800, w: 500, h: 500, speed: 0.769, turn: 70, angle: 34, period: { alwaysOff: true } },
        { type: "phase in out ornament", lava: true, alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, id: "red cube extra lava", x: -1800, y: -300, w: 300, h: 300, speed: 0.769, turn: 70, angle: 34, period: { alwaysOff: true } },
        { type: "phase in out", x: -2500, y: -600, w: 50, h: 50, t: true, alpha: 0, collide: false, noCollide: true, deactivated: true, period: { time: 200, changeRange: 20, initialOffset: 150, offset: 0, offTime: 80 }, id: "red cube platform" },
        { type: "phase in out", x: -2400, y: -600, w: 50, h: 50, t: true, alpha: 0, collide: false, noCollide: true, deactivated: true, period: { time: 200, changeRange: 20, initialOffset: 100, offset: 0, offTime: 80 }, id: "red cube platform" },
        { type: "phase in out", x: -2300, y: -600, w: 50, h: 50, t: true, alpha: 0, collide: false, noCollide: true, deactivated: true, period: { time: 200, changeRange: 20, initialOffset: 50, offset: 0, offTime: 80 }, id: "red cube platform" },
        { type: "phase in out", x: -2200, y: -600, w: 50, h: 50, t: true, alpha: 0, collide: false, noCollide: true, deactivated: true, period: { time: 200, changeRange: 20, initialOffset: 0, offset: 0, offTime: 80 }, id: "red cube platform" },
        { type: "phase in out", x: -2100, y: -600, w: 50, h: 50, t: true, alpha: 0, collide: false, noCollide: true, deactivated: true, period: { time: 200, changeRange: 20, initialOffset: 150, offset: 0, offTime: 80 }, id: "red cube platform" },
        { type: "phase in out", x: -2000, y: -600, w: 50, h: 50, t: true, alpha: 0, collide: false, noCollide: true, deactivated: true, period: { time: 200, changeRange: 20, initialOffset: 100, offset: 0, offTime: 80 }, id: "red cube platform" },
        { type: "phase in out", x: -1900, y: -600, w: 50, h: 50, t: true, alpha: 0, collide: false, noCollide: true, deactivated: true, period: { time: 200, changeRange: 20, initialOffset: 50, offset: 0, offTime: 80 }, id: "red cube platform" },
        { type: "phase in out", x: -1800, y: -600, w: 50, h: 50, t: true, alpha: 0, collide: false, noCollide: true, deactivated: true, period: { time: 200, changeRange: 20, initialOffset: 0, offset: 0, offTime: 80 }, id: "red cube platform" },
        { type: "phase in out", x: -1700, y: -600, w: 120, h: 120, t: true, alpha: 0, collide: false, noCollide: true, playerDistCheck: false, id: "red cube stable platform" },
        { type: "phase in out ornament", lava: true, alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, id: "red cube extra lava", x: -1350, y: -1000, w: 700, h: 700, speed: 0.8, turn: 70, angle: 34, period: { alwaysOff: true } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, lavaCutout: true, id: "red cube extra hole", x: -1600, y: -800, w: 300, h: 300, speed: 1, turn: 75, angle: 100, deactivated: true, period: { time: 300, changeRange: 20, initialOffset: 200, offset: 0, offTime: 80 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, lavaCutout: true, id: "red cube extra hole", x: -1400, y: -850, w: 300, h: 300, speed: -1, turn: -75, angle: 200, deactivated: true, period: { time: 300, changeRange: 20, initialOffset: 160, offset: 0, offTime: 80 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, lavaCutout: true, id: "red cube extra hole", x: -1200, y: -900, w: 300, h: 300, speed: 1, turn: 75, angle: 300, deactivated: true, period: { time: 300, changeRange: 20, initialOffset: 120, offset: 0, offTime: 80 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, lavaCutout: true, id: "red cube extra hole", x: -1000, y: -800, w: 300, h: 300, speed: -1, turn: -75, angle: 40, deactivated: true, period: { time: 300, changeRange: 20, initialOffset: 80, offset: 0, offTime: 80 } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, lavaCutout: true, id: "red cube extra hole", x: -750, y: -750, w: 350, h: 350, speed: 1, turn: 75, angle: 140, deactivated: true, period: { time: 300, changeRange: 20, initialOffset: 40, offset: 0, offTime: 80 } },
        { type: "phase in out", alpha: 0, noCollide: true, t: true, collide: false, id: "red cube platform", x: -1400, y: -650, w: 50, h: 50, deactivated: true, period: { time: 300, changeRange: 20, initialOffset: 220, offset: 0, offTime: 140 } },
        { type: "phase in out", alpha: 0, noCollide: true, t: true, collide: false, id: "red cube platform", x: -1200, y: -700, w: 50, h: 50, deactivated: true, period: { time: 300, changeRange: 20, initialOffset: 180, offset: 0, offTime: 140 } },
        { type: "phase in out", alpha: 0, noCollide: true, t: true, collide: false, id: "red cube platform", x: -1000, y: -680, w: 50, h: 50, deactivated: true, period: { time: 300, changeRange: 20, initialOffset: 140, offset: 0, offTime: 140 } },
        { type: "phase in out", alpha: 0, noCollide: true, t: true, collide: false, id: "red cube platform", x: -800, y: -600, w: 50, h: 50, deactivated: true, period: { time: 300, changeRange: 20, initialOffset: 100, offset: 0, offTime: 140 } },
        { type: "phase in out", alpha: 0, noCollide: true, t: true, collide: false, id: "red cube platform", x: -650, y: -500, w: 50, h: 50, deactivated: true, period: { time: 300, changeRange: 20, initialOffset: 60, offset: 0, offTime: 140 } },
        { type: "phase in out", alpha: 0, noCollide: true, t: true, collide: false, id: "red cube platform", x: -450, y: -550, w: 50, h: 50, deactivated: true, period: { time: 300, changeRange: 20, initialOffset: 20, offset: 0, offTime: 140 } },
        { type: "platform", noDoubleJump: true, alpha: 0, noAlpha: true, noCollide: true, t: true, collide: false, id: "red cube block", x: -475, y: -670, w: 100, h: 10 },
        { type: "phase in out", x: -350, y: -850, w: 50, h: 50, t: true, alpha: 0, collide: false, noCollide: true, deactivated: true, period: { time: 220, changeRange: 20, initialOffset: 0, offset: 0, offTime: 60 }, id: "red cube platform" },
        { type: "phase in out", x: -550, y: -950, w: 50, h: 50, t: true, alpha: 0, collide: false, noCollide: true, deactivated: true, period: { time: 220, changeRange: 20, initialOffset: 110, offset: 0, offTime: 60 }, id: "red cube platform" },
        { type: "phase in out", x: -450, y: -1150, w: 50, h: 50, t: true, alpha: 0, collide: false, noCollide: true, deactivated: true, period: { time: 220, changeRange: 20, initialOffset: 0, offset: 0, offTime: 60 }, id: "red cube platform" },
        { type: "phase in out", x: -700, y: -1200, w: 50, h: 50, t: true, alpha: 0, collide: false, noCollide: true, deactivated: true, period: { time: 220, changeRange: 20, initialOffset: 110, offset: 0, offTime: 60 }, id: "red cube platform" },
        { type: "phase in out", x: -900, y: -1400, w: 50, h: 50, t: true, alpha: 0, collide: false, noCollide: true, deactivated: true, period: { time: 220, changeRange: 20, initialOffset: 0, offset: 0, offTime: 60 }, id: "red cube platform" },
        { type: "phase in out", x: -1150, y: -1600, w: 50, h: 50, t: true, alpha: 0, collide: false, noCollide: true, deactivated: true, period: { time: 220, changeRange: 20, initialOffset: 110, offset: 0, offTime: 60 }, id: "red cube platform" },
        { type: "phase in out", x: -805, y: -1700, w: 50, h: 50, t: true, alpha: 0, collide: false, noCollide: true, deactivated: true, period: { time: 220, changeRange: 20, initialOffset: 0, offset: 0, offTime: 60 }, id: "red cube platform" },
        { type: "phase in out ornament", lava: true, alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, id: "red cube extra lava", x: -1500, y: -400, w: 600, h: 600, speed: -1.2, turn: -70, angle: 34, period: { alwaysOff: true } },
        { type: "phase in out ornament", lava: true, alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, id: "red cube extra lava", x: -1000, y: -300, w: 600, h: 600, speed: 0.9, turn: 70, angle: 34, period: { alwaysOff: true } },
        { type: "phase in out ornament", lava: true, alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, id: "red cube extra lava", x: -500, y: -300, w: 800, h: 800, speed: -1.1, turn: -70, angle: 34, period: { alwaysOff: true } },
        { type: "phase in out ornament", lava: true, alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, id: "red cube extra lava", x: -200, y: -800, w: 900, h: 900, speed: 1.2, turn: 70, angle: 34, period: { alwaysOff: true } },
        { type: "phase in out ornament", lava: true, alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, id: "red cube extra lava", x: -100, y: -1300, w: 800, h: 800, speed: -0.9, turn: -70, angle: 34, period: { alwaysOff: true } },
        { type: "phase in out ornament", lava: true, alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, id: "red cube extra lava", x: -100, y: -2000, w: 800, h: 800, speed: 0.9, turn: 70, angle: 34, period: { alwaysOff: true } },
        { type: "phase in out ornament", lava: true, alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, id: "red cube extra lava", x: -600, y: -2100, w: 600, h: 600, speed: -1.3, turn: -70, angle: 34, period: { alwaysOff: true } },
        { type: "phase in out ornament", lava: true, alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, id: "red cube extra lava", x: -560, y: -1600, w: 300, h: 300, speed: 1.3, turn: 70, angle: 34, period: { alwaysOff: true } },
        { type: "phase in out ornament", lava: true, alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, id: "red cube extra lava", x: -500, y: -1370, w: 180, h: 180, speed: -2, turn: -70, angle: 34, period: { alwaysOff: true } },
        { type: "phase in out ornament", lava: true, alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, id: "red cube extra lava", x: -1250, y: -1845, w: 200, h: 200, speed: 2.5, turn: 70, angle: 34, period: { alwaysOff: true } },
        { type: "phase in out ornament", lava: true, alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, id: "red cube extra lava", x: -1250, y: -1500, w: 480, h: 480, speed: -1.5, turn: -70, angle: 34, period: { alwaysOff: true } },
        { type: "phase in out ornament", lava: true, alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, id: "red cube extra lava", x: -1770, y: -1800, w: 480, h: 480, speed: 1.5, turn: 70, angle: 34, period: { alwaysOff: true } },
        { type: "phase in out ornament", lava: true, alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, id: "red cube extra lava", x: -1550, y: -1400, w: 300, h: 300, speed: -1.8, turn: 70, angle: 34, period: { alwaysOff: true } },
        { type: "phase in out ornament", lava: true, alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, id: "red cube extra lava", x: -1850, y: -2600, w: 800, h: 800, speed: -1.5, turn: -70, angle: 34, period: { alwaysOff: true } },
        { type: "phase in out ornament", lava: true, alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, id: "red cube extra lava", x: -500, y: -2600, w: 700, h: 700, speed: 1.5, turn: 70, angle: 34, period: { alwaysOff: true } },
        { type: "phase in out ornament", lava: true, alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, id: "red cube extra lava", x: -600, y: -1850, w: 200, h: 200, speed: 2, turn: 70, angle: 34, period: { alwaysOff: true } },
        { type: "phase in out ornament", lava: true, alpha: 0, noCollide: true, t: true, collide: false, cutout3: true, id: "red cube extra lava", x: -1100, y: -2200, w: 200, h: 200, speed: 2, turn: 70, angle: 34, period: { alwaysOff: true } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, lavaCutout: true, id: "red cube extra hole", x: -900, y: -1400, w: 300, h: 300, speed: -1.5, turn: 75, angle: 100, deactivated: true, period: { alwaysOn: true } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, lavaCutout: true, id: "red cube extra hole", x: -900, y: -1500, w: 200, h: 200, speed: -1.5, turn: 75, angle: 100, deactivated: true, period: { alwaysOn: true } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, lavaCutout: true, id: "red cube extra hole", x: -1050, y: -1650, w: 300, h: 300, speed: -1.5, turn: 75, angle: 100, deactivated: true, period: { alwaysOn: true } },
        { type: "phase in out ornament", alpha: 0, noCollide: true, t: true, collide: false, lavaCutout: true, id: "red cube extra hole", x: -1200, y: -1590, w: 400, h: 400, speed: -1.5, turn: -75, angle: 100, deactivated: true, period: { alwaysOn: true } },
        { type: "clue", x: -780, y: -1850, down: true, angle: 180, id: "red cube clue 2", color: { r: 255, g: 100, b: 100 }, t: true, air: true, alpha: 0, noAlpha: true },
        { type: "cube", x: -780, y: -2300, id: "red cube", t: true, red: true, alpha: 0, noAlpha: true },
        { type: "block", x: -800, y: 560, w: 3000, h: 3000, collide: false, alpha: 0, t: true, cutoutEligible: true },
        { type: "block", x: -4200, y: 560, w: 4000, h: 600, t: true, slippery: true, cutoutEligible: true, id: "false bridge" },
        { type: "block", x: -2700, y: 1159, w: 2500, h: 202, t: true, collide: false, noCollide: true, cutoutEligible: true },
        { type: "block", x: -5950, y: 1159, w: 2500, h: 202, t: true, collide: false, noCollide: true, cutoutEligible: true },
        { type: "block", x: -2550, y: 1360, w: 2500, h: 150, t: true, collide: false, noCollide: true, cutoutEligible: true },
        { type: "block", x: -6100, y: 1360, w: 2500, h: 150, t: true, collide: false, noCollide: true, cutoutEligible: true },
        { type: "block", x: -3400, y: 2000, w: 600, h: 600, t: true, id: "planet layer 1" },
        { type: "block", x: -3351, y: 2000, w: 201, h: 50, t: true, id: "layer 1 border" },
        { type: "block", x: -3050, y: 2000, w: 201, h: 50, t: true, id: "layer 1 border" },
        { type: "block", x: -3351, y: 2550, w: 201, h: 50, t: true, id: "layer 1 border" },
        { type: "block", x: -3050, y: 2550, w: 201, h: 50, t: true, id: "layer 1 border" },
        { type: "block", x: -3400, y: 2000, w: 50, h: 250, t: true, id: "layer 1 border" },
        { type: "block", x: -3400, y: 2350, w: 50, h: 250, t: true, id: "layer 1 border" },
        { type: "block", x: -2850, y: 2000, w: 50, h: 250, t: true, id: "layer 1 border" },
        { type: "block", x: -2850, y: 2350, w: 50, h: 250, t: true, id: "layer 1 border" },
        { type: "block", x: -3300, y: 2100, w: 400, h: 400, t: true, id: "planet layer 2" },
        { type: "block", x: -3251, y: 2100, w: 101, h: 50, t: true, id: "layer 2 border" },
        { type: "block", x: -3050, y: 2100, w: 101, h: 50, t: true, id: "layer 2 border" },
        { type: "block", x: -3251, y: 2450, w: 101, h: 50, t: true, id: "layer 2 border" },
        { type: "block", x: -3050, y: 2450, w: 101, h: 50, t: true, id: "layer 2 border" },
        { type: "block", x: -3300, y: 2100, w: 50, h: 150, t: true, id: "layer 2 border" },
        { type: "block", x: -3300, y: 2350, w: 50, h: 150, t: true, id: "layer 2 border" },
        { type: "block", x: -2950, y: 2100, w: 50, h: 150, t: true, id: "layer 2 border" },
        { type: "block", x: -2950, y: 2350, w: 50, h: 150, t: true, id: "layer 2 border" },
        { type: "block", x: -3200, y: 2200, w: 200, h: 200, t: true, id: "planet layer 3" },
        { type: "block", x: -3171, y: 2200, w: 46, h: 30, t: true, id: "layer 3 border" },
        { type: "block", x: -3075, y: 2200, w: 46, h: 30, t: true, id: "layer 3 border" },
        { type: "block", x: -3171, y: 2370, w: 46, h: 30, t: true, id: "layer 3 border" },
        { type: "block", x: -3075, y: 2370, w: 46, h: 30, t: true, id: "layer 3 border" },
        { type: "block", x: -3200, y: 2200, w: 30, h: 75, t: true, id: "layer 3 border" },
        { type: "block", x: -3200, y: 2325, w: 30, h: 75, t: true, id: "layer 3 border" },
        { type: "block", x: -3030, y: 2200, w: 30, h: 75, t: true, id: "layer 3 border" },
        { type: "block", x: -3030, y: 2325, w: 30, h: 75, t: true, id: "layer 3 border" },
        { type: "lava", x: -2950, y: 2900, w: 2100, h: 2000, t: true, id: "shortcut lava" },
        { type: "lava", x: -3150, y: 4200, w: 100, h: 100, t: true, id: "shortcut lava" },
        { type: "lava", x: -3050, y: 3700, w: 100, h: 100, t: true, id: "shortcut lava" },
        { type: "lava", x: -3250, y: 3700, w: 100, h: 100, t: true, id: "shortcut lava" },
        { type: "clue", x: -3100, y: 3750, id: "ultra shortcut clue 2", proximity: 1, radius: 1, ultra: true, air: true, angle: 180, t: true, alpha: 0 },
        { type: "lava", x: -3150, y: 3200, w: 100, h: 100, t: true, id: "shortcut lava" },
        { type: "lava", x: -5350, y: 2900, w: 2100, h: 2000, t: true, id: "shortcut lava" },
        { type: "block", drawType: "glass", x: -3400, y: 1300, w: 600, h: 700, t: true, id: "gravity down", noCollide: true, noAlpha: true },
        { type: "block", drawType: "glass", x: -3400, y: 2600, w: 600, h: 700, t: true, id: "gravity up", noCollide: true, noAlpha: true },
        { type: "block", drawType: "glass", x: -4100, y: 2000, w: 700, h: 600, t: true, id: "gravity right", noCollide: true, noAlpha: true },
        { type: "block", drawType: "glass", x: -2800, y: 2000, w: 700, h: 600, t: true, id: "gravity left", noCollide: true, noAlpha: true },
        { type: "cube", x: -4800, y: 400, id: "blue cube", illusion3: true },
        { type: "clue", x: -3200, y: 400, id: "blue cube pre clue", down: true, angle: 90, proximity: 1, radius: 1, illusion3: true },
        { type: "clue", x: -3600, y: 400, id: "blue cube lead clue", down: true, angle: 90, proximity: 1, radius: 1, illusion3: true },
        { type: "clue", x: -4000, y: 400, id: "blue cube lead clue", down: true, angle: 90, proximity: 1, radius: 1, illusion3: true },
        { type: "clue", x: -4400, y: 400, id: "blue cube lead clue", down: true, angle: 90, proximity: 1, radius: 1, illusion3: true },
        { type: "clue", x: -4800, y: 320, id: "blue cube clue", down: true, proximity: 1, radius: 1, illusion3: true }
    ],
    triggers: [
        {
            name: "teleport 1",
            check: function () {
                //return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.x < -1080;
            },
            stop: function () {
                if (game.level.triggers.tripped("teleport 2")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.x < -1080;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.y = -600 - (player.y - 60);
                player.ymove = -player.ymove;
                player.xmove = -player.xmove;
                player.x++;
                player.updateAngle = 180;
                player.swapControls = {
                    left: "left",
                    right: "right",
                    top: "top",
                    bottom: "bottom"
                }
                player.eyeAngleTarget = 180;
            },
            untrip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.y = 60 - (player.y + 600);
                player.ymove = -player.ymove;
                player.xmove = -player.xmove;
                player.x++;
                player.updateAngle = 0;
                player.swapControls = false;
                player.eyeAngleTarget = 0;
            }
        },
        {
            name: "teleport 2",
            check: function () {
                if (!game.level.triggers.tripped("teleport 1")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.x > -380;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.x = -1250;
                player.y = -740;
                player.positionHistory = [];
                player.ymove = 8;
                player.xmove = 0;
                player.updateAngle = 0;
                player.swapControls = false;
                player.eyeAngleTarget = 0;
            }
        },
        {
            name: "show shortcut clue",
            check: function () {
                if (!game.level.triggers.tripped("teleport 2")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y > -500;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.alpha = 0;
                o.decay = -0.1;
            }
        },
        {
            name: "hide shortcut clue",
            check: function () {
                if (!game.level.triggers.tripped("show shortcut clue")) return false;
                if (game.level.triggers.tripped("shortcut")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y == 60;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.alpha = 1;
                o.decay = 0.1;
                for (var o of game.objects.objects.filter(e => e.id == "shortcut lava")) o.delete = true;
            }
        },
        {
            name: "shortcut",
            check: function () {
                if (game.level.triggers.tripped("hide shortcut clue")) return false;
                if (!game.level.triggers.tripped("show shortcut clue")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                var dist = Math.abs(player.y + player.h / 2 - o.y);
                if (dist > 40) return false;
                return game.input.up && game.input.upHold < 20;
            },
            stop: function () {
                let player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return false;
            },
            trip: function () {
                game.level.discoverShortcut();
                game.background.effect.start("green");
                var o = game.objects.objects.find(e => e.id == "shortcut clue");
                o.activated = true;
                var player = game.objects.objects.find(e => e.type == "player");
                player.ymove = -10;
                player.updateAngle = 180;
                player.eyeAngleTarget = 180;
                player.eyeAngle = 180;
                player.swapControls = { left: "left", right: "right", up: "up", bottom: "bottom" };
                player.wallJumpDisabled = true;

                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue 1");
                if (!o.peeked) {
                    o.peeked = true;
                    o.alpha = 1;
                }
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue 2");
                if (!o.peeked) {
                    o.peeked = true;
                    o.alpha = 1;
                }

                game.cam.viewportBoundary = false;
            },
            untrip: function () {
                game.background.effect.end("green");
            }
        },
        {
            name: "shortcut teleport",
            check: function () {
                if (!game.level.triggers.tripped("shortcut")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y < -1500;
            },
            trip: function () {
                //frameRate = 10;
                var player = game.objects.objects.find(e => e.type == "player");
                player.emitParticles = false;
                player.wallJumpDisabled = false;
                player.x -= 1850;
                player.y += 5500;
                for (var o of player.positionHistory) {
                    o.x -= 1850;
                    o.y += 5500;
                }
                game.cam.x -= 1850;
                game.cam.y += 5465;
                game.level.playerControlDelay = 0;
                for (var o of game.objects.objects) {
                    if (o.type == "player") continue;
                    if (o.id == "ultra shortcut clue 2") continue;
                    if (o.t) {
                        o.alpha = 1;
                        if (o.noAlpha) o.alpha = 0;
                        o.collide = true;
                        if (o.noCollide) o.collide = false;
                    } else {
                        //o.delete = true;
                        //o.alpha = 0;
                    }
                }
                game.cam.y += 35;
                game.backgroundOffset.x += -80;
                game.backgroundOffset.y += 200;
                for (var o of game.objects.objects.filter(e => e.id && e.id.includes("layer"))) {
                    o.type = "lava";
                    o.drawType = "lava";
                }

                game.cam.offset = { x: 0, y: 0 };
            }
        },
        {
            name: "ultra shortcut",
            check: function () {
                if (!game.level.triggers.tripped("shortcut teleport")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue 2");
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 80) return false;
                if (!game.input.down || game.input.downStart > 20) return false;
                return true;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return false;
            },
            trip: function () {
                game.level.discoverUltraShortcut();
                game.background.effect.start("magenta");
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue 2");
                o.activated = true;
            },
            untrip: function () {
                game.background.effect.end("magenta");
                var o = game.objects.objects.find(e => e.id == "ultra shortcut clue 2");
                o.alpha = 1;
                o.decay = 0.1;
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                var dist = distTo(player.x + player.w / 2, player.y + player.h / 2, -3100, 2300);
                if (dist < 100) return;
                var percent = easeInOut((dist - 200) / 400);
                if (game.input.left && !game.input.right) {
                    player.xmove = (0.5 + 10 * percent);
                } else if (game.input.right && !game.input.left) {
                    player.xmove = -(0.5 + 10 * percent);
                } else {
                    player.xmove = 0;
                }
                player.ymove = -30;
            }
        },
        {
            name: "teleport 3",
            check: function () {
                if (game.level.triggers.tripped("shortcut")) return false;
                if (!game.level.triggers.tripped("teleport 2")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.x < -1870;
            },
            stop: function () {
                if (game.level.triggers.tripped("teleport 4")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y < -740;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.x = -1300;
                player.y = -740;
                player.positionHistory = [];
                var xmove = player.xmove;
                var ymove = player.ymove;
                player.ymove = -xmove;
                player.xmove = -ymove;
                player.updateAngle = 90;
                player.swapControls = {
                    right: "left",
                    left: "right",
                    top: "top",
                    bottom: "bottom"
                };
                player.eyeAngleTarget = 90;
                player.wallJumpDisabled = true;
            },
            untrip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.x = -1870;
                player.y = 60;
                player.positionHistory = [];
                var xmove = player.xmove;
                var ymove = player.ymove;
                player.ymove = -xmove;
                player.xmove = -ymove;
                player.updateAngle = 0;
                player.swapControls = false;
                player.eyeAngleTarget = 0;
                player.wallJumpDisabled = false;
            }
        },
        {
            name: "teleport 4",
            check: function () {
                if (!game.level.triggers.tripped("teleport 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.x < -2100;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.x = -1480;
                player.y = -740;
                player.againstBottom.current = false;
                player.againstBottom.last = 10000;
                player.againstBottom.time = 0;
                player.positionHistory = [];
                var xmove = player.xmove;
                var ymove = player.ymove;
                player.ymove = -xmove;
                player.xmove = -ymove;
                player.updateAngle = 0;
                player.swapControls = false;
                player.eyeAngleTarget = 0;
            }
        },
        {
            name: "jump 1",
            check: function () {
                if (!game.level.triggers.tripped("teleport 4")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.x > -1640) return false;
                if (player.y > -150 && game.input.up) return true;
                return false;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 180;
                player.ymove = -8;
                player.swapControls = {
                    left: "right",
                    right: "left",
                    up: "up",
                    bottom: "bottom"
                }
                player.wallJumpDisabled = true;
                if (player.y == -140) game.soundEffects.jump();
                var o = game.objects.objects.find(e => e.id == "stop jump block");
                o.collide = true;
            }
        },
        {
            name: "teleport 5",
            check: function () {
                if (!game.level.triggers.tripped("jump 1")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y < -740;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 0;
                player.ymove = 8;
                player.swapControls = false;
                player.x -= 200;
            }
        },
        {
            name: "illusion 1",
            check: function () {
                if (!game.level.triggers.tripped("teleport 5")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y > -140;
            },
            stop: function () {
                if (game.level.triggers.tripped("illusion 2")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y < -140 && player.x < -2700;
            },
            trip: function () {
                for (var o of game.objects.objects.filter(e => e.notIllusion1)) {
                    o.alpha = 0;
                    o.collide = false;
                }
                for (var o of game.objects.objects.filter(e => e.illusion1)) {
                    o.alpha = 1;
                    o.collide = true;
                }
                var player = game.objects.objects.find(e => e.type == "player");
                player.wallJumpDisabled = false;
            },
            untrip: function () {
                for (var o of game.objects.objects.filter(e => e.notIllusion1)) {
                    o.alpha = 1;
                    o.collide = true;
                }
                for (var o of game.objects.objects.filter(e => e.illusion1)) {
                    o.alpha = 0;
                    o.collide = false;
                }
            }
        },
        {
            name: "illusion 2",
            check: function () {
                if (!game.level.triggers.tripped("illusion 1")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y < -140 && player.x > -1700;
            },
            stop: function () {
                if (game.level.triggers.tripped("illusion 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y > -140 && player.x > -1700;
            },
            trip: function () {
                for (var o of game.objects.objects.filter(e => e.changeToSlippery)) {
                    o.slippery = true;
                }
            },
            untrip: function () {
                for (var o of game.objects.objects.filter(e => e.changeToSlippery)) {
                    o.slippery = false;
                }
            }
        },
        {
            name: "illusion 3 push",
            check: function () {
                if (!game.level.triggers.tripped("illusion 2")) return false;
                if (game.level.triggers.tripped("illusion 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y > -140 && player.x < -2700;
            },
            stop: function () {
                return game.level.triggers.tripped("illusion 3")
            },
            trip: function () {
                for (var o of game.objects.objects.filter(e => e.illusion3Push)) {
                    o.originX = o.x;
                    o.originY = o.y;
                    o.originW = o.w;
                    o.originH = o.h;
                }
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                var n = Math.min(Math.max(player.y, -140) + 140, 100);
                if (n > 30 && n < 40) {
                    game.soundEffects.switchGravity();
                }
                for (var o of game.objects.objects.filter(e => e.illusion3Push)) {
                    if (o.illusion3Push.x) o.x = o.originX + o.illusion3Push.x * n;
                    if (o.illusion3Push.y) o.y = o.originY + o.illusion3Push.y * n;
                    if (o.illusion3Push.w) o.w = o.originW + o.illusion3Push.w * n;
                    if (o.illusion3Push.h) o.h = o.originH + o.illusion3Push.h * n;
                }
            }
        },
        {
            name: "illusion 3",
            check: function () {
                //return true;
                if (!game.level.triggers.tripped("illusion 3 push")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y > -40 && player.x < -2700;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.emitParticles = false;
                player.controlDelay = 100;
                //player.y = -20;
                //player.x = -2600;
                for (var o of game.objects.objects) {
                    if (o.type == "player") continue;
                    if (o.illusion3) continue;
                    o.collide = false;
                    o.alpha = 0;
                    if (o.illusion3) {
                        o.collide = true;
                        o.alpha = 1;
                    }
                }
                for (var x = -3; x < 3; x++) {
                    for (var y = -3; y < 5; y++) {
                        var o = { type: "block", w: 200, h: 200, illusion3: true, slippery: true };
                        o.x = -2700 + x * 400 + y % 2 * 200;
                        o.y = -100 + y * 400;
                        if (y == 4) o.h = 6000;
                        if (x == -1 && y == 1) {
                            game.objects.objects.splice(game.objects.objects.length - 7, 0, {
                                type: "block",
                                illusion3: true,
                                x: -2700 + x * 400 + y % 2 * 200,
                                y: -100 + y * 400,
                                w: 200,
                                h: 200,
                                noCollide: true,
                                alpha: 0.15,
                                collide: false
                            });
                            var objects = [
                                {
                                    type: "block",
                                    slippery: true,
                                    illusion3: true,
                                    x: -2700 + x * 400 + y % 2 * 200,
                                    y: -100 + y * 400,
                                    w: 20,
                                    h: 200
                                },
                                {
                                    type: "block",
                                    slippery: true,
                                    illusion3: true,
                                    x: -2700 + x * 400 + y % 2 * 200 + 180,
                                    y: -100 + y * 400,
                                    w: 20,
                                    h: 200
                                },
                                {
                                    type: "block",
                                    illusion3: true,
                                    x: -2700 + x * 400 + y % 2 * 200 + 10,
                                    y: -100 + y * 400,
                                    w: 30,
                                    h: 200
                                },
                                {
                                    type: "block",
                                    illusion3: true,
                                    x: -2700 + x * 400 + y % 2 * 200 + 160,
                                    y: -100 + y * 400,
                                    w: 30,
                                    h: 200
                                },
                                {
                                    type: "block",
                                    slippery: true,
                                    illusion3: true,
                                    x: -2700 + x * 400 + y % 2 * 200,
                                    y: -100 + y * 400 + 160,
                                    w: 200,
                                    h: 40
                                },
                                {
                                    type: "block",
                                    id: "blue cube cover",
                                    slippery: true,
                                    illusion3: true,
                                    x: -2700 + x * 400 + y % 2 * 200,
                                    y: -100 + y * 400,
                                    w: 200,
                                    h: 200
                                }
                            ];
                            game.objects.objects.splice(game.objects.objects.length - 6, 0, ...objects);
                        } else {
                            game.objects.objects.splice(game.objects.objects.length - 6, 0, o);
                        }
                    }
                }
                for (var x = -2; x <= 2; x++) {
                    for (var y = -2; y <= 1; y++) {
                        if (!x && !y) continue;
                        var o = { type: "player copy" };
                        o.offsetX = x * 400 + y % 2 * 200;
                        o.offsetY = y * 400;
                        game.objects.objects.push(o);
                    }
                }
                game.cam.viewportBoundary = false;
                game.cam.offset = {
                    x: 0,
                    y: 0
                };
            }
        },
        {
            name: "teleport up",
            check: function () {
                if (game.level.triggers.tripped("fall in long pipes")) return false;
                if (!game.level.triggers.tripped("illusion 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.fallTimes > 3) return false;
                return player.y > 1060;
            },
            stop: function () {
                return true;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player.fallTimes) player.fallTimes = 0;
                player.fallTimes++;
                player.y -= 800;
                game.cam.y -= 800;
                for (var o of player.positionHistory) {
                    o.y -= 800;
                }
                game.backgroundOffset.y -= 800 * 0.8;
                if (game.backgroundOffset.y <= -700) {
                    game.backgroundPatternOffset.y += 0.5;
                }
                var o = game.objects.objects.find(e => e.id == "blue cube pre clue");
                o.y -= 800;
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                o.y -= 800;
                var o = game.objects.objects.find(e => e.id == "blue cube");
                o.y -= 800;
                for (var o of game.objects.objects.filter(e => e.id == "blue cube lead clue")) {
                    o.y -= 800;
                }
            }
        },
        {
            name: "teleport right",
            check: function () {
                if (game.level.triggers.tripped("fall in long pipes")) return false;
                if (!game.level.triggers.tripped("illusion 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.x < -3100;
            },
            stop: function () {
                return true;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.x += 400;
                game.cam.x += 400;
                for (var o of player.positionHistory) {
                    o.x += 400;
                }
                game.backgroundOffset.x += 400 * 0.8;
                if (game.backgroundOffset.x >= 700) {
                    game.backgroundPatternOffset.x -= 0.5;
                }
                var o = game.objects.objects.find(e => e.id == "blue cube pre clue");
                o.x += 400;
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                o.x += 400;
                var o = game.objects.objects.find(e => e.id == "blue cube");
                o.x += 400;
                for (var o of game.objects.objects.filter(e => e.id == "blue cube lead clue")) {
                    o.x += 400;
                }
            }
        },
        {
            name: "teleport left",
            check: function () {
                if (game.level.triggers.tripped("fall in long pipes")) return false;
                if (!game.level.triggers.tripped("illusion 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.x > -2700;
            },
            stop: function () {
                return true;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.x -= 400;
                game.cam.x -= 400;
                for (var o of player.positionHistory) {
                    o.x -= 400;
                }
                game.backgroundOffset.x -= 400 * 0.8;
                if (game.backgroundOffset.x <= -700) {
                    game.backgroundPatternOffset.x += 0.5;
                }
                var o = game.objects.objects.find(e => e.id == "blue cube pre clue");
                o.x -= 400;
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                o.x -= 400;
                var o = game.objects.objects.find(e => e.id == "blue cube");
                o.x -= 400;
                for (var o of game.objects.objects.filter(e => e.id == "blue cube lead clue")) {
                    o.x -= 400;
                }
            }
        },
        {
            name: "stop blue cube",
            check: function () {
                if (game.level.triggers.tripped("blue cube")) return false;
                if (!game.level.triggers.tripped("illusion 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y > 300;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "blue cube pre clue");
                o.alpha = 1;
                o.decay = 0.1;
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                o.alpha = 1;
                o.decay = 0.1;
                for (var o of game.objects.objects.filter(e => e.id == "blue cube lead clue")) {
                    o.alpha = 1;
                    o.decay = 0.1;
                }
            }
        },
        {
            name: "blue cube pre clue",
            check: function () {
                if (game.level.triggers.tripped("stop blue cube repeat")) return false;
                if (game.level.triggers.tripped("stop blue cube")) return false;
                if (!game.level.triggers.tripped("illusion 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "blue cube pre clue");
                return player.x < o.x;
            },
            stop: function () {
                if (game.level.triggers.tripped("stop blue cube")) return true;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "blue cube pre clue");
                return player.x > o.x;
            },
            trip: function () {
                game.level.discoverBlueCube();
                game.background.effect.start("blue");
                var o = game.objects.objects.find(e => e.id == "blue cube pre clue");
                o.activated = true;
                for (var o of game.objects.objects.filter(e => e.id == "blue cube lead clue")) {
                    o.activated = true;
                }
            },
            untrip: function () {
                game.background.effect.end("blue");
                var o = game.objects.objects.find(e => e.id == "blue cube pre clue");
                o.activated = false;
                for (var o of game.objects.objects.filter(e => e.id == "blue cube lead clue")) {
                    o.activated = false;
                }
            }
        },
        {
            name: "blue cube",
            check: function () {
                if (game.level.triggers.tripped("hide blue cube block")) return false;
                if (game.level.triggers.tripped("stop blue cube")) return false;
                if (!game.level.triggers.tripped("illusion 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                return Math.abs(player.x + player.w / 2 - o.x) < 20 && player.y == 260 && game.input.downStart === 1;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y < 260;
            },
            trip: function () {
                game.background.effect.end("blue");
                var o = game.objects.objects.find(e => e.id == "blue cube cover");
                o.alpha = 1;
                o.decay = 0.1;
                o.collide = false;
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                o.activated = true;
                for (var o of game.objects.objects.filter(e => e.type == "player copy")) {
                    o.originalOffsetY = o.offsetY;
                }
                var player = game.objects.objects.find(e => e.type == "player");
                player.againstBottom.current = false;
                player.againstBottom.last = 1000;
                player.againstBottom.time = 0;
            },
            untrip: function () {
                var o = game.objects.objects.find(e => e.id == "blue cube cover");
                o.alpha = 0;
                o.decay = -0.1;
                o.collide = true;
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                o.activated = false;
                for (var o of game.objects.objects.filter(e => e.type == "player copy")) {
                    o.offsetY = o.originalOffsetY;
                }
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                for (var o of game.objects.objects.filter(e => e.type == "player copy")) {
                    o.offsetY = o.originalOffsetY - (player.y - 260);
                }
            }
        },
        {
            name: "stop blue cube repeat",
            check: function () {
                return game.level.triggers.tripped("blue cube");
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "blue cube pre clue");
                o.alpha = 0;
                o.decay = 0;
                for (var o of game.objects.objects.filter(e => e.id == "blue cube lead clue")) {
                    o.alpha = 1;
                    o.decay = 0.1;
                }
            }
        },
        {
            name: "hide blue cube block",
            check: function () {
                if (!game.level.triggers.tripped("stop blue cube repeat")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                var dist = Math.abs(player.x + player.w / 2 - o.x);
                if (dist <= 800) return false;
                return true;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "blue cube clue");
                o.alpha = 0;
                o.decay = 0;
                for (var o of game.objects.objects.filter(e => e.id == "blue cube lead clue")) {
                    o.alpha = Math.min(o.alpha, 1);
                    o.decay = 0.1;
                }
            }
        },
        {
            name: "delete lower copies",
            check: function () {
                if (!game.level.triggers.tripped("illusion 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y > 1260;
            },
            trip: function () {
                for (var o of game.objects.objects) {
                    if (o.type != "player copy") continue;
                    if (o.offsetY > 0) o.delete = true;
                }
            }
        },
        {
            name: "fall in long pipes",
            check: function () {
                if (!game.level.triggers.tripped("illusion 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y > 1480;
            },
            trip: function () {
                for (var o of game.objects.objects) {
                    if (o.type != "player copy") continue;
                    o.originalOffsetY = o.offsetY;
                }
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                for (var o of game.objects.objects) {
                    if (o.type != "player copy") continue;
                    if (o.offsetX == 400) {
                        if (o.offsetY == 0 && player.y > 3660) game.soundEffects.land();
                        o.offsetY = -Math.max(player.y - 3660, 0);
                        if (o.offsetY < -1000) o.delete = true;
                        continue;
                    }
                    if (o.offsetX == -400) {
                        if (o.offsetY == 0 && player.y > 5660) game.soundEffects.land();
                        o.offsetY = -Math.max(player.y - 5660, 0);
                        if (o.offsetY < -1000) o.delete = true;
                        continue;
                    }
                    if (o.offsetY < 0 || Math.abs(o.offsetX) > 400) {
                        var n = player.y - 1480;
                        o.offsetY = o.originalOffsetY - n / 3;
                        if (n > 600) o.delete = true;
                    }
                }
            }
        },
        {
            name: "gravity switch 1",
            check: function () {
                if (!game.level.triggers.tripped("fall in long pipes")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var rect = {
                    x: -4100,
                    y: 7500,
                    w: 200,
                    h: 200
                }
                if (!blocksColliding(player, rect)) return false;
                return player.x < -3900;
            },
            stop: function () {
                if (game.level.triggers.tripped("gravity switch 2")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var rect = {
                    x: -4100,
                    y: 7500,
                    w: 200,
                    h: 200
                }
                if (!blocksColliding(player, rect)) return false;
                return player.x > -3900;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 90;
                player.wallJumpDisabled = true;
                player.swapControls = {
                    left: "left",
                    right: "right",
                    top: "top",
                    bottom: "bottom"
                }
            },
            untrip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 0;
                player.swapControls = false;
            }
        },
        {
            name: "gravity switch 2",
            check: function () {
                if (!game.level.triggers.tripped("gravity switch 1")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var rect = {
                    x: -4500,
                    y: 7900,
                    w: 200,
                    h: 200
                }
                if (!blocksColliding(player, rect)) return false;
                return player.y > 7900;
            },
            stop: function () {
                if (game.level.triggers.tripped("gravity switch 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var rect = {
                    x: -4500,
                    y: 7900,
                    w: 200,
                    h: 200
                }
                if (!blocksColliding(player, rect)) return false;
                return player.y < 7900;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 0;
                player.swapControls = {
                    left: "right",
                    right: "left",
                    top: "bottom",
                    bottom: "top"
                }
            },
            untrip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 90;
                player.swapControls = {
                    left: "left",
                    right: "right",
                    top: "top",
                    bottom: "bottom"
                }
            }
        },
        {
            name: "gravity switch 3",
            check: function () {
                if (!game.level.triggers.tripped("gravity switch 2")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var rect = {
                    x: -5700,
                    y: 7900,
                    w: 200,
                    h: 200
                }
                if (!blocksColliding(player, rect)) return false;
                return player.x < -5600;
            },
            stop: function () {
                if (game.level.triggers.tripped("gravity switch 4")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var rect = {
                    x: -5700,
                    y: 7900,
                    w: 200,
                    h: 200
                }
                if (!blocksColliding(player, rect)) return false;
                return player.x > -5600;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 90;
            },
            untrip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 0;
            }
        },
        {
            name: "gravity switch 4",
            check: function () {
                if (!game.level.triggers.tripped("gravity switch 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var rect = {
                    x: -5700,
                    y: 6800,
                    w: 200,
                    h: 200
                }
                if (!blocksColliding(player, rect)) return false;
                return player.y < 7000;
            },
            stop: function () {
                if (game.level.triggers.tripped("gravity switch 5")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var rect = {
                    x: -5700,
                    y: 6800,
                    w: 200,
                    h: 200
                }
                if (!blocksColliding(player, rect)) return false;
                return player.y > 7000;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 180;
                for (var o of game.objects.objects.filter(e => e.id == "crossroad block 1")) {
                    o.alpha = 0;
                    o.collide = false;
                }
                for (var o of game.objects.objects.filter(e => e.id == "crossroad block 2")) {
                    o.alpha = 1;
                    o.collide = true;
                }
            },
            untrip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 270;
                for (var o of game.objects.objects.filter(e => e.id == "crossroad block 1")) {
                    o.alpha = 1;
                    o.collide = true;
                }
                for (var o of game.objects.objects.filter(e => e.id == "crossroad block 2")) {
                    o.alpha = 0;
                    o.collide = false;
                }
            }
        },
        {
            name: "gravity switch 5",
            check: function () {
                if (!game.level.triggers.tripped("gravity switch 4")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var rect = {
                    x: -5100,
                    y: 6800,
                    w: 200,
                    h: 200
                }
                if (!blocksColliding(player, rect)) return false;
                return player.x > -5100;
            },
            stop: function () {
                if (game.level.triggers.tripped("gravity switch 6")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var rect = {
                    x: -5100,
                    y: 6800,
                    w: 200,
                    h: 200
                }
                if (!blocksColliding(player, rect)) return false;
                return player.x < -5100;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 0;
                player.swapControls = false;
                game.level.playerControlDelay = 10000;
            },
            untrip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 180;
                player.swapControls = {
                    left: "right",
                    right: "left",
                    top: "bottom",
                    bottom: "top"
                }
            },
            passive: function () {
                if (game.level.triggers.tripped("teleport 6")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                player.x = player.x * 0.99 + -5013 * 0.01;
            }
        },
        {
            name: "gravity switch 6",
            check: function () {
                if (!game.level.triggers.tripped("gravity switch 5")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y > 8500;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.swapControls = {
                    left: "right",
                    right: "left",
                    top: "bottom",
                    bottom: "top"
                };
                game.level.playerControlDelay = 1000;
            },
            passive: function () {
                if (game.level.triggers.tripped("teleport 6")) return;
                var player = game.objects.objects.find(e => e.type == "player");
                var percent = Math.max(Math.min((player.y - 9500) / 3000, 1), 0);
                player.ymove -= (1 * percent) ** 2 * 1.7;
            }
        },
        {
            name: "whoosh",
            check: function () {
                if (!game.level.triggers.tripped("gravity switch 6")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                return player.y > 9500;
            },
            trip: function () {
                game.soundEffects.reverseWhoosh();
            }
        },
        {
            name: "teleport 6",
            check: function () {
                //return true;
                if (!game.level.triggers.tripped("gravity switch 6")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.ymove < 0;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.swapControls = false;
                player.updateAngle = 0;
                player.eyeAngleTarget = 0;
                player.eyeAngle = 0;
                player.positionHistory = [];
                player.emitParticles = true;
                player.wallJumpDisabled = false;
                player.x += 5000;
                player.y -= 10600;
                game.cam.x += 5000;
                game.cam.y -= 10600;
                game.cam.angle = 0;
                game.level.playerControlDelay = 0;
                for (var o of game.objects.objects) {
                    if (o.type == "player") continue;
                    if (o.t) {
                        o.alpha = 1;
                        if (o.noAlpha) o.alpha = 0;
                        o.collide = true;
                        if (o.noCollide) o.collide = false;
                    } else {
                        o.delete = true;
                    }
                }
                game.cam.y += 35;
                game.backgroundOffset.x *= -1;
                game.backgroundOffset.y *= -1;
                game.backgroundOffset.x += 210;
                game.backgroundOffset.y += 140;

                var player = game.objects.objects.find(e => e.type == "player");
                //game.level.playerFlightMode = true;
                //game.level.showWireframes = true;
                //player.x = 0;
                //player.x = -3100;
                //player.y = 0;
                //player.x = -1650;
                //player.y = -650;
                game.cam.viewportBoundary = false;
                game.cam.offset = { x: 0, y: 0 };
                /**/
            }
        },
        {
            name: "red cube",
            check: function () {
                if (!game.level.triggers.tripped("teleport 6")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 40) return false;
                if (!game.input.up || game.input.upStart > 10) return false;
                return true;
            },
            stop: function () {
                if (game.level.triggers.tripped("red cube teleport")) return true;
                if (!game.level.triggers.tripped("red cube platform 1")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                if (player.y < -3650) return true;
                return player.y > 400;
            },
            trip: function () {
                game.level.discoverRedCube();
                game.background.effect.start("red");
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.activated = true;
                var player = game.objects.objects.find(e => e.type == "player");
                player.ymove = -15;
                player.xmove = 0;
                //player.x = -440;
                //player.y = -720;

                for (var o of game.objects.objects.filter(e => e.type == "phase in out ornament" && e.cutout3 && e.id != "red cube extra lava")) {
                    o.lava = true;
                    o.previousPeriod = o.period;
                    o.period = { alwaysOn: true };
                }
                for (var o of game.objects.objects.filter(e => e.id == "red cube extra lava")) {
                    o.period = { alwaysOn: true };
                    o.alpha = 1;
                }

                var o = game.objects.objects.find(e => e.id == "red cube absent lava");
                o.period = { offTime: Infinity };
                var o = game.objects.objects.find(e => e.id == "red cube delayed lava");
                o.period = { offTime: Infinity };

                for (var o of game.objects.objects.filter(e => e.id == "red cube platform")) {
                    o.period.offset = o.period.initialOffset - game.level.levelAnimationTime;
                    o.deactivated = false;
                    o.alpha = 1;
                }
                for (var o of game.objects.objects.filter(e => e.id == "red cube block")) {
                    o.alpha = 1;
                    o.collide = true;
                }
                for (var o of game.objects.objects.filter(e => e.id == "red cube extra hole")) {
                    o.period.offset = o.period.initialOffset - game.level.levelAnimationTime;
                    o.deactivated = false;
                }
                var o = game.objects.objects.find(e => e.id == "wall");
                o.alpha = 0;
                o.collide = false;
                var o = game.objects.objects.find(e => e.id == "red cube clue 2");
                o.alpha = 1;
                var o = game.objects.objects.find(e => e.id == "red cube");
                o.alpha = 1;
                game.cam.followX = 0.01;
                game.cam.followY = 0.01;
            },
            untrip: function () {
                game.background.effect.end("red");
                var o = game.objects.objects.find(e => e.id == "red cube clue");
                o.activated = false;

                for (var o of game.objects.objects.filter(e => e.type == "phase in out ornament" && e.cutout3 && e.id != "red cube extra lava")) {
                    o.lava = false;
                    o.period = o.previousPeriod;
                }
                for (var o of game.objects.objects.filter(e => e.id == "red cube extra lava")) {
                    o.period = { alwaysOff: true };
                    o.alpha = 0;
                }
                for (var o of game.objects.objects.filter(e => e.id == "red cube platform")) {
                    o.deactivated = true;
                    o.animation.current = false;
                    o.collide = false;
                    o.alpha = 0;
                }
                for (var o of game.objects.objects.filter(e => e.id == "red cube block")) {
                    o.alpha = 0;
                    o.collide = false;
                }
                for (var o of game.objects.objects.filter(e => e.id == "red cube extra hole")) {
                    o.deactivated = true;
                    o.animation.current = false;
                }
                var o = game.objects.objects.find(e => e.id == "wall");
                o.alpha = 1;
                o.collide = true;
                var o = game.objects.objects.find(e => e.id == "red cube clue 2");
                o.alpha = 0;
                var o = game.objects.objects.find(e => e.id == "red cube");
                o.alpha = 0;

                var player = game.objects.objects.find(e => e.type == "player");
                if (player && player.y > 400) {
                    game.cam.followX = 0.1;
                    game.cam.followY = 0.1;
                }
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                var hitbox = [
                    { x: player.x + player.w * 0.25, y: player.y + player.h * 0.25 },
                    { x: player.x + player.w * 0.75, y: player.y + player.h * 0.25 },
                    { x: player.x + player.w * 0.75, y: player.y + player.h * 0.75 },
                    { x: player.x + player.w * 0.25, y: player.y + player.h * 0.75 }
                ];
                var hitboxLines = [
                    { p1: hitbox[0], p2: hitbox[1] },
                    { p1: hitbox[1], p2: hitbox[2] },
                    { p1: hitbox[2], p2: hitbox[3] },
                    { p1: hitbox[3], p2: hitbox[0] }
                ]
                var collidingPoints = [];
                for (var o of game.objects.objects.filter(e => e.type == "phase in out ornament" && e.lava)) {
                    if (game.level.playerInvincible) break;
                    var s = easeInOut(o.animation.a / o.animation.max);
                    if (s == 0) continue;
                    var maxSize = s * distTo(0, 0, o.w / 2, o.h / 2);
                    var cx = o.x + o.w / 2;
                    var cy = o.y + o.h / 2;
                    var squareHitbox = { x: cx - maxSize, y: cy - maxSize, w: maxSize * 2, h: maxSize * 2 };
                    if (!blocksColliding(player, squareHitbox)) continue;
                    var turn = o.turn || 90;
                    var turnAngle = turn * s;
                    var speed = o.speed || 1;
                    var angle = o.angle || 0;
                    if (!o.animation.current) turnAngle = turn + turn * (1 - s);
                    var angle = (angle + speed * game.level.levelAnimationTime + turnAngle);
                    var hitbox2 = [
                        { x: -o.w / 2, y: -o.h / 2 },
                        { x: o.w / 2, y: -o.h / 2 },
                        { x: o.w / 2, y: o.h / 2 },
                        { x: -o.w / 2, y: o.h / 2 }
                    ];
                    hitbox2 = hitbox2.map(e => {
                        var r = rotate(0, 0, e.x, e.y, -angle);
                        return { x: r.x + cx, y: r.y + cy };
                    });
                    var hitbox2Lines = [
                        { p1: hitbox2[0], p2: hitbox2[1] },
                        { p1: hitbox2[1], p2: hitbox2[2] },
                        { p1: hitbox2[2], p2: hitbox2[3] },
                        { p1: hitbox2[3], p2: hitbox2[0] }
                    ]
                    for (var n = 0; n < hitbox.length; n++) {
                        if (pointInPolygon(hitbox[n].x, hitbox[n].y, hitbox2Lines)) {
                            collidingPoints.push(hitbox[n]);
                            break;
                        }
                    }
                    for (var n = 0; n < hitbox2.length; n++) {
                        if (pointInPolygon(hitbox2[n].x, hitbox2[n].y, hitboxLines)) {
                            collidingPoints.push(hitbox2[n]);
                            break;
                        }
                    }
                }
                var playerCollidingWithLava = collidingPoints.length > 0;
                var playerInSafeZone = true;
                if (playerCollidingWithLava) {
                    for (var n = 0; n < collidingPoints.length; n++) {
                        var point = collidingPoints[n];
                        var pointSafe = false;
                        for (var o of game.objects.objects.filter(e => e.type == "phase in out ornament" && e.id == "red cube extra hole")) {
                            var s = easeInOut(o.animation.a / o.animation.max);
                            if (s == 0) continue;
                            var maxSize = s * distTo(0, 0, o.w / 2, o.h / 2);
                            var cx = o.x + o.w / 2;
                            var cy = o.y + o.h / 2;
                            var squareHitbox = { x: cx - maxSize, y: cy - maxSize, w: maxSize * 2, h: maxSize * 2 };
                            if (!blocksColliding(player, squareHitbox)) continue;
                            var turn = o.turn || 90;
                            var turnAngle = turn * s;
                            var speed = o.speed || 1;
                            var angle = o.angle || 0;
                            if (!o.animation.current) turnAngle = turn + turn * (1 - s);
                            var angle = (angle + speed * game.level.levelAnimationTime + turnAngle);
                            var hitbox2 = [
                                { x: -o.w / 2, y: -o.h / 2 },
                                { x: o.w / 2, y: -o.h / 2 },
                                { x: o.w / 2, y: o.h / 2 },
                                { x: -o.w / 2, y: o.h / 2 }
                            ];
                            hitbox2 = hitbox2.map(e => {
                                var r = rotate(0, 0, e.x, e.y, -angle);
                                return { x: r.x + cx, y: r.y + cy };
                            });
                            var hitbox2Lines = [
                                { p1: hitbox2[0], p2: hitbox2[1] },
                                { p1: hitbox2[1], p2: hitbox2[2] },
                                { p1: hitbox2[2], p2: hitbox2[3] },
                                { p1: hitbox2[3], p2: hitbox2[0] }
                            ]
                            if (!pointInPolygon(point.x, point.y, hitbox2Lines)) continue;
                            pointSafe = true;
                            break;
                        }
                        if (!pointSafe) {
                            playerInSafeZone = false;
                            break;
                        }
                    }
                }
                if (playerCollidingWithLava && !playerInSafeZone) {
                    game.soundEffects.death();
                    player.delete = true;
                }
                for (var o of game.objects.objects.filter(e => e.id == "red cube platform")) {
                    var p = o.animation.a / o.animation.max;
                    if (p > 0.6 || (o.animation.current && p > 0.2)) {
                        if (!o.collide && !blocksColliding(player, o)) {
                            o.collide = true;
                        }
                    } else {
                        o.collide = false;
                    }
                }
            }
        },
        {
            name: "red cube platform 1",
            check: function () {
                if (!game.level.triggers.tripped("red cube")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y < 220 - player.h;
            },
            stop: function () {
                return !game.level.triggers.tripped("red cube");
            },
            trip: function () {
                for (var o of game.objects.objects.filter(e => e.id == "red cube stable platform")) {
                    o.animation.current = true;
                    o.collide = true;
                }
            },
            untrip: function () {
                for (var o of game.objects.objects.filter(e => e.id == "red cube stable platform")) {
                    o.animation.current = false;
                    o.collide = false;
                }
            }
        },
        {
            name: "red cube delayed lava",
            check: function () {
                if (!game.level.triggers.tripped("red cube platform 1")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y === 180;
            },
            stop: function () {
                return !game.level.triggers.tripped("red cube");
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube delayed lava");
                o.period = { alwaysOn: true };
            }
        },
        {
            name: "finish red cube",
            check: function () {
                if (!game.level.triggers.tripped("red cube")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "red cube clue 2");
                var dist = distTo(o.x, o.y, player.x + player.w / 2, player.y + player.h / 2);
                if (dist > 40) return false;
                if (!game.input.up || game.input.upStart > 10) return false;
                return true;
            },
            stop: function () {
                return game.level.triggers.tripped("finish red cube 2");
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube clue 2");
                o.activated = true;
                game.soundEffects.redCubePreClue();
                var player = game.objects.objects.find(e => e.type == "player");
                player.ymove = -10;
                player.xmove = 0;
                game.cam.followY = 0.05;
                game.cam.followX = 0.05;

                //game.level.playerFlightMode = false;
            },
            passive: function () {
                game.level.playerControlDelay = 2;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                player.ymove -= 0.1;
                player.x = player.x * 0.99 + (-780 - 20) * 0.01;
                game.cam.followX += 0.005;
                game.cam.followX = Math.min(game.cam.followX, 1);
                game.cam.followY += 0.005;
                game.cam.followY = Math.min(game.cam.followY, 1);
            }
        },
        {
            name: "finish red cube 2",
            check: function () {
                if (!game.level.triggers.tripped("finish red cube")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.ymove > -1.5;
            },
            stop: function () {
                return game.level.triggers.tripped("red cube teleport");
            },
            trip: function () {
                game.background.effect.end("red");
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 180;
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                if (player.y > -2200) game.level.playerControlDelay = 2;
                if (player.y < -2300) player.eyeAngleTarget = 180;
                if (player.ymove > -2) player.ymove += 0.09;
                game.cam.followX += 0.005;
                game.cam.followX = Math.min(game.cam.followX, 1);
                game.cam.followY += 0.005;
                game.cam.followY = Math.min(game.cam.followY, 1);

                //if (player.y < -3500) frameRate = 10;
            }
        },
        {
            name: "red cube teleport",
            check: function () {
                if (!game.level.triggers.tripped("finish red cube 2")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y < -3700;
            },
            stop: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return true;
                return player.y === 520;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "red cube clue 2");
                o.activated = false;
                game.level.levelAnimationTime = 0;
                var player = game.objects.objects.find(e => e.type == "player");
                player.eyeAngle = 0;
                player.eyeAngleTarget = 0;
                player.updateAngle = 0;
                player.ymove = -player.ymove;
                player.xmove = -player.xmove;
                var offsetX = (-700) - player.x;
                var offsetY = (-1500) - player.y;
                player.x += offsetX;
                player.y += offsetY;
                game.cam.x += offsetX;
                game.cam.y += offsetY;
                for (var o of player.positionHistory) {
                    o.x += offsetX;
                    o.y += offsetY;
                    o.y = (player.y + player.h / 2) - (o.y - (player.y + player.h / 2));
                    o.x = (player.x + player.w / 2) - (o.x - (player.x + player.w / 2));
                }
                game.backgroundOffset.x += offsetX * 0.8;
                game.backgroundOffset.y += offsetY * 0.8;
            },
            untrip: function () {
                game.cam.followX = 0.1;
                game.cam.followY = 0.1;
            },
            passive: function () {
                var a = easeInOut(game.level.levelAnimationTime / 100);
                game.cam.angle = 180 * (1 - a);
            }
        },
        {
            name: "false bridge",
            check: function () {
                //return true;
                if (game.level.triggers.tripped("red cube")) return false;
                if (!game.level.triggers.tripped("teleport 6")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.x < -3100;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "hole in floor");
                o.animation.current = true;
                o.animation.a = 10;
                var player = game.objects.objects.find(e => e.type == "player");
                player.fallAnimation = 0;
            },
            passive: function () {
                if (game.level.triggers.tripped("fall on planet")) return;
                var player = game.objects.objects.find(e => e.type == "player");
                player.fallAnimation++;
                player.x = player.x * 0.9 + -3100 * 0.1;
                if (player.fallAnimation > 20) {
                    var o = game.objects.objects.find(e => e.id == "hole in floor 2");
                    o.animation.current = true;
                }
                if (player.fallAnimation > 26) {
                    var o = game.objects.objects.find(e => e.id == "false bridge");
                    o.collide = false;
                }
            }
        },
        {
            name: "falling on planet",
            check: function () {
                if (!game.level.triggers.tripped("false bridge") && !game.level.triggers.tripped("shortcut teleport")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y > 1000;
            },
            trip: function () {
                for (var n = 1; n < 4; n++) {
                    var o = { type: "player copy" };
                    o.rotate = { x: -3100, y: 2300, angle: n * 90 };
                    game.objects.objects.splice(game.objects.objects.length - 4, 0, o);
                }
            }
        },
        {
            name: "fall on planet",
            check: function () {
                if (game.level.triggers.tripped("shortcut teleport")) return true;
                if (!game.level.triggers.tripped("false bridge")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.y > 1900;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.wallJumpDisabled = true;
                for (var o of game.objects.objects.filter(e => e.type == "phase in out ornament" || e.cutoutEligible)) {
                    o.delete = true;
                }
            },
            passive: function () {
                if (game.level.triggers.tripped("layer 2")) return;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                var dist = distTo(player.x + player.w / 2, player.y + player.h / 2, -3100, 2300);
                if (dist < 450) return;
                var dir = dirTo(player.x + player.w / 2, player.y + player.h / 2, -3100, 2300);
                var move = distToMove(0.05, dir);
                player.xmove += move.x;
                player.ymove += move.y;
            }
        },
        {
            name: "open layer 2",
            check: function () {
                //return true;
                if (game.level.triggers.tripped("shortcut teleport")) return true;
                if (!game.level.triggers.tripped("fall on planet")) return false;
                return Math.abs(game.cam.angle) >= 315;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "planet layer 1");
                o.alpha = 1;
                o.decay = 0.1;
                o.collide = false;
            }
        },
        {
            name: "layer 2",
            check: function () {
                if (!game.level.triggers.tripped("open layer 2")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "planet layer 1");
                var rect = { x: o.x + 25, y: o.y + 25, w: o.w - 50, h: o.h - 50 };
                return blocksColliding(player, rect);
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.enteredLayer2Angle = game.cam.angle;
                for (var o of game.objects.objects.filter(e => e.id == "layer 1 border")) {
                    o.collide = false;
                    o.rotate = {
                        x: -3100,
                        y: 2300,
                        angle: 0,
                        scale: 1
                    }
                }
                var o = game.objects.objects.find(e => e.id == "gravity down");
                o.x += 100;
                o.w -= 200;
                o.h += 100;
                var o = game.objects.objects.find(e => e.id == "gravity up");
                o.x += 100;
                o.w -= 200;
                o.h += 100;
                o.y -= 100;
                var o = game.objects.objects.find(e => e.id == "gravity right");
                o.y += 100;
                o.h -= 200;
                o.w += 100;
                var o = game.objects.objects.find(e => e.id == "gravity left");
                o.y += 100;
                o.h -= 200;
                o.w += 100;
                o.x -= 100;
            },
            passive: function () {
                for (var o of game.objects.objects.filter(e => e.id == "layer 1 border")) {
                    o.rotate.angle += 0.1;
                    o.rotate.scale = o.rotate.scale * 0.99 + 2.5 * 0.01;
                }
                if (game.level.triggers.tripped("enter layer 3")) return;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return;
                var dist = distTo(player.x + player.w / 2, player.y + player.h / 2, -3100, 2300);
                if (dist < 310) return;
                var dir = dirTo(player.x + player.w / 2, player.y + player.h / 2, -3100, 2300);
                var move = distToMove(0.1, dir);
                player.xmove += move.x;
                player.ymove += move.y;
            }
        },
        {
            name: "open layer 3",
            check: function () {
                //return true;
                if (game.level.triggers.tripped("shortcut teleport")) return true;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return Math.abs(game.cam.angle - player.enteredLayer2Angle) >= 315;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "planet layer 2");
                o.alpha = 1;
                o.decay = 0.1;
                o.collide = false;
            }
        },
        {
            name: "layer 3",
            check: function () {
                if (!game.level.triggers.tripped("open layer 3")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "planet layer 2");
                var rect = { x: o.x + 25, y: o.y + 25, w: o.w - 50, h: o.h - 50 };
                return blocksColliding(player, rect);
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.enteredLayer3Angle = game.cam.angle;
                for (var o of game.objects.objects.filter(e => e.id == "layer 2 border")) {
                    o.collide = false;
                    o.rotate = {
                        x: -3100,
                        y: 2300,
                        angle: 0,
                        scale: 1
                    }
                }
                var o = game.objects.objects.find(e => e.id == "gravity down");
                o.x += 100;
                o.w -= 200;
                o.h += 100;
                var o = game.objects.objects.find(e => e.id == "gravity up");
                o.x += 100;
                o.w -= 200;
                o.h += 100;
                o.y -= 100;
                var o = game.objects.objects.find(e => e.id == "gravity right");
                o.y += 100;
                o.h -= 200;
                o.w += 100;
                var o = game.objects.objects.find(e => e.id == "gravity left");
                o.y += 100;
                o.h -= 200;
                o.w += 100;
                o.x -= 100;
            },
            passive: function () {
                for (var o of game.objects.objects.filter(e => e.id == "layer 2 border")) {
                    o.rotate.angle -= 0.05;
                    o.rotate.scale = o.rotate.scale * 0.99 + 2 * 0.01;
                }
                if (game.level.triggers.tripped("open layer 4")) return;
                var player = game.objects.objects.find(e => e.type == "player");
                var dist = distTo(player.x + player.w / 2, player.y + player.h / 2, -3100, 2300);
                if (dist < 170) return;
                var dir = dirTo(player.x + player.w / 2, player.y + player.h / 2, -3100, 2300);
                var move = distToMove(0.1, dir);
                player.xmove += move.x;
                player.ymove += move.y;
                player.xmove *= 1 - dist / (170 * 50);
                player.ymove *= 1 - dist / (170 * 50);
            }
        },
        {
            name: "open layer 4",
            check: function () {
                if (game.level.triggers.tripped("shortcut teleport")) return true;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return Math.abs(game.cam.angle - player.enteredLayer3Angle) >= 310;
            },
            trip: function () {
                var o = game.objects.objects.find(e => e.id == "planet layer 3");
                o.alpha = 1;
                o.decay = 0.1;
                o.collide = false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!game.level.triggers.tripped("shortcut teleport")) player.updatePlayer = false;
                player.eyeAngle = player.eyeAngleTarget;
            },
            passive: function () {
                if (game.level.triggers.tripped("shortcut teleport")) return;
                if (game.level.triggers.tripped("layer 4")) return;
                var player = game.objects.objects.find(e => e.type == "player");
                var angle = ((Math.floor((player.enteredLayer3Angle + 45) / 90) * 90) % 360 + 360) % 360;
                var point, point2;
                if (angle == 0) {
                    point = { x: -3100, y: 2160 };
                    point2 = { x: -3100, y: 2100 };
                } else if (angle == 180) {
                    point = { x: -3100, y: 2440 };
                    point2 = { x: -3100, y: 2500 };
                } else if (angle == 270) {
                    point = { x: -2960, y: 2300 };
                    point2 = { x: -2900, y: 2300 };
                } else if (angle == 90) {
                    point = { x: -3240, y: 2300 };
                    point2 = { x: -3300, y: 2300 };
                }
                var dist = distTo(player.x + player.w / 2, player.y + player.h / 2, point.x, point.y);
                var dist2 = distTo(player.x + player.w / 2, player.y + player.h / 2, point2.x, point2.y);
                if (dist < 10 || dist2 < dist) {
                    player.goUp = true;
                }
                if (dist2 < 10 && player.goUp) {
                    player.layer4 = true;
                }
                if (player.goUp) {
                    var dir = dirTo(player.x + player.w / 2, player.y + player.h / 2, point2.x, point2.y);
                } else {
                    var dir = dirTo(player.x + player.w / 2, player.y + player.h / 2, point.x, point.y);
                }
                var move = distToMove(0.2, dir);
                player.xmove += move.x;
                player.ymove += move.y;
                player.xmove *= 0.85;
                player.ymove *= 0.85;
                player.x += player.xmove;
                player.y += player.ymove;
            }
        },
        {
            name: "layer 4 sound effect",
            check: function () {
                if (!game.level.triggers.tripped("layer 4")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.animation > 75;
            },
            trip: function () {
                if (!game.level.triggers.tripped("shortcut")) {
                    game.soundEffects.finish();
                } else {
                    if (game.level.triggers.tripped("ultra shortcut")) {
                        game.soundEffects.ultraFinish();
                    } else {
                        game.soundEffects.finishShortcut();
                    }
                }
            }
        },
        {
            name: "layer 4",
            check: function () {
                if (game.level.triggers.tripped("shortcut teleport")) return true;
                if (!game.level.triggers.tripped("open layer 4")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.layer4;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.originX = player.x;
                player.originY = player.y;
                player.animation = 0;
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (game.level.triggers.tripped("shortcut teleport")) {
                    if (game.level.triggers.tripped("explosion")) return;
                    if (!player) return;
                    var dist = distTo(player.x + player.w / 2, player.y + player.h / 2, -3100, 2300);
                    if (dist < 500) {
                        player.ymove *= 0.98;
                    }
                    if (dist < 100) {
                        game.level.playerControlDelay = 1;
                        player.updateMovement = false;
                        var speed = distTo(0, 0, player.xmove, player.ymove);
                        var dir = dirTo(player.x + player.w / 2, player.y + player.h / 2, -3100, 2300);
                        var maxSpeed = 0.1 + dist / 100 * 2.9;
                        var move = distToMove(Math.min(speed, maxSpeed, dist), dir);
                        player.x += move.x;
                        player.y += move.y;
                        if (dist < maxSpeed || dist < speed) {
                            player.x = -3100 - player.w / 2;
                            player.y = 2300 - player.h / 2;
                            player.xmove = 0;
                            player.ymove = 0;
                            player.animation = 140;
                        }
                    }
                    return;
                }
                if (player.animation == 100) {
                    for (var o of game.objects.objects.filter(e => e.id == "layer 3 border")) {
                        o.collide = false;
                        o.rotate = {
                            x: -3100,
                            y: 2300,
                            angle: 0,
                            scale: 1
                        }
                    }
                }
                if (player.animation > 100) {
                    for (var o of game.objects.objects.filter(e => e.id == "layer 3 border")) {
                        o.rotate.angle += 0.15;
                        o.rotate.scale = o.rotate.scale * 0.99 + 1.9 * 0.01;
                    }
                }
                if (game.level.triggers.tripped("explosion")) return;
                player.animation++;
                var a = easeInOut((player.animation - 60) / 160) * 2.4 - (Math.min((player.animation / 140), 1) ** 0.8) * 0.2;
                player.x = player.originX * (1 - a) + -3120 * a;
                player.y = player.originY * (1 - a) + 2280 * a;
            }
        },
        {
            name: "explosion",
            check: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                return player.animation == 140;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.x = -3120;
                player.y = 2280;
                player.explodeAnimation = 0;
                for (var o of game.objects.objects.filter(e => e.type == "player copy")) o.onlyDrawTrail = true;
            },
            passive: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.x = -3100 - player.w / 2;
                player.y = 2300 - player.h / 2;
                player.explodeAnimation++;
                if (game.level.triggers.tripped("ultra shortcut")) player.explodeAnimation++;
                if (player.explodeAnimation % 4 == 0) game.particles.createEffect("player explode");
                game.cam.screenshake = Math.min(player.explodeAnimation / 50, 8) + 2;
                if (player.explodeAnimation > 500) {
                    if (game.level.triggers.tripped("shortcut")) {
                        game.soundEffects.shortcutCompleted();
                        if (game.level.triggers.tripped("ultra shortcut")) {
                            game.level.takeUltraShortcut();
                        } else {
                            game.level.takeShortcut();
                        }
                    }
                    saveData.levelsBeaten = 10;
                    updateSaveData();
                    menu.resetCreditsScreen();
                    menu.creditsScreen = true;
                    menu.levelSelectAnimations = [];
                    game.ui.alerts.shortenAlerts();
                }
            }
        },
        {
            name: "gravity down",
            check: function () {
                if (!game.level.triggers.tripped("fall on planet")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "gravity down");
                return blocksColliding(player, o);
            },
            stop: function () {
                return true;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 0;
                player.eyeAngleTarget = 0;
                player.swapControls = {
                    left: "left",
                    right: "right",
                    top: "top",
                    bottom: "bottom"
                };
            }
        },
        {
            name: "gravity left",
            check: function () {
                if (!game.level.triggers.tripped("fall on planet")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "gravity left");
                return blocksColliding(player, o);
            },
            stop: function () {
                return true;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 90;
                player.eyeAngleTarget = 90;
                player.swapControls = {
                    left: "left",
                    right: "right",
                    top: "top",
                    bottom: "bottom"
                };
            }
        },
        {
            name: "gravity up",
            check: function () {
                if (!game.level.triggers.tripped("fall on planet")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "gravity up");
                return blocksColliding(player, o);
            },
            stop: function () {
                return true;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 180;
                player.eyeAngleTarget = 180;
                player.swapControls = {
                    left: "left",
                    right: "right",
                    top: "top",
                    bottom: "bottom"
                };
            }
        },
        {
            name: "gravity right",
            check: function () {
                if (!game.level.triggers.tripped("fall on planet")) return false;
                var player = game.objects.objects.find(e => e.type == "player");
                if (!player) return false;
                var o = game.objects.objects.find(e => e.id == "gravity right");
                return blocksColliding(player, o);
            },
            stop: function () {
                return true;
            },
            trip: function () {
                var player = game.objects.objects.find(e => e.type == "player");
                player.updateAngle = 270;
                player.eyeAngleTarget = 270;
                player.swapControls = {
                    left: "left",
                    right: "right",
                    top: "top",
                    bottom: "bottom"
                };
            }
        }
    ],
    viewportBoundary: { x: -1000, y: -200, w: 1000, h: 0 },
    camFunction: function () {
        //game.level.playerInvincible = true;
        var player = game.objects.objects.find(e => e.type == "player");
        if (!player) return;
        if (game.level.triggers.tripped("shortcut teleport")) {
            if (game.level.triggers.tripped("explosion")) {
                game.cam.zoom = 1.3 + 0.4 * Math.min(player.explodeAnimation / 400, 1);
                return;
            }
            if (!player.shortcutTeleportTime) player.shortcutTeleportTime = 0;
            player.shortcutTeleportTime++;
            var percent = easeInOut(player.shortcutTeleportTime / 100 - 0.05);
            game.cam.x = game.cam.x * (1 - percent) - 3100 * percent;
            game.cam.y = (player.y + 87) * (1 - percent) + 2300 * percent;
            var dist = distTo(-3100, 2300, player.x + player.w / 2, player.y + player.h / 2);
            var a = easeInOut(1 - (dist - 10) / 190);
            game.cam.zoom = 1 - 0.3 * percent + a * 0.6;
            if (dist > 10) {
                var dir = -dirTo(-3100, 2300, player.x + player.w / 2, player.y + player.h / 2);
                var t = turn(game.cam.angle, dir);
                game.cam.angle += t / 20;
            }
            return;
        } else if (game.level.triggers.tripped("shortcut")) {
            return;
        } else if (game.level.triggers.tripped("explosion")) {
            game.cam.x = -3100;
            game.cam.y = 2300;
            game.cam.zoom = 1.3 + 0.4 * Math.min(player.explodeAnimation / 400, 1);
            return;
        } else if (game.level.triggers.tripped("layer 4")) {
            game.cam.x = -3100;
            game.cam.y = 2300;
            var dist = distTo(-3100, 2300, player.x + player.w / 2, player.y + player.h / 2);
            game.cam.zoom = 0.7 + 0.6 * (1 - Math.min(Math.max(dist / 100, 0), 1));
            return;
        } else if (game.level.triggers.tripped("fall on planet")) {
            game.cam.x = -3100;
            game.cam.y = 2300;
            var dir = -dirTo(-3100, 2300, player.x + player.w / 2, player.y + player.h / 2);
            var t = turn(game.cam.angle, dir);
            game.cam.angle += t / 20;
            game.cam.zoom = 0.7;
            return;
        } else if (game.level.triggers.tripped("falling on planet")) {
            var percent = ((player.y - 1000) / 900) ** 8;
            game.cam.x = game.cam.x * (1 - percent) - 3100 * percent;
            game.cam.y = game.cam.y * (1 - percent) + 2300 * percent;
            game.cam.zoom = 1 - 0.3 * easeInOut((player.y - 1200) / 900);
            return;
        } else if (game.level.triggers.tripped("teleport 6") || game.level.triggers.tripped("shortcut teleport")) {
            game.cam.angle = 0;
            return;
        }
        if (game.level.triggers.tripped("gravity switch 6")) {
            var percent = easeInOut((player.y - 9300) / 1400);
            game.cam.angle = game.cam.angle * (1 - percent) + (-360 + 180 * easeInOut((player.y - 9300) / 1400)) * percent;
            player.eyeAngleTarget = -360 + 180 * easeInOut((player.y - 9300) / 1400);
        } else if (game.level.triggers.tripped("gravity switch 5")) {
            game.cam.angle = game.cam.angle * 0.98 + (-360) * 0.02;
        } else if (game.level.triggers.tripped("gravity switch 4")) {
            game.cam.angle = game.cam.angle * 0.98 + (-(player.x + 5700) * 0.06 - 300) * 0.02;
        } else if (game.level.triggers.tripped("gravity switch 3")) {
            game.cam.angle = game.cam.angle * 0.98 + ((player.y - 8060) * 0.08 - 215) * 0.02;
        } else if (game.level.triggers.tripped("gravity switch 2")) {
            game.cam.angle = game.cam.angle * 0.98 + ((player.x + 4500) * 0.06 - 150) * 0.02;
        } else if (game.level.triggers.tripped("gravity switch 2")) {
            game.cam.angle = game.cam.angle * 0.98 + ((player.x + 4500) * 0.06 - 150) * 0.02;
        } else if (game.level.triggers.tripped("gravity switch 1") && player.x < -4100) {
            game.cam.angle = game.cam.angle * 0.98 + ((player.x + 4100) * 0.04 - (player.y - 6880) * 0.06 - 70) * 0.02;
        } else if (game.level.triggers.tripped("gravity switch 1")) {
            game.cam.angle = game.cam.angle * 0.98 + ((player.y - 7550) * 0.04 - 45) * 0.02;
        } else if (game.level.triggers.tripped("fall in long pipes") && player.y > 7460) {
            if (game.cam.angle === 360) game.cam.angle = 0;
            game.cam.angle = game.cam.angle * 0.98 + ((Math.min(player.x, -2900) + 2900) * 0.04) * 0.02;
        }
        if (game.level.triggers.tripped("gravity switch 5")) {
            if (player.y > 7800) game.cam.zoom = game.cam.zoom * 0.98 + 1 * 0.02;
            game.cam.followX = 0.1;
            game.cam.followY = 0.1;
            return;
        } else if (game.level.triggers.tripped("gravity switch 1") || game.level.triggers.tripped("gravity switch 4")) {
            game.cam.zoom = game.cam.zoom * 0.99 + 1.4 * 0.01;
            game.cam.followX = 0.1;
            game.cam.followY = 0.1;
            return;
        } else if (game.level.triggers.tripped("fall in long pipes")) {
            var p = easeInOut((player.y - 1480) / 100) * 0.2;
            game.cam.x = game.cam.x * (1 - p) + (player.x + player.w / 2) * p;
            game.cam.y = game.cam.y * (1 - p) + (player.y + player.h / 2) * p;
            game.cam.zoom = game.cam.zoom * 0.99 + 1 * 0.01;
            return;
        } else if (game.level.triggers.tripped("illusion 3")) {
            game.cam.zoom = 1 + easeInBack((Math.max(player.y, -140) + 140) / 200) * 3;
            game.cam.angle = easeInOut((Math.max(player.y, -140) + 140) / 200) * 360;
            return;
        }
        var targetX;
        if (game.level.triggers.tripped("illusion 2")) {
            targetX = -1840 + player.x + 1940;
            if (player.y > -140 && player.x < -2700) {
                var n = Math.min(Math.max(player.y, -140) + 140, 100);
                player.x = player.x * 0.9 + (-2775 - n / 2) * 0.1;
                player.xmove *= 0.9;
                player.ymove *= 0.5 + easeInOut((Math.max(player.y, -140) + 140) / 100) * 0.3;
                player.ymove += easeInOut((Math.max(player.y, -140) + 140) / 100) * 0.5;
                var percent = easeInOut((Math.max(player.y, -140) + 140) / 25);
                game.cam.x = targetX * (1 - percent) + (player.x + player.w / 2) * percent;
                game.cam.y = game.cam.y * (1 - percent) + (player.y + player.h / 2) * percent;
                game.cam.zoom = 1 + easeInBack((Math.max(player.y, -140) + 140) / 200) * 3;
                game.cam.angle = easeInOut((Math.max(player.y, -140) + 140) / 200) * 360;
                return;
            }
        } else if (game.level.triggers.tripped("illusion 1")) {
            targetX = -1840 + player.x + 1940;
        } else if (game.level.triggers.tripped("teleport 5")) {
            targetX = -1740 - (Math.min(player.y, -240) + 740) / 5 + Math.min(player.x, -1940) + 1940;
        } else if (game.level.triggers.tripped("jump 1")) {
            targetX = -1620 + (player.y + 140) / 5;
        } else if (game.level.triggers.tripped("teleport 4")) {
            targetX = Math.min(game.cam.x, -1560 - (player.y + 740) / 10);
        } else if (game.level.triggers.tripped("teleport 3")) {
            targetX = -1328 - (Math.min(player.y, 0) + 740) / 5 + (Math.min(player.x, -1300) + 1250) / 10;
        } else if (game.level.triggers.tripped("teleport 2")) {
            targetX = -870 - (Math.min(player.y, 0) + 740) / 5 + (Math.min(player.x, -1300) + 1250) / 2;
        } else if (game.level.triggers.tripped("teleport 1")) {
            targetX = -540 - (player.x + 1080) / 2;
        } else {
            targetX = player.x / 2;
        }
        game.cam.x = Math.min(0, targetX);
    },
    levelComplete: function () {
        return false;
    },
    camOffset: {
        x: 0,
        y: -200
    },
    camStartingPosition: {
        x: 0,
        y: -200
    },
    spawnPoint: {
        x: 300,
        y: 0
    },
    beforeManualRespawn: function () {
        if (game.level.triggers.tripped("red cube")) {
            var a = Math.min(Math.max((120 - this.playerRespawnTime) / 120, 0), 1);
            var p0 = easeInOut(a);
            game.cam.x = game.cam.x * (1 - p0) + -2780 * p0;
            game.cam.y = game.cam.y * (1 - p0) + 200 * p0;
            if (this.playerRespawnTime < 60) this.playerRespawnTime = 0;
        } else {
            if (this.playerRespawnTime == 199 && game.level.triggers.tripped("shortcut teleport")) {
                game.cam.x += 1860;
                game.cam.y -= 5465;
                game.cam.y -= 35;
                game.backgroundOffset.x -= -80;
                game.backgroundOffset.y -= 200;
                for (let particle of game.particles.objects) {
                    particle.x += 1860;
                    particle.y -= 5465;
                    particle.y -= 35;
                }
                for (let o of game.objects.objects.filter(e => e.id && e.id.includes("layer"))) {
                    o.x += 1860;
                    o.y -= 5465;
                    o.y -= 35;
                    if(o.rotate) {
                        o.rotate.x += 1860;
                        o.rotate.y -= 5465;
                        o.rotate.y -= 35;
                    }
                }
                let o = game.objects.objects.find(e => e.id == "wall");
                o.alpha = 0;
            }
            var a = Math.min(Math.max((120 - this.playerRespawnTime) / 120, 0), 1);
            var p0 = easeInOut(a);
            game.cam.x = game.cam.x * (1 - p0) + 0 * p0;
            game.cam.y = game.cam.y * (1 - p0) - 200 * p0;
            game.cam.zoom = game.cam.zoom * (1 - p0) + 1 * p0;
            game.cam.angle = game.cam.angle * (1 - p0);
            game.backgroundOffset.x = game.backgroundOffset.x * (1 - p0);
            game.backgroundOffset.y = game.backgroundOffset.y * (1 - p0);
        }
    },
    manualRespawn: function () {
        if (game.level.triggers.tripped("red cube")) {
            this.playerDead = false;
            var player = this.createPlayer(-2800, 180);
            game.level.playerControlDelay = 20;
            player.spawnTime = 150;
            player.spawnAnimation = 20;
            game.objects.objects.push(player);
        } else {
            this.reload(9);
        }
    }
}