noseX=0;
noseY=0;
difference=0;
rightWristX=0
leftWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);

    canvas=createCanvas(550,500);
    canvas.position(560, 150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',  gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Intialized');
}


function gotPoses(results)
{
    if(results.length>0)
    {

        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;


        leftWristX=results[0].pose.leftWrist.x;
        righttWristY=results[0].pose.rightWrist.y; 
        difference=floor(leftWristX-rightWristX);


    }
}

function draw(){
    background('#ffffff');

    document.getElementById("font_size").innerHTML="Font size of the text will be:"+difference +"px";
    textSize(difference);
    fill('red');
   text('Star', 50,400);

}