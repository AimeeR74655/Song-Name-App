dora_song="";
bday_song="";

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function preload()
{
    dora_song= "dora.mp3";
    bday_song= "bday.mp3";
}

