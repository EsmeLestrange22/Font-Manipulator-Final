nose_x = 0;
nose_y = 0;
difference = 0;
left_w_X = 0;
right_w_X = 0;
//no Y positions are required because wrists are only moving horizontally
function setup() {
    canvas = createCanvas(330, 280)
    canvas.position(200, 400)

    video = createCapture(VIDEO);
    video.size(350, 340);
    video.position(870, 350);

    //posenet starts here
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', getPoses)
}

function modelLoaded() {
    console.log("Posnet Loaded")
}
function getPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x= results[0].pose.nose.x;
        nose_y= results[0].pose.nose.y;
        left_w_X= results[0].pose.leftWrist.x;
        right_w_X= results[0].pose.rightWrist.x;
        difference= floor(left_w_X-right_w_X);
        console.log(difference);
        }

}

function draw() {
t= document.getElementById("t").value;
c= document.getElementById("c").value;
background("#94ded6");
    document.getElementById("size").innerHTML= difference + "px";
    
    stroke("black")
    textSize(difference)
    if(t==""){
        text("Your Text", nose_x , nose_y)
    }
    else{
text(t, nose_x, nose_y)
    }
    if(c==""){
        fill("red")
    }
    else{
fill(c)
    }
   
}