const sketchSharc = function (p) {
    p.setup = function () {
        p.createCanvas(400, 400);
    }

    p.draw = function () {
        p.background(0, 100, 255);
        p.noStroke();
        //head
        //blue
        p.fill(100, 200, 255)
        p.ellipse(200, 400, 300, 600);
        //white
        p.fill(255, 255, 255)
        p.ellipse(200, 500, 280, 500);
        //pink mouth
        p.fill(250, 100, 200)
        p.ellipse(200, 520, 250, 400);
        //white chin
        p.fill(255, 255, 255)
        p.ellipse(200, 560, 340, 400);

        //eyes
        p.push();
        p.translate(90, 280);
        p.rotate(10);
        drawEye('left');
        p.pop();

        p.push();
        p.translate(310, 280);
        p.rotate(-10);
        drawEye('right');
        p.pop();

        //teef
        //outer teef
        p.fill(255, 255, 255)
        p.triangle(120, 356, 140, 340, 140, 370);
        p.triangle(280, 356, 260, 340, 260, 370);
        //middle teef
        p.triangle(144, 340, 164, 328, 162, 360);
        p.triangle(256, 340, 236, 328, 238, 360);
        //inner teef
        p.triangle(170, 326, 194, 316, 188, 346);
        p.triangle(230, 326, 206, 316, 212, 346);

    }

    function drawEye(dir) {
        if (dir = 'left') {
            x = 4;
        }
        if (dir = 'right') {
            x = -4;
        }
        p.fill(150, 75, 0);
        p.ellipse(0, 0, 30, 40);
        p.fill(0, 0, 0);
        p.ellipse(0, 0, 20, 30);
        p.fill(255, 255, 255);
        p.ellipse(0, x, 10);
    }




};



new p5(sketchSharc, "sketchSharc");