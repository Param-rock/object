video = "";
status = "";
objects = [];

function preload()
{
    video = createVideo("video.mp4");
    video.hide();
}

function setup()
{
    canvas = createCanvas(480,300);
    canvas.center();
}

function draw()
{
    image(video, 0, 0, 480, 300);
    if(status = "")
    {
        objectDetector.detect(video, gotResutl);
        for(i = 0; i < objects.length; i ++ )
        {
            document.getElementById("status").innerHTML = "status : objects detected";
            document.getElementById("number_of_objects").innerHTML = "number of objects detected are : " + objects.length;

            fill("#FF0000");
            percent = floor(object[i].confidence * 100);
            noFill();
            stroke('#FF0000');
            rect(objects [i].x, objects [i].y, objects[i].width, objects[i].height);
            
        }
    }
}

function gotResutl(error, results)
{
    if(error)
    {
        console.log(error)
    }else{
     console.log(results);
     objects = results;
    }
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded());
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("model is Loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}