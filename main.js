var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


}
setTimeout(function)
{
    img_id="selfie1";
    take_snapshot();
    speak_data="Taking your  next Selfie in 3 seconds"
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    } 
 function take take_snapshot()
 {
    console.log(img_id);

    webcam.snap( function (data_uri) {

    }
 }   