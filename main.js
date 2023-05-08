function preload () {

}

function setup () {
    canvas = createCanvas(640, 480);
    canvas.position(100, 300);
}

function draw () {
    stroke('black');
    circle(320, 240, 320, 320);
    circle(320, 240, 280, 280);
    stroke('brown');
    ellipse(320, 240, 120, 10);
    ellipse(320, 240, 10, 120);
    ellipse(260, 240, 10, 120);
    ellipse(380, 240, 10, 120);
    ellipse(320, 180, 120, 10);
    ellipse(320, 300, 120, 10);
    stroke('gold');
    rect(330, 250, 45, 45);
    rect(270, 250, 45, 45);
    rect(330, 190, 45, 45);
    rect(270, 190, 45, 45);
}