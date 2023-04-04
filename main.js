function preload() {
    trackA = loadSound("track1.mp3");
    trackB = loadSound("track2.mp3");
}

function setup() {
    canvas = createCanvas(540, 450);
    canvas.position(860, 270);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 540, 450);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        wristYL = results[0].pose.leftWrist.y;
        wristXL = results[0].pose.leftWrist.x;
        wristXR = results[0].pose.rightWrist.x;
        wristYR = results[0].pose.rightWrist.y;
        scoreL = results[0].pose.keypoints[9].score;
        scoreR = results[0].pose.keypoints[10].score;
    }
}