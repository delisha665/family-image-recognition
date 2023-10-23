// https://teachablemachine.withgoogle.com/models/FB55vOiWC/
Webcam.set({
    width:300,
    height:300,
    image_format:".png",
    png_quality: 90
}) 
Webcam.attach("#camera");
function takePicture() {
    Webcam.snap(function (img_src) {
document.getElementById("picture").innerHTML +="<img id= 'image' src='" + img_src + "'>"
    }
    )
}

console.log("version number is " + ml5.version)
image_classify=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/FB55vOiWC/model.json" , model_loaded )
function model_loaded() {
    console.log("LOADED!")
}
function identify() {
    image=document.getElementById("image");
    image_classify.classify(image,gotResults);
    
}
function gotResults(error,results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        object=results[0].label;
        accuracy=results[0].confidence * 100;
        document.getElementById("object").innerHTML=object;
        document.getElementById("accuracy").innerHTML=accuracy.toFixed(2) + "%";
 
    }
}    