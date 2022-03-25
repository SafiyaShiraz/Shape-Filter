function preload()
{

}

function setup()
{
    canvas= createCanvas(600, 600);
    canvas.position(110, 350);
    video = createCapture(VIDEO);
    video.hide();

}

function draw()
{
    image(video, 0, 0, 600, 600);

    rect(400, 43, 55, 55);

rect(250, 204, 45, 55);


rect(330, 240, 55, 55, 50);



rect(450, 365, 55, 55, 50);

circle(330, 350, 50);

circle(302, 303, 50);

ellipse(536, 446, 55, 55);

ellipse(356, 446, 55, 55);

}

function take_snapshot()
{
save('YourImage.png');
}