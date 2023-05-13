var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
var t=document.getElementById("textbox");

function b(){
    t.innerHTML="";
    recognition.start();
}

recognition.onresult=function(ans){
    console.log(ans);
    var p=ans.results[0][0].transcript;
    console.log(p);
    t.innerHTML=p;
    speak();
}


 function speak(){
    var s=window.speechSynthesis;
    speakdata=document.getElementById("textbox").innerHTML;
    amy=new SpeechSynthesisUtterance(speakdata);
    s.speak(amy);
    Webcam.attach( 'camera' );
setTimeout( function(){
    takeselfie();
    save();

},5000);
 }
 camera=document.getElementById("camera");

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
function takeselfie(){

    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('result').innerHTML ='<img id="cam" src="'+data_uri+'"/>';
    } );
 }
 function save(){
   z= document.getElementById('r');
   o=document.getElementById('cam').src;
   z.href=o;
   z.click();
 }