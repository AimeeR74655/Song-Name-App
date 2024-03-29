dora_song="";
bday_song="";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

scoreLeftWrist=0;
scoreRightWrist=0;

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet =  ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized");
}

function draw()
{
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");

  
    if(scoreLeftWrist>0.2)
    {
    circle(leftWristX,leftWristY,20);
    bday_song.isPlaying();
    dora_song.stop();
    console.log("Birthday song is now playing")
    }
    if(scoreRightWrist>0.2)
    {
    circle(rightWristX, rightWristY,20);
    dora_song.isPlaying();
    bday_song.stop();
    console.log("Dora song is now playing")

    }
}

function preload()
{
    dora_song= loadSound("dora.mp3");
    bday_song= loadSound("bday.mp3");
}

function gotPoses(results)
{
    if(results.length > 0 )
    { 
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("rightWristX = " + scoreRightWrist + "scorelightWrist = " + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        righttWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + righttWristY);
    }

}