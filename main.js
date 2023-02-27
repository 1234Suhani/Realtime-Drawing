var noseX=0;
var noseY=0;
var differ=0;
var left_w=0;
var right_w=0;

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    canvas.position(800,100);

    video=createCapture(VIDEO);
    video.size(600,500);
    video.position(90,100)

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#FFEBCD');
    fill("green");
    stroke("green");
    square(noseX, noseY, differ);
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function gotPoses(results){
   if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    left_w=results[0].pose.leftWrist.x;
    right_w=results[0].pose.rightWrist.y;
    console.log(noseX, noseY, left_w, right_w, differ);
    differ=left_w-right_w;

    
}
}

