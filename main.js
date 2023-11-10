noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup() {
    console.log("setup function is working")
    video = createCapture(VIDEO);
    video.size(500,500);  

    canvas = createCanvas(550, 550);
    canvas.position(560,190);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function draw() {
    background('#ADD8E6');

        document.getElementById("name").innerHTML = "Width And Height of a Name will be = " + difference +"px";
        fill('#F90093');
        text("Aditya", 100,270);
     
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+noseX+" noseY ="+ noseY); 

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX +"rightWristX = "+ rightWristX + "difference = " + difference);
        textSize(difference);
 
    }
}