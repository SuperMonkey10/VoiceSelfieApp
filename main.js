var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function Start(){
    document.getElementById("speech").innerHTML="";
    recognition.start()
}
recognition.onresult=function(event){

    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("speech").innerHTML=content;
    
    if (content=="take my selfie")
     {
        speak();
        console.log("taking selfie");
        
    }

}

function speak()
{
    var synth= window.speechSynthesis;
    var speakdata="taking your selfie in 5 seconds"
    var utterthis= new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        takesnapshot();
        save();
    },5000)
}

Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("camera")

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='image' src="+data_uri+">"

    })
}

function save(){
    link= document.getElementById("link");
    image= document.getElementById("image").src;
    link.href=image;
    link.click()
}















