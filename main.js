function setup(){
    canvas = createCanvas(600, 500);
    canvas.position(560, 150);

    video= createCapture(VIDEO);
    video.size(300, 300);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose,gotPoses');

}

function modelLoaded(){
    console.log(" posenet is initialized");
}


function gotPoses(result)
{
    if(results.lenght> 0){
        console.log(results);
    }
}