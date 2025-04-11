var generateFunctions = []
generateFunctions[0] = function() {
    var chunk = {};
    chunk.w = 1600;
    var objects = [];

    var o = {};
    o.x = 1200;
    o.y = Math.random()*800-500;
    o.type = "block";
    o.points = [{x:5,y:0},{x:195,y:0},{x:300,y:150},{x:195,y:300},{x:5,y:300},{x:-100,y:150}];
    objects.push(o);

    var coinType = "curve";
    if(Math.random()<0.5) coinType = "linear";
    if(Math.random()<0.1) coinType = "block";
    if(coinType=="curve") {
        var slope = (Math.floor(Math.random()*2)*2-1)*50;
        var curve = Math.random()*0.4+0.2;
        var change = -slope*curve;
        var y = Math.random()*700-350;
        for(var n=0;n<10;n++) {
            if(y>400) {
                y = 400;
                slope *= -1;
            }
            if(y<-400) {
                y = -400;
                slope *= -1;
            }
            objects.push({x:200+n*75,y:y,type:"coin",r:25});
            y += slope;
            slope += change;
        }
    } else if(coinType=="block") {
        var parentX = 200;
        var parentY = Math.random()*700-500;
        for(var x=0;x<5;x++) {
            for(var y=0;y<5;y++) {
                var o = {type:"coin",r:25};
                o.x = parentX+x*75;
                o.y = parentY+y*75;
                objects.push(o);
            }
        }
    } else if(coinType=="linear") {
        var slope = Math.random()*100-50;
        var y = Math.random()*700-350;
        for(var n=0;n<10;n++) {
            if(y>400) {
                y = 400;
                slope *= -1;
            }
            if(y<-400) {
                y = -400;
                slope *= -1;
            }
            objects.push({x:200+n*75,y:y,type:"coin",r:25});
            y += slope;
        }
    }

    chunk.objects = objects;
    return chunk;
}
generateFunctions[1] = function() {
    var chunk = {};
    chunk.w = 1000;
    var objects = [];
    var openingY = Math.random()*600-300;
    var openingHeight = Math.random()*400+50;

    var o = {};
    o.x = 500;
    o.y = -750;
    var height = 750+openingY-openingHeight/2;
    o.type = "block";
    o.points = [{x:0,y:0},{x:200,y:0},{x:150,y:height},{x:50,y:height}];
    objects.push(o);

    var o = {};
    o.x = 500;
    o.y = 750;
    var height = 750-(openingY+openingHeight/2);
    o.type = "block";
    o.points = [{x:0,y:0},{x:200,y:0},{x:150,y:-height},{x:50,y:-height}];
    objects.push(o);

    for(var n=0;n<7;n++) {
        objects.push({x:500+(n-2)*75,y:openingY,type:"coin",r:25});
    }

    chunk.objects = objects;
    return chunk;
}
generateFunctions[2] = function() {
    var chunk = {};
    chunk.w = 1000;
    var spots = [];
    for(var x=0;x<10;x++) {
        for(var y=0;y<13;y++) {
            spots.push({x:x*100,y:y*100-650});
        }
    }
    var objects = [];
    for(var n=0;n<30;n++) {
        var o = {};
        var spot = spots.splice(Math.floor(Math.random()*spots.length),1)[0];
        o.x = spot.x;
        o.y = spot.y;
        if(n<15) {
            o.points = [{x:0,y:0},{x:100,y:0},{x:100,y:100},{x:0,y:100}];
            if(o.y==-650) {
                o.points = [{x:0,y:-50},{x:100,y:-50},{x:100,y:100},{x:0,y:100}];
            }
            if(o.y==550) {
                o.points = [{x:0,y:0},{x:100,y:0},{x:100,y:150},{x:0,y:150}];
            }
            o.type = "block";
        } else {
            o.x += 50;
            o.y += 50;
            o.r = 25;
            o.type = "coin";
        }
        objects.push(o);
    }
    chunk.objects = objects;
    return chunk;
}
generateFunctions[3] = function() {
    var chunk = {};
    chunk.w = 2000;
    var objects = [];
    var topWall = {};
    topWall.y = -750;
    topWall.x = 0;
    topWall.type = "block";
    var bottomWall = {};
    bottomWall.y = 750;
    bottomWall.x = 0;
    bottomWall.type = "block";
    var y = Math.random()*800-400;
    var height = Math.random()*50+75;
    topWall.points = [{x:0,y:0},{x:300,y:y-height/2}];
    bottomWall.points = [{x:0,y:0},{x:300,y:y+height/2}];
    for(var x=400;x<1700;x+=100) {
        y += Math.random()*300-150;
        height += Math.random()*100-50;
        height = Math.max(height,75);
        y = Math.max(y,-650);
        y = Math.min(y,650);
        topWall.points.push({x:x,y:y+750-height});
        bottomWall.points.push({x:x,y:y-750+height});
        var o = {x:x,y:y,type:"coin",r:25};
        objects.push(o);
    }
    topWall.points.push({x:2000,y:0});
    bottomWall.points.push({x:2000,y:0});
    
    objects.push(topWall);
    objects.push(bottomWall);
    chunk.objects = objects;
    return chunk;
}