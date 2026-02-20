function setup() {
    createCanvas(400, 400);

}

function draw() {
    background(0, 100, 255);
    noStroke();
    //head
    //blue
    fill(100, 200, 255)
    ellipse(200, 400, 300, 600);
    //white
    fill(255, 255, 255)
    ellipse(200, 500, 280, 500);
    //pink mouth
    fill(250, 100, 200)
    ellipse(200, 520, 250, 400);
    //white chin
    fill(255, 255, 255)
    ellipse(200, 560, 340, 400);

    //eyes
    push();
    translate(90, 280);
    rotate(10);
    drawEye('left');
    pop();

    push();
    translate(310, 280);
    rotate(-10);
    drawEye('right');
    pop();

    //teef
    fill(255, 255, 255)
    //outer teef
    triangle(120, 356, 140, 340, 140, 370);
    triangle(280, 356, 260, 340, 260, 370);
    //middle teef
    triangle(144, 340, 164, 328, 162, 360);
    triangle(256, 340, 236, 328, 238, 360);
    //inner teef
    triangle(170, 326, 194, 316, 188, 346);
    triangle(230, 326, 206, 316, 212, 346);


    function drawEye(dir) {
        if (dir = 'left') {
            x = 4;
        }
        if (dir = 'right') {
            x = -4;
        }
        fill(150, 75, 0);
        ellipse(0, 0, 30, 40);
        fill(0, 0, 0);
        ellipse(0, 0, 20, 30);
        fill(255, 255, 255);
        ellipse(0, x, 10);
    }

}